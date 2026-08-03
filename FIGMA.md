# Module: FIGMA
> Load when: Figma URL given, token export needed, Code Connect setup, or design handoff.

---

## MCP SETUP (once per machine)

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
# Or via plugin:
/plugin install figma@claude-plugins-official
# Authenticate via browser when prompted.
```

---

## FIGMA → CODE (read direction — confirmed working)

```
Given a Figma URL:
1. Extract design context via MCP (layers, tokens, spacing, Auto Layout)
2. Check if Figma Variables exist → offer token pipeline (see DESIGN-SYSTEM module)
3. Generate code matching Figma naming conventions (see below)
4. Do NOT promise write-back without confirming with human first
```

Prompt pattern:
```
"Implement this Figma frame as HTML/CSS (or React component).
 URL: https://www.figma.com/design/xxxxx/MyProject?node-id=123-456"
```

---

## CODE → FIGMA (write direction — unreliable as of 2026-06)

`generate_figma_design` is NOT available on remote MCP for most users.

Options:
- Manual: screenshot → paste into Figma
- HTML to Figma plugin (imports live pages)
- Figma Desktop local MCP (inconsistent, requires app open)

**Always disclose this limitation before a client assumes full bidirectional sync.**

---

## CODE CONNECT (design system ↔ codebase)

When both a Figma component library and a code component library exist:
```bash
npm install @figma/code-connect
npx figma connect publish   # maps components → shows real code in Dev Mode
```

Known issue: `get_code_connect_map` via MCP can return empty even with connections set up.
Workaround: use `npx figma connect` CLI directly, not the MCP tool.

---

## NAMING CONVENTION (critical for handoff quality)

| Figma | Code | Example |
|---|---|---|
| Component name | Component name | `Button` → `<Button>` |
| Variant `size=Large` | Prop `size="lg"` | |
| Variant `variant=Primary` | Prop `variant="primary"` | |
| Variable `Colors/Primary/500` | CSS var `--color-primary-500` | |
| Auto Layout gap | CSS `gap` | |
| Auto Layout padding | CSS `padding` | |

Enforce from day one. `Button / Large / Blue` is wrong. `Button` with `size=lg, variant=primary` is right.

---

## DESIGN TOKEN TOOLS

| Tool | URL | Use |
|---|---|---|
| Style Dictionary | https://styledictionary.com | W3C DTCG JSON → CSS/TS/SCSS |
| Tokens Studio | https://tokens.studio | GitHub sync + CI/CD |
| Design Token Exporter | https://www.figma.com/community/plugin/1590704268871516927 | Export DTCG JSON from Figma |
| DTCG Token Manager | https://www.figma.com/community/plugin/1602387835479491374 | Bidirectional import/export |
| Styleframe | https://www.styleframe.dev/figma | TypeScript-first, code as source of truth |
| design-tokens plugin | https://github.com/gregorymm/design-tokens | Claude Code plugin with write-back |
