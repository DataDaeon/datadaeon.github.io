# Token Optimization and Session "Burnout" in Code Agents

A **portable** operating guide — token-hygiene and session-memory rules for working with a code
agent (Cursor or similar) on any project. It doesn't depend on any specific repo, brand, persona, or
filename: these are habits, not one project's configuration.

## 1. What problem this solves

Three concrete symptoms, not an abstract fear of "spending tokens":

- **Session-memory files grow without limit.** If you keep project state in a file like
  `CLAUDE.md`/`CONTEXT.md`/`NOTES.md`, reading it in full at the start of every session burns context
  budget before you've even touched the real problem.
- **The tool's auto-compact fires late (around 95% of the window).** By then the tool decides what
  to drop, and it systematically keeps mundane output while discarding the reasoning that actually
  mattered (why something was decided, not just what was decided).
- **Long sessions re-derive decisions already made** in the same conversation, lose track of what was
  decided ten minutes ago, or drift from the original request. This is context-budget degradation,
  not "the model got lazy."

This guide attacks the two levers that are actually controllable: **tokens per task** (well-scoped
context) and **unnecessary tasks** (the Restart Rule, one chat = one task) — not the price per token
or the number of users.

## 2. L0 / L1 / L2 habits (abstract-first)

General idea (inspired by hierarchical-memory systems like OpenViking — **a concept, not a tool you
install**): load information in layers, from less to more detail, and only go deeper once something
actually matched the current task.

| Level | What it is | When it loads |
|---|---|---|
| **L0** | The title / first bold line of a state entry, or a doc's title + first paragraph | Always — this is what gets scanned to decide relevance |
| **L1** | A status log's full entry, a doc's headings, a "where to look" table | Only if the L0 matched the current task |
| **L2** | The full document, source code, meeting notes, extensive research | Only when the task genuinely needs that specific content |

Writing rule: every new entry in a state/memory file **starts with a bold L0** — one sentence a
future session can rank without reading the body. Never open an L2 file because "the name sounds
relevant": check its L0/L1 first.

If the project has a "where to look" file (a map of which file answers which question), use it to
route before searching the whole repo "just in case."

## 3. Checkpoint at ~60%, not ~95%

Most agent tools' auto-compact fires around 95% of capacity — and by then the tool decides what to
drop, systematically keeping mundane output and discarding the reasoning. The rule is to intervene
earlier, while the agent still has control:

1. At **~60%** of the session's practical budget (a "this is getting heavy" signal, not an exact
   token counter).
2. Stop at a clean point (not mid-edit).
3. Write the state to a file: what was done, what's left, what decision is still pending. That's the
   real checkpoint, not the chat's own memory.
4. If a logical unit of work is finished and the code compiles/passes its quality gate, commit (see
   §8).
5. Say it explicitly: "I recommend a fresh chat from here — the state is saved in [file]/git log."
   Don't keep pushing a degraded session "just to finish it here."

**Explicit handoff:** for large or multi-stage work, the checkpoint is written as a clearly marked
block ("HANDOFF" or similar) with: the reference plan, what's done, what's left, and what human
confirmation (if any) is pending before continuing.

## 4. The Restart Rule

If the agent is stuck, produces output that doesn't work, or you find yourself arguing the same point
twice with the session — **stop arguing**. Rewrite the spec (what's being asked, what constraints,
what acceptance criteria) and regenerate cleanly. Arguing spends tokens re-deriving; a clean respec
spends tokens moving forward.

Corollary: if you correct the same thing twice, that's the signal to write it **once** as a permanent
rule (in the agent's rules file), not to keep correcting it by hand every time.

## 5. Memory writes: summary only

- **Do not** paste chat transcripts into durable state/memory files. Writes are summary-level:
  rationale + outcome, never the full conversation.
- Every new entry carries its bold L0 (see §2) and, below it, the minimum needed for another session
  (or another human) to understand what happened and why, without reading the original chat.

## 6. Escalate on anomaly, not on schedule

Default: autonomous — the agent keeps working and commits (where applicable) without asking
permission at every step. Interrupt the human only on a concrete signal, not a fixed number of turns:

- the same file rewritten more than ~5 times in a row,
- the build/typecheck fails 3+ times consecutively,
- the tool-call count is ~2x the expected baseline for that kind of task (calibrate against the
  repo's own history: a full scaffold touches many files, a targeted edit touches few).

Don't add a "should I continue?" checkpoint at a fixed number of turns regardless of session health —
the goal is for the flow to run mostly unattended, and for an interruption to signal something real.

## 7. Mechanical scaffolding as a script, not an agent session

Creating a new copy/variant of a project (duplicating a folder, renaming identifiers, registering
paths/config across several files) is mechanical work. It's better handled with a shell script
(create one if it doesn't exist, using the closest existing instance as a template) — not as
open-ended, turn-by-turn agentic editing. Only the real design/logic changes inside the new copy need
a reasoning model's attention.

**Intent note (`INTENT.md` or similar):** the moment work starts on a new fork or a scoped derivative
(e.g., a reduced-scope clone), write a short note (~5 lines) at the root of that fork, based on the
human's literal request: what changes this round, what stays untouched (non-goals are inferred from
what wasn't mentioned), and one line answering "fork on disk, or a git branch?" — a full fork only if
it needs to run live alongside another version or be published separately; otherwise a branch, deleted
afterward once the learning has been extracted. Ask the human for a one-line confirmation, never a
blank document. Treat it as editable, not a closed gate — adjust it inline if the task evolves.

## 8. Checkpoint gated on build/typecheck

Commit at the end of the scaffold step, before starting feature edits, and again at every natural
subtask boundary — **but only if the current state passes the project's build/typecheck/tests.** If
it doesn't pass, commit to a working branch (`wip/` or similar), never to the main branch with broken
state.

## 9. Plan-first only for large work

Write a short plan and get a one-line approval before: scaffolding a new variant, preparing a
reduced-scope clone, or any refactor touching multiple files. Skip this ceremony for single-file
tweaks — it isn't worth it below roughly ~15 expected tool calls.

## 10. Soft-exclude large, superseded trees

When the tool supports it, distinguish two levels of indexing exclusion:

- **Hard exclusion** (the agent can't read it even with an explicit mention) — for binaries,
  installed dependencies, build artifacts.
- **Soft exclusion** (out of search/indexing by default, but still reachable with an explicit
  mention) — for versions/folders that are superseded and no longer the active line, but still useful
  as historical reference ("how we did this before").

When a variant or module becomes formally superseded by a newer one, move it to soft exclusion in the
same session it gets superseded, instead of leaving it competing for search space indefinitely.

## 11. Manual export bridge (optional pattern, no database)

If the project needs a durable knowledge layer outside the repo (e.g., an Obsidian-style/wiki note),
treat it as a **manual, on-request bridge only** — never as automatic sync or a source of truth. The
honest pattern:

- Export only when the human explicitly asks ("export this," "update the note").
- Every exported note carries minimal metadata (project, type, date, origin) and is linked from a
  central index.
- It's a hand-curated knowledge layer, **not a database**: no relationship queries, no "show me every
  note about X" unless a real structure exists (a CSV/JSON index) — that structure isn't installed
  speculatively.
- The repo's state files (and git history) remain the source of truth; the export is read-only for
  the human, a mirror, not a place from which the agent decides project state.

## 12. What NOT to do (anti-patterns)

- **Don't** open every file "just in case" — if a "where to look" routing map exists, use it.
  Searching the whole repo without that routing is exactly the pattern to avoid.
- **Don't** paste chat transcripts into durable memory files (see §5).
- **Don't** silently archive a large state file. When it crosses a reasonable size threshold (e.g.,
  ~15 entries or ~600 lines), **flag** the recommendation to the human and wait for confirmation —
  never run it as a bulk operation without that sign-off.
- **Don't** use broad git commands (`checkout`/`reset` with wide scope) on shared work to fix a wrong
  turn — restore only the agent's own last edit with a targeted reverse patch or a reviewed
  checkpoint.
- **Don't** treat an Obsidian/wiki-style export as a database or as a source of truth (see §11).
- **Don't** add a "should I continue?" checkpoint at a fixed number of turns (see §6).

## How to install this in another project

1. Copy this Markdown file into the new repo (e.g., `docs/token-burnout-optimization.md`).
2. If the agent supports "always-apply" per-file rules (a common pattern: a short `.mdc`/`.md` file
   in an agent-rules folder, marked to always load), create a summarized 20–30 line version that
   points to this doc for detail — don't duplicate the full content in the always-loaded rule.
3. Optional: if the agent supports "skills" or longer on-demand documents, move the full detail there
   and leave only the summary in the always-apply rule (same L0/L1/L2 principle from §2, applied to
   the agent's own rules).
4. Adapt the session-memory filenames (§1, §3, §5) to the project's actual scheme — these rules
   don't require any particular filename.
5. If the project has multiple agents/tools working on the same repo, point all of them at the same
   doc instead of each maintaining its own abbreviated version — this keeps the rules from drifting
   apart over time.

---

*Shared as a small thank-you for visiting my portfolio. No email required, no strings attached — just
a set of habits I actually use, written down so they're portable to whatever agent or repo you're
working in. If it saves you one runaway session, it's done its job.*

— Dario Espinosa
