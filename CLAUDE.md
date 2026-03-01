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
npm run dev        # Development server
npm run build      # Production build
npm run preview    # Preview production build
npm run check      # Astro type checking
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

## Key Reference Documents

- `own-your-mind-claude-code-brief.md` — Complete build specification with all decisions
- `deai_site_structure.md` — Content strategy, editorial guidelines, competitive positioning
