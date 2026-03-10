# SEO Phase 1, Task 3: peaq Review Optimisation

## Target
`/projects/peaq/` (file: `src/content/projects/peaq.md`)

## Why
"peaq review" has 5,000 monthly searches with Low competition. This is the third-highest volume opportunity. The page exists but doesn't target "review" in the title or H2s, and undersells peaq's DePIN positioning which is the primary search intent.

## Current state
- **Title:** "peaq" — bare, no "Review" keyword
- **Description:** "peaq review — DePIN Layer-1 for the Machine Economy. 60+ DePINs, enterprise partners (Bosch, Airbus, NTT), but $163K revenue. Freedom Score, Returns Score and honest assessment." (strong — already mentions "review")
- **H2s:** What it does → Value proposition → Tokenomics → How to participate → Honest assessment
- **Scores as H3 (not H2):** Freedom 50/100 (D), Returns 47/100 (D) — inconsistent with other pages that use H2
- **Word count:** ~1,905 words
- **Key topics:** Machine Economy L1, 60+ DePINs, Bosch/Airbus/NTT partnerships, $163K revenue gap

## What A0 needs to produce

### 1. Title update
Change from "peaq" to "peaq Review"

### 2. New H2 section: "peaq's DePIN positioning: why 60+ projects chose this chain" (~400-500 words)
Insert after "## Value proposition"

Cover:
- What makes peaq different from generic L1s: purpose-built for machine identity and machine-to-machine payments
- The DePIN thesis: why machines need their own identity layer (not just wallets)
- peaq IDs (self-sovereign machine identity), peaq Pay (M2M micropayments), peaq Control (machine governance)
- Why 60+ DePINs chose peaq over Solana/Base/Ethereum: specific technical advantages (Substrate framework, low fees, machine-optimised)
- Enterprise validation: what Bosch, Airbus, NTT partnerships actually mean (PoCs? production? integration partnerships?)
- Honest caveat: partnerships announced ≠ production usage. $163K revenue is the reality check.

### 3. New H2 section: "How peaq compares to other DePIN infrastructure" (~300-400 words)
Insert after the DePIN positioning section

Cover:
- peaq vs IoTeX (both DePIN-focused, different approaches)
- peaq vs Solana (where most DePINs deploy — why some chose peaq instead)
- peaq vs Polkadot ecosystem (peaq is a Polkadot parachain — what does that mean?)
- Comparison framework: specialisation vs generalisation. peaq bet on machine-specific infrastructure. Is that the right bet?
- Reference the A0 keyword data: "depin tokens list" has search volume — link to future DePIN ranked resource page

### 4. Score headings fix
Current: `### Freedom Score: 50/100 (D)` and `### Returns Score: 47/100 (D)` (H3)
Change to: `## Freedom Score: 50/100` and `## Returns Score: 47/100` (H2) — consistent with Venice, Morpheus, Render, Grass

### Total new content: ~700-900 words

## Constraints

- UK English
- Do NOT change scores — Freedom 50/100, Returns 47/100 stay as-is
- Do NOT rewrite existing sections
- Write in Rob's voice: practitioner, construction PM lens ("$163K revenue on a chain with Bosch partnerships — that's a pipeline problem, not a technology problem")
- Be honest about the gap between partnerships and revenue
- DePIN comparisons should be factual, not favour peaq
- peaq is always lowercase (brand convention)

## Output format

Provide new sections as markdown blocks with insertion points:
```
<!-- TITLE CHANGE -->
Old: "peaq"
New: "peaq Review"

<!-- INSERT AFTER: ## Value proposition [existing section content] -->
[DePIN positioning section]

<!-- INSERT AFTER: [DePIN positioning section] -->
[comparison section]

<!-- HEADING FIX -->
Old: ### Freedom Score: 50/100 (D)
New: ## Freedom Score: 50/100

Old: ### Returns Score: 47/100 (D)
New: ## Returns Score: 47/100
```
