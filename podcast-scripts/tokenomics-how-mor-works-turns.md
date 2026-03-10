# How MOR Actually Works
## Turn-by-Turn Production Script

Each turn is a single dialogue exchange. Generate one clip per turn.
Clips concatenate in order with pauses to produce the final episode.

---

## TURN 01 — BOBSKI
```
Welcome back to the Own Your Mind podcast. I'm Bobski, and today we're breaking down how the More token actually works. Not the pitch, not the narrative -- the actual mechanics. Emissions, staking, the Power Factor multiplier, and what the numbers mean if you're deploying capital. Rachel, where do we start?
```

## TURN 02 — RACHEL
```
And I'm Rachel. Let's start with the single most important thing about More's tokenomics. In a space where projects routinely allocate 30 to 50 percent of supply to insiders, Morpheus has zero insider allocation. No pre-mine, no ICO, no VC rounds. Every More in existence was earned through direct contribution to the network. When you buy or earn More, you are not providing exit liquidity for venture capitalists.
```

## TURN 03 — BOBSKI
```
Zero percent. That's genuinely rare. So how does the token get distributed?
```

## TURN 04 — RACHEL
```
Daily emissions split across five buckets. In year one, roughly 14,400 More per day. Compute providers get 24 percent, code contributors get 24 percent, capital providers get 24 percent, community builders get 24 percent, and there's a 4 percent protection fund for smart contract bugs or failures. Think of that as self-insurance for the protocol.

Total supply caps at 42 million More. Emissions decline on a smooth curve that roughly halves every four years -- similar to Bitcoin but without the discrete halving events. Early participants earn disproportionately more per unit of contribution.
```

## TURN 05 — BOBSKI
```
And for most people, the entry point is capital providing. How does that work in practice?
```

## TURN 06 — RACHEL
```
You deposit staked ETH -- that's Lido's staked Ethereum -- into the Morpheus smart contract on Ethereum. The yield from your staked ETH, currently about 3 to 4 percent annually, flows to the protocol. In return, you receive a proportional share of the capital provider More emissions, distributed on Arbitrum.

The key thing -- your principal is never sold or spent. Only the yield is diverted. Half of that yield buys More from the Uniswap pool, and the other half pairs with the purchased More as protocol-owned liquidity. So every day that capital providers are staking, the protocol's own liquidity deepens. That's a growing floor under the token.
```

## TURN 07 — BOBSKI
```
So what determines how much More I earn?
```

## TURN 08 — RACHEL
```
Your share of the total staked ETH pool. If there's 100,000 staked ETH in the contract and you contribute 100, you receive 0.1 percent of daily capital emissions. That's roughly 3.5 More per day at year one rates. As more capital enters, your per-unit returns dilute, but a growing pool signals network health.

There's a 7-day lock on new deposits before you can withdraw. After that, your staked ETH is freely withdrawable at any time. Earned More can be claimed whenever you want -- no vesting, no lock. One thing to watch -- making a new deposit restarts the 7-day lock for your entire balance from that address.
```

## TURN 09 — BOBSKI
```
They also expanded beyond staked ETH, right?
```

## TURN 10 — RACHEL
```
Yes, Capital V2 launched in September 2025. You can now stake USDC, USDT and wrapped Bitcoin via Aave integration. Chainlink oracles normalise yields across asset types in real time, converting everything to USDC equivalents. So the system accounts for the fact that staked ETH yields 3 to 4 percent while USDC lending might yield 5 to 8 percent depending on market conditions. You earn proportional to your actual yield contribution, not just the dollar value of your deposit.
```

## TURN 11 — BOBSKI
```
Now let's talk about the Power Factor, because this is the mechanic that really changes the calculus. What is it?
```

## TURN 12 — RACHEL
```
The Power Factor lets you lock your earned More rewards for a set period in exchange for a multiplier on your emissions. The logic is elegant -- More has a declining emission curve, so holders get diluted over time. If you lock your More and can't sell it, you're absorbing that dilution without contributing sell pressure. The protocol rewards you for this.

The multiplier equals the dilution you'd experience during the lock period. Less than six months gives you basically no boost. One year is roughly 2x. Two years about 4x. And the maximum -- six years -- gives you approximately 10.7x. You're earning roughly eleven times the More per unit of staked capital compared to someone who doesn't lock at all.
```

## TURN 13 — BOBSKI
```
That's massive. But six years is a long time in crypto. What are the rules?
```

## TURN 14 — RACHEL
```
The lock can only be increased, never decreased. Once you commit to a duration, you cannot shorten it. You can extend it. Locked More cannot be withdrawn early -- this is a hard commitment, not a suggestion. And it applies to all contributor types, not just capital providers.

The important nuance -- your staked ETH principal remains freely withdrawable. Only the More rewards are locked. So if the thesis breaks, you can pull your staked ETH and walk away. You just forfeit the locked More.
```

## TURN 15 — BOBSKI
```
What about the burn mechanism? How does More actually capture value from usage?
```

## TURN 16 — RACHEL
```
Two things happening. First, More is an access token for compute. You hold More to get an inference-per-second quota on the network -- the more you hold, the more compute you can access. This creates persistent demand because More isn't burned when you run an inference. It's held.

Second, the actual burn comes from protocol-owned liquidity generation. Under MRC43, 50 percent of More remaining after liquidity generation is sent to a permanent burn address. The other 50 percent is locked for 16 years as a reserve for tail emissions.

After about 16 years, tail emissions kick in at 50 percent of More burned during the preceding period, capped at 16 percent of circulating supply. Because tail emissions are always less than total burns, More becomes structurally deflationary over the long term. The deflation is designed into the system, not dependent on usage.
```

## TURN 17 — BOBSKI
```
So what's the bull case and bear case here?
```

## TURN 18 — RACHEL
```
Bull case -- Morpheus becomes a significant decentralised compute network. Inference demand grows, requiring more More to be held for access. Burns reduce supply. Token supply contracts while demand for holding increases.

Bear case -- usage doesn't materialise at scale. Not enough demand for holding More for compute access. Supply grows via emissions faster than demand grows via utility. Compute providers leave and the network contracts.

Realistic case -- somewhere between. The network grows but slowly. Early participants earn well on emissions, especially with the Power Factor. Long-term value depends on capturing meaningful market share against competitors like Akash, Render and io.net.
```

## TURN 19 — BOBSKI
```
What are the main risks?
```

## TURN 20 — RACHEL
```
Three big ones. First, the long lock period for Power Factor participants -- you genuinely cannot change your mind. Size your position for the commitment, not the other way around.

Second, dependence on compute demand materialising at scale. The network is still young.

Third, smart contract risk across a multi-chain architecture -- Ethereum for staking, Arbitrum for rewards, Base for inference. The Code4rena audit in August 2025 found medium-severity issues around staked ETH rounding and Aave pool migration. These are the edge cases that matter when real capital is at stake.

And liquidity is thin. Daily volume on DEX is modest. Meaningful positions are hard to enter or exit.
```

## TURN 21 — BOBSKI
```
So the bottom line -- More's tokenomics are well designed for long-term alignment. Fair launch eliminates insider dump risk, the emission curve rewards early commitment, the Power Factor rewards conviction, and the burn mechanism creates structural deflation. The question is whether the network achieves the scale needed to make it all work.

For the full breakdown with all the numbers and tables, head to ownyourmind.ai/tokenomics/how-mor-actually-works. Subscribe wherever you get your podcasts, and we'll keep digging into the mechanics that actually matter.
```

## TURN 22 — RACHEL
```
This podcast is for informational purposes only and is not financial advice. We may hold positions in tokens discussed -- disclosures are on ownyourmind.ai. Do your own research.
```
