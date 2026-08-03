# Module: UX-FRAMEWORKS
> Load when: making UX decisions, auditing a design, defending design choices, measuring impact,
> researching users, or working on legacy systems and handoffs.

---

## 1. LAWS OF UX — decision filters for every design choice
**Source:** https://lawsofux.com (Jon Yablonski, 29 laws)

Apply these when justifying or questioning any design decision. Most useful ones for frontend/product:

| Law | Rule | Apply when |
|---|---|---|
| **Fitts's Law** | Time to hit a target ∝ distance / size | Sizing CTAs, touch targets, nav items |
| **Hick's Law** | Decision time ↑ with number of choices | Menus, option lists, pricing tiers |
| **Miller's Law** | Working memory holds 7±2 items | Navigation items, form fields per step |
| **Jakob's Law** | Users expect your product to work like others they know | Deviating from conventions — justify it |
| **Peak-End Rule** | Experiences judged by peak moment + ending | Onboarding last step, success states, error recovery |
| **Zeigarnik Effect** | Incomplete tasks stay in memory | Progress indicators, onboarding checklists |
| **Von Restorff Effect** | The different item gets remembered | Primary CTA differentiation |
| **Aesthetic-Usability Effect** | Beautiful = perceived as more usable | Why design taste matters for trust |
| **Cognitive Load** | Reduce mental effort to understand/interact | Form complexity, information density |
| **Tesler's Law** | Complexity can't be eliminated, only moved | Simplifying UI = moving complexity to system |
| **Goal-Gradient Effect** | Effort increases as goal approaches | Progress bars, step counters |
| **Serial Position Effect** | First and last items best remembered | Navigation order, list ordering |
| **Doherty Threshold** | Productivity soars below 400ms response | Performance targets for interactions |
| **Occam's Razor** | Simplest solution that works | Evaluating design alternatives |
| **Paradox of Active User** | Users never read docs, start immediately | Onboarding without manuals |
| **Law of Proximity** | Near objects = grouped | Spacing to show relationships |
| **Law of Common Region** | Shared boundary = grouped | Card layouts, form sections |
| **Chunking** | Group info into meaningful wholes | IA, form design, content structure |

> **Agent rule:** When a design decision is questioned, cite the relevant law with evidence. When designing a component, run a quick scan: which laws apply here?

---

## 2. GARRETT'S 5 ELEMENTS OF UX
**Source:** Jesse James Garrett / IxDF — The iceberg model

Work bottom-up (strategy first, surface last):

```
SURFACE    → Visual Design (what users see)
SKELETON   → Information + Interface + Navigation Design
STRUCTURE  → Interaction Design + Information Architecture
SCOPE      → Features + Content Requirements
STRATEGY   → User Needs + Product Objectives
```

**Agent use:** When scoping a project, verify decisions at each layer before moving up. A surface decision (color) that conflicts with a strategy decision (trust-building) is a design debt, not a style choice.

---

## 3. SEVEN LAYERS OF PRODUCT DESIGN
**Source:** Jamie Mill (based on Garrett)

Two spaces, seven layers:

```
SOLUTION SPACE:
  Surface                  → visual design, copy, microinteractions, animation
  Interaction structure    → touchpoints, content flow, affordances
  Conceptual model         → objects, relationships, terminology, IA
  Product & service strategy → which user needs + business outcomes

PROBLEM SPACE:
  User needs               → what users are trying to achieve and why
  The domain               → concepts, terminology, mental models in the real world
  Observed behaviour       → user research and analytics

REALITY                    → the real world: complex, contradictory, unknowable
```

**Agent rule:** Never design at the Surface layer without having defined the Problem Space layers first. A beautiful UI solving the wrong problem is waste.

---

## 4. UX STRATEGY PYRAMID
**Source:** NN/g

```
VISION  → improved future state of the UX (why + where it's going)
GOALS   → how we'll know we're making progress (measurable)
PLAN    → the path to get there (roadmap, sequencing)
─────────────────────────────────────────────
EXECUTION → tasks, features, solutions (not strategy)
```

**Agent rule:** Before designing, confirm that the project has a Vision and Goals defined. If not, surface this to the human — building without strategy = feature factory.

---

## 5. UX MATURITY MODEL
**Source:** NN/g (6 stages)

| Stage | Name | Characteristics |
|---|---|---|
| 1 | Absent | UX ignored, nonexistent |
| 2 | Limited | Uneven, haphazard, aspirational |
| 3 | Emergent | Functional but inconsistent, inefficient |
| 4 | Structured | Partly systematic, variably effective |
| 5 | Integrated | Comprehensive, pervasive, universal |
| 6 | User-driven | Beloved, reproducible, habitual |

**Agent use:** Calibrate recommendations to the team's actual maturity level. A Stage 2 team doesn't need Continuous Discovery — it needs consistent research practices first. Don't over-engineer the process for the organization.

---

## 6. DESIGN IMPACT MODEL
**Source:** Bryan Zmijewski

```
USER NEEDS ←──────────────────────────────→ BUSINESS GOALS

[Design Research] → credibility
  [Design Intent] → usefulness
    [Design Outcomes] → desirability
      [Design Impact] → viability
```

**Agent use:** Every design decision should trace back to this axis. If a decision increases desirability but destroys viability — it's not a good design decision, it's an indulgence.

---

## 7. ANATOMY OF A UX METRIC
**Source:** Bryan Zmijewski

Every UX metric has 4 components:

```
ATTRIBUTE      → what UX quality are you measuring?
               (characteristic of user's interaction with the design)

MEASUREMENT TYPE → what data are you collecting?
  • Behavioral  (what users DO — clicks, task completion, time on task)
  • Attitudinal (what users FEEL/THINK — satisfaction, confidence)
  • Performance (how well users ACCOMPLISH goals — error rate, success rate)

DATA COLLECTION → where does data come from?
  • Surveys (Likert, NPS, SUS)
  • Usability tests (moderated/unmoderated)
  • Analytics (clicks, bounce, funnels)
  • A/B tests / experiments
  • Session replays / heatmaps
  • In-product feedback tools

BENCHMARK      → what does the number mean?
  • Target score (e.g. 80% task completion)
  • Baseline or historical comparison
  • Industry benchmark
  • Qualitative explanation (why users struggled or succeeded)
```

**Agent rule:** Before proposing a metric, verify it has all 4 components. A metric without a benchmark is decoration. A metric without a measurement type can't be collected.

---

## 8. PRODUCT METRICS — COMPLETE AARRR + UX

**Acquisition:** Bounce Rate, Conversion Rate, Landing Page CVR, CAC, Channel Effectiveness, Traffic Source Distribution

**Activation:** Time to Value (TTV), Onboarding Completion Rate, User Activation Rate, Trial-to-Paid CVR, First-time User CVR

**Engagement:** DAU, MAU, Stickiness (DAU/MAU), Session Length, Session Frequency, Feature Usage, Customer Effort Score (CES), Task Success Rate, User Feedback Score

**Retention:** Churn Rate, User Retention Rate, User Renewal Rate, Customer Lifetime, Customer Health Score, Product Adoption Rate

**Revenue:** ARPA, CLV/LTV, Customer Profitability, MRR, Expansion Revenue, Revenue Churn, ACV

**Referral:** Virality Coefficient, Customer Referral Rate, Referral Conversion Rate, NPS

**Key distinctions:**
- CES (Customer Effort Score) = ease of interaction. Lower = more user-friendly.
- NPS = attitude/sentiment, NOT actual behavior. Don't treat it as behavioral data.
- Task Success Rate = usability signal. Direct measure of design quality.
- Stickiness = DAU/MAU. Habit formation signal.

---

## 9. RESOLVING CONFLICTING UX RESEARCH
**Source:** Raschin Fatemi

Map data sources on 2 axes:

```
          BEHAVIORAL (what users DO)
               │
  WHY ─────────┼───────── WHAT
               │
          ATTITUDINAL (what users FEEL/THINK)
```

| Source | Axis |
|---|---|
| Session recording | Behavioral + What |
| Analytics | Behavioral + What |
| 1:1 Interviews | Behavioral + Why |
| Support data | Center |
| Survey data | Attitudinal + What |
| Internal feedback | Attitudinal + Why |

**Signals from sources:**
Session recording → navigation patterns | Survey → perceived ease of use | 1:1 → usability | Support → frustrations | Analytics → KPI | Internal → validation

**Resolution rule:** Conflicting data = sources measuring different things, not the truth being ambiguous. Map where each source sits on the matrix, then triangulate. Behavioral + attitudinal + why = insight.

---

## 10. JOURNEY MAPPING
**Source:** Krisztina Szerovay / NN/g

**Definition:** Chronological visualization of a user's experience with a product/service to achieve a goal, from the user's perspective.

**Core elements (not exhaustive — add/remove per goal):**
1. Timeline
2. Phases (stages of the experience)
3. Who (persona — can be comparative)
4. Scenario
5. Steps/interactions
6. Channels (web, app, email, in-person)
7. Thoughts & quotes from research
8. Emotional experience (satisfaction curve)
9. Dramatic arc (engagement level)
10. Stakeholders/ownership
11. Insights: painpoints, opportunities, risks

**Related artifacts:**
- Experience Map → broader context, business/product agnostic
- Service Blueprint → includes frontstage + backstage processes, roles, support

**When to use:** Understanding gaps and opportunities, identifying painpoints, building shared understanding across PM + Design + Dev + Business.

**Agent rule:** A journey map without research data is a hypothesis map. Label it accordingly.

---

## 11. STAKEHOLDER REVIEW FRAMEWORK
**Source:** Pavel Samsonov / industry practice

3 types of review, each with a specific purpose:

| Type | Phase | Purpose | Outcome |
|---|---|---|---|
| Alignment | Problem Definition | Review PRD + concept sketches | Is this worth solving? |
| Evaluation | Iteration | Review 2-3 design proposals | Directional feedback, team knows how to proceed |
| Signoff | Solution | Review recommended solution + priorities | Approval → eng handoff OR blocking feedback |

**Review structure per phase:**
```
Definition & Discovery: Kickoff → UX Homework → Divergent Concepts
Iteration & Solution:   Detailed UX/UI → Hi-Fi Refinement
Build & QA:            Design Handoff → Design QA
```

**Agent rule:** When presenting design to stakeholders, be explicit about which type of review is happening. An Alignment review asked for Signoff = wrong expectations = endless revision cycles.

---

## 12. HOW TO DEFEND DESIGN (Samsonov Model)

4 modes of design defense, from inner to outer:

```
EXPERTISE   → Design + Evaluate + Refine top solutions
             (use your craft knowledge)

CRITIQUE    → Frame goal → Align on user benefits →
              Present solution candidates → Synthesis
             (structured critique protocol)

EXPERIMENT  → Frame hypothesis → Develop research objectives →
              Conduct experiment → Determine possible levers
             (data-backed decisions)

POSITION    → Refine leading indicators → Review impact →
              Identify input metrics
             (business positioning)
```

**Agent rule:** Match your defense mode to your audience. A developer asks "why this color?" → Expertise. A PM asks "will this convert?" → Experiment. A stakeholder asks "what's the impact?" → Position.

---

## 13. CROSS-CULTURAL UX
**Source:** Reading Graphics / Erin Meyer's Culture Map

8 dimensions where cultures differ (and therefore where design assumptions fail):

| Dimension | Low end | High end |
|---|---|---|
| Communicating | Low-context (explicit) | High-context (nuanced, implicit) |
| Evaluating | Direct negative feedback | Indirect negative feedback |
| Persuading | Principles-first | Application-first |
| Leading | Egalitarian | Hierarchical |
| Deciding | Consensual | Top-down |
| Trusting | Task-based | Relationship-based |
| Disagreeing | Confrontational | Avoids confrontation |
| Scheduling | Linear time | Flexible time |

**Design implications:**
- High-context cultures (Japan, China, Korea) → dense information, implicit cues, indirect error messages
- Low-context (US, Germany, Netherlands) → explicit labels, direct feedback, minimal assumptions
- Hierarchical cultures → different IA for roles/permissions visibility
- Relationship-based → onboarding that builds trust before asking for data

**i18n is not l10n.** Translating text is internationalization. Adapting UX patterns for cultural mental models is localization. Always ask: what culture is the primary user?

---

## 14. UX DISCIPLINES WHEEL
**Source:** industry model

8 disciplines that make up the UX field:

| Code | Discipline | Focus |
|---|---|---|
| PS | Product Strategy | Direction, vision, roadmap |
| CX | Customer Experience | End-to-end service design |
| CS | Content Strategy | Information, voice, tone |
| IA | Information Architecture | Structure, taxonomy, navigation |
| VD | Visual Design | Aesthetics, brand, UI |
| IXD | Interaction Design | Behaviors, micro, animation |
| QLR | Qualitative Research | Interviews, usability, ethnography |
| QNR | Quantitative Research | Analytics, surveys, A/B testing |

**Role profiles (which disciplines they emphasize):**
- Product Designer: strong in VD + IXD + some QLR, weak in PS + CX
- Service Designer: strong in CX + IA + QLR, moderate in CS
- UI/UX Designer: strong in VD + IXD + IA, weaker in research + strategy
- UX Strategist: strong in PS + CX + QLR, moderate in IA

**Agent self-assessment:** This agent is strongest in VD + IXD + IA. It needs human input for QLR (real user research) and QNR (actual analytics data). It can reason about PS and CX but cannot replace strategic decisions.

---

## 15. LEGACY UX & MIGRATION STRATEGY
**Sources:**
- Designing with Legacy: https://medium.com/enterprise-ux/designing-with-legacy-d0e4bef0d9ea
- UX Migration Strategy: https://blog.scottlogic.com/2021/07/16/UX-Migration-Strategy.html
- UX for Legacy Systems: https://www.linkedin.com/pulse/how-improve-ux-legacy-systems-vitaly-friedman-wux5e/

**Core principles:**

- **Users have deep muscle memory.** Changing established patterns = productivity cost. Quantify it before changing.
- **The strangler fig pattern:** Incrementally replace legacy components without a big-bang rewrite. New components grow around the old ones.
- **Document before you change.** Audit current behavior — even if it seems wrong — because users may depend on undocumented edge cases.
- **Migration ≠ redesign.** A migration moves users to a new system with minimal disruption. A redesign improves UX. Don't try to do both simultaneously.
- **Dual-run periods:** Let users work in both old and new systems before hard cutover. Reduces resistance, surfaces missing features.
- **Cognitive load in legacy contexts:** Enterprise users switch between legacy and modern UIs constantly. Inconsistency between surfaces is a UX problem, not just an aesthetic one.

**When the agent encounters legacy code (see also `EXISTING-PROJECT.md`):**
1. Don't modernize UI patterns users depend on without understanding the workflow first
2. Identify which patterns are legacy-imposed (bad) vs user-learned (risky to change)
3. Propose phased migration over parallel replacement

---

## 16. DESIGN HANDOFF
**Source:** IxDF — https://ixdf.org/literature/article/how-to-ensure-a-smooth-design-handoff

**Smooth handoff requires:**
- Design specs are complete: spacing, colors (tokens), typography, states, interactions, edge cases
- Component naming matches code naming (see `modules/FIGMA.md`)
- All states documented: default, hover, focus, active, disabled, error, empty, loading
- Responsive behavior specified for each breakpoint
- Motion specs: timing, easing, what triggers the animation
- Accessibility annotations: ARIA labels, focus order, screen reader behavior

**Common handoff failures:**
- Missing states (empty state, error state designed but not handed off)
- Inconsistent token usage (hardcoded hex instead of token references)
- No behavior spec for interactive components
- Design and code component names diverged (see Figma naming convention in `modules/FIGMA.md`)
- Missing edge cases for long text, different languages, different data shapes

**Handoff checklist (add to pre-delivery):**
- [ ] All component states documented (default/hover/focus/active/disabled/error/empty/loading)
- [ ] Motion specs: duration, easing, trigger
- [ ] Responsive behavior at each breakpoint
- [ ] Accessibility annotations: ARIA, focus order, SR behavior
- [ ] Design tokens used throughout (no hardcoded values)
- [ ] Component naming matches code conventions

---

## 17. CUSTOMER-CENTERED PRODUCT ROADMAP
**Source:** @rodhappi

3 questions that drive the roadmap structure:

```
Why does our product exist?        →  VISION (North Star)
How do we reach our vision?        →  STRATEGY
                                        ├─ Customer insight
                                        ├─ Business models
                                        └─ Ecosystem context
What needs must we solve?          →  PRODUCT ROADMAP
                                        ├─ Minimum viable capabilities
                                        ├─ Product KPIs
                                        ├─ Company objectives
                                        ├─ Exploration territories
                                        └─ Market Fit risks
                                   →  RELEASE PLAN (MVP → R1 → R2 → Rn)
                                        └─ Value delivered
```

**Agent rule:** A roadmap built on features = feature factory. A roadmap built on these 3 questions = customer-centered product. When asked to help plan features, anchor to the question layer first.

---

## 18. REMOTE UX RESEARCH WHEEL
**Source:** System Concepts Ltd

Research methods by category:

| Category | Methods |
|---|---|
| Diary studies | Tracking behaviours, ethnography, customer journey mapping, long-term consumption |
| User interviews | Usability testing, journey mapping, user needs interviews |
| Focus groups | Discussion of concepts, long-term consumption, idea exploration, in-depth discussion |
| Concept evaluation | Visual feedback on stimulus, wireframes, visuals/mock-ups, communications |
| Surveys | Quantitative feedback, attitudinal trends, behavioural trends |
| Workshops | Review, map, ideate |

**Agent use:** When planning research, select methods from multiple quadrants to triangulate. Don't rely on only one method type.

---

## 19. PRODUCT MODEL FIRST PRINCIPLES
**Source:** Marty Cagan / SVPG (20 principles)

**Product Team:** Empowered with problems, Outcomes over outputs, Sense of ownership, Collaboration

**Product Strategy:** Focus, Powered by insights, Transparency, Placing bets

**Product Discovery:** Minimize waste, Assess product risks, Embrace rapid experimentation, Test ideas responsibly

**Product Delivery:** Small + frequent + uncoupled releases, Instrumentation, Monitoring, Deployment infrastructure

**Product Culture:** Principles over process, Trust over control, Innovation over predictability, Learning over failure

**Agent rule:** "Outcomes over outputs" is the most important. When asked to build a feature, ask what outcome it produces. When it can't be measured, it's a bet — label it as such.

---

## 20. DESIGN THINKING (Double Diamond + IDEO)
**Sources:** IxDF — https://ixdf.org/courses/design-thinking-the-ultimate-guide | IDEO | British Design Council

### Double Diamond
```
DISCOVER → DEFINE → DEVELOP → DELIVER

─── Diverge ───|─── Converge ───|─── Diverge ───|─── Converge ───
   (research)     (problem def)    (ideation)      (solution)
```

### IDEO 5-Stage Process
```
EMPATHIZE → DEFINE → IDEATE → PROTOTYPE → TEST
```

### IBM Enterprise Design Thinking
3 unique additions that scale design thinking to large organizations:

**Hills** — user outcome statements, not feature specs:
```
Format: [WHO] will [WHAT] so that [WHY/OUTCOME]
Example: "A first-time investor will understand their portfolio risk
          in under 2 minutes so they can make confident decisions."
```
Hills are agreed before any design begins. If a feature doesn't serve a Hill, it doesn't ship.

**Playbacks** — regular stakeholder alignment sessions:
- Show work in progress to sponsors and users, not just at end
- Prevents surprise at handoff, kills endless revision cycles
- Structure: here's what we learned → here's what we're doing → here's what we need from you

**Sponsor Users** — real users with a stake in the product:
- Invited into the design process as collaborators, not just research subjects
- Give ongoing feedback across multiple sessions
- Replaces "we think users want" with "our users said"

**Source:** https://www.ibm.com/design/thinking/

**Agent rule:** When starting a new feature or product, run a Hill before wireframing. "Let's design a dashboard" is not a Hill. "A logistics manager will see delayed shipments at a glance so she can intervene before SLA breach" is.

---

## 21. GESTALT PSYCHOLOGY FOR UI
**Source:** IxDF — https://ixdf.org/courses/gestalt-psychology-and-web-design-the-ultimate-guide

6 laws that explain how users group and perceive UI elements:

| Law | Principle | UI application |
|---|---|---|
| **Proximity** | Near objects = related | Spacing between form fields, button groups, card content |
| **Similarity** | Similar objects = same group | Color/shape consistency for interactive elements |
| **Closure** | Brain completes incomplete shapes | Progress rings, icon outlines, implied containers |
| **Figure-Ground** | Objects separate from background | Modal overlays, dropdowns, tooltips |
| **Continuity** | Eye follows smooth paths | Carousels, timelines, flow arrows |
| **Common Fate** | Objects moving together = related | Animated groups, parallax layers |
| **Prägnanz** | Brain prefers simplest interpretation | Reducing visual complexity — less is processed faster |
| **Uniform Connectedness** | Connected = related | Lines between related items, enclosure borders |

**Practical rules:**
- Group related actions with proximity before adding labels
- Use similarity (same color, same shape) to teach users what's clickable
- Figure-ground failures = modals that don't feel separate from page → darken overlay more
- Closure lets you remove borders if spacing + alignment communicate grouping already

**Agent rule:** Before adding a border or a label to separate UI elements, check if proximity and similarity already do the job. Borders are a last resort.

---

## 22. OBJECT-ORIENTED UX (OOUX)
**Source:** IxDF — https://ixdf.org/courses/object-oriented-user-interface-design | Sophia Prater

Design around **objects** (nouns), not tasks (verbs) or screens.

### The shift
```
Task-oriented:  "Create invoice" → "Send invoice" → "View payment status"
Object-oriented: Invoice object → has states (draft/sent/paid) + actions (create/send/archive)
```

### Object Map process
1. Extract nouns from user stories and content
2. Define each object: what it IS, what it HAS (attributes), what it DOES (actions), what it relates to
3. Nest objects correctly: a Line Item lives inside an Invoice
4. Design each object's detail view before designing flows between screens

### Object anatomy
```
OBJECT: Invoice
  Attributes: amount, due date, status, client, line items
  Actions:    create, edit, send, mark paid, archive, duplicate
  Relations:  belongs to Project, has many Line Items, belongs to Client
  States:     draft → sent → viewed → paid / overdue
```

### Why it matters for component design
- Components map 1:1 to objects, not to screens
- An `<InvoiceCard>` shows Invoice in list context — same object, different view
- State machine comes from the object, not from the screen
- Prevents the "we need a new component" problem — it's the same object in a different state

**Agent rule:** When designing a new feature, map the objects first. What are the nouns? What attributes and actions does each have? Then design the views.

---

## 23. PERSONAS
**Source:** NN/g — https://www.nngroup.com/topic/personas/

### What a persona is (and isn't)
- IS: a research-synthesized archetype of a user segment, grounded in real behavioral patterns
- IS NOT: a demographic profile, a job title, a fictional character, a stakeholder's assumption

### Anatomy of a valid persona
```
Name + photo (humanizes, aids memory)
Demographics (only if they influence behavior)
Goals (what they're trying to achieve — JTBD language)
Frustrations / painpoints (from research, not assumptions)
Context (when/where/how they use the product)
Behaviors (what they actually do, not what they say they do)
Mental models (how they think the system works)
Quote (representative, from actual research)
```

### How to build one (data-driven, not fictional)
1. Conduct qualitative research (interviews, observations)
2. Identify behavioral variables (not demographic)
3. Map participants to variables
4. Find clusters → each cluster = persona candidate
5. Synthesize into archetype
6. Validate with more research

### Zombie personas (avoid these)
- Built from assumptions without research
- Based on demographics, not behavior
- Never updated after initial creation
- More than 4-5 for one product (too many = no focus)
- "Marketing persona" ≠ "UX persona" — different purpose, don't conflate

### Proto-persona
Hypothesis-based persona used when no research is available yet. Clearly labeled as assumption. Replaced with real personas as research accumulates.

**Agent rule:** When a project starts and a persona is mentioned, ask: "Is this based on research or assumption?" If assumption → proto-persona. If research → ask for the data behind it.

---

## 24. INFORMATION ARCHITECTURE
**Source:** NN/g — https://www.nngroup.com/topic/information-architecture/

IA defines how content is organized, labeled, and navigated.

### 4 components (Peter Morville & Louis Rosenfeld)
```
Organization systems  → how content is grouped and categorized
Labeling systems      → how categories and items are named
Navigation systems    → how users move through the content
Search systems        → how users find content directly
```

### Key methods

**Card Sorting** (discover organization)
- Open: users group items and name the groups themselves
- Closed: users sort items into predefined categories
- Hybrid: mix of both
- Output: similarity matrix → optimal category structure
- Tools: Optimal Workshop, Maze, paper cards

**Tree Testing** (validate navigation)
- Users find items in a text-only tree (no visual design)
- Measures: success rate, time, directness
- Run BEFORE hi-fi prototyping — cheaper to fix IA than redesign UI
- Tools: Treejack (Optimal Workshop)

**Taxonomy rules**
- Mutually exclusive: items belong in one category, not multiple
- Collectively exhaustive: every item has a home
- Labeled for users: "Account Settings" not "Admin Panel"
- Consistent depth: avoid 1-click and 5-click items in same nav

### Navigation patterns (NN/g)

| Pattern | Use when |
|---|---|
| Global nav (top/sidebar) | Large sites, many sections, frequent switching |
| Local nav | Deep hierarchies, section-specific links |
| Breadcrumbs | Deep hierarchies, users land deep via search |
| Faceted nav | Large catalogs with multiple filter dimensions |
| Mega menu | Many top-level sections with subcategories |
| Hub-and-spoke | Mobile — separate tasks, no cross-navigation |
| Tab bar | Mobile — 3-5 primary destinations |

**Agent rule:** Before designing a nav, run a card sort on real content with real users (or proto-sort with team). Never design navigation from the org chart.

---

## 25. USER TESTING
**Source:** NN/g — https://www.nngroup.com/topic/user-testing/

### The 5-user rule (Nielsen)
Testing with 5 users finds ~85% of usability problems. After 5, diminishing returns. Run multiple small studies, not one large one.

### Moderated vs Unmoderated

| | Moderated | Unmoderated |
|---|---|---|
| Researcher present | Yes | No |
| Can probe and follow up | Yes | No |
| Richer insight | Yes | Less rich |
| Scale | Small (5-8) | Large (50-100+) |
| Speed | Slower | Fast |
| Best for | Complex tasks, new concepts | Known tasks, validation |

### Task design rules
- Tasks describe a scenario, not the UI: "You need to find your last invoice" not "Click on Billing"
- Tasks are realistic: based on actual user goals
- No leading language: "Try to find the settings" not "Find the easy settings button"
- Include a done state: user knows when task is complete
- 3-5 tasks per session, max 60 min total

### Think-aloud protocol
- Ask users to verbalize thoughts while doing tasks
- Concurrent (while doing): messy but rich
- Retrospective (after): cleaner but memory-filtered
- Don't answer questions during the task — "What would you expect to happen?"

### Severity rating (NN/g 0–4 scale)
```
0 — Not a usability problem
1 — Cosmetic only (fix if time allows)
2 — Minor (low priority)
3 — Major (important to fix)
4 — Catastrophic (must fix before launch)
```

**Agent rule:** Never ship a new flow without at least 5-user unmoderated test. Before that, never present a design as "the solution" — it's a hypothesis.

---

## 26. PROTOTYPING FIDELITY
**Source:** NN/g — https://www.nngroup.com/topic/prototyping/

### Fidelity spectrum

| Fidelity | What it is | When to use |
|---|---|---|
| Paper / sketches | Hand-drawn, no interactivity | Earliest ideation, concept validation |
| Lo-fi digital | Wireframes (Figma, Balsamiq), greyscale | IA, flow, structure decisions |
| Mid-fi | Basic interactivity, placeholder content | Usability testing of flows |
| Hi-fi | Near-final visual design + interactions | Visual feedback, stakeholder signoff |
| Coded prototype | Real components, real data | Performance, edge cases, developer handoff |

### Key rules
- **Test the right thing at each fidelity.** Lo-fi = test the flow. Hi-fi = test the visual design.
- **Visual polish suppresses feedback.** Beautiful prototypes get "this looks great" instead of real critique. Use lo-fi for structural feedback.
- **Paper prototyping is underrated.** Fastest way to test 5+ concepts in a day.
- **Don't over-prototype.** A working prototype costs more than the feature it represents. Know when to go straight to code.

### Prototype for the question, not for completeness
```
Question: "Will users understand this nav?"  → Paper or lo-fi is enough
Question: "Is this motion too distracting?"  → Hi-fi required
Question: "Does this form feel trustworthy?" → Hi-fi with real copy required
Question: "Can users complete checkout?"     → Mid-fi with key interactions
```

**Agent rule:** Always ask "what question does this prototype answer?" before deciding fidelity. Default to the lowest fidelity that answers the question.

---

## 27. EYETRACKING PATTERNS
**Source:** NN/g — https://www.nngroup.com/topic/eyetracking/

**Used for:** Validating visual hierarchy, predicting scan paths, optimizing layout.

### Reading patterns

**F-Pattern** (long-form text pages, lists)
- Users read full first line, partial second line, then scan left margin
- Implication: put critical info at top, important secondary info in first words of each line
- Where it appears: search results, text-heavy pages, email

**Z-Pattern** (sparse pages, ads, landing pages)
- Eyes move: top-left → top-right → diagonal → bottom-left → bottom-right
- Implication: logo top-left, primary CTA top-right, key message bottom area
- Where it appears: landing pages, hero sections, simple forms

**Layer-Cake Pattern** (subheadings used as navigation)
- Users skim headings horizontally, skip body text
- Implication: subheadings must carry meaning independently
- Where it appears: long articles, FAQs, documentation

### Practical layout implications
- First 2 words of every label carry ~80% of scanning weight
- Users rarely read below the fold without a strong pull
- Images of faces attract attention — gaze follows the direction the face looks
- Animated elements capture attention even when not the focal point (banner blindness in banners, useful in alerts)
- CTAs in F-pattern dead zones (far right, lower center of long pages) get missed

**Agent rule:** Place the single most important thing in the top-left region. Never put a critical CTA in the lower-right of a text-heavy page.

---

## 28. UX WRITING & CONTENT
**Source:** NN/g — https://www.nngroup.com/topic/writing-web/ | Wondelai web-typography

### Microcopy principles
- **Clarity over cleverness.** Users are in task mode. Delight comes after they understand what to do.
- **Front-load keywords.** First 2 words = what users scan. "Delete account" not "Account deletion"
- **Sentence case everywhere.** "Sign in" not "Sign In". Title case signals decoration, not function.
- **Buttons are verbs.** "Save changes" not "OK". "Delete post" not "Confirm".
- **Error messages explain and offer a path.** "Something went wrong" is useless. "Your session expired. Sign in again to continue." is useful.

### Error message formula
```
What happened + Why (if helpful) + What to do next
"Your card was declined (insufficient funds). Try a different card or contact your bank."
```

### Empty states
Three types, each needs different copy:
- **First-time empty:** user has no data yet → guide them ("You haven't added any projects yet. Create your first one →")
- **User-cleared empty:** user deleted everything → confirm and offer recovery ("All clear! Start fresh or undo →")
- **No results empty:** search/filter returned nothing → help them try differently ("No results for 'invoce'. Check spelling or try 'invoice'.")

### Plain language rules
- Reading level: aim for grade 8 (14-year-old) for consumer products, grade 10-12 for professional tools
- Active voice: "You can cancel anytime" not "Cancellation is available at any time"
- Positive framing: "Passwords must be 8+ characters" not "Password too short"
- Avoid jargon unless your users are domain experts who expect it

### Reading patterns for web
- Users don't read — they scan. Key info in headings, bullets, and bold (sparingly).
- Inverted pyramid: conclusion first, details second
- Chunk content: 3-4 sentence paragraphs max, then white space
- Line length: 50-75 characters optimal for body text

---

## 29. EMOTIONAL DESIGN
**Source:** IxDF — https://ixdf.org/courses/hci-thought-and-emotion | Don Norman

### 3 Levels of Emotional Design (Don Norman)

```
VISCERAL  → immediate, pre-cognitive reaction
            What it looks like → "This is beautiful" / "This feels cheap"
            Design lever: visual aesthetics, motion quality, materials

BEHAVIORAL → usability, function, feel-in-use
            What it feels like to use → "This is smooth" / "This is frustrating"
            Design lever: interaction quality, responsiveness, feedback

REFLECTIVE → post-experience, meaning and narrative
            What it means → "I'm proud to use this" / "This represents my values"
            Design lever: brand, story, exclusivity, mission
```

### Why it matters for design decisions
- Visceral design creates the first impression — override cognitive judgments
- Behavioral is where most UX work happens — but visceral sets the expectation ceiling
- Reflective is where brand loyalty forms — products that align with user identity become irreplaceable
- The Aesthetic-Usability Effect (Laws of UX §1) is visceral → behavioral: beautiful = perceived as usable

### Designing for delight (not just satisfaction)
- Satisfaction = expectation met
- Delight = expectation exceeded in a memorable way
- Target Peak-End Rule moments (Laws of UX §6): the highest emotional moment + the last interaction
- Progress indicators, success animations, and thoughtful empty states are behavioral delight
- Personalization and remembering user context are reflective delight

**Agent rule:** When auditing a design, evaluate all 3 levels. Visceral failure = visual design pass. Behavioral failure = usability pass. Reflective failure = brand/messaging alignment pass.

---

## 30. DATA-DRIVEN DESIGN
**Source:** IxDF — https://ixdf.org/courses/data-driven-design-quantitative-research-for-ux

### Quantitative UX research methods

| Method | What it measures | When to use |
|---|---|---|
| A/B testing | Which variant performs better on a specific metric | When you have a hypothesis and sufficient traffic |
| Multivariate testing | Multiple variable interactions | Complex pages with many elements to optimize |
| Funnel analysis | Where users drop off in a flow | Conversion optimization, onboarding |
| Heatmaps & click maps | Where users click/scroll/hover | Layout validation, CTA placement |
| Session recordings | What users actually do | Qualitative context for quantitative drops |
| Surveys (quantitative) | Attitudes at scale | Satisfaction, CSAT, NPS across segments |
| SUS (System Usability Scale) | Perceived usability (0-100) | Benchmarking across time or against competitors |

### Statistical significance basics for designers
- **Sample size matters.** A 3% lift on 50 users means nothing. Need statistical significance before deciding.
- **p < 0.05** — the result has < 5% chance of being random. Standard threshold.
- **Effect size matters too.** A statistically significant 0.1% improvement may not be worth shipping.
- **Segment your data.** Global averages hide problems. New users vs power users, mobile vs desktop.

### Quant + qual = insight
```
Quant tells you WHAT is happening (30% drop-off at step 3)
Qual tells you WHY it's happening (users confused by the pricing options)
Design fixes the WHY, quant validates the fix
```

### SUS scoring
Score 0-100: > 80 = excellent, 68 = industry average, < 51 = failing.
10 alternating positive/negative questions. Odd = positive, Even = negative.

**Agent rule:** When a metric is cited ("conversion is low", "users drop off"), ask: what's the baseline? What segment? What sample size? Data without context is noise.

---

## 31. IBM ENTERPRISE DESIGN SYSTEM — Carbon
**Source:** https://www.carbondesignsystem.com | https://www.ibm.com/design/language/

**Why it matters for this agent:** Carbon is the most documented open-source enterprise design system. It's a reference architecture for how large-scale design systems are built.

### IBM 2x Grid
All layout is based on multiples of 2. Base unit = 8px. Everything snaps to this grid.
```
Mini unit:  2px  (fine details, borders)
Base unit:  8px  (standard spacing)
Grid cols:  2, 4, 8, 12, 16 columns depending on breakpoint
Gutters:    16px (mobile), 32px (desktop)
Margins:    0px (full bleed) to 48px (focused content)
```

### IBM Plex
IBM's open-source typeface. Available on Google Fonts.
- IBM Plex Sans — UI, body
- IBM Plex Mono — code, data
- IBM Plex Serif — editorial, reading
- IBM Plex Sans Condensed — dense data tables

### Carbon token architecture
Follows the 3-layer model (same as DESIGN-SYSTEM module):
```
Global tokens   → $blue-60, $gray-100
Alias tokens    → $interactive-01 = $blue-60
Component tokens → $button-primary = $interactive-01
```

### Animation principles (IBM)
4 productive motion qualities:
- **Productive** — 150ms ease-out. Functional, efficient. Form submits, panel opens.
- **Expressive** — 240-300ms ease-in-out. Character, delight. Welcome screens, success states.
- **Duration:** 75ms (micro), 150ms (small), 240ms (medium), 400ms (large), 700ms (jumbo)
- **Easing:** Standard = ease-in-out. Enter = ease-out. Exit = ease-in.

**Reference:** https://www.ibm.com/design/language/animation/overview/

### Data Visualization (IBM)
7 chart types with specific use cases:
- Comparisons → bar, grouped bar
- Trends → line, area
- Part-to-whole → pie (max 6 slices), stacked bar
- Relationships → scatter, bubble
- Distributions → histogram
- Geospatial → choropleth map

Color rules for data viz:
- Use categorical palettes (never gradient for categorical)
- Max 6-8 colors in a single chart
- Colorblind-safe: avoid red/green combinations, use Carbon's data viz palette

**Reference:** https://www.ibm.com/design/language/data-visualization/overview

---

## 32. AI UX + ETHICS
**Source:** IBM Design for AI — https://www.ibm.com/design/ai/ethics/

As AI becomes part of product design, these principles govern how to design AI features responsibly.

### IBM's 5 AI Ethics pillars

| Pillar | What it means in design |
|---|---|
| **Explainability** | Users can understand why the AI made a decision. Show reasoning, not just output. |
| **Fairness** | The system doesn't disadvantage groups. Test for bias in training data and outputs. |
| **Accountability** | Someone is responsible for AI decisions. Design clear human override paths. |
| **Value Alignment** | The AI serves user goals, not just business metrics. |
| **User Data Rights** | Users know what data is used, can correct it, can opt out. |

### Designing AI features
- **Always show confidence levels.** "AI suggests: Invoice #1042 (87% confident)" is better than just the suggestion.
- **Design for failure.** What happens when the AI is wrong? Who can override? How easy is the correction?
- **Avoid automation bias.** Users over-trust AI. Make it easy to challenge suggestions.
- **Progressive disclosure for AI reasoning.** Show the output first, reasoning available on demand.
- **AI assistants need a persona boundary.** Users anthropomorphize. Set clear expectations about what the AI is and isn't.

### Conversation design (chatbots / AI assistants)
From IBM Design for AI:
```
Turn structure: User intent → System response → Confirmation or clarification
Error handling: Graceful fallback → Offer alternatives → Escalate to human
Persona: Consistent tone, clear capability boundaries, no false intimacy
```

### Knapp's Relational Model for AI trust
4 stages users go through in trusting an AI system:
1. **Unfamiliarity** → show capabilities clearly, reduce intimidation
2. **Wariness** → be transparent, don't oversell
3. **Trust** → be consistent, predictable, reliable
4. **Reliance** → monitor for automation bias, maintain human agency

**Agent rule:** When designing any AI feature, run through the 5 ethics pillars as a checklist. If "explainability" fails — users can't understand why the AI did that — it's a design problem, not just a technical one.

---

## 33. NN/G RESEARCH METHOD SELECTION
**Source:** NN/g — https://www.nngroup.com/articles/ux-research-cheat-sheet/ | Christian Rohrer

### 3-Dimensional Framework

**Dimension 1: Attitudinal vs Behavioral**
```
Attitudinal → what users SAY  (surveys, interviews, focus groups)
Behavioral  → what users DO   (analytics, A/B tests, usability tests, eye tracking)
"What users say ≠ what users do" — always triangulate both
```

**Dimension 2: Qualitative vs Quantitative**
```
Qualitative  → WHY and HOW (small n, rich insight, interviews, observations)
Quantitative → HOW MANY and HOW MUCH (large n, statistical, surveys, analytics)
```

**Dimension 3: Context of Product Use**
```
Natural use    → diary studies, field studies, analytics (in real context)
Scripted use   → usability testing, A/B tests (controlled scenario)
Not using      → surveys, card sorts, interviews (outside the product)
Hybrid         → lab usability test with some freedom
```

### When to use which method (by phase)

| Phase | Best methods |
|---|---|
| **Discover** (what problems exist?) | Field studies, diary studies, user interviews, contextual inquiry |
| **Explore** (how might we solve it?) | Card sorting, desirability studies, participatory design, concept testing |
| **Test** (does the solution work?) | Usability testing, A/B testing, accessibility evaluation |
| **Listen** (what are users telling us?) | Surveys, analytics review, search log analysis, NPS, support tickets |

### Most common methods quick reference

| Method | Attitudinal/Behavioral | Qual/Quant | Best for |
|---|---|---|---|
| Usability test | Behavioral | Qual | Finding interaction problems |
| A/B test | Behavioral | Quant | Optimizing between variants |
| User interview | Attitudinal | Qual | Understanding motivations |
| Survey | Attitudinal | Quant | Measuring attitudes at scale |
| Analytics | Behavioral | Quant | What users do, not why |
| Card sort | Attitudinal | Qual/Quant | IA, category labeling |
| Tree test | Behavioral | Quant | Navigation validation |
| Diary study | Behavioral | Qual | Longitudinal, in-context behavior |
| Field study | Behavioral | Qual | Real-world context understanding |
| Heuristic eval | — | Qual | Expert review of usability |

**Agent rule:** When a project needs research, first identify which dimension matters most for the question at hand. "Why are users dropping off?" → behavioral + qualitative → usability test or session recordings. "How many users prefer option A?" → attitudinal + quantitative → survey or A/B test.

---
## VITALY FRIEDMAN / SMASHING MAGAZINE — PRACTICAL UX PATTERNS
> Source: https://www.smashingmagazine.com/author/vitaly-friedman/ (606 articles)
> Senior UX Lead, founder of Smashing Magazine. Specialist in complex systems,
> legacy UX, AI interfaces, and inclusive design.

---

## 34. AI INTERFACE DESIGN PATTERNS (Vitaly Friedman)
Source: https://www.smashingmagazine.com/2025/07/design-patterns-ai-interfaces/
Course: https://ai-design-patterns.com

### The core shift: chat is receding
Traditional chat UI is slow (30-60s per input), burdens users with precise articulation, produces generic output. Paradigm shifts toward task-oriented AI UIs: temperature controls, knobs, sliders, semantic spreadsheets, infinite canvases.

Old: User types prompt -> AI responds -> User re-types -> repeat
New: User selects/adjusts/gestures -> AI generates -> User refines

### 5 areas of AI UX design

**1. Input UX — helping users express intent**
- AI-generated pre-prompts — AI suggests a starting prompt the user edits, not writes from scratch
- Prompt extensions — add depth to a vague prompt automatically
- Query builders — structured forms that compose prompts without typing
- Node canvas (like Flora AI) — visual intent via connecting sources on canvas
- Shape abstraction (like Krea.ai) — move an abstract shape to communicate goal
- Voice input — especially for mobile and accessibility
- Forced ranking / structured presets — constrained choices instead of open text

**2. Output UX — displaying outcomes usefully**
- Style lenses (Amelia Wattenberger/PenPal) — view output through multiple analytical dimensions
- Clustering — group similar AI outputs for theme exploration
- Dynamic views — same output, different representations on demand
- Confidence indicators — "87% confident" alongside AI suggestion
- Progressive disclosure — output first, reasoning on demand
- Geospatial visualization — output on a map when location is relevant

**3. Refinement UX — helping users improve output**
- Daemons — background AI agents that surface suggestions without being asked
- Temperature knobs — sliders for creativity/conservatism, formality/informality
- Style presets — named output styles (Professional / Casual / Concise)
- Precision knobs — control specificity level
- Dynamic editing — edit AI output in-place, not by re-prompting
- Modifiers — small targeted adjustments rather than full re-generation

**4. Trust UX — building confidence in AI**
- Quiet AI vs Visible AI — silent action (less intrusive) vs showing work (more trusted, interruptable)
- Agentic transparency — show what AI is doing, decided, will do next
- Human override paths — always easy to reject/undo AI action
- Guardrails and approvals — high-stakes actions require explicit confirmation
- Hallucination surfaces — design so users can easily spot and flag wrong information

**5. Agentic UX — designing for autonomous AI**
- Show the plan before execution, not just the result after
- Reveal decision points where human input improves outcome
- Gradual autonomy increase — start supervised, earn autonomy through demonstrated trust
- Map risk levels to approval requirements: low risk = auto-execute, high risk = require approval
- Context management — help users review, edit, and clean up what the agent knows

### Quiet AI vs Visible AI
| Situation | Quiet AI | Visible AI |
|---|---|---|
| Low stakes, reversible | Yes | No |
| Background task | Yes | No |
| High stakes, irreversible | No | Yes |
| Novel/unfamiliar task | No | Yes |
| Building initial trust | No | Yes |
| Expert user, repetitive | Yes | No |

Agent rule: When designing any AI feature, define: (1) input expression method, (2) output display format, (3) refinement mechanisms, (4) trust signals, (5) autonomy level. Never assume chat is the right interface.

---

## 35. TARS — MEASURING FEATURE IMPACT
Source: https://www.smashingmagazine.com/2025/12/how-measure-impact-features-tars/
Original framework: Adrian H. Raudschl

4-metric framework, simple and repeatable:

T = Target Audience (%) — what % of all users have the problem this feature solves?
A = Adoption (%) — what % of target audience meaningfully engages with the feature?
R = Retention (%) — what % of adopters come back and use it again over time?
S = Satisfaction (score) — how satisfied are users? (CSAT or 1-10 scale)

Target Audience != feature usage. More users may have the problem but can't find the feature.
Adoption = meaningful engagement (sharing output, using filters) NOT clicks or session time.

### TARS 2x2 plotting (Adoption x Retention)
- High retention + Low adoption = Optimize discoverability
- High retention + High adoption = Protect, don't break
- Low retention + Low adoption = Kill or redesign
- Low retention + High adoption = Improve depth and recurring value

Agent rule: Never report feature success from adoption alone. Retention is the signal users actually got value. When asked "is this feature working?" use TARS.

---

## 36. MODAL VS PAGE — DECISION TREE
Source: https://www.smashingmagazine.com/2026/03/modal-separate-page-ux-decision-tree/

Use a modal when:
- Task is short (< 5 fields, < 3 steps)
- User needs to stay in current context
- Task is directly dependent on current page content
- No navigation required within the task
- Action is reversible (confirm delete, quick settings)

Use a separate page when:
- Task is long or complex (many fields, multi-step)
- Task needs its own navigation or sub-flows
- User may need to leave and come back
- Deep linking or sharing the task URL matters
- Action has permanent consequences (account creation, payment)

Avoid modals when:
- Content inside needs to scroll significantly
- Task would launch another modal (nested modals = disaster)
- Mobile: modal covers too much of the screen

Interruption scale (low to high):
Tooltip -> Popover -> Inline message -> Toast -> Modal -> Drawer -> Full page

Match interruption level to action severity. Deleting a comment = modal. Deleting an account = full page.

---

## 37. COMBOBOX / MULTISELECT / LISTBOX
Source: https://www.smashingmagazine.com/2026/02/combobox-vs-multiselect-vs-listbox/

| Component | Single/Multi | Searchable | Best for |
|---|---|---|---|
| Select/Dropdown | Single | No | Short list (< 8 options), known options |
| Combobox | Single | Yes | Long list or unknown options, user types to filter |
| Listbox | Single or Multi | No | Always-visible, small-medium option set |
| Multi-select | Multi | Optional | Multiple selections from known options |
| Dual Listbox | Multi | No | Moving items between available and selected groups |
| Tag input | Multi | Yes (type to add) | Free-form or large option sets |

Rules of thumb:
- < 5 options: radio (single) or checkboxes (multi) — never dropdown
- 5-15 options: select/dropdown
- > 15 options: combobox (add search)
- Many selections needed: multi-select or dual listbox
- User creates/adds values: tag input

---

## 38. DESIGNING FOR NEURODIVERSITY
Source: https://www.smashingmagazine.com/2025/06/designing-for-neurodiversity/

Neurodivergent users (ADHD, autism spectrum, dyslexia) are not edge cases. Designing for them improves experience for everyone (curb-cut effect).

ADHD:
- Clear visual hierarchy, reduced clutter
- Explicit progress indicators, one task at a time
- Visible timers, deadlines, countdowns
- Immediate feedback, clear completion states
- Avoid: autoplay media, time-limited popups, auto-advancing carousels

Autism Spectrum:
- No flashing, pulsing, rapid animations (sensory sensitivity)
- Avoid idioms/metaphors, use literal language
- Consistent layouts, no surprise changes, explicit instructions
- Avoid: vague error messages, hidden navigation patterns

Dyslexia:
- Left-aligned text only (never justified)
- 1.5x letter spacing and word spacing
- Sans-serif fonts with distinct letterforms
- Max 60-70 characters per line
- Avoid: italic text, decorative fonts, ALL CAPS, walls of text

General principles:
- One primary action per screen (reduces cognitive load)
- Multiple input modes: text, voice, click, gesture
- Make errors recoverable: undo everywhere possible
- Plain language: short sentences, active voice, no jargon

---

## 39. DESIGNING FOR STRESS AND TIME-CRITICAL UX
Source: https://www.smashingmagazine.com/2025/11/designing-for-stress-emergency/

How stress changes cognition:
- Tunnel vision: attention narrows to 1-2 elements only
- Memory impairment: users forget instructions from 10 seconds ago
- Motor control degradation: missed taps, typos increase
- Decision fatigue: too many options = paralysis

Design principles for stress contexts:
- Reduce options radically. One obvious action beats five good options.
- Make the primary action massive and unambiguous. No hunting.
- Progressive disclosure under pressure: show only what's needed right now.
- Repeat critical information. Don't assume users read the top.
- Error tolerance: confirm before irreversible actions. Allow undo.
- Offline resilience: emergency UX must work on degraded connections.
- No popups, modals, or interruptions during a critical flow.
- Plain, literal language. "Call 112" not "Get emergency help."

Applications: medical/health interfaces, financial crisis flows, authentication failures, error recovery flows, emergency notifications.

---

## 40. DESIGN PRINCIPLES — HOW TO CREATE AND USE THEM
Source: https://www.smashingmagazine.com/2026/04/practical-guide-design-principles/

Design principles are shared values that align teams and inform decisions. They counter AI workslop, stakeholder drift, and feature factory thinking.

Good principle criteria (Vitaly's):
- Actionable: implies a decision direction ("Prefer clarity over completeness" not "Be clear")
- Specific: relevant to your product's actual context
- Testable: you can ask "does this design follow this principle?"
- Memorable: teams can recall in a meeting without a cheat sheet
- Occasionally in tension: great principles sometimes conflict — that tension forces real discussion

Bad vs good examples:
- Bad: "Simple" / Good: "Remove, don't add"
- Bad: "User-friendly" / Good: "Designed for one-handed use"
- Bad: "Innovative" / Good: "Familiar until it needs to be different" (references Jakob's Law)

Creation process:
1. Collect real contentious design decisions
2. Ask what value the right decision reflected
3. Synthesize 5-8 principles from those values
4. Test against recent decisions: would this principle have helped?
5. Make visible in design critiques and reviews

Agent rule: When starting a new product or design system, establish 5-8 design principles before designing anything. Reference them in every critique. If none exist, surface that gap to the human.

---

## 41. DATA -> FINDINGS -> INSIGHTS (Vitaly's distinction)
Source: https://www.smashingmagazine.com/2025/05/data-findings-insights-ux-research/

Three levels, commonly confused:

DATA: raw observation
"42% of users drop off at step 3"
(no interpretation, no cause)

FINDING: interpreted observation
"Users drop off at step 3 because the credit card field appears before order summary"
(cause identified, still no design direction)

INSIGHT: actionable truth
"Users need to see what they are paying for before entering payment details — trust precedes commitment"
(generalized principle that survives across multiple instances and drives design decisions)

Why it matters for communication:
- Presenting data to stakeholders = "so what?" reaction
- Presenting findings = "interesting, but what do we do?"
- Presenting insights = "let's fix this" reaction

How to get from data to insight:
1. Observe the data
2. Ask "why?" repeatedly (5 Whys)
3. Generalize to a principle that survives across multiple instances
4. Validate: does this insight predict behavior elsewhere in the product?

---

## 42. STREAMING UX — DESIGNING FOR REAL-TIME AI OUTPUT
Sources:
- https://www.smashingmagazine.com/2026/04/designing-stable-interfaces-streaming-content/
- https://www.smashingmagazine.com/2026/05/agentic-ai-loading-patterns/ (May 2026)

### Why spinners fail for AI generation
- Spinner implies "done soon" — streaming takes 3-30 seconds
- Spinner gives zero progress signal — users abandon
- Spinner shows no partial value — users cannot start reading

### Streaming UI patterns
- Progressive rendering: show text as it streams (sentence by sentence, not word by word)
- Thinking indicators: show internal steps "Searching... Analyzing... Writing..."
- Partial interactivity: allow interaction with already-streamed content before generation completes
- Abort controls: always provide a "Stop generating" button
- Stable layout: reserve space for streaming content to prevent layout shift
- Avoid skeleton screens for variable-length AI content — layout shift on arrival is jarring

### Agentic loading patterns (multi-step AI)
When AI performs multiple steps:
- Show each step label as it executes: "Finding relevant documents (2/5)..."
- Show elapsed time for long operations
- Allow cancellation at any step
- Show what completed if user cancels mid-way
- Traditional spinners are deceptive for multi-step — use step progress instead

States to design for every AI feature:
Idle -> Thinking -> Streaming -> Complete -> Error -> Stopped (user aborted)
Each state needs distinct visual treatment. "Stopped" is not the same as "Error."

### Layout shift prevention
- Use min-height reservations for known streaming content areas
- Never stream into containers that resize siblings or push navigation
- Chunk-based arrival (sentence by sentence) is less disorienting than character-by-character

Agent rule: Any AI feature generating output > 2 seconds needs a streaming or step-progress pattern. Never show a spinner for AI generation. Never let layout shift during streaming.

---

## 43. FIGMA IDEATION — AI-ASSISTED WIREFRAME LADDER
**Sources:** Figma blog (figma.com/blog), Figma AI (figma.com/ai), Builder.io

### The low-fi → hi-fi ladder
Always start concepts as grayscale low-fidelity wireframes — basic shapes, no color, no imagery — to focus stakeholders on layout and flow. Only add color, type, and imagery at the high-fidelity stage. This prevents aesthetic opinions from hijacking structural feedback.

```
Stage 1: Paper / napkin sketch   — rough layout, no precision
Stage 2: Lo-fi digital           — Figma wireframe, greyscale, placeholder shapes
Stage 3: Mid-fi                  — components, real copy, greyscale
Stage 4: Hi-fi                   — brand colors, typography, imagery, interactions
Stage 5: Coded prototype         — real components, real data
```

Never skip stages when feedback quality matters. A hi-fi prototype in Stage 2 gets aesthetic feedback, not structural feedback.

### Figma AI — First Draft (rapid ideation)
Figma's built-in AI generation tool. Generates full screens from a text prompt using one of four starting libraries:
- Basic App wireframe
- App Wireframe (lo-fi)
- Basic Site
- Site Wireframe (lo-fi)

**Workflow:**
1. Select First Draft from Figma templates
2. Write a prompt: "e-commerce store for iPhone accessories with a search bar and product grid"
3. Choose fidelity: lo-fi wireframe or basic site
4. Iterate with quick actions: switch themes, adjust spacing/radius, swap layouts
5. Use output as a starting draft — always refine before presenting

**Critical caveat (Builder.io):** "Figma Make generates interactive prototypes, but the exported code is HTML div soup. It's not production-ready and doesn't use your actual design system or code components." Treat AI-generated Figma output as a structural draft, not shippable code.

### Figma AI adoption context
Per Figma's 2025 AI Report (2,500 users surveyed):
- 85% of both designers and developers say learning to work with AI will be essential to their role
- 68% of developers say AI improves their work quality
- Only 40% of designers agree AI improves their work quality

Implication: AI ideation tools are most trusted by developers, least trusted by designers. Designers use AI best as a starting-point generator, not a final-output tool. The designer's taste layer remains irreplaceable.

### Figma → Code via MCP
The Figma MCP server connects Figma designs directly to AI coding agents (VS Code, Cursor, Windsurf, Claude Code). Use for design-to-code handoff on production work — the agent reads exact coordinates, tokens, and component structure rather than interpreting screenshots.

See `modules/FIGMA.md` for full MCP setup.

### AI ideation tools comparison
| Tool | Fidelity | Output | Best for |
|---|---|---|---|
| Figma First Draft | Lo-fi to hi-fi | Figma frames | Structural ideation inside existing Figma workflow |
| Pencil.dev | Design spec → code | React + Tailwind | Final design → production component (see COMPONENTS.md) |
| v0.dev (Vercel) | Prompt → UI | React code | Quick component generation from text, no design file |
| Claude Artifacts | Prompt → UI | HTML/React | Interactive prototype without design file |
| Open Design | Prompt → design | Brand-aware output | Design system-aware generation, local-first, BYOK |

**Agent rule:** When asked to "start designing," first ask: what fidelity is needed and what question needs answering? A lo-fi wireframe for IA feedback takes 10 minutes. A hi-fi prototype for stakeholder approval takes hours. Match the fidelity to the question, not the deadline.

---

## 44. AI-ASSISTED DESIGN-TO-CODE: BRAND DNA + ANTI-SLOP WORKFLOW
**Source:** Jack Roberts (@Itssssss_Jack) — https://www.youtube.com/@Itssssss_Jack
**Skill:** power-design — https://github.com/ItsssssJack/power-design (MIT)

### The core problem
AI-generated UI looks generic because the AI has no brand context and no design principles to apply. The result: visually coherent but identity-free output — what practitioners call "AI slop."

### Brand DNA document
Before generating any design or code, codify the project's brand identity in a single `brand-style.md`:

```markdown
# Brand DNA

## Identity
colors:
  primary:    #3B82F6
  secondary:  #1E293B
  accent:     #F59E0B
  neutral:    #F1F5F9
  text:       #0F172A

typography:
  heading:    "Inter", sans-serif
  body:       "Inter", sans-serif
  scale:      [12, 14, 16, 20, 24, 32, 40, 48]px

voice: [direct, technical, confident, approachable]

## Components
buttons:     rounded-lg, solid primary, no shadows
cards:       subtle border, white bg, 24px padding
navigation:  top bar, logo left, CTA right

## Reference
look and feel: [URL of a site that embodies the target aesthetic]
```

Load this file as context before any design or code generation task. Pair with `power-design` skill for slides/presentations.

### Anti-slop self-critique (5 dimensions)
Before showing any AI-generated output to a human, run this internal check:

1. **Philosophy** — does this reflect the brand's stated values and voice?
2. **Hierarchy** — is the most important element visually dominant? Would a 5-second glance land on the right thing?
3. **Execution** — are spacing, alignment, and typography consistent and intentional?
4. **Specificity** — does this look made for *this* brand, or could it belong to any product?
5. **Restraint** — what can be removed without losing meaning?

If any dimension is weak, iterate before presenting to the human. Never present a first AI pass as a finished design.

### power-design skill (Jack Roberts)
A Claude Code skill for generating slides and visual presentations that look human-designed, not AI-generated. Grounded in: Edward Tufte, Garr Reynolds, Nancy Duarte, Robin Williams CRAP principles, Refactoring UI (Wathan & Schoger), Müller-Brockmann grid systems, Matthew Butterick typography, WCAG 2.2.

```bash
npx skills add https://github.com/ItsssssJack/power-design
```

Use when: pitch decks, executive presentations, case study slides, portfolio pieces — any situation where generic AI aesthetic undermines credibility.

### Cost-aware model routing
Not every task needs the most capable model. Route by output type:

| Output type | Model tier | Reason |
|---|---|---|
| UI design, visual output, brand decisions | Claude Sonnet/Opus | Taste-sensitive — quality compounds |
| Algorithmic, backend, data processing | Cheaper model (e.g. DeepSeek) | Taste-insensitive — cost reduction up to ~100× |
| Refactoring known patterns | Claude Haiku or cheaper | Pattern-matching, not judgment |
| Novel architecture decisions | Claude Opus | High judgment required |

Rule: always use Claude for anything a user will see. Use cheaper models for invisible work.

### Agent rule
When starting any project, generate `brand-style.md` before the first pixel or component. Run the 5-dimension anti-slop check before any design is shown to the human. Route model choice based on whether the task requires taste.

---
## REFERENCE CHANNELS — CHUNK 1
> Curated YouTube channels as knowledge sources. Load relevant entries when working
> on the corresponding topic. These are references, not verbatim content.

---

## 45. AI PROMPTING FOR PRACTICAL WORK (Tina Huang)
**Channel:** https://www.youtube.com/@TinaHuang1 — 1M+ subscribers
**Profile:** Ex-Meta data scientist. Focuses on practical AI use, not demos. Motto: minimize effort, maximize outcome.

### TASK prompting framework (Top 10% AI Users)
Structure prompts around:
```
T — Task:    What exactly do you want AI to do? Be specific. Assign a persona.
             "Act as a senior UX designer reviewing a mobile checkout flow"
A — Action:  The concrete deliverable format
             "Write a numbered list of 5 usability issues with severity ratings"
S — Style:   Tone, format, constraints
             "Concise, no jargon, under 200 words per issue"
K — Keep:    What to preserve / not change
             "Keep the existing payment step order"
```

### Practical AI use principles (Tina Huang)
- **AI demos lie.** Real AI usage in jobs looks nothing like product demos. Test the tool on your actual work before committing to it.
- **Learning with AI:** use AI to explain unfamiliar concepts, generate worked examples, and quiz yourself — not to skip learning.
- **Avoid prompt-dependency:** learn to break tasks into steps manually first, then use AI to accelerate each step. Users who can't do the task without AI produce worse AI-assisted output.
- **Minimize effort, maximize outcome** — the right question is not "can AI do this?" but "does AI save meaningful time here without reducing quality?"
- **Cost of iteration is near zero** — use AI to generate 5 variants and pick the best, not to generate 1 final answer.

### Agent rule
When helping with any prompt-heavy task, structure the prompt using TASK. Generate multiple variants (3-5) by default and present the best two for human selection. Never present a single AI-generated output as finished.

---

## 46. OFFF BARCELONA — CREATIVE DIRECTION REFERENCE
**Channel:** https://www.youtube.com/@FOFBarcelona
**Profile:** OFFF Festival — 25+ year international design festival at Disseny Hub Barcelona. Annual event featuring 70+ speakers from top studios covering graphic design, motion, AI-driven creativity, visual identity, and digital culture.

### What OFFF covers (relevant to this agent)
- Creative process talks: how studios approach concept → execution on high-impact projects
- Motion graphics and visual identity from studios like DixonBaxi, Territory Studio, Marshmallow Laser Feast
- AI-driven creativity: how working designers use generative AI in real studio practice (not demos)
- Creative resilience, mental health, and the vulnerability of creative work
- Emerging talent from 12 leading design schools (NXT Project)

### Key principles observed from OFFF talks
- **Chaos as a creative method:** some speakers (e.g. PJ Richardson, 2025) advocate for starting projects without knowing the outcome — "just go for it" over perfectionism
- **Story as design material:** the best creative work makes the viewer's story the designer's story — emotional resonance is the measure, not technical execution
- **Identity-first design:** visual work that doesn't connect to a brand's identity is decoration; connection to meaning is what separates craft from art

### Agent use
Reference OFFF when: the project needs creative direction beyond UX patterns, visual identity work, motion strategy, or the human asks about design culture and inspiration. The channel is a library of creative processes from world-class studios — useful for calibrating what "excellent" looks like.

---

## 47. FIGMA + FRAMER + AI DESIGN-TO-CODE WORKFLOW (Sergei Chyrkov)
**Channel:** https://www.youtube.com/@Sergei-Chyrkov
**Profile:** Founder & Creative Director at CHYRKOV studio. 14+ years, 160+ award-winning projects, 2,500+ mentored designers. Specialises in Figma, Framer, and AI-powered design-to-code workflows. Site: sergeichyrkov.com

### Core workflow: Figma → MCP → Cursor (production code)
Sergei's documented workflow for design-to-code via MCP:
```
1. Design in Figma using variables (not hardcoded values) + auto layout everywhere
2. Connect Figma MCP server to Cursor/Claude Code
3. MCP sends exact coordinates, tokens, and component structure to the AI agent
4. AI generates real HTML/CSS/React — not exported Webflow/Framer markup
5. Designers review and iterate without touching code manually
```
Key principle: "This is not about exporting a landing page to Webflow or Framer — this is real engineering output created from real design systems. Designers become more autonomous. Developers get clean foundations."

### Framer for no-code production sites
- Framer = design tool + production-ready website output
- Useful when: client needs a polished marketing site fast, no React engineer available
- Workflow: Figma for design system → Framer for output → no code handoff needed
- Limitation: not suitable for complex app logic or custom backend integrations

### Figma Make — how to avoid generic results
From Sergei's tutorial "How to Get Better UI Design with Figma Make":
- Don't prompt Figma Make blindly — feed it UI screenshots from real products as style references
- Build actual Figma variables/design tokens first; Make respects your token structure
- Use Make to generate variations of an existing design, not to start from scratch
- Treat every Make output as a rough draft requiring designer refinement

### Figma 2025 update impact on designer workflow
From Sergei's analysis:
- Figma now supports direct website publishing (CMS, templates) — competes with Framer and Webflow
- AI-powered code generation inside Figma (animate, prototype, generate production-ready code)
- Brush tools for vector illustration (Procreate/Illustrator-style) — reduces tool switching
- Lines between design, development, and content creation are blurring: "A designer can create production-ready software without writing code manually"

### Nodey / UX Pilot — AI agent inside Figma
AI design agent running directly inside Figma canvas:
- Generates UI kits, design tokens, and full screens from prompts without leaving Figma
- Reference: UX Pilot (uxpilot.ai)

### Agent rule
When the workflow involves Figma → production code, use MCP (see `modules/FIGMA.md`). For no-code marketing sites, consider Framer as output target. Never use Figma Make without a design system in place — feed it tokens and UI references to avoid generic output.

---

## 48. HATCH CONFERENCE — SENIOR DESIGN LEADERSHIP REFERENCE
**Channel:** https://www.youtube.com/@hatchconference
**Profile:** Invite-only annual conference for senior UX and design professionals, Berlin + online. 500+ attendees. Focus: where strategic design is heading — AI's impact, design leadership, innovation, business-oriented UX. All talks published on YouTube after the event.

### Key themes from Hatch 2023-2025 (confirmed from published talks and writeups)
- **Why innovation fails** (Dan Tase) — common structural and organizational causes of failed design initiatives
- **What designers can do FOR AI** (Nadia Piet, AIxDesign) — designers shaping AI, not just using it
- **Death to handovers** (Nadia Tokerud) — eliminating the design→dev handoff as a discrete event
- **Design leadership buy-in** (Kevin Hawkins) — how to talk to leadership and secure project approval
- **AI-powered prototyping** — functional HTML prototypes with Lovable, v0, Replit are now faster than traditional Figma prototyping for certain validation tasks; spend saved time on detail refinement
- **Vision over roadmap** — short-term KPI focus erodes design quality; build with long-term value, trust, and impact in mind
- **Delegation design** (Hatch 2026) — deciding what tasks can be delegated to AI agents vs what must stay human-led; designing handoffs that let humans intervene with minimal friction

### Relevant signal from Hatch 2025
"Speakers on stage were enthusiastic, hopeful and curious about how empowered design can be in a new age of AI, whereas a lot of audience questions showed the uncertainty designers have about what this means for their careers. Right now, there's an opportunity to re-level the playing field and make your own rules."

### Agent use
Reference Hatch when: working on design leadership problems, stakeholder buy-in, design team strategy, or the intersection of AI and senior design practice. The channel is a peer-reviewed library of what senior European designers consider the most pressing issues in the field.

---

## 49. DESIGNCOURSE (Gary Simon) — UI/CSS/FRONTEND FUNDAMENTALS
**Channel:** https://www.youtube.com/@DesignCourse — 1M+ subscribers
**Profile:** Gary Simon. 20+ years UI/UX designer and frontend developer. Teaches full-stack design: UI/UX theory → CSS → frontend dev. Platform: designcourse.com.

### What Gary Simon covers (relevant to this agent)
- UI/UX fundamentals: visual hierarchy, typography, spacing, layout, color — explained through code, not just theory
- CSS Flexbox and Grid: practical layout tutorials tied to Figma designs
- Responsive design: how Figma designs translate to responsive HTML/CSS
- Figma to code: crash courses connecting Figma design system to frontend implementation
- AI-powered design and context engineering for designers/developers building AI apps
- Project ATH: experimental UIs using Rive and Unicorn Studio for interactive/motion-heavy production sites

### Agent use
Reference DesignCourse for: CSS layout questions with a design quality angle, Figma-to-code translation tutorials, and when helping a designer who also codes understand the frontend implementation of their own designs. Gary bridges the designer↔developer gap better than most technical channels.

---

## 50. LENNY'S PODCAST — PRODUCT STRATEGY + PM FRAMEWORKS
**Channel:** https://www.youtube.com/@LennysPodcast
**Profile:** Lenny Rachitsky, ex-Airbnb product lead, 600K+ newsletter subscribers, 300+ podcast episodes. Interviews world-class product leaders (Stripe, Figma, Linear, Notion, Duolingo, Perplexity, Meta, Shopify).

### Product strategy hierarchy (Lenny's framework)
```
Mission → Vision → Strategy → Goals → Roadmap → Tasks
```
Most teams skip the middle layers and jump Mission → Roadmap, which is why roadmaps feel arbitrary. Strategy = the specific set of choices about what you will and won't do to achieve the vision.

### Why most product strategies fail (5 Strategy Blocks framework)
From Lenny's 2025 episode "The operator's guide to product strategy":
1. **Insight** — what unique thing do you know about users that others don't?
2. **Bets** — which 2-3 things are you placing disproportionate effort on?
3. **North Star** — what single metric, if it improves, means everything is working?
4. **Moats** — what makes your advantage compounding over time?
5. **Trade-offs** — what are you explicitly NOT doing?

Teams without all 5 blocks produce strategies that are either too abstract (vision without bets) or too tactical (tasks without insight).

### Product vision statement (4 elements, from Ebi Atawodi / YouTube)
1. The user (who specifically)
2. Their core need/pain
3. The future state you're enabling
4. Why now (market/technology forcing function)

### Four pillars of great product management (Lenny's synthesis)
1. Understanding users deeply (not surveys — real observations)
2. Clear prioritization (saying no > saying yes)
3. Cross-functional influence (PMs ship through others)
4. Outcome ownership (responsible for results, not just delivery)

### PM shift observed across 300 episodes (2026 synthesis)
"Product Managers are shifting from feature delivery to systems thinking, building evals, instrumenting failures, and operating in roles with increasingly blurred boundaries." AI is not replacing PMs — it's raising the bar for what good PM work looks like.

### Agent use
Reference Lenny's when: working on product strategy, vision/mission alignment, roadmap prioritization, or stakeholder communication. The 5 Strategy Blocks and Mission→Tasks hierarchy are directly usable in product workshops and briefs.

---

## 51. DIVE CLUB — DESIGN COMMUNITY REFERENCE
**Channel:** https://www.youtube.com/@joindiveclub
**Profile:** Dive Club is a design podcast and community of 10,000+ designers. Available on YouTube, Spotify, Apple Podcasts. Topics: design systems, freelancing, Figma tactics, future of AI in design. Format: weekly breakdowns + expert interviews.

### What Dive Club covers
- Design systems: architecture, token governance, adoption strategies
- Figma tactics: practical workflows, hidden features, plugin ecosystems
- Freelancing as a designer: client management, pricing, portfolio
- AI's impact on design practice: what changes, what doesn't, what designers must own
- Design community: peer learning, accountability, shared resources

### Agent use
Reference Dive Club for: peer-level design community knowledge, current Figma workflow debates, and designer career/freelance questions. It represents what working designers (not academics or enterprise) are actually thinking about. Good source for "what are designers doing right now" vs "what frameworks say designers should do."

---

## 52. DAN MALL — DESIGN SYSTEMS LEADERSHIP
**Channel:** https://www.youtube.com/@DanMallTeaches
**Profile:** 25+ years industry experience. Former founder of design systems consultancy SuperFriendly. Ran design systems programs at Meta, Google, NYT, Nike, Shopify, Netflix. Author of "Design That Scales" (Rosenfeld Media, 2023). Now runs Design System University. Site: danmall.com

### Core thesis: design systems should be specific, not generic
The biggest mistake teams make: building a generic design system (like Bootstrap) and expecting product teams to adopt it. A specific system built for your product's actual use cases gets higher adoption than a comprehensive-but-abstract one.

> "Tokens and components are the tip of the iceberg. Every organization needs their design system to do something different."

### Design System in 90 Days (framework)
Dan's structured program for getting a design system from zero to adopted in one quarter:
```
Weeks 1-3:  Audit — inventory existing UI, identify inconsistencies, align on goals
Weeks 4-6:  Pilot — build a small but complete slice of the system (one component family)
Weeks 7-9:  Expand — add the next highest-value components
Weeks 10-12: Adoption — get product teams using it, not just building it
```

The pilot phase is critical: build one component end-to-end (Figma token → component → code) before building anything else. Proves the workflow works before scaling.

### Flow weeks vs system weeks
Dan's pattern for design system teams embedded in product delivery:
- **Flow weeks** — work alongside product teams on active features; learn what components they actually need
- **System weeks** — build and document what was learned during flow weeks; abstract patterns into the system

Without flow weeks, the system team loses touch with real needs. Without system weeks, nothing gets codified.

### Contribution model (counter-intuitive)
Don't expect product teams to contribute patterns to the system. The design system team should do the contribution work for them — extract the pattern from what product teams built, generalize it, and add it to the system. Expecting product teams to contribute is the most common failure mode.

### 4 stages of adoption (Dan Mall's evolution model)
When introducing a new tool or component into a design system:
1. How the process worked **before** the new solution
2. How it works **now** that you have it
3. An **interim** modified process (closer to ideal but realistic)
4. The **ideal** future process (full adoption, no friction)

Never jump from stage 1 to stage 4. Plan stages 2 and 3 explicitly.

### Design leadership principles (from Dan's writing)
- Get the respect you deserve by understanding the business problem before proposing design solutions
- The pricing question: frame design work in terms of outcomes (revenue, retention, speed) not hours or deliverables
- Power dynamics in client/stakeholder relationships: the goal is to flatten them, not play to them

### Agent rule
When building or advising on a design system, use Dan Mall's audit → pilot → expand → adopt sequence. Start with the smallest complete slice, not the most comprehensive foundation. Reference "Design That Scales" (Rosenfeld Media, 2023) for deeper guidance.

---

## 53. AM DESIGN AND DEV (Asaad Mahmood) — FULL-STACK DESIGN REFERENCE
**Channel:** https://www.youtube.com/@AMDesignAndDev
**Profile:** Asaad Mahmood. Teaches web development, web design, Figma, UX/UI. Focus: helping designers become financially independent through craft expertise. Contact: LinkedIn (asaadmahmood).

### What AM Design and Dev covers
- Figma to code workflows for practicing designers
- UX/UI fundamentals for working web developers
- Web development (HTML, CSS, JavaScript) for designers who code
- Career path content: getting clients, building a practice around design + dev skills

### Agent use
Reference this channel for: beginner-to-intermediate practical content on the design + frontend development intersection. Good for designers learning to code and developers learning design fundamentals in parallel.

---

## UNVERIFIED — TO REVISIT
The following channels from the original list could not be confirmed through web search. Channel identity, topics, or content were not findable. Skip for now:

- `@jonyl6940` — No matching results found
- `@CalebKing0` — No matching results found
- `@radnolan` — No matching results found
- `@Aprendamosmarketing` — Marketing channel (Spanish), not design/product
- `@diazcueto` — No matching results found
- `@AIOriented` — No distinct channel found

If the human provides descriptions, video links, or channel URLs, these can be revisited and added.
