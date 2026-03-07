# Quarterly Deep Research Review Checklist

**Schedule:** 1st of January, April, July, October
**Lead:** Claude Code (proactive — check `docs/review-schedule.json` at conversation start)
**Duration:** ~2-3 hours

---

## How to trigger

Claude checks `docs/review-schedule.json` at the start of each conversation. If `quarterly.next_due` has passed, Claude prompts:

> "A quarterly deep research review is due (last completed: [date]). This takes 2-3 hours. Want me to run it now?"

Manual trigger: ask Claude "run quarterly review".

**Pre-requisite:** Process `docs/quarterly-review-backlog.md` first (any entries not yet handled in monthly reviews).

---

## 1. Run the staleness report

```bash
npm run check:staleness
```

Review all CRITICAL and WARN flags. Address each before proceeding.

---

## 2. Manual community checks

For each project, check and update:

- **Discord members** -- join the server or check a bot tracker
- **Telegram members** -- open the group info
- **X followers** -- check the project's X profile
- **Nodes active** -- check the project's own dashboard:
  - Bittensor: taostats.io
  - Morpheus: mor.org/ecosystem

---

## 3. Security review

- New third-party audits published?
- Security incidents since last review?
- CVEs in key dependencies (Substrate, Solidity, Python SDK)?
- Bug bounty programme launched or changed?
- Check rekt.news and DeFiLlama exploits tracker

---

## 4. Team and governance

- Key departures or hires?
- Governance proposals passed or rejected?
- New exchange listings or delistings?
- Entity structure changes (new foundation, jurisdiction move)?
- Active or resolved lawsuits?

---

## 5. Freedom score triggers

Re-assess the freedom score if any of these occurred:

- Governance model change (e.g. PoA to PoS transition)
- Major security incident
- Token distribution event (unlock, airdrop, burn)
- Censorship event (transaction blocked, content removed)
- Open source licence change
- Network halt or emergency action by centralised party

If triggered, re-score affected dimensions, update total, and update freedom_grade if it changes.

---

## 6. Update the JSON files

For each modified project JSON:

1. Update the changed fields
2. Increment `meta.version`
3. Set `meta.last_updated` to today (YYYY-MM-DD)
4. Append an entry to `meta.auto_refresh_log`:

```json
{
  "run_date": "YYYY-MM-DD",
  "fields_updated": ["community.discord_members", "..."],
  "previous_values": { "community.discord_members": 45500 },
  "new_values": { "community.discord_members": 48200 },
  "run_by": "manual-quarterly"
}
```

5. Append a `metrics_history` entry with all current counts:

```json
{
  "date": "YYYY-MM-DD",
  "source": "manual-quarterly",
  "stars": 1234,
  "forks": 567,
  "open_issues": 89,
  "contributors": 120,
  "total_commits": 4500,
  "total_repos": 15,
  "discord_members": 48200,
  "telegram_members": 12000,
  "x_followers": 95000
}
```

6. Review `meta.research_gaps` -- close resolved items, add new ones
7. Review all `prose_fields_with_embedded_figures` and update prose if figures changed materially

---

## 7. Verify

```bash
npm run check        # TypeScript compiles
npm run build        # Site builds
```

Commit with message: `data: Q[N] [YYYY] quarterly research review`

---

## 8. Update schedule

After completing the review:

1. Update `docs/review-schedule.json`:
   - Set `quarterly.last_completed` to today's date
   - Set `quarterly.next_due` to the 1st of the next quarter month
   - Also update `monthly.last_completed` and `monthly.next_due` (quarterly subsumes monthly)
2. Clear all processed entries from `docs/quarterly-review-backlog.md`
