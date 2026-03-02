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
