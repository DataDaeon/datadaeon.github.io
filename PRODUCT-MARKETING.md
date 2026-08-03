# Module: PRODUCT-MARKETING
> Load when: designing landing pages, product flows, onboarding, or working with metrics/OKRs.

---

## CRO — BUILD THE PAGE AROUND OBJECTIONS

Before laying out any landing page or conversion flow, run this first:

```
"Using cro-methodology skill: what are the top 5 objections a visitor has on [page description]?
 Give me an objection/counter-objection table."
```

Install: `npx skills add wondelai/skills/cro-methodology`

Then structure the page to answer objections in priority order — not in the order you want to tell your story.

---

## STORYBRAND HIERARCHY (for hero sections and landing pages)

```
1. Character (customer) → who is the hero?
2. Problem (external + internal + philosophical)
3. Guide (your brand) → empathy + authority
4. Plan → 3 clear steps
5. Call to action (direct + transitional)
6. Success state → what life looks like after
7. Failure state → what happens if they don't act
```

Install: `npx skills add wondelai/skills/storybrand-messaging`

Hero section structure: Character's problem → your solution → clear CTA. Brand is the guide, never the hero.

---

## OKRS → DESIGN DECISIONS

Before designing a feature, ask: "What metric does this move?"

**OKR Cascade Generator:**
```bash
git clone https://github.com/alirezarezvani/claude-skills.git
python product-team/product-strategist/scripts/okr_cascade_generator.py [growth|retention|revenue|innovation]
```

**RICE Prioritizer (which feature to design first):**
```bash
python product-team/product-manager-toolkit/scripts/rice_prioritizer.py features.csv
```

---

## DESIGN → METRIC MAPPING

| What you're designing | Metric it moves | Framework to use |
|---|---|---|
| Onboarding flow | Activation rate, time-to-value | `improve-retention` (B=MAP) |
| Core loop / daily action | DAU/MAU, habit formation | `hooked-ux` (Hook model) |
| Landing page | Conversion rate, bounce rate | `cro-methodology` |
| Hero section copy | Bounce rate, scroll depth | `storybrand-messaging` |
| Share mechanics | Viral coefficient, referrals | `contagious` (STEPPS) |
| Pricing page | Conversion, ARPU | `cro-methodology` + `hundred-million-offers` |
| Feature adoption | Feature adoption rate | `continuous-discovery` (OST) |

If the metric isn't clear → run `continuous-discovery` + `jobs-to-be-done` before designing.

---

## SPEC-DRIVEN DEVELOPMENT

For features involving multiple AI tools or team handoffs:

```bash
npx skills add https://github.com/FredAntB/Spec-Driven-Development
```

Generates: `requirements.md`, `design.md`, `tasks.md` — synced across Claude Code, Cursor, Copilot.

**Sequence with GSD:**
```
/gsd-new-project       → project-level scope
/spec-driven-dev       → feature-level spec files
/gsd-discuss-phase 1   → implementation decisions
```

---

## WONDELAI MARKETING SKILLS

```bash
/plugin install marketing-cro@wondelai-skills
# Includes: cro-methodology, storybrand-messaging, scorecard-marketing, contagious, one-page-marketing
```

Individual installs:
```bash
npx skills add wondelai/skills/cro-methodology
npx skills add wondelai/skills/storybrand-messaging
npx skills add wondelai/skills/contagious
```
