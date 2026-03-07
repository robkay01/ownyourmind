# Quarterly Review Backlog

Research findings and score adjustments deferred to the next quarterly review.
Next review: **April 2026**

---

## Morpheus (MOR)

**Date discovered:** 2026-03-07

### Freedom Score (current: 76/100)

- **Open Source & Transparency (12 → 13?):** Code4rena completed a formal security audit in August 2025 covering 6 core contracts (ChainLinkDataConsumer, DepositPool, Distributor, RewardPool, L1SenderV2, L2TokenReceiverV2). Found 4 medium-severity issues. Previous score deducted for "no formal third-party security audit." Audit now exists, though compute/agent contracts on Base remain unaudited. If bumped: total 76 → 77, grade stays B.

### Returns Score (current: 57/100)

- **Supply Dynamics (16 → 17?):** Power Factor mechanic (MRC42) lets participants voluntarily lock MOR rewards for up to 6 years (~10.7x multiplier). This materially reduces sell pressure and was not accounted for in the original scoring. If bumped: total 57 → 58, grade stays C.

- **Token Utility (18 → 19?):** Power Factor adds another utility layer beyond staking/compute/agents. Marginal — 18/20 already reflects strong multi-sided utility. Probably leave as-is.

### Editorial corrections already applied (2026-03-07)

These are not deferred — they were fixed in the live articles and project page:

- Burn mechanism: MOR is held for IPS quota (Yellowstone model), not burned per query. Actual burn is via PoL generation (MRC43).
- Lock mechanics: 7-day lock on stETH deposits. No lock on earned MOR (claimable immediately). Power Factor lock is voluntary.
- Capital V2: Multi-asset staking (USDC, USDT, WBTC via Aave) live since September 2025.
- Audit: Code4rena August 2025 audit noted in freedom score text and path to improvement.
