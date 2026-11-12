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
- `effects.js` / `effects.css` — shared: page glitch transitions, Back/Next project nav (`.pg-nav`), site-wide music player (persists via sessionStorage), PixelTwin Q&A (`window.PixelTwin`, EMAIL/LI), scroll hero (`.scroll-hero-wrap`).
- Case pages (11): `att, benefitbridge, benefits-platform, blendops, gradeline, metaverse, nielseniq, oolalife, research-at-scale, siemens, virtu4lslacksagent` `.html`. Hero meta row → `.cs-figure` (NDA note + Anatomy figure) → sections (`section.block`).
- `anatomy/` — isometric animated figures (`<name>.js`, `anatomy.css`, `theme.js`). Source generators are not in the repo; edit the JS only if needed.
- `about.html`, `archive.html`, `work.html`, `founder-mode.html`; `llms.txt`, `llms-full.txt`, `sitemap.xml`.
- Test locally: `python3 -m http.server` in the repo, open http://localhost:8000.

## Pending tasks (Dario's requests, in order)
1. **"AI-Assisted Design Process and Tools" section on every case page.** Reference: `gradeline.html` (also in blendops, benefits-platform). Add a tailored version (process steps + tools table) to the other 8 pages, using only facts already on each page.
2. **Duplicate image on `oolalife.html`:** the scroll-hero uses `images/oola-life-one.png`; Dario sees the website screenshot twice. Find the matching gallery image (closest: `images/inline/oolalife-06.jpg`) and remove the repeat. (Other pages fixed in Session 60.)
3. **Recruiter summary + hover-word overlays per case page.** One paragraph summarising the project (role, scope, measurable impact, process, AI/tools, constraints) written for 2026 recruiters, NDA-safe. Key words in it open an overlay like https://www.vengenceui.com/components/cursor-card ; each overlay holds one of the page's sections (title, animation, short description, and e.g. the process/tools table), so the detail is reachable with minimal scrolling. Keep keyboard access (focusable words, Esc to close) and reduced motion.
4. **About page:** restyle as a bento grid like https://www.vengenceui.com/components/research-bento-grid ; background like https://www.vengenceui.com/components/wave-grid-background (vanilla canvas/CSS, no React); add LinkedIn certifications with links — ask Dario for the list (LinkedIn needs login).
