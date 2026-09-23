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
