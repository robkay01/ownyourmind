# Editorial Plan — Own Your Mind

Working document for content planning. Not published to the site.

---

## Current Content Inventory

### Why DeAI (2 articles)
1. **The Case for Sovereign AI** — foundational thesis, sovereignty stack, why it matters
2. **Centralised vs Decentralised AI** — balanced comparison, where each wins, practical framework

### Projects (17 reviews)
| Category | Projects | Count |
|---|---|---|
| Compute | Akash, Gensyn, io.net, Render | 4 |
| Data | Grass, Ocean, Sahara, Vana | 4 |
| Inference | Venice | 1 |
| Agent | Autonolas, ElizaOS, Fetch/ASI, Virtuals | 4 |
| Platform | Bittensor, Intelligent Internet, Morpheus, NEAR | 4 |

**Gaps:** No privacy/confidential compute projects. Thin on coordination layers beyond Bittensor.

### Tokenomics (articles TBC)
### Resources (articles TBC)

---

## The DeAI Boundary — Editorial Framework

Researched 2026-03-04. Many privacy/confidential computing projects are pivoting to "AI" as a narrative. We need a clear framework for what belongs on the site.

### Classification

| Tier | Definition | Examples |
|---|---|---|
| **Core DeAI** | AI is the founding thesis. Protocol designed around AI workloads. | Bittensor, Gensyn, Venice, io.net, Render |
| **DeAI-adjacent** | Real tech that serves AI, but protocol is general-purpose. AI is a primary use case, not the origin. | Phala, Nillion, Akash, Oasis |
| **AI-washed** | Existing crypto project with "AI" bolted onto marketing after the narrative shifted. | Secret Network (DeFi TVL down 94%, AI is the new pitch) |

**Editorial policy:** Core DeAI projects get full reviews. DeAI-adjacent projects can get reviews if their AI product is live and differentiated — but the review must be honest about the general-purpose origin. AI-washed projects don't make the cut.

### Research Findings (2026-03-04)

| Project | Verdict | Notes |
|---|---|---|
| **Nillion** (NIL) | DeAI-adjacent | nilAI is a real product (private LLM inference via TEEs, OpenAI-compatible API). But core protocol is general-purpose blind computation (MPC + secret sharing). AI is ~30% of focus alongside DeFi and healthcare. |
| **Phala** (PHA) | DeAI-adjacent, trending Core | Hardest pivot of the four. GPU TEE inference live (H100/H200/B200), 758k daily AI Agent Contract executions, Eliza V2 integration, RedPill.ai API with 18+ confidential models. Infrastructure still horizontal but AI is now the dominant product. |
| **Secret Network** (SCRT) | AI-washed | DeFi ecosystem collapsed. SecretAI/SecretVM exist but adoption is embryonic (SDK has 9 GitHub stars). AI is an opportunistic pivot, not a technical evolution. Does not meet our bar. |
| **Oasis** (ROSE) | DeAI-adjacent | ROFL framework is real (verifiable off-chain AI inference via TEEs). But only single-digit AI dApps live. GPU TEE support still in development. Privacy L1 leaning into AI narrative. |

---

## Article Pipeline — Why DeAI

### Priority 1 (next to write)

#### "What Counts as Decentralised AI? (Drawing the Line)"
**Status:** Research partially done (privacy project audit complete)
**Angle:** As every crypto project bolts "AI" onto their marketing, practitioners need a framework for separating genuine DeAI from narrative-surfing. We draw the line honestly.
**Our spin:** Nobody else is doing this. Investor research (0xJeff, Messari) covers "the DeAI sector" without questioning what belongs in it. We call out the AI-washing directly with evidence.
**Key beats:**
- The AI narrative goldrush — every L1/L2 is now an "AI chain"
- Our three-tier framework: Core DeAI / DeAI-adjacent / AI-washed
- Case studies: what the pivot looks like from the inside (Secret Network's DeFi collapse → AI rebrand, Phala's genuine product shift)
- How to evaluate any project: is AI the founding thesis or the latest marketing deck?
- Where the line gets genuinely blurry (Akash is general-purpose compute but DeAI is a huge use case)
- Map of our existing 17 project reviews against the framework
**Research needed:**
- [ ] Broader scan: which other projects have done AI pivots recently?
- [ ] Counter-examples: projects that could have AI-washed but chose not to
- [ ] Data on "AI" mentions in crypto project marketing over time (if available)
**Source material:** Our own research findings above, 0xJeff articles for context

#### "Privacy Is the Killer App for Decentralised AI"
**Status:** Research needed
**Angle:** Privacy isn't a feature — it's the wedge that makes DeAI essential. Practitioner take on what private inference actually looks like today vs the pitch deck version.
**Our spin vs 0xJeff:** He covers the theory (Privacy 0.9/1.0/2.0 framework, cryptography primer). We cover what it's like to actually use these tools, the real performance costs, and whether enterprise is genuinely moving.
**Key beats:**
- Privacy has always been a luxury — blockchain made finance accessible but made everything public
- The Privacy 2.0 shift: ZK, MPC, FHE, TEE — what each actually costs in performance
- Why centralised AI can't solve this (every prompt goes through someone else's infra)
- Enterprise compliance tailwind: GDPR, HIPAA pushing "don't send data to OpenAI"
- Practitioner view: private inference today — real costs, real tradeoffs
- Reference the DeAI boundary framework — which privacy projects are genuinely DeAI?
**Research needed:**
- [ ] Performance benchmarks: FHE vs TEE vs MPC overhead on real inference workloads
- [ ] Enterprise adoption signals — any public case studies?
- [ ] Cost comparison: private inference vs OpenAI API for equivalent tasks
- [ ] Regulatory landscape: which jurisdictions are driving this?
- [ ] Phala, Nillion, Venice private inference — hands-on testing if possible
**Source material:** 0xJeff "Beginners' Guide to Privacy", "How much are you willing to pay for your privacy?"

#### "How Decentralised AI Actually Competes (It's Not What You Think)"
**Status:** Research needed
**Angle:** DeAI won't beat OpenAI at frontier models. The edge is coordination, specialisation, and economics. Not ideology — game theory and market structure.
**Our spin vs 0xJeff:** He covers the thesis from an investor lens (what to fund). We cover it from an operator lens (what actually works, what's vapourware, what the delivery risk is).
**Key beats:**
- Open-source inflection point — DeepSeek, Qwen, Llama commoditising frontier-adjacent models fast
- Small models + decentralised RL = domain-specific models beating generalists in narrow tasks
- Coordination layers (Bittensor, Sentient, Flock) — the real innovation is funding/distribution, not the models
- Geopolitical angle: US-China tensions making neutral infrastructure more valuable
- On-chain AI standards (x402, ERC-8004) creating composable AI economies
- Cost structure: decentralised compute already cheaper for inference at scale
**Research needed:**
- [ ] Open model benchmarks: DeepSeek R1, Qwen 2.5, Llama 3 vs GPT-4/Claude — how fast is the gap closing?
- [ ] Coordination layer state: Bittensor subnet activity, Sentient/Flock — real traction or pitch decks?
- [ ] Cost benchmarks: decentralised inference pricing vs centralised APIs (Akash, io.net, Venice actual rates)
- [ ] On-chain AI standards: x402, ERC-8004 — who's implementing, what's live?
**Source material:** 0xJeff "How DeAI Compete with Centralized AI", "Close AI to Open AI to Decentralized AI"

### Priority 2 (follow-ups)

#### "The Four Stages of AI Privacy (and Where We Are Now)"
**Status:** Idea
**Angle:** Framework piece mapping the evolution from "no privacy" to "programmable privacy" in AI. Readers can use it to evaluate any project. Ties back to project reviews.
**Research needed:**
- [ ] Map each DeAI project to a privacy stage
- [ ] Cryptography explainer pitched at practitioners, not academics

#### "You're Already Paying for Privacy — You Just Don't Know It"
**Status:** Idea
**Angle:** The hidden cost of "free" AI. Concrete economics from actually running the infra.
**Research needed:**
- [ ] Real cost data from running own inference (Rob's experience)
- [ ] Enterprise lock-in / switching cost analysis
- [ ] Historical parallels (VPN, encrypted email adoption curves)

---

## Project Pipeline — New Reviews

### Confirmed for Review

| Project | Token | Verdict | Why | Priority |
|---|---|---|---|---|
| Phala Network | PHA | DeAI-adjacent (trending Core) | GPU TEE inference live, 758k daily AI agent executions, Eliza V2 integration. Furthest along the DeAI pivot with real product traction. | **High** |

### Maybe — Needs More Research

| Project | Token | Verdict | Notes | Priority |
|---|---|---|---|---|
| Nillion | NIL | DeAI-adjacent | nilAI is real (private LLM inference), but AI is ~30% of focus. Worth revisiting if AI product gains traction. | Medium |
| Oasis Network | ROSE | DeAI-adjacent | ROFL framework is promising but only single-digit AI dApps. Revisit when GPU TEE ships. | Low |

### Does Not Meet Bar

| Project | Token | Verdict | Why |
|---|---|---|---|
| Secret Network | SCRT | AI-washed | DeFi collapse → AI rebrand. Embryonic adoption. Opportunistic pivot. |

### Coordination / Other

| Project | Token | Why | Priority |
|---|---|---|---|
| Sentient | TBD | Open-source AI coordination. Model ownership + monetisation layer. | Medium |
| Flock.io | TBD | Federated learning platform. Decentralised model training. | Low |
| Ritual | TBD | On-chain AI inference protocol. Brings AI computation to smart contracts. | Medium |

---

## Tokenomics Pipeline

Not yet planned in detail. Natural next section to build out after Why DeAI has more depth. Candidates:
- Token-incentivised AI: how TAO, AKT, RNDR economics actually work from an operator's perspective
- Staking economics across DeAI networks — where the real yield is
- Vesting schedules and unlock risks — what the charts don't tell you

---

## Research Sources (beyond 0xJeff)

Track useful sources here as we find them:
- **Messari** — DeAI sector reports, project profiles
- **Delphi Digital** — research reports on crypto x AI
- **a16z crypto** — blog posts, frameworks
- **Vitalik Buterin** — writings on AI + crypto intersection
- **DeFiLlama** — TVL and usage data for privacy/AI protocols
- **Academic** — federated learning economics, FHE performance papers
- **DeAI Twitter/X** — @0xJeff, @CanteraCapital, @OlasNetwork, @baboracles

---

## Content Calendar

No fixed dates — quality over cadence. Rough priority order:
1. Write "What Counts as Decentralised AI?" article (uses research already done + broader scan)
2. Research Phala Network → full project review
3. Write "Privacy Is the Killer App" article (uses Phala review + independent research)
4. Write "How DeAI Actually Competes" article
5. Stale project data review (existing 17 projects)
6. Tokenomics section buildout
