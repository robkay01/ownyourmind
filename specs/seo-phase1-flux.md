# SEO Phase 1, Task 4: Flux Review Optimisation

## Target
`/projects/flux/` (file: `src/content/projects/flux.md`)

## Why
- "flux review" — 500 monthly searches, Medium competition
- "flux gpu mining" — 50 monthly searches, Low competition

The page exists but title doesn't include "Review" and there's no GPU mining content despite this being a major search intent for Flux users.

## Current state
- **Title:** "Flux" — bare, no "Review" keyword
- **Description:** "Flux review — fair-launched decentralised cloud with ~8,000 nodes across 67 countries. GPU mining, FluxCloud, FluxEdge. Freedom Score, Returns Score and honest assessment." (strong — mentions GPU mining)
- **H2s:** What it does → Value proposition → Tokenomics → How to participate → Honest assessment
- **Scores as H3 (not H2):** Freedom 80/100 (B), Returns 57/100 (D) — needs fixing to H2
- **Word count:** ~1,903 words
- **Key topics:** Fair launch (no premine, no ICO), 8,000 nodes, 67 countries, FluxCloud, FluxEdge, Zelcore wallet, parallel mining

## What A0 needs to produce

### 1. Title update
Change from "Flux" to "Flux Review"

### 2. New H2 section: "Flux GPU mining: how it works and what you can earn" (~500-600 words)
Insert after "## How to participate" (or expand that section)

Cover:
- What Flux mining actually is: PoW component (parallel mineable with other PoW chains) + FluxNode requirements
- Three FluxNode tiers: Cumulus (1,000 FLUX collateral), Nimbus (12,500 FLUX), Stratus (40,000 FLUX) — hardware requirements for each
- What you earn: block rewards split between miners (50%) and FluxNode operators (50%)
- GPU requirements: which GPUs work, minimum specs, power consumption considerations
- Parallel mining advantage: mine FLUX alongside other PoW chains simultaneously
- Current economics: approximate daily earnings per tier (research current figures)
- Honest caveat: high collateral requirements for upper tiers, FLUX price volatility affects profitability, electricity costs matter
- Compare briefly with Render (no mining, BME model) and Akash (no mining, marketplace model) — Flux is unique in keeping PoW
- Link forward to future Build tutorial when it exists

### 3. Existing "## How to participate" enrichment (~200 words)
Add to existing section:
- FluxOS dashboard link and what it shows
- Zelcore wallet setup (brief mention, link to official guide)
- FluxEdge for GPU compute marketplace (the DePIN/AI angle)

### 4. Score headings fix
Current: `### Freedom Score: 80/100 (B)` and `### Returns Score: 57/100 (D)` (H3)
Change to: `## Freedom Score: 80/100` and `## Returns Score: 57/100` (H2)

### Total new content: ~700-800 words

## Constraints

- UK English
- Do NOT change scores — Freedom 80/100, Returns 57/100 stay as-is
- Do NOT rewrite existing sections
- Write in Rob's voice: practical, economics-focused ("Before you buy a GPU rig, work the numbers backwards from current FLUX price and your electricity rate")
- GPU mining content must be current and accurate — verify FluxNode tiers and collateral requirements against official docs
- Flux's fair launch (no premine, no ICO) is a key differentiator — reinforce this in the mining section
- Be honest about profitability challenges

## Output format

Provide new sections as markdown blocks with insertion points:
```
<!-- TITLE CHANGE -->
Old: "Flux"
New: "Flux Review"

<!-- INSERT AFTER: ## How to participate [existing section content] -->
[GPU mining section]

<!-- APPEND TO: ## How to participate -->
[enrichment content]

<!-- HEADING FIX -->
Old: ### Freedom Score: 80/100 (B)
New: ## Freedom Score: 80/100

Old: ### Returns Score: 57/100 (D)
New: ## Returns Score: 57/100
```
