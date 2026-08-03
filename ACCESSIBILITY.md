# Module: ACCESSIBILITY
> Load when: running an audit, shipping a phase, or any accessibility question.

---

## WCAG AUDIT SKILL (run before every ship)

**Install:** Download `wcag-audit.plugin` from https://github.com/CFLW-AI/wcag-audit-claude-skill

**For Claude Code terminal (no Desktop GUI):**
```bash
# Manual install path
cp -r path/to/wcag-audit-claude-skill/plugin/.claude/skills/wcag-audit ~/.claude/skills/
```

**Trigger phrases:**
- "Is this page WCAG compliant?"
- "Run an accessibility audit on [file or URL]"
- "Check the contrast ratios on this page"
- "Does this HTML meet WCAG 2.2?"

**Coverage:** 100% true positive rate across all 28 WCAG 2.2 AA criteria.
**Limitation:** Static analysis only. Combine with manual screen reader testing for full compliance.

---

## WCAG AA REQUIREMENTS (always enforce)

- Contrast: text ≥ 4.5:1, large text ≥ 3:1, UI components ≥ 3:1
- Focus states: visible on all interactive elements
- Tab order: logical, matches visual order
- Touch targets: ≥ 44×44px
- No color-only information encoding
- `prefers-reduced-motion` honored
- Semantic HTML: `<button>` not `<div onclick>`, proper heading hierarchy
- Images: meaningful `alt` text, decorative images `alt=""`
- Forms: every input has a `<label>`, error messages are explicit
- `lang` attribute on `<html>`

---

## ACCESSIBILITY RULE HIERARCHY

```
Semantic HTML        ← always first
ARIA attributes      ← only when semantic HTML isn't enough
role=""              ← last resort
```

Never use ARIA to fix broken HTML. Fix the HTML.

---

## PRE-DELIVERY CHECKLIST (full)

- [ ] 375 / 768 / 1024 / 1440px tested
- [ ] Contrast ≥ 4.5:1 text, ≥ 3:1 large text
- [ ] Focus states visible, logical tab order
- [ ] `prefers-reduced-motion` honored
- [ ] No emoji as icons (SVG: Heroicons / Lucide)
- [ ] `cursor: pointer` on all interactive elements
- [ ] Hover transitions 150–300ms
- [ ] Semantic HTML (headings, landmarks, `<button>` not `<div>`)
- [ ] Images: `width`/`height` or `aspect-ratio` set (no CLS)
- [ ] `font-display: swap`
- [ ] No unused CSS/JS
- [ ] `<title>` + meta description set
- [ ] OG tags present
- [ ] Component licenses: no commercial-only libs in commercial projects
- [ ] Visual regression: screenshot before/after for changes to existing components
- [ ] WCAG Audit Skill run — HTML report generated
- [ ] Manual screen reader spot-check (VoiceOver/NVDA on at least one flow)
