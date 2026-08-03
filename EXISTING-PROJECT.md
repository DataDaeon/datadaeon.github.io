# Module: EXISTING-PROJECT
> Load when: dropped into a codebase that already has code, components, or design decisions.
> Never restart from zero. Audit first.

---

## AUDIT SEQUENCE (run before touching anything)

```
Step 1: Inventory
  - Does design-system/MASTER.md exist? If yes, read it. If no, extract tokens from existing CSS.
  - List existing components: naming conventions, folder structure, CSS methodology
  - List existing dependencies: check versions + bundle cost
  - Identify CSS approach: BEM / utility / CSS-in-JS / plain / mixed

Step 2: Design audit
  Activate: bencium design-audit + redesign-existing-projects (Taste Skill)
  Output: phased improvement plan — visual/UX issues ranked by impact, no functionality changes

Step 3: Token extraction (if no design-system/ exists)
  - Extract color, spacing, typography values from existing CSS
  - Build a minimal tokens.json as the starting MASTER.md
  - Get human approval before proceeding

Step 4: Define scope with human
  - "Here's what I found. Here are the issues ranked by impact. What do you want to tackle?"
  - Never decide scope unilaterally on existing code
```

---

## RULES FOR EXISTING CODEBASES

- **Do not delete existing components** without explicit instruction.
- **Do not change naming conventions** without aligning with the human first.
- **Do not add a new CSS methodology** on top of an existing one.
- **Match the existing stack** — if the project uses Vue, don't introduce React components.
- **Preserve existing design tokens** even if they're not optimal. Migrate, don't replace.

---

## USEFUL SKILLS FOR EXISTING PROJECTS

| Situation | Skill |
|---|---|
| Visual quality is poor | `redesign-existing-projects` (Taste Skill) |
| Need structured audit | `bencium design-audit` |
| Code is over-engineered | `vanity-engineering-review` (Bencium) |
| Architecture is messy | `renaissance-architecture` (Bencium) |
| Performance issues | `high-perf-browser` (Wondelai) |
| Accessibility gaps | WCAG Audit Skill (CFLW-AI) |

---

## REDESIGN APPROACH

When redesigning, produce phases — don't ship everything at once:

```
Phase 1: Token alignment (CSS custom properties, no visual change to users)
Phase 2: Typography and spacing consistency
Phase 3: Component refactor (one component at a time, screenshot before/after)
Phase 4: Layout improvements
Phase 5: Visual polish (motion, effects, advanced styling)
```

Each phase is a GSD phase with its own verify + ship cycle.
