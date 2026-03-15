# CLAUDE.md

Instructions for Claude Code working in this repository. These override default behaviour.

---

## Core Principles

- **Simplicity first.** Make every change as simple as possible. Minimal code impact.
- **No laziness.** Find root causes. No temporary fixes. Senior developer standards.
- **Verify before done.** Never mark a task complete without proving it works — build, test, demonstrate.
- **Plan before building.** Enter plan mode for any non-trivial task (3+ steps or architectural decisions). If something goes sideways, stop and re-plan — don't keep pushing.

---

## Project Overview

**Own Your Mind** (ownyourmind.ai) — independent, practitioner-led content platform covering decentralised AI. Editorial position: "Freedom AND returns. Practitioner-led. Sovereignty-first. Hands-on."

**Tech:** Astro 5, Tailwind v4, Pagefind, React (SearchModal only), Cloudflare Pages.
**Design:** Deep teal (#0D9488) accent on charcoal (#0F1117), Space Grotesk headings, Inter body. Dark theme, editorial/magazine tone. No 3D graphics, animated gradients, neon cyberpunk, emojis in nav/headings, or generic Substack look.

```bash
npm run dev              # Development server
npm run build            # Production build
npm run preview          # Preview production build
npm run check            # Astro type checking
npm run refresh:github   # Fetch latest GitHub metrics (needs GITHUB_TOKEN)
npm run check:staleness  # Flag stale or incomplete project data (read-only)
npm run check:returns    # Validate returns score breakdowns, grades, evidence
```

---

## Workflow Orchestration

### Plan → Execute → Verify

1. **Plan first.** Write plan with checkable items for any non-trivial task. Check in with user before starting implementation.
2. **Track progress.** Mark items complete as you go. Explain changes at each step.
3. **Verify before done.** Run `npm run build`, check logs, demonstrate correctness. Ask: "Would a staff engineer approve this?"
4. **Capture lessons.** After any correction from the user, update CLAUDE.md and memory with the pattern. Write rules that prevent the same mistake.

### Subagent Strategy

- Use subagents liberally to keep main context window clean.
- Offload research, exploration, and parallel analysis to subagents.
- One task per subagent for focused execution.
- For complex problems, throw more compute at it via parallel subagents.

### Autonomous Operation

- When given a bug report: just fix it. Don't ask for hand-holding.
- Point at logs, errors, failing tests — then resolve them.
- Go fix failing CI tests without being told how.
- For non-trivial changes: pause and ask "is there a more elegant way?" Skip this for simple, obvious fixes.

---

## Content Architecture

Six collections under `src/content/`, each with Zod-validated frontmatter in `src/content.config.ts`:

| Collection | Purpose | Key fields |
|---|---|---|
| `why-deai` | Evergreen thesis essays | title, description, publishDate, draft, podcastUrl? |
| `projects` | Project reviews (6-point framework) | + category, token, status, freedomScore (1-10), returnsScore? |
| `tokenomics` | Token economics analysis | title, description, publishDate, draft, podcastUrl? |
| `build` | Tutorials and guides | + difficulty (beginner/intermediate/advanced), category |
| `journal` | Chronological blog posts | + tags[] |
| `resources` | Reference material | title, description, publishDate, draft |

### Dual-Score System

Two independent scores per project:

| Score | Measures | Scale | Display |
|-------|----------|-------|---------|
| **Freedom Score** | Decentralisation (6 dimensions) | 0-100 in editorial, 1-10 in frontmatter | Dashboard uses /10 |
| **Returns Score** | Token value capture (5 dimensions) | 0-100 in editorial, 1-10 (one decimal) in frontmatter | Dashboard uses /10 |

**Freedom dimensions:** Infrastructure (0-20), Governance (0-20), Token Distribution (0-15), Censorship Resistance (0-15), Data Sovereignty (0-15), Open Source (0-15).
**Returns dimensions:** Token Utility (0-20), Value Accrual (0-20), Supply Dynamics (0-20), Revenue Sustainability (0-25), Liquidity & Access (0-15).

The /100 scores in editorial body text are the precise researched numbers; the /10 frontmatter values are display values (56/100 → 6/10). These are NOT a mismatch.

---

## Data Verification Rules (MANDATORY)

Every quantitative claim in editorial content must follow these rules. They exist because of specific failures.

1. **No single-source statistics.** Every quantitative claim needs 2+ independent sources. If only one source exists, attribute: "X reports Y" — never assert as fact.
2. **Self-reported data is not verified data.** Projects reporting their own metrics (x402.org, Aethir revenue) = claims, not facts. Always seek independent verification (Allium, Artemis, Dune, DeFiLlama, credible analysts).
3. **Check for wash trading.** Raw on-chain volume and filtered volume can differ by 10-15x. Cite the filtered number.
4. **Subsidised activity ≠ organic activity.** Note when protocols subsidise gas/transaction costs. Free transactions inflate volume.
5. **Attribution over assertion.** "Allium Labs' on-chain analysis shows $3M" beats "x402 processed $3M."
6. **Scepticism scales with narrative alignment.** Apply extra scrutiny to data that conveniently proves the article's point. If a number seems too good, it probably is.

**Previous failure (March 2026):** x402 article cited self-reported $24M volume as fact. Independent analysis: $3M on-chain (Allium), $1.6M after wash filter (Artemis). A 15x inflation from a single self-reported source. Article rewritten with full attribution chain.

---

## Project Research Protocol (MANDATORY)

When researching a new project for `projects`, follow `own-your-mind-research-plan.md` sequentially. Not optional.

**Nine steps in order:**
1. Project documentation — whitepaper, docs, official site
2. **Recent events sweep** — min 5 web searches, 3 source reads for projects live 6+ months
3. Technical verification — GitHub, HuggingFace, on-chain, testnet/mainnet
4. Team and corporate — Companies House/SEC, LinkedIn, balanced assessment
5. Tokenomics — contract addresses, distribution, vesting, on-chain verification
6. Community and usage — Discord/Telegram, GitHub activity, real metrics
7. Freedom Score — score each dimension with evidence
8. Returns Score — score each dimension with evidence
9. Compile JSON — only after steps 1-8

**Source tier hierarchy:** Tier 1 (on-chain/GitHub/official docs) > Tier 2 (audits/research) > Tier 3 (media) > Tier 4 (social).

**Post-research checks (all mandatory):**
- Compliance check: min 20 WebFetch calls, min 5 Tier 1 sources, block explorer + GitHub + DeFiLlama checked
- Post-editorial sync: research JSON scores must exactly match editorial body text
- Run `npm run check:returns` before committing
- Assets: logo from CoinGecko API → `public/images/logos/{slug}.png`, hero image → `public/images/project-{slug}.webp`

**Previous failures** (do not repeat):
- Intelligent Internet: rushed research, skipped steps 1-3, missed HuggingFace/Companies House
- io.net v1: 49 searches but only 9 actual page reads — research from snippets rejected
- Morpheus: score drift between JSON and editorial (4 dimensions differed)
- Agent Zero returns scoring: false evidence, wrong pre-token handling
- NEAR: missed inflation halving, fee switch, stale data — no "recent events sweep"
- x402 volume: self-reported $24M cited as fact, actual verified volume $1.6M

---

## Review Process (Claude Leads — PROACTIVE)

| Cadence | Schedule | What |
|---------|----------|------|
| **Weekly** | Automated | GitHub metrics, market data, community counts |
| **Monthly** | 1st of month | Process backlog, prose spot-check, score triggers (~30 min) |
| **Quarterly** | 1st of Jan/Apr/Jul/Oct | Deep research, full re-score (~2-3 hrs) |

**Auto-trigger:** At conversation start, check `docs/review-schedule.json`. If `next_due` has passed, prompt user.

**Score change rules:**
- Editorial corrections (factual errors) → fix immediately
- Score adjustments → defer to monthly review unless crossing a grade boundary
- All score changes require Tier 1 or Tier 2 evidence
- Log deferred findings in `docs/quarterly-review-backlog.md`

---

## Agent Zero Partnership

Agent Zero handles research, scoring, content creation. Claude Code handles implementation.

| Task | Agent Zero | Claude Code |
|------|:----------:|:-----------:|
| Research & Scoring | ✅ Primary | ❌ |
| Content Creation | ✅ Primary | Assist |
| Spec Creation | ✅ Primary | ❌ |
| Code Implementation | Assist | ✅ Primary |
| Frontend/Styling | ❌ | ✅ Primary |
| Git Operations | ✅ Can do | ✅ Primary |

When Agent Zero provides specs: read the spec in `specs/`, implement as described, check `content/` for data files, commit referencing the spec.

---

## Key Reference Documents

| File | Purpose |
|------|---------|
| `own-your-mind-research-plan.md` | **MANDATORY** research protocol |
| `own-your-mind-claude-code-brief.md` | Full build specification |
| `deai_site_structure.md` | Content strategy, editorial guidelines |
| `editorial-plan.md` | Content inventory, pipelines, calendar |
| `docs/review-schedule.json` | **CHECK AT CONVERSATION START** |
| `docs/quarterly-review-checklist.md` | Quarterly review steps |
| `docs/quarterly-review-backlog.md` | Deferred score findings |
| `docs/data-refresh-pipeline.md` | Automated data refresh |
| `docs/seo-keyword-strategy.md` | SEO strategy |
| `docs/podcast-strategy.md` | Podcast workflow |
| `vision.md` | Roadmap, success metrics |

---

*Updated March 2026*
