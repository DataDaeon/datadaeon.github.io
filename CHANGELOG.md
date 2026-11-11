# Portfolio Site — CHANGELOG

> **Purpose**: Running memory for Claude (and any AI tool) working on this site. Each session appends a dated entry. Before making changes, read from bottom to top to understand current state.

---

## Design System Reference

| Token | Value |
|-------|-------|
| `--bg` | `#050508` |
| `--teal` | `#50e3c2` (primary accent — SoftServe projects) |
| `--violet` | `#a78bfa` (secondary accent — personal/VOS) |
| `--t1` | white (primary text) |
| `--t2` | `rgba(255,255,255,0.65)` |
| `--t3` | `rgba(255,255,255,0.35)` |
| `--border-w` | `rgba(255,255,255,0.07)` |
| `--surface` | `rgba(255,255,255,0.04)` |
| `--max` | `1080px` |
| Fonts | Geist (body), Geist Mono (labels/code) |
| Base | `html { font-size: 16px }` |

### Section anatomy (main case study pages)
Every content block must follow this exact structure:
```html
<section class="block">
  <div class="block-inner">
    <div class="block-label">Section Title</div>
    <h2 data-scramble aria-label="...">Heading</h2>
    <p>Content</p>
  </div>
</section>
```
Never place `.slide`, `.grid-2`, or image wrappers outside a `<section class="block">` — they go full-width and break layout.

### Card grid anatomy (index.html)
- All cards live inside `.cs-grid`
- Half-width cards: no `grid-column` override
- Full-width feature cards: `style="grid-column:1/-1"`
- Full-width cards use inner grid: `grid-template-columns:1fr auto` (content left, metrics right)
- Metrics use `.cs-metric > .cs-mval + .cs-mlabel`
- Every card needs `.cs-foot` with meta text + arrow

---

## Page Inventory

| File | Project | Type | Accent |
|------|---------|------|--------|
| `index.html` | Home / portfolio index | — | teal |
| `tetra.html` | TETRA BlendSense | SoftServe · main | teal |
| `virtu4lslacksagent.html` | VOS with Local AI | Personal · main | violet |
| `nielseniq.html` | NielsenIQ Dashboard | SoftServe · main | teal |
| `siemens.html` | Siemens Railway BOS | SoftServe · main | teal |
| `att.html` | AT&T AEM & eCommerce | SoftServe · main | teal |
| `oolalife.html` | Oola Life Platform | SoftServe · main | teal |
| `takecommand.html` | Take Command Health | SoftServe · main | teal |
| `metaverse.html` | SoftServe Metaverse | SoftServe · main | teal |
| `procore.html` | Procore UX Research | SoftServe · main | teal |
| `tycan.html` | Porsche Taycan Landing | Archive · older | teal |
| `yaiwa.html` | YAIWA Smartphone Brand | Archive · older | teal |
| `daily-bot.html` | Daily Chatbot MVP | Archive · older | teal |
| `kasuva.html` | Kasuva B2B Marketplace | Archive · older | teal |
| `zafyro.html` | Zafyro Mobile App | Archive · older | teal |
| `walking-dog.html` | AT&T Smartphones Catalog | Archive · older | teal |

---

## Modal System (all 14 internal pages)

Click-to-expand image modal using native `<dialog>` with spring animation.

**Key rules:**
- Base CSS must NOT have `display:flex` on `dialog#img-modal` — only on `dialog#img-modal[open]`
- Open animation requires double `requestAnimationFrame` to guarantee transition fires after paint
- `.is-open` class drives backdrop blur separately from `[open]` attribute
- Image selectors: `.block img, .cs-block img, .slide img, .grid-2 img, .img-single img, .img-grid img, .cols-2 img, .cols-3 img, .cs-screen img, .cs-gallery img`

---

## Session Log

---

### Session 1–3 (May 2026) — Foundation
- Built `index.html` with Dark Matter design system
- Extracted CV PDF images and text per project
- Scraped espinosadesign.com clone
- Built 7 main case study pages + 6 archive pages
- Applied Option B type scale
- Added scramble effect to headings + fade-in on all internal pages

---

### Session 4 (May 2026) — Interactivity
- Added click-to-expand `<dialog>` modal to all 14 pages (family-style spring animation)
- Fixed `.slide`/`.grid-2` divs that were outside `<section class="block">` on 5 pages (siemens, nielseniq, oolalife, procore, att) — these caused full-width image overflow
- Added responsive `max-width:100%` image constraints globally

---

### Session 5 (May 2026) — D3 + TETRA enhancements
- Added draggable color swatches UI Kit section to `tetra.html`
- Built TETRA Sankey D3 visualization
- Built D3 visualizations for all 6 remaining main pages
- Moved all D3 sections to appear right after `[The Solution]` block on each page

---

### Session 6 (May–June 2026) — Siemens + VOS
- Added Design System swatches section to `siemens.html` (colors: `#0A1628`, `#009999`, `#00E5C3`, `#1C3557`, `#FFFFFF`, `#F0F4F8`)
- Fixed Figma embed URL format to `embed.figma.com/proto/...?embed-host=share`
- Added expo photos section to `siemens.html` ("One Week, One MVP, One Global Stage")
- Fixed Siemens Visual Context section: equal-height side-by-side grid with `object-fit:cover` masking, modal reveals full image
- Built `virtu4lslacksagent.html` — VOS project page (violet accent, tools strip, CSS Slack UI mockup, D3 architecture diagram)

---

### Session 7 (June 2, 2026) — Content & structure fixes
- **index.html**: Fixed VOS card (was missing `grid-column:1/-1` and right-side metrics)
- **index.html**: Moved VOS card to position 1 (right after TETRA) — both are full-width feature cards
- **index.html**: Renamed "VOS — VIRTU4L Operations System" → "VOS — VIRTU4L Operations System with Local AI" (index + project page)
- **index.html**: Renumbered all cards (VOS = 01, NielsenIQ = 02 ... Procore = 08)
- **index.html**: Footer — replaced Adobe Portfolio link with PDF download button "quick portfolio PDF"
- **PDF**: Copied `Dario Espinosa — Full Portfolio Extract.pdf` → `dario-espinosa-portfolio.pdf` in site root
- **CHANGELOG.md**: Created this file
- **TODO — content enrichment**: Add full research/process/objectives sections from PDF to archive pages (tycan, yaiwa, daily-bot, kasuva, zafyro, walking-dog) and enrich oolalife + att main pages with PDF detail

---

## Known Issues / Pending

- [ ] Archive pages (tycan, yaiwa, daily-bot, kasuva, zafyro, walking-dog) are thin — missing Objectives, Process, Role sections documented in the Portfolio PDF
- [ ] `oolalife.html` and `att.html` have generic block structure but are missing specific research findings from the PDF (personas, whiteboarding, IA, SEO, accessibility findings)
- [ ] VOS project page h1 wrapping on mobile may need `white-space` adjustment with the new longer title
- [ ] The "copy from the end" noted by user in VOS page — review all paragraph text for dev-centric language and reframe as Experience Design perspective

---

## Content Source Reference

`Dario Espinosa — Full Portfolio Extract.pdf` (12 pages, extracted June 2026 from espinosadesign.com / Behance)

Key content per project:
- **OolaLife**: Objectives (7 key areas, user target), Process (4 personas, whiteboarding, UX flow maps, wireframing, IA, sitemap, mobile-first, SEO, A11y, marketing alignment)
- **AT&T Design System**: Technical scope (40 AEM components, CID thinking, Atomic Design), Role (UX Specialist/UI/PM/Web Lead), Design System Evolution (3 major challenges, Sketch→XD migration)
- **Porsche Taycan**: Brief (visceral/behavioral design, conversion triggers, emotion-first), Process (wireframes, scroll narrative, pre-order multi-step modal)
- **AT&T Smartphones**: UI/UX redesign idea-to-production
- **YAIWA**: Name proposal, brand identity, packaging, 3D renders, multi-country
- **AT&T Mexico Redesign**: Bounce rate, conversion funnels, IA merge (Iusacell/Nextel/Unefon), A/B tests, heat maps, UI kit, cross-functional
- **AT&T News Microsite**: Concept-to-code-to-production newsroom
- **Daily Chatbot**: MVP research for cosmetics eCommerce Proscai
- **Kasuva**: Co-Founder & Design Director, Magento, B2B marketplace
- **Zafyro**: High-fidelity mockup, custom SIM plan configurator

---

### Session 9 (June 5, 2026) — Aceternity UI effects (vanilla JS) + Container Scroll Animation

**6. Container Scroll Animation (all 15 project pages)**
- `initScrollHeroes()` added to `effects.js`
- `<div class="scroll-hero-wrap" data-auto></div>` injected into all 15 project pages:
  - Main pages (9): inserted after `</div>` of `.meta-row` (inside `.cs-hero-inner`)
  - Archive pages (6): inserted after `</div>` of `.hero` div (at `<main>` level)
- JS auto-picks first qualifying `.block img` / `.slide img` / etc. as the image source
- Scroll-driven: `perspective(1000px) rotateX(20°→0°) scale(0.88→1.0)` as wrap scrolls into view
- `.scroll-hero-wrap::after` adds a teal radial glow beneath the card
- Horizontal padding inherits from parent; only `padding-top: 52px` added

---

### Session 9 (June 5, 2026) — Aceternity UI effects (vanilla JS)

**New files**
- `effects.css` — shared styles for all 4 effects
- `effects.js` — shared JS, auto-injected via `<script src>` on all 17 pages

**1. Noise Background (buttons)**
- `.btn-grain` span: animated SVG `feTurbulence` grain texture, `mix-blend-mode:overlay`, 7-step CSS position animation
- `.btn-shimmer` span: one-shot `translateX` sweep on hover, resets cleanly on every re-hover
- Applied to all `.btn` elements site-wide (index, about, any future pages)

**2. Pixelated Canvas (index.html hero portrait)**
- Replaced Three.js WebGL blob shader with Canvas 2D pixelate-in effect
- Loads `images/portrait.png`; dissolves from 48px → 32 → 22 → 14 → 10 → 7 → 5 → 4 → 3 → 2 → 1px blocks
- Loops every 9 seconds (flash to blocky → resolve back in)
- `image-rendering:pixelated` CSS keeps blocks crisp; radial mask fades edges
- `#ftr-portrait` CSS updated (radius 10px, better ellipse mask centered on portrait)
- THREE.js import kept for hero particle field (unchanged)

**3. Tracing Beam (all 15 project pages)**
- Fixed 2px beam on `left:14px`, top = 48px (below nav), full viewport height
- `.beam-fill` height = `scrollY / maxScroll * 100%` via rAF scroll handler
- `.beam-dot` glowing teal orb at the leading edge
- Hidden on viewports ≤ 860px (no side room on mobile)
- Auto-injected by `effects.js` only when `.block` elements are present

**4. Comet Card (all project page images)**
- Wraps every eligible `.block img`, `.slide img`, `.grid-2 img`, etc. in `.comet-wrap span`
- On `mousemove`: sets `radial-gradient(circle at X% Y%, rgba(80,227,194,0.20)…)` on `.comet-glow`
- On `mouseleave`: clears gradient
- Teal 1px `box-shadow: inset` border on hover via CSS `::after`
- Modal click handlers on `<img>` elements survive the DOM reparenting (events stay on img node)

**5. Compare Slider (infrastructure ready)**
- CSS + JS in `effects.css`/`effects.js` — `initCompareSliders()` activates any `.compare-slider` found on page
- Drag or touch to scrub handle; `compare-before-clip` width follows cursor
- Usage: add markup (see `effects.css` comment) with actual before/after image paths
- Not yet placed on any page — all project images are base64-embedded; add when external before-screen files are available

---

### Session 8 (June 2, 2026) — Interactions, About page, Audit

**index.html**
- Hero name split into two independently hoverable glitch words: DARIO→EXPERIENCE / ESPINOSA→DESIGNER
- Yellow `#FFFF02` clip-path wipe overlay with character scramble (TextGlitch pattern)
- `::before` sizing trick — container reserves full width of "EXPERIENCE" so text never clips
- "18+ years" corrected from "16 years"
- VOS card renumbered to 01/08, placed right after TETRA (both full-width feature cards)
- Footer: Adobe Portfolio link → "quick portfolio PDF ↓" (downloads `dario-espinosa-portfolio.pdf`)
- PDF added to site root for download
- Project filter chips: All / Energy / Analytics / Transportation / Telecom / Healthcare / Construction / Technology / Entertainment
- Hero portrait replaced: WebGL Three.js r128 shader — blob texture + violet `#a78bfa` laser scan + Worley cell noise dots + screen blend + bloom approximation

**All 15 project pages**
- Liquid morph H1 effect: SVG `feColorMatrix` threshold filter + two overlapping blur/opacity spans cycling through page-native titles (extracted from actual H2 aria-labels)
- Industry amber chip `#f59e0b` added to header of each page
- Content enriched with PDF research content: oolalife (Objectives & Scope, Research & Process), att (Technical Scope, Role & Responsibilities, Design System Evolution), tycan (Design Decisions & Context), yaiwa (Process & Extended Work), kasuva (Context & Role), zafyro (Concept & Approach)
- Apple Intelligence ripple effect added then removed (user decision)
- Hand-drawn SVG loop animation added then removed (user decision)
- Sticky "← back to work" fixed pill (bottom-left, fades in at 1.2s)

**All 17 pages — Accessibility (WCAG 2.1 AA)**
- `--t3` raised from `rgba(255,255,255,0.35)` → `rgba(255,255,255,0.45)` for contrast compliance
- `<main id="main-content">` landmark injected on all pages
- Visually-hidden skip navigation link added
- `:focus-visible` teal 2px outline added on all interactive elements
- `role="link" tabindex="0"` + keyboard Enter/Space handler on all cs-card divs
- Modal `<img>` empty alt → `aria-hidden="true"`
- Morph H1 `aria-label` with static project name on all project pages

**All project pages — nav**
- "work" nav link removed site-wide
- "about" nav link now points to `about.html`

**about.html** — new page created
- Hero: Three.js WebGL chromatic aberration sine-wave shader (full-screen, 35% opacity)
- Bio section with 3 stat callouts (18+ years, 40+ components, 9 verticals)
- Competency Focus grid (4 pillars from PDF)
- Scroll-velocity skills ticker (teal) + tools ticker (violet, reversed direction)
- Experience timeline: SoftServe, 3Pillar, AT&T
- LinkedIn Recommendations: Rosa Contreras, Mariana Luna H., Luis Sztul Torselli, Verónica Miranda
- Awards: 2020 AT&T International A11y Award, IFETEL recognition
- Languages: Spanish (100%) + English B2 (72%) with progress bars

**SEO & AI**
- `robots.txt` — explicit allow for GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- `sitemap.xml` — all 16 pages with priorities
- `llms.txt` — AI-readable profile summary with all project descriptions and permissions

**Project titles — NDA-safe refactor**
All 15 project titles rewritten to value-first format (no brand names):
- NielsenIQ → "Revolutionizing Data Insights: Dashboard Redesign"
- Siemens → "Modernizing Railway Systems: Back Office Overhaul"
- AT&T → "Digital Transformation: AEM & eCommerce Evolution"
- OolaLife → "From Philosophy to Digital Engagement: Life Coaching Platform"
- TakeCommand → "Building a UX Powerhouse: Center of Excellence"
- SoftServe Metaverse → "Exploring the Future: Metaverse Experience"
- Procore → "Optimizing User Research at Scale"
- TETRA → "Replacing Legacy Tools: AI-Powered Blend Optimizer"
- Porsche → "Driving Conversions: Electric Vehicle Launch Page"
- YAIWA → "From Identity to Shelf: Smartphone Brand & Packaging"
- Daily Bot → "Automating Customer Interaction: eCommerce Chatbot MVP"
- Kasuva → "Connecting Businesses: B2B Marketplace Redesign"
- Zafyro → "Custom Plan, Zero Friction: Telecom UI Concept"
- Walking Dog → "Product Catalog Redesign: Smartphones & Accessories"

**Git**
- Local git repo initialized at `dario-cv-website/`
- `.gitignore` excludes `images/`, `*.pdf`, `.DS_Store`
- Initial commit `0bc1d21` (June 2, 2026)

---

### Session 10 (June 10, 2026) — about.html full redesign (skiper-ui / motion.dev patterns)
Kept untouched: hero (WebGL chromatic shader) and aptitudes ticker — the two sections with motion identity. Everything between them rebuilt; all new code is inline in `about.html` (not in shared `effects.js`, to avoid side effects on other pages).

**New section patterns**
- Bio → **scroll text reveal** (motion.dev "Scroll Text Lines"): 3 large statement paragraphs, words brighten `rgba(255,255,255,.16)` → white (accents → teal) driven by scroll progress. Words wrapped at runtime (`#bio-reveal .rw`)
- Stats → **count-up numbers** (motion.dev "Number trend"), easeOutCubic 1.3s on viewport entry. Languages section removed — folded into stat row as ES/EN cells (violet accent)
- Competency Focus → **spotlight hover grid** (skiper-ui hover cards): pointer-tracked radial gradient via `--mx/--my` CSS vars + numbered cards
- Experience → **sticky card stack** (skiper-ui card stack): `.exp-pin` wrappers (`padding-bottom:28vh`), cards pin at staggered `top` offsets, JS scales/dims pinned cards as next overlaps
- Recommendations → **draggable deck** (motion.dev "Card stack"): 4 cards stacked, pointer drag >90px flings + cycles, prev/next buttons, dots, keyboard arrows, `tabindex=0`, deck height auto-sized to tallest card
- Awards → **scramble text on hover** (motion.dev "Scramble text: Hover") on `[data-scramble]` titles, mono font
- Contact CTAs → **magnetic buttons** (motion.dev "Cursor: Magnetic target") via `[data-magnetic]`

**Page-level**
- `.fx-reveal` staggered blur+translate section reveals (IntersectionObserver, `--d` delay var)
- New `--solid: #0c0c12` token for opaque stacking cards
- All effects gated on `prefers-reduced-motion` (JS `RM` flag + CSS media query: static exp cards, lit bio, no transitions); `matchMedia`/`IntersectionObserver` guarded with fallbacks
- Verified via jsdom smoke test: 59 bio words wrapped, deck init OK, count-ups land, 0 runtime errors

---

### Session 10b (June 10, 2026) — index.html visual upgrades (10 quick fixes)
All inline in `index.html`; everything gated on `prefers-reduced-motion`.
- **Scroll progress bar** — 2px teal→violet gradient fixed under nav (`#scroll-progress`)
- **Hero stat count-ups** — `.hero-stats .stat-val` parse number+suffix (18+ / 80% / 70% / 1.5k), easeOutCubic 1.4s on viewport entry
- **Spotlight hover on `.cs-card`** — pointer-tracked radial glow via `--mx/--my` on new `::after` layer (coexists with magnetic cursor nudge)
- **Feature-card image zoom** — `.cs-card:hover > div > img` scale 1.05 (full-width TETRA/VIRTU4L cards; `.cs-thumb` zoom already existed)
- **Staggered card reveal** — per-property `transition-delay` list `(i%4)*0.08s, same, 0s` so hover background stays instant
- **Animated filter transitions** — `filterCards` rewritten (fade/scale `.f-out` → swap display → fade in); original instant version removed (was later in source, would have overridden)
- **Career timeline draw-on-scroll** — `.career-entry.lit` scales vline from top + pops dots, IO-staggered
- **Skill % count-ups** — `.skill-pct` counts 0→target alongside existing bar fill
- **Magnetic contact CTAs** — `.contact-links .btn`, same pattern as about.html
- **Nav-link scramble on hover** + **marquee divider** (CSS-only animation, 11 industry verticals, pauses on hover) between #work and #archive
- Added missing `typeof THREE` guard to hero particle script (graceful CDN-failure degradation)
- jsdom smoke test: 0 runtime errors, all features initialize

---

### Session 10c (June 10, 2026) — Site-wide code review fixes (all 18 pages)
**Critical bug fixed**
- `oolalife.html`: unescaped apostrophe (`didn't`) in single-quoted D3 data string — SyntaxError killed the whole script block in every browser; the D3 timeline viz had been silently broken. Escaped.

**Performance — base64 extraction**
- All 37 inline base64 images extracted to `images/inline/<page>-NN.jpg` and `loading="lazy"` added. HTML weights: oolalife 2.5MB→40KB, siemens 1.7MB→52KB, nielseniq 596KB→~35KB, att/tetra/procore/metaverse/takecommand similar ratios.
- `index.html`: dead hidden base64 portrait (`.portrait-img`, display:none) removed (~110KB).
- ⚠ `.gitignore` excludes `images/` — the new `images/inline/` files are NOT git-tracked. Decide: un-ignore `images/inline/` or keep images out of the repo.

**Accessibility / consistency**
- Skip-to-content link added to all 15 pages missing it; archive pages' `<main class="page">` got `id="main-content"`; `virtu4l.html` anchors on its hero header (no `<main>`).
- `rel="noopener"` added to all 28 `target="_blank"` links lacking it (site-wide).
- Reduced-motion: global `@media (prefers-reduced-motion: reduce)` block in `effects.css` (collapses animations/transitions, hides tracing beam); `REDUCED_MOTION` flag in `effects.js` disables scroll-hero 3D rotation.
- IO shim (immediate-fire `IntersectionObserver` fallback) injected in `<head>` of all 16 project pages — scramble/D3/reveals now work even without IO support.
- `virtu4lslacksagent.html`: LinkedIn URL fixed (`darioespinosa` → `data-espinosa`).

**virtu4l.html brought on-template**
- Added canonical, meta description, author, OG tags, `:focus-visible` styles, skip link, and `about` nav link.
- Still open: 4 images hotlink `realidadvirtu4l.com` (Logo, hero-index, hero-juegos, hero-cotizador) + the index.html VIRTU4L card thumb — could not be downloaded in this environment; user should save local copies to `images/` and update srcs. Image modal also still absent on this page.

**Verification**: jsdom sweep across all 18 pages — 0 runtime errors; all extracted image paths verified on disk; 0 residual base64.

---

### Session 11 (September 2026) — AI Process & Tools tables + career timeline enrichment
Adopted `origin/main` as base (previously-unrelated git history from a manual push) — local now continuous with remote. Restored `.gitignore` (remote had none) and cleaned macOS junk.

**New: "Process and Tools" table — semantic `<table>`, not divs**
Added to the three projects that document a real AI-assisted *workflow* (not just an AI-flavored product): `tetra.html`, `virtu4lslacksagent.html` (VOS), `benefits-platform.html`. Deliberately skipped `daily-bot.html` and `procore.html` — their "AI" mentions describe the product/a passing SEO blurb, not a documented design process, so a process table there would overstate what's in the copy.

- Real `<table>` markup (caption, `<th scope="col">` stage headers, `<th scope="row">` attribute headers) instead of a div grid — chosen over the originally-discussed stacked-card approach because this is genuinely 2D tabular data (stage × attribute); a table + horizontal-scroll wrapper preserves screen-reader row/column semantics at every viewport, where reflowing to divs would have discarded them.
- Rows: AI role / Tools / Process / Key question. Content is stage-specific per project, not a generic copy of any reference template — e.g. TETRA's 4 stages replace its old simple `.flow-row` (removed, along with its now-dead CSS); VOS and Benefits get 5 new stages each, grounded only in facts already stated elsewhere on their own pages.
- Mobile: `.ai-process-scroll` (horizontal scroll, `tabindex="0"`, `role="group"`) with `position:sticky;left:0` on row headers so the attribute label stays visible while swiping. Swipe hint shown under 900px. No breakpoint hides content — same info at every width.
- Shared `.ai-badge` pill (already existed in tetra.html) now also defined in virtu4lslacksagent.html and benefits-platform.html for the section label.

**Career timeline (index.html)** — added a one-line "learned to…" takeaway + a `Tools —` line to all 9 `.career-entry` items, inspired by a pattern seen on javiera-pellizzari.com. Content grounded in facts already established elsewhere on the site (AT&T accessibility award, AEM, design systems work); the two pre-2015 entries use deliberately generic tool descriptions since no specific tool is evidenced anywhere else on the site for that period — flagged for Dario to sanity-check before it goes live.

**Explicitly not done this session** (discussed, declined): bilingual EN/ES toggle, a second "process type" filter chip row on index.html, and touching the site's motion/visual language to resemble javiera-pellizzari.com's quieter style — all considered and intentionally skipped per conversation.

**Verification**: jsdom sweep on all 4 changed files — 0 runtime errors; table structure confirmed (correct column/row counts, row headers, captions present); all 9 career entries confirmed to carry the new fields.

---

### Session 12 (September 2026) — NDA remediation: generic demo panels replace real client screenshots

Site was confirmed live and publicly indexed at `darioespinosa.design` — this made the following a genuine, not hypothetical, confidentiality fix.

**Problem**: image-by-image inspection (not assumed) found 5 project pages exposing real client branding, product names, or client-of-client data in screenshots: `siemens.html` (SIEMENS wordmark + real CSX train IDs, 8 of 10 images), `nielseniq.html` (NielsenIQ Discover wordmark + real customer brand names — Lavazza, Olay, Chewy, etc.), `att.html` (live AT&T México site + internal "AT&T UI Toolkit" spec doc), `tetra.html` (TETRA BlendSense wordmark + real internal job codes, incl. a hero image `images/tetra-options.png` missed by the first image-only audit and only caught via a broader `data-src=` grep), `takecommand.html` (real leaf-mark logo + "HRA Hub" branding, also used as an index.html card thumbnail). `benefits-platform.html`, `metaverse.html`, and `procore.html` were re-confirmed already safe/generic — left untouched.

**Fix — new shared "illustrative demo panel" pattern** (CSS class prefix `.demo-*`, duplicated inline per page per house rule 2, not added to `effects.css`): a tabbed, dark-UI card with an abstract SVG mark (no real logos), fictional product name, generic/fake data, and real vanilla-JS interactivity (tab switching, a couple of toggles, a "Run Optimizer" button that randomizes stat values on tetra.html). Every panel carries an explicit `.demo-disclosure` line stating it's a recreation with fictional data. Fictional product names used: TrackWatch (Siemens), MarketPulse (NielsenIQ), Connectify (AT&T), BlendOps (TETRA), BenefitBridge (TakeCommand).

- Real screenshots fully **replaced** (not supplemented) with the corresponding demo panel, per Dario's explicit choice. Photography that can't be meaningfully "recreated" (Siemens expo-booth photos, real architecture/Figma-map documents) was removed outright with a short disclosure line instead of faked.
- Siemens' live embedded Figma prototype iframe (`embed.figma.com/proto/.../Siemens-BOS-Tablet-Solution`) was also replaced — it was a bigger exposure than the static images since it let visitors interact with the real file.
- `tetra.html` prose was also genericized per Dario's explicit answer ("Genericizar también el texto"): "TETRA Technologies" → "the client, a global oil-field services company"; "BlendMaster" (real Excel model name) → "legacy spreadsheet model"; "BlendSense" → fictional "BlendOps" throughout (headings, D3 sankey node data, JSON-LD structured data, table captions); "BlueLinx" (real internal API name) → "plant-monitoring system". Colleague names (Hernán Salvatierra, Yuri Paklikovskyi) were left as-is — not a client-confidentiality concern.
- Homepage (`index.html`) thumbnails for AT&T, TakeCommand, and TETRA (the last one only discovered via the broader hero-image grep, not the original per-project image audit) replaced with new generic SVG mockups (`images/inline/demo-*-thumb.svg`, `demo-blendops-options.svg`) matching each project's new fictional product identity.
- Raw flagged files **deleted from the working tree** (23 files: `images/inline/{siemens-02..09,nielseniq-02/04/05,att-01..04,tetra-01..04,takecommand-01}.jpg`, `images/tetra-options.png`, `images/thumb-{att,takecommand,tetra}.jpg`) so future commits stop carrying them. **Not done, flagged for Dario**: these files were already committed (and, per the live-site check, likely already pushed) in earlier sessions — deleting them from the working tree stops *new* pushes from including them, but the blobs remain in git history and would still be directly fetchable at their raw GitHub URL by anyone with the path until the history itself is rewritten (e.g. `git filter-repo` / BFG) or the repo is squashed. That's a separate, bigger decision Dario should make explicitly before doing it.

**Verification**: `node --check` on every extracted `<script>` block across all 5 touched pages + index.html — 0 syntax errors. jsdom smoke test — 0 real runtime errors (only the expected env-gap `requestAnimationFrame is not defined`, present pre-existing on all pages via the liquid-morph-title script; jsdom simply doesn't implement it). Grepped every touched page + `sitemap.xml` + `llms.txt` for the removed filenames — zero orphaned references; confirmed no page's `og:image`/`twitter:image` pointed at any flagged image (all use the shared generic `og-image.png`). Added a small mobile safeguard to the new `.demo-table` (`overflow-x:auto` on `.demo-body`, `min-width:420px` on the table) not present in the original plan. Also fixed a pre-existing (not introduced this session, present since at least Session 10) stray `</div></section>` sitting after `</html>` in `siemens.html`, `nielseniq.html`, `att.html`, `procore.html`, `oolalife.html` — harmless to browsers but invalid markup; removed while in those files.

**Follow-up — git history rewrite (same session)**: deleting the files from the working tree only stopped *future* pushes from carrying them; the blobs were still reachable in git history (commit `Portfolio2026`, which pre-dated this session and already contained the extracted images). Per Dario's explicit choice, rewrote history with `git-filter-repo --invert-paths` against the exact 24 flagged paths, across all 11 commits, then expired the reflog and ran `git gc --prune=now --aggressive`. Verified with `git rev-list --objects --all | grep` before and after — zero matching objects remain anywhere in history. Took a full working-tree backup to `/tmp` before starting. Re-added the `origin` remote (git-filter-repo removes it by design, to force a deliberate decision before pushing rewritten history). Every commit hash on `main` changed as a result (expected with history rewrite) — re-verified `node --check` across all 19 pages afterward, 0 failures, working tree clean.

**Still Dario's manual step**: this local history no longer shares a common ancestor-safe fast-forward path with what's already on GitHub, so the next push must be `git push --force origin main` (a normal `git push` will be rejected). Force-pushing is the one part of this that stays manual per the enterprise local-only/agent-never-pushes policy — and because it's a destructive rewrite of the *public* history, it's worth double-checking no one else has cloned/forked in the meantime before running it.

---

### Session 13 (September 2026) — Founder Mode section: VIRTU4L relocated, EDGA + Ascend Restyle case studies added

**VIRTU4L moved out of the main filterable grid.** Previously sat inside `#work-grid`'s `.cs-grid` between two client cards; moved to its own standalone `<section id="founder-mode">` placed after the main "07 projects" work section, before the marquee/archive divider. Section title kept as "When I'm the client" (Dario's own business, so still literally true for this card); subtitle broadened this session (see below) once two more cards joined it that aren't "being the client" in the same sense.

**Bug caught before shipping**: relocating VIRTU4L into a section reusing `.cs-grid`/`.cs-card` styling would have let the industry filter chips on the main grid hide it (it still carries a `.tag-ind` value), since `filterCards()` originally queried `.cs-card` unscoped. Fixed by giving the original filterable grid `id="work-grid"` and rewriting the selector to `document.getElementById('work-grid').querySelectorAll('.cs-card')` with a safe fallback. This also protects the two new cards added below — none of the three Founder Mode cards live inside `#work-grid`, so none are ever hidden by a filter click.

**New: `edga.html`** — case study for EDGA (Experience Designer Generalist Agent), Dario's self-built Claude Cowork/Code plugin. Covers what it is and why it was built (a phase-gated multi-agent Design Thinking process instead of an unstructured chat), its architecture (an Overseer that routes work to specialist sub-agents — UX Researcher, Product Strategist, Systems Designer, Component Builder, Figma Design Auditor, User Testing, Quality Auditor, Delivery Coordinator, plus a Memory Coordinator for long retainers), the three engagement modes surfaced through `/edga-new`'s 9-block intake (Advisory / Discovery / Full Project), the knowledge base's continuous-update pipeline (source → primary-source read → independent citation verification → capped distillation → user confirmation → confidence-tagged write → versioned release), and a real "Obsidian memory map" block using the exact 12 category names and note counts from the actual generated `Home.md` (Interaction & Interfaces 24, Psychology & Research 20, Product & Strategy 18, AI-First & Agentic UX 17, Process & Governance 11, Engineering & Delivery 10, Motion & Prototyping 5, Accessibility & Inclusive Design 3, Service & Systemic Design 3, UX Writing & Content 2, Spatial/XR/AR 1, Reference 1 — 115 notes total). Also states, per Dario's explicit ask, that he mentors internal designers and SoftServe's internal HR department on using Claude — placed in its own "Beyond the Plugin" block near the end, the most natural fit found for that fact on this page.

**New: `ascend-restyle.html`** — case study for the Ascend Restyle Claude Agent Skill, built for the internal UX CoE. Content pulled directly from the real `.skill` package (`ascend-restyle.skill` → `SKILL.md`, read via `unzip` + `sed`/`grep` since the file lived outside the session's mounted folders) and from the real usage record `restyle-session.md`. Covers the 7-step pipeline (intake → confirm structure with the designer, never inventing content → restyle using real Ascend OS tokens/hard rules → route each slide into one of 4 layout archetypes → generate an annotatable HTML preview → Agentation-toolbar edit loop → export to PPTX/PDF), the real Ascend OS design tokens (Azurio/Replica/Roboto Mono type, `--aos-lviv-blue-100`/`--aos-austin-orange-100`/`--aos-neutral-600` colors, chamfer-clip corners instead of border-radius, no shadows/glassmorphism, 120–220ms easing), and the real run against Dario's own 49-page portfolio PDF — including the two genuine content-correction decisions (industry-tag standardization) and the honest current status (preview generated, annotation pass still in progress). Explicitly distinguished from the separate `match`/`export-proposal` skills (new client proposal + candidate scoring) since this skill only restyles a designer's own existing material.

**Founder Mode section updated**: two new full-width feature cards added after VIRTU4L, same `.cs-card` full-width pattern (left panel / right content), linking to the two new pages. Neither new card uses a hotlinked or invented screenshot — EDGA's left panel is a plain monospace wordmark, Ascend Restyle's is a chamfer-clipped shape echoing its own "no rounded corners" design rule, both honest about being internal tools with no public marketing imagery. Section subtitle broadened from "building and running my own VR business from the ground up" to "a business I run and internal tools I built because nobody else was going to" — covers all three cards without re-litigating the "When I'm the client" title, which Dario only asked to relocate, not rename again.

**Verification**: `node --check` on every inline `<script>` block in `edga.html`, `ascend-restyle.html`, and `index.html` — 0 failures (the one apparent "failure" on `index.html` is its pre-existing `application/ld+json` structured-data block, not JS, and was never a script to begin with). Structural checks: `<section>` open/close counts balanced on `index.html`; `id="founder-mode"` and `id="work-grid"` each appear exactly once; `filterCards` still has exactly one real definition (`window.filterCards`, Session 10's animated version); each of the three Founder Mode cards' `location.href` appears exactly twice (onclick + onkeydown) and nowhere else. jsdom smoke test on all three files — 0 real runtime errors (only expected environment gaps: font/effects.css/effects.js can't be fetched from the sandbox, and `requestAnimationFrame` is unimplemented in jsdom, both pre-existing environment gaps unrelated to this session's edits). Existing `:focus-visible` styles, skip-to-content link, reduced-motion-safe reveal pattern, and mobile breakpoints (`@media(max-width:600px)`) carried over unchanged from the established page template on both new pages.

**Still open / not done this session**: the git-history-rewrite force-push from Session 12 remains Dario's manual step, deliberately deprioritized this session at his request ("validemos en local primero") — untouched here. `edga.html` and `ascend-restyle.html` have no image-modal script (consistent with `virtu4l.html`, which also lacks one) since neither page uses real screenshots. Commit made locally only, per the standing enterprise policy — push is Dario's manual step.

---

### Session 14 (September 2026) — EDGA's HR/mentoring note moved to index.html; sitewide "de-AI" prose pass

**Moved, not duplicated**: `edga.html`'s old block 06 ("Beyond the Plugin" — mentoring designers and SoftServe's internal HR department on using Claude) was removed from that page (block 07 "Stack & Tags" renumbered to 06) and rebuilt as a small callout inside `index.html`'s `#founder-mode` section, right after the three project cards — the natural home for it since that section is already framed around work Dario does beyond client engagements. Rendered as an inline-styled teal-accent note (no shared CSS added, per house rule 2) rather than the case-study `.decision` component, since that class doesn't exist in `index.html`'s own stylesheet.

**Sitewide prose pass — removing the "AI voice"**: Dario flagged that the site's copy reads like it was written by an LLM. An audit confirmed the dominant tell: heavy em-dash use as a rhetorical-pause/filler device (~600 instances across all 21 pages, e.g. "no server, no database, no API keys exposed — zero hosting cost"), plus occasional buzzword clichés and repetitive rule-of-three sentence construction.

Fixed across all 21 pages (`index.html`, `about.html`, all 14 case-study pages, and the 6 lighter archive pages) via six parallel editing passes, each rewriting "X — Y" filler constructions into proper sentences (split into two, joined with a comma, or a colon only where genuinely introducing a list), removing formulaic "It's not just X — it's Y" phrasing, and varying sentence rhythm to read like Dario actually talking about his own work rather than a marketing deck. Em-dash totals dropped from ~600 to ~330 sitewide; nearly all of the remainder sits inside `<script>`/`<style>` comments, `<title>`/meta/JSON-LD tags, D3 chart data, and a handful of intentional title-style labels ("VOS — VIRTU4L", date ranges like "Jun 2022 — Present") that read as normal human labeling rather than the AI-tell pattern — those were deliberately left alone per each pass's own report. Genericized/fictional content from the Session 12 NDA remediation (TrackWatch, BenefitBridge, Connectify, MarketPulse, BlendOps, "a global oil-field services company") was preserved exactly; only tone/phrasing changed, not facts, names, numbers, classes, ids, scripts, or CSS.

**Verification**: `node --check` on every inline non-JSON-LD `<script>` block across all 21 pages — 0 failures. jsdom smoke test on all 21 pages — 0 real runtime errors (only pre-existing environment gaps: fonts/effects.css/effects.js unfetchable in the sandbox, `requestAnimationFrame` unimplemented in jsdom). `<section>` open/close tag counts balanced on every file. `nielseniq.html`'s JSON-LD block (one pass flagged and self-corrected an accidental touch to it mid-task) re-verified to parse as valid JSON. Spot-checked `index.html`'s Founder Mode section and the new HR/mentoring callout post-pass — both read cleanly and weren't mangled by the same-file prose edit.

**Not done this session**: the Session 12 git-history-rewrite force-push remains Dario's manual step. Em-dash counts were not driven to zero — by design, per the brief given to each editing pass (a full removal was explicitly out of scope; the goal was cutting density, not eliminating every instance). Commit made locally only, per the standing enterprise policy — push is Dario's manual step.

---

### Session 15 (September 2026) — att.html: restored a visual, page was reading as empty

Dario flagged that `att.html` looked empty. Root cause: the Session 12 NDA remediation removed every real screenshot from this page (live AT&T México site + internal UI-toolkit doc, both genuinely client-confidential) and left the "Visual Context" block with only a disclosure sentence — no image at all, unlike `siemens.html` and `nielseniq.html`, which kept one or two safe generic images alongside their own disclosure text. That also meant `att.html` had **zero** `<img>` tags anywhere in the page body, so `effects.js`'s `initScrollHeroes()` (which auto-populates `.scroll-hero-wrap[data-auto]` in the hero header from the page's first qualifying content image) found no candidate and silently skipped — leaving the hero visually bare too.

**Fix**: added the already-existing, already-approved generic illustrative SVG (`images/inline/demo-connectify-thumb.svg` — the same fictional "Connectify" telecom-storefront recreation already used as this project's homepage card thumbnail) into the "Visual Context" block as a proper `.slide` with caption, ahead of the disclosure line — matching the image-then-disclosure pattern already established on `siemens.html`/`nielseniq.html`. No new file created, no client-identifying content reintroduced. As a side effect this also fixes the hero: it's now the first `.block img`/`.slide img` on the page, so `initScrollHeroes()` picks it up and builds the scroll-hero card automatically.

**Verification**: `node --check` on every inline script — 0 failures. jsdom smoke test — 0 real runtime errors (script-loading and `requestAnimationFrame` gaps are the same pre-existing sandbox limitations noted in every prior session; `effects.js` doesn't execute in this offline test harness at all, so the scroll-hero's actual pickup couldn't be runtime-verified here, but the exact matching logic was re-read directly from `effects.js` and confirmed no exclusion applies to this image). `<section>` open/close counts balanced (10/10). Confirmed the SVG file exists on disk and is git-tracked already (it predates this session).

---

### Session 16 (September 2026) — takecommand.html: real component-library specimen grid replaces the single-screen demo

Dario asked for a "21st.dev"-style component showcase for the "How the Component Library Felt to Use" section — no MCP by that name is connected in this account (checked `search_mcp_registry`, nothing matched), so this was hand-built in HTML/CSS/JS following the site's own Dark Matter tokens and the established `.demo-panel` pattern, rather than through that tool.

**Problem with the old version**: the BenefitBridge demo panel only showed one dashboard screen (Member Home) plus an admin table — reasonable for illustrating a *product*, but this case study is specifically about building a *component library*, and the demo never actually showed any components in isolation.

**Fix**: added a new first tab, "Component Library," now the default active view. It's a 6-card specimen grid — Button (primary/secondary/outline/disabled), Text Input (default + error state), Selection Controls (checkbox/radio, on and off), Status Badges (active/pending/expired/draft), Toggle, and Type Scale (H2/H3/body/mono caption) — styled like an actual design-system documentation page, each specimen labeled in mono caps the way a real library entry would be. A couple of specimens carry a small "AA 4.6:1" contrast chip, tying the visual back to the case study's WCAG/ADA framing rather than being decorative. The two original views (Member Home, Admin Plans) were kept, just moved to tabs 2 and 3. New CSS (`.lib-grid`, `.lib-specimen`, `.lib-btn`, `.lib-input`, `.lib-check`, `.lib-radio`, `.lib-type-row`, etc.) was added inline in `takecommand.html`'s own `<style>` block, not into `effects.css` (house rule 2). No JS changes were needed — the existing generic Session-12 tab-switching script is index-based and handled the third tab automatically.

**Verification**: `node --check` — 0 failures. `<section>` open/close balanced (5/5); rough `<div>` open/close count balanced (94/94). jsdom smoke test — `.demo-tabs` resolved to 3 tabs / 3 views, `.lib-specimen` count confirmed at 6, 0 real runtime errors. Not yet done: a live-browser visual check of the new grid at the 680px mobile breakpoint (the CSS includes a `grid-template-columns:1fr` fallback, but wasn't screenshotted this session).

---

### Session 17 (September 2026) — New case study: `gradeline.html` (fictionalized recreation of a real, active client engagement)

Dario asked to add the new project he's currently working on — a real, active, still-in-**discovery-phase** SoftServe client engagement — covering the versioned prototype "lobby" embedded in a mobile-device frame with controls on top, the same mobile app filtered by different personas, how token-usage was profiled and reduced for Cursor/Claude during the engagement, and everything else relevant for a recruiter: research conducted, weak points, and how cross-functional/cross-tool collaboration worked.

**Confidentiality handling (checked before writing anything)**: because this is a real, currently-active client engagement (unlike the already-completed AT&T/Siemens work, or the already-NDA-remediated Session 12 projects), this sits in a materially higher-risk tier. Per this account's enterprise policy (files under a client-named project path are confidential by default; explicit user confirmation required before any client data is read/copied/referenced in output that could leave the session), stopped before drafting content and asked Dario to confirm three parameters via `AskUserQuestion`. His answers, treated as binding constraints for the whole page: (1) use a **fictional** product/client name, not the real ones; (2) **roles only, no real people's names** anywhere; (3) illustrative, non-real screenshots, but **grounded in the real design-system code/tokens** that exist in the project (same rigor as the real Ascend OS tokens used for `ascend-restyle.html`), not invented from imagination.

**What's fictionalized vs. real**: product name "GradeLine," the client is described only as "a national paving and sealcoating contractor" (no company name, no real approver/stakeholder names — mirrors the existing `tetra.html`/"BlendOps" and `att.html`/"Connectify" pattern already used elsewhere on this site), and the three demo personas ("Marisol · Sales Rep," "Devon · Dispatcher," "Hank · Crew Lead") are new invented names distinct from the real project's own internal fictional demo-persona names, to avoid any ambiguity about what's been disclosed. What's real, read directly from the project's own files and generalized/paraphrased rather than quoted: the shadcn/ui + Tailwind design-token palette (white-first canvas, navy primary CTA, a scarce light-blue accent, amber demoted to warning-only, green success token), the fork-per-version prototype model deployed as one static multi-app build with a public "lobby" version switcher, the living component catalog (63 primitives), the three-persona/three-device structure, seven real on-site UX findings (paraphrased as device-shaped, not quoted), two genuinely honest weak points pulled from the project's own real changelog (a secondary theme's missing style-persistence, and the fork model's build-time cost past a dozen versions), and the real `TOKEN-EFFICIENCY-PLAN.md` methodology (input-token cost dominance, `.cursorignore` vs. the reversible `.cursorindexingignore`, diff-based edits, context rot / just-in-time loading, external checkpoint commits against runaway loops, prompt-caching prefix stability, fork-vs-branch decision rule) — all described in Dario's own voice, none of it verbatim from the source file.

**New file**: `gradeline.html`, following the established case-study template (`.cs-hero`/`meta-row`/`.metrics`/`.block`+`.block-inner`/`.decision`/`.reflection`/tags/footer nav, skip link, IO shim, scramble headings, image modal, `:focus-visible`). Centerpiece is a hand-built interactive "phone" widget (page-specific CSS/JS, inline per house rule 2, not added to `effects.js`/`effects.css`): a phone-frame mockup with two button rows on top — a version switcher (v0.1 → v1.1, each with a real-grounded "what changed" note) and a persona switcher (3 roles) — clicking either updates the phone's screen content live, satisfying both the "lobby scheme, versioned, in a mobile device with buttons on top" request and the "mobile app filtered by different personas" request in one component. New asset: `images/inline/demo-gradeline-thumb.svg`, an original illustrative route-map + persona-card graphic (same fictional-recreation pattern as the existing `demo-connectify-thumb.svg`/`demo-blendops-options.svg`), used both as the page's Visual Context image (feeds `effects.js`'s scroll-hero auto-populate) and as the new homepage card thumbnail.

**index.html**: added a new full-width feature card (`.cs-card`, `grid-column:1/-1`, same pattern as the `tetra.html`/`benefits-platform.html` "current" cards) inside `#work-grid`, placed right after the Benefits Platform card, marked "✦ current" / "in progress." Reuses the existing `construction` filter chip (already present, previously only mapped to `procore.html`) rather than adding a new one.

**Verification**: `node --check` on every non-JSON-LD inline `<script>` in `gradeline.html` — 0 failures (the JSON-LD block "fails" the same way every other page's structured-data block does — it's JSON, not JS, and was never a real script). `<section>` open/close balanced (8/8), `<div>` open/close balanced (111/111). jsdom smoke test with `runScripts:'dangerously'`: phone widget renders with real content on load, clicking a persona button swaps the screen title/body/dock and the caption text correctly, clicking a version button updates the version note correctly, the scroll-hero auto-populate picked up exactly one image, and the image-modal markup is present — 0 real runtime errors (only the same pre-existing sandbox gaps as every other page: unfetchable Google Fonts link and `requestAnimationFrame` unimplemented in jsdom).

**Not done this session**: no footer-nav chain edits were made to `benefits-platform.html` or `virtu4lslacksagent.html` themselves — the new page links out to both, but neither of their own footers was updated to link back in, so the site-wide prev/next chain isn't a perfect doubly-linked list around this new page (matches how new pages have been slotted in previously; the primary nav path back to any page is always `index.html`). Commit made locally only, per the standing enterprise policy — push is Dario's manual step.

---

### Session 18 (September 2026) — gradeline.html: added a "Process and Tools" table

Dario shared a reference screenshot (a 5-stage "AI Assisted Design: Process and Tools" table — AI Role, Tools, Process, Artifact, Answers, Audience rows across Frame the Problem / Explore Directions / Materialize / Prototype the Experience / Specify and Ship columns) and asked for a 1:1-structure version with GradeLine-specific content, for readability.

**New block** inserted into `gradeline.html` between "The Solution" and the "Lobby, Versioning & Personas" interactive block: a `.pt-grid` CSS-grid table (page-specific CSS, inline per house rule 2 — `.pt-wrap`/`.pt-grid`/`.pt-cell`/`.pt-role-row`/`.pt-role-box`/`.pt-tools`/`.pt-tool-tag`/`.pt-answer`), 6 columns (row-label + 5 stages) × 7 rows (header, AI Role, Tools, Process, Artifact, Answers, Audience). Kept the reference's exact structure — connected icon-in-box row for "AI Role," pill tags for "Tools," a highlighted color for the "Answers" row — but restyled to the site's own Dark Matter tokens (teal icons/pills on dark surfaces) instead of the reference's light-blue theme, and wrote 5 new original inline SVG icons (expand-arrows / branch / wand / code-brackets / package) rather than reusing any real icon library's exact glyphs. Content maps the same five-stage arc onto GradeLine's actual (fictionalized) workflow: synthesizing on-site persona findings → sketching directions → drafting screens against the 63-primitive catalog → forking a live versioned prototype → hardening + documenting for handoff. Horizontally scrollable on narrow viewports (`min-width:900px` on the grid inside an `overflow-x:auto` wrapper) rather than collapsing, since 6 columns of tabular data don't reflow cleanly to a single column.

**Verification**: `node --check` unaffected (no new `<script>` blocks, table is static markup). `<section>` open/close balanced (9/9), `<div>` open/close balanced (162/162). jsdom: confirmed 42 grid cells (7×6), 5 icon boxes, 5 highlighted "Answers" cells, and heading-scramble count unchanged at 5 — 0 new runtime errors.

**Not done this session**: no live-browser screenshot of the horizontal-scroll behavior on a real narrow viewport. Commit made locally only — push remains Dario's manual step.

---

### Session 19 (September 2026) — "Token of gratitude" gift: a free guide + a friendly exit-intent modal

Dario uploaded `token-burnout-optimization.md` (his own portable, non-project-specific guide to token/session-hygiene habits for AI code agents) and asked to publish it on the portfolio as a thank-you gift for visitors, framed as a "wait, don't go" moment, placed near the Founder Mode / VIRTU4L area with a modal.

**Note on this repo's history**: an earlier same-day session added a Vite+React dev toolchain for a tool called Agentation directly to `main`, then — at Dario's explicit request not to push it — that commit was moved onto a new local-only branch (`local-tooling`) and `main` was hard-reset to the commit right before it. So `main`'s history here picks up cleanly from the Process & Tools table work with no trace of that toolchain; nothing about it is referenced further in this log since it never shipped on this branch.

**Translation**: the source file is in Spanish; translated faithfully to English (structure, section numbers, and every rule preserved, nothing added or cut) since the rest of the site's audience-facing content is in English. Saved as `ai-agent-token-habits.md` in the repo root (site root — matches the existing convention from Session 7's portfolio-PDF download, no new `downloads/` folder introduced).

**New file: `gift-token-habits.html`** — a standalone article page in the site's own template language (nav, hero, `.block`/`.block-inner` sections, scramble headings, skip link, `:focus-visible`), one section per guide topic (What This Solves, Layered Memory, Checkpoint Timing, the Restart Rule, Memory Writes, When to Interrupt, Scaffolding, Commit Discipline, Plan-First, Indexing, Durable Notes, Anti-Patterns, Install), plus a prominent "Download the .md file" button (top and bottom) and a closing italicized thank-you note signed by Dario. No case-study machinery (no metrics bar, no meta-row grid) since this isn't a case study — kept deliberately lighter.

**index.html additions**:
- A `.gift-trigger` card — dashed violet border, 🎁 emoji, one line of copy, an "Open the gift" button — added directly after the existing "internal enablement" callout in `#founder-mode`, right where the VIRTU4L/EDGA/Ascend-Restyle cards live, per Dario's placement request.
- A new `<dialog id="gift-modal">` (page-specific CSS/JS inline, per house rule 2) styled after the existing case-study image-modal pattern (double-`requestAnimationFrame` open, `.is-open` class driving the backdrop blur, focus moved to the close button on open and restored to whatever was focused before on close) but built fresh for this content — friendly copy ("Wait — before you go 👋"), an honest, guide-grounded "what it saves you" list (fewer runaway sessions burning budget unnoticed, less time re-explaining a decision the agent already made, fewer scrap-and-restart cycles), and three actions: "Read the guide" (→ `gift-token-habits.html`), "Download .md," and "Maybe later."
- **Exit-intent**, matching the "don't go" framing literally: a `mouseout` listener fires the modal when the cursor leaves via the top of the viewport (`clientY <= 0`), gated on two things — the visitor must have scrolled at least once first (skips firing on an instant bounce) and it hasn't already fired this tab session (`sessionStorage.giftModalSeen`). The same modal also opens on demand via the trigger button's `onclick="window.openGiftModal()"`, independent of the exit-intent gate.

**Verification**: `node --check` on every non-JSON-LD inline script in both files — 0 failures. `<section>`/`<div>` balance confirmed on `gift-token-habits.html` (14/14, 35/35); `<section>`/`<div>`/`<dialog>` balance confirmed on `index.html` (4/4, 350/350, 1/1). jsdom (with a small `showModal`/`close` polyfill, since jsdom doesn't implement `HTMLDialogElement.showModal()` at all — a jsdom limitation, not a bug in this code) confirmed: opening via `window.openGiftModal()` sets the `.is-open` class and moves focus to the close button; the close button correctly closes it; exit-intent does **not** fire before a scroll event, **does** fire after one; `sessionStorage` gating behaves correctly on repeat triggers. One jsdom run threw an unrelated, non-reproducible `DOMException` from elsewhere in `index.html`'s existing scroll-driven scripts when a synthetic `scroll` event was combined with the exit-intent path in a particular order; isolated it and confirmed a bare `scroll` event alone doesn't crash, and re-running the exact exit-intent sequence cleanly afterward produced no error — treated as jsdom synthetic-event flakiness (a known-fragile combination in this test environment), not a defect, since it never reproduced consistently and the same interaction succeeded cleanly on repeat runs.

**Not done this session**: no live-browser confirmation (the built-in browser tool can't open local files or localhost servers, and the site isn't pushed yet, so there's no reachable URL to test against this session). No screenshot of the modal's visual appearance. Commit made locally only, on `main` — push remains Dario's manual step.

---

### Session 20 (October 2026) — index.html visual-language redesign (Vengeance UI-inspired) + CV-sourced content refresh

Dario asked for a full redesign of `index.html`'s visual language inspired by `vengenceui.com` (glass surfaces, floating dock nav, cinematic/animated backgrounds), researched via the live site, the `Ashutoshx7/VengeanceUI` GitHub repo, and two component registry sources (`spotlight-navbar.json`, `glass-dock.json`). Per the established "reference catalogs: adapt to vanilla JS" house rule, the techniques were hand-ported into vanilla CSS/JS — the actual React/Tailwind/Framer-Motion library was never installed, so this repo's "no build step, no npm" rule (and the separate `local-tooling` branch holding Agentation) is untouched.

Dario also uploaded his current, real `2026DarioEspinosaExperienceDesign-Lead.html` CV deck (marked SOFTSERVE CONFIDENTIAL throughout, containing real PaveAmerica and TETRA Technologies client/stakeholder names) and asked to pull from it for the public site. Per his explicit confirmation (AskUserQuestion, both options selected): only safe/generic bio-skills-tools content was used, and metrics/bullets were refreshed only on already-public case studies — never real PaveAmerica or TETRA names, and GradeLine/BlendOps (the two fictionalized confidential projects) were left untouched except for one fix (below).

**Confidentiality fix**: found and corrected a pre-existing leak — the BlendOps feature card's footer line read "energy-services · **TETRA Technologies** · in progress," the real client name, even though `tetra.html` itself has always used the fictionalized "BlendOps" product name and a generic "oil-field services company" client description. Changed to "energy-services · oil-field services company · in progress" to match the page's own established fictionalization.

**Visual redesign (all inline in `index.html`'s existing `<style>`/`<script>` blocks, per house rule 2 — no shared `effects.css`/`effects.js` changes)**:
- **Floating glass nav dock**: `<nav>` wrapped in a new `.nav-dock-wrap`, converted from a full-width top bar into a centered, rounded glass pill (`backdrop-filter: blur(22px) saturate(1.5)`, translucent border, drop shadow) that sits 14px from the top and tightens slightly (`.scrolled` class, toggled by a new scroll listener) once the page scrolls past 24px. Falls back to a full-width bar on mobile (≤720px) to keep nav links easy to tap. All existing nav links/IDs/behavior unchanged.
- **Ambient background rays**: new `.ambient-bg` (fixed, full-viewport, `z-index:-1`, `aria-hidden`) with three slow-drifting blurred radial blobs (teal, violet, dim teal) behind all content — the cinematic backdrop Vengeance UI is known for. Frozen (no animation) under `prefers-reduced-motion: reduce`.
- **Glass surfaces**: hero-stats bar, every `.cs-card` (work grid + founder-mode grid), the about-section grid, the career timeline, the contact strip, and the gift-trigger card all got `background: var(--glass-bg)` + `backdrop-filter: blur(22px) saturate(1.5)` + translucent borders, replacing solid dark panels. Work cards additionally get a soft teal glow (`box-shadow`) on hover instead of only the background darken they had before — the closest vanilla-CSS equivalent to Vengeance's "glow border card," without needing the GSAP/conic-gradient machinery the real component uses.
- New CSS custom properties added to `:root`: `--glass-bg`, `--glass-bg-hi`, `--glass-border`, `--glass-border-hi`, `--glass-blur`, `--glow-teal`, `--glow-violet` — reusable across all of the above, keeping the change centralized rather than repeating raw rgba() values.
- `#scroll-progress`'s `top` offset moved from `48px` (old flush nav height) to `0` (nav is no longer flush-top); `.hero-content`'s `padding-top` increased from `56px` to `92px` to clear the floating dock.

**Content refresh (safe/generic + already-public projects only)**:
- **About section**: bio sharpened with the CV's own safe framing (AI-native, code-first prototyping: "I prototype in code using Claude and coding agents..."), plus a new `.pillar-row` of four competence chips (IA & Design Systems, Accessibility, Product Design, AI-Native Prototyping — the CV's own "Competence Focus" slide) and a compact tools/stack line (Figma, Affinity, Sketch, Adobe CC, AEM, Penpot / Claude, Cursor, local LLMs / Miro, Maze, UserTesting, HotJar). No real client or people names anywhere in this section — it never had any.
- **AT&T card**: added the 2021 AEM design-system detail (seven teams unified from Photoshop into one shared Figma component library) alongside the existing 500%/96% metrics.
- **Siemens card**: added the "sole UX designer, direct line to the Product Director, no design committee" framing and the fatal-collision origin story from the CV, alongside the existing 40%/60% metrics (unchanged — the CV didn't supply different numbers for these).
- **Oola card**: added the "coach, not a checklist" philosophy-to-product framing and the ~50-interviews detail, alongside the existing 40%/55% metrics.
- **Take Command card**: replaced the generic "0→CoE built from zero" third metric with the CV's concrete figure (−70% accessibility-related complaints), added the memorable product promise quote ("Manage benefits in under an hour per month"), and moved "0→CoE" into the footer meta line instead of losing it.

**Verification**: extracted and `node --check`'d all 6 inline `<script>` blocks in `index.html` — 5 pass (the 6th is the JSON-LD structured-data block, which is JSON, not JS, and fails the same way on every page in this repo; not a defect). Confirmed `window.filterCards` still has exactly one definition (house rule). Confirmed zero remaining references to "TETRA Technologies" or "BlendSense," and zero references to Agentation, anywhere in `index.html`. jsdom smoke test (`runScripts:'dangerously'`) confirmed: `#nav-dock-wrap` renders, all 3 ambient-bg rays render, all 4 pillar chips render, `filterCards` is callable, and a synthetic `scroll` event correctly toggles the dock's `.scrolled` class — 0 real runtime errors (only the standard, previously-documented jsdom environment gaps: unfetchable Google Fonts/`effects.css`/Three.js CDN/`effects.js`, none of which are defects in this code).

**Not done this session**: the redesign covers `index.html` only, as scoped — the 20 individual case-study pages (`tetra.html`, `gradeline.html`, `nielseniq.html`, etc.) still use the pre-existing Dark Matter look and were not touched, so clicking into any of them from the new glass homepage is an intentional, deliberate style step-down rather than a mismatch introduced by accident; a follow-up session would be needed to extend the glass/ambient treatment site-wide if desired. No live-browser visual confirmation of the floating dock or ambient rays (the built-in browser tool can't open local files, and the site isn't pushed yet). The Siemens-section CV text runs past what was read this session (slide 22+ was the practical stopping point for sourcing material — Siemens and AT&T content came from slides already read in a prior session plus the text re-confirmed here). Commit made locally only, on `main` — push remains Dario's manual step.

---

### Session 21 (October 2026) — GradeLine thumbnail: real-mobile-screen-shaped recreation, not an abstract illustration

Dario flagged that the GradeLine card's existing thumbnail (an abstract route-map + persona-card-stack graphic) didn't represent the project correctly, and asked for real images from the actual PaveAmerica project, focused on mobile, the way the confidential CV deck does.

**Confidentiality check before acting**: the real PaveAmerica project folder is live, active, still in discovery, and confidential by standing enterprise policy — same as the CV deck from Session 20. Its real mobile screenshots carry real branding ("Pave America," "PS Mobile Next," a real logo mark) and real stakeholder names (Sean Whitfield, Nelson Diaz, Roxana Delgado) baked directly into the UI. Publishing those as-is on a fully public, indexed site (`datadaeon.github.io`) is a materially different exposure than using them inside an internal, already-confidential CV deck — and it would also reverse the explicit fictionalization decision made when GradeLine was first built. Flagged this conflict to Dario directly rather than proceeding; he chose "real screenshots, but edited to remove branding/text/real data first."

**What was actually built**: rather than pixel-redacting the real screenshots (raster blur/white-out is fragile — easy to miss a logo or line of real text, and the result tends to look messy on a portfolio), three real mobile screens were used as structural references only — `00-login.png` (role-picker/sign-in), `12-nelson-route.png` (field/route view with map controls and a bottom tab bar), `06-sean-estimate.png` (sales/estimate flow with a step progress bar and bottom tab bar) — and a brand-new SVG (`images/inline/demo-gradeline-mobile.svg`) was hand-built that mirrors the real sign-in screen's exact structure (phone frame, status bar, logo mark, app name, a vertical stack of role cards with avatar/name/role/sub-label, a status pill at the bottom) with 100% original content: an original circular route/chevron glyph (not the real logo), the fictional "GradeLine" wordmark, and the site's already-established fictional personas (Marisol · Sales Rep, Devon · Dispatcher, Hank · Crew Lead — the existing mapping from the phone-widget built in Session 17). No real name, real product name, real logo, or literal screenshot pixel made it into the new asset — confirmed by grepping the whole repo for "Pave America," "Pavement," "Sean Whitfield," "Nelson Diaz," "Roxana Delgado," and "PS Mobile Next" (zero matches).

**Swapped into both places that used the old thumbnail**: the GradeLine feature card image on `index.html`, and the "Visual Context" figure on `gradeline.html` (alt text and caption updated to describe a mobile sign-in/role-picker screen instead of a route map; the existing confidentiality disclosure paragraph was extended to explicitly note the mobile layout is grounded in the real screen's structure, with no client branding, real names, or real screens reproduced). The old `demo-gradeline-thumb.svg` file is now unreferenced by any page — left in place rather than deleted, since deleting a tracked file wasn't asked for; Dario can remove it later if he wants.

**Verification**: rendered the new SVG to PNG and visually inspected it — confirms a clean, generic phone mockup with no real branding or names. Repo-wide grep for the real client/stakeholder names above returned zero matches. `<section>`/`<div>` balance on `gradeline.html` unaffected (9/9, 162/162 — no structural markup changed, only an `<img src>`, an `alt`, a caption string, and the disclosure paragraph). No JS was touched this session, so no `node --check`/jsdom re-run was needed.

**Not done this session**: did not build additional mobile screens for the route/estimate references (Nelson's and Sean's screens) beyond using them for layout research — only the sign-in/role-picker screen got a new asset, since that's the one used as the card thumbnail and hero visual; a future session could add a small gallery of 2–3 more mobile screens inside `gradeline.html` if Dario wants more visual proof of the mobile surface. Commit made locally only, on `main` — push remains Dario's manual step.

---

### Session 23 (October 2026) — Hero background: Omarchy-style glitch-pixel wordmark

Dario asked for `index.html`'s hero background to work "muy 1:1" like `omarchy.org`'s — a request to actually research and match, not just approximate.

**Research**: opened omarchy.org in the built-in browser and inspected it directly rather than guessing. Found a single full-bleed `<canvas class="hero-canvas-in">` behind the page's giant pixel-art "OMARCHY" wordmark and the scattered-dot texture around it. Tested whether it's mouse- or scroll-reactive by diffing canvas pixel-data hashes before/after synthetic and real mouse movement and after scrolling — confirmed (Dario explicitly asked for the *interaction* to match, so this mattered) that it is **not** pointer- or scroll-reactive: it's a one-time staggered reveal-in animation on page load that settles into a slow ambient twinkle, then holds static. Zoomed into the wordmark to confirm it's a blocky 5×7-ish dot-matrix bitmap font with a vertical gradient fill, and into the background texture to confirm it's sparse scattered squares, denser toward the corners.

**What was built**: the old Three.js CDN particle field in `#hero-canvas` (`<script src=".../three.min.js">` plus its particle IIFE) was removed entirely and replaced with a new, dependency-free vanilla canvas effect that mirrors the mechanism 1:1: a hand-authored 5×7 dot-matrix bitmap font (defined from scratch for the 9 letters needed — D, A, R, I, O, E, S, P, N — not copied from any font file), spelling "DARIO ESPINOSA" in a violet→teal vertical gradient (the site's own existing accent colors, not Omarchy's palette), surrounded by a corner-weighted sparse scatter field at the same cell size. On load, every active cell gets a randomized delay (0–900ms for text, 0–1400ms for scatter) and eases in, then settles into a continuous slow per-cell opacity twinkle (sine wave, randomized phase/frequency per cell) — replicating the measured load-in-then-static-ambient behavior rather than inventing a different (e.g. mouse-tracked) interaction. Fully respects `prefers-reduced-motion`: reveal and twinkle both collapse to their final static values with no animation loop at all. Resize-safe (recomputes the whole grid, debounced). The canvas element picked up `aria-hidden="true"` since the name is already conveyed accessibly by the existing `#hero-name` heading — the pixel wordmark is decorative, not a second source of truth for the name.

**Verification method, given real constraints**: this environment's browser tool can't load local files, and no headless-browser binary could be installed (network-allowlisted, `playwright install` and `npm install puppeteer` both blocked). So the layout/font/scatter algorithm was first validated separately in a throwaway Python+Pillow script — same grid math, same font bitmaps, same corner-weighting formula — rendered to a static PNG and visually confirmed to read "DARIO ESPINOSA" cleanly before porting the validated parameters into the real JS. The actual shipped JS was then checked for syntax (`node --check`, 0 failures across all 5 real script blocks) and exercised in jsdom with `runScripts:'dangerously'`: confirmed `#hero-canvas` exists and that `getContext('2d')` returning `null` (jsdom has no real canvas backend without the native `canvas` package — a known, previously-documented environment gap, same category as the unfetchable Google Fonts/Three.js CDN) is caught by an explicit `if (!ctx) return;` guard with zero thrown exceptions — the page degrades to a plain background exactly as the old Three.js code degraded when its CDN failed, rather than erroring. True pixel-level visual confirmation of the live, composited page is still pending Dario opening it locally.

**Not done this session — explicitly deferred, not forgotten**: Dario also asked for the floating "now playing" widget from omarchy.org (album art, track title/artist, mute toggle, animated equalizer bars) and, when asked, said he wants it to play a **real track of his own** rather than a decorative mock or a Spotify/SoundCloud embed. That needs an actual audio file plus the title/artist to display, which only he can provide — nothing was built or committed for it this session rather than shipping a placeholder with invented song/artist text. Asked him for the file in this session's reply. Commit made locally only, on `main` — push remains Dario's manual step.

---

### Session 22 (October 2026) — GradeLine screens gallery: route map + two live-AR surfaces

Dario asked for more pieces showing what the different internal pages of the app look like — "like a clone of the UI but anonymized" — specifically calling out that the real product has maps and AR features worth showing.

**Research**: went back into the real, confidential PaveAmerica project folder (same one flagged in Session 21) looking specifically for map and AR screens. Found dedicated AR components in the real prototype source (`CaptureArStage.tsx`, `WalkArCompareStage.tsx`, `SatelliteMeasureStage.tsx`) and a full step-by-step flow-capture delivery folder with real screenshots. Used three of those real screens as structural references only, the same anonymization approach established in Session 21: a live-route/dispatch-map screen, a live-AR lot-measurement screen (auto-detects lot square footage and crack length from the camera feed, flags standing water), and an AR "ghost overlay" screen (lines up a live camera view against a prior site photo to verify a flagged issue, e.g. a drainage problem). Real names, the real product name, and the real logo mark present in those reference screenshots were never copied into any output.

**New assets** (all original SVGs, hand-built from scratch, not derived pixel-for-pixel from any real screenshot): `images/inline/demo-gradeline-route.svg`, `images/inline/demo-gradeline-ar-measure.svg`, `images/inline/demo-gradeline-ar-compare.svg`. All three use the existing fictional "GradeLine" branding, the existing fictional personas (Marisol appears in the AR-compare screen's site-visit label, matching her established Sales Rep role), generic placeholder data (fictional lot sizes, fictional addresses, "lot 12" instead of reusing the real demo environment's own "Meridian" placeholder everywhere), and the design-system palette already documented on this page (navy `#0e2a47`, blue `#0693e3`, light blue `#8ed1fc`, amber `#f4a11e`, green `#2e7d32`).

**`gradeline.html` changes**: the "Visual Context" section was restructured from a single image into a four-image `.vc-gallery` grid (2 columns desktop, 1 column mobile — new CSS added to the page's existing `<head>` `<style>` block, not a stray inline `<style>` tag, per house convention) showing: mobile sign-in, live route/dispatch map, live-AR lot measurement, and AR ghost-overlay verification. Each image keeps its own caption; the shared confidentiality disclosure paragraph at the bottom was reworded slightly ("Everything above," plural "layouts") to cover all four images instead of one. The existing image-modal zoom-on-click behavior (wired generically to `.block img`) picked up all three new images automatically — no JS changes were needed.

**Verification**: rendered all three new SVGs to PNG and visually inspected each (caught and fixed one cosmetic issue — a "Standing water detected" chip whose text slightly overflowed its box — before finalizing). Repo-wide grep for the real client/stakeholder/product names (now including "PS Mobile Next" variants) returned zero matches. `<section>`/`<div>`/`<style>` balance on `gradeline.html` confirmed (9/9, 169/169, 1/1). All four SVGs (including the Session 21 one) parsed cleanly as valid XML.

**Not done this session**: did not add a dedicated screen for the dispatcher's desktop ops view or the sales/estimate flow beyond what Session 21 already covers in prose — the gallery focuses on the two features Dario specifically called out (maps, AR) plus the two screens already in place. Commit made locally only, on `main` — push remains Dario's manual step.

---

### Session 24 (November 2026) — Omarchy hero correction + hero layout simplification (remove portrait, de-duplicate name)

Dario correctly pushed back on Session 23's conclusion: the omarchy.org canvas background is **not** a one-time reveal that settles static — it's continuously animated. Re-investigated from scratch with a stricter method than Session 23 used (that session's conclusion was based on a handful of screenshots and a short sample window — not rigorous enough): instrumented `CanvasRenderingContext2D.prototype.fillRect/clearRect/fill/drawImage/putImageData` directly on the live omarchy.org page to count real draw calls over multi-second windows (not screenshots), and separately hash-diffed cropped canvas pixel regions with real OS-level mouse hover (via the browser tool's `hover` action, not synthetic `dispatchEvent`, which isn't reliable for triggering real listeners) versus no hover. Also fetched and read the site's actual readable JS/CSS (the `Base.astro` page-wide bundle, all inline `<head>` scripts, and every CSS rule referencing hero-related selectors) to ground the behavioral evidence in source where possible.

**Findings** (full OBSERVED/INFERRED/UNKNOWN write-up, checklist, data model, and build spec saved to the new `research/omarchy-hero-reverse-engineering.md`):
- The canvas redraws continuously and indefinitely via `requestAnimationFrame` (~43,700 `fillRect` calls/sec measured, zero `clearRect`/`fill`/`drawImage`/`putImageData` calls in the same window) — it does not settle into a static image, correcting Session 23's claim.
- The real wordmark's shape and theme-gradient colors come from a separate, permanently visually-hidden DOM element (`[data-hero-wordmark]`, CSS `mask-image` of the logo SVG + a 5-stop `background-image` gradient keyed to theme custom properties) that the canvas code reads as a geometry/color template — not from anything baked into the canvas drawing code itself.
- A one-time 0.9s CSS opacity fade-in on the canvas element is a separate mechanism from the continuous particle animation (two independent systems, easy to conflate).
- Pointer hover over the hero produces no detectable change in the sampled canvas region (same two recurring pixel-hash states with or without real hover) — this part of Session 23's conclusion held up under stricter testing.
- The actual drawing module's source could not be located (the one plausibly-named hydrated component turned out to be an unrelated widget-directory gallery, and its `component-url` 404'd); scroll- and resize-reactivity, and the floating music widget's playing-state behavior, remain open items with exact next steps documented in the research file.

**Hero section edits in `index.html`** (separate, Dario-directed follow-up once the report was delivered):
- Removed the `.hero-portrait` container entirely (the `images/me.jpg` headshot + the `// dario-espinosa · san-cristobal-mx` caption), along with its CSS (`.hero-portrait`, `.portrait-img-main`, the `pin` keyframe, `.portrait-label`) and the now-unused mobile override. `.hero-content` changed from a two-column `1fr 360px` grid to a single `1fr` column.
- De-duplicated the name: since "DARIO ESPINOSA" is already spelled out in the hero canvas background wordmark (Session 23), the big `#hero-name` headline in `.hero-left` no longer repeats it by default — the glitch-word pairs were swapped so the headline shows "EXPERIENCE DESIGNER" (his role) at rest and reveals "DARIO ESPINOSA" on hover, instead of the previous DARIO/ESPINOSA-at-rest, EXPERIENCE/DESIGNER-on-hover arrangement. `aria-label` on `#hero-name` updated to `"Dario Espinosa, Lead Experience Designer"` so the full name stays accessible to screen readers even though neither the headline's resting text nor the (`aria-hidden`) canvas conveys it to assistive tech.
- Corrected the Session 23 code comment above the pixel-background IIFE, which had claimed (per the now-superseded conclusion) that the effect "settles" into static and that this was confirmed to match Omarchy's own behavior — reworded to state it continues indefinitely and is deliberately non-pointer/scroll-reactive, with a pointer to the new research file for the full evidence.

**Verification**: extracted and `node --check`'d all inline `<script>` blocks post-edit — 0 syntax errors (same expected JSON-LD exception as every prior session). Grepped for `hero-portrait`/`portrait-img-main`/`portrait-label` — zero remaining references anywhere in `index.html`. Manually re-read the full hero HTML block and the surrounding CSS to confirm tags and braces stayed balanced after the removals.

**Not done this session**: did not implement the floating music widget (still blocked on Dario supplying a real audio file + title/artist — unrelated to this session's hero work) or act on the still-open scroll/resize/theme-switch reactivity questions documented in the research file (lower priority; the research file gives the exact next step for each if ever wanted). `images/me.jpg` was left in place, unreferenced, rather than deleted (no file deletion was requested). Commit made locally only, on `main` — push remains Dario's manual step.

---

### Session 25 (November 2026) — Hero canvas rebuilt to actually match Omarchy's look; music widget built

Dario pushed back again, harder: Session 24's hero still didn't look "anywhere near" omarchy.org's actual hero — he'd only meant to scope down the *portrait/name-duplication* complaint to the hero, not approve the visual fidelity of the background effect itself. He also flagged that the floating music widget still hadn't been built at all. Explicit ask: match the background animation and the word treatment "one to one," with "Dario Espinosa" in place of the reference wordmark.

**Re-investigation, this time with real screenshots instead of relying on the prior session's draw-call/CSS forensics alone**: opened omarchy.org fresh and zoomed into the actual rendered hero. This overturned a key assumption from Session 24's research file: the big wordmark itself is **not** flickering or per-cell-twinkling — comparing two zoomed screenshots of the same letter region taken seconds apart showed them pixel-identical. It's a crisp, static pixel-grid rendering filled with a *discretely banded* (not smoothly interpolated) vertical gradient — roughly 5 visible color steps from light lavender at the top of the letterforms to dark indigo at the bottom. Only the sparse background dust — small single-tone square dots, corner-weighted, mostly empty in the middle of the canvas — actually animates, and does so continuously: comparing two zoomed screenshots of the same corner seconds apart showed visibly different dots lit each time (some newly bright, some gone dim), independent confirmation (at the pixel level, not just a draw-call count) of Session 24's continuous-animation finding.

**Hero canvas rewritten** (`#hero-canvas` IIFE, "PIXEL HERO BACKGROUND"):
- Replaced the hand-built 5×7 bitmap font entirely with real canvas text rendering: "DARIO" and "ESPINOSA" (two stacked lines, matching the existing `#hero-name` layout convention) are drawn with `ctx.font`/`fillText` in Geist Mono (already loaded site-wide) onto an offscreen canvas, sized so the longer line ("ESPINOSA") fills ~86% of the hero width; the resulting alpha channel is then sampled per grid cell to build the letter mask. This keeps the wordmark legible and well-proportioned at any hero size, rather than being limited to the 9 hand-drawn glyphs the old bitmap font had.
- Letter cells render with a fixed, discrete 5-band teal→violet gradient (this site's own `--teal`/`--violet` accents, not Omarchy's palette) and no longer flicker — matching the corrected, static-wordmark observation above.
- Background dust cells kept their corner-weighted scatter placement but tuned sparser (probability formula retuned down) to match the reference site's much emptier mid-canvas, and switched from a smooth twinkle sine to a sharp, infrequent "glint" curve (`sin(...)` raised to a high power, so most frames sit near-dark with occasional bright spikes) to match the "mostly dim, occasional bright pop" look actually seen.
- Fixed a latent bug while in there: the old resize handler called `requestAnimationFrame(render)` again on every resize, stacking a new parallel render loop on top of the one already running forever — now resize only rebuilds the grid (`layout()`); the existing loop picks up the new state by itself on its next frame.
- Added the small, previously-skipped CSS fade-in (`#hero-canvas` now has a one-time 0.9s opacity animation on load, `prefers-reduced-motion`-gated) noted in Session 24's build spec but not yet wired up.

**Floating music widget built** (`.music-widget`, fixed bottom-left, hidden on mobile ≤720px): matches the reference site's actual mechanism, corrected from Session 24's research — it's a **mute toggle over a single always-running ambient track**, not play/pause controls (Omarchy's own widget never stops the track; the button only ever toggles whether it's audible). Structure: an icon button (original speaker-muted/speaker-on glyphs, not copied from any source), title + artist text with a hover/focus-swap to a live elapsed/duration readout, a 4-bar equalizer that only animates once actually audible (matching the reference site's observed static-while-muted behavior), and a scrubbable progress bar (thin fill + an invisible native `<input type="range">` layered on top, the same accessible-slider pattern used on the reference site). Ships pointed at `music/track.mp3` (not yet present) with placeholder title "Add your track" / artist "Dario Espinosa" (no third-party song or artist name used anywhere — Dario's prior answer was explicit that he wants his own real audio, not a copied or invented one); the widget stays at `opacity:0`/inert until that file actually loads (`loadedmetadata` fires), and gracefully stays hidden rather than erroring if it's missing (`error` handler) or if a browser blocks the autoplay-muted attempt. Once Dario drops a real file at that exact path, the widget activates itself with no other code changes — the title/artist text can be edited directly in the two `#music-title`/`#music-artist` spans in `index.html`.

**Verification**: `node --check` on all real inline script blocks — 0 errors (same expected JSON-LD exception as every session). A pure-math unit test (Node, no DOM) on the new `bandColor` gradient-quantization and corner-weighted scatter-probability functions, plus the font-size-fit/clamp arithmetic across wide/short/narrow synthetic hero dimensions — all passed. A behavioral test of the music widget's actual control-flow (jsdom + a hand-written `Audio` stub standing in for the real media pipeline, since jsdom doesn't implement `HTMLMediaElement` playback) exercised: initial muted/disabled state, `loadedmetadata` enabling the widget and starting muted playback, click-to-unmute flipping `aria-pressed`/`aria-label`/the `is-playing` class, click-to-remute, seek-input scrubbing `currentTime` proportionally, `timeupdate` refreshing the time label and progress-bar fill, and the `error` path correctly tearing the widget back down to inert — all passed. Also caught and fixed a real defensive-coding gap this testing surfaced: `HTMLMediaElement.play()` doesn't return a Promise in every environment (confirmed directly: jsdom's stub returns `undefined`), so the original `audio.play().catch(...)` would throw there; added a `safePlay()` helper that only chains `.catch` when `play()` actually returns a thenable, which is safe everywhere including real browsers. Repo-wide grep confirmed no real client/stakeholder names and no third-party song/artist name anywhere in `index.html`.

**Not done this session**: still no true pixel-level visual confirmation of the live, composited `index.html` page (this sandbox has no working headless-browser/canvas-rendering backend — `npm install canvas` failed to build natively, same category of limitation documented in every prior session); the research file's still-open scroll/resize/theme-switch reactivity questions remain open, lower priority. `music/track.mp3` was not created (Dario needs to supply the real file — nothing to place there yet). Commit made locally only, on `main` — push remains Dario's manual step.

**Addendum, same session — real tracks wired up**: Dario dropped two real audio files into `music/`: `Level1-1.mp3` (the file he'd originally named "Pixel Adventure.mp3," renamed) and `Brisk Arcade Groove.mp3`, and asked for "Pixel Adventure" to play by default. The widget was extended from a single hardcoded `SRC` into a small `TRACKS` playlist array (`{file, title, artist}`), with a new `loadTrack(i)` function that updates the title/artist text, re-arms the `is-ready` state, and points `audio.src` at `encodeURI('music/' + file)` (handles the space in "Brisk Arcade Groove.mp3" correctly). A new next-track button (`.music-next`, original chevron-and-bar icon) was added to the right of the seek bar; clicking it advances to the next track and wraps back to the first. Mute state is intentionally preserved across a track switch (switching tracks while unmuted keeps playing audibly; switching while muted stays silent) rather than resetting on every switch. `trackIndex = 0` is `Level1-1.mp3` / displayed as "Pixel Adventure," so it plays first per Dario's explicit instruction. A third file, `8-Bit Trance Adventure.mp3`, also appeared in `music/` during this session but wasn't mentioned in chat, so it was left out of the rotation rather than assumed — flagged to Dario to confirm whether it should be added as a third track.

**Verification (addendum)**: re-ran `node --check` on all inline scripts — clean. Extended the jsdom + fake-`Audio` behavioral test to cover the playlist: confirmed the default track is `Level1-1.mp3` titled "Pixel Adventure," that clicking next switches src/title/artist to Brisk Arcade Groove with the space correctly encoded, that mute state survives the switch, that the second track's metadata load auto-resumes playback in whatever mute state was active, and that a second click on next wraps back to track 1 — all passed. Repo-wide grep confirmed neither real track's filename/title introduces any third-party artist name (both are Dario's own, attributed to "Dario Espinosa").

**Second addendum, same session — name moved back into hero content**: Dario clarified the actual mismatch with omarchy.org: on the reference site, the big wordmark is foreground hero *content*, not something baked into the animated background canvas. Reverted accordingly: `#hero-name`'s glitch-word pairs were swapped back (`DARIO`/hover-`EXPERIENCE`, `ESPINOSA`/hover-`DESIGNER` — undoing the Session 24 swap), so "DARIO ESPINOSA" is the real, visible, accessible heading text again, with the role revealed on hover. The `aria-label` ("Dario Espinosa, Lead Experience Designer") didn't need to change. `#hero-canvas`'s "PIXEL HERO BACKGROUND" script was stripped back down to pure ambient dust: removed `buildTextMask`/`bandColor`/the `LINES` array/the `document.fonts.ready` wait entirely — it no longer samples or draws any text, just the sparse corner-weighted twinkling dots, now purely decorative background texture behind the real heading. Dario said he'll keep iterating on matching omarchy.org's exact look further on his own machine, so no more reverse-engineering/pixel-matching work was done here this round.

**Verification (second addendum)**: `node --check` clean on all inline scripts. Grepped for `buildTextMask`/`bandColor`/`LINES`/`FONT_STACK` — zero remaining references, confirming a clean removal with no dead code. jsdom smoke test confirmed `#hero-name`'s rendered markup now starts with `data-hover="EXPERIENCE"` on the `DARIO` word (i.e., the name is the default visible text again, role is the hover reveal) and that `.hero-portrait` is still absent. Not yet pushed — still local-only per house rule, and Dario asked to hold the push until after this round of fixes plus the content-sync check below.

---

### Session 26 (November 2026) — Content-sync audit fixes: reconciled public copy against the confidential CV

Follow-up to the Session 25 content-sync check: Dario had asked to verify his public portfolio copy against the confidential CV deck he'd uploaded earlier. A fork subagent did a full page-by-page comparison (read-only, zero real-name leakage confirmed) and surfaced 4 real discrepancies plus a minor one. Dario's response was to authorize fixing the text directly ("arregla lo que necesites para que haga sentido") rather than dictating exact numbers himself. Edits below resolve each one using editorial judgment, while keeping every existing confidentiality/fictionalization rule intact (GradeLine/Marisol/Devon/Hank and BlendOps/"oil-field services company" fictionalizations untouched, no real client/stakeholder/product names introduced anywhere).

**AT&T duration (15 years → 5 years)**: the site's own detailed career timeline has always shown AT&T México spanning Jan 2015–Nov 2020 (~5.8 years across three role changes), but `att.html`'s metric-box said "15yr" and its closing reflection paragraph said "Fifteen years... year one... year twelve" — and `index.html`'s case-study teaser repeated "15-year"/"15 years." All of these were internally inconsistent with the site's own timeline and the CV's own work-history dates. Fixed to "5yr"/"five-year"/"5 years" throughout, and rewrote the `att.html` reflection paragraph ("Five years across three role changes...till production when I handed off the system in year five") so it no longer references a "year twelve" that never existed.

**Oola Life's 80%/"Five Months" figure**: `oolalife.html` led with "80% user adoption" and a "<5 months" timeline, but the CV gives Oola no percentage metric at all (its actual Oola section: ~50 interviews, 7 life areas, Duration 6 months) — the 80% figure belongs to Take Command's CV section, not Oola's. Replaced the misattributed figure everywhere on the page (meta tags, hero copy, metric-boxes, HMW quote, solution paragraph, the D3 momentum-arc heading/milestones, the liquid-morph title list) with what the CV actually supports: a "7 life areas" framework metric, 6-month duration, no adoption percentage. Also found and fixed a second, previously unflagged instance on `index.html`'s own Oola teaser card, which had separately fabricated "+40% retention"/"+55% engagement" figures that don't appear anywhere in `oolalife.html` or the CV — replaced with the same CV-grounded "7 life areas / ~50 interviews / 6mo to MVP" framing. Rescaled the page's D3 momentum-arc chart (domain 0–5.5 → 0–6, 10 points → 9, removed the fabricated "+80% adoption" closing point, axis ticks extended to `mo.6`) and re-indexed the "label key milestones" array accordingly.

**GradeLine's "17 prototypes" vs. the real "8 iterations"**: `gradeline.html`'s metric-box ("17 forked versions shipped") and body copy ("kept 17 diverging prototypes from turning into 17 different-looking products") didn't match the CV's consistent "8 iterations"/"v0.8.2 final baseline" framing for the real underlying engagement. Changed both instances to 8, and reworded the "weak points" paragraph's "once the lineage passed a dozen versions" (which only made sense against a number higher than the old 17, and definitely not 8) to "once the lineage passed half a dozen versions." Also caught and fixed the same "17" on `index.html`'s own GradeLine feature-card metric-box. The illustrative phone-widget version switcher (v0.1/v0.5/v0.9/v1.1) wasn't touched — it was already a generic illustrative sequence, not a literal restatement of the shipped-version count.

**Tetra/BlendOps metrics + role framing**: `tetra.html`'s metric-boxes ("Excel replaced entirely / 1–2m ML response time / 3 pilot runs per project / AI assisted design workflow") were missing the CV's actual headline figures for this engagement (7 prototype versions, 3 systems unified into 1, 5 days discovery-to-approved-prototype, 5 design principles) and included one metric ("1–2m ML response time") with no CV backing. Replaced the box set with "Excel replaced entirely / 7 prototype versions / 3 pilot runs per project / 3→1 systems unified" — keeping the two already-CV-verified figures (Excel replacement, 3 pilot runs per project — confirmed elsewhere in the page's own body copy and the CV's "3-pilot comparative analysis") and swapping in the two CV-grounded figures that were missing, while dropping the unsupported response-time claim. Also upgraded the role framing from "UX Contributor" to "UX Lead" (meta-row, section heading, and body copy), since the CV describes Dario as the one who "consolidated all three [systems] into a single web app" — a principal-level framing, not a passive-contributor one. Mirrored the same metric-box fix on `index.html`'s own Tetra/BlendOps teaser card (swapped its unsupported "1–2m ML response" box for "3→1 systems unified").

**Minor: 3Pillar end date**: `index.html`'s career timeline said 3Pillar Global ran "Jul 2021 – Jun 2022," while `about.html` and the CV both say "May 2022." Changed `index.html` to "Jul 2021 – May 2022" to match.

**Verification**: repo-wide grep for every real confidential name/product (Whitfield, Delgado, Roxana, Nelson, Diaz, Carlos, Roberto, Nishant, Saxena, Wayne Ash, Chris, BlueLinx, BlendMaster, BlendSense, PaveAmerica, "TETRA Technologies") across all public-facing HTML files returned zero matches. `node --check` on every real inline `<script>` block in `index.html`, `oolalife.html`, `gradeline.html`, `tetra.html`, and `att.html` — all clean (same expected JSON-LD exception as every prior session). Confirmed GradeLine's Marisol/Devon/Hank and BlendOps/"oil-field services company" fictionalizations are fully intact after the edits.

**Not done this session**: did not touch the still-pending `music/8-Bit Trance Adventure.mp3` playlist question (separate thread, left as-is pending Dario's decision) or resume any further omarchy.org visual-fidelity work (explicitly descoped to Dario's own machine per the prior session). Commit made locally only, on `main` — push remains Dario's manual step, and the previously-discovered `main`/`origin/main` divergence (25 local commits vs. 7 origin-only commits, two of which are Dario's own manual GitHub uploads) still needs his explicit reconciliation decision before any push is attempted.

---

### Session 27 (November 2026) — SoftServe GitHub policy compliance pass: real clients fictionalized, real screenshots pulled

Dario shared SoftServe's internal policy on talking about work on personal GitHub repos (no client name, no project data/screenshots, no SoftServe internal info, generic/non-attributable descriptions only) and asked for a full audit of the site against it, then authorized acting on the findings ("vamos a revisar todo esto, procede"). This is distinct from — and stricter than — the project's existing PaveAmerica/Tetra fictionalization rule, which this session's findings showed had never been extended to the site's other real-named case studies.

**Critical finding, flagged to Dario before any fix (not something I resolved myself): `benefits-platform.html` (the real, active, regulated Kelly Benefits/Benesis engagement) had zero confidentiality treatment at all** — no fictional name, no "client-confidential" disclaimer, and three real product screenshots (`images/project-20-benefits-*.png`) showing an actual visible client workspace mark ("K · Meridian H") and real third-party benefits-carrier names (Beam Dental, Delta Dental, EyeMed). Worse: `git log` confirmed these files were already committed to `origin/main` (commit `66774f2`, authored by Dario himself via GitHub's web UI, August 2026) in the **public** `DataDaeon/datadaeon.github.io` repo — i.e., live on the public internet right now, independent of anything done in this sandbox. Dario acknowledged this and said he'd handle the GitHub-side remediation (repo visibility, history purge) himself; this session's scope was explicitly limited to finishing the local working-copy fixes.

**`benefits-platform.html` fixes**: removed all three real screenshots from both the page and `index.html`'s teaser card; built one new, clearly-labeled illustrative SVG (`images/inline/demo-harborview-admin-thumb.svg`, fictional product name "Harborview Benefits," generic plan names) to replace them, plus a standard "production application is client-confidential, this is an illustrative recreation" disclosure paragraph matching the convention already used on other client pages. Swapped the two literal real brand hex values presented as official brand tokens (`--brand-primary: #5266EB`, `--member-accent: #E87722`) for different, clearly-illustrative values, and softened the accompanying body text ("periwinkle"/orange" → generic "one accent color"/"a different accent"). Removed an overly specific usage metric ("over eight million visits") and an overly specific internal-staffing detail ("an incoming lead who took the reins partway through"). Deleted the three real PNGs from the working tree via `git rm` (flagged explicitly before deleting, per house guardrail on destructive actions — Dario had already said to finish the local changes).

**Real-named client case studies fictionalized** (NielsenIQ, Siemens, Procore, Take Command — all four previously named the real client directly in title/meta/JSON-LD/body text, despite already disclaiming the specific *screens* as illustrative recreations; the policy requires the name itself not appear, which none of the four met before this session):
- `nielseniq.html` → client genericized to "a burned-out analytics-SaaS design team"; JSON-LD, meta, and all cross-page footer-nav link text updated to "Analytics Dashboard."
- `siemens.html` → the deepest real-IP exposure found: the real Siemens Trainguard product name, the real named brand color ("Siemens Petrol," hex `#009999`, presented as an official brand token), a specific real error-code string resembling a real railroad company's initials ("CSX0256"), a named real competitor ("GE"), and a specific real trade-show name ("C&S Transportation Signals Expo 2021") were all genericized (client's PTC BOS interface / "petrol teal" / "ERR-0256" / "an established competitor" / "a major rail-industry trade show in 2021"). The D3 force-graph's "Siemens Brand" node and the draggable color-swatch data's "Siemens Petrol" label were renamed to generic equivalents. A presentation slide image (`siemens-10.jpg`, a dated "2021" PTC context slide that reads as sourced discovery material rather than something built fresh for the portfolio) was removed and replaced with a one-line confidentiality note; deleted from the working tree via `git rm`.
- `procore.html` → client genericized to "a construction-SaaS platform's cross-functional product teams." `procore-01.jpg`, which turned out to be an actual usability-testing synthesis board (real session scores, real feedback quotes, partially visible real participant usernames), was removed and deleted from the working tree via `git rm`; the still-generic `procore-02.jpg` template board was kept. `procore-03.jpg` (a generic UX research process-flow diagram) was already safe and untouched.
- `takecommand.html` → was already the most generically-written of the four (title/meta/hero copy never named the real company); only the JSON-LD `name` field and three cross-page footer-nav links still said "Take Command" and were updated to "Center of Excellence."
- Verified the two `nielseniq-*.jpg` and `thumb-nielseniq.jpg`/`thumb-siemens.jpg`/`thumb-procore.jpg` images by opening them: all are generic, self-made process/design-system diagrams with no client branding or real data, so left in place with corrected alt text only.

**SoftServe-internal info toned down** (separate category from client confidentiality — the policy also restricts "información de SoftServe," not just client data): `metaverse.html` genericized two sentences that named SoftServe directly while describing an internal capability gap ("no internal process for spatial design... at SoftServe" → "...at the company yet") and internal brand-asset usage ("SoftServe brand assets" → "the company's brand assets," including the D3 layer-diagram data). `ascend-restyle.html` (and its matching `index.html` teaser) had SoftServe's actual internal design-system name ("Ascend OS") and real design tokens (exact hex values and `--aos-*` CSS variable names for "Lviv Blue," "Austin Orange," etc.) published in detail; renamed throughout to "the firm's internal design system" with different illustrative hex values and generic `--ds-*` token names, keeping the tool's own pipeline/capability description (which is Dario's own project and fine to describe in full) intact. `edga.html` was already clean — no SoftServe naming or internal-system specifics — left untouched. Flagged but not acted on: `metaverse-01.jpg`/`metaverse-02.jpg` are real screenshots of the actual metaverse booth (visible "DarioEspinosa (You)" in-world, exhibit panels including one that may reference a real SoftServe client by initials); lower risk since this was a public convention space rather than a confidential product, but called out to Dario as worth his own judgment call rather than removed unilaterally.

**Known residual, not fixed this session**: the filenames and URLs themselves (`siemens.html`, `procore.html`, `nielseniq.html`, `tetra.html`) still spell out the real client names, even though the page content no longer does — confirmed via a repo-wide grep that every remaining hit is a filename/href/element-ID, not visible text. Renaming the files would require rewiring every internal link, the footer prev/next chain, `index.html`'s card hrefs, and `sitemap.xml`, which is a larger, separate, mechanical change; left as an explicit open decision for Dario rather than done unilaterally mid-session.

**Verification**: repo-wide grep for all four real client names, "Trainguard," and the three real benefits-carrier names (Beam Dental, Delta Dental, EyeMed) returned zero matches in visible content (filenames/URLs only, as noted above). The existing PaveAmerica/Tetra confidentiality grep (real stakeholder names, BlueLinx, BlendMaster, BlendSense) still returns zero matches. `node --check` on every real inline `<script>` block across all eleven touched files — clean (same expected JSON-LD exception as every session). Confirmed the new SVG (`demo-harborview-admin-thumb.svg`) parses as valid XML. Ran a `<div>`/`<section>` tag-balance check on every touched file and confirmed the three files showing an off-by-one/two `<div>` mismatch (`siemens.html`, `procore.html`, `oolalife.html`) had that exact same mismatch in the already-committed `HEAD` version before this session's edits — a pre-existing quirk from earlier sessions, not something introduced or fixed here. Commit made locally only, on `main` — push remains Dario's manual step, and he's separately handling the GitHub-side exposure (repo visibility / history purge for the already-public `benefits-platform.html` images) outside this sandbox.

---

### Session 28 (November 2026) — Scope correction on Session 27's fictionalization + real-name filenames retired

Dario authorized proceeding with Session 27's known residual (real client names still spelled out in filenames/URLs: `siemens.html`, `procore.html`, `nielseniq.html`, `tetra.html`), with one critical correction: **"solo AT&T no y trabajos viejos que no fueran en el tiempo de SoftServe pueden mantener para quienes fueron"** — AT&T is off-limits entirely (his own direct pre-SoftServe employer, not a SoftServe client), and older work predating his SoftServe tenure can keep its real name. Since I didn't have reliable knowledge of which of the four fictionalized case studies were actually done during SoftServe vs. earlier (3Pillar Global/freelance era), I asked Dario directly rather than guess. His answer: **only Procore (construction SaaS) and Take Command (healthcare) are SoftServe engagements** — Siemens and NielsenIQ predate SoftServe and should have their real names fully restored.

**Reverted Siemens and NielsenIQ to their pre-Session-27 state**: `git checkout 90e8b12 -- siemens.html nielseniq.html images/inline/siemens-10.jpg` wholesale-restored both files and the previously-removed presentation slide image, since every change made to them in Session 27 was purely the now-unwanted fictionalization and nothing else needed to survive. Manually restored the real-name footer-nav link text that Session 27 had genericized across `att.html`, `virtu4lslacksagent.html`, `tetra.html`, and `index.html` (link text and thumbnail alt attributes back to "Siemens"/"NielsenIQ"). No filename rename needed for these two — they keep `siemens.html`/`nielseniq.html` and their real content.

**Renamed the three confirmed-SoftServe-era case studies to retire their real-name filenames/URLs**, each matched to a fictional name already established or newly derived from the page's own generic framing:
- `procore.html` → `research-at-scale.html` (matches the page's own existing h1/title "Research at Scale"; no client-identifying name was ever coined for this one, so the filename now mirrors the already-generic on-page title). Associated real-named assets renamed alongside it: `images/inline/procore-02.jpg` → `research-02.jpg`, `images/inline/procore-03.jpg` → `research-03.jpg`, `images/thumb-procore.jpg` → `thumb-research.jpg`.
- `takecommand.html` → `benefitbridge.html` (matches "BenefitBridge," the fictional product name the page's own illustrative recreation already used).
- `tetra.html` → `blendops.html` (matches "BlendOps," the fictional product name used throughout the page's own content since earlier sessions).

Updated every cross-reference to the three renamed files — `index.html`, `metaverse.html`, `oolalife.html`, `benefits-platform.html`, `sitemap.xml`, `llms.txt`, and each renamed file's own self-referencing canonical/og:url/JSON-LD `url` fields — to point at the new filenames. `CHANGELOG.md`'s own historical entries (including Session 27's, above) were deliberately left unedited, since they're an append-only record of what was true in each past session, not a live reference.

**Found and fixed a gap Session 27 had missed**: `llms.txt` — a live AI-crawler reference file, not a historical log — still named the real clients outright ("TETRA Technologies," "TETRA BlendSense," "Procore," "Take Command Health") in its "Current Role" summary and case-study section headers, even though its own URLs already pointed at the fictionalized filenames. Genericized all four references to match each case study's established on-page framing ("a global oil-field services company," "BlendOps," "a construction-SaaS platform," "Healthcare SaaS"). Also caught one real-name leak in **visible page text**: `virtu4lslacksagent.html`'s footer-nav link read "TETRA ↗" even after its `href` had been updated to `blendops.html` — fixed the link text to "BlendOps ↗" to match. Tidied a few non-visible but real-name-echoing DOM identifiers for consistency (`#procore-flow` → `#research-flow` in `research-at-scale.html`; `.tetra-strip`/`#tetra-sankey`/`#tetra-swatches` → `blendops-*` equivalents in `blendops.html`) — lower risk since these never render as text, but no reason to leave them.

**Verification**: repo-wide grep for Procore/Take Command/TETRA/BlendSense/BlendMaster/Kelly Benefits/Benesis returned zero matches outside `CHANGELOG.md`'s historical entries (expected and correct). Confirmed grep for Siemens/NielsenIQ correctly still finds them in `index.html`, `nielseniq.html`, `blendops.html`, `virtu4lslacksagent.html`, `att.html`, and `siemens.html` — intentional, since both are confirmed pre-SoftServe work entitled to keep real names. Confirmed `procore.html`/`takecommand.html`/`tetra.html` no longer exist as files and `research-at-scale.html`/`benefitbridge.html`/`blendops.html` do. Checked every local `.html` href in `index.html` resolves to an existing file — no dead links. `node --check` on every inline `<script>` block across all touched files — clean (same expected single JSON-LD exception per file as every prior session). Confirmed AT&T (`att.html`) was never touched beyond restoring its one footer-nav link text to "Siemens."

**Not done this session**: the still-open `music/8-Bit Trance Adventure.mp3` playlist-inclusion question remains untouched and unstaged, left for Dario's own decision. The `main`/`origin/main` divergence and the live-public `benefits-platform.html` screenshot exposure on the public GitHub repo remain explicitly Dario's own remediation, outside this session's scope. Commit made locally only, on `main` — push remains Dario's manual step.

---

### Session 29 (November 2026) — Information architecture split: Work/Founder-mode/Archive moved to their own pages, verse-cards icon deck added to the hero

Dario referenced a Vengeance UI component ("Verse Cards" — a nav-icon trigger that fans a deck of cards up, click-the-front-card-to-advance, GSAP-driven) and asked to use the same mechanic plus a 3-icon dock to restructure the homepage's information architecture: surface a curated preview of the work grid directly from the hero, and move the full "Experience across industries & scales" (#work), "When I'm the client" (#founder-mode), and "Older work & concepts" (#archive) sections off index.html entirely onto their own pages. Asked clarifying questions before touching anything (per his explicit request); his answers, used throughout: only the Work icon opens the card-fan deck (the other two are plain links to their new pages), the deck shows a curated subset Dario left to my judgment rather than all 11 projects, the three sections are fully removed from index.html rather than kept as a scroll-down fallback, and the new icon row sits above the tagline while the existing hero-stats metrics bar stays exactly where it was.

**Researched the reference component directly** (vengenceui.com/components/verse-cards): opened the live preview, clicked through the actual interaction (icon click fans up 4-5 cards with a staggered reveal; clicking the front card flings it away and reveals the next; a close button resets the whole stack), then read its full React/GSAP source via the Code tab to understand the exact transform math — `stackTransform` (per-depth offset/rotation for the resting stack), `awayTransform` (flung off-screen alternating left/right when dealt), and `CLOSED` (parked below the viewport). Re-implemented this in plain CSS transitions + vanilla JS (no GSAP, no new runtime dependency — consistent with this project's established "hand-port reference techniques to vanilla JS" rule from Session 20's Vengeance UI nav-dock work) rather than installing the actual library, since the site has a standing no-build-step/no-npm constraint.

**Hero: new 3-icon "verse dock"** (`.verse-dock`, inserted between `#hero-name` and the tagline paragraph): three rounded-square icon tiles (Work / When I'm the client / Archive) with hover-reveal labels underneath, matching the existing Dark Matter design tokens. Work (`#verse-trigger`) is a button that opens `#verse-deck`, a fixed full-viewport overlay holding a stack of `<article class="verse-card" data-verse-card>` elements; the other two are plain `<a>` tags linking straight to `founder-mode.html` / `archive.html`.

**Curated deck content** (6 of the 11 current case studies, chosen for industry spread and strongest hooks, plus a closing "see all" card): From Bid to Blacktop (construction), Modernizing Railway Systems (transportation), Digital Transformation (telecom), AI-Powered Blend Optimizer (energy), Building a UX Powerhouse (healthcare), Exploring the Metaverse (spatial computing) — all titles/copy/metrics reused verbatim or near-verbatim from the already-approved teaser text on the respective case-study cards, no new claims introduced. The final card ("See all the work") links to the new `work.html`. Each card shows a small "click to continue →" hint top-right (matching what Dario had spotted and asked for), and a CTA button that navigates to the case study — clicking the button is handled separately from clicking the card body (`e.target.closest('.verse-card-btn')` short-circuits the deal-the-card-away handler) so the two interactions don't conflict.

**Three new standalone pages created**, each with its own full head/meta (title, description, canonical, Open Graph, Twitter Card), the same floating glass nav-dock as index.html, and a simple two-line footer matching the `about.html`/`gradeline.html` convention:
- `work.html` — the full #work section (filter bar + all 11 cs-cards), plus the magnetic-cursor effect and the `filterCards` industry-filter logic that used to live only on index.html, both carried over so filtering and the cursor effect keep working exactly as before, now on their own page.
- `founder-mode.html` — the full #founder-mode section (VIRTU4L, EDGA, Ascend Restyle cards, the "internal enablement" callout, and the gift-trigger button), plus the entire gift-modal feature (dialog markup + open/close/exit-intent script) duplicated here so the trigger button keeps working — left untouched on index.html too, so the exit-intent "token of gratitude" popup keeps working for homepage visitors as it always did, independent of this move.
- `archive.html` — the full #archive section (6-item grid: Tycan, Daily Bot, Zafyro, YAIWA, Walking Dog, Kasuva).

All three were assembled by extracting the exact section markup plus every CSS rule and the specific JS utilities each section depends on (scroll-reveal IntersectionObserver, nav-dock scroll-class toggle, magnetic cursor, gift modal) directly from index.html's own stylesheet/scripts, rather than hand-rewriting from scratch — this guarantees pixel-for-pixel visual parity with how these sections looked and behaved on the homepage, just relocated.

**index.html**: removed the #work, #founder-mode, #archive sections and the marquee-divider between the latter two (374 lines) now that their content lives on dedicated pages. Left the now-unreachable `#work`/`#work-grid`/`#marquee-verticals`-targeting JS in place rather than excising it mid-session — every one of those blocks already has an early `if (!el) return;` guard from when it was written, so they no-op harmlessly now instead of erroring; flagged here as a known cleanup opportunity for a future pass rather than risking additional edits this late in an already-large session.

**Cross-link updates**: `kasuva.html`, `blendops.html`, `virtu4lslacksagent.html`, `tycan.html` ("all work"/"back to work" footer links) updated from `index.html#work` to `work.html`; `edga.html`, `ascend-restyle.html` ("← Founder mode" links) updated from `index.html#founder-mode` to `founder-mode.html`. Added `work.html`, `founder-mode.html`, `archive.html` to `sitemap.xml` and cross-referenced them from `llms.txt` (a "Full filterable case-study index" line under Portfolio Case Studies, a new "Outside Client Work" section, and an archive-index line under Archive Work).

**Verification**: repo-wide confidentiality grep (Procore/Take Command/TETRA/BlendSense/BlendMaster/Kelly Benefits/Benesis) returned zero matches outside `CHANGELOG.md`'s historical entries. `node --check` on every inline script across all ten touched/created files — clean (same single expected JSON-LD exception per file that has one; the three new pages and two others have none, by design). Confirmed zero duplicate element IDs within any of the four core files. Confirmed every local `.html` href across `index.html`/`work.html`/`founder-mode.html`/`archive.html` resolves to an existing file. Confirmed `sitemap.xml` parses as valid XML. Confirmed each new page's canonical/og:url correctly self-references its own filename. `<div>`/`<section>`/`<article>`/`<nav>`/`<footer>`/`<main>` tag-balance checks passed on every touched file.

**Not done this session**: did not do a full visual/pixel render check (no headless-browser/canvas backend in this sandbox, same limitation noted in every prior session) — Dario should open the hero deck and the three new pages himself to confirm the fan/deal animation and layout look right before this ships. Did not clean up the now-dead `#work`/`#work-grid`/`#marquee-verticals` JS on index.html (flagged above, left as a future cleanup, confirmed harmless). Commit made locally only, on `main` — push remains Dario's manual step.

---

### Session 30 (November 2026) — White verse-cards, hero cleanup, Pixelify Sans on every heading site-wide, tighter interline, six hand-built animated isometric project illustrations

**Verse-card deck restyle** (`index.html`): `.verse-card` flipped from the dark `--surface2`/`--border-w` treatment to a white card, with every text role given a dark-on-white equivalent — title `var(--solid)`, body `rgba(12,12,18,.68)`, the corner hint `rgba(12,12,18,.4)`, eyebrow darkened to `#0a8f78` for contrast on white. Button and footer (which sit outside the white card, on the dark overlay) were left untouched since they already read correctly.

**Hero icon row**: the Work tile now carries a permanently visible "Work" label beside its icon (`.verse-tile--work`, row layout instead of the hover-only column tooltip the other two tiles still use) — only the Work icon was changed, per the request. Hero-stats bar (18+/80%/70%/1.5k) removed entirely from the hero, along with its now-dead CSS (`.hero-stats`/`.stat*` declarations in both the base rules and the Session 20 glass-surface override block); the guarded count-up JS (`if (!vals.length) return;`) now just no-ops instead of needing removal. Tagline rewritten to pull only the generic, already-public-safe positioning language from Dario's confidential 2026 SoftServe CV deck (AI-native prototyping in code with Claude/Cursor, closing the idea-to-shipped-product gap) per his explicit go-ahead to use it for this — no client names, metrics, or deck specifics touched it. Fixed the hero eyebrow's stale "Portfolio · 2025" to "Portfolio · 2026."

**Pixelify Sans on every H1–H3, site-wide**: added the font to the shared Google Fonts `<link>` on all 26 pages (only `index.html` already had it), then injected `font-family:'Pixelify Sans','Geist Mono',ui-monospace,monospace` as the first declaration into every CSS rule that actually styles a rendered heading — 59 rules total across `.cs-hero h1`/`.block h2`/`.cta-text h3` (the 15 "modern" case-study pages), `.hero h1`/`.section h2`/`.step h3`/`.bm-card h3` (the 6 lighter archive pages), `h1.hero-name`/`h2.section-title`/`.verse-card-title`/`.gift-modal-card h3` (index/work/founder-mode/archive), and `.hero-title`/`.section-title`/`.focus-card h3` (about.html, which styles headings through unprefixed classes rather than tag selectors — found and fixed separately after a markup-vs-CSS cross-reference audit came back clean everywhere else). Nothing else in these rules was touched — letter-spacing, color, weight, hover states, and the `.morph-h1` scramble/liquid-morph effect (its ghost layers use `font:inherit` so they picked up the new font automatically) were left exactly as they were. `font-weight:800` instances fall back to the font's boldest available weight (700) in-browser, since Pixelify Sans doesn't ship an 800 cut.

**Interline tightened across the same heading set** ("they seem to open" — several two-line headings had no explicit `line-height` at all and were inheriting the body's 1.6, which reads very loose on a blocky display font): added an explicit `line-height` (1.15 for h2-tier, 1.2 for h3-tier) to every rule that was missing one — `.block h2`, `.section h2`, `.step h3`, `.bm-card h3`, `.cta-text h3`, `.focus-card h3` — and nudged the hero `h1` rules that already had a line-height above 1 (1.05/1.08/1.1) down to a flat `1` for a denser, more "closed" stack.

**Six hand-built animated isometric illustrations** — GradeLine, Siemens, AT&T, BlendOps, BenefitBridge, and Metaverse each got a new illustration panel between the hero and the metrics bar. Context: Dario pointed at the `anatomy` Agent Skill (aiuxplayground.com/skills/anatomy, wheresryan22/anatomy) and asked for "an illustrative something per project page." That skill is a full production pipeline — a Node/React toolkit with headless-Chrome-audited geometry, optional WebGL shaders, and 40–150+ parts per figure, quoting 1–4+ hours of build time even at its smallest tier, shipped as an npm package. Installing or running it conflicts with this site's standing no-build-step/no-npm rule (the same reason Vengeance UI's cards and Omarchy's dust field were hand-ported instead of installed), so after flagging this to Dario and confirming scope (the 6 projects already curated in the hero deck) and direction (animated, not a static flat mockup), built a much simpler from-scratch equivalent: a small hand-rolled isometric-projection generator (Python, 2:1 "pixel-art" projection — matches the site's existing 8-bit/pixel motifs better than true 30° isometry) used to compute exact polygon coordinates for simple solid blocks, assembled by hand into one small scene per project, with real CSS/SMIL motion rather than a static drawing:

- **GradeLine** — a ground tile, an equipment block, and a standing "field device" block (the one lit teal part) with a pulsing sync ring on its face.
- **Siemens** — rail lines, a waiting train block, and a signal post whose lamp cross-fades red → teal on a loop.
- **AT&T** — three small violet-lit packages flow one after another along the ground toward a lit server/stack block.
- **BlendOps** — a tank with a teal fill-level block that gently rises and falls, and a stirrer line that spins continuously around a fixed pivot.
- **BenefitBridge** — three blocks (the top one lit) stack into a small tower on a staggered loop, "built from zero."
- **Metaverse** — a standing portal ring with three small dots (violet/teal/white) orbiting it continuously via SMIL `animateMotion`.

Every scene uses only the site's own existing Dark Matter tokens (`--teal`, `--violet`, `--t1`–`--t3`, `--border-w`) with a top/left/right three-tone shading convention per block and exactly one lit accent part per scene (borrowing that one craft rule from the Anatomy skill's own philosophy, applied by hand) — plain SVG polygons/ellipses/circles, no JS framework, no WebGL, no external assets. Shared panel chrome (`.iso-figure-wrap`, `.iso-figure-inner`, `.iso-caption`) and all the `@keyframes` (`iso-pulse`, `iso-pulse-ring`, `iso-blink-a/b`, `iso-flow`, `iso-rotate`, `iso-rise`, `iso-stack`) live once in `effects.css`, already linked by all six pages, with every animation collapsed under `prefers-reduced-motion: reduce`.

**Verification**: `node --check` on every inline `<script>` across all 26 touched files — clean. `<style>` brace-balance check across all 26 files — clean. A markup-vs-CSS cross-reference script confirmed zero headings anywhere on the site are missing the new font. Each of the 6 new inline `<svg>` blocks parsed successfully as well-formed XML (`xml.dom.minidom`). Repo-wide confidentiality grep (PaveAmerica/TETRA Technologies/BlendMaster/BlendSense/Procore/Take Command/Kelly Benefits/Benesis/Nishant Saxena) returned zero matches outside `CHANGELOG.md`'s historical log. Noted a pre-existing (not introduced this session) `<div>` count mismatch in `siemens.html` — confirmed via `git show HEAD:siemens.html` that the imbalance already existed in the last commit, unrelated to this session's edit.

**Not done this session**: no visual/pixel render check was possible (same sandbox limitation as every prior session) — Dario should open all six illustrated pages himself to confirm the isometric scenes actually read as intended and the motion feels calm rather than busy before this ships. The pre-existing `siemens.html` div-count mismatch was flagged but not investigated or fixed (out of scope for this session, didn't originate here). Commit made locally only, on `main` — push remains Dario's manual step.

**Addendum — tighter interline (0.8) + bigger hero name**: after seeing a screenshot of the rendered Pixelify Sans result, Dario asked for `h1.hero-name` and, "probably," every other title, to go to `line-height:0.8`, and for "Dario Espinosa" specifically to render bigger (with its existing `clamp()` responsive-resize approach kept). Bumped `h1.hero-name`'s `font-size` from `clamp(50px,7vw,80px)` to `clamp(60px,9vw,116px)` (its line break is a hardcoded `<span class="newline">` between the two words, not a width-driven wrap, so the two-line layout doesn't change at any viewport size). Dropped `line-height` to `0.8` on every heading rule touched in the previous Pixelify Sans pass, site-wide — `h1.hero-name`, `.cs-hero h1`, `.hero h1`, `.hero-title`, `.block h2`, `.section h2`, `h2.section-title`, `.section-title`, `.cta-text h3`, `.step h3`, `.bm-card h3`, `.focus-card h3`, `.gift-modal-card h3`, `.verse-card-title`. Flagged for Dario to check: "Dario Espinosa" itself has no descenders so 0.8 is safe there, but a few multi-line case-study `h2`/`h3` headings elsewhere on the site do contain descenders (g/j/p/q/y) and could clip slightly tighter than intended at that line-height — easy to dial back per-selector if any look wrong. Verified `node --check` + style brace-balance clean across all 26 files; confidentiality grep clean.


---

### Session 31 (November 2026) — Hero Mac, Phase 1 demo: sleeping pixel computer + "Hello" 3.5" disk (standalone, not wired into index yet)

**New files**: `hero-mac-demo.html` (standalone prototype, `noindex`, no shared-file changes) + `images/hero/mac-case.webp` (88 KB, transparent, 2.25x). `index.html`, `effects.js` and `effects.css` were NOT touched.

**What it does**: a shorter isometric voxel computer (screen and face kept at the same size, floppy slot kept) sleeps and breathes a bubble. A violet 3.5" disk labelled "Hello" rests in front of it. Hover/focus anywhere on the computer: the disk lifts and aligns with the slot, the machine "holds its breath" (bubble deflates, breathing stops), and the slot emits a teal light beam plus square "pixel" particles (teal/violet/white). Click/Enter/tap: the disk slides into the slot (voxel slices disappear as they cross the front plane), particle burst, LED blinks then stays teal, aria-live announces "Disk inserted", and a `mac:inserted` CustomEvent fires as the Phase 2 hook (wake → white screen → smile → look at user → glitch).

**Architecture (why)**: the old all-polygon SVG (~670 KB) could not change state. The case is now a static raster (WebP); the screen face, bubble, bloom and scanline are a light SVG overlay; the disk is its own SVG group moved by one 2D translate (orthographic projection keeps it pixel-aligned with the slot). Particles are a pooled set of SVG rects (cap 70) snapped to a half-voxel grid.

**EDGA (designer-agent) decisions applied**: Fitts — the whole computer is the hit target, not the small disk. Signifiers — a periodic shine over the label, plus an idle hint ("insert the disk" + Enter key) after 3.5 s that hides on interaction. Doherty — hover feedback starts on the first frame. Anticipation — the machine reacts before the click (holds its breath). Peak-End — the insertion is the peak; Phase 2 wake + cards are the end. Color — teal light / violet disk + pixels = existing Dark Matter tokens (violet = personal), no new hues. Accessibility — real `<button>`, `aria-describedby`, aria-live status, `:focus-visible` ring, keyboard Enter/Space, skip link, `prefers-reduced-motion` (no breathing/particles, instant insert). Performance — rAF only while something moves, paused off-screen (IntersectionObserver) and on hidden tab. Touch — a tap floats the disk first, then inserts (no hover dependency).

**Verification**: `node --check` on the inline script — clean. Headless Chromium (Playwright) render at 1440x900 and 375x812: idle, hover, mid-insert and inserted states checked visually; no page errors (only the Google Fonts request failed inside the sandbox); no horizontal scroll at 375. Reduced-motion + keyboard path checked: Enter inserts instantly and announces status.

**Not done / next**: Phase 2 (wake sequence + full-screen glitch, flash kept single and under 3/s for WCAG 2.3.1), Phase 3 (giant grid face background with gestures and pointer tracking, vanilla canvas), Phase 4 (colored cards replacing the Work deck + integration into `index.html`). No commit made.


**Addendum — Phase 2: wake sequence** (`hero-mac-demo.html` only): on `mac:inserted` → ~0.5 s "disk read" pause (LED blinks) → screen-only flicker (4 steps, small area) → the screen turns into a white tile grid (35x23 cells, light grid lines, dark cells with a one-cell extrusion shadow below — the look of the reference video) → happy closed eyes (^ ^) + smile → eyes open and turn toward the cursor, the whole computer leans a few degrees toward it, random natural blinks every 2.6–6.4 s → ONE full-viewport flash (0.32 s, peak opacity 0.88) + 0.46 s RGB-split glitch with teal/violet/white bands → `mac:awake` CustomEvent fires (Phase 3 hook: the hero becomes the giant grid face). Face is redrawn only when the quantized eye position/blink changes. Reduced motion: no flicker/flash/glitch/lean, the awake face appears directly and looks straight ahead. Status line announces "Disk inserted. Reading…" then "The computer is awake and smiling at you." "Replay intro" fully resets (`mac:reset`). Flash safety: a single flash, well under the WCAG 2.3.1 three-flashes-per-second threshold. Verified with Playwright at 1440x900: happy → open → glitch → looks top-right → looks bottom-left; zero page errors; both inline scripts pass `node --check`.


---

### Session 32 (November 2026) — hero-mac-demo.html rebuilt on top of the real index + Phase 3 (face wall) + Phase 4 (colored cards)

**What changed**: `hero-mac-demo.html` is now a full copy of `index.html` (starfield/dust hero canvas, rings, DARIO ESPINOSA name with the hover-to-EXPERIENCE/DESIGNER glitch, Work verse deck, every section below the fold through the footer, music widget, `effects.js`) with the Mac + Hello disk inserted in the hero (Mac left, dock + tagline right, as in Dario's U_BICACION mock). `index.html` itself is still untouched. File stays `noindex`.

**Flow**: sleeping Mac → hover: disk floats to the slot, light + pixels → click/Enter/tap: disk goes in, LED reads, screen wakes white, ^ ^ smile, eyes turn to the user, one flash + glitch → at the flash peak (`mac:switch`) the whole hero becomes the **face wall** → in face mode the Work button opens **colored floating cards** instead of the verse deck → **Eject disk** tile (new, only in face mode) glitches back to the starfield and a sleeping Mac. Same-session revisits skip the intro (sessionStorage `hello-disk-inserted`); Eject clears it.

**Face wall (Phase 3)**: vanilla canvas 2D, `#face-wall` inside `.hero`. White tile grid; dark tiles are "extruded" (side shadow + lifted top + diagonal sheen) like the reference video. Expression = continuous params (eye size, blink, happy-arc cut, wink, mouth curve/width/open, cheeks, gaze) eased toward presets (smile, neutral, happy with pink cheeks, surprised "o", squint, wink); each cell eases its own depth, so expressions morph as tiles sinking/rising. Follows the pointer (eyes + mouth offset), wanders when the pointer is idle 3 s, blinks every 2.6–6.4 s, random gesture every 4–8 s, tiles bend away from a moving cursor. Placement measures the hero text so the face never sits under the name (desktop: right of the text, cell size adapts; mobile: below the text, hero gets 300 px extra). Paused off-screen / hidden tab; reduced motion = one static smile.

**Colored cards (Phase 4)**: built at runtime from the existing `#verse-deck` cards (single source of truth — no duplicated copy). Coral / yellow / mint / lavender, meta line (industry · Case study), Pixelify title, one-line summary with chevron accordion, navy pill, impact bar only when the deck text has a real metric (`<strong>`; % ≤ 100 fills to that value, larger figures fill fully with the figure shown), arrow link to the case study. Float idle, staggered entrance; hero text dims while open; Esc / Close return focus to the Work button; the face reacts (happy on hover/focus, surprised on expand). Intercepted with a capture-phase listener so the original deck code is untouched and still works after Eject.

**Contrast in face mode**: name/eyebrow/tagline/tiles switch to dark ink on the white wall, nav pill gets a solid dark background, a bottom gradient blends the white hero into the dark sections below; on mobile the tagline sits on a frosted panel.

**Pre-existing bug found (fixed in the demo only)**: in `index.html` `.verse-card-title` renders white on the white verse card (computed `rgb(255,255,255)`; the CSS references `--solid`, which `index.html` never defines). The demo forces `#0c0c12`. Needs the same one-line fix in `index.html`.

**Verification**: all 8 inline scripts pass `node --check`. Playwright (1440x900 and 390x844 touch): start → name hover → disk hover → insert → face mode looking top-right → cards open → Esc → scroll below the fold → Eject → original verse deck opens. Zero page errors (Google Fonts blocked in the sandbox only). No horizontal scroll at 390.

**Not done / next**: merge into `index.html` once approved (and decide whether the face mode should persist across sessions); the starfield canvas keeps animating under the face wall (hidden, small cost) — pause it on merge. No commit made.


**Addendum — dock restyle + desk synth in the gift modal** (`hero-mac-demo.html` only):
- **Hero dock** now matches Dario's reference: "Visit my Work" is a 58 px pill (grid icon + always-visible mono label, teal badge on the top-right corner), the other two are 58 px square tiles (15 px radius, #111118, hairline border) with their labels as hover/focus tooltips that no longer shift the layout. The second tile's icon changed from a person to a **rocket** (Lucide, ISC) because it links to `founder-mode.html` ("When I'm the client" — Dario's own ventures), which a person/profile icon misrepresented. Both icon-only tiles got descriptive `aria-label`s. Face-mode (white) variants included.
- **Gift modal ("A token of gratitude")**: on ≥1024 px it becomes two columns — left, a playable **"Fig. 07 · Desk synth"** plate; right, the existing card, unchanged. The synth follows the iso-figure skill method (github.com/MrBongoC/ai-iso-skill, MIT): ~15-line isometric kernel, boxes as three visible faces, every flat detail (17 keys, display, 4 waveform buttons, octave Z/X, release knob, grille, model plate) drawn in face-local 2D and placed with one SVG `matrix()` per plane, back-to-front paint order, one state object + one `render()`, hairlines in two greys with violet as the only live colour, captions in the plate corners with a live readout. Original drawing (not copied from the skill's example); no brand silhouettes or logos. Plays real notes with WebAudio — A–; whites, W E T Y U O P blacks, 1–4 waveform, Z/X octave, click/drag on the keys, click the knob for release; audio context is created only on the first press, all notes stop when the modal closes. Hidden below 1024 px (no audio, no listeners active there). Reduced motion: no slide-in or key travel.
- Verified with Playwright: dock + tooltip, modal at 1440x900 holding a C-E-G chord on the square wave (readout "square · oct 4 · c4 e4 g4"), pointer press on a key, mobile 390 px hides the synth; 9/9 inline scripts pass `node --check`; zero page errors.


---

### Session 33 (November 2026) — Face mode becomes a single, non-scrolling view (`hero-mac-demo.html` only)

Decisions confirmed by Dario before building: single view with no scroll; "Tell me more" opens the case page and the ✕ only sends that card to the end of the queue; the About button links to the existing `about.html`; all 11 cases from `work.html` with neon colours.

- **Layout after the disk wakes the Mac**: page scroll is locked and everything except the hero is hidden (name, tagline, hero dock, sections below the fold, footer). Classic page returns intact on Eject.
- **Face** is centred on screen (if the centre would slide under the card column on narrower desktops, it centres in the free space to the right of it); mobile puts it in the upper part above the card strip.
- **Left column**: the 11 case studies, data extracted from `work.html` at build time (href, industry tag, title, description, first metric), rendered as neon cards cycling lime `#cdff4d` / magenta `#d4287a` / blue `#2d63dc` / cyan `#6ff5f7` (dark text on lime/cyan, white on magenta/blue), mono industry eyebrow, Pixelify title, 3-line description, metric line, teal "Tell me more →" link. Vertical scroll column with a fade at the bottom (horizontal snap strip on mobile). ✕ animates the card out and re-appends it at the end of the queue, focus moves to the next card, a live region announces it, the face winks.
- **Round buttons top-right**: About pill → `about.html`, rocket → `founder-mode.html`, archive → `archive.html`, eject → back to the classic page; tooltips on hover/focus, `aria-label`s. Built as `div role="navigation"` (a `<nav>` inherited the site's floating-nav styles). In face mode the top nav pill aligns left and narrows so it never collides with the round buttons; below 1200 px it drops the role text. Mobile: round buttons sit at the bottom centre.
- Removed from the previous iteration: the pastel task-card panel and the "Eject" tile inside the hero dock (replaced by the round eject button).
- **Verified** (Playwright): 1440/1280/1024 px and 390 px touch; scroll height equals the viewport in face mode; ✕ moves the first card to position 11; nav/round-button no overlap at 1280 and 1024; Eject restores the full scrollable page; 9/9 inline scripts pass `node --check`; zero page errors.
- **Note**: the card data is a snapshot of `work.html`; when merging into `index.html`, either keep regenerating it from `work.html` or move the case list into one shared JSON.


---

### Session 34 (November 2026) — about.html completed with the content that only lived on home

Because the new face-mode home hides everything below the fold and its About button links to `about.html`, the About page now carries everything the home About/Work History block had that it was missing. Content copied verbatim from `index.html` (no rewriting, no new claims); `index.html` itself not touched (the classic page still shows it).

- **How I work** block inside the About section, after the stats: the three home bio paragraphs (18+ years across field ops/industrial/enterprise/healthcare; prototyping in code with Claude and coding agents; Chiapas, the 2020 AT&T award, current SoftServe domains) + the tools stack line (Figma, Affinity, Sketch, Adobe CC, AEM, Penpot · Claude, Cursor, local LLMs · Miro, Maze, UserTesting, HotJar).
- **Skill levels**: the 7 self-assessed bars from home (Design Systems 95 … Spatial/XR 74), animate in on scroll.
- **Competency Focus**: added card 05 "AI-Native Prototyping" (the fourth home pillar About didn't have); grid now 3 + 2 on desktop.
- **Work History** section (new, after "Where I've built"): the full 9-entry timeline from home, each role with dates, takeaway, tools, and the Adobe Portfolio link; dots/line draw in on scroll.
- **Contact strip**: added the "quick portfolio PDF ↓" download home had.
- **Tools ticker**: added Local LLMs, Affinity, Penpot.
- Page-specific CSS/JS inline (house rule 2), reduced-motion fallbacks, `node --check` clean, div/section balance clean, Playwright 1440 + 390 px: no horizontal scroll, 7/7 bars and 9/9 timeline entries reveal, zero page errors (Three.js CDN blocked in the sandbox only).
- **Open question for Dario (not changed)**: the existing "Where I've built" cards and the home timeline disagree — About says "Lead Experience Designer · SoftServe · Jun 2022 — Present" and "Lead UX Designer · 3Pillar · Nov 2020 — May 2022"; the timeline splits these into Senior UX Designer (Jun 2022 – Jan 2025) → Experience Design Lead (Jan 2025 – present) and Senior UX Designer · Software Eng. IV → Lead UX Designer at 3Pillar. Both now appear on the same page.

---

### Session 35 (November 2026) — Icons on the top-nav "about" / "linkedin" links, site-wide

- 21 pages: the top-nav `about` link now carries a person icon and `linkedin` an external-link icon (Lucide-style inline SVG, `aria-hidden`), with the label wrapped in `<span class="nav-txt">`. The LinkedIn link also gets screen-reader text "(opens in a new tab)". Shared styling appended to `effects.css` ("TOP NAV ICONS"): inline-flex + 6 px gap, 14 px icon, hover lift.
- The official LinkedIn "in" logo was deliberately not drawn by hand; an external-link icon is used instead. If Dario wants the official mark, download it from LinkedIn's brand resources into `images/icons/` and swap the SVG.
- Fix needed on the way: `index.html` and `hero-mac-demo.html` run a nav-link scramble on hover that rewrote `link.textContent`, which wiped the icon and exposed the screen-reader text. It now scrambles only `.nav-txt` (falls back to the whole link if absent).
- Verified with Playwright on index (1440 + 390 px), hero-mac-demo and about: 2 icons in the nav, icon survives mid-scramble, label restores to "linkedin", zero page errors.

---

### Session 36 (November 2026) — "Insert the disk" hint made prominent (`hero-mac-demo.html`)

- Replaced the 11 px grey hint under the Mac with a **pixel speech bubble anchored to the disk**: dark fill, 2 px teal border, hard teal offset shadow, a tail pointing at the disk, blinking teal caret, 13 px mono label and a solid teal `Enter` key cap.
- Appears after 1.5 s (was 3.5 s) with a small pop, then bobs gently; it **stays visible until the disk is inserted** (it used to vanish on hover).
- When the disk floats to the slot, the bubble slides under the slot and reads "Click to insert"; touch devices (`hover:none`) read "Tap the disk" without the key cap. Hidden once inserted; re-armed by Replay/Eject.
- Reduced motion: no pop/bob, opacity fade only. Mobile: extra space under the Mac so the bubble never touches the dock.
- Verified with Playwright at 1440 px (idle, hover, leave) and 390 px touch; zero page errors.

---

### Session 37 (November 2026) — About heading scramble, hero cleanup, "Insert the disk" cue, Enter/Esc shortcuts

- **about.html**: "Every role, and what it taught me." now scrambles in on scroll like the home "Work History" heading (500 ms, ease-out quad, left-to-right, letters/digits/symbols). Implemented as `[data-scramble-in]` (About already uses `[data-scramble]` for hover-scramble on awards) and walks text nodes so the teal `<em>` survives; `aria-label` keeps the clean string; skipped under reduced motion.
- **hero-mac-demo.html**:
  - `.hero-content` `padding-top` 92 px → 1 px on desktop. Mobile kept at 76 px (1 px put the eyebrow under the fixed nav bar there).
  - Removed `<section id="about">` (bio, skills, Work History) and its divider — that content now lives on `about.html`. Contact strip and footer kept. No `#about` anchors pointed to it.
  - The "scroll" cue is now a real button: caret + "Insert the disk" + teal `Enter` key cap above the teal line (Dario's reference). Pops in at 1.2 s; reads "Click to insert" while the disk floats, "Tap the disk" on touch; fades once the disk goes in. The disk-anchored bubble from Session 36 was removed (one hint, not two). Mobile: cue sits in the flow under the tagline.
  - **Enter works again from anywhere on the first view** (not only when the Mac has focus). It is ignored while typing, inside the gift modal / verse deck, and when focus is on another link or button so their own Enter still works. Exposed as `window.__MAC.insert()`.
  - **Esc leaves the face view** (same as the round Eject button); an `ESC` key cap sits next to Eject; the button has `aria-keyshortcuts="Escape"`. Esc does nothing while a modal is open.
- Verified (Playwright, 1440 + 390 px): Enter → face view, Esc → back with "Disk ejected", cue button inserts, About heading mid-scramble → clean text, no `#about` in the DOM, scripts `node --check` clean, zero page errors.

---

### Session 38 (November 2026) — Merge into index, face view v2 with chat, page glitch transitions, light theme, mini twin

**Merge**: `index.html` is now the former `hero-mac-demo.html` (Mac + disk, face view, neon cards, synth, Enter/Esc, nav icons) with the real `<title>` and without `noindex`. `hero-mac-demo.html` is left in the repo as an orphan copy (delete when happy).

**Face view v2** (decisions confirmed by Dario: remove the long nav bar; scripted chat now, AI-ready; CTA "Skip the cards — just ask me"; neutral icon for LinkedIn instead of its trademarked logo):
- The wide nav bar is hidden in the face view; one grouped row of pills top-right: `dario-espinosa` · `ESC to return` (the eject action, `aria-keyshortcuts="Escape"`) · About · LinkedIn (people icon) · Myself as Client (rocket) · Archive (icon + tooltip). LinkedIn/Myself collapse to icons under 1280 px, the name pill hides under 980 px, mobile = icon-only bar at the bottom.
- CTA above the cards ("Skip the cards — just ask me", chat icon, retro offset-shadow pill). It fades the cards out and opens a chat panel in the same column: header + "Back to the cards", message log (`role="log"`), suggestion chips (single scrolling row), input + send. Esc inside the chat returns to the cards; a second Esc leaves the face view.
- Face: now centred in the free area right of the column and below the pills, cell size fitted to that area; relayouts when the chat opens/closes. While the twin answers, the face looks at the chat and its mouth flaps between "o" and a smile.
- Chat engine = **PixelTwin** (new, in `effects.js`): scripted, only answers from site content (bio, current role, 9-role history, 11 cases with metrics, skills, AI prototyping, accessibility awards, tools, location, languages, ventures, contact); EN/ES detection; unknown questions get an honest "not on this site" + email. `PixelTwin.ask()` is the single seam for a future real-AI endpoint.

**Page transitions + theme hand-off** (`effects.js` / `effects.css`, all pages that load them): every internal link plays a 0.3 s glitch-out, the next page a 0.42 s glitch-in (skipped under reduced motion; external, `_blank`, download, mailto and same-page anchors untouched). Leaving the index from the face view stores `siteTheme=light`, from the classic view `dark`; other pages keep the stored theme. Light theme = token overrides on `html.theme-light` (beats each page's `:root`) + the face-wall grid as page background + light nav; applied by a tiny inline `<head>` script on 24 pages to avoid a dark flash. `benefits-platform.html` does not load `effects.js`, so it gets neither (left as-is).

**Mini twin** (`effects.js`, only on project pages in the light theme): 72 px pixelated circle bottom-right, floats, eyes follow the pointer, blinks, happy on hover, surprised on a fast scroll, one intro bubble per session ("Questions about this project? Ask me."). Click → compact chat with page-aware chips ("Summarize this project", "Key results") using the case data, plus everything PixelTwin knows. Esc/✕ close, focus returns to the orb, mouth moves while answering. Not shown on dark pages or the index.

Verified with Playwright: face view pills/CTA/chat at 1440 and 390 px, EN + ES questions incl. fallback, Esc twice, card → siemens.html arrives light with glitch, classic → dark, mini twin summary + location answers, no twin on dark pages; all inline scripts and effects.js pass `node --check`; zero page errors.

---

### Session 39 (November 2026) — Face-view "Menu", CTA/cards grouping, gift modal fix (`index.html`)

- **Menu**: the face-view pill row now shows in full when the view opens, then (after ~2.6 s, never while hovered or focused) folds right-to-left with a staggered fade/slide into a single text button **"Menu"** (no hamburger). Clicking it re-opens the row (the button reads "Close"); clicking outside or tabbing away folds it again. `aria-expanded`/`aria-controls` on the button; reduced motion = no animation. The `dario-espinosa` name pill now hides under 1600 px so the open row never collides with the CTA.
- **CTA + cards as one group**: root cause of the gap was the index's generic `section{padding:80px 32px}` applying to `.fm-cards` (cards sat 32 px right and 80 px below the CTA). Removed it; the CTA now matches the card column width and left edge exactly (72 px / 368 px at 1440) with a 16 px gap above the first card, same 14 px radius family.
- **Gift modal not appearing — fixed**: it only opened on exit intent *after a page scroll*; the merged index now spends most time in the non-scrolling face view, so the condition never became true. Engagement now also counts: entering the face view, inserting the disk, clicking the CTA/chat/cards, or 20 s on the page. Still once per tab session, still only when the pointer leaves through the top of the window; an instant bounce (no engagement) still doesn't trigger it.
- Verified with Playwright at 1440 px: row → folded "Menu" → reopen → click-outside fold; geometry CTA/cards aligned; exit intent opens the modal in the face view; bounce does not; zero page errors.

**Session 39 addendum — mini twin outline**: the floating face's pixel rim on project pages changed from solid ink `#14142a` to a soft grey `#a7adb8` (inner grid `#d7dae0`) and its drop shadow was lightened, so the orb blends with the light grid background instead of reading as a hard black badge. Face tiles unchanged.

### Session 40 (November 2026) — Mini twin: square, deeper shadow, pixel sparks, page-aware answers (`effects.js`)

- The floating face is now a **pixel square** with stepped (notched) corners instead of a circle, 10 px focus radius, and a stronger two-layer drop shadow (deeper on hover).
- **Pixel sparks**: every 4.5–10 s (and on hover) 5–11 soft-colour squares (mint, violet, pink, sky, butter, teal, lavender) drift out up/left of the orb and fade in ~1–2 s. Skipped while its chat is open, when the tab is hidden, and under reduced motion.
- **Knows the page it's on** ("page brief" read from the DOM at load): H1 title, hero lead paragraph, the meta row (client / context / role / period), every metric box, and each section heading with its text. Answers now come from the page first: "Summarize" (title + lead + meta + top results), "Key results" (all page metrics), "Your role here" / client, "What does it cover?" (section list), and free questions are matched to the best section by keywords (heading matches weigh more) and answered with its first sentences; only if nothing on the page matches does it fall back to the site-wide PixelTwin. New chips: Summarize · Key results · Your role here · What does it cover? · Contact.
- Verified on siemens.html (light): summary, −40%/−60%/100% WCAG metrics, "Solo Lead", section list, "design system" → BOS Tablet Design System section, site fallback for location; zero page errors.

**Session 40 addendum**: back to the **round** pixel face (Dario preferred it); kept the stronger shadow. Sparks now burst from the centre outward in **all directions**, evenly spread around the circle with a little random jitter (previously up/left only).

---

### Session 41 (November 2026) — Back button on every page (`effects.js` / `effects.css`)

- A floating **"← Back"** pill, bottom-left (opposite the mini twin), on every page except the index. If you arrived from another page of the site it plays the glitch-out and does `history.back()` (so returning to the index lands back in the face view or classic view you left, cards scroll intact); if the page was opened directly it reads **"Home"** and links to `index.html`. `aria-label` names the destination ("Go back to Home / Work / About…"). The site's link-click handler now records `navFrom` in sessionStorage for this.
- Themed automatically: dark pill on dark pages (page tokens), white pill with soft shadow on `html.theme-light`; teal hover ring, focus-visible outline, raised above the music widget if a page renders one, smaller on mobile, hidden in print, no motion under reduced-motion.
- `benefits-platform.html` was the only page without the shared layer — it now loads `effects.css`/`effects.js` plus the early theme snippet, so it also gets the back button, page glitch, light theme and mini twin.
- Verified with Playwright: classic index → Siemens (dark "Back") → back to index; face view → AT&T (light "Back") → back to index still in face view; direct opens of tycan / work / benefits-platform show "Home"; zero page errors.

---

### Session 42 (November 2026) — AI-ready site + "under construction" twin

- **Domain**: `espinosadesign.com` is the real domain (Dario). Added `CNAME` and replaced every `darioespinosa.design` URL (canonicals, OG/Twitter, JSON-LD, sitemap, robots, llms.txt) on 26 pages.
- **robots.txt**: rewritten. Everything allowed, **including `/images/`** (was disallowed, which hid every image from AI/image search). Named allow rules for 20 crawlers (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, Google-Extended, Googlebot, Bingbot, PerplexityBot, Perplexity-User, Applebot(-Extended), Amazonbot, Meta-ExternalAgent, DuckAssistBot, MistralAI-User, cohere-ai, CCBot…). Orphan `hero-mac-demo.html` disallowed.
- **sitemap.xml**: regenerated with all 26 public pages (was 20; about, gradeline, edga, virtu4l, ascend-restyle, gift guide were missing), lastmod + priority.
- **llms.txt** rewritten from site facts: 18+ years (was 15+), current role (Experience Design Lead since Jan 2025), full 9-role history, awards, skills/levels, tools, languages, all 11 cases with headline metrics, ventures, archive, key pages, how the interactive home works, citation + AI permissions (incl. "don't infer NDA client names"), under-construction note.
- **llms-full.txt** (new): readable text of every page (index, about, work, ventures, archive first), one section per page.
- **index.html**: meta/OG/Twitter descriptions updated to 18+; JSON-LD now a graph of WebSite + ProfilePage + Person (job, occupation, languages, awards, knowsAbout, sameAs); `<link rel="alternate" type="text/markdown" href="/llms.txt">`; the H1 ships "Dario Espinosa" as real text (JS still builds the glitch version); a `<noscript>` block lists bio, contact and all 11 case links for non-JS crawlers.
- **about.html**: stat counters ship their real values (18+, 40+, 9) instead of "0", so crawlers don't read zeros; the count-up animation is unchanged.
- **PixelTwin**: greeting and mini-twin intro bubble/greeting mention the site is under construction; new intent answers "is it finished / under construction / new / broken" in EN + ES.
- Verified (Playwright): H1 text, chat greeting + construction answer, mini twin bubble on siemens (light), no-JS render shows the noscript block, JSON-LD parses, effects.js `node --check`, zero page errors.
- Still open: `og:image` points to `/og-image.png`, which doesn't exist in the repo — social/AI previews have no image until one is added.

---

### Session 43 (November 2026) — Anatomy "How it works" figures (pilot: BlendOps, Siemens) + favicon

- **Anatomy skill**: not installed in Dario's Claude; the open-source kit (MIT, github.com/wheresryan22/anatomy) was used from a local clone to build the figures, following its rules (real object as the explanation, painter's order, four-tone solids, one lit accent, card with Fig/title/hint/readout corners, legend + true caption, calm time-based motion, idle tour, pause on hover/focus, keyboard, stop offscreen, still frame under reduced motion). Output is static SVG + one small classic script per figure (kit inlined inside an IIFE) — no npm/build step on the site.
- **BlendOps — "Blend bench"**: bench with three supply tanks (water 8.33, CaCl₂ 11.6, CaBr₂ 14.2 ppg, sight glasses drop live), valves and floor piping into a manifold, an open stirred mixer (fluid surface + rotating teal blades clipped to the opening, level window), a density dial with the 12.5 ppg target, and a three-vial pilot rack. Loop: three pilots — water+CaBr₂ (12.5, ~$146/bbl), CaCl₂+CaBr₂ (12.5, ~$130/bbl), water+CaCl₂ (tops out at 11.6, can't reach) — and the cheapest pilot that meets target is approved (vial lit), mirroring "up to three pilots, one approved". Readout from the same model. Click = next pilot.
- **Siemens — "River junction"**: model railway baseboard with a main line and a crossing line meeting at a diamond, a home signal (red/green lamps), milepost 19 marker, and the dispatcher's field terminal whose screen shows the bulletin. Loop: RX-4471 approaches → Bulletin 2231 arrives (signal red, "HOLD AT MP 19.0") → engine brakes and holds → crossing train passes the diamond → "BULLETIN 2231 · CLEARED / PROCEED" (green) → RX-4471 continues. Click steps through the beats, ← goes back.
- Each replaces the old hand-drawn `.iso-figure-wrap` panel on its page. Shared files: `anatomy/anatomy.css` (kit CSS + site skin: teal lit accent, Geist), `anatomy/theme.js` (plates follow `html.theme-light`), `anatomy/<name>.js`. Fixed a clash with the old `.iso-caption` style.
- **Favicon**: 32×32 pixel-art version of the home Mac (sleeping face, cyan grid screen, floppy slot, teal LED) as `favicon.svg`, plus `favicon-32.png` and `apple-touch-icon.png`; linked from every page.
- Build sources (figure modules + `make.mjs`) live in the agent workspace, not in the repo; next: the other 9 project figures once Dario approves this look.

**Session 43 addendum — canonical domain back to GitHub Pages**: `espinosadesign.com` forwarding + the CNAME caused a redirect loop on `datadaeon.github.io`. The CNAME was removed (Dario pushed `a8d796e`), and until the Hostinger DNS is pointed at GitHub Pages every canonical/OG/JSON-LD URL, `sitemap.xml`, `robots.txt`, `llms.txt` and `llms-full.txt` use `https://datadaeon.github.io`. To switch back later: Hostinger A records 185.199.108–111.153 + `www` CNAME → datadaeon.github.io, re-add `CNAME`, replace the base URL again. `.agents/` and `skills-lock.json` (created by the skill install) added to `.gitignore`.

---

### Session 44 (November 2026) — NDA inline alert + navigation safety

- **NDA alert**: an amber inline note (`aside.nda-alert`, `role="note"`, lock icon) right under the hero of the 8 case studies whose real UI is client-confidential — att, benefitbridge, benefits-platform, blendops, gradeline, nielseniq, siemens (UI wording) and research-at-scale (recordings/participant-data wording): the real UI isn't shown, what's on the page is an illustrative recreation, the problem/process/decisions/results are real. Styled in `effects.css` for dark and light themes.
- **"Glitch but the page never loads" on GitHub**: reproduced every navigation path locally over HTTP (classic deck → gradeline, face-view card → blendops) and all load. The live symptom matches the domain redirect loop: the glitch-out plays, then the browser fails on `datadaeon.github.io/<page>` while GitHub Pages still redirects to the custom domain. Fix is on GitHub (Settings → Pages → remove the custom domain) + a private window to drop the cached 301. Added a safety in `effects.js`: if the browser hasn't left the page 1.8 s after the glitch, the overlay clears so the page is never left blanked.

### Session 45 (November 2026) — Anatomy figures for every case study, moved under the hero meta row

- **Nine new "How it works" figures** (same Anatomy kit pattern as BlendOps/Siemens: one lit accent, idle loop, pause on hover/focus, click/Enter/→ to step, ← back, offscreen stop, reduced-motion still frame, dark + light via `anatomy/theme.js`). Scripts in `anatomy/<name>.js`:
  - gradeline — *Token press*: version dial v1–v8 stamps one token set onto laptop / monitor / phone.
  - benefits-platform — *One part, two portals*: gantry places the same library component into employer and employee portals, v1.3 → v1.8.
  - virtu4lslacksagent — *Sealed sorter*: local AI files messages into 4 channel pigeonholes; padlocked, 293 tests passing.
  - nielseniq — *Double track*: discovery conveyor validates cards one sprint ahead of delivery; rejects go back to rework.
  - att — *Type case & ramp*: 40-component type case builds the storefront; carts roll up an accessible ramp, orders ×6 (+500%).
  - oolalife — *Seven gauges*: daily action steps fill the 7 life areas; streak counter.
  - benefitbridge — *Bridge, block by block*: crane hoists 6 practice blocks; carts cross; pier screen shows 80% / −70% / 50%.
  - metaverse — *Sightline pavilion*: visitors follow focal points and orbit the portal; counter to 1,500+.
  - research-at-scale — *Synthesis drum*: session notes → AI synthesis → 4 theme bins; turnaround bar at 50%.
- The old static `.iso-figure-wrap` illustrations on att, benefitbridge, gradeline and metaverse were replaced.
- **Placement**: on all 11 case studies the NDA note (where present) and the figure now sit inside the hero, directly under the client/context/role/stage meta row, in a `.cs-figure` wrapper that fades in after the meta row (styles in `anatomy/anatomy.css`; no animation under reduced motion).

### Session 46 (November 2026) — "Next project" button (`effects.js` / `effects.css`)

- On the 11 case studies, a **Next · <project>** pill sits beside the Back/Home button (both now in a fixed `.pg-nav` group, bottom-left). Order matches the index cards: GradeLine → Railway Back Office → AT&T México → Blend Optimizer → UX Center of Excellence → Metaverse → Benefits Platform → VOS → Dashboard Redesign → Life Coaching → Research at Scale → (wraps to GradeLine). It uses the normal glitch transition; Back on the next page returns to the previous case.
- Dark and light themes; on phones (≤600px) only "Next →" is shown; hidden on print; non-case pages (About, Archive…) keep only Back. The group is a `div role="group"` — a `<nav>` element picked up the site's top-bar `nav` styles.

### Session 47 (November 2026) — Five figures redrawn after Anatomy collection references + site-wide music player

- **Figures rebuilt** (`anatomy/<name>.js` + the figure markup in each page), following the references Dario picked from the Anatomy collection:
  - virtu4lslacksagent — *The sorting machine* (ref: Desk computer): an old desk computer whose screen shows a Slack-like layout; each message is typed in (keys go down), Dasha scans and files it into #checklists / #reservations / #sales / #ops; padlock on the case, "0 public URLs".
  - nielseniq — *Frame jig* (ref: Box model): margin / border / padding / content frames around the dashboard; widgets drift with red bug pins until the design-system switch snaps them to tokens (bugs 12 → 6); a caliper drags the width 1440 → 768 px and the widgets reflow 4 → 2 columns while border and padding hold. Geometry re-rendered live in the figure script.
  - oolalife — *Habit music box* (ref: Debounce): a pin disc turning once a week, 7 rings = the 7 life areas, 7 sectors = days; knob taps are debounced by a dashpot into one pin per area per day; the comb plays pins back; streak counter.
  - research-at-scale — *Descent to insight* (ref: Gradient descent): a contour model of a narrow valley from stacked boards; survey pins + thread mark a 12-step manual descent, then the learning-rate knob turns and a lit run reaches the floor in 6 steps (50% faster). Step counts come from an actual descent computed at build time.
  - siemens — *Sorting desk* (ref: Hash map, mixed with the old railway): engines pass a trackside reader and report raw codes (CSX0256…); the coding machine prints h(code) mod 8, the plain-language message and a proceed/hold lamp, then files the card into one of 8 pigeonholes; collisions stack (bucket 4 gets three cards). Trains/codes illustrative.
- **Music player on every page** (`effects.js` / `effects.css`): one shared controller replaces the inline one in `index.html`; pages without the widget get it injected bottom-left. Track, position and sound on/off persist in sessionStorage, so the music continues across pages; if the browser blocks audible autoplay on arrival it plays muted and turns the sound back on at the first click/key. Light-theme styling; compact (sound + next track) on phones. Back / Next project now always sit one row above the player (`.pg-nav--raised`), so neither covers the other.

### Session 48 (November 2026) — Classic hero v3: dock in the nav row, big name, the Mac drops in with stickers (`index.html`)

- **Nav row**: "Visit my Work" + the two round tiles (Myself as Client, Archive) moved out of the hero into the fixed nav row, right of the nav pill, same glass style and height (52px). Role text hides under 1060px, the Work label under 860px; on phones the three sit as a bottom-centre dock.
- **Name**: `h1.hero-name` scaled to `clamp(52px,10.6vw,188px)` (Dario's reference: the yellow "EXPERIENCE DESIGNER" hover block ≈ 1,100px wide at ~1,740px viewport); hero container widened to 1180px. Yellow hover reveal unchanged.
- **The Mac drops in**: hidden at load, it falls onto the centre of the name (gravity + squash and two small bounces, the name jolts on landing) on the first hover/focus of the name, Enter, a tap on the Insert-the-disk cue, or after 3 s. Floppy, hover, insert, wake and face-view interactions unchanged; reduced motion = fade-in. Phones: Mac drops below the stacked name.
- **Stickers**: Claude, Figma and Cursor stickers (Dario's PNGs, trimmed, `images/hero/stickers/`) placed on the Mac's front face inside its SVG layer, skewed to the face plane, so they breathe/glitch with it.
- **Tagline removed** from the hero (per Dario). In the face view the music player moves to the right so it doesn't sit on the case cards.

### Session 49 (November 2026) — Remove the old "back to work" pill

- benefits-platform and virtu4lslacksagent still had the legacy fixed `.sticky-back` link ("↩ index" / "← back to work"), a dark pill bottom-left that sat on top of the music player under the new Back / Next group. Removed both links; `effects.css` now hides `.sticky-back` site-wide as a safety net.

### Session 50 (November 2026) — Sticker-covered Mac + joystick that releases the game stickers (`index.html`)

- **Desk stickers**: Dario's eight pre-rotated stickers (Claude, ChatGPT, Gemini, Figma, Cursor, GitHub, Obsidian, code) placed on the Mac exactly as in his mock — Gemini and ChatGPT on the vented side, GitHub / Figma / Claude / Cursor along the front under the screen, Obsidian and </> by the drive slot. They live in the Mac's SVG layer (Mac units, scale 0.295 of the PNG size), so they breathe/glitch with it. Assets trimmed to their content in `images/hero/stickers/`.
- **Joystick**: an Atari-style stick drawn as voxels in the Mac's own projection and palette (beige stepped base, dark boot and stick, red ball and fire button, teal LED), with a coiled cable that tucks behind the Mac's right side. It is its own `<button id="joy">` inside `.mac-wrap`, so it drops with the Mac (plus a small hop on landing); hover tilts the lever and shows a yellow "press start" tag.
- **Press start**: the lever snaps, the fire button goes down, a pixel burst pops from the ball, and the five game stickers (WoW, Fallout, Ragnarok Online, Magic, Cyberpunk 2077 — resized to 400px WebP, ~40 KB each, `images/hero/gaming/`) fly out of the joystick to their spots around the hero (positions from Dario's mock) and float up/down at different speeds. Press again and they fly back in. `aria-pressed` + a polite live region; reduced motion = no burst/float.
- **Layout**: Mac + floppy + joystick recentred as a group (`.mac-row` shifted −64%); on phones the group is narrower and left-offset so the joystick fits.

### Session 51 (November 2026) — Joystick: farther right, no black outline, quieter than the disk

- Joystick moved further right (longer coiled cable, still tucked behind the Mac's right side), back to the Mac's exact voxel scale; Mac + floppy + joystick group recentred (`translate(-68%,-50%)`).
- Removed the dark outline: every face is now edged in its own colour, like the Mac's render; cable recoloured to the Mac's warm greys.
- CTA hierarchy: the floppy / "Insert the disk" stays the primary action. The joystick idles slightly desaturated and dimmed, comes to full colour only on hover/focus/when on, fades further while the visitor is reaching for the disk (`body.mac-alert`), and its "press start" tag only appears on hover/focus.

### Session 52 (November 2026) — "Visit my Work" icon

- The four-squares grid icon on the "Visit my Work" button (nav row) replaced by a briefcase, so it reads as "work" next to the rocket (Myself as Client) and the box (Archive).

### Session 53 (November 2026) — Topic icons on the face-view cards

- Every case card in the face view now shows a 42px icon tile under the title, left of the description (`.fm-body` / `.fm-ic`, icons in an `ICONS` map keyed by case URL): flask (Blend Optimizer), shield-plus (Benefits platform), traffic cone (GradeLine), VR headset (VOS), bar chart (Dashboard Redesign), train (Railway), cart (AT&T eCommerce), sprout (Life Coaching), columns (UX Center of Excellence), cube (Metaverse), magnifier (Research at Scale). Tile is translucent white on dark cards, translucent ink on lime/cyan; 34px on phones.

### Session 54 (November 2026) — TV / CRT effect tests (not linked, noindex)

- `tv-test-ab.html`: copy of the index + option A (light glass over the face view: medium black rounded bezel, inner vignette, faint scanlines with a soft flicker, edge RGB tint, 1.4px RGB split on the face wall via an SVG filter) + option B (CRT power-on when the disk switches to the face view: white line → opens vertically → picture).
- `tv-test-c.html`: copy of the index + option C (ntch.design-style): the face wall is redrawn every frame through a WebGL CRT shader (barrel curvature, edge chromatic aberration, scanlines, aperture mask, grain, vignette, rounded black bezel, shader power-on), and the cards/chat get a matching SVG barrel displacement (~8px at the edges).
- Both: "Skip the cards" becomes a yellow ASK ME speech-bubble sticker, Menu becomes a round teal sticker (same dock), new OPEN TO WORK · let's talk sticker bottom-right (mailto, same as "get in touch"); the music player moves to bottom-centre in the face view. Yellow test badge on top with "replay power-on" and links between tests.

### Session 55 (November 2026) — TV test C refined (Dario picked C)

- **Thick, protagonist bezel** (`tv-test-c.html`): ~46px moulded dark-plastic frame with a bevelled lip around the glass, top light / bottom shade, a breathing teal power LED and an embossed DARIO·TV badge.
- **Disk glitch inside the TV**: the bezel comes up as soon as the glitch starts; the glitch now plays *behind* it (below the bezel), softer (flash 0.42 max over 0.62s with easing, blurred bands, 2px eased shake instead of the stepped jolt); the screen stays dark and the CRT powers on ~0.44s after the switch, once the glitch is over.
- **Cards dissolve** at the top and bottom of the column: the mask fades in a top edge as soon as you scroll and a 150px bottom fade; each card's opacity follows its distance to the edges (rAF on scroll). Smooth scroll for programmatic jumps.
- **Stickers** (both tests): the chat CTA is now a raised yellow sticker *button* reading "Skip the cards / LET'S CHAT →" with a chat icon, hard offset shadow and a press-down state; Menu is a rectangular white sticker; bottom-right is a round two-line LET'S / TALK ↗ sticker (no "open to work").
