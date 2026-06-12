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
