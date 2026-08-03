# Module: COMPONENTS
> Load when: looking for a component, visual FX, animation, or 3D.

---

## LOOKUP ORDER — follow before adding any dependency

1. Vanilla CSS solution? → Do it. Zero deps.
2. UIverse (pure CSS): https://uiverse.io/elements
3. Cult UI / StyleUI — for styled references
4. Aceternity / Skiper / 21st.dev — animated React components (confirm React stack first)
5. Custom build from design system tokens

---

## COMPONENT LIBRARIES

| Library | URL | Stack | License note |
|---|---|---|---|
| Aceternity UI | https://ui.aceternity.com/components | React | Check per component — some MIT, some paid |
| Componentry | https://www.componentry.fun/docs | Any | — |
| Dot Matrix | https://dotmatrix.zzzzshawn.cloud/ | — | Community project |
| Skiper UI | https://skiper-ui.com/ | React | Check license before commercial use |
| Cult UI | https://www.cult-ui.com/ | React | — |
| StyleUI | https://www.styleui.dev/ | — | — |
| UIverse | https://uiverse.io/elements | Pure CSS/HTML | MIT |
| 21st.dev | https://21st.dev/community/components | React | Per component |
| Refero Design | https://styles.refero.design/ | Reference only | — |

**Always check bundlephobia.com + license before adding any npm dep.**
**No commercial-only libraries in commercial projects without explicit client approval.**

---

## VISUAL EFFECTS DECISION TREE

```
Gradient / background?    → fffuel.co or magicpattern.design (no dep)
Section divider?          → shapedivider.app (SVG, no dep)
Liquid / glass FX?        → liquid-glass-js (vanilla) or ShaderGradient (React only)
Animation (simple)?       → CSS transitions first (no dep)
Animation (complex)?      → motion library — check bundlephobia before installing
3D scene?                 → React Three Fiber — confirm React stack first
Logo animation?           → liquid-logo (github.com/paper-design/liquid-logo)
```

---

## VISUAL FX REPOS

| Effect | Repo | Stack req. |
|---|---|---|
| ShaderGradient | https://github.com/ruucm/shadergradient | React + Three.js |
| Liquid Logo | https://github.com/paper-design/liquid-logo | React |
| Liquid Glass JS | https://github.com/dashersw/liquid-glass-js | Vanilla |
| Motion | https://github.com/motiondivision/motion — https://motion.dev | React + Vanilla |

---

## 3D UI — React Three Fiber

**Repo:** https://github.com/pmndrs/react-three-fiber  
**Requires:** React. Confirm before scaffolding.  
**Pattern:** scaffold minimal scene first (camera + light + mesh) → get approval → expand.

```bash
npm install @react-three/fiber three
# Check bundle: https://bundlephobia.com/package/@react-three/fiber
```

---

## DESIGN UTILITIES

| Tool | URL | Use |
|---|---|---|
| Magic Pattern | https://www.magicpattern.design/ | CSS pattern generator |
| Shape Divider | https://www.shapedivider.app/ | SVG section dividers |
| fffuel | https://www.fffuel.co/ | SVG generators |
| UI Colors | http://uicolors.app/ | Tailwind color palettes |
| Bundlephobia | https://bundlephobia.com/ | Package size check (required) |
| DevDocs | https://devdocs.io/ | API docs |

---

## MCPMARKET — SKILLS LIBRARY REFERENCE
**Source:** https://mcpmarket.com/tools/skills/all (2,689 pages of skills)

A marketplace of Claude Code skills installable on-demand. Browse when a task requires a
specialized capability not already in this agent's stack.

**How to install any skill from MCPMarket:**
```bash
# Find the skill slug from the URL: mcpmarket.com/tools/skills/<slug>
# Then install via skills CLI:
npx skills add https://mcpmarket.com/tools/skills/<slug>
```

### Three.js / 3D Skills (confirmed, pre-vetted)

| Skill | URL | Best for |
|---|---|---|
| **Three.js Scene Builder** | https://mcpmarket.com/tools/skills/three-js-scene-builder-1 | Reference Frame Contract, GLTF loading, responsive camera, cross-device perf — start here for most 3D work |
| **Three.js 3D Development** | https://mcpmarket.com/tools/skills/three-js-3d-development-1 | PBR materials, GLSL shaders, FBX/GLTF asset pipeline, sophisticated lighting |
| **Three.js 3D Graphics (r128)** | https://mcpmarket.com/tools/skills/three-js-3d-graphics-visuals | r128-compatible, CDN-safe, raycasting, particle systems — use when targeting legacy environments |
| **Three.js 3D Graphics (r171+)** | https://mcpmarket.com/tools/skills/three-js-3d-graphics | Modern Three.js + WebGPU backend support — use when targeting modern browsers only |
| **React Three Fiber (R3F)** | https://mcpmarket.com/tools/skills/react-three-fiber-r3f-3d-development | R3F + Drei, useFrame, Suspense asset loading, OrbitControls — use in React projects |
| **React Three Fiber Specialist** | https://mcpmarket.com/tools/skills/react-three-fiber-specialist | R3F + Zustand state + Rapier physics — use for interactive 3D with physics or complex state |
| **3D Web Experience** | https://mcpmarket.com/tools/skills/3d-web-experience | Three.js + R3F + Spline + GSAP ScrollControls — full scroll-driven 3D site builds |
| **3D Visualization** | https://mcpmarket.com/tools/skills/3d-visualization-three-js | R3F data visualizations, interactive dashboards with 3D elements |
| **Three.js Game Development** | https://mcpmarket.com/tools/skills/three-js-game-development | Scene management, character controllers, physics, raycasting — browser game builds |

**Selection guide:**
- New project, greenfield, no framework constraint → **three-js-scene-builder-1** (best defaults, Reference Frame Contract prevents the most common coordinate bugs)
- React project → **react-three-fiber-r3f-3d-development**
- React + physics or complex interaction → **react-three-fiber-specialist**
- Scroll-driven 3D storytelling → **3d-web-experience**
- Legacy CDN / no bundler → **three-js-3d-graphics-visuals** (r128)
- Modern WebGPU features needed → **three-js-3d-graphics** (r171+)

**Agent rule:** Always check bundle size before installing any 3D skill.
Three.js core ≈ 600KB minified. Confirm with the human before adding to a performance-sensitive project.

---

## PENCIL → REACT / TAILWIND EXPORT (pencil-to-code skill)
**Skill:** `pencil-to-code` by phrazzld
**MCPMarket:** https://mcpmarket.com/tools/skills/pencil-to-code
**Source:** https://github.com/phrazzld/claude-config

### What it does
Converts finalized Pencil `.pen` design files into production-ready React components styled with Tailwind CSS. Unlike image-to-code tools, Pencil feeds the agent exact vector coordinates and token values via MCP — no guessing at spacing or color.

Does ONE thing well: export `.pen` designs to React + Tailwind. Not for iterative design exploration — for finalized frames ready to become code.

### Pencil.dev overview
Pencil (pencil.dev) is an AI-native design tool running inside VS Code/Cursor. It exposes designs to AI coding agents via MCP, giving agents exact coordinates, tokens, and component structure. Think Figma for Claude Code users — but wired directly into the terminal.

**Requires:** Pencil app running locally, Pencil MCP server active, Claude Code subscription.
Note: Pencil.dev is in early access and currently free — pricing may change.

### Install
```bash
npx playbooks add skill phrazzld/claude-config --skill pencil-to-code
```
Or via LobeHub slug: `phrazzld-agent-skills-pencil-to-code`

### MCP calls the skill makes
```
mcp__pencil__batch_get     — reads frame tree (readDepth, resolveInstances, resolveVariables)
mcp__pencil__get_variables — reads theme/design tokens
mcp__pencil__get_screenshot — visual validation against original
```

### Node mapping table
| `.pen` node type | React output |
|---|---|
| `frame` with layout | `<div className="flex ...">` |
| `frame` with children | component with children |
| `text` | `<p>`, `<h1-6>`, or `<span>` by hierarchy |
| `ref` (instance) | reusable React component |
| `rectangle` | `<div>` with fill |
| `ellipse` | `<div className="rounded-full">` |
| `image` | `<img>` or `fill: url()` |

### Layout token mapping (8-point grid)
| `.pen` property | Tailwind class |
|---|---|
| `layout:"vertical"` | `flex flex-col` |
| `layout:"horizontal"` | `flex flex-row` |
| `alignItems:"center"` | `items-center` |
| `gap:8` | `gap-2` |
| `gap:16` | `gap-4` |
| `gap:24` | `gap-6` |
| `width:"fill_container"` | `w-full` |

### Usage rules
- Only export finalized, approved frames — messy source files produce messy components
- Always read with `resolveVariables:true` so tokens map correctly to Tailwind theme
- Emit all colors/spacing/radius as Tailwind theme tokens, never hardcode (`bg-primary` not `bg-[#3b82f6]`)
- Name reusable instances in Pencil so the skill generates separate React components automatically
- Run screenshot comparison after export to catch visual drift

### Related skills
- `chiroro-jr/pencil-design` — similar but targets Next.js + Tailwind v4 + shadcn/ui
  ```bash
  npx skills add https://github.com/chiroro-jr/skills --skill pencil-design
  ```
- Pencil's own bundled skill: available at pencil.dev/downloads

---

## JACK ROBERTS TOOLCHAIN (power-design, Open Design, model routing)
**Channel:** https://www.youtube.com/@Itssssss_Jack
**GitHub:** https://github.com/ItsssssJack

### power-design skill
**Repo:** https://github.com/ItsssssJack/power-design
**License:** MIT

A Claude Code skill for slides and presentations that don't look like AI made them. Grounded in design research from Edward Tufte, Garr Reynolds, Nancy Duarte, Robin Williams (CRAP principles), Adam Wathan & Steve Schoger (Refactoring UI), Josef Müller-Brockmann, Matthew Butterick, Robert Bringhurst, Richard Mayer, NN/g, and WCAG 2.2.

Core mechanic: Brand DNA (colors, type, voice, components, source URL) × 20 codified design principles → AI output that looks intentional, not generic.

```bash
npx skills add https://github.com/ItsssssJack/power-design
```

**When to use:** Any time slides, pitch decks, or presentation-style output is needed and generic AI aesthetic would undermine trust.

### Open Design
**URL:** https://open-design.ai
Apache-2.0 open-source alternative to Claude Design/Artifacts. Local-first, BYOK (any model), supports 71+ brand design systems, no usage limits. Use when Claude Code Artifacts feel too constrained or when the project needs offline-capable design generation.

### Brand DNA methodology (Jack Roberts)
Codify a client/project's identity into a single `brand-style.md` before generating anything:
```
brand-style.md:
  colors:       [primary, secondary, neutral, accent hex values]
  typography:   [heading font, body font, scale]
  voice:        [3-5 adjectives describing tone]
  components:   [button style, card style, nav style]
  reference:    [URL of a site that embodies the aesthetic]
```
Run this file through the agent before any design or code generation. Pair it with `power-design` for zero-slop output.

### Anti-slop self-critique (5 dimensions)
Before shipping any AI-generated design artifact, run a self-critique across:
1. **Philosophy** — does it reflect the brand's stated values?
2. **Hierarchy** — is the most important thing visually dominant?
3. **Execution** — are spacing, alignment, and typography consistent?
4. **Specificity** — does it look like it was made for this brand, or any brand?
5. **Restraint** — what can be removed without losing meaning?

If any dimension scores low, iterate before presenting to the human.

### Cost-aware model routing (Jack Roberts)
Not all tasks need the most capable model. Route by task type:
| Task type | Recommended model |
|---|---|
| UI design, visual taste, brand decisions | Claude (Sonnet/Opus) |
| Algorithmic work, data processing, backend logic | DeepSeek or cheaper model |
| Refactoring known patterns | Claude Haiku or cheaper |
| Novel architecture decisions | Claude Opus |

Switching taste-insensitive tasks to cheaper models can reduce costs by up to ~100× with no quality loss on those tasks. Always use Claude for anything a user will see.

### Rapid AI website build pattern (Jack Roberts)
For fast client MVP builds:
1. Extract brand DNA into `brand-style.md`
2. Generate hero imagery at ≥2K resolution, 4 iterations per concept, clean white background; reference image 1 when generating image 2 for visual consistency
3. Create ~7s hero video loop from AI images (transition effect)
4. Switch Claude Code to auto-edit mode (skip confirmation prompts) for first-pass one-shot build
5. Build: hero + scroll animation + brand colors + CTAs + multi-page structure in one pass
6. Refine by referencing HTML structure of admired sites in the client's industry
7. Deploy: Vercel + Supabase + Stripe (Jack's standard stack)

---

## MOKKAPP — UI/UX DESIGN CHANNEL REFERENCE
**Channel:** https://www.youtube.com/@mokkapp
**Profile:** UI/UX designer & instructor, 7+ years experience. Topics: UI/UX design, web design, product design, business strategies, AI design tools, front-end fundamentals. Aimed at aspiring web designers, UI designers, and front-end developers.

### What to reference from this channel
- Weekly tutorials on practical UI/UX patterns using current tools (Figma, AI tools)
- Design principles applied to real projects
- Tool comparisons and AI-assisted design workflows for working designers
- Product design + business strategy crossover content

**Use when:** Looking for practical design tutorial references, tool walkthroughs, or keeping up with current UI patterns. Not a framework source — a practitioner's how-to channel.

---

## NATE HERK — AI AUTOMATION + n8n AGENT WORKFLOWS
**Channel:** https://www.youtube.com/@nateherk — 750K+ subscribers
**Profile:** Founder of AI Automation Society. Specialist in n8n workflows, AI agents, multi-agent systems. Focus: practical no-code AI automation for businesses and creators.

### Relevant patterns for the designer agent

**Media agent pipeline (n8n)**
Nate's documented workflow for generating, editing, and distributing media assets without manual steps:
```
Input (prompt/brief) → AI image generation → AI image editing → AI video generation
→ caption/voiceover → publish to platform
```
Build in n8n as a connected workflow; each step is a node with an AI model call.

**Sub-agent + orchestrator pattern**
When a task has multiple specialized phases, build:
- 1 orchestrator agent that receives the task and delegates
- N sub-agents, each specialized for one phase
- A tracking/logging node so the human can audit what each sub-agent did

Useful for design workflows: one sub-agent generates copy, one generates layout options, one critiques and scores, orchestrator selects the best output.

**Claude Code skills (Nate Herk)**
Nate published a tutorial specifically on Claude Code skills (SKILL.md files), noting: "I've genuinely never been as productive as I am right now, and it all comes down to Claude skills." His approach: build skills with persistent memory, self-improvement loops, and real data connectors.

**Agent use:** When the human needs to automate a repeatable multi-step design or content workflow (generate assets → review → publish), n8n with a sub-agent orchestration pattern is the reference architecture.

---

## @diazcueto — UNVERIFIED
**Status:** Could not confirm channel identity, topic, or content through web search. No results found for `youtube.com/@diazcueto` beyond the handle itself.
**Action:** Skipped — will revisit if the human provides a description or a video link.

---

## @AIOriented — UNVERIFIED
**Status:** Could not confirm channel identity or content. Search for `@AIOriented` returned no matching results distinct from generic AI YouTube lists.
**Action:** Skipped — will revisit if the human provides a description or a video link.

---

## BRENDAN O'CONNELL — WORDPRESS + BRICKS BUILDER + AI AUTOMATION
**Channel:** https://www.youtube.com/@BrendanOConnellWP
**Profile:** WordPress educator and developer. Specialist in Bricks Builder, ACSS (Automatic CSS), advanced page builder workflows, and AI-powered website automation. Teaches practical CSS-framework-driven WordPress development.

### Bricks Builder stack (Brendan's recommended setup)
Bricks Builder + ACSS (Automatic CSS) + Frames = his go-to starter kit:
- **Bricks Builder** — WordPress page builder with CSS Grid/Flexbox support, design system variables
- **ACSS (Automatic CSS)** — CSS custom properties framework; global variables accessible via right-click, enforces spacing/typography consistency across the site
- **Frames** — pre-built accessible, scalable blocks/sections for Bricks; claims 50%+ build speed increase
- **Bricksforge** — extends Bricks with dynamic data, external API connections, animation support
- **Motion.Page / GSAP** — animation layer on top of Bricks sites (see GSAP note in COMPONENTS.md)
- **Advanced Themer** — accessibility checker, grid guides, X-mode tools inside Bricks

### Key workflow patterns
- **CSS Variables with HSL** — mini design token system using HSL color functions for dynamic theming; change one variable to retheme the entire site
- **Client-simplified editing** — configure Bricks backend so clients can edit content without breaking the design
- **AI-powered styling** — use OpenAI API via Advanced Themer to generate CSS styling suggestions directly inside Bricks
- **External API via Bricksforge** — connect Airtable, iTunes, or any REST endpoint to Bricks Query Loop for dynamic content without custom PHP

### When to use WordPress + Bricks vs other stacks
| Situation | Use |
|---|---|
| Client site, non-technical editor | WordPress + Bricks + ACSS |
| Marketing site, designer-operated | Framer |
| React app or complex logic | React + Tailwind |
| Rapid MVP, no CMS needed | Vanilla HTML + CSS |

WordPress with Bricks is the right choice when: client needs to edit content, long-term budget is limited, the site needs WooCommerce, or the client already has a WordPress ecosystem.

### Agent use
Reference Brendan's stack when the human mentions WordPress, Bricks Builder, or needs a no-code/low-code site for a client. ACSS is a CSS framework specifically designed for WordPress design systems — map its token architecture when translating a Figma design system to WordPress.

---

## HOW I AI (Claire Vo) — PRACTICAL AI WORKFLOW REFERENCE
**Channel:** https://www.youtube.com/@howiaipodcast
**Profile:** Claire Vo, founder of ChatPRD, 3× Chief Product & Technology Officer. "How I AI" = 30-minute episodes with live screen sharing showing exactly how working professionals use AI in their jobs. Format: practical, screen-share-first, no fluff.

### Claire Vo's ChatPRD — AI-assisted PRD writing
ChatPRD is a tool (and workflow) for writing Product Requirement Documents with AI assistance. Relevant patterns:
- Start with user problem statement, not feature spec
- Use AI to surface edge cases you'd otherwise miss
- AI generates the PRD structure; PM refines the substance
- Output: structured PRD with context, user stories, acceptance criteria, open questions

### How professionals actually use AI (from 30+ How I AI episodes)
- **Prototyping:** functional HTML prototypes from prompts (v0, Lovable, Replit) for quick user validation — faster than Figma for certain questions
- **Research synthesis:** feed interview notes to AI → extract themes, key quotes, recommendations
- **Writing acceleration:** draft first, edit to your voice — never let AI write final copy from scratch
- **Data analysis:** natural language queries on spreadsheets / analytics
- **Meeting prep:** AI briefing docs before stakeholder meetings

### Agent rule
When helping a PM or product designer with documentation (PRD, user stories, briefs), use the ChatPRD pattern: problem statement first, AI-assisted structure, human-refined substance. Never generate a PRD without a clear problem statement.
