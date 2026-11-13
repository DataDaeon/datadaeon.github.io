# AGENTS.md — dario-cv-website (for Codex and other coding agents)

Read this first, then `CLAUDE.md` (project rules) and the last sessions of `CHANGELOG.md` (Sessions 31–60 = recent history).

## What this is
Dario Espinosa's portfolio. Static HTML/CSS/vanilla JS, **no build step, no npm**. Deployed with GitHub Pages at https://datadaeon.github.io (custom domain espinosadesign.com not live yet). Owner speaks Spanish (MX); write code/comments in English.

## Hard rules
- **Never push.** Commit locally; Dario pushes (`git push origin main`). Conventional commits.
- **Never commit** `music/8-Bit Trance Adventure.mp3` (untracked) — don't use `git add -A`.
- **NDA:** these names must not appear outside CHANGELOG: PaveAmerica, TETRA Technologies, BlendMaster, BlendSense, Procore, Take Command, Kelly Benefits, Benesis, Nishant Saxena. Confidential case pages show illustrative recreations only.
- Public contact: `hola@espinosadesign.com` or LinkedIn https://www.linkedin.com/in/data-espinosa/ — never the SoftServe email.
- Every animation needs a `prefers-reduced-motion` path. Keep dark + light theme (`html.theme-light`).
- Append a `### Session N` entry to `CHANGELOG.md` for every change.

## Map
- `index.html` — hero (big name, Mac drops in, stickers, joystick → game stickers), disk insert → face view as CRT TV (WebGL shader, bezel, cards with topic icons, pixel-twin chat). Big file; edit surgically.
- `effects.js` / `effects.css` — shared: page glitch transitions, Back/Next project nav (`.pg-nav`), site-wide music player (persists via sessionStorage), PixelTwin Q&A (`window.PixelTwin`, EMAIL/LI), scroll hero (`.scroll-hero-wrap`), case accordion (`initCaseAccordion`), VizTheme.
- Case pages (11): `att, benefitbridge, benefits-platform, blendops, gradeline, metaverse, nielseniq, oolalife, research-at-scale, siemens, virtu4lslacksagent` `.html`. Hero: title → `.cs-lede` (`.rec-word` hotspots) → `.cs-facts` (meta+metrics) → `.cs-figure` (NDA + Anatomy) → `.cs-acc` FAQ accordion for the rest. Nav between cases = floating `.pg-nav` only; `.cs-footer` is a quiet close (email / LinkedIn / All work), not another prev/next.
- `anatomy/` — isometric animated figures (`<name>.js`, `anatomy.css`, `theme.js`). Source generators are not in the repo; edit the JS only if needed.
- `about.html`, `archive.html`, `work.html`, `founder-mode.html`; `llms.txt`, `llms-full.txt`, `sitemap.xml`.
- Test locally: `python3 -m http.server` in the repo, open http://localhost:8000.

## Pending tasks (Dario's requests, in order)
1. ~~**Process/Tools on every case page.**~~ Done Session 61.
2. ~~**OolaLife duplicate image.**~~ Done Session 61.
3. ~~**Recruiter summary + hover-word overlays.**~~ Done Session 62; restructured Session 65 — lede under title (no “Recruiter brief” label), unified `.cs-facts`, FAQ `.cs-acc` for case sections; `.rec-word` overlays stay.
4. **About page — certifications only:** bento + wave-grid shipped (Session 63). Still need LinkedIn certifications with links — **ask Dario for the list** (LinkedIn needs login).
5. ~~**WCAG 2.2 a11y pass (keyboard, voice, contrast).**~~ Session 62 baseline done (skip link, --t3 contrast, focus-visible, sticky-back AT cleanup). Re-audit after About redesign.
