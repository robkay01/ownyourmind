# Review Backlog

Research findings and score adjustments deferred to the next review cycle.
Processed during monthly editorial reviews or quarterly deep reviews.
See `docs/review-schedule.json` for next due dates.

---

## Morpheus (MOR)

**Date discovered:** 2026-03-07

### Freedom Score (current: 76/100)

- **Open Source & Transparency (12 → 13?):** Code4rena completed a formal security audit in August 2025 covering 6 core contracts (ChainLinkDataConsumer, DepositPool, Distributor, RewardPool, L1SenderV2, L2TokenReceiverV2). Found 4 medium-severity issues. Previous score deducted for "no formal third-party security audit." Audit now exists, though compute/agent contracts on Base remain unaudited. If bumped: total 76 → 77, grade stays B.

### Returns Score (current: 57/100)

- **Supply Dynamics (16 → 17?):** Power Factor mechanic (MRC42) lets participants voluntarily lock MOR rewards for up to 6 years (~10.7x multiplier). This materially reduces sell pressure and was not accounted for in the original scoring. If bumped: total 57 → 58, grade stays C.

- **Token Utility (18 → 19?):** Power Factor adds another utility layer beyond staking/compute/agents. Marginal — 18/20 already reflects strong multi-sided utility. Probably leave as-is.

- **Revenue Sustainability (8 → 10?):** stETH yield from capital providers is verifiable on-chain external revenue funding POL daily. Compared to Venice (12/25) which has undisclosed revenue and qualitative claims, Morpheus's 8/25 looks underscored. The stETH mechanism is structurally sound and creates a rising floor independent of speculation. Compute revenue is still negligible, which caps the upside, but the 4-point gap vs Venice is hard to justify. If bumped to 10: total 57 → 59, grade stays C. Deferred because podcast episodes 001-003 reference current scores.

---

## Akash Network (AKT)

**Date discovered:** 2026-03-07

### Returns Score (current: 62/100)

**Trigger:** BME (Burn-Mint Equilibrium) going to on-chain vote, upgrade scheduled for March 23rd 2026 at 14:00 UTC. Review once live and confirmed on-chain.

- **Value Accrual (10 → 14–15?):** Editorial currently says "BME activation would change this equation, but it has been 'coming soon' for a while." Once live, AKT spent on compute is burned directly – a functioning value accrual mechanism tied to $3.15M real revenue. Also introduces WASM smart contracts. Significant upgrade from "near zero real yield."

- **Supply Dynamics (12 → 14?):** Editorial says "the token is straightforwardly inflationary" and BME is "code-complete but not yet active." Activation changes this from narrative to reality. Team estimates inflation drops from 8% to ~5.2% at current usage – still inflationary but materially better.

- **Estimated total impact:** 62 → 68–70 (C → C+/B-). Review after March 23rd activation is confirmed.

### Editorial updates required on activation

- Tokenomics section: "Activation target is early-mid 2026" → update with actual date
- Value Accrual evidence: remove "BME approved but not yet active"
- Supply Dynamics evidence: remove "BME burn approved but not active"
- maxSupply field: remove "BME burn approved but not yet active"
- render-vs-akash-vs-ionet.md: update comparison table ("Not yet" for AKT burn → active)
- mor-vs-tao-vs-fet.md: no impact (doesn't cover Akash)

---

### Lumerin dependency check (2026-03-12)

- **Question:** Has Morpheus internalised proxy router development or does it still depend on Lumerin's team for maintenance?
- **Context:** Lumerin (LMR) token has effectively flatlined — $362K market cap, $944 daily volume, -99.87% from ATH, docs site down. Morpheus compute providers run the "Lumerin Node" proxy router software. The code is MIT-licensed and forkable, so the dependency is on the software not the token. But if Lumerin's team stops maintaining the router, Morpheus would need to own that codebase.
- **Update (2026-03-12):** Found `scrtlabs/Morpheus-Lumerin-Node` repo — 1,765 commits, 233 releases, last commit Mar 11 2026, MIT-licensed. This is an integrated Morpheus-Lumerin node maintained under Secret Labs' GitHub org. Active development, not dependent on Lumerin's own repos. Significantly reduces the dependency risk.
- **Action:** During next quarterly review, confirm this repo remains actively maintained and verify the relationship between `Lumerin-protocol/proxy-router` and `scrtlabs/Morpheus-Lumerin-Node` (fork, rewrite, or shared codebase). No score impact expected.

---

---

## Full Staleness Audit (2026-03-12)

Automated audit of all 33 projects (excluding NEAR, already fixed) for events missed during initial research week. Root cause: no "Recent Events Sweep" step in research plan. Step 2 now added.

### CRITICAL — Score-affecting, factually wrong (9 projects)

**1. Nillion (NIL)**
- Market maker dumped 65M tokens (Nov 2025), price crashed 50%
- Buyback programme launched (only 1.1M of 65M repurchased by Nov 28)
- nilChain (Cosmos) sunsetting Feb/Mar 2026
- Migrating to Ethereum ERC-20 — entire chain description becoming obsolete
- Nillion 2.0: transition to permissionless network
- All participation instructions (Cosmos wallet, Keplr, 14-day unbonding) will be wrong
- Affects: Freedom Score (chain architecture), Returns Score (liquidity, trust)

**2. Oasis Network (ROSE)**
- TVL jumped from $288K to 12M+ ROSE via liquid staking (Accumulated Finance)
- ROFL mainnet launched July 2, 2025 — review treats it as aspirational
- Franklin Templeton + Zodia pilot using BENJI as collateral
- Our "$288K TVL — most damning metric" critique is fundamentally wrong
- Revenue Sustainability (3/25) likely needs upward revision
- Affects: Returns Score (revenue sustainability, value accrual)

**3. Virtuals Protocol (VIRTUAL)**
- Expanded to Solana + Ronin — review says "Base (Ethereum L2)" only, frontmatter chain field wrong
- Buyback-and-burn programme launched (13M VIRTUAL, $48M) — review explicitly criticises absence of deflationary mechanisms
- Unicorn Conviction-Based Launch System replaced points-based model
- Community rewards up to $1M/month
- Affects: Returns Score (supply dynamics, value accrual), frontmatter chain field

**4. Venice (VVV)**
- Emissions outdated: review says 10M/year, actual is 6M/year (reduced Feb 2026)
- Full sequence: 14M → 10M → 8M (Oct 2025) → 6M (Feb 2026)
- DIEM capacity optimisation: 14x improvement for active API users
- Buyback burn start date off by one month (Nov 2025, not Dec 2025)
- Affects: Returns Score (supply dynamics 13/20 may increase)

**5. Grass (GRASS)**
- Binance listing missing — review only lists Bybit, Gate.io, KuCoin, Kraken, Bitget, Bithumb
- Season 2 airdrop: 170M tokens (17% supply) allocated, distribution H1 2026
- Grasshopper hardware device announced
- MAU 8.3M → 8.5M
- 55M GRASS unlock February 2026
- Affects: Returns Score (liquidity & access 10/15 should increase)

**6. IoTeX (IOTX)**
- PVC (Physically Verifiable Consensus) mainnet targeting Q1 2026
- MiCA-compliant whitepaper published
- IIP-54/55 governance proposals: +15-20% staking APY, validator subsidies
- CF Benchmarks listing — ETF/derivative pathway
- Filecoin, Theta, HashKey partnerships
- Affects: Freedom Score (infrastructure, governance), Returns Score (liquidity)

**7. Akash (AKT)** — already in backlog above
- BME vote passed, activation 23 March 2026
- Mainnet 16 (4 March 2026): WASM smart contracts
- Update timing: wait for March 23rd activation confirmation

**8. io.net (IO)**
- IDE (Incentive Dynamic Engine) tokenomics overhaul announced Dec 2025
- Replaces fixed emissions with demand-driven system
- Dual-vault mechanism (Reward Vault, Fee Vault)
- 50% buyback-and-burn of revenue, target 50% supply reduction
- Implementation Q2 2026
- Affects: Returns Score (supply dynamics, value accrual, revenue sustainability)

**9. Gensyn (AI)**
- Token claims began February 2026 (review says TGE planned April 2026)
- Token now on CoinGecko with live price
- Review says "No token is trading on any exchange" — likely wrong
- Status field "upcoming" may need changing to "active"
- Affects: Returns Score (liquidity & access), status field, pre-token framing

### MODERATE — Should update (10 projects)

**10. Ocean Protocol (OCEAN)**
- FET lawsuit settlement reached — review says "unresolved"
- Ocean returning 286M FET tokens (~$120M)
- "Active litigation" language no longer accurate
- Risk assessment section needs updating

**11. Fetch.ai/ASI Alliance (FET)**
- Same lawsuit settlement — review says "remains unresolved"
- Paal.ai merger details: 900M PAAL tokens, 180-day vesting
- Settlement materially changes risk profile

**12. Bittensor (TAO)**
- MEV Shield (Dec 2025): encrypted mempool — not mentioned
- Grayscale filed for Trust, not ETF (factual error in review)
- Tao Flow emissions model (Nov 2025) — verify if changes emission mechanics

**13. peaq (PEAQ)**
- Inflation rate 3.5% → ~2.5% with burn mechanism
- VEO (Vested Emission Offerings) programme launched
- Three-phase governance roadmap not detailed
- Supply dynamics (9/20) may need revision

**14. Render (RENDER)**
- RNP-019 passed April 2025: GPU rewards framework
- 1 millionth RENDER burned (Dec 2025) — review uses older ~530K figure
- "No staking" statement needs qualifying given RNP-019 rewards

**15. Theta Network (THETA)**
- TDROP 2.0 governance vote (Jan 2026): 4B TDROP reallocated to staking
- NTT Digital joined as enterprise validator
- EdgeCloud on RapidAPI
- Imperial College London partnership

**16. FLock (FLOCK)**
- UNDP partnership — major credibility signal
- NHS + Moorfields Eye Hospital partnerships
- Walrus/Sui integration for FL Alliance
- Tokenomics v3 "Moonbase" / FOMO model launchpad

**17. OriginTrail (TRAC)**
- V8.1.X features live: Random Sampling proof system, automated TRAC reward distribution
- Review says "claims 1,000x throughput improvement" — now verifiable, not a claim

**18. Vana (VANA)**
- Capella hard fork (Jul 2025): higher throughput, improved privacy
- Removed Top 16 DataDAO restriction — any VRC-20 compliant DataDAO qualifies
- Changes participation model materially

**19. Aethir (ATH)** — RESOLVED 2026-03-12
- ~~Governance launch Q1 2026~~ — editorial updated: governance roadmap documented, score kept at 4/20 (no verifiable on-chain governance yet)
- ~~DAT treasury~~ — added to tokenomics section (1.26B ATH redirected, DAT mechanism explained)
- ~~Revenue reconciliation~~ — editorial updated: $127.8M total 2025 revenue, $147M vs $166M ARR discrepancy explained
- ~~Binance Alpha pre-listing~~ — added (pre-listing pool, not full spot listing)
- ~~Solana integration~~ — added to "What it does" section and chain frontmatter
- Coinbase listing (March 2025) — added, liquidityAccess bumped 11→12
- Returns Score: 62→63 (liquidity improvement). Freedom Score: unchanged at 30/100.

---

---

## 0xJeff After Hour EP.45 — 2026 Investment Thesis (2026-03-12)

**Source:** 0xJeff Substack (Tier 3 — media/analyst), 8 March 2026

### Bittensor (TAO)

- Subnet revenue: $30-40M/year total across ecosystem — cross-reference against our data
- TAO halving Dec 2025, emissions cut by half — verify reflected in our tokenomics coverage
- "Institutions treat TAO as BTC for AI" — index-like exposure narrative
- Subnets generate more revenue than emissions (unlike traditional DePIN) — value accrual point
- 0xJeff rates TAO "medium risk, 5-10x" — no score impact, but useful sentiment datapoint

### NEAR

- Near Intents: $60-90M volume/day — concrete traction metric to verify
- Revenue $46M annualised vs $35M emissions — revenue exceeds emissions
- Part of revenue used for NEAR buyback — value accrual mechanism
- Teams and early investors all vested out — low sell pressure claim to verify
- IronClaw/OpenClaw, Confidential AI stack, agent marketplace — AI product suite expansion
- Confidential Intents (private cross-chain swaps) — privacy angle

### Venice (VVV) — 0xJeff factual error

- 0xJeff claims "Venice doesn't do buyback, Dolphin will" — **this is incorrect**
- Our review confirms monthly revenue buyback burns active since November 2025
- Venice frontmatter valueAccrual field and editorial both document this
- No score impact. Note: 0xJeff may be conflating Venice the inference platform with VVV token mechanics, or working from outdated information

### Dolphin AI ($POD) — New project candidate

- **What:** AI lab providing uncensored models to Venice + DePIN GPU network (consumer RTX 4090s) + inference infrastructure
- **Model:** "AAVE of GPUs" — peer-to-pool (deposit/withdraw anytime) vs traditional P2P rental
- **Tokenomics:** Revenue planned for $POD buyback (future), free inference initially on OpenRouter
- **Privacy:** Hybrid TEE + sharded inference
- **Status:** Very early — DePIN network not live yet, currently at stage 1
- **Connection:** Direct supplier to Venice (already covered)
- **Risk:** High — 0xJeff rates "high risk, 10-50x". Single customer dependency (Venice), future-tense buyback, no disclosed team/corporate/audit info
- **Action:** Research candidate for next quarterly review. Not urgent — too early-stage for full scoring. Monitor for DePIN network launch and revenue activation.

---

### Editorial corrections already applied (2026-03-07)

These are not deferred — they were fixed in the live articles and project page:

- Burn mechanism: MOR is held for IPS quota (Yellowstone model), not burned per query. Actual burn is via PoL generation (MRC43).
- Lock mechanics: 7-day lock on stETH deposits. No lock on earned MOR (claimable immediately). Power Factor lock is voluntary.
- Capital V2: Multi-asset staking (USDC, USDT, WBTC via Aave) live since September 2025.
- Audit: Code4rena August 2025 audit noted in freedom score text and path to improvement.
