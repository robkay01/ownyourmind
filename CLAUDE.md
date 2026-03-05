# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Own Your Mind** (ownyourmind.ai) — an independent, practitioner-led content platform covering decentralised AI. Editorial position: "Freedom AND returns. Practitioner-led. Sovereignty-first. Hands-on."

## Tech Stack

- **Framework:** Astro (static site generator with content collections)
- **Styling:** Tailwind CSS
- **Content:** Markdown files with Zod-validated frontmatter schemas
- **Hosting:** Cloudflare Pages (git push → auto-deploy)
- **Newsletter:** Buttondown (embedded signup form)
- **Search:** Pagefind (client-side)
- **CMS:** None — pure markdown in editor

## Build Commands

```bash
npm run dev              # Development server
npm run build            # Production build
npm run preview          # Preview production build
npm run check            # Astro type checking
npm run refresh:github   # Fetch latest GitHub metrics for all projects (needs GITHUB_TOKEN)
npm run check:staleness  # Flag stale or incomplete project data (read-only)
```

## Content Architecture

Six content collections under `src/content/`, each with distinct frontmatter schemas:

| Collection | Purpose | Key frontmatter fields |
|---|---|---|
| `why-deai` | Evergreen thesis essays | title, description, publishDate, updatedDate?, draft |
| `projects` | Project reviews (6-point framework) | + category (enum), token, status (enum), freedomScore (1-10) |
| `tokenomics` | Token economics analysis | title, description, publishDate, updatedDate?, draft |
| `build` | Tutorials and guides | + difficulty (beginner/intermediate/advanced), category (hardware/walkthrough/examples) |
| `journal` | Chronological blog posts | + tags[] |
| `resources` | Reference material | title, description, publishDate, draft |

Full frontmatter schemas: see `own-your-mind-claude-code-brief.md` lines 169–210.

## Page Templates

1. **Homepage** — Hero statement + six section cards + latest journal + newsletter signup
2. **Section index** — Article list within a collection
3. **Article/essay** — Long-form with optional TOC
4. **Project profile** — Structured 6-point review (what it does, value prop, tokenomics, how to participate, honest assessment, freedom score)
5. **Tutorial/guide** — Code-block-friendly, step-by-step
6. **Journal post** — Blog with prominent date, reverse chronological
7. **Reference page** — Tables, directories, lists
8. **About / Newsletter** — Utility pages

## Design Constraints

- Dark theme (deep charcoal, not pure black) — forked from 4ORBS (4orbs.com) design language
- Single accent colour (electric violet, deep teal, or amber — TBD)
- Text-based logo: "OWN YOUR MIND" in heading font
- Editorial/magazine tone — not protocol-marketing or database aesthetic
- **Do not:** use 3D graphics, animated gradients, neon cyberpunk aesthetic, emojis in nav/headings, or generic Substack look
- Mobile-first responsive layout
- Ctrl+K search pattern

## Project Research Protocol (MANDATORY)

When researching a new project for the `projects` collection, you **must** follow `own-your-mind-research-plan.md` as a sequential step-by-step checklist. This is not optional guidance. It is a protocol.

- Read the research plan before starting any new project research
- Execute all seven steps in order, completing each before moving to the next
- Do not produce the output JSON until all research steps are complete
- Check all platforms: official docs, GitHub, HuggingFace, on-chain, Companies House/SEC, community channels
- Follow the source tier hierarchy (Tier 1 > Tier 2 > Tier 3 > Tier 4)
- Follow the JSON schema in Section 3.1 exactly (field names, enum values, null handling)

## Key Reference Documents

- `own-your-mind-claude-code-brief.md` — Complete build specification with all decisions
- `deai_site_structure.md` — Content strategy, editorial guidelines, competitive positioning
- `own-your-mind-research-plan.md` — **MANDATORY** research protocol for new project research (7-step sequence, source tiers, JSON schema, freedom score rubric)
- `own-your-mind-claude-code-brief.md` § "Data Maintenance" — Full pipeline docs (automated refresh, sparklines, staleness, quarterly review)

---

## Agent Zero Partnership

This project uses **Agent Zero** for research, scoring, and content creation. Claude Code handles implementation.

### Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                     DEVELOPMENT CYCLE                           │
│                                                                 │
│   1. RESEARCH & SCORING (Agent Zero)                            │
│      └── Project scores, methodology, content creation          │
│                  ↓                                              │
│   2. SPEC CREATION (Agent Zero)                                 │
│      └── Implementation specs in /specs/ folder                 │
│                  ↓                                              │
│   3. IMPLEMENTATION (Claude Code)                               │
│      └── Build features, modify templates, commit & push        │
│                  ↓                                              │
│   4. REVIEW (Agent Zero)                                        │
│      └── Quality check, verify implementation matches spec      │
└─────────────────────────────────────────────────────────────────┘
```

### Division of Labor

| Task | Agent Zero | Claude Code |
|------|:----------:|:-----------:|
| Research & Methodology | ✅ Primary | ❌ |
| Project Scoring | ✅ Primary | ❌ |
| Content Creation | ✅ Primary | Assist |
| Spec Creation | ✅ Primary | ❌ |
| Code Implementation | Assist | ✅ Primary |
| Frontend/Styling | ❌ | ✅ Primary |
| Git Operations | ✅ Can do | ✅ Primary |

### Key Files from Agent Zero

| File | Purpose |
|------|--------|
| `WORKFLOW.md` | Full collaboration guide |
| `specs/returns-score-implementation-spec.md` | Implementation spec for Returns Score |
| `content/project-returns-scores.json` | Returns Scores for all projects |
| `returns-score-methodology.md` | Full methodology (move to resources) |

---

## Dual-Score System

**OwnYourMind uses two independent scores:**

| Score | What It Measures | For Whom |
|-------|------------------|----------|
| **Freedom Score** | Decentralization (0-100) | Sovereignty seekers |
| **Returns Score** | Token value capture (0-100) | Investors, participants |

### Freedom Score (Existing)
- Infrastructure Decentralisation (0-20)
- Governance Decentralisation (0-20)
- Token Distribution Fairness (0-15)
- Censorship Resistance (0-15)
- Data Sovereignty (0-15)
- Open Source Transparency (0-15)

### Returns Score (NEW — Implemented via `specs/returns-score-implementation-spec.md`)
- Token Utility (0-20)
- Value Accrual (0-25)
- Supply Dynamics (0-20)
- Revenue Sustainability (0-20)
- Liquidity & Access (0-15)

### Quadrant Model

```
                HIGH RETURNS
                     │
       C             │           A
  (profitable but    │    (ideal, doesn't
   centralized)      │     exist yet)
                     │
  LOW FREEDOM ───────┼────────── HIGH FREEDOM
                     │
       D             │           B
  (avoid)            │    (sovereignty plays,
                     │     early-stage)
                LOW RETURNS
```

---

## Project Scoring Data

Returns Scores are stored in `content/project-returns-scores.json`.

Schema for each project:
```json
{
  "id": "morpheus",
  "ticker": "MOR",
  "returnsScoreRaw": 58,
  "returnsScore": 5.8,
  "grade": "D",
  "quadrant": "B",
  "breakdown": {
    "tokenUtility": 18,
    "valueAccrual": 14,
    "supplyDynamics": 16,
    "revenueSustainability": 6,
    "liquidityAccess": 4
  },
  "reasoning": { ... }
}
```

When updating project frontmatter, use:
```yaml
---
freedomScore: 8
returnsScore: 5.8
returnsScoreBreakdown:
  tokenUtility: 18
  valueAccrual: 14
  supplyDynamics: 16
  revenueSustainability: 6
  liquidityAccess: 4
---
```

---

## When Agent Zero Provides Specs

1. Read the spec file in `specs/`
2. Implement as described
3. Check `content/` for any data files needed
4. Commit with message referencing Agent Zero spec

---

*Updated March 2026 — Agent Zero Partnership Active*
