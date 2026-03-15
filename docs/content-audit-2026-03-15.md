# Content Audit — 15 March 2026

## Data Verification Issues

### Cross-site repeated claims (HIGH PRIORITY)

| Claim | Articles | Concern | Action | Status |
|-------|----------|---------|--------|--------|
| Venice 1.3M users, 45B tokens/day | privacy-killer-app, sovereignty-stack, private-ai-inference | Self-reported, zero independent verification | Add "Venice reports" attribution | DONE |
| Akash "50-85% below AWS" | sovereign-ai, centralised-vs-decentralised, privacy-killer-app, sovereignty-stack, how-deai-competes | Self-reported benchmark | Add "Akash claims" or cite independent benchmark | DONE |
| Bittensor stake-weight correlation 0.50-0.80 | sovereignty-stack, crypto-ai-converge, mor-vs-tao-vs-fet | "Academic analysis" never cited | Softened language, removed uncited decimals | DONE |
| Bittensor $100M+ daily volume | sovereignty-stack, how-deai-competes, crypto-ai-converge | Exchange-reported, likely includes wash trading | Added "exchange-reported" + wash trade caveat | DONE |
| MOR ~$30K daily volume | how-mor-actually-works, mor-vs-tao-vs-fet | No source at all | Added "based on DEX data at time of writing" | DONE |
| io.net revenue ($5.7M Q1 vs $20M summary) | render-vs-akash-vs-ionet | Internal inconsistency | Reconciled as "annualised from Q1, self-reported" | DONE |

### Single-article high-priority concerns

| Article | Claim | Action | Status |
|---------|-------|--------|--------|
| how-mor-actually-works | "6,500+ capital providers, 320,000+ ETH" | Verify on-chain or attribute | DONE — attributed to dashboard |
| asi-alliance-merged-tokenomics | Full allocation table (9 categories) | Cite source | TODO — still uncited |
| asi-alliance-merged-tokenomics | "Full unlock extends to 2050" | Verify against contracts | TODO — still unverified |
| render-vs-akash-vs-ionet | Render burn figures, 69M frames | All Render Foundation self-reported — add attribution | DONE |
| render-vs-akash-vs-ionet | "OTOY treasury holds 23.3% with no vesting" | Cite source | TODO — still uncited |
| burn-mint-equilibrium | "2.1M AKT burned monthly" | Akash's own simulations — note as projection | DONE |
| what-counts-as-decentralised-ai | "40% of AI-first startups had zero ML code" | Identify and cite survey | DONE — noted as unverified methodology |
| render-vs-akash-vs-ionet | io.net case studies (Leonardo, Wondera, Berkeley) | All self-reported — add attribution | DONE |
| bittensor-halving | All staking data from taostats.io | Single source — note source | TODO — source not yet attributed |
| how-deai-actually-competes | Aethir $166.9M ARR, 430K GPUs | Self-reported — add attribution | DONE |

## Visual Enhancement Opportunities

### Top 10 by impact

| Priority | Article | Component | Description | Status |
|----------|---------|-----------|-------------|--------|
| 1 | render-vs-akash-vs-ionet | ComparisonTable + MetricCards | Anchor table + P/Revenue ratios (696x vs 32x vs 1.9x) | DONE |
| 2 | burn-mint-equilibrium | VerificationFunnel + MetricCards | BME waterfall + staker metrics | DONE |
| 3 | how-mor-actually-works | AllocationBar + ComparisonTable | 4-way emission split + Power Factor table | DONE |
| 4 | asi-alliance-merged-tokenomics | AllocationBar + ComparisonTable | 9-category allocation + conversion ratios | DONE |
| 5 | private-ai-inference | ComparisonTable | 5-level privacy table + project mapping | DONE |
| 6 | mor-vs-tao-vs-fet | AllocationBar + ComparisonTable | Insider allocation (3x bars) + 3-token comparison | DONE |
| 7 | bittensor-halving | ComparisonTable + MetricCards + AllocationBar | Bitcoin halving returns + staking split (72/28) | DONE |
| 8 | the-sovereignty-stack | MetricCards + ComparisonTable | 10+ tables/diagrams — DEFERRED (needs custom SovereigntySpectrum component) | TODO |
| 9 | how-deai-actually-competes | ComparisonTable + MetricCards | 4 tables + cost stats (3%/90%/350x) | DONE |
| 10 | privacy-is-the-killer-app | ComparisonTable + MetricCards | TEE/FHE/MPC table + Venice/Phala metrics | DONE |

### Additional opportunities completed

- bittensor-dtao-subnet-economics: AllocationBar for emission split, MetricCards for network stats — DONE

### Remaining (lower priority)

- the-case-for-sovereign-ai: ComparisonTable for sovereign vs centralised, MetricCards for costs
- centralised-vs-decentralised-ai: ComparisonTable for practical framework
- what-counts-as-decentralised-ai: MetricCards for sector stats
- the-sovereignty-stack: needs custom SovereigntySpectrum component for 4 ASCII spectrum diagrams
