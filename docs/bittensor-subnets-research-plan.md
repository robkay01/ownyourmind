# Bittensor Subnets Research Plan

## Overview

Research the top Bittensor subnets for a tokenomics article ("Bittensor Subnets: Where the Revenue Actually Is") and a resource directory page. This is subnet-level analysis, not protocol-level (which is covered in existing Bittensor review, halving, and dTAO articles).

## Output

1. **Tokenomics article** covering the top 10-15 subnets with analysis of revenue, traction, product maturity, and risk tier
2. **Resource directory page** with a ranked subnet table (updateable reference)

## Target subnets

| Subnet | ID | Category | Why included | Source |
|--------|-----|----------|-------------|--------|
| Chutes | SN64 | Inference | #1 inference on OpenRouter, "billions of tokens daily", 15K new users in 24hrs | EP.46, Ecosystem |
| Templar (tplr) | TBD | Training | Largest decentralised pre-training (72B), SparseLoCo, Gauntlet anti-cheat | EP.46 |
| Gradients | SN56 | Training | No-code model training, v3 cheaper than Google Vertex/AWS, 13x in a month | Ecosystem |
| Nineteen | SN19 | Inference | Fast text and image inference, 200+ t/s, outpaces DeepInfra/Groq on some models | Ecosystem |
| Sportsensor | SN41 | Prediction | Polymarket liquidity provider, 427% profit on NBA trading, $17.8K monthly treasury | Ecosystem |
| Score | SN44 | Computer Vision | Sports analytics via CV, player scoring like Elo, DKING hedge fund ($300M AUM partner) | Ecosystem, Bid the BID |
| Zeus | SN18 | Weather/Climate | ML weather forecasting for commodity trading, 210% alpha rise in 7d | Ecosystem |
| Metanova Labs | SN68 | DeSci | Drug discovery, 1000+ crowdsourced molecules | EP.46 |
| SynthdataCo | TBD | Data | Synthetic data, "found initial PMF", emissions positive | EP.46 |
| 404gen | SN17 | 3D Models | AI-generated 3D assets, Unity integration (1.2M MAU) | Ecosystem |
| CreatorBid (CB) | TBD | Application | Distribution network for Bittensor agents, TAO Council, v2 launching | Bid the BID |
| Bitstarter | TBD | Fundraising | Launchpad for subnets, Quasar/Djinn raised 400 TAO each | EP.46 |
| Quasar | SN24 | TBD | Bitstarter raise (400 TAO), 153,846 alpha for pledgers | EP.46 |

**Rayon Labs (@rayon_labs)** operates Chutes, Gradients, and Nineteen. All 3 combined hold >1/3 of TAO emissions. Considered the #1 team in the ecosystem.

**Key data points from 0xJeff (need independent verification):**
- Rayon Labs subnets: Gradients 13x in a month ($32M MC), Chutes 2.3x ($63M MC), Nineteen 3x ($18M MC)
- Most subnets gained 40%+ in 7d (EP.46 tweet, March 14 2026)
- Cash Cows: DeCompute 8-9 figures ARR, DeInference 7-8 figures ARR
- 80-150%+ APY currently available for subnet stakers (from Ecosystem article)
- DKING: $300M sports hedge fund partnership (self-reported, needs verification)
- Sportsensor: 427% profit, 13.8% ROI, 61.29% win rate on NBA (self-reported)

## Research steps per subnet

Adapted from own-your-mind-research-plan.md for subnet context:

### Step 1: Subnet documentation
- Read subnet docs, whitepaper/litepaper if exists
- Identify the subnet's specific AI task and value proposition
- Check subnet GitHub repos for activity
- Note the subnet ID and registration date

### Step 2: Recent events sweep (MANDATORY)
- Search for recent announcements, product launches, partnerships
- Check X/Twitter for subnet team accounts
- Look for 0xJeff mentions (EP.46, "Into the Bittensor Ecosystem", "Bid the BID")
- Min 3 web searches per subnet for subnets live 3+ months

### Step 3: On-chain verification via taostats.io
- Current emission share (% of total TAO emissions)
- Alpha token price and market cap
- Alpha token price history (7d, 30d, 90d)
- Number of miners and validators
- Daily/weekly TAO flow through the subnet
- Registration cost at time of registration
- Whether emissions are net positive or negative for the subnet

### Step 4: Revenue and traction verification
- Is there verifiable revenue? (on-chain, third-party confirmed)
- Self-reported metrics must be flagged per CLAUDE.md Rule 2
- Cross-reference with OpenRouter (for inference subnets), Polymarket (for prediction subnets), DeFiLlama, etc.
- Check if the subnet has external paying customers or just emission farming

### Step 5: Team assessment (lighter than full protocol research)
- Team public/anonymous?
- GitHub contributor count and activity
- Prior projects or track record
- Funding (Bitstarter raises, VC backing, self-funded)

### Step 6: Product maturity assessment
- Is there a live product users can interact with?
- Is the AI output measurably better than alternatives?
- Benchmark data if available (with source verification)
- User count or usage metrics if available

### Step 7: Risk classification
Using 0xJeff's DeAI Matrix framework:
- **Cash Cow:** Proven revenue, established market, slower growth
- **Star:** Growing revenue, growing market, high potential
- **Question Mark:** Early stage, unproven, high risk/high reward
- **Dog:** Declining, no PMF, emission dependent (include for honesty)

## Data verification rules (from CLAUDE.md)

All 9 rules apply:
1. No single-source statistics
2. Self-reported data is not verified data
3. Check for wash trading/inflation
4. Subsidised activity is not organic activity
5. Attribution over assertion
6. Scepticism scales with narrative alignment
7. Price/rate data from primary sources at publication
8. Audits check accuracy, not just attribution
9. Verify every claim you introduce or change

## Article structure (proposed)

1. Introduction: why subnets matter more than TAO itself for returns
2. The DeAI Matrix framework (credit 0xJeff)
3. Cash Cows: Decentralised Compute subnets
4. Stars: Decentralised Inference subnets (Chutes, Venice integration)
5. Stars/Question Marks: Training subnets (Templar, Gradients)
6. Question Marks: Prediction, DeSci, agents, security
7. The Bitstarter fundraising model
8. The death spiral risk (subnets that fail)
9. How to evaluate a subnet (practical framework)
10. My assessment and positioning

## Resource directory structure (proposed)

Table with columns:
- Subnet name and ID
- Category (compute/inference/training/prediction/DeSci/agents/other)
- Emission share (%)
- Alpha token price
- Revenue status (verified/claimed/none)
- Risk tier (cash cow/star/question mark)
- Product status (live/beta/concept)
- Link to docs

## Sources

- taostats.io (primary on-chain data)
- OpenRouter (inference subnet verification)
- Polymarket (prediction subnet verification)
- 0xJeff articles: EP.46, "Into the Bittensor Ecosystem", "Bid the BID"
- Subnet GitHub repos
- Bitstarter platform
- Bittensor Discord (community intel, not factual claims)

## Timeline

This is thorough research, not a quick draft. Expect:
- Research: 2-3 hours across multiple subnets
- Writing: 1-2 hours for article + directory
- Verification: 1 hour cross-checking all claims
- Total: ~5 hours of focused work

## Dependencies

- Existing articles to cross-link: Bittensor review, dTAO article, halving article
- May need to update Bittensor project review with new subnet traction data
- May trigger backlog entries for quarterly review if scores need adjusting
