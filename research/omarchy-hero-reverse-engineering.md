# Omarchy.org hero — reverse-engineering report & build spec

**Scope note (read first):** this document is pure research into *how a third-party site's hero background and floating music widget work*, done from the outside (DOM, computed CSS, network requests, and behavioral instrumentation in a live browser session — no access to Omarchy's private source repo). It exists only to inform an **original** implementation on `dario-cv-website`. Per the brief: nothing here is to be used to copy Omarchy's actual wording, logo, colors, or name. Where this report names real Omarchy assets (file paths, the literal word "Omarchy", track metadata) it is strictly for citation/traceability of the research, never for reuse in the rebuild.

Every finding below is tagged:
- **OBSERVED** — seen directly (DOM snapshot, computed style, network response, or a live instrumentation test with a reproducible result).
- **INFERRED** — not seen directly, but the only behavior consistent with everything that *was* observed.
- **UNKNOWN** — genuinely open; flagged with the exact next step to close it.

Investigation method used: live DOM/CSS introspection via `document.styleSheets`/`getComputedStyle`, `fetch()` of the page's own JS bundles, monkey-patching `CanvasRenderingContext2D.prototype` to count real draw calls over time, pixel-region hashing (`getImageData` byte-sum) sampled with and without real OS-level mouse hover, and reading the handful of same-origin script bundles that `document.scripts`/`astro-island` tags reference. No headless-browser screenshot diffing was available in this environment (Playwright install was blocked twice — no sandbox root privileges, and the binary CDN was network-allowlist-blocked) and no private/source-level access to Omarchy's repo was used or available.

---

## 1. Checklist — what we need to know to rebuild it

**Screens / visual states**
- [x] Cold load state (before any JS runs)
- [x] 0–0.9s: canvas fade-in
- [x] 0–5s: "etch hold" window
- [x] Steady state (>5s, indefinite): continuous background animation
- [ ] Reduced-motion state (confirmed to exist and disable animation; not visually inspected frame-by-frame)
- [x] Music widget: muted/idle visual state
- [ ] Music widget: unmuted/playing visual state (equalizer bars animating)

**Actions / triggers**
- [x] Page load (the only trigger confirmed to start anything)
- [x] Mouse hover over the hero region (tested — no detected effect)
- [ ] Window resize (not instrumented this round)
- [ ] Scroll (not instrumented this round)
- [ ] Theme switch (strongly implied to recolor the effect; not tested live)
- [ ] Click "sound on" on the music widget (not tested, to avoid repeatedly playing audio on a third-party site)
- [x] Hover/focus/drag the music widget's seek bar (CSS states observed in the DOM)

**Rules governing the effect**
- [x] Respects `prefers-reduced-motion: reduce` (disables both the canvas fade and, per the bootstrap script, the "etch" timer)
- [x] Runs on a `requestAnimationFrame`-driven loop, not a CSS animation, for the ongoing particle motion
- [x] The one-time fade-in *is* a CSS animation (separate mechanism from the continuous part)
- [ ] Exact per-pixel/per-cell drawing algorithm (color math, noise function, cell size) — not recovered from source

**Pointer interaction**
- [x] Canvas itself is `pointer-events: none` — it cannot receive hover/click directly
- [x] Hash-diff test across the sampled region found no behavioral difference between "mouse away" and "mouse hovering at the same screen coordinates" — same two recurring states in both conditions
- [ ] Not independently re-verified against page/window-level pointer listeners in source (none were found in the bundles that *were* readable, but the actual drawing module's source was not located — see §3, item E)

---

## 2. Feature-by-feature walkthrough

### 2.1 Hero canvas — structure
Where the user starts: any page load of `/`, viewport wide enough to show the full hero (hero markup does not appear to be mobile-conditional from what was inspected).

What exists on the page (OBSERVED, from a live DOM snapshot):
```html
<div aria-hidden="true" class="pointer-events-none absolute inset-0 select-none">
  <canvas aria-hidden="true" class="hero-canvas-in absolute inset-0 h-full w-full select-none"
          width="1434" height="1880" style="width: 717px; height: 940px;"></canvas>
</div>
```
- Backing resolution (1434×1880) is exactly 2× the CSS size (717×940) → **OBSERVED**: the canvas is sized at `devicePixelRatio` for crisp rendering on retina displays, standard `canvas.width = cssWidth * dpr` pattern.
- The canvas's own `pointer-events: none` (and its wrapping `div` repeating the same) means the canvas **cannot** itself be the pointer-event target. **INFERRED**: if the effect were pointer-reactive at all, the listener would have to live on `window`/`document` and compute hit-testing manually — our hash-diff test found no evidence this happens, but see item E below for why we couldn't fully close this out from source.

Separately, elsewhere in the hero, a second, **invisible** element exists purely to carry geometry + color information (OBSERVED):
```html
<div aria-hidden="true" data-hero-wordmark="true"
     class="w-[88%] max-w-4xl text-[color:var(--t-field-lit)] invisible"
     style="aspect-ratio:4131 / 950;
            background-color:currentColor;
            background-image:linear-gradient(to bottom,
              var(--t-field-crest) 0% 26.316%,
              var(--t-field-hover) 26.316% 36.842%,
              var(--t-field-lit) 36.842% 57.895%,
              var(--t-field-mid) 57.895% 73.684%,
              var(--t-field-dim) 73.684% 100%);
            mask-image:url(/brand/omarchy-wordmark.svg);
            mask-repeat:no-repeat; mask-size:100% 100%;
            -webkit-mask-image:url(/brand/omarchy-wordmark.svg);
            -webkit-mask-repeat:no-repeat; -webkit-mask-size:100% 100%">
</div>
```
Tailwind's `invisible` utility is a permanent, unconditional `visibility:hidden` baked into the element's class list — not something that gets toggled on later. **OBSERVED + INFERRED**: this div is never meant to be seen. Its only job is to exist in the layout so that script can read (a) its rendered box size/position (`getBoundingClientRect`) to know exactly where and how large the wordmark is for this viewport, and (b) its `mask-image` URL + 5-stop gradient (via `getComputedStyle`) to know the wordmark's exact vector shape and exact theme colors — without the drawing code needing to hardcode either. This is the same "CSS mask + gradient" trick Omarchy's own brand-download feature (`Base.astro` bundle, unrelated to the hero) uses to recolor its logo per theme, reusing the identical 5 token names (`--t-field-crest/hover/lit/mid/dim`) and the identical gradient-stop percentages (`0, 26.316, 36.842, 57.895, 73.684, 100`) — strong corroborating evidence this is a shared, deliberate design-token pattern across the site, not a coincidence.

The wordmark SVG is preloaded early (OBSERVED, from the document `<head>`):
```html
<link rel="preload" href="/brand/omarchy-wordmark.svg" as="image" type="image/svg+xml" crossorigin="anonymous">
```
**INFERRED**: this preload exists specifically so the shape is already in cache by the time the hero's drawing code needs to rasterize/sample it — not a generic SEO/perf preload unrelated to the effect.

### 2.2 Hero canvas — load sequence (0 → ~5s)
What changes, in order, from page load:

1. **t=0, before first paint** (OBSERVED, from an inline `<head>` script, reproduced verbatim only for citation):
   ```js
   (function(){try{
     if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
     var h = document.documentElement;
     h.classList.add('etch-pending');
     h.setAttribute('data-etch-held','');
     setTimeout(function(){ h.classList.remove('etch-pending') }, 5000);
   }catch(e){}})()
   ```
   So, unless the user has reduced motion on, `<html>` gets a class `etch-pending` and an attribute `data-etch-held` synchronously, before anything renders.

2. **0 → 0.9s**: the canvas element itself fades in via a plain CSS keyframe (OBSERVED):
   ```css
   .hero-canvas-in { animation: 0.9s ease-out 0s 1 normal both running canvas-warmup; }
   @keyframes canvas-warmup { 0% { opacity: 0; } 100% { opacity: 1; } }
   @media (prefers-reduced-motion: reduce) {
     .hero-canvas-in { animation: none; }
   }
   ```
   This is a single, simple whole-canvas opacity fade — **not** a per-letter or per-pixel staggered reveal. Any staggered/glitchy reveal look during this window (if present — not confirmed frame-by-frame) would have to come from whatever the canvas is drawing underneath the fade, not from this CSS animation itself.

3. **0 → 5s**: `<html class="etch-pending">`. The only CSS rule keyed to this class (OBSERVED, confirmed by scanning every stylesheet for the literal selector) is:
   ```css
   .etch-pending [data-hero-wordmark] { visibility: hidden; }
   ```
   Since the wordmark div is *already* permanently `invisible` regardless, this rule is redundant for that specific element in the build as currently shipped — **UNKNOWN** whether it is vestigial, defensive (in case the `invisible` utility class is ever removed from that element in a future edit), or targets some other `[data-hero-wordmark]` instance elsewhere (e.g., a non-hero usage of the same wordmark pattern) that *isn't* permanently hidden. Not resolved from outside the source.

4. **t=5s**: `etch-pending` class is removed by the `setTimeout`. **OBSERVED**, separately, on an already-settled page load (well past 5s): `data-etch-held` was still present on `<html>` (empty value) while `etch-pending` was gone — so the *class* is time-gated, but the *attribute* persists indefinitely in what we could observe. **UNKNOWN** whether something else clears the attribute under conditions we didn't trigger, or whether it's intentionally left as a permanent "this page uses the etch effect" marker for other code (e.g., analytics, or a CSS selector keyed to the attribute's mere presence rather than a timed state). Not resolved.

### 2.3 Hero canvas — continuous animation (steady state)
**OBSERVED** (from this round and the prior session's instrumentation, reproduced here as the load-bearing evidence): patching `CanvasRenderingContext2D.prototype.fillRect/clearRect/fill/drawImage/putImageData` and counting calls over a 3-second window showed `fillRect` firing roughly 43,700 times/second (~729 calls/frame at 60fps) continuously, indefinitely — not just during the 0.9s fade or the 5s etch window — while `clearRect`, `fill`, `drawImage`, and `putImageData` were called **zero** times in the same window.

This means:
- **OBSERVED**: the animation is a genuine, indefinite `requestAnimationFrame` loop, not a one-shot reveal that settles to a static image (this directly corrects the conclusion from the prior session).
- **INFERRED**: because no `clearRect` (or `fill`/`drawImage`/`putImageData`) ever runs, old frame content can't be erased by those APIs — the only way a `fillRect`-only loop avoids visibly smearing into solid color is if each `fillRect` call uses a translucent fill color/alpha, so repeated low-alpha overdraw of the *entire* canvas (or of each cell) naturally fades old content while fresh, brighter `fillRect` calls draw the "live" pixels on top — a standard canvas "trail fade" technique. This is the most parsimonious explanation consistent with the call-count evidence, but the actual `fillStyle`/alpha values used per call were not captured, so it remains **INFERRED**, not directly observed.
- **UNKNOWN**: the exact per-cell state machine (grid size, per-cell timing/noise function, exact color-interpolation math). Not recoverable without the actual module source (see item E).

### 2.4 Hero canvas — pointer/scroll/resize reactivity
- **Pointer: OBSERVED** (with a caveat). Using the browser automation tool's real `hover` action (not a synthetic `dispatchEvent`, which is unreliable for triggering real listeners) at fixed screen coordinates matching a sampled canvas region, and comparing `getImageData` byte-sum hashes of that region with and without hover: the same two recurring hash states appeared in both conditions, and a quiet/background sub-region's hash never changed in either condition. This is real behavioral evidence of non-reactivity, but it is not corroborated by reading an event-listener registration in source (we could not locate/fetch the actual drawing module — see item E) — hence "observed, with caveat" rather than fully closed.
- **Scroll: not tested this round.** The canvas is `position:absolute` inside a hero section near the top of the page, so scroll-linked effects (e.g., parallax or a scroll-triggered intensity change) are plausible but **UNKNOWN**.
- **Resize: not tested this round.** Standard practice for a canvas like this is a `resize` listener that recomputes `canvas.width/height` and re-lays-out the grid — **INFERRED** as likely (the canvas backing resolution already tracks `devicePixelRatio`×CSS-size, which by itself requires *some* resize-awareness to avoid blur/distortion on window resize or DPR change), but not directly observed.
- **Theme switch: not tested live.** Given the wordmark div's color comes from `--t-field-*` custom properties that are clearly theme-scoped (same tokens reused in the unrelated theme-aware logo-download feature), it is **INFERRED** that switching the site's theme (via the `ThemePicker` island also present on the page) would recolor the hero effect without a reload, since the canvas's drawing code would presumably re-read the same computed-style values it used at init — but this was not actually clicked and watched.

### 2.5 Hero canvas — where the actual drawing code lives (what we tried, and why it's still open)
We attempted to find the JS module that actually draws to this canvas:
- `document.scripts` / `astro-island` tags on the page list exactly 7 hydrated component islands (`SiteHeader`, `HomePage`, `SiteFooter`, `ThemePicker`, `SearchPalette`, `MusicControl`, `PixelSnap`) plus 4 directly-loaded `<script src>` bundles (an Astro client-router transition script, a Plausible analytics loader, a `Base.astro` page-wide script, and a Cloudflare beacon).
- The `Base.astro` bundle (fetched and read in full) contains only: external-link target normalization, the theme-aware brand-logo SVG recoloring/download helper (the one sharing the `--t-field-*` tokens — confirmed unrelated to the canvas itself), and Astro view-transition scroll-position restoration for a docs table-of-contents panel. No canvas code.
- The `HomePage` island's name looked promising, but its `props` payload is actually a community-widget directory/gallery dataset (entries like a "Radio Atlas" bar widget) — i.e. **not** the hero; it's a different section of the same page. Fetching its `component-url` directly also 404'd (plausible edge-cache/deploy-manifest skew, not something we could resolve from outside).
- None of the 5 inline `<script>` tags in the document contain the literal word "canvas"; they cover theme-class bootstrapping, the `etch-pending` timer already documented above, and two generic Astro lazy-hydration helpers (`Astro.load`, `Astro.visible`, an `IntersectionObserver`-based "hydrate when visible" utility — itself a clue that *some* components defer their JS until scrolled into view, though the hero is above the fold so this likely doesn't apply to it).

**Net result (UNKNOWN, open item E):** the module that actually issues the `fillRect` calls was not identified or read. Everything in §2.3–2.4 is therefore behavioral/black-box evidence (draw-call counting, pixel hashing), not source-confirmed. All of it should be treated as a strong, testable specification to *design against*, not as ground truth about Omarchy's actual implementation.

### 2.6 Floating music widget
Fixed, bottom-left, persists across in-site navigation (`data-astro-transition-persist="music-control"` — survives Astro's client-side page transitions rather than remounting). **OBSERVED**, full markup:

- An album-art button doubling as the mute/unmute toggle (`aria-pressed="false"`, `aria-label="Turn the sound on"` at rest → currently muted) with a dark overlay + muted-speaker icon on top of the cover image.
- Track title and artist as plain text.
- A hover/focus/active-only swap: the artist name fades out and a "current-time / duration" string fades in, specifically while the seek `<input>` is hovered/focused/active (`group-has-[input:hover]/card:opacity-0` etc.) — a nice detail: the time readout only appears when you're actively interacting with the seek bar, otherwise you see the artist's name.
- A 4-bar static "equalizer" icon (bar heights observed as 4/4/4/2px while muted — **OBSERVED** it is static in this state; **UNKNOWN** whether it animates once sound is turned on — not tested, to avoid repeatedly triggering audio playback on a live third-party site).
- A thin progress-fill bar (`transform: scaleX(0.6536)` observed on a cold load with no prior interaction) that grows from 2px to 4px tall on hover/focus, with an invisible native `<input type="range" min=0 max=1000 step=5>` layered on top for scrubbing — the standard "style the track, hide the native input, keep it for a11y/dragging" pattern.
- No `<audio>` element exists in the DOM at rest (**OBSERVED**). **INFERRED**: a real audio element (or the Web Audio API) is created/attached only once the user opts in via the mute toggle — the standard way sites avoid autoplay-with-sound restrictions.
- The non-zero progress (`scaleX(0.65)`) and non-zero elapsed time shown ("3:15 / 4:59") on a cold load, before any interaction, is **OBSERVED** but its mechanism is **UNKNOWN**: it could be a genuinely persisted/synced playback position, a shared elapsed-since-some-epoch clock, or simply a static demo value unconnected to real audio state. Not resolved.

This widget is **not** something the rebuild should copy structurally beyond the general UX pattern (icon-button + title/artist + scrubbable progress + hover-swap time readout) — per your separate decision, the `dario-cv-website` widget will play one of your own real tracks, and needs the actual audio file + title/artist from you before it can be finished (still blocked on that, independent of this report).

---

## 3. Findings summary (OBSERVED / INFERRED / UNKNOWN)

| # | Finding | Status |
|---|---|---|
| A | Single `<canvas>`, `pointer-events:none`, sized at 2× CSS size (device-pixel-ratio backing store) | OBSERVED |
| B | A second, permanently-`invisible` DOM element carries the exact wordmark shape (via `mask-image`) and exact theme colors (via a 5-stop `background-image` gradient keyed to `--t-field-*` custom properties) | OBSERVED |
| C | The wordmark SVG is preloaded in `<head>` specifically ahead of use | OBSERVED |
| D | `--t-field-crest/hover/lit/mid/dim` is a shared, theme-scoped 5-color gradient token set reused elsewhere on the site (logo re-theming) | OBSERVED |
| E | `<html>` gets `etch-pending` class + `data-etch-held` attribute at load (skipped under reduced motion); class is removed after exactly 5000ms via `setTimeout` | OBSERVED |
| F | The only CSS keyed to `etch-pending` hides `[data-hero-wordmark]`, but that element is already unconditionally hidden — rule is redundant for this element in the current build | OBSERVED |
| G | `data-etch-held` attribute persists past the 5s window in at least one observed snapshot | OBSERVED |
| H | Canvas element fades in via a single CSS `@keyframes` opacity animation, 0.9s, once, disabled under reduced motion | OBSERVED |
| I | The ongoing particle/pixel animation is a continuous `requestAnimationFrame` loop calling `fillRect` ~43,700×/sec indefinitely, with zero `clearRect`/`fill`/`drawImage`/`putImageData` calls | OBSERVED |
| J | Old frame content must fade via low-alpha overdraw rather than explicit clearing (classic canvas trail-fade technique) | INFERRED |
| K | Exact per-cell grid size, timing/noise function, and color-interpolation formula | UNKNOWN |
| L | Canvas content does not visibly change with real mouse hover over the hero (pixel-hash test, two conditions, same recurring states) | OBSERVED (not source-corroborated) |
| M | Scroll-reactivity | UNKNOWN (not tested) |
| N | Resize-reactivity | INFERRED likely present (DPR-aware sizing implies *some* resize handling) but not observed directly |
| O | Theme-switch reactivity (live recolor without reload) | INFERRED likely, not tested live |
| P | The module that actually draws to the canvas | UNKNOWN — not located among the 7 hydrated islands or 4 script bundles actually readable from outside |
| Q | Music widget: no `<audio>` element at rest; created on user opt-in | OBSERVED / INFERRED |
| R | Music widget: non-zero progress/elapsed time shown on a cold load | OBSERVED (mechanism UNKNOWN) |
| S | Music widget: equalizer bars static while muted | OBSERVED; animated-when-playing is UNKNOWN (untested) |

---

## 4. Data this app would need to store

Framed as a config/data model for an **original** rebuild (not a description of Omarchy's actual backend, which is unknown and almost certainly doesn't need a database for a static decorative effect — this is "what state the client-side code needs to track," not literal SQL tables):

**ThemeFieldPalette** (one row per site theme)
- `theme_id` (string, PK)
- `crest_color`, `hover_color`, `lit_color`, `mid_color`, `dim_color` (5 colors forming the top→bottom gradient)

**WordmarkAsset**
- `svg_url`
- `viewbox_width`, `viewbox_height` (used to derive `aspect-ratio` so the reference element never distorts the mask)

**HeroCanvasConfig**
- `fade_in_duration_ms` (0.9s observed-equivalent)
- `etch_hold_duration_ms` (5000ms observed-equivalent)
- `reduced_motion` (boolean, read from `matchMedia`)
- `device_pixel_ratio` (read at runtime)
- `grid_cell_size_px`
- `background_scatter_density` (0–1)
- `trail_fade_alpha` (the per-frame overdraw alpha implementing the fade-not-clear technique from finding I/J)

**ParticleCell** (one per grid position, computed at layout time — in-memory, not persisted)
- `x`, `y`
- `is_wordmark_pixel` (boolean — sampled from the rasterized mask)
- `base_color` (interpolated from the 5-stop gradient by vertical position)
- `phase`, `frequency` (drives the per-cell twinkle/noise)
- `current_alpha` (derived each frame)

**MusicTrack**
- `track_id`, `title`, `artist`, `cover_image_url`, `audio_src_url`, `duration_seconds`

**MusicPlayerState** (client-side, ephemeral unless you want it to persist across page loads)
- `track_id` (FK)
- `is_muted`
- `current_position_seconds`
- `volume`

---

## 5. Checklist, re-stated: answered / partly answered / open

| Item | Status | If open — exact next step |
|---|---|---|
| Canvas structure & sizing (DPR-aware backing store, `pointer-events:none`) | **Answered** | — |
| Wordmark shape + color source (invisible mask+gradient div) | **Answered** | — |
| Shared theme-gradient token system | **Answered** | — |
| Load-time fade-in mechanism (CSS keyframe, 0.9s) | **Answered** | — |
| "Etch hold" timer (5s, class + attribute) | **Partly answered** — timing and trigger are known; purpose of the redundant CSS rule and the lingering attribute are not | Not practically closable from outside the source; would need Omarchy's actual repo. Low priority — doesn't block a rebuild, since our own version can define its own hold-window purpose from scratch. |
| Continuous animation existence & frame rate | **Answered** | — |
| Exact per-cell drawing algorithm (grid size, noise, color math) | **Open** | In the live browser tool: re-run the `CanvasRenderingContext2D.prototype` monkey-patch, but this time also capture the actual arguments passed to each `fillRect` call (x, y, w, h and the `fillStyle` value at call time) for a short window (e.g. 200ms), then cluster the results to infer grid cell size and alpha-per-call. This is the single highest-value next experiment if source-level precision is wanted; otherwise, the rebuild can use an original, clearly-"new design choice" algorithm (see §6) without this. |
| Pointer reactivity | **Answered, with caveat** | If full certainty is wanted: repeat the monkey-patch from the item above while also logging `document`/`window` `mousemove` listener counts (e.g., via `getEventListeners` in real Chrome DevTools — not available through this automation tool, would need you to open DevTools → Elements → Event Listeners on `document`/`window` manually and report what you see). |
| Scroll reactivity | **Open** | Repeat the same pixel-hash-diff method used for pointer: sample a fixed canvas-crop hash, then scroll the page by a fixed amount, then re-sample immediately and after a short settle, compare hashes. |
| Resize reactivity | **Open** | Use `resize_window` to change viewport size, then check whether `canvas.width`/`canvas.height` attributes update and whether a fresh hash-crop differs from pre-resize in a way beyond simple scaling. |
| Theme-switch reactivity | **Open** | Click the `ThemePicker` island's control to switch themes live, then re-read the `--t-field-*` computed values and take a fresh canvas-crop hash to see if colors visibly shift without a reload. |
| Location of the actual drawing module | **Open** | Would require either (a) Omarchy's own source repository (outside this engagement's scope — it's a third-party site), or (b) a working headless-browser/devtools-protocol session with full script-source access, which this sandboxed environment could not provide (Playwright install blocked both with and without system deps). Not practically closable here; the rebuild proceeds on the black-box behavioral spec instead. |
| Music widget: audio creation trigger | **Answered (inferred)** | — |
| Music widget: equalizer animates when playing | **Open** | Click the mute/unmute button once, observe whether the 4 bars start animating, then re-mute. (Deliberately not done automatically in this pass to avoid repeatedly triggering audio playback on a live third-party site without your explicit go-ahead.) |
| Music widget: meaning of the non-zero cold-load progress | **Open** | Reload the page fresh (hard reload, cleared cache) and check whether progress/time reset to 0:00 — if yes, the value is being restored from the *previous* session via some persistence (`localStorage`/cookie); if it's still non-zero even on a verified-fresh load, it is likely a shared/synced clock rather than per-visitor state. |

---

## 6. Build spec for the `dario-cv-website` hero

This section is split strictly into **observed facts we're borrowing as technique** (the *mechanism*, not Omarchy's wording/logo/colors/name) versus **new design choices** made for this rebuild. Nothing below reuses Omarchy's actual palette, the word "Omarchy," its logo, or its copy — the wordmark shape here is "DARIO ESPINOSA" in an original pixel/dot rendering, and every color is drawn from the existing Dark Matter palette (`--teal:#50e3c2`, `--violet:#a78bfa`, `--bg:#050508`) already in use across the site.

### 6.1 Mechanism borrowed from observation (technique only)
1. **Two-element pattern**: keep an actual visible `<canvas>` plus a second, screen-reader/visually-hidden reference element that encodes the target shape, so the drawing code never hardcodes font/letter geometry — it measures a real DOM box. *(We already partially do this differently — a hand-rolled 5×7 bitmap font in JS. Adopting the "hidden reference element" approach would let us swap in richer typography later without touching the canvas math.)*
2. **DPR-aware backing store**: `canvas.width = cssWidth * devicePixelRatio` (our current code should be checked against this — worth confirming on next edit).
3. **Decouple the one-time fade from the continuous animation**: use a simple CSS `@keyframes` opacity fade (0.9s, disabled under reduced motion) for the canvas's own entrance, fully separate from the `requestAnimationFrame` loop that drives the ongoing particle motion — don't conflate "the canvas appearing" with "the canvas animating," since Omarchy's evidence shows these are two independent systems.
4. **Trail-fade instead of clear-and-redraw**: each frame, instead of `clearRect`, paint a full-canvas low-alpha rectangle in the background color before drawing the current frame's bright cells on top — this produces soft motion trails cheaply and matches the only-`fillRect`-no-`clearRect` evidence.
5. **Indefinite loop, not a settle-to-static reveal**: this corrects our current Session 23 code, which stops animating (reduces to per-cell twinkle only, itself still running — actually it *is* already a `requestAnimationFrame` loop forever; the main correction needed is conceptual/documentation, i.e. the CHANGELOG's claim that it's "not reactive and settles" needs the "settles" language removed, since ours also never truly settles — it's closer to already correct than the Omarchy evidence initially suggested our implementation was wrong about).
6. **No pointer-reactivity** — confirmed as the right choice already; Omarchy's own hero doesn't react to pointer position either, per the hash-diff evidence.

### 6.2 New design choices (ours, not Omarchy's)
- Wordmark: "DARIO ESPINOSA," original blocky dot-matrix glyphs (keep existing hand-rolled font table, or optionally upgrade to the hidden-reference-element technique from 6.1.1 using an actual SVG of Dario's own wordmark/signature if one exists).
- Palette: existing Dark Matter tokens only (`--teal`, `--violet`, `--bg`) — vertical gradient between teal and violet, already implemented.
- Grid/cell sizing, scatter density, twinkle frequency: tunable constants, ours to choose (current values: `Math.max(6, Math.min(16, …))` cell size, `0.55 - cornerDist*0.8` scatter probability — fine to keep or retune).
- Etch-hold window: optional; if we adopt a "hold before first reveal" delay at all, it would be our own duration and our own purpose (e.g., waiting for the web font to finish loading), not a copy of Omarchy's 5-second value.
- Music widget: a **different** real track (Dario's own, once supplied), different layout polish as desired — the only transferable UX idea from §2.6 worth considering is the hover-swap between "artist name" and "elapsed/duration," which is a generic, non-proprietary interaction pattern safe to reuse.

### 6.3 Concrete next step recommendation
Given item P in §3 (the actual drawing module was never located) and the "Open" rows in §5, the highest-value next action is **not** further reverse-engineering — diminishing returns have been reached without either Omarchy's source or a working headless-browser devtools session. The recommended path is: treat §6.1 as the complete technique spec, keep our existing canvas code's overall shape, and apply the two concrete corrections it suggests — (a) switch from "clear + redraw" semantics to "low-alpha trail fade" if our current code uses `clearRect` anywhere (worth a quick grep), and (b) soften the CHANGELOG's Session 23 language from "settles to static" to "continues indefinitely, non-pointer-reactive," matching the corrected understanding — rather than spending further sessions trying to access Omarchy's private source.
