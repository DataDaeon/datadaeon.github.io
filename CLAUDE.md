# CLAUDE.md — dario-cv-website

Portfolio site for Dario Espinosa (Lead Experience Designer). Static HTML/CSS/vanilla JS — **no build step, no frameworks, no npm**. Every page is self-contained. Deployed to GitHub Pages: `https://github.com/DataDaeon/datadaeon.github.io` (remote `origin`, branch `main`).

## Before you start

1. Read the **bottom entries of `CHANGELOG.md`** — it's the running session memory.
2. After any session that changes files: **append a dated entry to `CHANGELOG.md`** and commit.

## File map

| File | Role |
|---|---|
| `index.html` | Landing: hero (Three.js particles, glitch name), filterable work grid, career timeline, contact |
| `about.html` | About: WebGL shader hero, scroll text reveal bio, sticky exp stack, draggable rec deck |
| `tetra` / `siemens` / `nielseniq` / `oolalife` / `procore` / `att` / `metaverse` / `takecommand` / `virtu4l` / `virtu4lslacksagent` `.html` | Main case studies (`.block` anatomy, D3 viz, image modal) |
| `tycan` / `daily-bot` / `zafyro` / `yaiwa` / `walking-dog` / `kasuva` `.html` | Archive pages (lighter template, inline-styled nav) |
| `effects.js` / `effects.css` | **Shared across ALL pages** — noise buttons, tracing beam, comet cards, compare sliders, scroll heroes, reduced-motion |
| `images/inline/` | Content images extracted from base64 (Session 10c) — keep tracked in git |
| `CHANGELOG.md` | Session memory — read first, append always |
| `DESIGN-SYSTEM.md`, `ARCHITECTURE.md`, `COMPONENTS.md`, `ACCESSIBILITY.md` | Reference docs |

## Design system (Dark Matter)

```css
--bg:#050508  --solid:#0c0c12 (opaque cards)  --teal:#50e3c2 (primary/SoftServe)
--violet:#a78bfa (secondary/personal)  --t1:#fff  --t2:65%  --t3:45%
--border-w:rgba(255,255,255,0.07)  --surface:rgba(255,255,255,0.04)  --max:1080px
```
Fonts: **Geist** (body) + **Geist Mono** (labels/code/eyebrows). Accent yellow `#FFFF02` only for glitch overlay + cs-arrows. Industry tags amber `#f59e0b`.

## Hard rules (violations have broken the site before)

1. **Case-study content lives inside `<section class="block"><div class="block-inner">`** — `.slide`/`.grid-2`/image wrappers outside it go full-width and break layout (Session 4 bug).
2. **Page-specific effects go INLINE in that page** — never into `effects.js`/`effects.css` (they load on all 18 pages; side effects propagate).
3. **Every animation needs a `prefers-reduced-motion` path** — CSS via media query, JS via `matchMedia` flag (guard `window.matchMedia` existence). Global blunt fallback already exists in `effects.css`.
4. **Guard external/optional APIs**: `typeof THREE === 'undefined'` before Three.js code; project pages carry an IO shim in `<head>` — don't remove it.
5. **Accessibility is a brand pillar** (AT&T a11y award): skip link on every page, `aria-label` on `[data-scramble]` headings, `:focus-visible` styles, `rel="noopener"` on every `target="_blank"`, alt on every img.
6. **No base64 images in HTML** — extract to `images/inline/<page>-NN.jpg` + `loading="lazy"`.
7. **Don't break `filterCards`** on index — the animated version is defined in the Session-10 inline script; there must be only ONE definition.

## Established effect patterns (reuse, don't reinvent)

- Count-up numbers: parse `([\d.]+)(suffix)`, easeOutCubic ~1.3s, IO-triggered, `tabular-nums`
- Spotlight hover: `--mx/--my` CSS vars + radial-gradient on `::after`
- Scramble text: interval ~25ms, resolve left-to-right, restore clean string at end
- Magnetic buttons: `[data-magnetic]`, translate ≤ ±60–80px, spring back `cubic-bezier(.22,1,.36,1)`
- Reveals: `.fx-reveal` + IO + `--d` stagger delay var
- Reference catalogs: skiper-ui.com/components, motion.dev/examples (adapt to vanilla JS)

## Verification (required before declaring done)

```bash
# syntax: node --check on extracted inline scripts
# runtime: jsdom smoke test (npm i jsdom in /tmp), filter env-gap errors (THREE/matchMedia)
# expect: 0 real runtime errors across all 18 pages
```

## Git

- Identity: Dario Espinosa / despi@softserveinc.com. Conventional commits (`feat(scope):`, `fix:`, `chore:`).
- `.gitignore`: `*.pdf`, `.DS_Store`, editor files. **All of `images/` is tracked** (Pages deploy needs it).
- Pushes are done by Dario manually (enterprise local-only policy — agent never pushes).
- If git refuses with lock errors: stale `*.lock` files in `.git/` from a crashed run (happened June 2) — verify no live git process, then delete them.

## Known open items

- `virtu4l.html` + index VIRTU4L card hotlink 4–5 images from `realidadvirtu4l.com` — replace with local copies in `images/` when Dario provides them. virtu4l.html also lacks the image modal.
- Canonical URLs point to `darioespinosa.design` — revisit if the site stays on `datadaeon.github.io` without the custom domain.
- `sitemap.xml` / `llms.txt` not yet updated to reflect Session 10 changes.
