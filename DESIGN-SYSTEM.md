# Module: DESIGN-SYSTEM
> Load when: starting a new project, generating tokens, or reviewing design decisions.

---

## PRE-FLIGHT (run before this module)

```bash
python3 --version   # must be 3.8+
# If missing: brew install python3 (macOS) | sudo apt install python3 (Ubuntu)
```

---

## GENERATION SEQUENCE

```bash
# Step 1: generate + persist
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "[product type]" \
  --design-system --persist -p "[ProjectName]"

# Step 2: outputs to:
# design-system/MASTER.md       ← global source of truth
# design-system/pages/*.md      ← page-specific overrides only

# Step 3: present to human, await approval before writing any component
```

If UI/UX Pro Max is not installed:
```bash
npm install -g uipro-cli && uipro init --ai claude --global
```

---

## 3-LAYER TOKEN ARCHITECTURE

```
Primitive   → raw values:     --color-blue-500: #2563eb
Semantic    → intent:         --color-primary: var(--color-blue-500)
Component   → per-component:  --button-bg: var(--color-primary)
```

Never hardcode hex in components. Always reference semantic tokens.

---

## DESIGN SYSTEM GENERATOR (domain-specific rules — UI/UX Pro Max)

```bash
# Domain search
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elegant serif" --domain typography

# Stack-specific guidelines
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "form validation" --stack react
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "responsive layout" --stack html-tailwind

# Retrieve page-specific overrides
# Check: design-system/pages/[page-name].md → overrides MASTER.md for that page
```

---

## FIGMA TOKEN PIPELINE (when Figma Variables exist)

```
Figma Variables
     ↓ export (W3C DTCG JSON via Design Token Exporter plugin)
  tokens.json
     ↓ transform
  Style Dictionary  →  CSS custom properties + TypeScript types + Tailwind config
```

Tools:
- Style Dictionary: https://styledictionary.com
- Tokens Studio (GitHub CI/CD sync): https://tokens.studio
- Design Token Exporter (Figma plugin): https://www.figma.com/community/plugin/1590704268871516927
- design-tokens Claude plugin: https://github.com/gregorymm/design-tokens

---

## BRIEF QUESTIONS (new project only — ask before generating)

1. Product type / industry? (determines 161-rule matching in UI/UX Pro Max)
2. Stack? (default: Vanilla HTML/CSS — confirm before any framework)
3. Existing brand guide or design tokens?
4. Target devices? (default: mobile-first, 375→1440px)
5. Dark mode required?
