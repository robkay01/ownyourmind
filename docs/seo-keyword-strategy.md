# SEO Keyword Strategy — Own Your Mind

Based on Agent Zero keyword research (March 2026). 174 keywords analysed via Google Ads Keyword Planner. 82 with measurable volume, 85 below threshold (<50/month).

Raw data: `analytics/keyword-analysis-full.csv`

Updated: 2026-03-09

---

## Strategy Summary

Three phases, executed in order of effort-to-impact ratio:

| Phase | What | Status |
|-------|------|--------|
| **A: Existing Content Optimisation** | Meta descriptions, title tags, heading tweaks | **DONE** (committed 2026-03-09) |
| **B: Enrich Existing Pages** | Add keyword-targeted sections to pages we already have | Not started |
| **C: New Content** | Dedicated tutorial pages (Build section), new resource pages | Not started |

---

## Phase A: Existing Content Optimisation — DONE

Committed 2026-03-09 (`feat: SEO optimisations — project title tags, meta descriptions, Why DeAI titles`).

Changes made:
- Project `<title>` tags now append "Review" via `seoTitle` prop in template chain (H1/dashboard/compare unaffected)
- Meta descriptions rewritten on 12 project pages with target keywords
- Why DeAI titles updated: "Sovereign AI: What It Is and Why It Matters", "What Is DeAI? What Counts as Decentralised AI"

---

## Phase B: Enrich Existing Pages

Add keyword-targeted content to pages that already exist. No new URLs needed.

### High-value enrichments (500+ monthly searches)

| Page | Target Query | Volume | Action |
|------|-------------|--------|--------|
| `/projects/venice/` | venice ai uncensored, venice ai private ai | 500+50 | Add "uncensored" and "private AI" keyword coverage to existing sections, add tutorial subsection |
| `/projects/bittensor/` | bittensor halving | 500 | Add halving section with TAO holder impact analysis |
| `/why-deai/the-case-for-sovereign-ai/` | sovereign ai, what is sovereign ai | 5,000+500 | Title already optimised; add FAQ schema markup |
| `/why-deai/what-counts-as-decentralised-ai/` | what is deai | 500 | Title already optimised; add FAQ schema markup |

### Long-tail enrichments (50 monthly searches)

| Page | Target Query | Action |
|------|-------------|--------|
| `/projects/morpheus/` | how does morpheus work | Verify H2 matches query phrasing |
| `/projects/io-net/` | io net earnings | Add earnings expectations to participation section |
| `/projects/compare/` | bittensor vs render, render vs akash, akash vs render | Add static SEO intro + popular comparison links above tool |

### Compare page optimisation

The compare tool is client-side (empty state on crawl). To capture "vs" queries:
1. Add static H1 "Compare DeAI Projects Side-by-Side" with keyword-rich intro paragraph
2. Add "Popular comparisons" links with pre-populated URL params (e.g. `/projects/compare/?projects=bittensor,render`)
3. Consider FAQ schema for common comparison queries

Realistic expectation: 50 searches/month per "vs" query is long-tail. Worth the lightweight optimisation but not worth dedicated landing pages.

---

## Phase C: New Content

### Build Section — Tutorial Pages (Option B)

Tutorials live as dedicated pages in `/build/`, not as sections within project reviews. Rationale:
- Project reviews stay evergreen; tutorials get outdated faster and can be updated independently
- Dedicated pages target "how to" keywords directly in URL slug and title tag
- Internal linking from project pages → tutorials strengthens both pages

| Priority | Article | Target Query | Volume | Effort |
|----------|---------|-------------|--------|--------|
| 1 | "How to Earn with Grass: Passive Income from Bandwidth" | how to earn grass, grass bandwidth sharing | 50+50 | Medium |
| 2 | "How to Stake RENDER: Complete Guide" | render staking, render gpu mining | 50+50 | Medium |
| 3 | "Aethir Node Setup: How to Earn with ATH" | aethir node | 50 | Medium |
| 4 | "How to Build an AI Agent with ElizaOS" | elizaos ai agent | 50 | Medium |
| 5 | "Virtuals Protocol: How to Create an AI Agent" | virtuals protocol ai agent | 50 | Medium |

Each tutorial should link back to the corresponding project review. Each project review's "How to participate" section should link forward to the tutorial.

### Resources — New Pages

| Priority | Article | Target Query | Volume |
|----------|---------|-------------|--------|
| 1 | "DePIN Tokens Ranked by Freedom & Returns" | depin tokens list | 50 |

### Tokenomics — Event-Timed

| Priority | Article | Target Query | Volume | Timing |
|----------|---------|-------------|--------|--------|
| 1 | "Bittensor Halving 2026: What TAO Holders Need to Know" | bittensor halving, bittensor halving 2025 | 500+50 | Before halving event |

---

## Keywords to Skip

High volume but dominated by authority sites (CoinGecko, Forbes, CoinMarketCap):

| Query | Volume | Competition | Why Skip |
|-------|--------|-------------|----------|
| ai crypto coins | 5,000 | Medium/High SERP | CoinGecko, Forbes dominate |
| best ai crypto to buy | 500 | High SERP | Listicle farms, no differentiation |
| gpu mining crypto | 500 | High SERP | General mining guides, not DeAI-specific |

Revisit if OYM domain authority grows significantly.

---

## Volume Distribution

| Range | Keywords | Approach |
|-------|----------|----------|
| 5,000+ | 4 (sovereign ai, venice ai review, peaq review, ai crypto coins) | Top priority — optimise or publish immediately |
| 500–4,999 | 6 | Medium priority — good volume, moderate competition |
| 50–499 | 72 | Long-tail — build systematically via tutorials and enrichments |
| <50 | 85 | Very long-tail — capture incrementally, don't target specifically |

---

## Key Insight

86% of keywords have Low ad competition. OYM's practitioner depth and dual-score system are genuine differentiators for long-tail queries. The strategy is to own the long-tail with quality, not compete on head terms with volume.
