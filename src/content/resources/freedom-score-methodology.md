---
title: "Freedom Score Methodology"
description: "How we assess decentralisation in AI projects. Six dimensions, scored criteria, and why the exact number matters less than the reasoning behind it."
publishDate: 2025-03-01
draft: false
---

Every crypto project claims to be decentralised. Most are not. The Freedom Score is our attempt to cut through the marketing and assess how much sovereignty a project actually delivers to its participants.

The score measures one thing: **how much control do users, contributors and token holders genuinely have, versus how much remains with a founding team, company or foundation?** A project that calls itself decentralised but runs permissioned infrastructure, holds majority token supply, and makes all decisions through a three-person team gets scored accordingly. We are testing for the "token bolted on" problem: the gap between the decentralisation narrative and the operational reality.

## The six dimensions

Each project is assessed across six dimensions. The weightings are not equal because not all dimensions contribute equally to user sovereignty.

### Infrastructure decentralisation (0-20)

The physical and technical layer. Who runs the nodes, who controls the hardware, and can anyone participate?

| Score range | Criteria |
|---|---|
| 0-4 | Fully centralised infrastructure operated by single entity |
| 5-8 | Multiple operators but controlled by foundation/company; permissioned |
| 9-12 | Permissionless node operation with some centralisation vectors (e.g., reliance on single cloud provider, foundation-run critical infrastructure) |
| 13-16 | Broadly distributed infrastructure with minor centralisation concerns |
| 17-20 | Fully permissionless, geographically distributed, no single points of failure |

### Governance decentralisation (0-20)

Who makes decisions? Token votes are necessary but not sufficient. We look at whether governance power is genuinely distributed or concentrated among insiders who happen to hold the most tokens.

| Score range | Criteria |
|---|---|
| 0-4 | All decisions made by founding team / single entity |
| 5-8 | Token voting exists but team holds controlling stake or has veto power |
| 9-12 | Functional governance with broad participation but significant team influence |
| 13-16 | Active DAO governance with meaningful community control and transparent processes |
| 17-20 | Fully community-governed with no privileged parties, immutable core contracts |

### Token distribution fairness (0-15)

How the token supply was created and distributed. Fair launches score higher than insider-heavy allocations. Vesting schedules, VC concentration and whale dominance all factor in.

| Score range | Criteria |
|---|---|
| 0-3 | Majority allocation to team/investors with short or no vesting |
| 4-6 | Heavy insider allocation but with meaningful vesting schedules |
| 7-9 | Balanced allocation with fair launch elements or significant community distribution |
| 10-12 | Majority community-distributed through mining, staking, or open participation |
| 13-15 | Fair launch or fully community-distributed with no insider pre-mine |

### Censorship resistance (0-15)

Can anyone use the network without permission? Can the project operators block, filter or restrict what participants do?

| Score range | Criteria |
|---|---|
| 0-3 | Platform can censor users, restrict access, or modify outputs at will |
| 4-6 | Some censorship vectors exist; terms of service can restrict usage |
| 7-9 | Resistant to casual censorship but vulnerable to coordinated pressure |
| 10-12 | Strong censorship resistance with few realistic attack vectors |
| 13-15 | Fully censorship-resistant; no entity can restrict access or modify outputs |

### Data sovereignty (0-15)

Who controls user data? Self-custody, privacy guarantees, data portability and platform visibility all contribute here.

| Score range | Criteria |
|---|---|
| 0-3 | User data controlled entirely by project; no export, no self-custody |
| 4-6 | Some data portability but platform retains control and visibility |
| 7-9 | Users control their data with some platform dependencies |
| 10-12 | Strong self-custody of data with verifiable privacy guarantees |
| 13-15 | Full user data sovereignty; zero-knowledge or fully encrypted; no platform visibility |

### Open source and transparency (0-15)

Is the code public? Can operations be verified independently? Are finances disclosed? Reproducible builds, on-chain verification and transparent treasuries all score higher.

| Score range | Criteria |
|---|---|
| 0-3 | Closed source; no visibility into operations or codebase |
| 4-6 | Partially open source; key components proprietary |
| 7-9 | Mostly open source with transparent operations but some opaque elements |
| 10-12 | Fully open source with regular public reporting and verified on-chain operations |
| 13-15 | Fully open source, reproducible builds, all operations verifiable on-chain, transparent treasury |

## Grading scale

The six dimensions produce a score out of 100, which maps to a letter grade.

| Grade | Score | Meaning |
|---|---|---|
| A | 85-100 | Genuinely decentralised. Sovereignty-first. |
| B | 70-84 | Meaningfully decentralised with minor concerns |
| C | 55-69 | Partially decentralised. Significant centralisation vectors remain. |
| D | 40-54 | Largely centralised with decentralisation narrative |
| F | 0-39 | Centralised project with a token bolted on |

No project we have reviewed scores an A. That is by design. Genuine, full-stack decentralisation is extraordinarily rare and most projects that claim it are overstating their position. A score in the B range represents genuinely impressive decentralisation with realistic acknowledgement that perfection does not exist yet.

## How /100 maps to /10 on project cards

On project listing pages, the Freedom Score displays as a simple number out of 10. This is the /100 score divided by 10 and rounded to the nearest whole number. So a project scoring 63/100 displays as 6/10, and a project scoring 35/100 displays as 4/10.

The /10 display is for quick comparison. The full /100 breakdown with evidence for each dimension lives in the project review itself. Always read the full review before drawing conclusions from the headline number.

## Evidence requirements

Every score must be justified with specific, verifiable evidence. We follow a source hierarchy:

1. **On-chain data** (block explorers, smart contracts, governance records) beats everything else. If the whitepaper says one thing and the chain says another, the chain wins.
2. **Primary documentation** (official docs, whitepapers, GitHub repositories) is the baseline.
3. **Independent reporting** (audits, security research, investigative journalism) provides crucial third-party verification.
4. **Market data** (CoinGecko, CoinMarketCap, exchange data) for supply and distribution figures.
5. **Community and social data** used for sentiment only, never for factual claims.

Single-source claims are flagged. If only one source supports a data point, we note the limitation rather than present it as established fact.

## Subjectivity acknowledgement

The score ranges define criteria-based boundaries. A project either has permissionless node operation or it does not. It either has a fair launch or it does not. These boundaries are as objective as we can make them.

The exact position within a range involves editorial judgement. Two projects might both have "permissionless node operation with some centralisation vectors" (9-12 range), but one has 63 providers and the other has 8,000 nodes. The researcher places them differently within that range based on the evidence. This is a feature, not a bug. Pretending that decentralisation assessment is purely mathematical would be dishonest.

We publish the evidence alongside every score so you can disagree with our placement and reach your own conclusion. The reasoning matters more than the number.

## Scores change over time

Every Freedom Score is a point-in-time assessment. Projects evolve. Governance mechanisms get deployed or abandoned. Token distributions shift. Security audits happen or do not happen. Chain migrations change the infrastructure picture entirely.

We update scores when material changes occur, note the date of assessment, and explain what changed. A project that scores 6/10 today might score 8/10 in twelve months if it delivers on its decentralisation roadmap. It might also score 4/10 if governance centralises further.

Each project review includes a "path to improvement" section identifying specific, concrete steps that would increase the score. This is not a wish list. It is our assessment of what would move the needle based on the evidence we have reviewed.
