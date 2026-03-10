---
title: "Aethir Node Setup: How to Earn with ATH"
description: "How to set up an Aethir node — Checker nodes, Edge devices, and Cloud Host GPU providers. Requirements, costs, realistic earnings, and why the numbers matter more than the marketing."
difficulty: "beginner"
category: "walkthrough"
publishDate: 2026-03-10
draft: true
---

## What Aethir offers

Aethir is an enterprise GPU compute network for AI and cloud gaming. It claims $127.8 million in 2025 revenue and 150+ enterprise customers. Those numbers are self-reported and not independently audited, which matters for everything that follows.

There are three ways to participate in the network. Each has very different economics, barriers to entry and risk profiles. For the full project assessment, see our [Aethir review](/projects/aethir/).

## The three node types

| Node type | What it does | Capital required | Technical skill | Realistic earnings |
|---|---|---|---|---|
| **Checker** | Verifies Container liveness and quality | Secondary market NFT price | Beginner | Low, declining |
| **Edge** | Contributes light compute via dedicated device | ~$999-1,399 + 2,069 ATH | Beginner | Very low at current prices |
| **Cloud Host** | Provides enterprise GPUs (H100, H200, A100) | $200K+ in hardware | Advanced | Potentially profitable |

A fourth role, **Indexer**, matches client requests with Containers — but Aethir operates these centrally. You cannot run one.

## Checker node setup

Checker nodes verify that GPU Containers are online, performing, and delivering quality compute. They are the lightest way to participate.

### Requirements

This is not demanding hardware:

- 64 MB RAM
- x86 CPU at 2.1 GHz
- 10 GB disk space
- 10 Mbps internet
- You can run up to 100 licences on a single machine

### Getting a licence

The primary sale (March 2024) sold out — 66,000+ licences to 20,000+ buyers across 53 pricing tiers, starting at ~$500. Roughly $75-92 million raised.

Licences became transferable in July 2025 and trade as NFTs on secondary markets (Arbitrum). Check OpenSea or Blur for current floor prices.

A buyback programme launched May 2025 at checkerbb.aethir.com. Reports indicate 37% of holders sold back, dropping active holders from ~20,000 to ~8,000. That consolidation is a centralisation concern worth noting.

### Setup steps (Linux CLI)

```bash
# Download installer from app.aethir.com or GitHub
# github.com/AethirApp/checker-client

cd <unzipped-directory>
sudo ./install.sh
sudo ./AethirCheckerCLI
aethir version

# Import wallet and approve licence via CLI
```

Cannot run multiple CLI instances on one machine. Windows GUI is also available — download from app.aethir.com, install, connect wallet, approve licence.

### Checker earnings — the honest numbers

15% of total ATH supply (6.3 billion ATH) is allocated to checkers over 4 years: 10% base + 5% bonus.

- **Base rewards:** Daily, proportional to tasks completed versus network total
- **Bonus rewards:** Quarterly, requires over 95% uptime for the entire quarter
- **Withdrawal vesting:** 120 days (first claim), 180 days (subsequent), OR 30-day accelerated vesting at a 75% penalty (you keep only 25%)

Aethir does not publish per-node daily figures. Community reports vary significantly and are often outdated. At current ATH price ($0.0059), any per-node daily reward measured in hundreds of ATH translates to cents, not dollars.

### Checker risks

- **Ban penalties are graduated:** 2 errors per week = 1-month ban. 5 per month = 6-month ban. 10 cumulative = permanent ban.
- **Uptime inheritance:** If you buy a licence on secondary market, the previous owner's poor uptime record carries forward. Check before buying.
- **US restriction:** American residents cannot claim rewards or withdraw earnings. Licences can be purchased but not monetised from the US.

## Aethir Edge setup

The Edge is a dedicated hardware device that contributes light compute to the network. Essentially plug and play.

### The device

- Qualcomm Snapdragon 865
- 12 GB LPDDR5 RAM
- 256 GB UFS 3.1 storage
- Wi-Fi 6, Bluetooth 5.2, 1 Gbps LAN
- Power draw: 18-22W while mining

### Setup

1. Purchase device: $999 (waitlist discount) to $1,399 (retail)
2. Pay 2,069 ATH activation/staking fee (~$12 at current prices)
3. Connect to power and ethernet or Wi-Fi
4. Device auto-configures and starts earning

That is genuinely the entire setup. No Linux, no Docker, no CLI. Plug it in.

### Edge earnings — the honest numbers

23% of total ATH supply (~9.66 billion ATH) is allocated to Edge devices over 10 years.

The emission schedule has declined:
- **Launch (2024):** ~20 ATH/day per device
- **Promotional period (Nov 2024 - Jun 2025):** ~100 ATH/day
- **Tokenomics v2.0 (Jul 2025 onwards):** ~10 ATH/day base, minus 5% network fee

**At current ATH price ($0.0059):**
- 10 ATH/day = approximately $0.06/day = ~$1.77/month
- A $999 device at $1.77/month takes roughly **47 years to break even**

I want to be very clear about this. At current token prices, the Aethir Edge is not an investment that generates returns from compute earnings. It is a speculative bet that ATH will appreciate significantly. If ATH returns to $0.05 (still 58% below its all-time high), daily earnings become ~$0.50 and break-even drops to about 5.5 years. At its ATH of $0.1185, break-even becomes about 2.3 years.

The device is well-built hardware. The economics at current prices are not viable as income.

## Cloud Host (enterprise)

This is the serious end. Cloud Hosts provide enterprise-grade GPUs to Aethir's network for AI training, inference and game rendering.

### Requirements

- 8+ enterprise GPUs (H100, H200, A100, GB200)
- Enterprise-grade connectivity and cooling
- Formal business entity
- KYC verification
- ATH staking commitment (amount not publicly disclosed)
- Apply via Aethir's Cloud Host portal

An H100 costs $25,000-40,000. Eight of them is $200,000-320,000 before infrastructure costs.

### Cloud Host economics

Aethir publishes these figures for an H100:
- Hourly rate: $1.25 (host receives 80% = $1.00/hour)
- At 95% utilisation: ~$684/month revenue per GPU
- Estimated costs: ~$325/month (power, financing, maintenance)
- Estimated margin: ~$359/month per GPU

Those numbers assume 95% utilisation. Whether hosts consistently achieve that is unverified. Aethir's marketing figures and real-world performance may diverge.

Cloud Hosts earn through two streams: ATH token rewards (Proof of Capacity and Proof of Delivery) plus 80% of service fees from enterprise customers. The other 20% goes to Aethir's treasury.

## ATH token overview

| Metric | Value |
|---|---|
| Price | $0.0059 |
| Market cap | ~$103M |
| Circulating supply | ~17B ATH |
| Total supply | 42B ATH |
| All-time high | $0.1185 (down ~95%) |

**Critical risk: token unlocks.** Approximately 9.66 billion ATH (23% of total supply) becomes liquid through 2026, with monthly unlocks of roughly $92 million worth starting Q2 2026. This could double circulating supply. The token distribution allocates 50% to compute providers, 15% to ecosystem, 12.5% to team, 11.5% to investors, 6% to airdrop, 5% to advisors.

### Staking options

- **AI Pool and Gaming Pool:** Earn ATH plus partner tokens. Lock periods up to 4 years. 30-day withdrawal vesting.
- **EigenLayer ATH Vault:** Deposit ATH, receive eATH 1:1. Redemption from June 2026. Reported 8-15% APY.
- Withdrawal blocked if pool utilisation exceeds 85%.

### Jurisdiction restrictions

US, Cuba, Iran, North Korea, Syria, Crimea, Donetsk and Luhansk are fully restricted. KYC is mandatory for reward claims and withdrawals. If you are a US resident, you cannot monetise any Aethir node type.

## My assessment

Aethir has the best revenue story in DeAI — $127.8 million claimed for 2025 — attached to the worst decentralisation credentials. The Indexers are centralised. Cloud Host onboarding is gatekept. The revenue figures are self-reported with no independent audit.

For someone looking to participate:

- **Checker nodes** are cheap to run but earnings are low and declining. The 37% buyback exodus is a warning sign.
- **Edge devices** are a speculative bet on ATH price, not a compute business at current prices. Only buy one if you believe ATH will 5-10x and you are comfortable waiting.
- **Cloud Hosting** is a real GPU business with potentially viable economics, but requires enterprise-scale capital and the willingness to trust Aethir's utilisation claims.

I do not hold ATH. The centralisation concerns and the massive unlock schedule keep me on the sideline. But I watch the revenue numbers — if they are real and independently verified, Aethir becomes a very different conversation.
