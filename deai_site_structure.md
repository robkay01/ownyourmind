# DeAI Site Structure — v2

Updated: 2026-03-09

## Editorial Position
**Freedom AND returns. Practitioner-led. Sovereignty-first. Hands-on.**

"The independent guide to participating in decentralised AI — why it matters for your freedom, why it makes financial sense, and how to actually do it."

---

## Primary Navigation (Top-Level Menu)

### 1. WHY DeAI
*The thesis. Why this matters beyond "number go up."*

7 articles published — section complete. Updated periodically as the space evolves.

- **The Case for Sovereign AI** — foundational thesis, sovereignty stack, why it matters. Target: "sovereign ai" (5,000 searches/month).
- **Centralised AI vs Decentralised AI** — honest comparison, where each wins, practical framework
- **What Counts as Decentralised AI?** — three-tier framework (Core DeAI / DeAI-adjacent / AI-washed). Target: "what is deai" (500 searches).
- **Privacy Is the Killer App for Decentralised AI** — private inference today vs the pitch deck version
- **How DeAI Actually Competes** — coordination, specialisation and economics, not ideology
- **Why Crypto + AI Converge** — Agent Zero partnership article on structural convergence
- **The Sovereignty Stack** — practical framework for assembling AI sovereignty infrastructure today

> **Content type:** Evergreen essays. This is the editorial foundation — the worldview that makes everything else coherent.

---

### 2. PROJECTS
*Independent, honest assessments of DeAI projects. Not shilling. Not "Top 10" listicles. Structured, practitioner-led reviews.*

34 projects reviewed across 6 categories. All have Freedom Scores (decentralisation, 0-100) and Returns Scores (value capture, 0-100) with full editorial breakdowns.

**Categories:**
- **Compute** (11) — Akash, Aethir, FLock, Flux, Gensyn, Golem, io.net, Nosana, Phala, Render, Theta Network
- **Data** (7) — Cookie DAO, Grass, Oasis Network, Ocean, OriginTrail, Sahara, Vana
- **Agent** (5) — ElizaOS, Fetch/ASI, Olas, Virtuals, Warden
- **Platform** (4) — Bittensor, Intelligent Internet, Morpheus, NEAR
- **Inference** (2) — Sentient, Venice
- **Other** (5) — Allora, IoTeX, ORA, peaq, OriginTrail

**Each project review follows a consistent framework:**
1. What it actually does (plain English, no marketing speak)
2. Value proposition — who is this for and why would they care?
3. Tokenomics breakdown — how the token works, emissions, staking, real economics
4. How to participate — staking, running nodes, building, or just using it
5. Honest assessment — what works today, what's hype, what's the risk
6. Freedom Score — how decentralised is it really?
7. Returns Score — how well does the token capture value?

**Also includes:**
- Interactive comparison tool at `/projects/compare/`
- Dashboard with live market data (CoinGecko) and on-chain metrics (direct RPC)
- Podcast episodes embedded on project pages (3 published)

> **Content type:** In-depth project profiles. Living documents updated via weekly automated metrics refresh + monthly/quarterly editorial review.

---

### 3. TOKENOMICS
*Dedicated section because token economics are the engine of DeAI and most people don't understand them.*

4 articles published:
- **How MOR Actually Works** — capital provider's breakdown, Power Factor, burn mechanics
- **MOR vs TAO vs FET: Token Models Compared** — three approaches side by side
- **RENDER vs AKT vs IO: The Revenue Question** — revenue model comparison
- **Burn-Mint Equilibrium: What Actually Changes for AKT Holders** — AEP-76 mechanics, Render comparison

> **Content type:** Analytical deep-dives. Some evergreen (frameworks), some event-timed (halvings, migrations). This is where the "returns" lens lives.

---

### 4. BUILD
*The hands-on, practical section. "How to actually do this." The section nobody else is creating.*

2 tutorials published. Keyword-validated pipeline of 6+ ready to batch-publish.

**Hardware & Setup:**
- Mac Studio / Mac Mini as a DeAI workstation — what you need, what it costs (PUBLISHED)
- Running local models — Ollama, LM Studio setup guides
- GPU considerations for local inference and compute contribution

**Walkthroughs:**
- Setting up Agent Zero with Venice + Morpheus APIs (PUBLISHED)
- How to Earn with Grass — passive income from bandwidth sharing
- How to Stake RENDER — complete staking guide
- Aethir Node Setup — how to earn with ATH
- How to Build an AI Agent with ElizaOS
- How to Create an AI Agent on Virtuals Protocol
- Flux GPU Mining guide

**What You Can Build:**
- Real examples of things built with DeAI tools
- Cost comparisons: DeAI tools vs centralised alternatives

Each tutorial links back to its project review. Each review's "How to participate" links forward to the tutorial.

> **Content type:** Tutorials, guides, documentation. Heavily practical. Screenshots, terminal output, real configs. Build tutorials are also the natural home for affiliate links (hardware, hosting, APIs).

---

### 5. RESOURCES
*Reference material. The stuff people come back for.*

4 pages published:
- **Freedom Score Methodology** — full rubric for the 6-dimension score
- **Returns Score Methodology** — full rubric for the 5-dimension score
- **The Quadrant Model** — how Freedom and Returns scores combine into A/B/C/D positioning
- **DeAI Project Directory** — all 34 projects with categories, scores, and review links

Planned:
- **DePIN Tokens Ranked by Freedom & Returns** — filterable directory for DePIN-specific tokens (50 searches/month)
- **Glossary** — DeAI-specific terminology explained in plain language
- **Recommended Tools & Software** — local AI tools (Ollama, LM Studio), wallets, node software, privacy tools. Natural home for affiliate links.
- **Community Directory** — Discords, Telegrams, forums worth joining per project
- **Recommended Reading** — best threads, papers, reports (0xSammy, 0xJeff, a16z, Messari)

> **Content type:** Reference pages. Maintained and updated. Low-effort to create but high-value for visitors and SEO.

---

## Secondary/Utility Navigation

- **About** — Who you are, why you're doing this, your background (20+ years in complex project delivery), your sovereignty thesis
- **Newsletter** — Email signup via Buttondown (pending approval)
- **Podcast** — Own Your Mind podcast. AI-generated with cloned voice. RSS feed + Spotify + Apple Podcasts.
- **Contact / Connect** — X (@0xBobski), email (bobski@ownyourmind.ai)

---

## Strategic Capabilities

Systems and strategies that emerged post-launch and now form core infrastructure.

### Podcast — Own Your Mind Podcast

AI-generated podcast using Rob's cloned voice (ElevenLabs) with Rachel McGrath co-host. Agent Zero scripts episodes from existing reviews. Turn-by-turn generation pipeline. All episodes include spoken disclaimer.

- Embedded on project pages via PodcastPlayer component
- RSS feed at `/podcast/feed.xml`
- Distributed via Spotify (direct upload) and Apple Podcasts (RSS)
- 4 episodes published (trailer + Bittensor, Morpheus, Akash)
- Extends reach to audio-first audience without additional research overhead

### SEO Keyword Strategy

Keyword-validated content pipeline based on Google Ads Keyword Planner data (174 keywords analysed, March 2026). Priorities driven by volume x competition x content relevance.

- Top opportunities: sovereign ai (5K), venice ai review (5K), peaq review (5K)
- Long-tail tutorial queries (50-500/month) with Low competition and transactional intent
- Existing page enrichments (H2s, FAQ schemas, keyword targeting) before new content
- Full strategy: `docs/seo-keyword-strategy.md`

### On-chain Metrics

Live token data queried directly from public EVM RPC endpoints — no API keys, no rate limits, no third-party dependencies.

- 12 EVM projects: Venice (supply + staking + DIEM), Morpheus (dual-chain), Virtuals, FLock, Golem, Autonolas, Fetch/ASI, Ocean, Phala, ORA, Vana, Sahara
- Displayed on project pages via OnchainMetrics component
- Market data (price, market cap, sparklines) from CoinGecko at build time for all 33 tokenised projects
- Command: `npm run refresh:onchain`

### Agent Zero Partnership

A0 handles research, scoring, and content creation. Claude Code handles implementation.

- A0 produces research JSONs, scores, editorial content, keyword research, implementation specs
- Claude Code builds features, modifies templates, commits and deploys
- Division keeps editorial judgement (A0) separate from technical execution (Claude Code)
- Workflow: Research → Spec → Implementation → Review

### Comparison Articles

Dual-score comparison articles targeting "vs" queries (bittensor vs render, render vs akash). The Freedom + Returns framework is a unique differentiator — no competitor does systematic DeAI comparisons with quantified scores.

- Interactive compare tool already live at `/projects/compare/`
- Standalone comparison articles planned for SEO (vs queries have Low competition)
- Podcast comparison episodes complement written content

---

## How This Differs from Existing Content

| | 0xSammy | 0xJeff | Own Your Mind |
|---|---------|--------|---------------|
| **Primary lens** | Market intelligence | Investment thesis | Practitioner + sovereignty |
| **Audience** | Investors/traders | Crypto-native investors | Builders + sovereignty-seekers |
| **Content type** | Weekly data roundup | Analytical essays + picks | Hands-on guides + honest reviews |
| **Unique value** | Breadth of coverage | Narrative positioning | "How to actually do it" + dual-score system |
| **What's missing** | Hands-on participation | Hardware/setup content | Market data breadth (defer to them) |
| **Revenue model** | Sponsorships + partnerships | Paid Substack tier | Affiliate + referrals (see below) |

---

## Revenue Model

**Principle:** Revenue must never touch editorial judgement. Scores, reviews, and assessments are independent. Revenue comes from practical content where product recommendations are natural and honest.

### Phase 1 — Now (foundation)

| Model | Where | Notes |
|---|---|---|
| **Affiliate links** | Build tutorials, Resources (Recommended Tools) | Hardware (Mac Studio, GPUs), VPNs, hosting. "Here's what I use" with affiliate link. Natural, honest, aligns with practitioner voice. |
| **Protocol referrals** | Build tutorials, project "How to participate" sections | Venice API referrals, Akash deployment referrals, staking platform referrals. Already using these — tutorials drive real referral value. |

### Phase 2 — With audience (6-12 months)

| Model | Where | Notes |
|---|---|---|
| **Newsletter sponsorships** | Buttondown newsletter | Once subscriber base reaches ~1,000+. Standard crypto newsletter model. |
| **Podcast sponsorships** | Podcast episodes | Pre-roll or mid-roll. Only DeAI-aligned sponsors. |

### Phase 3 — With scale

| Model | Where | Notes |
|---|---|---|
| **Premium research** | Gated tokenomics deep-dives, early project analysis | Requires proven audience demand. Substack-style paid tier or similar. |
| **Advisory/consulting** | Off-site | PM background + DeAI depth = advisory for projects. Not scalable but high per-engagement. Opportunistic. |

### Hard no

- **Sponsored reviews** — kills editorial credibility. The "honest assessment" positioning is the entire value prop.
- **Pay-to-list** — project directory must remain independent.
- **Token launches / shilling** — obvious.

---

## Resolved Decisions

These were open questions in v1, now resolved:

- **Site name:** Own Your Mind (ownyourmind.ai, ownyourmind.xyz redirects)
- **Tech stack:** Astro 5 + Tailwind v4 + Pagefind + Cloudflare Pages
- **Newsletter:** Buttondown (embedded signup, pending approval)
- **Design:** Deep teal (#0D9488) on charcoal (#0F1117), Space Grotesk headings, Inter body
- **X strategy:** @0xBobski — threads drive traffic to long-form site content. Site is the depth; X is the distribution.
- **Journal section:** Deprioritised. The practitioner voice comes through in reviews, tutorials, and podcast rather than a separate blog stream.
- **Dual-score system:** Freedom Score (decentralisation) + Returns Score (value capture) — not in original vision but became the site's analytical differentiator.
- **Podcast:** AI-generated with cloned voice (ElevenLabs). Complements reviews, not replaces them.
- **Agent Zero partnership:** A0 handles research, scoring, content creation. Claude Code handles implementation.

---

## Content Priority — Current Phase

Original "first 10 pieces" all published. Current priorities documented in `editorial-plan.md`:

1. **SEO quick wins** — optimise existing pages for high-volume queries (sovereign ai 5K, venice ai review 5K, peaq review 5K)
2. **Event-timed content** — Akash BME follow-up, Bittensor halving, ASI Alliance, dTAO
3. **Build tutorials** — batch of 5-6 keyword-validated tutorials, publish together
4. **Resources expansion** — glossary, recommended tools, community directory, reading list
5. **Comparison articles** — dual-score comparisons (Bittensor vs Render vs Akash)
6. **Revenue infrastructure** — affiliate links in Build tutorials, protocol referral setup
