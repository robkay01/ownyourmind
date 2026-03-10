---
title: "Flux Node Setup: How to Earn with FLUX"
description: "How to set up a FluxNode and earn FLUX. Node tiers, ArcaneOS installation, Titan fractional staking, and the honest economics after Proof of Useful Work killed GPU mining."
difficulty: "intermediate"
category: "walkthrough"
publishDate: 2026-03-10
draft: true
---

## GPU mining is dead

If you searched "Flux GPU mining", I need to update you. Since the PoUW v2 soft fork at block 2,020,000 (October 2025), traditional GPU hash mining no longer works for earning FLUX. Mining pools and GPU mining software are obsolete.

Flux replaced GPU mining with Proof of Nodes. FluxNodes now handle all block production and transaction validation. The rationale was that mining pools posed centralisation risks and provided no direct utility to the network. FluxNodes contribute compute, storage and deployment services — useful work, not hash puzzles.

The way to earn FLUX is now node operation or Titan fractional staking. For the full project assessment, see our [Flux review](/projects/flux/).

## The three paths to earning FLUX

| Path | Capital required | Technical skill | Earnings potential |
|---|---|---|---|
| **FluxNode (Cumulus)** | 1,000 FLUX (~$60) + hardware | Intermediate | Low at current prices |
| **FluxNode (Nimbus)** | 12,500 FLUX (~$750) + hardware | Intermediate | Moderate at current prices |
| **FluxNode (Stratus)** | 40,000 FLUX (~$2,400) + hardware | Intermediate | Best per-node at current prices |
| **Titan staking** | 50+ FLUX (~$3) | Beginner | Lowest, but no hardware |

## Node tier requirements

| Spec | Cumulus | Nimbus | Stratus |
|---|---|---|---|
| CPU | 2 cores / 4 threads | 4 cores / 8 threads | 8 cores / 16 threads |
| RAM | 8 GB | 32 GB | 64 GB |
| Storage | 220 GB SSD | 440 GB NVMe | 880 GB NVMe RAID |
| Disk write speed | 180 MB/s | 400 MB/s | 800 MB/s |
| Bandwidth | 25 Mbps up/down | 50 Mbps | 100 Mbps |
| FLUX collateral | 1,000 | 12,500 | 40,000 |

Additional requirements across all tiers:
- Public IP address (maximum 8 nodes per IP)
- TPM 2.0 (physical chip or virtual)
- UEFI Boot Mode enabled
- AMD64 (x86-64) architecture only
- 97%+ uptime
- NVMe drives strongly recommended — 5x faster than traditional SSDs

## Block rewards after PoUW v2

Block time: 30 seconds (reduced from 2 minutes). Block reward: 14 FLUX per block.

| Tier | Share | FLUX per block | Daily pool (~2,880 blocks) |
|---|---|---|---|
| Stratus | 64.3% | 9.0 FLUX | ~25,920 FLUX |
| Nimbus | 25.0% | 3.5 FLUX | ~10,080 FLUX |
| Cumulus | 7.1% | 1.0 FLUX | ~2,880 FLUX |
| Foundation | 3.6% | 0.5 FLUX | ~1,440 FLUX |

Total daily emissions: approximately 40,320 FLUX. A 10% annual emission reduction replaces the old halving mechanism, targeting ~1% inflation by 2036. New max supply: 560 million FLUX.

### Parallel asset bonus

For every 1 FLUX earned in block rewards, node operators earn an additional 0.1 of each parallel asset (FLUX tokens on other chains — Ethereum, BSC, Solana, TRON, Avalanche, Polygon and others). With all parallel assets active, this can potentially double total earnings. Parallel assets swap 1:1 with native FLUX via Fusion.

## Setting up a FluxNode with ArcaneOS

ArcaneOS is required for all new nodes. It replaced legacy FluxOS in March 2025 and is mandatory for Progressive Node Rewards eligibility.

### What you need before starting

- Hardware meeting your chosen tier's requirements
- ZelCore Wallet or SSP Wallet with FLUX collateral loaded
- ArcaneOS ISO from images.runonflux.io/latest
- Bootable USB (via Balena Etcher on Mac/Windows or Rufus on Windows)
- For VMs: Proxmox 8.4.1 (fully supported) or VMware v17

### Installation walkthrough

**1. Prepare the environment.** For bare metal, flash the ArcaneOS ISO to USB and boot from it. For a VM, create a virtual machine with UEFI, TPM 2.0 enabled, and resources matching your tier.

**2. Run the installer.** ArcaneOS uses a graphical installer. Configure keyboard, hostname, console user (pre-defined as "console"), networking, and UPnP ports. All disks are encrypted via LVM.

**3. Enrol the Platform Key.** Access UEFI/OVMF firmware to import the Flux Platform Key for Secure Boot. This is a security requirement — ArcaneOS uses a chain of trust during installation.

**4. Configure the FluxNode.** Access the web UI from the launch screen. Choose your configuration method: Manual, ZelCore Token, or SSP Token. Enter your wallet details and select your node tier.

**5. Set up notifications.** Configure Discord or Telegram webhooks for alerts. You want to know immediately if your node goes down.

**6. Configure SSH access.** Enable the operator account using ed25519 keypairs. Set port and repository restrictions.

**7. Review and save.** Confirm your configuration, save via Flux Storage or as JSON/YAML for backup.

**8. Wait for sync.** Monitor the Metrics Dashboard as the node syncs the blockchain. This takes time on first boot. Do not start the node from your wallet until sync is complete.

**9. Start the node.** From ZelCore or SSP Wallet, start your FluxNode. The collateral is locked on-chain.

### Limitations

- ArcaneOS focuses on home-based nodes. VPS usage is limited due to Secure Boot constraints.
- AMD64 only — no ARM support.
- VMware v16 is incompatible. Use v17 or Proxmox.

## Titan fractional staking

If you do not want to run hardware, Titan lets you stake FLUX and earn rewards from managed nodes operated by InFlux Technologies.

| Parameter | Detail |
|---|---|
| Minimum stake | 50 FLUX (~$3) |
| Maximum per stake | 10,000 FLUX |
| Maximum per FluxID | 40,000 FLUX |
| Lock periods | 3, 6, or 12 months |
| Payouts | Twice weekly (Monday and Thursday, ~9:00 AM UTC) |
| Parallel assets | Not included — native FLUX only |

Longer lock periods yield higher returns and lower fees. Collateral cannot be withdrawn during the lock period. Rewards can be redeemed early only if at least 50 FLUX has accumulated.

Currently 111 active Titan Nodes with approximately 3.8 million FLUX staked.

**The custody question.** Titan is described as "non-custodial" and uses ZelCore or SSP Wallet. However, hardware is managed by InFlux Technologies on enterprise machines, and payouts are executed from Titan's multi-signature wallet by the Flux team. This is effectively a managed arrangement despite the non-custodial branding.

## The honest economics

At current FLUX price (~$0.06), let me work the numbers.

The total daily emission pool is ~40,320 FLUX worth roughly $2,400. Split across an estimated 10,000-14,000 nodes (exact count varies by source — the live dashboard at nodeinfo.app.runonflux.io gives the current figure):

- **Cumulus:** The 2,880 FLUX daily Cumulus pool divided across thousands of Cumulus nodes yields cents per day per node. Hardware and hosting costs are not covered.
- **Nimbus:** Better, but still likely below the cost of running the hardware.
- **Stratus:** The 25,920 FLUX Stratus pool divided across fewer Stratus nodes produces the best per-node returns. At $0.06 per FLUX, a Stratus node might earn $1-2/day before parallel assets. Still tight against hardware costs.

**Progressive Node Rewards** add FluxCloud revenue sharing: 80% of FluxCloud application revenues go to ArcaneOS node operators (25% to Cumulus, 33% to Nimbus, 42% to Stratus). However, FluxCloud has approximately 100 deployed apps and the revenue share is still in early rollout.

**FluxEdge** offers a separate GPU revenue stream. If you have an NVIDIA GPU (GTX 1060 minimum, RTX 3060+ recommended), you can contribute it to FluxEdge via the FluxCore desktop app and earn rental fees ($0.10-2.00+ per GPU hour depending on the card). This is independent of FluxNode rewards and is the closest thing to "GPU mining" that still exists on Flux.

### The real thesis

Node economics at current FLUX prices do not generate positive returns for most operators. This is why the node count declined from 14,000+ to approximately 8,000-10,000 — operators who needed immediate returns have left.

Running a FluxNode makes sense if:
- You believe FLUX will appreciate significantly from current levels
- You have existing hardware with spare capacity
- You want to contribute compute to a decentralised network and treat the FLUX as a long-term position
- You are interested in the FluxCloud/FluxEdge revenue streams as they develop

It does not make sense if you need current-price returns to cover hardware and hosting costs.

## Monitoring and maintenance

Nodes must maintain 97%+ uptime. If you go offline, you miss payout cycles and are sent to the back of the reward queue. No slashing — you just stop earning.

ArcaneOS includes built-in monitoring with Discord/Telegram alerts. For external monitoring, UptimeRobot (free tier, 50 monitors) can track your node's API endpoint and web UI.

The latest ArcaneOS "Regal Elephant" update adds automatic rollback on npm install failures and smarter UPnP port selection, reducing maintenance burden.

**Flux TestNet** is available for testing the full setup before committing real FLUX collateral. Use it.

## Where to buy FLUX

Available on Binance, Kraken, KuCoin, Gate.io, and Crypto.com. FLUX exists as parallel assets on 10+ chains (Ethereum, BSC, Solana, TRON, Avalanche, Polygon and others), all swappable 1:1 via Fusion. Daily volume is approximately $2 million.
