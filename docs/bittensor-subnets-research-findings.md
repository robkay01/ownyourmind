# Bittensor Subnets Research Findings
## Compiled 15 March 2026

### Network-wide data
- TAO Price: $263.54 (CoinGecko, verified)
- Market cap: $2.53B, rank #38
- Circulating: 9.6M TAO of 21M max
- Active subnets: 129
- Root staking: 72.5% ($5.33B TAO), Alpha staking: 27.5% ($2.02B TAO)
- Daily emissions: ~3,600 TAO post-halving (widely cited, derived from block reward halving)
- Chutes was the first subnet to reach $100M market cap (multiple sources)

### Rayon Labs dominance (verified via Messari, OAK Research, multiple sources)
- Operates SN64 (Chutes), SN56 (Gradients), SN19 (Nineteen)
- Collectively commands 23.71% of TAO emissions (multiple sources cite this figure)
- Rayon Labs is considered the #1 team in the ecosystem (0xJeff, ChainUp, BeInCrypto all state this)

### Chutes (SN64) - Inference
- Emission share: ~14.88-20% (Asymmetric Jump says 14.88% rank #2; later sources say ~20% rank #1)
- Market cap: $83M (0xJeff EP.46), first subnet to $100M (multiple sources)
- Volume: 160B tokens/day, 9.1T cumulative, 400K users (Rayon Labs X post, SELF-REPORTED)
- Earlier data: 5-6B tokens/day, 669B cumulative, 15K users added in 1 day (Asymmetric Jump)
- OpenRouter: VERIFIED as provider with 18 models, visible daily volume data on openrouter.ai/provider/chutes
- Pricing: $3-20/mo tiers, API pricing from $0.22/M tokens
- GitHub: 1,077 commits (chutes-api), very active
- Revenue model: App developers earn TAO from usage, auto-staked into alpha token
- Key claim needing scrutiny: growth from 5-6B/day to 160B/day in months

### Gradients (SN56) - Training
- Part of Rayon Labs' 23.71% combined emission share
- Product: No-code AI model fine-tuning, v5.0 (latest), previously v3
- Pricing: $100-500 vs Google's $10,000+ (multiple sources cite this comparison)
- Gradients v3 cost comparison chart: $5/hr vs AWS $67.50, Google $19.25, together.ai $6.25 (from 0xJeff article, sourced from Rayon Labs tweet)
- Market cap: $32M (0xJeff, April 2025 data, likely changed)
- Performance: 13x in a month (0xJeff, April 2025)

### Nineteen (SN19) - Inference
- Part of Rayon Labs' 23.71% combined emission share
- Product: Ultra-low-latency inference, text and image
- Claim: "World record for fastest LLM inference" (multiple sources)
- Market cap: $18M (0xJeff, April 2025 data)
- nineten.ai returned 403 for automated access

### Templar/tplr (SN3, previously SN268)
- Completed Covenant-72B: 72B params, 1.1T tokens, permissionless on SN3
- SparseLoCo: VERIFIED. Combines top-k sparsification + 2-bit quantisation + error feedback. 146x communication compression. (Found on X post and Blockonomi article)
- Outperformed LLaMA-2-70B on MMLU: 67.1 vs 65.6 (Blockonomi, arxiv paper 2603.08163)
- ArXiv paper published: arxiv.org/html/2603.08163 (Covenant-72B paper)
- Announced March 10 2026 (X post by @tplr_ai)
- Currently in burn period (100% burn, zero emissions) per GitHub README
- Transitioning to "Templar: Crusades" competition format
- GitHub: 2,319 commits, 128 stars

### Sportsensor (SN41) - Prediction
- Product: Decentralised sports prediction via Polymarket CLOB trading
- Almanac front-end aggregates miner predictions into meta-model
- Charges 1% fee on winning trades, revenue buys back SN41 token
- Sports: NFL, MLB, MLS, EPL, NBA, NHL (verified via GitHub repos)
- ContangoDigital (VC) leads the team, also runs @AskBillyBets
- Website domains dead (sportsensor.io, sportsensor.ai) as of research date
- 427% NBA profit claim: from 0xJeff "Into the Bittensor Ecosystem" citing Sportsensor's own trading report
- GitHub: 116 commits, 4 stars (low engagement)

### Score (SN44) - Computer Vision
- Product: Decentralised CV for football/soccer Game State Recognition
- DKING partnership: $300M AUM deployment VERIFIED via Coinfomania article and Score X post
- Partnership with "one of the world's largest sports-betting hedge funds" announced at Proof of Talk event
- DKING meta-model designed with ex-FIFA data scientists
- SN44 averages ~70% prediction accuracy (Coinfomania)
- dking.bot cert expired but partnership is real (announced publicly, covered by crypto media)
- DKING rebranded to SIRE
- GitHub: 249 commits, 20 stars

### Zeus (SN18) - Weather/Climate
- Product: ML weather forecasting using ERA5 reanalysis data (Copernicus)
- Operator: Orpheus AI
- GitHub: 97 commits, 21 stars, active development (v1.5.6)
- Commodity trading application: mentioned by 0xJeff but NOT on the subnet's own site
- Weather intelligence for hedge funds: plausible use case but not directly stated by team

### Metanova Labs (SN68) - DeSci/Drug Discovery
- Product: ML-driven drug screening using PSICHIC GNN model
- Miners submit candidates from SAVI 2020 library (~1.75B compounds)
- Combinatorial update enables new compound generation (billions more synthesisable molecules)
- Wet lab testing "imminent" per Bittensor.ai article
- Platform biotech model, not single-drug company
- GitHub: 451 commits, 17 stars, active (last update Mar 13 2026)
- "1000+ molecules" claim: from 0xJeff EP.46. Not found on GitHub or site. The SAVI library has 1.75B compounds; the subnet screens from these.

### CreatorBid - Application Layer
- Product: Agent launchpad/distribution network for Bittensor
- TAO Council: mentioned by 0xJeff, provides integration/partnership/incubation support
- Key agents: $AION (SN6 prediction vaults), $DKING/$SIRE (SN44 sports), $SHOGUN (InfoFi), $TAOLOR (research copilot)
- v2 launch pipeline includes Trade Compass (Endgame Hackathon winner)
- Levelling system for allocation (transparent, trade/stake/yap on X)
- creatorbid.xyz domain dead, but creator.bid is live
- GitHub: minimal public repos
- Comparison to Virtuals but for Bittensor ecosystem

### Bitstarter - Subnet Fundraising
- Product: "Kickstarter for Bittensor"
- Verified campaigns: Quasar (400 TAO, SN24), Djinn (600 TAO, not 400), Handshake58 (220 TAO)
- Model: subnets sell future emissions or OTC alpha at discount
- Quasar: 25% discount (3m lock) or 40% discount (6m lock)
- Anonymous team
- bitstarter.ai is live

### Data still needed (requires browser access to taostats.io):
- Per-subnet emission percentages for all top 15
- Current alpha token prices for all subnets
- Current market caps (some data is months old)
- Active miner/validator counts per subnet
