# Own Your Mind — DeAI Project Research Plan

## Purpose

This document defines the standard methodology for researching decentralised AI projects for review on ownyourmind.ai. It is designed to be executed by a human researcher, AI agent (Agent Zero), or Claude/Claude Code.

Every project researched using this plan produces a structured, database-importable output in a consistent format, ensuring all projects are directly comparable across qualitative and quantitative metrics.

---

## How To Use This Document

1. Select a project from the Research Queue (Section 1)
2. Follow the Research Methodology (Section 2) to gather information
3. Complete every field in the Structured Output Schema (Section 3)
4. Run the Fact-Checking Protocol (Section 4) before finalising
5. Compile the Source Log (Section 5)
6. Output the final research report in the specified format (Section 6)

**For AI agents:** Execute this plan sequentially. Do not skip fields — if information cannot be found, mark the field as `null` and add a note in the `research_gaps` array explaining what was missing and why. Do not fabricate or infer data. If a data point requires estimation, flag it explicitly with `"estimated": true` and explain the basis for the estimate.

---

## Section 1: Research Queue

### Project Categories

| Category | Projects | Priority |
|----------|----------|----------|
| Compute & Infrastructure | Morpheus, Akash, Render, Gensyn, io.net | High |
| Intelligence Networks | Bittensor (TAO), SingularityNET/ASI Alliance | High |
| Agent Platforms | Fetch.ai, Autonolas, Virtuals, ElizaOS | Medium |
| Data & Privacy | Ocean Protocol, Sahara AI, Near Intents, Vana | Medium |
| Local & Personal AI | Ollama, LM Studio, local runtimes | Low |
| Emerging | New projects as identified | As needed |

### Adding New Projects

A project qualifies for research if it meets at least 3 of these 5 criteria:

1. Claims to decentralise some aspect of AI (compute, data, inference, training, or coordination)
2. Has a live, functioning product or protocol (not just a whitepaper)
3. Has a token or defined tokenomics model
4. Has an active developer community or measurable network activity
5. Is discussed meaningfully in DeAI communities (X, Discord, governance forums)

---

## Section 2: Research Methodology

### 2.1 Source Hierarchy

Research must draw from sources in the following priority order. Higher-tier sources take precedence when information conflicts.

**Tier 1 — Primary Sources (Required)**
These must be consulted for every project. If a Tier 1 source does not exist for the project, note the gap.

- Official project documentation (docs site, gitbook, wiki)
- Official whitepaper or litepaper
- Smart contract code and on-chain data (verified contracts on block explorers)
- GitHub/GitLab repositories (commit history, contributor count, activity)
- Official governance forums and proposals
- Project blog / official announcements

**Tier 2 — Authoritative Third-Party Sources (Required for verification)**
At least 3 Tier 2 sources must be consulted per project.

- CoinGecko / CoinMarketCap (market data, supply, exchanges)
- DeFiLlama (TVL, protocol metrics)
- Messari / Token Terminal (research reports, on-chain metrics)
- Dune Analytics dashboards (community-built, verify methodology)
- Block explorer data (Etherscan, Arbiscan, Subscan, etc.)
- Audit reports (from recognised firms: Trail of Bits, OpenZeppelin, Halborn, Certik, etc.)

**Tier 3 — Informed Commentary (Use for context, not as primary evidence)**
Useful for understanding narrative and community sentiment but must not be sole source for any factual claim.

- Established crypto research newsletters (0xSammy, 0xJeff, Messari, Delphi Digital)
- Project founder/team interviews (podcasts, AMAs, conference talks)
- Community forums (Discord, Telegram — capture sentiment, not facts)
- X/Twitter threads from credible analysts
- YouTube analyses from recognised researchers

**Tier 4 — Avoid or Flag**
Do not use as sources unless explicitly flagged and contextualised.

- Anonymous forum posts without verifiable claims
- Paid promotional content / sponsored articles
- Price prediction sites
- AI-generated content farms
- Project marketing materials used as sole evidence for performance claims

### 2.2 Research Sequence

Execute research in this order for each project:

**Step 1: Project Identity & Overview (30 mins)**
- Read the official documentation front-to-back (at minimum: introduction, architecture, tokenomics sections)
- Read the whitepaper/litepaper
- Identify the founding team and core contributors
- Determine the project's chain, launch date, and current status

**Step 2: Recent Events Sweep (20 mins) — MANDATORY**
This step exists because documentation and whitepapers are often outdated. The most important data for a live project is frequently in the last 12 months of announcements, not the original whitepaper.
- Search for "[Project Name] 2025 2026" and "[Token] tokenomics changes" to surface recent developments
- Check the project's official blog/announcements for the last 12 months
- Check governance forum for passed/failed proposals that changed protocol parameters (inflation, fees, emissions, staking)
- Search for recent funding rounds, ETF filings, exchange listings, or delistings
- Search for security incidents, exploits, or audit results in the last 12 months
- Search for major partnerships, integrations, or protocol upgrades
- Check DefiLlama for current fees/revenue data (not just TVL)
- Document all findings with dates — these override any contradictory information from older docs or whitepapers
- If the project has been live for 6+ months, this step requires a minimum of 5 web searches and 3 source reads
- **Failure to complete this step was the root cause of the NEAR Protocol research miss (2026-03-12): inflation halving (Oct 2025), fee switch (Feb 2026), governance controversy, and ETF filing were all missed because only docs/whitepaper were read, not recent announcements.**

**Step 3: Technical Architecture (45 mins)**
- Map the technical architecture from documentation
- Review GitHub: languages used, commit frequency, contributor count, open issues, last commit date
- Identify dependencies and integrations
- Determine what is on-chain vs off-chain
- Assess actual decentralisation of infrastructure (nodes, validators, governance)

**Step 4: Tokenomics & Financial Data (45 mins)**
- Document the complete token model from primary sources
- Verify supply data against on-chain sources (block explorer, contract)
- Record current market data (price, market cap, FDV, volume, circulating vs total supply)
- Map emissions schedule and any upcoming events (halvings, unlocks, vesting cliffs)
- Calculate real staking yields (net of inflation, gas costs, lock-up periods)
- Identify token utility: what does holding/staking the token actually get you?

**Step 5: Participation & Usage (30 mins)**
- Document all ways to participate (stake, run node, build, use as consumer)
- Record minimum requirements for each participation type (hardware, capital, technical skill)
- Identify barriers to entry
- Assess actual current usage (active users, transactions, compute delivered, etc.)

**Step 6: Ecosystem & Community (20 mins)**
- Record community size across platforms (Discord members, X followers, GitHub contributors, governance participation)
- Note key partnerships and integrations
- Assess governance: who actually controls decisions?
- Note any notable backers, investors, or grants

**Step 7: Risk Assessment (20 mins)**
- Review audit history and any security incidents
- Assess regulatory risk
- Evaluate team risk (anonymous vs doxxed, single points of failure)
- Assess technical risk (dependencies, centralisation vectors)
- Document any known controversies or concerns

**Step 8: Freedom Score Assessment (15 mins)**
- Complete the Freedom Score rubric (Section 3.2)
- Document evidence for each sub-score

**Step 9: Returns Score Assessment (20 mins)**
- Complete the Returns Score rubric (Section 3.3)
- Score all five dimensions with evidence for each
- Cross-reference every evidence statement against the editorial body text and research data
- Run the scoring checklist (Section 3.3.2) before finalising
- Verify revenue claims against DeFiLlama, Token Terminal, or on-chain data (see Revenue Estimation Guidance in the Returns Score Methodology)
- For pre-token projects: set Liquidity & Access to 0/15 and Revenue Sustainability to 0 if no revenue exists

---

## Section 3: Structured Output Schema

All research output must conform to this schema. This is the database record for each project. Output as JSON.

### 3.1 Complete Project Schema

```json
{
  "meta": {
    "project_id": "",
    "research_date": "YYYY-MM-DD",
    "researcher": "",
    "version": 1,
    "last_updated": "YYYY-MM-DD",
    "status": "draft | fact-checked | published",
    "research_gaps": []
  },

  "identity": {
    "name": "",
    "ticker": "",
    "category": "",
    "subcategory": "",
    "tagline": "",
    "one_liner": "",
    "website": "",
    "documentation_url": "",
    "whitepaper_url": "",
    "github_url": "",
    "chain": "",
    "launch_date": "YYYY-MM-DD",
    "current_status": "mainnet | testnet | beta | development | defunct",
    "logo_url": ""
  },

  "team": {
    "founding_team": [
      {
        "name": "",
        "role": "",
        "background": "",
        "linkedin_or_x": "",
        "doxxed": true
      }
    ],
    "team_size_estimate": null,
    "entity_name": "",
    "entity_jurisdiction": "",
    "notable_backers": [],
    "funding_raised": {
      "total_usd": null,
      "rounds": [
        {
          "round_type": "",
          "amount_usd": null,
          "date": "YYYY-MM-DD",
          "lead_investor": ""
        }
      ]
    }
  },

  "technical": {
    "architecture_summary": "",
    "consensus_mechanism": "",
    "what_is_onchain": "",
    "what_is_offchain": "",
    "key_dependencies": [],
    "smart_contract_languages": [],
    "open_source": true,
    "license": "",
    "github_metrics": {
      "total_repos": null,
      "primary_repo_url": "",
      "total_commits": null,
      "contributors": null,
      "last_commit_date": "YYYY-MM-DD",
      "stars": null,
      "forks": null,
      "open_issues": null
    },
    "audits": [
      {
        "auditor": "",
        "date": "YYYY-MM-DD",
        "scope": "",
        "result_summary": "",
        "report_url": ""
      }
    ],
    "security_incidents": []
  },

  "tokenomics": {
    "token_name": "",
    "ticker": "",
    "token_standard": "",
    "token_type": "utility | governance | both | work | other",
    "token_utility": [],
    "supply": {
      "max_supply": null,
      "total_supply": null,
      "circulating_supply": null,
      "circulating_supply_date": "YYYY-MM-DD",
      "circulating_percentage": null
    },
    "distribution": {
      "initial_allocation": [
        {
          "category": "",
          "percentage": null,
          "vesting_schedule": "",
          "cliff": "",
          "notes": ""
        }
      ],
      "distribution_method": ""
    },
    "emissions": {
      "model": "fixed | deflationary | inflationary | disinflationary",
      "current_daily_emissions": null,
      "current_annual_inflation_rate": null,
      "halving_schedule": "",
      "next_major_emission_event": "",
      "next_event_date": "YYYY-MM-DD",
      "burn_mechanism": ""
    },
    "staking": {
      "staking_available": true,
      "staking_type": "",
      "minimum_stake": null,
      "lock_up_period": "",
      "current_apy_nominal": null,
      "real_yield_after_inflation": null,
      "staking_ratio": null,
      "staking_risks": [],
      "slashing_conditions": ""
    },
    "market_data": {
      "price_usd": null,
      "market_cap_usd": null,
      "fully_diluted_valuation_usd": null,
      "twenty_four_hour_volume_usd": null,
      "all_time_high_usd": null,
      "all_time_high_date": "YYYY-MM-DD",
      "all_time_low_usd": null,
      "all_time_low_date": "YYYY-MM-DD",
      "major_exchanges": [],
      "data_snapshot_date": "YYYY-MM-DD"
    },
    "token_model_classification": "",
    "tokenomics_notes": ""
  },

  "participation": {
    "methods": [
      {
        "type": "staking | node_operation | mining | validating | building | using | contributing | governance",
        "description": "",
        "minimum_hardware": "",
        "minimum_capital_usd": null,
        "technical_skill_required": "none | basic | intermediate | advanced | expert",
        "estimated_returns": "",
        "barriers_to_entry": [],
        "guide_available": true,
        "guide_url": ""
      }
    ],
    "developer_resources": {
      "sdk_available": true,
      "api_available": true,
      "documentation_quality": "poor | adequate | good | excellent",
      "developer_community_size": "",
      "grants_program": true,
      "grants_url": ""
    }
  },

  "usage_metrics": {
    "active_users_daily": null,
    "active_users_monthly": null,
    "total_transactions": null,
    "daily_transactions": null,
    "tvl_usd": null,
    "compute_delivered": "",
    "nodes_active": null,
    "validators_active": null,
    "miners_active": null,
    "unique_contracts_deployed": null,
    "revenue_annual_usd": null,
    "revenue_source": "",
    "metrics_source": "",
    "metrics_date": "YYYY-MM-DD",
    "usage_notes": ""
  },

  "community": {
    "discord_members": null,
    "telegram_members": null,
    "x_followers": null,
    "github_contributors": null,
    "governance_participation_rate": "",
    "governance_model": "",
    "governance_url": "",
    "key_community_channels": [],
    "sentiment_summary": "",
    "community_notes": ""
  },

  "freedom_score": {
    "total_score": null,
    "max_possible": 100,
    "breakdown": {
      "infrastructure_decentralisation": {
        "score": null,
        "max": 20,
        "evidence": ""
      },
      "governance_decentralisation": {
        "score": null,
        "max": 20,
        "evidence": ""
      },
      "token_distribution_fairness": {
        "score": null,
        "max": 15,
        "evidence": ""
      },
      "censorship_resistance": {
        "score": null,
        "max": 15,
        "evidence": ""
      },
      "data_sovereignty": {
        "score": null,
        "max": 15,
        "evidence": ""
      },
      "open_source_transparency": {
        "score": null,
        "max": 15,
        "evidence": ""
      }
    },
    "freedom_grade": "A | B | C | D | F",
    "freedom_summary": ""
  },

  "assessment": {
    "what_works_today": [],
    "what_is_hype": [],
    "key_risks": [],
    "competitive_advantages": [],
    "competitive_disadvantages": [],
    "comparable_projects": [],
    "outlook": "",
    "overall_assessment": ""
  },

  "sources": []
}
```

### 3.2 Freedom Score Rubric

Each sub-score is assessed against specific criteria. The researcher must provide evidence for every score assigned.

**Infrastructure Decentralisation (0-20)**
| Score Range | Criteria |
|-------------|----------|
| 0-4 | Fully centralised infrastructure operated by single entity |
| 5-8 | Multiple operators but controlled by foundation/company; permissioned |
| 9-12 | Permissionless node operation with some centralisation vectors (e.g., reliance on single cloud provider, foundation-run critical infrastructure) |
| 13-16 | Broadly distributed infrastructure with minor centralisation concerns |
| 17-20 | Fully permissionless, geographically distributed, no single points of failure |

**Governance Decentralisation (0-20)**
| Score Range | Criteria |
|-------------|----------|
| 0-4 | All decisions made by founding team / single entity |
| 5-8 | Token voting exists but team holds controlling stake or has veto power |
| 9-12 | Functional governance with broad participation but significant team influence |
| 13-16 | Active DAO governance with meaningful community control and transparent processes |
| 17-20 | Fully community-governed with no privileged parties, immutable core contracts |

**Token Distribution Fairness (0-15)**
| Score Range | Criteria |
|-------------|----------|
| 0-3 | Majority allocation to team/investors with short or no vesting |
| 4-6 | Heavy insider allocation but with meaningful vesting schedules |
| 7-9 | Balanced allocation with fair launch elements or significant community distribution |
| 10-12 | Majority community-distributed through mining, staking, or open participation |
| 13-15 | Fair launch or fully community-distributed with no insider pre-mine |

**Censorship Resistance (0-15)**
| Score Range | Criteria |
|-------------|----------|
| 0-3 | Platform can censor users, restrict access, or modify outputs at will |
| 4-6 | Some censorship vectors exist; terms of service can restrict usage |
| 7-9 | Resistant to casual censorship but vulnerable to coordinated pressure |
| 10-12 | Strong censorship resistance with few realistic attack vectors |
| 13-15 | Fully censorship-resistant; no entity can restrict access or modify outputs |

**Data Sovereignty (0-15)**
| Score Range | Criteria |
|-------------|----------|
| 0-3 | User data controlled entirely by project; no export, no self-custody |
| 4-6 | Some data portability but platform retains control and visibility |
| 7-9 | Users control their data with some platform dependencies |
| 10-12 | Strong self-custody of data with verifiable privacy guarantees |
| 13-15 | Full user data sovereignty; zero-knowledge or fully encrypted; no platform visibility |

**Open Source & Transparency (0-15)**
| Score Range | Criteria |
|-------------|----------|
| 0-3 | Closed source; no visibility into operations or codebase |
| 4-6 | Partially open source; key components proprietary |
| 7-9 | Mostly open source with transparent operations but some opaque elements |
| 10-12 | Fully open source with regular public reporting and verified on-chain operations |
| 13-15 | Fully open source, reproducible builds, all operations verifiable on-chain, transparent treasury |

**Grading Scale:**
| Grade | Score | Meaning |
|-------|-------|---------|
| A | 85-100 | Genuinely decentralised — sovereignty-first |
| B | 70-84 | Meaningfully decentralised with minor concerns |
| C | 55-69 | Partially decentralised — significant centralisation vectors remain |
| D | 40-54 | Largely centralised with decentralisation narrative |
| F | 0-39 | Centralised project with a token bolted on |

### 3.3 Returns Score Rubric

The Returns Score assesses whether the token has a credible structural path to value appreciation based on protocol activity. It is scored across five dimensions. Full methodology is published at `/resources/returns-score-methodology/`.

#### 3.3.1 Dimensions

| Dimension | Max Score | What It Measures |
|-----------|----------|------------------|
| Token Utility | /20 | What can holders actually do with the token? |
| Value Accrual | /25 | Is there a mechanical link between usage and token value? |
| Supply Dynamics | /20 | Is the supply schedule sustainable? |
| Revenue Sustainability | /20 | Does the protocol generate real revenue from paying customers? |
| Liquidity & Access | /15 | Can holders actually buy and sell without significant slippage? |

**Revenue Sustainability carries the highest weight** because revenue from paying customers is the hardest metric to fake and the strongest signal of real value creation.

**Scoring rubric tables** are in the published methodology document. The researcher must cite the specific rubric band for each dimension score.

**Evidence requirements:** Each dimension score must include:
- The specific score (integer, within the max)
- A 1-2 sentence evidence statement citing verifiable facts
- The source for any quantitative claims (DeFiLlama, CoinGecko, block explorer, protocol dashboard)

**Pre-token projects:**
- Liquidity & Access: 0/15 (no tradeable token exists)
- Revenue Sustainability: 0 if no revenue exists
- Other dimensions scored on current verifiable state
- Total score is preliminary and should be flagged as such

**Vesting and unlock adjustments (Supply Dynamics):**
- Cliff unlock >10% of circulating supply within 6 months: deduct 2-3 points
- Circulating supply below 30% of total: score 6-9 maximum unless vesting is 10+ years
- Top 10 wallets hold >50% of circulating supply: deduct 1-2 points

#### 3.3.2 Pre-Submission Scoring Checklist

Before finalising the Returns Score, the researcher must verify:

- [ ] All five dimension scores are integers within their respective maximums
- [ ] Dimension scores sum exactly to the total Returns Score
- [ ] The grade matches the score (A: 85+, B: 70-84, C: 55-69, D: 40-54, F: 0-39)
- [ ] Every evidence statement is verified against the project's editorial body text
- [ ] Every evidence statement citing a number includes the source
- [ ] Revenue claims cite DeFiLlama, Token Terminal, protocol dashboard, or on-chain data
- [ ] Pre-token projects have 0/15 for liquidity and 0 for revenue if applicable
- [ ] Vesting cliff deductions applied where unlock >10% circ. supply within 6 months
- [ ] Circulating supply percentage checked against 30% threshold
- [ ] No evidence statement contradicts the editorial review text
- [ ] Exchange listings and volume data are from within 7 days

#### 3.3.3 Returns Score Schema (JSON)

Add to the project research JSON under a new top-level `returns_score` key:

```json
{
  "returns_score": {
    "total_score": null,
    "max_possible": 100,
    "breakdown": {
      "token_utility": {
        "score": null,
        "max": 20,
        "evidence": ""
      },
      "value_accrual": {
        "score": null,
        "max": 20,
        "evidence": ""
      },
      "supply_dynamics": {
        "score": null,
        "max": 20,
        "evidence": ""
      },
      "revenue_sustainability": {
        "score": null,
        "max": 25,
        "evidence": ""
      },
      "liquidity_access": {
        "score": null,
        "max": 15,
        "evidence": ""
      }
    },
    "returns_grade": "A | B | C | D | F",
    "risk_flags": [],
    "returns_summary": ""
  }
}
```

**Risk flags** are strings from this set: `"regulatory_risk"`, `"pausable_contract"`, `"pre_token"`. Include any that apply.

---

## Section 4: Fact-Checking Protocol

Every research report must pass this protocol before status changes from `draft` to `fact-checked`.

### 4.1 Mandatory Verification Rules

1. **No single-source claims.** Every factual claim in the report must be verifiable from at least 2 independent sources. If only 1 source exists, flag the claim with `"single_source": true`.

2. **On-chain data beats documentation.** If the whitepaper says X but the smart contract or block explorer shows Y, the on-chain data is authoritative. Note the discrepancy.

3. **Market data must be time-stamped.** All price, supply, and volume data must include the date of the snapshot in `data_snapshot_date`. Data older than 7 days at time of publication must be refreshed.

4. **Team claims must be verified.** If a project claims "team from Google/Stanford/etc," verify against LinkedIn, public profiles, or credible third-party reporting. If unverifiable, note it.

5. **GitHub metrics must be checked directly.** Do not rely on third-party reports of GitHub activity. Check the actual repositories. Note: high commit counts from bots or dependency updates do not equal active development.

6. **Tokenomics must reconcile.** Distribution percentages must sum to 100%. Circulating supply must be verifiable on-chain. If the project's stated circulating supply differs from on-chain data, document both figures and the discrepancy.

### 4.2 Cross-Reference Checklist

For each project, verify these specific data points against the minimum number of sources indicated:

| Data Point | Minimum Sources | Recommended Sources |
|------------|----------------|---------------------|
| Token supply (max, circulating) | 3 | Contract, CoinGecko, project docs |
| Token price and market cap | 2 | CoinGecko, CoinMarketCap |
| Team identity and backgrounds | 2 | LinkedIn, project docs, press coverage |
| Funding raised | 2 | Crunchbase, press releases, on-chain |
| TVL / protocol metrics | 2 | DeFiLlama, project dashboard |
| Node/validator count | 2 | Block explorer, project dashboard |
| Audit status and results | 1 (primary) | Audit report directly from auditor's site |
| Launch date | 2 | Block explorer (first transaction), project docs |
| Emissions schedule | 2 | Smart contract, whitepaper/docs |
| Staking yields | 2 | Calculate from on-chain data, verify against project claims |
| GitHub activity | 1 (direct) | GitHub directly — do not use third-party summaries |
| Community size | 1 per platform | Check each platform directly |
| Governance model | 2 | Governance forum, documentation, on-chain votes |

### 4.3 Discrepancy Handling

When sources conflict:

1. **Document both claims** with their respective sources
2. **Prioritise in this order:** On-chain data → Audit reports → Official documentation → Third-party research → Commentary
3. **Flag the discrepancy** in the `research_gaps` array with a note explaining what conflicts and which source was used as authoritative
4. **Never silently choose one source over another** — transparency about conflicts is part of the site's credibility

### 4.4 Red Flags to Investigate Further

If any of these are encountered during research, escalate by adding a note to `research_gaps` and investigating deeper:

- Team members with no verifiable history
- GitHub repos with inflated commit counts (bot activity, trivial commits)
- Claimed partnerships with no reciprocal acknowledgment from the partner
- Circulating supply discrepancies between project claims and on-chain data
- APY/yield claims that cannot be reconciled with emission rates and token price
- "Decentralised" claims where a single entity controls >50% of nodes/validators/stake
- Whitepaper promises with no corresponding code or on-chain implementation
- Sudden large token unlocks not disclosed in public documentation
- Audit reports from unrecognised or low-reputation firms

---

## Section 4.5: Post-Research Compliance Check

Every research JSON must pass this compliance check before an editorial is written. This check is run by the orchestrating agent (Claude Code) after receiving the research output from a research agent. The research agent does not self-certify.

### 4.5.1 Source Depth Verification

Count the actual primary source reads (WebFetch calls or equivalent deep reads) in the research agent's transcript. Search result snippets do not count as source reads.

| Check | Minimum | How to Verify |
|-------|---------|---------------|
| Total primary source fetches (WebFetch) | 20+ | Count WebFetch calls in agent transcript |
| Tier 1 sources actually read (not just cited) | 5+ | Confirm fetches of official docs, whitepaper, GitHub, blog |
| Tier 2 sources actually read | 3+ | Confirm fetches of CoinGecko, CoinMarketCap, DeFiLlama, block explorer, or audit reports |
| Block explorer data checked | 1+ | Confirm fetch of Etherscan, Solscan, Arbiscan, or equivalent for token contract |
| GitHub checked directly | 1+ | Confirm fetch of GitHub org page or API call for repo data |

If any minimum is not met, reject the research and re-run with explicit instructions to address the gap.

### 4.5.2 Schema Completeness Check

Run these automated checks against the output JSON:

1. **Valid JSON** — parse without errors
2. **All top-level sections present** — meta, identity, team, technical, tokenomics, participation, usage_metrics, community, freedom_score, assessment, sources
3. **Freedom score dimensions sum correctly** — individual dimension scores must sum to total_score (tolerance ±1 for rounding)
4. **Freedom grade matches score** — F: 0-39, D: 40-54, C: 55-69, B: 70-84, A: 85-100
5. **Returns score dimensions sum correctly** — five dimension scores must sum exactly to total_score (no rounding tolerance)
6. **Returns grade matches score** — same bands as Freedom: F: 0-39, D: 40-54, C: 55-69, B: 70-84, A: 85-100
7. **Returns evidence cross-referenced** — every evidence statement checked against editorial body text for contradictions
8. **Revenue claims sourced** — Revenue Sustainability evidence must cite DeFiLlama, Token Terminal, protocol dashboard, or on-chain data
9. **Pre-token handling correct** — if no tradeable token, Liquidity & Access is 0/15
5. **Token distribution percentages** — initial_allocation percentages should sum to approximately 100% (tolerance ±5%). If not, a note must explain the gap.
6. **No empty evidence fields** — every freedom_score breakdown dimension must have non-empty evidence
7. **Sources array populated** — minimum 15 sources with sequential IDs
8. **Research gaps documented** — every null field in the schema should have a corresponding entry in research_gaps explaining why

### 4.5.3 Content Quality Spot-Checks

The orchestrating agent must manually verify at least 3 of these:

1. **Market data freshness** — price, market cap, and volume data must be from within 7 days of research date
2. **Team backgrounds verified** — at least one founding team member's background cross-checked against a second source
3. **Supply data cross-referenced** — circulating supply verified against at least 2 of: CoinGecko, CoinMarketCap, block explorer
4. **Assessment balance** — both what_works_today and what_is_hype arrays have 3+ entries each
5. **Freedom score defensibility** — scores are within the correct rubric range for the evidence provided (e.g., if evidence says "no governance exists", governance score should be 0-4, not 5-8)

### 4.5.4 Compliance Check Output

After running the check, document the result as a brief checklist before proceeding to write the editorial:

```
## Research Compliance Check — {PROJECT_NAME}
- [ ] Valid JSON: yes/no
- [ ] WebFetch count: X (minimum 20)
- [ ] Tier 1 sources read: X (minimum 5)
- [ ] Tier 2 sources read: X (minimum 3)
- [ ] Block explorer checked: yes/no
- [ ] GitHub checked directly: yes/no
- [ ] DeFiLlama checked: yes/no
- [ ] Freedom score sums correctly: yes/no
- [ ] Freedom grade matches score: yes/no
- [ ] Token distribution sums to ~100%: yes/no (or noted)
- [ ] Sources count: X (minimum 15)
- [ ] Research gaps documented for null fields: yes/no
- [ ] Market data within 7 days: yes/no
- [ ] Assessment balanced (3+ works, 3+ hype): yes/no
- [ ] Returns score dimensions sum correctly: yes/no
- [ ] Returns grade matches score: yes/no
- [ ] Returns evidence cross-referenced against editorial: yes/no
- [ ] Revenue claims cite DeFiLlama/Token Terminal/on-chain: yes/no
- [ ] Pre-token handling correct (0 liquidity if no token): yes/no or N/A
- [ ] `npm run check:returns` passes: yes/no
- RESULT: PASS / FAIL (reason)
```

If FAIL, re-run the research agent with specific instructions addressing the failures. Do not proceed to editorial until PASS.

### 4.5.5 Post-Editorial Sync Check

After writing the editorial, verify that the research JSON freedom score dimensions **exactly match** the editorial body text. If editorial judgement changed any dimension score from the research phase, the JSON must be updated before committing.

Freedom Score checklist:
- [ ] Each of the 6 freedom dimension scores in the JSON matches the editorial body text
- [ ] The JSON `total_score` equals the sum of its dimension scores
- [ ] The JSON `total_score` matches the `/100` figure in the editorial body text
- [ ] The JSON `freedom_grade` matches the letter grade in the editorial body text
- [ ] The JSON `freedom_summary` references the correct total score
- [ ] The frontmatter `freedomScore` (1-10) is consistent with the `/100` score (divide by 10, round to nearest integer)

Returns Score checklist:
- [ ] Each of the 5 returns dimension scores in the JSON matches the editorial body text
- [ ] The JSON `total_score` equals the exact sum of its dimension scores (no rounding tolerance)
- [ ] The JSON `total_score` matches the `/100` figure in the editorial Returns Score heading
- [ ] The JSON `returns_grade` matches the grade bands (A: 85+, B: 70-84, C: 55-69, D: 40-54, F: 0-39)
- [ ] The frontmatter `returnsScore` (1-10 scale) equals total/10 rounded to one decimal
- [ ] The frontmatter `returnsScoreBreakdown` dimensions match the JSON exactly
- [ ] The frontmatter `returnsScoreEvidence` statements do not contradict the editorial text
- [ ] `npm run check:returns` passes with zero errors

**Rationale:** The research JSON drives the visual chart at the top of the project page. The editorial body text contains the prose breakdown. If these diverge, readers see contradictory scores on the same page. This check was added after discovering a 70 vs 76 discrepancy on the Morpheus page (first project researched, JSON never updated when editorial adjusted scores).

---

## Section 5: Source Log Format

Every source consulted must be logged in the `sources` array using this format:

```json
{
  "source_id": "S001",
  "tier": 1,
  "type": "documentation | whitepaper | smart_contract | github | block_explorer | market_data | audit_report | research_report | interview | social_media | governance | news",
  "title": "",
  "url": "",
  "author": "",
  "publisher": "",
  "date_published": "YYYY-MM-DD",
  "date_accessed": "YYYY-MM-DD",
  "data_points_sourced": [],
  "reliability_notes": ""
}
```

### Source Logging Rules

- Every source gets a sequential ID (S001, S002, etc.)
- Every factual data point in the schema should be traceable to at least one source ID
- Sources must be logged at time of access, not retrospectively
- If a source is paywalled, note this in `reliability_notes`
- If a source has since been deleted or modified, note the original access date and content

---

## Section 6: Output Format

### 6.1 Primary Output: JSON

The primary deliverable for each project is a single JSON file conforming to the schema in Section 3.1. 

**Filename convention:** `{ticker}_{project_id}.json`
**Example:** `MOR_morpheus.json`, `TAO_bittensor.json`

This file is the database record. It is the single source of truth from which articles, comparisons, and reference pages pull data.

### 6.2 Secondary Output: Research Summary (Markdown)

In addition to the JSON record, produce a markdown summary for human review. This is not for publication — it is the researcher's narrative synthesis that helps the article author understand the project.

**Filename convention:** `{ticker}_{project_id}_summary.md`

Structure:

```markdown
# {Project Name} ({Ticker}) — Research Summary

## Research Meta
- Researcher: 
- Date: 
- Version:
- Status:

## Executive Summary
[2-3 paragraphs: what this project is, why it matters or doesn't, and the key finding]

## What It Actually Does
[Plain English explanation. No marketing language.]

## How It Works (Technical)
[Architecture summary for an informed non-developer]

## Tokenomics
[Key economics: what the token does, how supply works, real yields]

## How To Participate
[Practical summary of participation methods]

## Freedom Score: {score}/100 (Grade: {grade})
[Summary of decentralisation assessment with key evidence]

## Honest Assessment
### What Works Today
### What's Hype
### Key Risks

## Key Data Points
[Table of critical quantitative metrics for quick reference]

## Research Gaps
[List of anything that couldn't be confirmed or needs follow-up]

## Sources Consulted
[Numbered list of all sources with URLs]
```

---

## Section 7: Maintenance & Updates

### Living Document Protocol

Project research is not one-and-done. Each project record must be reviewed and updated:

- **Market data:** Refresh before any article publication or comparison
- **Quarterly review:** Check for material changes (team changes, governance updates, major releases, security incidents, tokenomics changes)
- **Event-driven updates:** Halvings, token unlocks, mainnet launches, audits, hacks, or other material events trigger an immediate update
- **Version tracking:** Increment the `version` field in `meta` with each update. Maintain a changelog.

### Update Triggers

| Trigger | Action | Priority |
|---------|--------|----------|
| Token halving or major emission event | Update tokenomics section | High |
| Security incident or hack | Update security section + reassess freedom score | High |
| Mainnet launch or major upgrade | Full review | High |
| New audit published | Update technical.audits | Medium |
| Team change (founder departure, key hire) | Update team section | Medium |
| Quarterly scheduled review | Refresh all time-sensitive metrics | Medium |
| New partnership or integration | Update ecosystem notes | Low |
| Community size milestone | Update community metrics | Low |

---

## Section 8: Agent Execution Instructions

### For Agent Zero / Claude / Claude Code

When given a project to research, follow these instructions exactly:

1. **Read this entire document first.** Do not begin research until you understand the full schema and methodology.

2. **Execute the research sequence** in Section 2.2 step by step. Do not skip steps.

3. **Actually read primary sources.** Use WebFetch (or equivalent) to fetch and read the full content of primary source pages. Web search result snippets are not a substitute for reading the actual page. Every Tier 1 source cited must have been fetched and read, not just found in a search result. Minimum 20 actual page reads per project. Specifically:
   - Fetch and read the official documentation (docs site, introduction, architecture, tokenomics pages)
   - Fetch and read the whitepaper or litepaper
   - Fetch the GitHub organisation page and at least 3 individual repositories to assess activity
   - Fetch at least one block explorer page for the token contract (Etherscan, Solscan, Arbiscan, etc.)
   - Fetch CoinGecko AND CoinMarketCap for market data
   - Fetch DeFiLlama for TVL/protocol metrics (even if the project is not listed, verify this)
   - Fetch the official blog for recent posts
   - Search for and fetch any published audit reports

4. **For each data point in the schema**, attempt to find the information from the highest-tier source available. If unavailable, try the next tier down. If no source exists, set the field to `null` and add an entry to `research_gaps`.

5. **Do not infer, estimate, or fabricate data.** If a number is not explicitly stated in a source, do not calculate or guess it unless the calculation methodology is obvious and documented (e.g., circulating percentage = circulating supply / max supply). Mark any derived calculations with a note.

6. **Log every source as you go.** Do not compile sources after the fact.

7. **Run the fact-checking checklist** in Section 4.2 before marking the report as complete.

8. **Complete the Returns Score** using the rubric in Section 3.3. For every dimension:
   - Score it as an integer within the maximum
   - Write a 1-2 sentence evidence statement citing verifiable facts
   - Cite the specific source for any quantitative claim
   - Cross-reference the evidence against the editorial body text to ensure no contradictions
   - For Revenue Sustainability, check DeFiLlama, Token Terminal, or on-chain fee data directly. Do not estimate revenue without citing a source.
   - Run the pre-submission checklist in Section 3.3.2 before finalising

9. **Output two files:** the JSON database record and the markdown research summary.

10. **The orchestrating agent runs the compliance check** in Section 4.5 on the output JSON before proceeding to write the editorial. If the check fails, re-run the research with specific instructions to address the gaps. Do not write an editorial from non-compliant research.

11. **If you encounter a red flag** from Section 4.4, note it prominently in both the research_gaps array and the research summary. Do not bury concerns.

12. **Time-sensitive data** (price, market cap, volume, TVL, community size) should note the exact date and time of access.

13. **When in doubt, leave it null and flag it** rather than guessing. Gaps are acceptable. Inaccuracies are not.

14. **After editorial is written, run `npm run check:returns`** to validate all Returns Score data is consistent across frontmatter, breakdown, and editorial text. Fix any errors before committing.

15. **Source the project logo.** Download the project's logo from CoinGecko API (`/api/v3/coins/{coingecko_id}` → `.image.small`) and save it as `public/images/logos/{slug}.png`. The `ProjectLogo` component uses this path — without the file, the dashboard shows a letter initial fallback. If CoinGecko does not have the logo, check the project's official press kit or GitHub for a PNG/SVG. Logo must be a small square image (ideally 64-128px). This step is mandatory for every new project.

16. **Generate the hero image** via Venice API (flux-2-max, 1280x400, `return_binary: true`). Save as `public/images/project-{slug}.webp`. Use abstract, thematic imagery related to the project's category — no text, no logos, no faces.

### Prompt Template for Initiating Research

```
Research the DeAI project {PROJECT_NAME} ({TICKER}) using the 
Own Your Mind research plan (attached/referenced). 

Follow the full methodology. Output:
1. Complete JSON database record per the schema
2. Markdown research summary

Prioritise accuracy over completeness. Flag all gaps. 
Log all sources. Run the fact-checking protocol before finalising.
```

---

## Appendix A: Category Definitions

| Category | Definition | Key Signal |
|----------|-----------|------------|
| Compute & Infrastructure | Projects providing decentralised compute, GPU networks, or AI infrastructure | Users can contribute or access compute resources |
| Intelligence Networks | Networks coordinating AI model training, inference, or intelligence markets | Competitive/collaborative AI model ecosystems |
| Agent Platforms | Platforms for building, deploying, or trading autonomous AI agents | Agent creation, deployment, or marketplace |
| Data & Privacy | Projects focused on decentralised data ownership, privacy-preserving AI, or data marketplaces | User data sovereignty, encrypted computation |
| Local & Personal AI | Tools for running AI locally on personal hardware | Runs on user's machine, no cloud dependency |
| Emerging | New projects not yet fitting established categories | Recently launched, limited track record |

## Appendix B: Comparable Metrics Quick Reference

These are the key metrics that enable cross-project comparison. These fields must be populated for every project to enable comparison tables and charts on the site.

**Quantitative (populate for all projects where applicable):**
- `tokenomics.supply.circulating_supply`
- `tokenomics.supply.max_supply`
- `tokenomics.market_data.market_cap_usd`
- `tokenomics.market_data.fully_diluted_valuation_usd`
- `tokenomics.staking.real_yield_after_inflation`
- `tokenomics.emissions.current_annual_inflation_rate`
- `usage_metrics.nodes_active`
- `usage_metrics.daily_transactions`
- `usage_metrics.tvl_usd`
- `usage_metrics.revenue_annual_usd`
- `technical.github_metrics.contributors`
- `technical.github_metrics.last_commit_date`
- `freedom_score.total_score`

**Qualitative (populate for all projects):**
- `identity.one_liner`
- `identity.current_status`
- `assessment.overall_assessment`
- `freedom_score.freedom_grade`
- `freedom_score.freedom_summary`
