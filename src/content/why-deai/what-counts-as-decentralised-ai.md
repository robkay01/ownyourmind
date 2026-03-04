---
title: "What Counts as Decentralised AI?"
description: "Every crypto project is an AI project now. Most of them are lying. A practitioner's framework for separating genuine DeAI from narrative-surfing."
publishDate: 2025-03-05
draft: false
---

## The problem with the AI label

There are 911 tokens in CoinMarketCap's AI & Big Data category. That number was under 100 two years ago.

Some of these projects were building AI infrastructure before the narrative existed. Some have made genuine technical pivots. And a significant number have done nothing more than update their website copy and add "AI" to the tagline.

The result is a category so broad it is meaningless. CoinMarketCap's AI category includes Bittensor (a network designed from the ground up to incentivise machine learning), NEAR Protocol (a sharded L1 that rebranded as "The Blockchain for AI"), and Injective (a DeFi chain with no AI product at all). Messari's classification system includes "AI Meme" as a legitimate sub-sector alongside AI Infrastructure. That tells you everything about the state of DeAI taxonomy.

This matters because if you are trying to evaluate projects, allocate capital, or understand what decentralised AI actually is, the existing labels are useless. So here is my attempt at drawing a line.

## Three tests for genuine DeAI

I have spent the last several months reviewing projects across this space. Running nodes, staking tokens, reading whitepapers and docs, checking GitHub repos, verifying on-chain data. Out of that work, three tests have emerged that I apply to every project I evaluate.

### The provenance test

Did the AI capability come from the project's founding thesis, or was it bolted on in response to a market narrative?

This sounds simple. It is not. Some projects have legitimate technical credentials that predate the AI hype cycle. Bittensor was designed as a decentralised machine learning network from day one. Numerai has been running a crowdsourced ML hedge fund since 2015. Venice built private inference as its core product.

Others arrived at AI through genuine technical evolution. Render started as a distributed GPU network for 3D rendering. GPUs that render frames can also run inference. The underlying infrastructure, distributed GPU scheduling and payment rails, translates directly. That is not AI-washing. That is a legitimate expansion of an existing capability.

Then there are the projects where the timing tells the story. PathDAO was a gaming guild whose token fell 99%. It tried pivoting to social apps, then NFT fashion, then music. Nothing worked. In December 2023, it relaunched as Virtuals Protocol, an AI agent creation platform. The AI agent category then grew 322% in Q4 2024 and Virtuals rode the wave. I am not saying Virtuals has no product. It does. But the provenance is "what narrative will save this token," not "what technical problem needs solving."

APENFT rebranding to AINFT in October 2025, a full year after the AI agent peak, with zero pre-existing AI work, is the most transparent example. Justin Sun's TRON ecosystem adding "AI infrastructure" to what was an NFT marketplace is pure narrative arbitrage.

### The removal test

If you took the AI component out of the project, would it still make sense?

Bittensor without AI is nothing. The entire consensus mechanism, Yuma Consensus, is designed to reward machine learning contributions. Remove AI and there is no network. Same for Gensyn. Same for Venice's private inference product.

Now consider Chainlink. It appears in several AI aggregator categories because it provides data infrastructure. But Chainlink without AI is still Chainlink. It provides oracle services to DeFi, gaming, insurance and dozens of other sectors. AI workloads might use Chainlink data feeds, but that does not make Chainlink an AI project any more than AWS is an AI company because OpenAI runs on it.

Filecoin is in the same position. CoinMarketCap lists it as the fourth largest AI & Big Data token by market cap. Protocol Labs has not rebranded Filecoin as an AI project. Their positioning is clear: AI workloads need storage, and Filecoin provides storage. That is an honest framing. Being useful to AI is not the same as being AI.

The removal test exposes the difference between AI as the foundation and AI as a customer.

### The mechanism test

This one comes from Vitalik Buterin's taxonomy of crypto-AI intersections. The question is: what role does AI play in the protocol's mechanism?

The cleanest case is AI as a participant in the game. Arbitrage bots on DEXs are AI using crypto infrastructure. The blockchain mechanism stays the same. The AI is just a more sophisticated player. This is legitimate but it does not make the DEX an "AI project."

The interesting case is AI as the objective of the game. The blockchain exists specifically to build, train, coordinate or distribute AI models. Bittensor's subnets are this. Gensyn's verified compute for ML training is this. The token incentives exist to produce intelligence. Remove the blockchain and you lose the coordination mechanism that makes the AI work.

The problematic case is AI as marketing for the game. The blockchain has its own purpose (DeFi, NFTs, gaming, storage) and AI has been added to the narrative without changing the underlying mechanism. The protocol works identically with or without the AI label.

## The spectrum

These three tests produce a spectrum, not a binary. Here is how I categorise it.

### Core DeAI

AI is the founding thesis. The protocol was designed around AI workloads. The token incentives exist to produce, coordinate or distribute intelligence. Remove AI and the project has no reason to exist.

**Examples:** Bittensor, Gensyn, Venice, io.net, Morpheus, Grass, Ocean Protocol, Vana

These projects range in quality and maturity. Some are live with real usage. Some are still building. But AI is what they are, not a feature they added.

### DeAI-adjacent

Real technology that serves AI workloads, but the protocol is general-purpose. AI is a primary use case, possibly the largest, but not the only one. The project would still function without AI.

**Examples:** Akash (general-purpose compute), Render (GPU rendering expanded to inference), Phala (confidential computing pivoting to AI agents), Nillion (blind computation with AI inference as one application)

I reviewed four privacy/confidential computing projects recently. All four, Nillion, Phala, Secret Network and Oasis, are general-purpose privacy infrastructure that has pivoted toward AI as a use case. Phala is the furthest along, with GPU TEE inference live on H100/H200/B200 hardware, 758,000 daily AI agent contract executions, and an integration with the Eliza V2 agent framework. But the underlying tech is horizontal. It runs trading bots, healthcare analytics and LLM inference on the same infrastructure.

DeAI-adjacent projects can be excellent investments and excellent infrastructure. They deserve coverage. But calling them DeAI projects without noting the general-purpose origin would be dishonest.

### AI-washed

Existing crypto project with "AI" added to the marketing after the narrative shifted. The AI component is either non-existent, embryonic, or incidental to the actual product. The project existed before AI and would continue to exist without it.

**Examples:** AINFT (formerly APENFT), SuperVerse (added AI to a list alongside gaming, NFTs, DeFi), Secret Network (DeFi ecosystem collapsed with TVL down 94%, AI is the replacement narrative), the hundreds of "GPT" tokens with no underlying technology

Secret Network is the most instructive example because it has real technology. Its TEE-based confidential computing genuinely can run private AI inference. The SecretAI SDK exists. But the context matters: the DeFi ecosystem that was the original product failed. TVL went from $118 million to $7 million. The "confidential AI" positioning filled a vacuum left by a collapsing core business. The SDK has 9 GitHub stars. The team is "actively seeking customers and partners," which is their own language for having infrastructure without adoption.

Having real tech does not exempt a project from the AI-washing label if the pivot is narrative-driven rather than product-driven.

## Why this matters

The AI crypto sector peaked at roughly $70 billion in December 2024. It then fell 75%, erasing $53 billion in market value. AI tokens posted negative 50% year-to-date in 2025 despite being the second most popular narrative in crypto.

That is what happens when a category is so poorly defined that genuine infrastructure gets lumped in with narrative tokens. Capital flows in on hype, discovers that most of the "AI projects" do not have AI products, and flows out again. The projects doing real work get caught in the drawdown alongside the ones that were always empty.

An arXiv paper from 2025 reviewed the sector and found that most AI token projects "present a decentralized architecture in theory, while retaining centralized control over core operations in practice." A separate survey of 1,200 startups (not just crypto) found that 40% of companies branding themselves "AI-first" had zero machine learning code in production. Twenty-five percent were simply wrapping OpenAI's API with a new interface.

These numbers should make anyone cautious about taking AI claims at face value. In crypto, where the incentive to rebrand is even stronger (token price correlation with narrative) the proportion is likely worse.

## How I use this framework

Every project review on this site goes through these tests. When I write about Bittensor, the AI credentials are obvious. When I write about Akash, I am honest that it is a general-purpose compute marketplace where AI happens to be the highest-demand workload. When something does not pass the bar, it does not get a review.

This is not about purity. DeAI-adjacent projects can be more practically useful than Core DeAI ones. Akash's compute marketplace works today and is cheaper than AWS. That matters more than whether it was founded as an "AI project." But the distinction matters for understanding what you are buying, what the risks are, and whether the AI narrative is driving fundamentals or just price.

The three tests are simple. Did AI come first or after the narrative? Would the project survive without AI? Does AI change the mechanism or just the marketing? If a project fails all three, it is probably not what it claims to be.

## The line we draw

Decentralised AI means infrastructure and protocols that exist specifically to build, train, distribute or run AI in a way that no single entity can control. The blockchain is not a payment layer bolted onto a centralised AI service. The AI is not a marketing label bolted onto an existing blockchain. The two are structurally interdependent.

Everything else is either adjacent infrastructure that serves AI (which can be excellent) or narrative-surfing (which is not). Knowing the difference is half the work of investing in this space.
