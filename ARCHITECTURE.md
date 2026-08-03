# Module: ARCHITECTURE
> Load when: designing component systems, making tech decisions, or working with specs.

---

## COMPONENT ARCHITECTURE PRINCIPLES

**Deep modules over shallow modules** (`software-design-philosophy`):
```
Good: <DatePicker />                   ← simple API, hides complexity
Bad:  <DatePickerWithCalendarAndTimezoneHandling />  ← leaks implementation
```

**Bounded contexts = component boundaries** (`domain-driven-design`):
```
UserProfile  ←→  Billing    ← these should not share components
Each domain owns its UI. Shared only via design tokens + generic primitives.
```

**Dependency Rule for UI** (`clean-architecture`):
```
Views → Presenters → Domain logic
Never: Domain logic → Framework API
Components must work if you swap React for Preact. Don't couple to the framework.
```

---

## FRONTEND OOP PATTERNS

| Pattern | When to use | Wondelai skill |
|---|---|---|
| Deep modules | Component API design | `software-design-philosophy` |
| Bounded contexts | Design system scoping | `domain-driven-design` |
| Dependency inversion | Framework-agnostic components | `clean-architecture` |
| Extract Component | Splitting large components | `refactoring-patterns` |
| Replace Conditional with Polymorphism | Variant-heavy components | `refactoring-patterns` |
| DRY | Token + utility reuse | `pragmatic-programmer` |

Install:
```bash
npx skills add wondelai/skills/domain-driven-design
npx skills add wondelai/skills/clean-architecture
npx skills add wondelai/skills/software-design-philosophy
npx skills add wondelai/skills/refactoring-patterns
```

---

## SPEC-DRIVEN DEVELOPMENT

For any project with multiple contributors or AI tools:

```bash
npx skills add https://github.com/FredAntB/Spec-Driven-Development
```

Generates `requirements.md`, `design.md`, `tasks.md` as the single source of truth.
Prevents AI tools from contradicting each other across sessions.

---

## CODE QUALITY GATES

**Vanity engineering review** (Bencium) — after any design system sprint:
```bash
npx skills add bencium/bencium-marketplace -g --skill vanity-engineering-review
```
Checks: is this component solving a user problem, or is it over-engineered for ego?

**Renaissance architecture** (Bencium) — when designing a system from scratch:
```bash
npx skills add bencium/bencium-marketplace -g --skill renaissance-architecture
```
First-principles thinking. Don't copy the pattern — understand why the pattern exists.

---

## STACK DECISION MATRIX

| Scenario | Stack |
|---|---|
| Landing page, brochure site | Vanilla HTML + CSS + minimal JS |
| Component-heavy SaaS | React + Tailwind |
| Performance-critical / content | Astro (partial hydration) |
| 3D / immersive | React + React Three Fiber |
| Animation-heavy storytelling | React + Motion |
| Quick prototype/MVP | HTML + Tailwind CDN |

Default is always Vanilla. Escalate only when the scenario requires it.

---

## UI COMPONENT TESTING (missing from most AI-generated design systems)

For production design systems, add:

```bash
# Visual regression
npm install --save-dev @chromatic-com/storybook

# Storybook (living design system documentation)
npx storybook@latest init

# Component unit tests
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

Test strategy:
- Unit tests: component props, states, variants
- Visual regression: screenshot per variant in Storybook (Chromatic)
- Integration: user flows (not component internals)
- Accessibility: axe-core in each Storybook story

---

## WEB FUNDAMENTALS FOR DESIGNERS (ByteByteGo)
**Source:** https://github.com/ByteByteGoHq/system-design-101 | bytebytego.com
**Author:** Alex Xu & Sahn Lam — system design education, 500K+ subscribers

These are the networking and infrastructure concepts a product designer who also does frontend needs to understand — not to implement, but to make informed decisions about performance, data fetching, and architecture trade-offs.

### CDN (Content Delivery Network)
Geographically distributed edge servers that cache content near users. A request resolves via DNS to the nearest edge; on a cache miss, the edge fetches from regional → central → origin server.

**Design implications:**
- Always serve static assets (images, fonts, JS, CSS) from a CDN — never force users to the origin for static content
- Images served from a CDN: add `loading="lazy"` for below-fold, `fetchpriority="high"` for LCP hero image
- CDN edge compute (Cloudflare Workers, Vercel Edge) enables personalisation without origin latency

### DNS resolution
Browser local cache → ISP DNS resolver → authoritative name server → IP address. With a CDN, the authoritative server returns a CNAME pointing to the CDN; a CDN load balancer picks the optimal edge by user IP/ISP/content/load.

**Design implications:**
- DNS lookup adds latency on first visit to a new domain — use `<link rel="dns-prefetch">` for third-party domains
- Use `<link rel="preconnect">` for critical third parties (fonts, analytics, API) to run DNS + TCP + TLS early

### API architectural styles
| Style | When to use | Design pattern |
|---|---|---|
| REST | Standard CRUD resources, public APIs | Stateless, cacheable, resource-based URLs |
| GraphQL | Complex frontends needing flexible data shapes | One endpoint, client specifies exact shape — no over/under-fetching |
| WebSocket | Real-time two-way communication | Live chat, collaboration, notifications, live dashboards |
| gRPC | Microservice-to-microservice (not browser) | High-performance internal communication |
| Webhook | Event-driven server-to-server push | Payment confirmations, CI/CD triggers |
| SOAP | Legacy enterprise systems | Avoid for new work |

**Design implications:**
- Use WebSocket for live updates (typing indicators, presence, real-time data) — REST polling is wasteful
- GraphQL eliminates the "loading state while fetching extra fields" problem in complex UIs
- Webhook delays affect UX for payment/confirmation flows — always design an optimistic state

### HTTP status codes (what every designer should know)
```
200 OK              — success
201 Created         — resource created (after form submit)
204 No Content      — success, nothing to return (after delete)
301/302 Redirect    — permanent/temporary
400 Bad Request     — client sent invalid data (show form error)
401 Unauthorized    — not authenticated (redirect to login)
403 Forbidden       — authenticated but not allowed (show 403 page)
404 Not Found       — resource missing (design a helpful 404 state)
422 Unprocessable   — validation failed (show field-level errors)
429 Too Many Req.   — rate limited (show retry-after state)
500 Server Error    — backend failure (show friendly error + retry)
503 Unavailable     — maintenance/overload (show maintenance page)
```

Every status code needs a designed UI state. 401, 403, 404, 422, and 500 are the five that most products ship without designing properly.

### Latency numbers every designer should know
(From Jeff Dean / Peter Norvig benchmark, via ByteByteGo EP22)
```
RAM / Redis cache read:          ~100 ns     (instant)
SSD read:                        ~100 µs     (imperceptible)
Same datacenter network:         ~500 µs     (imperceptible)
Database insert:                 ~1 ms       (imperceptible)
Cross-region round trip:         ~30-100 ms  (perceptible, design for it)
Cross-continent round trip:      ~150 ms     (noticeable, especially on tap)
HDD seek:                        ~10 ms      (avoid for critical path)
```

**Design implications:**
- Anything over ~100 ms feels "not instant" to users (relates to Doherty Threshold in Laws of UX)
- Cross-region API calls: always show optimistic UI or skeleton state
- Minimise round trips: every extra network hop adds 30-150 ms — batch requests, prefetch, use GraphQL
- Test performance on throttled 3G, not just localhost — 10 ms local becomes 200 ms on mobile

### Latency vs. throughput
- **Latency** = per-request delay the user *feels* on a click or interaction
- **Throughput** = volume the system can handle per second (capacity)
- Optimising for latency (fewer hops, caching, CDN) improves perceived performance
- Optimising for throughput (batching, queues, horizontal scaling) improves capacity under load
- Both matter; they are not the same metric and often require different solutions

### Caching layers (where data can be cached)
```
Browser cache         → HTTP headers (Cache-Control, ETag)
CDN edge              → static assets, some dynamic with stale-while-revalidate
Service Worker        → offline-first apps
In-memory (Redis)     → session data, hot DB queries
Database              → buffer pool, materialized views, WAL
```

**Design implication:** Design for stale data states. If a user sees cached content that's out of date, the UI needs a "refresh" signal or a stale indicator — not just a hard reload.
