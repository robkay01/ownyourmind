---
title: "io.net"
description: "io.net review. GPU marketplace on Solana. IO token earnings, GPU requirements, $20M+ annualised revenue claims, and why the metrics need scrutiny."
category: "compute"
token: "IO"
status: "active"
freedomScore: 4
returnsScore: 5.4
returnsScoreBreakdown:
  tokenUtility: 12
  valueAccrual: 9
  supplyDynamics: 10
  revenueSustainability: 15
  liquidityAccess: 8
returnsScoreEvidence:
  tokenUtility: "Payment for compute, staking for providers. But centralised platform."
  valueAccrual: "IDE introduces dual-vault buyback-and-burn. Well-designed but not yet implemented."
  supplyDynamics: "IDE targets 50% reduction of remaining 300M emissions. Announced Dec 2025, planned Q2 2026."
  revenueSustainability: "$20M+ annualised revenue. Real customers."
  liquidityAccess: "Binance listing. Volume improved but still thin relative to market cap."
publishDate: 2025-03-02
updatedDate: 2026-03-12
draft: false
coingeckoId: "io"
launchType: "ico"
chain: "Solana"
supplyType: "capped"
maxSupply: "800M IO"
verdict: "Real revenue and growing compute delivery. IDE tokenomics overhaul (announced Dec 2025) would improve value capture if implemented. But closed-source core, no governance, and inflated GPU metrics persist. A centralised GPU marketplace with a token, not a decentralised protocol."
oymHolds: false
podcastUrl: "/podcast/Own-Your-Mind-010-Ionet.mp3"
---

## What it does

io.net is a GPU marketplace built on Solana. You supply GPUs, you rent GPUs, and io.net sits in the middle taking a cut. The "decentralised" part is that GPUs come from independent suppliers across 138 countries. Everything else, the orchestration, matching, billing, verification, and the node software itself, is run by io.net.

The architecture has seven layers, from a ReactJS frontend down through FastAPI and GraphQL APIs, PostgreSQL and Redis databases, RabbitMQ task queues, and a Kubernetes orchestration layer running IO-SDK (a proprietary fork of Ray). GPU suppliers run the closed-source IO Worker binary, pass Proof-of-Work benchmarks and Proof of Time-Lock verification, stake IO tokens as collateral, and receive hourly block rewards plus job payments. Consumers deploy GPU clusters via IO Cloud, or access 30-plus open-source AI models through the IO Intelligence API (OpenAI-compatible endpoint).

The project launched on Binance Launchpool in June 2024 after raising $30 million in a Series A led by Hack VC at a $1 billion valuation. Backers include Multicoin Capital, Anatoly Yakovenko (Solana founder), OKX Ventures, Delphi Ventures, Animoca Brands and others. The team is estimated at roughly 100 people across New York and San Francisco.

The founding story is complicated. Ahmad Shadid founded io.net in 2022, resigned as CEO two days before the token launch in June 2024 amid allegations about his background in Arabic-language crypto projects and questions about inflated GPU metrics. Co-founder Tory Green (Stanford, West Point, ex-Merrill Lynch, ex-Disney strategic planning) took over as CEO, then moved to chair of the io.net Foundation in April 2025. Gaurav Sharma (ex-Binance VP of Engineering) was appointed CEO. Three CEOs in under two years.

## Value proposition

The value proposition is straightforward: cheaper GPUs for AI workloads than AWS, GCP or Azure. io.net claims 70-90% cost savings. Whether you actually get that depends on the workload, the GPU model and availability.

What is genuinely interesting is the revenue growth. Q4 2024 network revenue was $3.1 million. Q1 2025 was $5.7 million, an 82.6% quarter-on-quarter increase. Annualised, that is north of $20 million. In January 2025 alone, the network delivered 7.1 million compute hours, up from 1.4 million in September 2024. For a DePIN project, this is real traction by any standard.

The confidential compute offering is a genuine differentiator. Intel TDX and NVIDIA H100/H200/B200 GPUs provide hardware-based data protection during processing. Users can verify attestation reports. Training data, model weights and architectures stay encrypted. For AI workloads handling sensitive data, this matters.

IO Intelligence provides an OpenAI-compatible API with access to 30-plus open-source models (Llama, DeepSeek, Qwen and others). The Co-Staking Marketplace, launched in February 2025, lets token holders stake alongside GPU operators and share block rewards without running hardware.

The counter-narrative is equally straightforward. Strip away the DePIN branding and you have a company that runs a GPU marketplace with token incentives. [Akash](/projects/akash/) does the same thing but with open-source code, permissionless deployment, on-chain governance and consistent leadership since 2015. Akash also undercuts io.net by roughly $0.07 per GPU-hour on H100s. On the other side, centralised providers like Lambda Labs and Vast.ai offer GPU marketplaces without the token overhead.

io.net's positioning is stuck in between: not decentralised enough to win on the sovereignty thesis, not reliable enough to win enterprise workloads from AWS. The revenue growth suggests they are finding customers regardless, but the long-term competitive moat is unclear.

## Tokenomics

IO is an SPL token on Solana. Max supply: 800 million. Circulating supply: approximately 301 million (37.7%) as of March 2026. The remaining tokens unlock through emissions and vesting schedules running to 2028.

Distribution:

- **Emissions (GPU supplier and staker rewards):** 37.5% (300M IO, originally distributed hourly over 20 years, disinflationary starting at 8% annual rate, decreasing roughly 1% per month, now transitioning to monthly emission epochs)
- **R&D and Ecosystem:** 16.0% (30% unlocked at TGE, linear vest over 35 months from January 2025)
- **Seed investors:** 12.5% (13-month cliff, then linear vest over 23 months; unlocks began July 2025)
- **Core contributors (team):** 11.3% (13-month cliff, then linear vest over 35 months; unlocks began July 2025)
- **Community (airdrops, incentives):** 10.0% (45% at TGE, linear vest over 41 months)
- **Binance Launchpool:** 2.5% (fully unlocked at launch)

Insider allocation (seed plus team plus Series A) totals roughly 34%. The Binance Launchpool provided broad initial distribution, and 50% of total supply is earmarked for community over time, but the "community" emissions primarily benefit GPU suppliers, not passive token holders.

**IDE tokenomics overhaul (announced December 2025).** io.net announced the Incentive Dynamic Engine (IDE), a significant restructure of how emissions and revenue flow through the token. The core changes:

- **Demand-driven emissions:** Replaces the fixed disinflationary schedule with a system that adjusts rewards based on actual network demand. Suppliers earn more when the network is busy, less when it is not. This is a meaningful shift from "pay GPUs to exist" to "pay GPUs to work."
- **Dual-vault mechanism:** A Reward Vault funds supplier incentives. A Fee Vault collects platform revenue. The separation creates clearer accounting between emission subsidies and earned revenue.
- **50% buyback-and-burn of revenue:** Half of all platform revenue collected in the Fee Vault is used to buy IO on the open market and permanently burn it. This replaces the previous, vaguer burn mechanism with a structured, auditable flow.
- **Target 50% supply reduction:** The IDE targets reducing the remaining 300 million emission pool by half, effectively cutting long-term dilution from 300 million tokens to 150 million. If implemented, this materially changes the supply trajectory.

Implementation is planned for Q2 2026. As of March 2026, the IDE remains an announcement, not a deployed system. The documentation has been updated to reflect the monthly emission epoch transition, but the dual-vault and demand-driven mechanisms are not yet live. The design is sound on paper. Demand-driven emissions plus structured burns plus supply reduction is exactly what the token needed. But io.net has a track record of bold announcements followed by delayed or modified execution. Score this based on what is deployed, not what is promised.

The existing burn mechanism (at least 50% of platform revenue permanently burned) continues to operate. At the current annualised revenue of roughly $20 million, that means approximately $10 million of annual buy pressure against insider unlocks. If the IDE's enhanced burn mechanism and supply reduction go live, the maths shifts considerably in holders' favour.

Market snapshot: IO trades at $0.115 with a $35 million market cap and $92 million FDV. That is 98% below the all-time high of $6.43, set on 12 June 2024, the day after listing. The all-time low of $0.092 was hit in February 2026. Listed on Binance, Coinbase, Gate, Bybit, KuCoin, WhiteBIT and others.

The token was valued at $1 billion at the Series A. Current FDV: $92 million. Investors who bought at that valuation are deeply underwater.

## How to participate

**Supply GPUs.** Install the closed-source IO Worker software on NVIDIA GPUs (minimum 4GB VRAM, 100 Mbps down / 75 Mbps up). Stake a minimum of 200 IO per chip (adjusted by GPU model multiplier). Pass a 12-hour initial stress test and maintain minimum 5-hour daily uptime. Earn hourly block rewards plus compute job payments. Higher-end GPUs (A100, H100, RTX 4090) earn significantly more.

**Co-stake IO tokens.** The Co-Staking Marketplace (February 2025) lets token holders stake alongside GPU operators and share block rewards without running hardware. Average APR is roughly 8.7%. Fourteen-day unstaking cooldown during which tokens earn no rewards.

**Rent compute.** Deploy GPU clusters via IO Cloud for AI/ML workloads. Access the IO Intelligence API (OpenAI-compatible) for inference on 30-plus open-source models. Confidential compute VMs available for sensitive workloads. Pay in IO or fiat.

**Build.** IO Intelligence APIs, IO-SDK (Ray fork) for distributed computing, Python library. Documentation is adequate but lacks depth compared to major cloud providers.

## Honest assessment

**What works.** The revenue is real and growing. $5.7 million in Q1 2025 with 82.6% quarter-on-quarter growth is not hype. Seven million compute hours delivered in January 2025. The confidential compute offering with hardware-based attestation (Intel TDX plus NVIDIA) is ahead of most DePIN competitors. IO Intelligence provides a practical API for AI model access. The leadership under Gaurav Sharma (ex-Binance VP Engineering) brings operational credibility after a turbulent 2024. Eighty-five-plus partnerships announced by January 2025, including integrations with Filecoin, Render Network, ChainGPT, Injective and Nillion.

**What does not work.** The GPU numbers are the headline problem. io.net markets 327,000 "registered" GPUs. The daily average of verified, active GPUs in Q1 2025 was 6,720. That is 2% utilisation of the registered base. The verified GPU count declined 11.1% quarter-on-quarter in Q1 2025 even as revenue grew. The gap between headline metrics and operational reality was already exposed by the April 2024 Sybil attack, when approximately 1.8 million fake GPUs attempted to connect to the network to farm airdrop rewards. Attackers exploited vulnerabilities that allowed them to mimic genuine GPU signals and spoof metadata. An RTX 4090 was reportedly split into infinite virtual GPUs. Martin Shkreli publicly highlighted the discrepancies. The project's own CSO admitted: "We fucked up." Only 5,350 GPUs are cluster-ready on any given day.

The "decentralised" and "open source" branding is misleading. io.net describes itself as "The Open Source AI Infrastructure Platform" on its website. The core platform code (backend, IO-SDK, GPU orchestration, matching engine, billing, IO Worker node software) is not open source. Only 9 public GitHub repos exist, containing setup scripts, binaries, documentation and demo apps. 131 GitHub stars total. [Akash](/projects/akash/) publishes everything.

There is no governance. No DAO. No on-chain voting. No governance forum. No proposals mechanism. All decisions are made by the io.net team and foundation. Token holders have zero governance rights. For a project with a $32 million market cap token, the complete absence of governance is notable.

io.net achieved SOC 2 compliance, which covers organisational security controls and is relevant for enterprise customers. However, no smart contract audit or platform security audit from a recognised blockchain auditing firm (CertiK, Trail of Bits, Halborn, etc.) has been published, despite $30 million in Series A funding and a platform handling GPU compute workloads and a staking system.

**The risk.** The founder risk has already materialised. Ahmad Shadid departed under a cloud and his subsequent project O.XYZ also faced misrepresentation allegations. Three CEOs in under two years creates leadership instability. Tory Green's move to Foundation chair suggests organisational restructuring is ongoing.

The token is down 98% from ATH. Insider unlocks began in July 2025 and continue through 2028. The burn mechanism provides some counterbalance, but roughly $10 million of annual buy pressure from burns against continuous insider unlocking is not enough to reverse the trend without substantial revenue acceleration. The IDE tokenomics overhaul announced in December 2025 addresses these structural problems directly: demand-driven emissions, 50% buyback-and-burn, and a target 50% reduction of the remaining emission pool. If implemented as described in Q2 2026, it would materially improve the supply dynamics. But "if implemented" is doing heavy lifting in that sentence.

The competitive position is squeezed. [Akash](/projects/akash/) is more decentralised, more transparent, fully open source, and cheaper on H100s. Centralised providers are more reliable and come with SLAs. io.net's differentiation, the confidential compute, the IO Intelligence API, the DePIN supply aggregation, is real but not yet a moat.

**My position.** I do not hold IO. The closed-source core, absence of governance, founder scandal, inflated GPU metrics, and 98% price decline from ATH put this firmly in the "show me" category. The revenue growth is genuine and worth monitoring, but the decentralisation credentials are too weak for the sovereignty thesis. If you want decentralised GPU compute, [Akash](/projects/akash/) is the more honest option. If you want cheap GPUs without caring about decentralisation, Lambda Labs and Vast.ai do not require a token.

## Freedom score: 38/100

io.net scores 38/100 (F grade). Full methodology at [Freedom Score Methodology](/resources/freedom-score-methodology/).

**Infrastructure decentralisation (10/20):** GPU supply comes from independent operators across 138-plus countries, which is architecturally distributed. Permissionless GPU onboarding is a genuine positive. But the core platform (orchestration, matching, billing, API, verification) is entirely centralised and operated by io.net. The IO Worker software is closed-source binaries. The 2024 Sybil attack demonstrated that verification systems were insufficient. Only 5,350 cluster-ready GPUs on any given day despite 327,000 registered. The platform can censor or deny service to any provider or consumer.

**Governance decentralisation (2/20):** No on-chain governance. No DAO. No governance forum. No proposals. All decisions made by the io.net team and foundation board. The io.net Foundation (chaired by co-founder Tory Green) controls strategic direction. Token holders have no governance rights whatsoever. This is fully centralised governance with a "foundation" label.

**Token distribution fairness (5/15):** Insider allocation is roughly 34% (seed 12.5%, team 11.3%, Series A 10.15%). Vesting schedules exist (two to three years with 13-month cliff). The Binance Launchpool (2.5%) was accessible but required Binance KYC. Community airdrop (10%) had reasonable distribution. Not a fair launch. VC-backed at $1 billion valuation. Token declined 98% from ATH while insiders began unlocking in July 2025.

**Censorship resistance (5/15):** io.net can censor any user or provider. The platform controls account access, job allocation and the matching engine. KYC requirements for some participation. Terms of Service can restrict usage. The IO Worker binary is closed-source, so providers cannot verify what code they run. The underlying Solana token is censorship-resistant for transfers. Confidential compute VMs protect data during processing. But the platform layer is a centralised censorship vector.

**Data sovereignty (8/15):** Confidential compute VMs with Intel TDX and NVIDIA H100/H200/B200 provide genuine hardware-based data protection during processing. Users can verify attestation reports. Supports encrypted training data, model weights and architectures. Federated learning with dataset isolation is supported. SOC 2 compliance adds enterprise-grade organisational security controls. This is a real strength. However, standard (non-confidential) workloads lack these protections, and metadata (usage patterns, billing) is held centrally by io.net.

**Open source and transparency (8/15):** Only 9 public GitHub repos containing setup scripts, binaries, docs and demo apps. Core platform code is not open source. IO-SDK (Ray fork), GPU orchestration engine, matching engine, billing system and IO Worker node software are all closed-source. No reproducible builds. The "Open Source AI Infrastructure Platform" branding on the website is misleading given the closed-source core. However, SOC 2 compliance demonstrates audited organisational security processes, Messari publishes quarterly reports with verifiable network metrics, and token economics are well documented with verifiable on-chain data (contract: BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K on Solana).

### Path to improvement

Three changes would materially increase io.net's score:

1. **Open-source the core platform.** The IO-SDK (Ray fork), GPU orchestration engine, and IO Worker node software are all closed-source. Publishing this code under a permissive licence would address the most fundamental credibility gap. If the code is good, open-sourcing it costs nothing. If it is not good enough to open-source, that tells you something. [Akash](/projects/akash/) publishes everything and it has not hurt their competitive position.
2. **Implement governance.** Token holders have zero governance rights. No DAO, no proposals, no voting. Even a basic governance framework with proposal submission, quorum thresholds and on-chain voting would demonstrate that IO is more than a payment rail for a centralised company. The io.net Foundation controls all strategic decisions without community input.
3. **Publish a real-time network dashboard with verified metrics.** The gap between 327,000 "registered" GPUs and 6,720 daily active verified GPUs, combined with the 2024 Sybil attack history, has destroyed metric credibility. A real-time, independently verifiable dashboard showing actual active GPUs, compute hours delivered, revenue and burn amounts would rebuild trust. Self-reported quarterly figures filtered through Messari reports are not enough.

## Returns score: 54/100

IO scores 54/100 (D grade). Full methodology at [Returns Score Methodology](/resources/returns-score-methodology/).

**Token utility (12/20):** IO functions as payment for GPU compute and as staking collateral for providers, which gives it more utility than most DePIN tokens. The Co-Staking Marketplace adds a passive participation layer. But the platform itself is entirely centralised. io.net controls orchestration, matching, and billing. The token is a payment rail for a company's services, not a protocol-native necessity. If io.net decided to accept USDC-only tomorrow, the token's utility would evaporate overnight.

**Value accrual (9/20):** The IDE announcement materially improves the outlook here. The dual-vault mechanism (Reward Vault for supplier incentives, Fee Vault for platform revenue) creates a structured separation between emission subsidies and earned revenue. The 50% buyback-and-burn of Fee Vault revenue is a clear, mechanical link between platform usage and token value, exactly the flywheel that was missing. Previously, io.net took platform fees but the flow back to token holders was poorly defined. The IDE design fixes this on paper. Score reflects the credible design offset by the fact that it is not yet deployed. If implemented in Q2 2026 as planned, this dimension would score higher.

**Supply dynamics (10/20):** The structural problems remain: 34% insider allocation, vesting unlocks through 2028, and inflationary emissions. But the IDE's target 50% reduction of the remaining 300 million emission pool is a significant commitment. Cutting long-term dilution from 300 million to 150 million tokens, combined with demand-driven emissions that reduce rewards when the network is underutilised, would fundamentally change the supply trajectory. The transition from hourly to monthly emission epochs is already in the documentation. Score bumped from 8 to 10 to reflect the credible plan, but not higher. The supply reduction is a target, not a deployed mechanism. The token is still down 98% from ATH, and insider unlocks continue regardless of IDE.

**Revenue sustainability (15/25):** This is io.net's genuine bright spot. $20 million-plus annualised revenue with 82.6% quarter-on-quarter growth in Q1 2025 is real traction by any DePIN standard. 7.1 million compute hours delivered in January 2025 alone. These are not projections or "potential" revenue. Actual customers are paying for actual GPU time. The question is whether the growth rate holds and whether margins survive competition from Akash and centralised providers.

**Liquidity and access (8/15):** Binance listing provides baseline accessibility, and the token trades on major exchanges including Coinbase, Gate, Bybit, and KuCoin. Daily volume has recovered somewhat from its post-launch trough but remains thin relative to market cap. The 98% drawdown from ATH means most holders are deeply underwater. Liquidity is adequate for retail but not for institutional-scale entry or exit.

### Path to improvement

Three changes would materially increase io.net's returns score:

1. **Ship the IDE.** The dual-vault, demand-driven emission, and 50% supply reduction plan is exactly what the tokenomics needed. But it is an announcement, not a product. Delivering IDE on schedule in Q2 2026 and publishing transparent vault balances, burn amounts, and emission rates would prove the team can execute on tokenomics as well as they execute on revenue growth.
2. **Demonstrate net deflationary months.** Once IDE is live, publishing months where burns plus supply reduction exceed new emissions would be the single most powerful signal for token holders. The maths needs to work publicly, not just on a whiteboard.
3. **Accelerate the insider unlock schedule or commit to no further raises.** Two to three more years of continuous insider selling at current prices will suppress any organic price recovery. A compressed unlock with a commitment to no further dilutive funding rounds would signal confidence in the revenue trajectory.
