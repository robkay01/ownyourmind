---
title: "Week 1: What I'm Running"
description: "First dispatch from the frontier. What hardware is on my desk, what tokens I am staking, and why I built this site."
publishDate: 2025-03-01
tags: ["personal", "setup", "morpheus", "bittensor"]
draft: false
---

## Why this exists

I have been running decentralised AI infrastructure for six months. Staking compute, testing protocols, breaking things and learning what actually works versus what is marketing. Twenty years of managing complex construction projects gives you a specific lens: you evaluate systems based on whether they deliver, not on whether the pitch deck is compelling.

There is a gap in the coverage. Most DeAI content is either protocol marketing or trader speculation. Almost nobody writes about it from the perspective of someone with hardware on their desk, tokens locked in contracts and real returns (or losses) to report.

That is what this journal is for. Weekly dispatches from Fremantle. No hype.

## What is on my desk

My primary setup:

- **Mac Studio M4 Max** (64GB unified memory). Running local inference via Ollama for daily work. Silent, 60W draw, runs 24/7.
- **RackNerd VPS** in Texas. Running Agent Zero with Docker, connected to Venice AI for inference. This handles autonomous agent tasks that need to run continuously without tying up my local machine.

Total out-of-pocket for the compute setup is roughly A$5,000 (Mac Studio) plus US$30/month (VPS). Power cost for the Mac Studio is negligible. The VPS cost is a rounding error.

I previously ran a Raspberry Pi as a Bitcoin node via RaspiBlitz but the Pi is too underpowered for current requirements. It sits on a shelf now.

## What I am staking

Current positions as of this week:

- **MOR**: Capital provider. stETH staked in the Morpheus smart contract. Earning daily MOR emissions. The 90-day lock-up means I am committed. I will publish actual return figures once I have a full month of data. No sense reporting partial numbers.
- **TAO**: Holding as network exposure. I explored mining but the barrier to entry on established subnets exceeds my hardware capability. The position is passive.
- **VVV/DIEM**: Staking VVV on Venice.ai to mint DIEM tokens for inference credits. This is a small position used mainly to access Venice's inference API at reduced cost.

I am not going to disclose position sizes. What matters is the mechanics and the returns, not my portfolio allocation. I will share percentage returns when the data is complete.

## What I am watching

Three things this week:

**Morpheus compute marketplace.** The mainnet compute marketplace is live. This is the first real test of whether the tokenomics translate into functioning infrastructure. Compute demand drives MOR burns, which drives token value. Early data will tell us whether the demand side is materialising.

**Bittensor subnet dynamics.** New subnets continue launching. The interesting ones are those with clear commercial use cases rather than research experiments. Subnet 18 (code review) and others focused on practical inference are worth monitoring.

**Open model releases.** Every major open-weight model release narrows the gap between centralised and decentralised AI. When Llama 4 or Qwen 3 drops, that is another step toward sovereign inference being practical for serious work. I test every significant release on my Mac Studio to see what is usable locally.

## What I am testing

This week I set up Agent Zero with Venice AI on my VPS. The goal: a persistent AI agent that runs autonomously, handles research tasks and operates on infrastructure I control. Venice provides the inference (uncensored, no logging). The VPS provides the compute for the agent framework itself.

Early impressions: it works. The agent can research topics, process data and chain multi-step tasks. It is not yet at the level where I would trust it with financial operations. But for research and data processing, it is functional and useful today.

Full walkthrough coming in the [Build section](/build/agent-zero-venice-morpheus/).

## Next week

Publishing the Mac Studio setup guide and starting on the Morpheus deep-dive project review. Stay sovereign.
