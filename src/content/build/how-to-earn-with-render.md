---
title: "How to Earn with RENDER: Node Operator Guide"
description: "There is no RENDER staking. Here is what actually exists: GPU node operation, availability rewards, BME emissions, and the honest economics of providing compute to the Render Network."
difficulty: "intermediate"
category: "walkthrough"
publishDate: 2026-03-10
draft: true
---

## The short answer on staking

If you searched "how to stake RENDER", I need to be upfront: there is no native RENDER staking mechanism. There never has been. Holding RENDER in a wallet earns you nothing. No APY, no rewards, no emissions.

This is one of the most common misconceptions in the DeAI space, and it matters because it changes the entire earning calculus. RENDER is a compute settlement token with a burn-mint equilibrium model, not a staking asset. If you want passive yield from holding tokens, RENDER is not the right project. If you want to earn by providing GPU compute to a network with real customers, read on.

For the full project assessment, see our [Render Network review](/projects/render/).

## How you actually earn RENDER

There are two paths:

### 1. GPU node operator (rendering)

Provide approved NVIDIA GPUs to render frames for OctaneRender, Blender Cycles and Redshift jobs. Creators submit scenes, the network matches them to your GPU, you render the frames, and you earn RENDER from the BME emissions pool.

This is the established path. 69 million cumulative frames rendered. ~15,670 registered node operators. Real Hollywood and enterprise customers.

### 2. Compute node operator (AI/general)

New as of March 2025 via RNP-019, expanded in November 2025 via RNP-021. Provide GPUs for AI inference, video generation and general compute workloads. Separate from rendering — you cannot share hardware between the two.

This is the growth path. Partners include Manifest (distributed LLM for financial services), Think Agents (on-chain AI), and Dispersed.com (600+ AI models). Enterprise-grade expansion supports H100, H200, A100 and AMD MI300 series GPUs.

## Hardware requirements

### Rendering nodes

| Requirement | Minimum | Recommended |
|---|---|---|
| GPU | NVIDIA with CUDA, 6GB+ VRAM | RTX 4090 (score: 1.0) |
| RAM | 32 GB | 64 GB |
| Storage | 100 GB | SSD preferred |
| Download speed | 100 Mbps | Higher is better |
| Upload speed | 75 Mbps | Higher is better |

GPU scoring determines your share of rewards. The scoring table ranges from RTX 3050 (0.4x) to RTX 4090 (1.0x). A higher-scoring GPU earns proportionally more per unit of work.

### Compute nodes

Same bandwidth requirements. Must run Linux (Ubuntu 22.04 or 24.04). Docker required. Updated GPU scores include the RTX 5000 series:

| GPU | Score multiplier |
|---|---|
| RTX 5090 | 1.7x |
| RTX 5080 | 1.35x |
| RTX 5070 Ti | 1.1x |
| RTX 4090 | 1.0x (baseline) |

Enterprise tier (RNP-021): H100, H200, A100, L40, L4, T4, AMD MI300 series. Up to 1,200 H200-equivalent enterprise nodes planned.

Compute nodes must be dedicated — no sharing workloads with rendering nodes. This is effectively two parallel networks under one token.

## How to become a node operator

### Step 1: Apply

The Render Network is **permissioned**. You cannot just install software and start earning. Apply via the Render Foundation waitlist at renderfoundation.com. The Foundation reviews applications and approves operators.

This is worth pausing on. In a space where "permissionless" is a core value, Render requires explicit approval to participate as a provider. It is one of the reasons Render scores 3/10 on our Freedom Score — OTOY and the Foundation control who can supply compute.

### Step 2: Set up your wallet

You need a Solana wallet — Phantom or Solflare are the recommended options. RENDER is an SPL token on Solana. You will need a small amount of SOL (~0.1 SOL) for transaction fees.

If you hold old RNDR tokens on Ethereum, bridge them to RENDER on Solana at upgrade.rendernetwork.com. The conversion is 1:1. You pay your own gas for the bridge.

### Step 3: Configure your hardware

Once approved, install the Render node software. For rendering nodes, your GPU needs a current OctaneBench score — this determines your position in the job matching queue and your reward weighting.

For compute nodes, install Docker, configure the compute client, and ensure your Linux environment meets the specifications.

### Step 4: Stay online

Availability matters. Since RNP-015, node operators earn availability rewards for uptime regardless of whether they receive jobs. The formula weights idle time, OctaneBench score, VRAM, node age, and applies anti-Sybil decay after 3 nodes per wallet.

Current availability rewards: 12,500 RENDER/month split across rendering nodes, another 12,500 RENDER/month for compute client nodes. Your share depends on your uptime relative to all other operators.

## The economics — be honest with yourself

### BME emissions (what you earn)

Year 1 BME emissions totalled 9.13 million RENDER across all node operators. Year 2 drops to 5.91 million RENDER — a 35% reduction. After RNP-013 rebalanced allocations, weekly node job rewards sit at approximately 20,700 RENDER.

At current RENDER price (~$1.41), that is roughly $29,200 per week split across ~15,670 registered operators. If every operator were equally active, that would be $1.86 per operator per week. They are not equally active, and reward weighting by GPU score, uptime and work completed means top operators earn significantly more. But the pool is not large.

### BME burns (the deflationary thesis)

Every rendering or compute job burns 95% of the RENDER payment (5% goes to OTOY as a service fee). The thesis is that as usage grows, burns exceed emissions and RENDER becomes deflationary.

Current reality: monthly burns are approximately 50,000 RENDER versus monthly emissions of approximately 500,000 RENDER. That is a 10x gap. Burns are growing 279% year-over-year, which is genuinely impressive growth, but the network needs roughly 10x current usage before approaching equilibrium. This is the same structural challenge I covered in the [BME tokenomics comparison](/tokenomics/burn-mint-equilibrium-what-changes-for-akt/).

### Compute node economics

RNP-019 provides hourly benchmarks:

| GPU | Hourly rate |
|---|---|
| RTX 5090 | $0.45-$0.69 |
| RTX 4090 | $0.35 |
| RTX 3090 | $0.31 |

Compute node job rewards baseline: 10 RENDER per epoch for an RTX 4090 at 100% utilisation, recently increased to 25 RENDER per epoch via RNP-021.

The honest picture: at current prices and utilisation rates, GPU node operation on Render is not a high-margin business for consumer hardware. The economics depend heavily on RENDER price appreciation and network usage growth. If you already own the hardware and it would otherwise sit idle, the marginal economics work. If you are buying hardware specifically for Render, work the numbers carefully.

## Governance

RENDER holders can vote on Render Network Proposals (RNPs) via Nation.io. Proposals go through a two-stage process: initial vote (72 hours, no quorum) and final vote (6 days, 15% quorum, 60% approval threshold). Voting is token-weighted using RENDER in self-custody Solana wallets.

Participation is extremely low. RNP-022 saw 2.77% approve, 0.01% disapprove, 97.22% abstain. Only about 0.5% of supply actively votes. There are 22 RNPs to date — 7 implemented, 11 approved and on the roadmap. Governance is functional but barely used.

## What I would do

I hold RENDER. I bought it for the BME thesis and the OctaneRender moat — Hollywood rendering customers create real, verifiable demand that most DeAI projects cannot match. But I do not operate a node. My hardware is a Mac Studio, not a rack of NVIDIA GPUs.

If I were setting up a Render node today, I would go the compute route (RNP-019/021) rather than rendering. The AI compute market is growing faster, the GPU requirements overlap with hardware you might use for other purposes, and the enterprise expansion via RNP-021 signals where the Foundation sees future demand.

I would use hardware I already own. I would not buy GPUs specifically for Render at current reward levels. And I would treat the RENDER emissions as a bonus on top of hardware I use for other work, not as a primary income source.

The strongest bull case for Render is that 69 million frames rendered and growing proves there is real demand. If AI compute demand follows a similar trajectory, the BME model starts looking compelling at 3-5x current usage. But that is a bet on future growth, not current economics.
