# Experience Designer Generalist Agent — Master Reference Index

---

## AGENT IDENTITY

**Name:** Experience Designer Generalist Agent
**Version:** 1.0.0
**Created:** 2026-06-01
**Created by:** Built collaboratively between a human product designer and Claude (Anthropic) through an iterative planning and research session. Framework architecture, skill curation, and knowledge base structure designed with human-in-the-loop at every step.
**Runtime:** Claude Code (terminal) — drop `SKILL.md` in `.claude/skills/designer-agent/`
**Maintained by:** Human-in-the-loop. No autonomous updates.

---

## WHAT THIS AGENT DOES

A Claude Code agent that brings senior-level design and frontend judgment to any project — from blank brief to shipped interface. It operates with human-in-the-loop across the full design-to-code cycle.

**Core capabilities:**
- Generates complete design systems (tokens, typography, palette, spacing) matched to product type and industry before writing a line of UI code
- Translates Figma frames into semantic, mobile-first HTML/CSS or React via MCP, respecting token conventions and naming contracts
- Designs and critiques interfaces using research-grounded frameworks: 29 Laws of UX, Nielsen heuristics, Garrett's 5 Elements, Gestalt, OOUX, and Awwwards-level references
- Audits existing codebases and produces phased improvement plans without destructive restarts
- Applies product thinking before UI decisions: Hook model, CRO methodology, JTBD, OKR alignment, continuous discovery
- Runs full WCAG 2.2 AA audits with programmatic contrast verification across all 28 criteria
- Scaffolds 3D scenes, shader gradients, and motion interfaces with bundle cost and license checks before any dependency lands
- Works within GSD's spec-driven loop: design system as Phase 0, subagent context injection, atomic commits, verify-before-ship gates
- Defends design decisions with appropriate mode: expertise, critique, experiment, or business positioning

**Default stack:** Vanilla JS + plain HTML + CSS. Always asks before switching to a framework.

**What this agent does NOT replace:**
- Real user research with actual participants
- Live analytics data from your product
- Strategic business decisions
- Legal or compliance review
- Manual accessibility testing with screen readers (it audits code but cannot replace AT testing)

---

## KNOWLEDGE DOMAINS

| Domain | Module | Key topics |
|---|---|---|
| Design systems & tokens | `DESIGN-SYSTEM.md` | UI/UX Pro Max, W3C DTCG, Style Dictionary, 3-layer token architecture |
| Figma to code | `FIGMA.md` | Figma MCP, Code Connect, token pipeline, naming conventions |
| Component libraries & FX | `COMPONENTS.md` | Aceternity, UIverse, Taste Skill, ShaderGradient, Motion, React Three Fiber |
| Accessibility | `ACCESSIBILITY.md` | WCAG 2.2 AA, 28 criteria, CFLW-AI audit skill, pre-delivery checklist |
| Existing and legacy projects | `EXISTING-PROJECT.md` | Audit-first, strangler fig, phased migration |
| Product and marketing | `PRODUCT-MARKETING.md` | CRO, StoryBrand, OKRs, RICE, spec-driven, JTBD |
| Architecture and code quality | `ARCHITECTURE.md` | OOUX, Clean Architecture, DDD, testing strategy |
| UX frameworks (42 frameworks) | `UX-FRAMEWORKS.md` | See full list below |

**UX Frameworks module covers:**
Laws of UX (29 laws) · Garrett's 5 Elements · 7 Layers of Product Design · UX Strategy pyramid · UX Maturity model · Design Impact model · UX Metric anatomy · Product Metrics AARRR · Resolving conflicting research · Journey Mapping · Stakeholder review types · Defending design (Samsonov) · Cross-cultural UX (Meyer) · UX Disciplines wheel · Legacy UX and migration · Design Handoff checklist · Customer-centered roadmap (rodhappi) · Remote UX research wheel · Product Model first principles · Design Thinking + IBM EDT Hills/Playbacks/Sponsor Users · Gestalt psychology for UI · OOUX (Sophia Prater) · Personas (data-driven) · Information Architecture + card sorting / tree testing · User Testing (5-user rule, moderated vs unmoderated) · Prototyping fidelity spectrum · Eyetracking patterns (F/Z/Layer-Cake) · UX Writing and microcopy · Emotional Design (Norman 3 levels) · Data-Driven Design and quantitative UX · Carbon Design System (IBM) · AI UX Ethics (IBM 5 pillars) · NN/g Research Method Selection 3D framework · AI Interface Design Patterns (Vitaly Friedman) · TARS feature impact metric · Modal vs Page decision tree · Combobox/Multiselect/Listbox selection · Neurodiversity design · Stress and time-critical UX · Design Principles creation process · Data to Findings to Insights · Streaming UX patterns

---

## SKILL STACK

| Layer | Skill | Purpose |
|---|---|---|
| Execution engine | GSD (`@opengsd/get-shit-done-redux`) | Spec-driven loop, subagents, phases, git |
| Design intelligence | UI/UX Pro Max (`uipro-cli`) | Design system generation, 161 industry rules, 67 styles |
| Anti-slop quality | Taste Skill (Leonxlnx) | Visual quality filter, GSAP patterns, 3 adjustable dials |
| Design execution | Bencium Marketplace | Controlled / innovative / impact designer, typography, visual audit |
| Accessibility gate | WCAG Audit Skill (CFLW-AI) | 100% true positive rate, all 28 WCAG 2.2 AA criteria |
| UX knowledge | Wondelai Skills (subset of 17) | refactoring-ui, top-design, heuristics, continuous-discovery, JTBD, high-perf-browser, etc. |
| Spec sync | Spec-Driven Development (FredAntB) | requirements.md + design.md + tasks.md synced across AI tools |

---

## CHANGELOG

| Date | Version | Change |
|---|---|---|
| 2026-06-01 | 0.1.0 | Initial architecture — CLAUDE.md, REFERENCES.md, INSTALL.md |
| 2026-06-01 | 0.2.0 | Red team audit — 13 failure points identified (CLAUDE.md conflict with GSD, context overflow, missing prereqs, no skills.sh doc, no conflict resolution, no scope routing, no existing codebase mode, no testing strategy, no license check, design system not a GSD phase, subagents without design context, stack escalation missing, Figma write unreliable) |
| 2026-06-01 | 0.3.0 | Architecture refactor — renamed CLAUDE.md to SKILL.md (no more conflict with GSD), split 1,002-line monolith into 8 on-demand modules (165-line startup context), fixed all 13 blockers |
| 2026-06-01 | 0.4.0 | Added Taste Skill (Leonxlnx, 30.8k stars) — 10 variants + image gen skills + 3 adjustable dials |
| 2026-06-01 | 0.4.1 | Added Bencium Marketplace — 7 design skills including vanity-engineering-review and renaissance-architecture |
| 2026-06-01 | 0.4.2 | Added WCAG Audit Skill (CFLW-AI) — 100% true positive rate, zero false negatives, 28 WCAG 2.2 AA criteria |
| 2026-06-01 | 0.4.3 | Added Wondelai Skills — craft subset (9 skills) + Product-Informed UX subset (8 skills) |
| 2026-06-01 | 0.5.0 | Added Figma section 3 — MCP setup, Code Connect, token pipeline tools, naming convention table |
| 2026-06-01 | 0.6.0 | Added section 12 — Marketing/KPI, Spec-Driven Dev, OOP and architecture for frontend |
| 2026-06-01 | 0.7.0 | Created UX-FRAMEWORKS.md module — 19 frameworks from Figma reference page (NN/g, IxDF, rodhappi, Samsonov, etc.) |
| 2026-06-01 | 0.8.0 | NN/g + IxDF + IBM Design scrape — 14 new frameworks (Design Thinking, Gestalt, OOUX, Personas, IA, User Testing, Prototyping, Eyetracking, UX Writing, Emotional Design, Data-Driven Design, Carbon DS, AI Ethics, Research Method Selection) |
| 2026-06-01 | 0.9.0 | Vitaly Friedman / Smashing Magazine scrape — 9 new frameworks (AI Interface Design Patterns, TARS, Modal vs Page, Component selection, Neurodiversity, Stress UX, Design Principles, Data to Insights, Streaming UX) |
| 2026-06-01 | 1.0.0 | Added agent identity card, capability overview, knowledge domain map, skill stack table, changelog, and sources index |

| 2026-06-01 | 1.1.0 | Added Pencil.dev → React/Tailwind export skill (pencil-to-code by phrazzld), Jack Roberts toolchain (power-design skill, Open Design, brand DNA methodology, anti-slop critique, cost-aware model routing), ByteByteGo web fundamentals (CDN, DNS, API styles, HTTP status codes, latency numbers, caching layers), Figma AI ideation patterns, lo-fi→hi-fi wireframe ladder — across COMPONENTS.md, ARCHITECTURE.md, UX-FRAMEWORKS.md |


**Summary stats at v1.1.0 (current):**
- 42 UX frameworks documented across 8 on-demand modules
- 165 lines loaded at startup (SKILL.md only)
- ~1,900 total lines across all modules (never all loaded simultaneously)
- 11 files total in the agent package

---

## SOURCES

All knowledge derived from publicly available sources:

| Source | URL | Used for |
|---|---|---|
| Nielsen Norman Group | nngroup.com | UX maturity, strategy, research methods, heuristics, IA, personas, user testing, eyetracking |
| Interaction Design Foundation | ixdf.org | Design thinking, Gestalt, OOUX, emotional design, data-driven UX, UI patterns |
| IBM Design | ibm.com/design | Enterprise Design Thinking, Carbon DS, AI ethics, animation principles, data viz |
| Vitaly Friedman / Smashing Magazine | smashingmagazine.com | AI interface patterns, TARS, streaming UX, modal/page, neurodiversity, stress UX, design principles |
| Laws of UX | lawsofux.com | 29 psychological laws for interface design |
| GSD Core | github.com/open-gsd/gsd-core | Execution engine, spec-driven loop |
| UI/UX Pro Max | github.com/nextlevelbuilder/ui-ux-pro-max-skill | Design system generation |
| Taste Skill | github.com/Leonxlnx/taste-skill | Visual quality filter |
| Bencium Marketplace | github.com/bencium/bencium-marketplace | Design execution skills |
| WCAG Audit Skill | github.com/CFLW-AI/wcag-audit-claude-skill | Accessibility auditing |
| Wondelai Skills | github.com/wondelai/skills | UX and product skills library |
| Spec-Driven Development | github.com/FredAntB/Spec-Driven-Development | Multi-tool spec sync |
| Pavel Samsonov | — | How To Defend Design Process (Expertise/Critique/Experiment/Position) |
| rodhappi | — | Customer-Centered Product Roadmap |
| Krisztina Szerovay | sketchingforux.com | Journey Mapping sketchnote |
| Bryan Zmijewski | — | Design Impact model, UX Metric anatomy |
| Raschin Fatemi | — | Resolving Conflicting UX Research |
| Carbon Design System | carbondesignsystem.com | Enterprise DS architecture reference |
| AI Design Patterns | ai-design-patterns.com | Vitaly Friedman AI UX course |

---


## 1. AGENT FRAMEWORK (Execution Engine)

| Resource | URL | Purpose |
|---|---|---|
| GSD Core (active repo) | https://github.com/open-gsd/gsd-core | Meta-prompting + context engineering + spec-driven dev loop |
| GSD npm package | `npx @opengsd/get-shit-done-redux@latest` | Installer for Claude Code |
| GSD Docs | https://github.com/open-gsd/gsd-core/blob/next/docs/USER-GUIDE.md | Full walkthrough |
| GSD Architecture | https://github.com/open-gsd/gsd-core/blob/next/docs/ARCHITECTURE.md | Multi-agent orchestration |
| GSD Commands | https://github.com/open-gsd/gsd-core/blob/next/docs/COMMANDS.md | All slash commands |

**GSD Core Loop:**
```
/gsd-new-project      → brief → research → requirements → roadmap
/gsd-discuss-phase N  → capture decisions before planning
/gsd-plan-phase N     → research + plan + verify
/gsd-execute-phase N  → parallel subagent execution (fresh contexts)
/gsd-verify-work N    → manual acceptance + diagnosis
/gsd-ship N           → PR creation
```

---

## 2. DESIGN INTELLIGENCE SKILLS

### 2a. UI/UX Pro Max Skill (PRIMARY — install first)
| Resource | URL |
|---|---|
| Repo | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill |
| Install CLI | `npm install -g uipro-cli && uipro init --ai claude` |
| Plugin install | `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill` |

**Capabilities:**
- 67 UI Styles (Glassmorphism, Brutalism, Bento, Liquid Glass, etc.)
- 161 industry-specific reasoning rules → auto design system generation
- 57 typography pairings + 161 color palettes
- 15 tech stack guidelines (HTML+Tailwind default)
- 99 UX guidelines + anti-patterns
- WCAG AA compliance checks baked-in
- Pre-delivery checklist (responsive 375/768/1024/1440px, contrast, focus states, reduced-motion)

**Design System Generator:**
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "your product type" --design-system -p "ProjectName"
# Persist master file:
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "product" --design-system --persist -p "ProjectName"
```

**Outputs to:** `design-system/MASTER.md` + `design-system/pages/*.md`

---

### 2b. Taste Skill (anti-slop visual quality layer)

**Repo:** https://github.com/Leonxlnx/taste-skill  
**Website:** https://tasteskill.dev  
**Stars:** 30.8k — framework-agnostic, works with Claude Code, Cursor, Codex, Windsurf

**Install:**
```bash
# All skills
npx skills add https://github.com/Leonxlnx/taste-skill

# Individual (recommended)
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
npx skills add https://github.com/Leonxlnx/taste-skill --skill "high-end-visual-design"  # premium/calm
npx skills add https://github.com/Leonxlnx/taste-skill --skill "minimalist-ui"           # Notion/Linear
npx skills add https://github.com/Leonxlnx/taste-skill --skill "industrial-brutalist-ui"
npx skills add https://github.com/Leonxlnx/taste-skill --skill "redesign-existing-projects"
```

**Skill variants — pick by visual direction:**

| Install name | What it does |
|---|---|
| `design-taste-frontend` | **Default v2 (start here)** — reads brief, infers design language, tunes 3 dials: VARIANCE / MOTION / DENSITY. GSAP skeletons, anti-slop rules, pre-flight check |
| `design-taste-frontend-v1` | Original v1 — pin this if v2 breaks something specific |
| `gpt-taste` | Stricter variant: higher layout variance, stronger GSAP, aggressive anti-slop |
| `image-to-code` | Image-first pipeline: generate reference images → analyze → implement frontend |
| `redesign-existing-projects` | Audit existing UI first, then fix layout/spacing/hierarchy/styling |
| `high-end-visual-design` | Polished, calm, expensive — whitespace, premium fonts, spring motion |
| `full-output-enforcement` | Forces complete output when agent truncates |
| `minimalist-ui` | Editorial product UI — Notion/Linear vibes, restrained palette |
| `industrial-brutalist-ui` | Swiss type, sharp contrast, experimental layout |
| `stitch-design-taste` | Google Stitch-compatible, exports DESIGN.md |

**Image generation skills (produce reference comps, not code):**

| Install name | Use |
|---|---|
| `imagegen-frontend-web` | Website comps — hero, landing, multi-section |
| `imagegen-frontend-mobile` | Mobile screens/flows — iOS/Android |
| `brandkit` | Logo directions, palettes, type, identity boards |

**Adjustable dials (in `design-taste-frontend` only, values 1–10):**
- `DESIGN_VARIANCE` — Layout experimentation (low: centered/clean → high: asymmetric/modern)
- `MOTION_INTENSITY` — Animation depth (low: hover only → high: scroll/magnetic)
- `VISUAL_DENSITY` — Information per viewport (low: spacious → high: dense dashboard)

> Hard em-dash ban, canonical GSAP skeletons, redesign-audit protocol. Framework-agnostic (React, Vue, Svelte, Vanilla).

---

### 2c. Bencium Marketplace (companion skill suite)

**Repo:** https://github.com/bencium/bencium-marketplace  
**Install:**
```bash
# All skills globally
npx skills add bencium/bencium-marketplace -g --all

# Individually (recommended for this agent)
npx skills add bencium/bencium-marketplace -g --skill bencium-controlled-ux-designer
npx skills add bencium/bencium-marketplace -g --skill bencium-innovative-ux-designer
npx skills add bencium/bencium-marketplace -g --skill bencium-impact-designer
npx skills add bencium/bencium-marketplace -g --skill design-audit
npx skills add bencium/bencium-marketplace -g --skill typography

# Via Claude Code marketplace
/plugin marketplace add bencium/bencium-marketplace
/plugin install bencium-controlled-ux-designer@bencium-marketplace
```

**Design skills breakdown (install per use case):**

| Skill | When to use |
|---|---|
| `bencium-controlled-ux-designer` | Enterprise, regulated industries — systematic, WCAG 2.1 AA, mathematical scales, always-ask-first protocol |
| `bencium-innovative-ux-designer` | Landing pages, campaigns — bold creative direction, shadows, gradients, experimental typography |
| `bencium-impact-designer` | Production frontend that avoids generic AI aesthetics — based on Anthropic's Frontend Designer Skill |
| `design-audit` | Post-build visual/UX audit → phased implementation-ready plan. Purely visual, does NOT touch functionality |
| `typography` | Auto-enforces correct quote marks, dashes, spacing, hierarchy in all generated HTML/CSS/React |
| `renaissance-architecture` | First-principles architecture thinking — building genuinely new solutions |
| `human-architect-mindset` | Domain modeling, systems thinking, constraint navigation |

**Bonus: spinner-verbs.json** — 64 satirical loading messages for Claude Code's "Thinking…" spinner.  
Copy contents into `~/.claude/settings.json` under `"spinnerVerbs"`.

---

### 2d. WCAG Audit Skill (dedicated accessibility gate)

**Repo:** https://github.com/CFLW-AI/wcag-audit-claude-skill  
**Install:** Download `wcag-audit.plugin` and open in Claude Desktop, or copy `plugin/` dir to `.claude/skills/`

**Performance:** 100% true positive rate across 56 known WCAG failures. Zero false negatives. Covers all 28 WCAG 2.2 AA success criteria.

**Audit phases (5-step):**
1. Source Acquisition (URL or file)
2. CSS Color Extraction
3. Programmatic Contrast Verification (WCAG relative luminance formula)
4. Manual Criteria Review (all 28 SC)
5. Styled HTML audit report generation

**Trigger phrases:**
- "Is this page WCAG compliant?"
- "Run an accessibility audit on this URL"
- "Check the contrast ratios on this page"
- "Does this HTML meet WCAG 2.2?"

**Limitation:** Static analysis only. Does not test live browser keyboard navigation or screen reader behavior. Always combine with manual testing for full compliance.

---

### 2e. Research / Scraping Skill — ScrapeGraph AI (suggested, not yet in use)

**ScrapeGraph-AI:** https://github.com/ScrapeGraphAI/Scrapegraph-ai  
**What it does:** LLM-powered web scraping — extracts structured data from any URL using natural language instructions.

**Suggested uses in this agent workflow:**
- Research competitive UI before starting a project (scrape live sites for design analysis)
- Extract component patterns from reference sites (e.g., pull color tokens or spacing from a live design system)
- Feed scraped content into design briefs automatically

**How to suggest it:** When the agent is doing research in `/gsd-discuss-phase` or `/gsd-plan-phase`, it should surface ScrapeGraph-AI as an option:
> "I can use ScrapeGraph-AI to scrape competitor UIs or reference sites for this design brief. Want me to set that up?"

**Integration path (when ready):** Run as a subagent tool in GSD execute phase, or as a standalone CLI step before project init.

---

### 2f. Wondelai Skills (design + UX + performance subset)

**Repo:** https://github.com/wondelai/skills  
**Browse:** https://skills.wondel.ai  
**40+ skills total** — only the design/UX/performance-relevant subset listed below.

**Install (Claude Code plugin):**
```bash
/plugin marketplace add wondelai/skills

# Design + UX bundle
/plugin install ux-design@wondelai-skills
# Includes: refactoring-ui, ios-hig-design, ux-heuristics, hooked-ux,
#           improve-retention, web-typography, top-design,
#           design-everyday-things, lean-ux, microinteractions

# Performance bundle
/plugin install systems-architecture@wondelai-skills
# Includes: high-perf-browser (Core Web Vitals, HTTP protocols, caching)
```

**Install via skills.sh:**
```bash
# --- CRAFT (visual + interaction quality) ---
npx skills add wondelai/skills/refactoring-ui
npx skills add wondelai/skills/top-design
npx skills add wondelai/skills/ux-heuristics
npx skills add wondelai/skills/design-everyday-things
npx skills add wondelai/skills/web-typography
npx skills add wondelai/skills/microinteractions
npx skills add wondelai/skills/lean-ux
npx skills add wondelai/skills/ios-hig-design
npx skills add wondelai/skills/high-perf-browser

# --- PRODUCT-INFORMED UX (discovery + behavior + strategy) ---
npx skills add wondelai/skills/continuous-discovery   # PRIORITARIO
npx skills add wondelai/skills/jobs-to-be-done        # PRIORITARIO
npx skills add wondelai/skills/inspired-product       # PRIORITARIO
npx skills add wondelai/skills/design-sprint
npx skills add wondelai/skills/mom-test
npx skills add wondelai/skills/lean-startup
npx skills add wondelai/skills/hooked-ux              # ya incluido en ux-design bundle
npx skills add wondelai/skills/improve-retention      # ya incluido en ux-design bundle
```

---

### Visual Craft Skills

| Skill | What it covers |
|---|---|
| `refactoring-ui` | Practical UI — spacing scale, color palettes, Tailwind. "This looks amateur, fix it." |
| `top-design` | Awwwards/Locomotive-level output. Immersive typography, scroll compositions |
| `ux-heuristics` | Nielsen 10 heuristics + Krug Trunk Test, severity ratings 0–4 |
| `design-everyday-things` | Affordances, signifiers, feedback, error prevention |
| `web-typography` | Font selection, pairing, `clamp()` fluid type, line length, readability |
| `microinteractions` | Button states, loading feedback, loops, signature moments |
| `lean-ux` | UX hypothesis statements, MVE design, sprint-integrated UX |
| `ios-hig-design` | Apple HIG — when project targets iOS/native |
| `high-perf-browser` | Core Web Vitals (LCP/INP/CLS), caching, HTTP/2-3, WebSocket vs SSE |

---

### Product-Informed UX Skills

Skills that inform *what* to design and *why*, before writing a line of code.

| Skill | Source | When to use |
|---|---|---|
| `continuous-discovery` | Teresa Torres — *Continuous Discovery Habits* | When defining what to build. Opportunity Solution Trees, weekly interview cadence, assumption mapping |
| `jobs-to-be-done` | Clayton Christensen — *Competing Against Luck* | Reframing requirements: what job is the user actually hiring this for? Impacts IA and flows |
| `inspired-product` | Marty Cagan — *Inspired* | Discovery vs delivery dual-track. Prevents feature factory design. Empowered team structure |
| `design-sprint` | Jake Knapp — *Sprint* | Problem framing before designing. Storyboarding critical decisions. 1-day user testing structure |
| `mom-test` | Rob Fitzpatrick — *The Mom Test* | Preparing validation sessions. Prevents confirmation-bias interviews |
| `lean-startup` | Eric Ries — *The Lean Startup* | Smoke tests + MVPs. Actionable vs vanity metrics for measuring if a design is working |
| `hooked-ux` | Nir Eyal — *Hooked* | Trigger → Action → Variable Reward → Investment. Onboarding + retention loop design |
| `improve-retention` | BJ Fogg — *Tiny Habits* (B=MAP) | Diagnosing retention failures: motivation vs ability vs prompt — tells you where to change the design |

**Agent rule for Product-Informed UX skills:** Surface these during `/gsd-discuss-phase` when the conversation involves *why* to design something, not just *how*. Example triggers:
- "Users aren't coming back" → suggest `improve-retention` + `hooked-ux`
- "We need to validate this flow" → suggest `mom-test` + `lean-startup`
- "What should we build next?" → suggest `continuous-discovery` + `jobs-to-be-done`
- "How do we run a design session?" → suggest `design-sprint`

> Not installing from Wondelai: marketing, sales, negotiation, business ops, and go-to-market skills — out of scope.

---

## 3. FIGMA ↔ CODE BRIDGE

### 3a. Figma MCP — Figma → Code (READ direction, confirmed working)

**Official setup:** https://help.figma.com/hc/en-us/articles/39888612464151  
**Plugin install (recommended):**
```bash
# In Claude Code terminal
claude mcp add --transport http figma https://mcp.figma.com/mcp
# Then authenticate via browser — or use the plugin:
/plugin install figma@claude-plugins-official
```

**What it does (confirmed):**
- Reads Figma file structure, layers, components, Auto Layout, design tokens
- Generates code from a selected frame/component given its URL
- Provides design context: colors, spacing, font sizes, component names
- Works with `get_design_context`, `get_screenshot`, `get_metadata`

**How to use:**
```
"Please implement this Figma frame as HTML/CSS.
 URL: https://www.figma.com/design/xxxxx/MyProject?node-id=123-456"
```

**Confirmed limitations (as of 2026-06):**
- `generate_figma_design` (code → Figma write) is **NOT available** in the remote MCP server for most users — reported broken/missing across Figma forums
- Code → Figma push requires the **Figma desktop app** local MCP, and even then write support is inconsistent
- Cannot update existing code intelligently — tends to regenerate rather than patch
- Multi-frame flows need frame-by-frame conversion then manual assembly
- No visual refinement loop — once code is generated, feedback ends

**Agent rule:** When given a Figma URL, use MCP to extract design context. Never assume write/push works — confirm with human first.

---

### 3b. Figma Code Connect — Component mapping (design system ↔ codebase)

**Official repo:** https://github.com/figma/code-connect  
**Docs:** https://developers.figma.com/docs/code-connect/quickstart-guide/  
**npm:** `@figma/code-connect`

**What it does:**
Maps Figma components 1:1 to real codebase components. In Dev Mode, instead of seeing autogenerated code, developers see actual production component snippets with real props.

```bash
npx figma connect publish   # publish mappings to Figma
npx figma connect unpublish # remove mappings
```

**When to use:** When a design system exists in both Figma and code. Bridges the handoff gap — designers stay in Figma, developers see real component usage.

**Supports:** React, React Native, HTML/Web Components, SwiftUI, Jetpack Compose, Storybook.

**Known issues:** `get_code_connect_map` via MCP can return empty even when connections are set up — forum-reported bug. Workaround: use CLI `npx figma connect` directly.

---

### 3c. Design Tokens Pipeline (Figma Variables → CSS/TS/JSON)

**The correct mental model:**

```
Figma Variables
     ↓ export (W3C DTCG format JSON)
  tokens.json
     ↓ transform
  Style Dictionary
     ↓ compile to
  CSS custom properties + TypeScript types + Tailwind config
```

**Tools — confirmed working stack:**

| Tool | URL | Role |
|---|---|---|
| Style Dictionary | https://styledictionary.com | Transform tokens.json → CSS vars, TS, SCSS, Tailwind |
| Tokens Studio | https://tokens.studio | Figma plugin — GitHub sync, multi-platform export, CI/CD |
| Design Token Exporter | https://www.figma.com/community/plugin/1590704268871516927 | Official Figma plugin — exports W3C DTCG JSON |
| DTCG Token Manager | https://www.figma.com/community/plugin/1602387835479491374 | Import/export DTCG JSON ↔ Figma Variables, bidirectional |
| Styleframe | https://www.styleframe.dev/figma | TypeScript-first, code is source of truth, exports to Figma |
| design-tokens plugin | https://github.com/gregorymm/design-tokens | Claude Code plugin — 3-layer token extraction (primitive/semantic/component), write-back to Figma |

**3-layer token architecture (best practice):**
```
Primitive tokens   → raw values:    --color-blue-500: #2563eb
Semantic tokens    → intent:        --color-primary: var(--color-blue-500)
Component tokens   → per-component: --button-bg: var(--color-primary)
```

**Install the Claude Code design-tokens plugin:**
```bash
curl -sL https://raw.githubusercontent.com/gregorymm/design-tokens/main/install.sh | bash
```
Extracts Figma tokens → generates `tokens.json`, `tokens.css`, `tokens.scss`, `style-dictionary.config.json`. Supports write-back to rebind Figma layers from raw hex to variable references.

**Token pipeline with CI/CD (Tokens Studio approach):**
1. Designer updates color in Figma
2. Tokens Studio pushes a PR to GitHub automatically
3. PR shows exactly which token changed
4. Style Dictionary transform runs in CI
5. CSS vars + TS types update in codebase

**Agent rule:** When starting any project with an existing Figma design system, ask:
> "Do you have Figma Variables set up? I can extract the token pipeline before writing any component code."

---

### 3d. Figma ↔ Code — Naming Convention (critical for handoff quality)

The biggest source of friction in design→code is mismatched naming. The agent enforces this convention when given Figma access:

| Figma side | Code side | Example |
|---|---|---|
| Component name | Component name | `Button` → `<Button>` |
| Variant Property `size` | Prop `size` | `size=Large` → `size="lg"` |
| Variant Property `variant` | Prop `variant` | `variant=Primary` → `variant="primary"` |
| Variable collection `Colors/Primary/500` | CSS var `--color-primary-500` | |
| Auto Layout gap | CSS `gap` | |
| Auto Layout padding | CSS `padding` | |

> Name Figma layers like component props from day one. `Button / Large / Blue` is a designer's name. `Button` with `size=lg, variant=primary` is a developer's name. They should be the same.

---

## 4. COMPONENT LIBRARIES & UI INSPIRATION

> **Rule:** Always check bundle size at https://bundlephobia.com before adding a dependency.

| Library | URL | Notes |
|---|---|---|
| Aceternity UI | https://ui.aceternity.com/components | Animated, React-based, premium feel |
| Componentry | https://www.componentry.fun/docs | Component patterns + docs |
| Dot Matrix (Shawn) | https://dotmatrix.zzzzshawn.cloud/ | Pixel/dot aesthetic components |
| Skiper UI | https://skiper-ui.com/ | Modern UI kit |
| Cult UI | https://www.cult-ui.com/ | Curated component collection |
| StyleUI | https://www.styleui.dev/ | Style-focused components |
| UIverse | https://uiverse.io/elements | Open-source UI elements, pure CSS |
| 21st.dev Community | https://21st.dev/community/components | Community component marketplace |
| Refero Design | https://styles.refero.design/ | Design references + style catalogue |

---

## 5. VISUAL FX & ADVANCED EFFECTS

### ShaderGradient
- **Repo:** https://github.com/ruucm/shadergradient
- **Use:** Animated mesh gradient backgrounds, hero sections
- **Stack:** React (Three.js based) — evaluate bundle cost first

### Liquid Logo
- **Repo:** https://github.com/paper-design/liquid-logo
- **Use:** Organic, fluid logo animations

### Liquid Glass JS
- **Repo:** https://github.com/dashersw/liquid-glass-js
- **Use:** iOS-style liquid glass morphism effects, vanilla-compatible

### Motion (Framer Motion evolution)
- **Repo:** https://github.com/motiondivision/motion
- **Docs:** https://motion.dev/
- **Use:** Production-grade animation library — works with React and vanilla
- **Check:** https://bundlephobia.com/package/motion

> **Agent rule for Visual FX:** When a project needs these, present as a "components catalog" option. Always confirm stack compatibility and bundle cost with human before implementing.

---

## 6. 3D UI

### React Three Fiber
- **Repo:** https://github.com/pmndrs/react-three-fiber
- **Use:** Declarative Three.js in React — scenes, cameras, materials, geometry
- **When to use:** Explicit 3D request or immersive product showcase
- **Stack requirement:** React — always confirm before scaffolding

> **Agent rule:** Scaffold a minimal scene first (camera + light + mesh), get human approval, then expand.

---

## 7. DESIGN TOOLS & UTILITIES

| Tool | URL | Category |
|---|---|---|
| Magic Pattern | https://www.magicpattern.design/ | CSS pattern generator |
| Shape Divider | https://www.shapedivider.app/ | SVG section dividers |
| fffuel | https://www.fffuel.co/ | SVG generators (gradients, patterns, backgrounds) |
| UI Colors | http://uicolors.app/ | Tailwind-compatible color palette generator |

---

## 8. DEVELOPER REFERENCE

| Tool | URL | Use |
|---|---|---|
| Bundlephobia | https://bundlephobia.com/ | Check package size BEFORE adding deps |
| DevDocs | https://devdocs.io/ | Unified API docs (MDN, CSS, JS, etc.) |
| Roadmap.sh | https://roadmap.sh/ | Tech learning paths + skill trees |

---

## 9. DESIGN PRINCIPLES BAKED INTO THE AGENT

### Non-negotiable defaults (always apply)
- **Mobile-first:** Build from 375px up. Test at 375 / 768 / 1024 / 1440px.
- **Accessibility:** WCAG AA minimum. Contrast 4.5:1 for text. Focus states visible. `prefers-reduced-motion` respected.
- **Semantic HTML:** Correct element hierarchy. No `div` soup.
- **No emoji as icons:** Use SVG (Heroicons / Lucide).
- **Cursor pointer:** On all interactive elements.
- **Hover states:** Smooth transitions 150–300ms.
- **Performance:** Check bundle size before adding deps. Lazy-load images. No layout shift (CLS).

### Ask before starting any project
1. What's the stack? (default: Vanilla JS + plain HTML/CSS)
2. Does it need a framework? Why?
3. Any existing design tokens / brand guide?
4. Target devices / browsers?
5. Accessibility requirements beyond WCAG AA?

### Human-in-the-loop gates
- Before generating design system → show design brief summary, await approval
- Before adding any npm dependency → show Bundlephobia cost, await approval
- Before implementing 3D or shader effects → confirm performance budget
- Before shipping any phase → run pre-delivery checklist

---

## 10. STACK DECISION MATRIX

| Scenario | Recommended Stack |
|---|---|
| Landing page, brochure site | Vanilla HTML + CSS + minimal JS |
| Component-heavy SaaS app | React + Tailwind |
| Performance-critical site | Astro (partial hydration) |
| 3D/immersive experience | React + React Three Fiber |
| Animation-heavy storytelling | React + Motion (framer) |
| Quick prototype/MVP | HTML + Tailwind CDN |

> Always ask first. Never assume React.

---

## 11. AGENT ARTIFACTS (persistent files per project)

Following GSD pattern — these files live in the project root:

```
design-system/
├── MASTER.md              ← global design tokens, typography, colors, spacing
└── pages/
    └── [page-name].md     ← page-specific overrides only

PROJECT.md                 ← vision, target audience, brand keywords
REQUIREMENTS.md            ← scope, features, constraints
ROADMAP.md                 ← phases and milestones
STATE.md                   ← current position, decisions made
CONTEXT.md                 ← per-phase implementation notes
```

---

## 12. MARKETING, MEASUREMENT & ARCHITECTURE SKILLS

### 12a. Marketing & Conversion — from Wondelai (previously excluded, now scoped)

**Why now:** When designing landing pages, product flows, or onboarding, these frameworks inform *what* to put on the page and *why* users convert. Not for running campaigns — for designing converting experiences.

**Install:**
```bash
# Full marketing bundle
/plugin install marketing-cro@wondelai-skills
# Includes: cro-methodology, storybrand-messaging, scorecard-marketing, contagious, one-page-marketing

# Individual installs
npx skills add wondelai/skills/cro-methodology
npx skills add wondelai/skills/storybrand-messaging
npx skills add wondelai/skills/contagious
```

**Skills relevant to design decisions:**

| Skill | Source | When to use in design |
|---|---|---|
| `cro-methodology` | *Making Websites Win* — Blanks & Jesson | Designing landing pages, pricing pages, checkout flows. "What objections stop users from converting?" → builds the page around answers |
| `storybrand-messaging` | *Building a StoryBrand* — Donald Miller | Hierarchy and copy decisions on hero sections. Who's the hero? Where's the CTA? What's the failure state? |
| `contagious` | *Contagious* — Jonah Berger | When designing share mechanics, social proof placement, viral features. STEPPS framework for shareability |
| `influence-psychology` | *Influence* — Cialdini | Ethical use of social proof, scarcity, authority signals in UI. Audit whether patterns manipulate vs inform |

> **Agent rule:** Surface `cro-methodology` when given a landing page or flow to design. Use it to generate an objection/counter-objection table *before* laying out the page structure.

---

### 12b. KPIs, OKRs & Data-Driven Design

**Approach:** No single installable skill here — assembled from three sources already in the stack.

**OKR Cascade Generator (from `alirezarezvani/claude-skills`):**
```bash
# Source repo (use this, not the fork)
git clone https://github.com/alirezarezvani/claude-skills.git

# OKR generator (Python CLI)
python product-team/product-strategist/scripts/okr_cascade_generator.py growth
python product-team/product-strategist/scripts/okr_cascade_generator.py retention
python product-team/product-strategist/scripts/okr_cascade_generator.py revenue
```

Generates aligned OKR cascade: company goal → product goal → team metrics. Output is structured JSON/text ready to feed into `REQUIREMENTS.md`.

**RICE Prioritizer (from `alirezarezvani/claude-skills`):**
```bash
python product-team/product-manager-toolkit/scripts/rice_prioritizer.py features.csv
# Reach × Impact × Confidence ÷ Effort → ranked feature backlog
```

**Data-driven persona generator (from `alirezarezvani/claude-skills`):**
```bash
python product-team/ux-researcher-designer/scripts/persona_generator.py
# Creates personas from interview data, not assumptions
```

**Design token generator (from `alirezarezvani/claude-skills`):**
```bash
python product-team/ui-design-system/scripts/design_token_generator.py "#0066CC" modern css
# Outputs: CSS vars, JSON, SCSS from a brand color
```

**Key metrics the agent should know when designing product UIs:**

| Metric type | Relevant to design | How design impacts it |
|---|---|---|
| Activation rate | Onboarding screens | Reduce steps, progressive disclosure |
| DAU/MAU ratio | Core loop design | Hook model, habit triggers |
| Time-to-value | First-run experience | Surface value before friction |
| Task completion rate | Form + flow design | Affordances, error handling |
| Bounce rate (page) | Landing page structure | CRO methodology, storybrand hierarchy |
| Feature adoption | IA + discovery | Progressive disclosure, empty states |
| NPS / CSAT | Overall product quality | Microinteractions, feedback loops |

> **Agent rule:** When designing a new feature or screen, ask: "What metric does this move?" If the answer is unclear, run `continuous-discovery` + `jobs-to-be-done` before designing.

---

### 12c. Spec-Driven Development

**What it is:** Writing `requirements.md`, `design.md`, and `tasks.md` before any code — so all AI tools work from the same spec and don't contradict each other.

**Dedicated skill:**
- **Repo:** https://github.com/FredAntB/Spec-Driven-Development
- **What it does:** Generates consistent spec files for Claude Code, Cursor, Copilot, Windsurf, and Aider from a single source of truth

```bash
npx skills add https://github.com/FredAntB/Spec-Driven-Development
```

**Relationship to GSD:** GSD already implements spec-driven development via `PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `STATE.md`. The FredAntB skill is a complement — more granular, generates matching config files per AI tool.

**Agent rule:** For any project involving multiple AI tools or handoffs, generate the spec before any design or code:
```
/gsd-new-project        # GSD level — project scope
/spec-driven-dev        # FredAntB — feature-level spec files
```

---

### 12d. Object-Oriented & Architecture for Frontend

**From Wondelai — already in the stack but not flagged for frontend:**

```bash
npx skills add wondelai/skills/domain-driven-design    # Bounded contexts → component boundaries
npx skills add wondelai/skills/clean-architecture      # Dependency rule → framework-agnostic UI
npx skills add wondelai/skills/software-design-philosophy  # Deep modules → component API design
```

**How these apply to frontend/design systems:**

| Skill | Frontend application |
|---|---|
| `domain-driven-design` | Map bounded contexts to UI modules. Don't let `UserProfile` bleed into `Billing` UI. Each domain owns its components |
| `clean-architecture` | Dependency Rule for UI: views depend on presenters, not the other way. Design system components have no framework dependencies |
| `software-design-philosophy` | Deep modules principle → components with simple APIs that hide complexity. `<DatePicker />` not `<DatePickerWithCalendarAndTimezoneHandling />` |
| `refactoring-patterns` | Safe component refactors: Extract Component, Lift State, Replace Conditional with Polymorphism |

**From Bencium — `vanity-engineering-review`:**
```bash
npx skills add bencium/bencium-marketplace -g --skill vanity-engineering-review
```
Audits whether code/architecture was built for ego vs user value. Useful after a design system sprint to check if components are over-engineered.

**From Bencium — `renaissance-architecture`:**
```bash
npx skills add bencium/bencium-marketplace -g --skill renaissance-architecture
```
First-principles architecture thinking. Use when designing a component system from scratch instead of copying a pattern.

---

## CHANGELOG
| Date | Change |
|---|---|
| 2026-06-01 | Initial document created |
| 2026-06-01 | Added Bencium Marketplace full breakdown (7 design skills) |
| 2026-06-01 | Added WCAG Audit Skill (CFLW-AI, 100% true positive rate) |
| 2026-06-01 | Added ScrapeGraph-AI as suggested research tool |
| 2026-06-01 | Added Taste Skill (Leonxlnx, 30.8k stars) with all 10 variants + image gen skills |
| 2026-06-01 | Added Wondelai Skills — craft subset (9) + Product-Informed UX subset (8) |
| 2026-06-01 | Added section 3: Figma ↔ Code Bridge (MCP, Code Connect, token pipeline, naming convention) |
| 2026-06-01 | Added section 12: Marketing/KPI/Spec-Driven/OOP — scoped from existing repos + new sources |

| Pencil.dev | pencil.dev | AI-native design tool, design-to-code via MCP |
| pencil-to-code skill | github.com/phrazzld/claude-config | Converts .pen files to React + Tailwind |
| Jack Roberts | youtube.com/@Itssssss_Jack | Brand DNA, anti-slop methodology, vibe coding workflows |
| power-design skill | github.com/ItsssssJack/power-design | AI-generated slides with codified design principles |
| Open Design | open-design.ai | Open-source, BYOK, 71+ brand design systems |
| ByteByteGo | bytebytego.com / github.com/ByteByteGoHq/system-design-101 | CDN, DNS, APIs, HTTP, latency fundamentals |

---
*Appended at v1.2.0:*

| 2026-06-01 | 1.2.0 | Added knowledge from 19 YouTube channels across 4 research chunks. 9 channels fully verified and integrated. 6 channels unverifiable (flagged). New sections: §45 TASK prompting framework (Tina Huang), §46 OFFF Barcelona creative direction, §47 Figma+Framer+AI workflow (Sergei Chyrkov), §48 Hatch Conference design leadership, §49 DesignCourse Gary Simon, §50 Lenny's Podcast product strategy, §51 Dive Club design community, §52 Dan Mall design systems, §53 AM Design and Dev. Plus: Brendan O'Connell WordPress+Bricks stack, Nate Herk n8n agents, How I AI (Claire Vo), mokkapp practitioner reference. |

New sources added at v1.2.0:
| Sergei Chyrkov | youtube.com/@Sergei-Chyrkov | Figma+Framer+MCP+Cursor design-to-code workflows |
| Tina Huang | youtube.com/@TinaHuang1 | TASK prompting framework, practical AI use |
| OFFF Barcelona | youtube.com/@FOFBarcelona | Creative direction, motion, visual identity conference |
| Hatch Conference | youtube.com/@hatchconference | Senior design leadership, AI impact on design practice |
| DesignCourse (Gary Simon) | youtube.com/@DesignCourse | UI/CSS/frontend fundamentals |
| Lenny's Podcast | youtube.com/@LennysPodcast | Product strategy, PM frameworks, growth |
| Dive Club | youtube.com/@joindiveclub | Design community, Figma tactics, design systems |
| Dan Mall | youtube.com/@DanMallTeaches | Design systems, "Design That Scales", DS leadership |
| AM Design and Dev | youtube.com/@AMDesignAndDev | Full-stack design + development practitioner |
| Brendan O'Connell | youtube.com/@BrendanOConnellWP | WordPress + Bricks Builder + ACSS + AI automation |
| Nate Herk | youtube.com/@nateherk | n8n AI automation, sub-agent orchestration |
| How I AI (Claire Vo) | youtube.com/@howiaipodcast | Practical AI workflows, ChatPRD, PRD writing |
| mokkapp | youtube.com/@mokkapp | UI/UX tutorials, AI design tools, weekly practitioner content |
