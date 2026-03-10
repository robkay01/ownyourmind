# SEO Phase 1, Task 5: Morpheus Review Expansion

## Target
`/projects/morpheus/` (file: `src/content/projects/morpheus.md`)

## Why
- "morpheus review" — 500 monthly searches, Low competition
- "how does morpheus work" — 50 monthly searches, Low competition

The page exists with good content but the title lacks "Review" and there's no standalone "How it works" section — the mechanics are spread across multiple sections.

## Current state
- **Title:** "Morpheus" — bare, no "Review" keyword
- **Description:** "Morpheus review — decentralised AI agent network with fair-launch MOR token. How Morpheus works, staking guide, Power Factor, Freedom Score and honest assessment." (strong — already mentions key queries)
- **H2s:** What it does → Value proposition → Tokenomics → How to participate → Honest assessment → Freedom score: 76/100 → Returns score: 57/100
- **Word count:** ~2,047 words
- **Key topics:** Fair launch, four contributor types (capital, compute, code, community), stETH staking, Power Factor, Lumerin Node, MOR emissions

## What A0 needs to produce

### 1. Title update
Change from "Morpheus" to "Morpheus Review"

### 2. New H2 section: "How Morpheus works: the four-provider model" (~400-500 words)
Insert after "## What it does"

This section consolidates Morpheus' mechanics into a clear, standalone explanation that targets "how does morpheus work":

Cover:
- The core concept: a decentralised marketplace connecting AI users with compute, code, and capital providers
- Four provider types explained clearly:
  - **Capital providers** — stake stETH, earn MOR. The yield from stETH funds network operations. This is the primary participation method today.
  - **Compute providers** — run Lumerin Node, serve AI inference. Earn MOR proportional to compute delivered.
  - **Code providers** — contribute to Morpheus codebase (smart agents, core protocol). Earn MOR based on contribution weight.
  - **Community providers** — front-ends, tools, ecosystem development. Earn MOR from community allocation.
- Smart Agent Router: how user requests get matched to compute providers
- MOR token flow: emissions split across the four provider types (24% each to capital/compute/code, 4% community + protection fund)
- Why this model is different: no company runs Morpheus. The smart contracts coordinate everything. No CEO, no office, no employees.
- Power Factor: how long-term stakers earn disproportionate rewards (brief, link to tokenomics article for deep-dive)

### 3. New H2 section: "Staking MOR: step-by-step guide" (~300-400 words)
Insert after "## How to participate" (or significantly expand that section)

Cover:
- What you need: stETH (stake ETH via Lido first if needed), MetaMask or compatible wallet, Arbitrum network
- Step-by-step:
  1. Get stETH (buy or stake ETH via Lido)
  2. Bridge stETH to Arbitrum (official bridge or third-party)
  3. Go to Morpheus staking contract (link)
  4. Deposit stETH — your yield goes to the protocol, you earn MOR
  5. Understand Power Factor: longer stake = higher multiplier (up to 10.7x at ~6 years)
- Current economics: approximate MOR earned per stETH per day (research current figures)
- Withdrawal: can unstake anytime but Power Factor resets
- Honest caveat: MOR price volatility, smart contract risk, opportunity cost of stETH yield
- Link to "How MOR Actually Works" tokenomics article for full mechanics
- Rob's experience: "I've been a capital provider since [date]. Here's what the actual returns look like..."

### Total new content: ~700-900 words

## Constraints

- UK English
- Do NOT change scores — Freedom 76/100, Returns 57/100 stay as-is
- Do NOT rewrite existing sections — add new ones
- Write in Rob's voice: practitioner who is actually staking MOR, not someone describing it theoretically
- Staking guide must be accurate and current — verify contract addresses, Power Factor multipliers, and emission rates against official Morpheus docs
- Reference the Morpheus tokenomics article where appropriate (`/tokenomics/how-mor-actually-works/`)
- The page already mentions Power Factor — don't duplicate, expand and cross-link

## Output format

Provide new sections as markdown blocks with insertion points:
```
<!-- TITLE CHANGE -->
Old: "Morpheus"
New: "Morpheus Review"

<!-- INSERT AFTER: ## What it does [existing section content] -->
[How Morpheus works section]

<!-- INSERT AFTER: ## How to participate [existing section content] -->
[Staking guide section]
```
