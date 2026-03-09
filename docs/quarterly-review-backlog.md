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

### Editorial corrections already applied (2026-03-07)

These are not deferred — they were fixed in the live articles and project page:

- Burn mechanism: MOR is held for IPS quota (Yellowstone model), not burned per query. Actual burn is via PoL generation (MRC43).
- Lock mechanics: 7-day lock on stETH deposits. No lock on earned MOR (claimable immediately). Power Factor lock is voluntary.
- Capital V2: Multi-asset staking (USDC, USDT, WBTC via Aave) live since September 2025.
- Audit: Code4rena August 2025 audit noted in freedom score text and path to improvement.
