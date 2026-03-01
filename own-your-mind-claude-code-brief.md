# Own Your Mind — Claude Code Build Brief

## What This Is

Build brief for ownyourmind.ai — an independent, practitioner-led content platform covering decentralised AI. This document contains every decision made during planning so Claude Code can build without ambiguity.

---

## Brand

- **Name:** Own Your Mind
- **Primary domain:** ownyourmind.ai
- **Secondary domain:** ownyourmind.xyz
- **X brand account:** @ownyourmindai
- **X personal account:** @0xBobski
- **Tagline:** "The independent guide to participating in decentralised AI — why it matters for your freedom, why it makes financial sense, and how to actually do it."
- **Editorial position:** Freedom AND returns. Practitioner-led. Sovereignty-first. Hands-on.

---

## Tech Stack

| Component | Choice | Notes |
|-----------|--------|-------|
| **Framework** | Astro | Static site generator with content collections |
| **Content format** | Markdown | All content authored in .md files |
| **Styling** | Tailwind CSS | Utility-first, matches existing 4ORBS approach |
| **Hosting** | Cloudflare Pages | Already in use for other sites (free tier) |
| **Deployment** | Git push → auto-deploy | Standard Cloudflare Pages workflow |
| **Newsletter** | Buttondown | Embed signup form; free tier to start |
| **CMS** | None (for now) | Pure markdown in editor. Can add Tina/Decap later |
| **Search** | Built-in (Pagefind or similar) | Lightweight client-side search |

---

## Design Direction

### Base: Fork the 4ORBS (4orbs.com) design language

The existing 4ORBS Astro site provides the structural foundation. Adapt it as follows:

### Keep from 4ORBS:
- Dark theme (deep charcoal background, not pure black)
- Clean navigation with section dropdowns
- Content-forward layout — no gratuitous animations
- Card-based section overview on homepage
- Search functionality (Ctrl+K pattern)
- Footer with site map
- Mobile-responsive navigation

### Change for Own Your Mind:
- **Typography:** Warmer, more editorial. Distinctive heading font (suggest: Inter, Space Grotesk, or similar modern sans-serif for body; something with more character for headings). The site should feel like reading a quality publication, not browsing a database.
- **Accent colour:** Single bold accent colour — electric violet, deep teal, or amber. This becomes the brand colour used for links, highlights, buttons, and key UI elements. Pick one and use it consistently.
- **Homepage hero:** Lead with the thesis, not stats. "Own Your Mind" as the headline statement, the tagline underneath, and clear entry points into the six content sections.
- **Tone:** Less clinical/research-base, more editorial/magazine. The design should say "independent voice" not "knowledge database."
- **Simplify:** 4ORBS has complex interconnected data (graphs, clusters, timelines). Own Your Mind is simpler — articles, guides, and a journal. Standard blog/article layouts with good typography.
- **Logo:** Text-based initially. "OWN YOUR MIND" in the heading font. Can add a mark later.

### Design Do-Nots:
- No 3D graphics or animated gradients
- No neon cyberpunk aesthetic
- No protocol-marketing-site energy
- No generic Substack look
- No emojis in navigation or headings

---

## Site Structure

### Primary Navigation (6 sections)

#### 1. WHY DeAI
The editorial thesis. Evergreen essays.

Content collection: `why-deai`
Layout: Long-form article pages
Planned content:
- The Case for Sovereign AI (manifesto)
- Centralised AI vs Decentralised AI
- The Sovereignty Stack
- Why Crypto + AI Converge

#### 2. PROJECTS
Independent project assessments with consistent review framework.

Content collection: `projects`
Layout: Project profile template with structured sections
Frontmatter should support: category, token, status, freedom-score, last-updated
Categories: Compute & Infrastructure, Intelligence Networks, Agent Platforms, Data & Privacy, Local & Personal AI, Emerging
Planned content: Morpheus deep-dive, Bittensor overview (first two)

#### 3. TOKENOMICS
Analytical deep-dives on token economics.

Content collection: `tokenomics`
Layout: Article pages, potentially with data tables/comparison layouts
Planned content:
- How MOR Actually Works
- MOR vs TAO vs FET: Token Models Compared
- Staking Economics
- Emissions & Supply Schedules

#### 4. BUILD
Hands-on tutorials and guides. The practical section.

Content collection: `build`
Layout: Tutorial/guide template (support for code blocks, terminal output, screenshots)
Sub-categories: Hardware & Setup, Walkthroughs, What You Can Build
Planned content:
- Setting Up a Mac Studio for Decentralised AI
- Agent Zero + Venice + Morpheus: A Walkthrough

#### 5. JOURNAL
Build-in-public blog. Chronological, personal voice.

Content collection: `journal`
Layout: Standard blog post with date prominence
Sorted: Reverse chronological (newest first)
Planned content:
- Week 1: What I'm Running and Why
- What I've Learned After 30 Days

#### 6. RESOURCES
Reference material. Tables, directories, glossary.

Content collection: `resources` (or static pages)
Layout: Reference pages — tables, lists, link collections
Sub-pages:
- Project Directory (comparison table)
- Glossary
- Recommended Tools & Software
- Community Links
- Recommended Reading

### Secondary/Utility Pages

- **About** — Author background, sovereignty thesis, why this site exists
- **Newsletter** — Dedicated signup page with Buttondown embed
- **Contact** — X handle (@ownyourmindai, @0xBobski), email

---

## Page Templates Needed

1. **Homepage** — Hero statement, six section entry cards, latest journal entry, newsletter signup
2. **Section index** — List of articles within a section (e.g., /why-deai/, /projects/)
3. **Article/essay** — Long-form content page with good typography, table of contents optional
4. **Project profile** — Structured review template (the six-point framework)
5. **Tutorial/guide** — Code-block-friendly, step-by-step layout
6. **Journal post** — Blog post with prominent date
7. **Reference page** — Tables, directories, link collections
8. **About page** — Single page, personal
9. **Newsletter page** — Buttondown signup embed

---

## Content Architecture (Astro Content Collections)

```
src/content/
├── why-deai/          # Evergreen thesis essays
├── projects/          # Project profiles/reviews
├── tokenomics/        # Token analysis articles
├── build/             # Tutorials and guides
├── journal/           # Chronological blog posts
└── resources/         # Reference pages
```

### Frontmatter Schema (examples)

**Article (why-deai, tokenomics):**
```yaml
title: ""
description: ""
publishDate: 2026-03-01
updatedDate: 2026-03-15   # for living documents
draft: false
```

**Project:**
```yaml
title: ""
description: ""
category: "compute-infrastructure"  # enum
token: "MOR"
status: "active"                    # active, beta, emerging, defunct
freedomScore: 8                     # 1-10
publishDate: 2026-03-01
updatedDate: 2026-03-15
draft: false
```

**Journal:**
```yaml
title: ""
description: ""
publishDate: 2026-03-01
tags: ["morpheus", "hardware", "experiments"]
draft: false
```

**Build/Tutorial:**
```yaml
title: ""
description: ""
publishDate: 2026-03-01
difficulty: "intermediate"   # beginner, intermediate, advanced
category: "walkthrough"      # hardware, walkthrough, examples
draft: false
```

---

## Starter Content

Include placeholder/sample content so the site isn't empty at first build:

1. **Homepage** with real copy (hero, section descriptions)
2. One sample article in each section (can be lorem ipsum body but real titles from the content plan)
3. **About page** with placeholder bio referencing 20+ years in complex project delivery
4. Newsletter signup page with Buttondown form placeholder

---

## Newsletter Integration

- **Provider:** Buttondown (buttondown.com)
- **Integration:** Embed signup form on homepage (footer or sidebar), dedicated /newsletter page
- **Styling:** Match the site's dark theme — override Buttondown's default form styles

---

## SEO & Meta

- Open Graph tags on all pages
- Twitter/X cards (summary_large_image)
- Site title format: "Page Title — Own Your Mind"
- Default meta description from page frontmatter
- Sitemap generation (Astro built-in)
- RSS feed for Journal section (and optionally all sections)

---

## Build Priority

### Phase 1 — Ship the shell
- [ ] Astro project scaffolded with Tailwind
- [ ] Dark theme implemented (forked from 4ORBS aesthetic)
- [ ] Navigation with six sections + utility pages
- [ ] Homepage with hero, section cards, newsletter signup
- [ ] All page templates built (article, project, tutorial, journal, reference, about)
- [ ] Content collections configured with schemas
- [ ] Placeholder content in each section
- [ ] Search (Pagefind)
- [ ] Mobile responsive
- [ ] Deploy to Cloudflare Pages

### Phase 2 — Content & polish
- [ ] Write and publish first 3-5 real articles
- [ ] Connect Buttondown newsletter
- [ ] RSS feed
- [ ] SEO meta tags and Open Graph
- [ ] Custom 404 page
- [ ] Refine typography and spacing

### Phase 3 — Grow
- [ ] Connect custom domain (ownyourmind.ai)
- [ ] Set up @ownyourmindai X presence
- [ ] Begin content schedule
- [ ] Add analytics (Cloudflare Web Analytics — free, privacy-respecting)

---

## Reference

- **Existing site to fork design from:** https://4orbs.com
- **Site structure planning doc:** deai_site_structure.md (in project files)
- **Competitors for positioning context:** 0xSammy (0xsammy.com, Substack), 0xJeff (defi0xjeff.substack.com)

---

## Open Decisions (Can Be Made During Build)

- Exact accent colour (suggest testing electric violet, deep teal, and amber against dark background)
- Heading font choice (suggest exploring: Space Grotesk, Clash Display, General Sans, or Cabinet Grotesk)
- Whether to include light/dark toggle or commit to dark-only
- Search implementation (Pagefind recommended for static Astro sites)
