# Episode 023 — Nillion: Humanity's First Blind Computer
## Turn-by-Turn Production Script

## TURN 01 — BOBSKI
```
Welcome back to the Own Your Mind podcast. I'm Bobski, and today we're covering Nillion -- the blind computation network. The idea: run AI on your data without anyone, including the nodes processing it, ever seeing it. Not encryption at rest. Computation on encrypted data.

Since our first look, things have gone sideways. Freedom Score dropped to a D grade. Returns Score is an F. A market maker scandal, a chain migration, and still zero revenue. Let's get into it.
```

## TURN 02 — RACHEL
```
And I'm Rachel. Nillion has one of the most credentialled teams in crypto -- ex-Goldman, founding engineer at Uber, co-founder of Hedera Hashgraph, founder of Indiegogo, 30-plus patents in cryptography. The question is no longer just whether credentials translate to adoption. It is whether this team can recover from a trust-damaging scandal while simultaneously migrating their entire chain infrastructure.
```

## TURN 03 — BOBSKI
```
Before we get to the drama, how does blind computation actually work?
```

## TURN 04 — RACHEL
```
Three privacy-enhancing technologies combined. Multi-party computation splits data across nodes -- each holds a meaningless fragment. Homomorphic encryption allows mathematical operations on encrypted data. Trusted Execution Environments provide hardware-isolated enclaves even the operator cannot inspect.

The network originally had a dual-layer architecture. nilChain was a Cosmos-based coordination layer for payments, staking, and governance. Petnet is the orchestration layer where the blind computation actually happens, with three modules -- nilDB for encrypted storage, nilVM for blind computation, and nilAI for private LLM inference inside TEEs. I say "was" because nilChain is sunsetting. The entire Cosmos layer is halting in March 2026.
```

## TURN 05 — BOBSKI
```
Wait -- the whole chain is shutting down? What happens to people's tokens?
```

## TURN 06 — RACHEL
```
NIL is migrating to Ethereum as an ERC-20 token. One-to-one swap via a Merkle proof claim process. The migration portal is live, and as of March 2026 about 843 million of 1 billion tokens have already been bridged. But anyone still holding on nilChain who misses the halt deadline risks losing access. Cosmos-based staking is ending with no confirmed replacement on Ethereum yet. If you had NIL staked with a 14-day unbonding period on Keplr -- that entire workflow is becoming obsolete.
```

## TURN 07 — BOBSKI
```
So the participation instructions from a few months ago -- Cosmos wallet, Keplr, unbonding -- all of that is wrong now?
```

## TURN 08 — RACHEL
```
Correct. Post-migration, NIL is a standard ERC-20 token on Ethereum. No staking available. No on-chain governance confirmed. The "Nillion 2.0" roadmap promises permissionless node operation, new staking mechanics, and burn mechanisms, but as of March 2026 none of that is implemented. The tokenomics review is still in progress. Participation right now is limited to holding the token and building on the compute layer, which operates independently of the chain migration.
```

## TURN 09 — BOBSKI
```
Right. Now the market maker scandal. What happened?
```

## TURN 10 — RACHEL
```
In November 2025, an unauthorised market maker dumped approximately 65 million NIL tokens onto the open market. The price crashed roughly 50 percent. Nillion launched a buyback programme in response, but by late November they had repurchased only 1.1 million of the 65 million tokens sold. That is less than 2 percent of the damage. Not a recovery -- a gesture.

This was not a hack or an exploit. The team allocated tokens for market making and lost control of how they were used. It is a failure of counterparty controls and raises serious questions about oversight of token allocations.
```

## TURN 11 — BOBSKI
```
And the token price now?
```

## TURN 12 — RACHEL
```
NIL trades around five cents, down 88 percent from the 40-cent ICO price and over 94 percent from its all-time high of 90 cents at launch. It hit an all-time low under four cents in February 2026. The fully diluted valuation is around 50 million dollars -- below the 65 million total raised. Public sale investors are deeply underwater. That is a brutal position for a project that has raised this much money.
```

## TURN 13 — BOBSKI
```
Freedom Score dropped to a D grade. Walk us through it.
```

## TURN 14 — RACHEL
```
Data sovereignty remains the strongest dimension. This is the entire product -- MPC ensures no single node sees complete data, homomorphic encryption enables computation on encrypted data, nilDB provides encrypted storage, nilAI runs inference inside TEEs. One of the best data sovereignty architectures we have reviewed. Censorship resistance also scores well -- blind computation is inherently censorship-resistant because nodes cannot inspect or selectively refuse data they cannot see.

But the drop comes from three areas. Governance controls failed -- the market maker incident exposed that the team allocated tokens without adequate safeguards. Infrastructure decentralisation is unclear during the mid-migration state, with the coordination layer effectively centralised during the transition. And token distribution fairness took a hit -- 41 percent to insiders was already heavy, and the market maker dump landed squarely on retail holders with almost nothing recovered.
```

## TURN 15 — BOBSKI
```
Returns Score is an F grade. What is driving that?
```

## TURN 16 — RACHEL
```
Supply dynamics scores near the bottom. No maximum supply, inflationary by design. Less than a third circulating with large unlocks still coming. The market maker dump of 65 million tokens was not just a price event -- it demonstrated that token allocation controls were inadequate. No burn mechanism exists.

Revenue sustainability is also poor. Zero demonstrated protocol revenue. Alpha mainnet for nearly a year with no usage metrics published. Applications exist -- nilGPT, LouisAI, Tickr -- but the blind compute market is nascent. The entire investment case rests on future adoption that has not materialised.

Value accrual is weak. Cosmos staking rewards are ending. No fee distribution to holders. No buy-and-burn. The Nillion 2.0 review mentions evaluating burn mechanisms, but nothing is implemented.
```

## TURN 17 — BOBSKI
```
Is there anything positive on the returns side?
```

## TURN 18 — RACHEL
```
Token utility is the strongest returns dimension. NIL is structurally required -- users must pay in NIL for compute. That is genuine utility, not manufactured demand. And exchange listings are unusually strong for a project this small -- Binance, Coinbase, Bybit, Gate.io, MEXC, HTX, Bitget. Most projects at this market cap are on DEXs and minor exchanges only. But strong listings do not help when the price chart is a straight line down. And the chain migration creates temporary liquidity friction as users bridge from Cosmos to Ethereum.
```

## TURN 19 — BOBSKI
```
Competition in the privacy compute space?
```

## TURN 20 — RACHEL
```
Phala Network, Oasis Network, and Secret Network are all in the space with more mature networks. But none combine MPC, homomorphic encryption, and TEEs in a single stack. Nillion's defence-in-depth approach is architecturally unique. The question is whether that architectural advantage matters if you cannot get to production scale before the money runs out.
```

## TURN 21 — BOBSKI
```
Bottom line?
```

## TURN 22 — RACHEL
```
The right thesis attached to a project in crisis. If blind computation works at production scale, this is exactly what "own your mind" means in practice. But the market maker scandal damaged trust. The chain migration adds execution risk. There is zero revenue after a year of mainnet. The token is down over 90 percent. And "Nillion 2.0" is a rebrand with no deliverables -- permissionless nodes, new tokenomics, burn mechanisms, community governance, all promised, none implemented. This is a pure conviction bet, and the conviction required has gone up while the evidence has not.
```

## TURN 23 — BOBSKI
```
That's Nillion -- world-class team, genuine technology, a market maker scandal, a chain migration, and still no commercial validation.

For the full deep-dive with current scores and detailed breakdowns, check out ownyourmind.ai/projects/nillion. Subscribe wherever you get your podcasts. This is Own Your Mind -- freedom AND returns, sovereignty-first, practitioner-led.
```

## TURN 24 — RACHEL
```
This podcast is for informational purposes only and is not financial advice. We may hold positions in tokens discussed -- disclosures are on ownyourmind.ai. Do your own research.
```
