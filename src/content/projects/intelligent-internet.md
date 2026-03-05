---
title: "Intelligent Internet"
description: "A planned sovereign AI protocol with a three-layer blockchain (Bitcoin Core fork), dual-currency economy, and Proof-of-Benefit consensus. Founded by ex-Stability AI CEO Emad Mostaque. Pre-launch."
category: "platform"
token: "FC"
status: "upcoming"
freedomScore: 4
returnsScore: 3.0
returnsScoreBreakdown:
  tokenUtility: 8
  valueAccrual: 6
  supplyDynamics: 10
  revenueSustainability: 0
  liquidityAccess: 6
returnsScoreEvidence:
  tokenUtility: "Pre-token. Planned for Proof-of-Benefit consensus."
  valueAccrual: "Conceptual. Whitepaper only. No working implementation."
  supplyDynamics: "Planned 21M cap mimicking Bitcoin. Scarcity model."
  revenueSustainability: "No blockchain, no token, no revenue. Models are free."
  liquidityAccess: "No token. Cannot assess."
publishDate: 2025-03-02
draft: false
coingeckoId: ""
launchType: "pre-token"
chain: "Custom L0 (planned Bitcoin Core v25 fork)"
supplyType: "capped"
maxSupply: "21M Foundation Coins (planned, not yet launched)"
verdict: "Strong open-source AI output (9 models, 20 datasets on HuggingFace) and real agent tooling, but no chain, no token, and execution depends on a controversial founder. Watch closely."
oymHolds: false
---

## What it does

Intelligent Internet is an open-source AI project producing downloadable models, agent frameworks and training datasets, with a planned three-layer blockchain that has not been built yet. The distinction matters. What exists today is genuinely useful. What is promised requires a leap of faith.

The shipped deliverables: II-Agent, an open-source coding agent framework (3,172 GitHub stars, Apache 2.0). II-Medical, a family of clinical reasoning models fine-tuned on Qwen3 (8B and 32B parameter variants, downloadable from HuggingFace in GGUF format for local running). II-Search, a search-optimised 4B model. CommonGround, a multi-agent orchestration protocol. II-Commons, a self-hostable knowledge base. Twenty datasets published on HuggingFace, including II-Medical-Reasoning-SFT (2.2 million samples) and II-Thought-RL-v0 (342,000 reasoning examples). Nine models total. All Apache 2.0 licensed.

The planned blockchain: a three-layer architecture. Foundation Layer (L0), a fork of Bitcoin Core v25 with BFT consensus replacing Proof-of-Work. Culture Layer (L1), sovereign roll-ups operated by "National Champions" settling in local Culture Credits. Personal Layer (L2), running on user devices where AI agents execute workflows locally. Dual-currency economy with Foundation Coins (FC, 21 million hard cap mirroring Bitcoin) and Culture Credits (CC, elastic national currencies reserve-backed by FC). Proof-of-Benefit consensus ties every minted coin to verified useful AI work. None of this exists beyond a whitepaper published in July 2025.

Founded by Emad Mostaque through L42 Ltd, a private limited company incorporated in England and Wales in April 2024 (Companies House number 15644961). Mostaque is the sole director. He previously co-founded Stability AI, which released Stable Diffusion (downloaded 100 million-plus times), raised $174 million achieving a $1 billion-plus valuation, and then imploded. He resigned as CEO in March 2024 under investor pressure.

The team is estimated at 18 people (PitchBook), with core ML development handled by a Vietnam-based team of 6-8 engineers. No funding has been publicly disclosed. The project may be self-funded from Mostaque's personal wealth.

## Value proposition

The value proposition splits cleanly into what exists today and what is promised.

What exists is genuinely impressive for a pre-token project. II-Medical-8B achieves 70.49% average across 10 medical benchmarks, performance comparable to models four to nine times its size. The updated version (II-Medical-8B-1706) scores 46.8% on HealthBench, comparable to Google's MedGemma-27B. These models run locally on consumer hardware via llama.cpp, Ollama or LM Studio. Once downloaded, no server dependency, no API key, no one can take them away. For the sovereignty thesis, this is the purest form of "own your mind": a clinical reasoning model running on your own machine.

II-Agent scores 61.8% on Terminal Bench 2, above Claude Code at 58.0%, as an open-source alternative to proprietary coding agents. II-Search-4B hits 91.8% on SimpleQA (versus the base Qwen3-4B at 76.8%). These are not theoretical benchmarks. The agent runs. The models work. You can download and use them today.

The training datasets are a genuine public good. II-Thought-RL-v0 is the first large-scale multi-task RL dataset. II-Medical-Reasoning-SFT's 2.2 million samples enable anyone to train their own medical reasoning models. This contribution to the open-source AI commons is real and lasting.

What is promised is the most ambitious vision in the DeAI space. A Bitcoin-inspired blockchain where every minted coin proves useful AI work was performed. Sovereign roll-ups operated by national-level validators. A Living Constitution Assembly with sortition-selected jurors. An Oracle Council of 15 AI agents governing protocol parameters. The whitepaper is technically detailed and intellectually coherent. It is also entirely theoretical.

The counter-narrative: Mostaque has form for vision that outruns execution. Stability AI had a spectacular vision too. The pattern of ambitious promises, rapid early progress, and eventual governance and financial challenges is well documented. Whether that pattern repeats is the central question.

## Tokenomics

No token exists. No chain exists. Everything below describes whitepaper design, not operational reality.

Foundation Coins (FC) mirror Bitcoin's supply model: 21 million hard cap, initial block subsidy of 50 FC, halving every 210,000 valid blocks (two epochs). Faster emission than Bitcoin, with roughly 99% circulated within 12 years. The critical difference: blocks are only valid when they contain a Proof-of-Benefit receipt proving useful AI work was performed. Four genesis benefit classes: compute-inference, compute-training, data-curation and agent-orchestration.

The whitepaper describes no pre-mine. Coins are minted only through validated work. If implemented as described, this would be one of the fairest distribution methods in crypto. The design is structurally closer to Bitcoin mining than to the ICO, VC-backed or insider-heavy models that dominate DeAI. A Treasury receives a programmable share of block rewards (percentage TBD), which is the potential centralisation vector.

Culture Credits (CC) are the second currency: elastic, reserve-backed by FC, and issued by National Champions for local economic activity. Each sovereign roll-up operates its own CC with an on-chain AMM for CC-to-FC swaps. Reserve requirements ensure backing. This dual-currency model is novel and completely untested.

Key parameters remain undefined: exact stake amounts for National Champions, slashing percentages, Treasury burn-vs-grant splits, CC reserve requirements, evaluation thresholds for Proof-of-Benefit. The whitepaper honestly labels these as TBD rather than fabricating numbers, which is at least transparent.

**Warning:** an unofficial Solana token using the ticker "II" exists on CoinSwitch with zero liquidity. This is not endorsed by the project. No official token has been listed on CoinGecko or CoinMarketCap. Do not buy it.

## How to participate

**Use II-Agent.** The most accessible entry point. Available as a web app (agent.ii.inc) or self-hosted via Docker and CLI from GitHub. Supports multiple LLM backends (Gemini 3, Claude Sonnet 4.5, GPT-5). Free. Apache 2.0 licensed. Self-hosting requires API keys for your chosen LLM provider.

**Download and run models locally.** II-Medical-8B in GGUF format runs on any machine with 8GB-plus RAM via llama.cpp or Ollama. II-Search-4B is even lighter. MLX format available for Apple Silicon. This is the highest-sovereignty participation mode: local inference with zero server dependency. Not intended for clinical use.

**Use the datasets.** Train or fine-tune your own models using the 20 published datasets. II-Thought-RL-v0 (342,000 reasoning examples) and II-Medical-Reasoning-SFT (2.2 million samples) are particularly valuable for anyone building AI training pipelines. Requires GPU infrastructure and ML expertise.

**Contribute to open-source repos.** Fourteen original repositories under Apache 2.0. Primary projects: II-Agent (coding agents), II-Researcher (search and research), CommonGround (multi-agent orchestration), II-Commons (knowledge base), II-Thought (RL dataset tooling). Python and TypeScript skills required.

**Validate (planned, not yet available).** The whitepaper describes National Champions: validators requiring economic FC stake (amount TBD), hardware attestation, symmetric 10 Gbit/s bandwidth on three independent physical paths, sub-300ms interlink latency and signed heartbeats every second. Twelve Champions at genesis, long-term target of one or more per sovereign nation. No selection process has been described and no timeline published.

## Honest assessment

**What works.** The open-source output is real and competitive. Nine models. Twenty datasets. A functional agent framework that benchmarks above Claude Code on Terminal Bench 2. II-Medical-8B punching above its weight at 8B parameters is technically impressive. All downloadable, all self-hostable, all Apache 2.0. The training methodologies (three-stage medical RL pipeline, four-phase search training with Code-Integrated Reasoning, DAPO safety RL) are documented and reproducible. Third-party GGUF quantisations exist (DevQuasar), confirming community adoption. The whitepaper, whatever you think of its feasibility, is the most technically detailed and intellectually ambitious design document in the DeAI space. The Proof-of-Benefit mechanism tying currency minting to verified useful AI work is a genuine conceptual innovation.

**What does not work.** There is no chain. No token. No validators. No governance. No testnet. No mainnet timeline. The project is a small company (L42 Ltd, sole director: Mostaque) with an impressive whitepaper and genuinely useful AI tools. It is not a protocol. The gap between the vision (sovereign AI infrastructure for every nation) and the current reality (roughly 18 people, no blockchain code, no disclosed funding) is vast.

Eight of the 22 GitHub repositories are forks of other projects (OpenAI Codex, Google Gemini CLI, litellm, verl and others), which inflates apparent scope. All models are fine-tunes of Alibaba's Qwen3 family, not foundation models trained from scratch. The ML contribution is in training methodology, not base model capability. If Qwen3's licence or availability changes, the model pipeline is affected.

The "National Champions" concept, one validator per sovereign nation, 12 at genesis with extreme hardware requirements, has no identified participants, no selection process and no operational infrastructure. The Living Constitution Assembly, Guardian Lattice, Oracle Council and progressive decentralisation roadmap exist only as whitepaper text.

**The risk.** Emad Mostaque is an extreme concentration of both opportunity and risk. The opportunity: he proved with Stable Diffusion that open-source AI can compete with proprietary alternatives. His 290,000 X followers, AI industry profile and policy engagement (FII9 alongside Peter Diamandis) provide distribution that most DeAI projects cannot match.

The risk: his Stability AI track record includes a co-founder fraud lawsuit (Cyrus Hodes, July 2023), a Forbes investigation finding misleading claims about education credentials and institutional partnerships (UNESCO, OECD, WHO and World Bank all denied partnership claims), investor revolt from Lightspeed Venture Partners, and $153 million projected losses against $11 million income in 2023. The question is not whether these things happened. They did. The question is whether the pattern repeats.

No funding has been disclosed for Intelligent Internet. Building a novel L0 blockchain with BFT consensus, 12-plus validators, dual-currency AMMs and a Guardian Lattice requires significant capital. The custom Bitcoin Core fork approach means building everything from scratch: wallets, explorers, bridges, DeFi integrations, developer tooling. Most DeAI projects build on EVM, Cosmos or Solana where ecosystems already exist. This choice is either principled or impractical. Possibly both.

The FII Institute connection (Future Investment Initiative, run by Saudi Arabia's Public Investment Fund) adds geopolitical complexity. Sovereign AI infrastructure affiliated with a sovereign wealth fund raises questions about the "sovereignty" framing that have not been addressed.

**My position.** I do not hold any Intelligent Internet tokens because no token exists. I have downloaded and tested II-Medical-8B locally. The models work. The agent framework works. Whether the blockchain vision materialises is a separate question from whether the open-source AI output is useful, and on the latter, the answer is yes.

## Freedom score: 42/100

Intelligent Internet scores 42/100 (D grade). Full methodology at [Freedom Score Methodology](/resources/freedom-score-methodology/).

**Infrastructure decentralisation (5/20):** No decentralised infrastructure exists. No blockchain, no validators, no consensus mechanism. However, the self-hostable models (II-Medical-8B GGUF, II-Search-4B, II-Thought-1.5B) and self-hostable tools (II-Agent via Docker, II-Commons with PostgreSQL) provide functional infrastructure decentralisation at the model layer. Once downloaded, these run entirely on user hardware with zero dependency on Intelligent Internet's servers. The planned blockchain (Bitcoin Core fork, 12 National Champions, BFT consensus) is ambitious but entirely theoretical.

**Governance decentralisation (2/20):** All decisions made by Mostaque as sole director of L42 Ltd. No governance mechanism exists. No token voting, no DAO, no community decision-making. The whitepaper describes progressive decentralisation (multi-sig to Oracle Council to Living Constitution Assembly) but none is implemented. Apache 2.0 licensing provides a form of soft governance: anyone can fork any repo without permission. This is meaningful but not governance.

**Token distribution fairness (7/15):** No token launched. The whitepaper design describes Proof-of-Benefit mining with no pre-mine, mirroring Bitcoin. If implemented as described, coins are minted only through verified useful AI work. Structurally fairer than most crypto launches. However, the Treasury receives a programmable share of block rewards (percentage TBD), initial multi-sig control by "founding Champions" means insider control before decentralisation, and key distribution parameters are undefined. Scored generously for design intent with a significant discount for nothing being implemented.

**Censorship resistance (8/15):** The downloadable models provide genuine censorship resistance today, independent of any blockchain. II-Medical-8B, II-Search-4B and II-Thought-1.5B are complete model weights, not API access. Once downloaded, no entity can revoke, restrict or censor them. Training datasets are published, enabling full reproducibility. II-Agent supports multiple LLM backends and can be self-hosted. However, the web app (agent.ii.inc) is a centralised service. No censorship-resistant network layer exists yet.

**Data sovereignty (7/15):** Self-hosted models run entirely on user hardware with no data leaving the device. II-Agent can be self-hosted via Docker. II-Commons deployable with local PostgreSQL. Training datasets openly published. The planned L2 Personal Layer describes privacy-preserving local enclaves. However, the hosted web app processes data through centralised servers. No zero-knowledge proofs implemented. No confidential computing.

**Open source and transparency (13/15):** The project's strongest dimension. Fourteen original repositories under Apache 2.0. Nine models with full weights on HuggingFace. Twenty datasets published openly. Training methodologies documented and reproducible. GGUF and MLX formats for local running. Companies House registration public. Deductions: 8 of 22 repos are forks (inflating apparent activity), Mostaque's documented history of misleading claims at Stability AI is a transparency concern, corporate financials not disclosed.

### Path to improvement

Three changes would materially increase Intelligent Internet's score:

1. **Launch a testnet.** The single biggest signal that the blockchain vision is real rather than aspirational. A working testnet with Proof-of-Benefit consensus, even with a handful of validators, would demonstrate that the whitepaper design translates to operational code. Until then, the protocol layer is a PDF.
2. **Publish a funded roadmap with milestones.** No mainnet timeline exists. No disclosed funding exists. A transparent roadmap with funded milestones and verifiable deliverable dates would address the most obvious gap between the ambition and the evidence. Construction projects do not get built without a programme. Neither do blockchains.
3. **Identify the genesis National Champions.** Twelve validators at genesis is a specific claim. Who are they? What hardware do they have? Where are they located? Publishing even a shortlist with hardware attestation would convert a whitepaper concept into a concrete commitment.

## Returns score: 30/100

FC scores 30/100 (F grade). Full methodology at [Returns Score Methodology](/resources/returns-score-methodology/).

**Token utility (8/20):** No token exists. The whitepaper describes Foundation Coins as the medium for Proof-of-Benefit consensus, where every minted coin proves useful AI work was performed. Four genesis benefit classes are defined: compute-inference, compute-training, data-curation, and agent-orchestration. The design is intellectually coherent and more purposeful than most token utility models. But it is a design in a PDF, not a functioning token in a live economy. Scoring reflects the quality of the concept with a heavy discount for the fact that none of it has been built.

**Value accrual (6/25):** The value accrual model is entirely conceptual. FC would accrue value through scarcity (21M cap, halving schedule), utility demand (staking for validation, Culture Credit reserve backing), and the Proof-of-Benefit requirement tying minting to useful work. On paper, this is one of the more thoughtful value accrual designs in the space. In practice, there is no blockchain, no consensus mechanism, no validators, and no working implementation of any of these mechanisms. The gap between whitepaper and reality is as wide as it gets.

**Supply dynamics (10/20):** The 21 million hard cap mirroring Bitcoin is the strongest dimension here. No pre-mine is described — coins are minted only through validated work. If implemented as designed, this would be structurally fairer than nearly every token launch in crypto. The halving schedule with 99% circulated within 12 years creates predictable scarcity. The Treasury receiving a programmable share of block rewards is the centralisation vector, with the percentage still undefined. Scored generously for scarcity model design, but the "if implemented" caveat carries significant weight when no code exists.

**Revenue sustainability (0/20):** Zero. No blockchain means no transaction fees. No token means no staking revenue. No marketplace means no trading fees. The AI models and tools are distributed for free under Apache 2.0. II-Medical, II-Agent, and II-Search generate no revenue for the project or potential token holders. This is commendable from an open-source perspective and disastrous from a returns perspective. There is no revenue model, no path to revenue, and no disclosed funding to sustain operations until one materialises.

**Liquidity and access (6/15):** There is no token to buy, sell, or stake. No exchange listing, no DEX pool, no OTC market. The unofficial Solana token using the "II" ticker on CoinSwitch has zero liquidity and is not endorsed by the project. Without disclosed funding, the capital backing that typically signals future exchange listings is absent. When and if FC launches, the Bitcoin-inspired mining model means tokens would need to be earned through validated work rather than purchased, which is philosophically interesting but creates a high barrier to initial access.

### Path to improvement

Three changes would materially increase Intelligent Internet's returns score:

1. **Build the blockchain and launch a token.** Every dimension of this score is hamstrung by the same fundamental problem: nothing exists. A working testnet with Proof-of-Benefit consensus and mineable FC tokens would transform every category from theoretical to assessable. Without a chain, there is nothing to score.
2. **Establish a revenue model for the AI tools.** Free, open-source AI models are a public good but not a returns proposition. Introducing optional paid tiers, enterprise licensing, or on-chain inference fees that flow to token holders would create a revenue stream. The current model generates goodwill but zero economic value for potential FC holders.
3. **Secure and disclose funding.** Building a novel L0 blockchain with BFT consensus, sovereign rollups, and a dual-currency AMM requires significant capital. Transparent disclosure of funding sources and runway would signal that the project can survive long enough to deliver on its whitepaper promises.
