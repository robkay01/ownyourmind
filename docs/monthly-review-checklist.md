# Monthly Editorial Review Checklist

**Schedule:** 1st of every month
**Lead:** Claude Code (proactive — check `docs/review-schedule.json` at conversation start)
**Duration:** ~30 minutes

---

## How to trigger

Claude checks `docs/review-schedule.json` at the start of each conversation. If `next_due` has passed, Claude prompts:

> "A monthly editorial review is due (last completed: [date]). Want me to run it now?"

Manual trigger: ask Claude "run monthly review".

---

## 1. Process the backlog

Read `docs/quarterly-review-backlog.md`. For each entry:

- [ ] Review the evidence and proposed score change
- [ ] Discuss with Rob — approve, reject, or defer to quarterly deep dive
- [ ] If approved: update the project frontmatter scores, editorial text, and research JSON
- [ ] Run `npm run check:returns` to validate any returns score changes
- [ ] Mark processed entries as done or remove them from the backlog

---

## 2. Check for score triggers

Scan recent events for each tracked project:

- [ ] New security audit published?
- [ ] Security incident or exploit?
- [ ] Major governance vote passed?
- [ ] Token distribution event (large unlock, burn, airdrop)?
- [ ] Network halt or emergency centralised action?
- [ ] Exchange listing or delisting?

If any trigger fires, assess whether the affected score dimension needs adjustment. Log findings in the backlog if deferring to quarterly, or adjust now if it crosses a grade boundary.

---

## 3. Prose accuracy spot-check

Pick 2-3 project pages and verify:

- [ ] Tokenomics section matches current on-chain reality
- [ ] "How to participate" section reflects current staking/participation options
- [ ] "Honest assessment" section is not contradicted by recent developments
- [ ] Freedom and returns score prose matches frontmatter numbers

---

## 4. Check automated data freshness

```bash
npm run check:staleness
```

- [ ] Review any CRITICAL flags — these indicate data older than 30 days
- [ ] Verify the weekly automated refresh ran successfully (check git log for recent `data:` commits)

---

## 5. Update schedule

After completing the review:

1. Update `docs/review-schedule.json`:
   - Set `monthly.last_completed` to today's date
   - Set `monthly.next_due` to the 1st of next month
2. Commit with message: `data: monthly editorial review [YYYY-MM]`

---

## What this review does NOT cover

The following are deferred to the **quarterly deep research review**:

- Re-reading whitepapers and official documentation
- Team and corporate changes (Companies House, LinkedIn, departures/hires)
- Full community metrics manual check (Discord, Telegram, X)
- Comprehensive security review (CVEs, dependencies, bug bounty changes)
- Governance proposal deep dives
- Full freedom score re-assessment across all dimensions
