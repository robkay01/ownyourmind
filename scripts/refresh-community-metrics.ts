#!/usr/bin/env tsx
// ============================================
// Community Metrics Refresh
//
// Fetches Discord and Telegram member counts for all
// projects and updates research JSONs + metrics_history[].
//
// Usage:
//   npm run refresh:community
//   DRY_RUN=true npm run refresh:community
//
// Environment:
//   DRY_RUN=true  -- print changes without writing
//
// Notes:
//   - Discord: uses public invite endpoint (no auth needed)
//   - Telegram: scrapes public t.me page (fragile, may break)
//   - X/Twitter: skipped — requires OAuth and paid API tier
// ============================================

import fs from 'node:fs';
import path from 'node:path';

const PROJECTS_DIR = path.join(process.cwd(), 'src/data/projects');
const DRY_RUN = process.env.DRY_RUN === 'true';
const MAX_LOG_ENTRIES = 12;

function today(): string {
  return new Date().toISOString().split('T')[0];
}

async function fetchDiscordMembers(inviteCode: string): Promise<number | null> {
  try {
    const res = await fetch(
      `https://discord.com/api/v9/invites/${inviteCode}?with_counts=true`,
      {
        headers: {
          'User-Agent': 'OwnYourMind-Research-Bot',
        },
      }
    );

    if (!res.ok) {
      console.log(`    Discord: HTTP ${res.status} for invite ${inviteCode}`);
      return null;
    }

    const data = await res.json();
    const count = data.approximate_member_count;
    if (typeof count === 'number') {
      return count;
    }
    console.log('    Discord: no approximate_member_count in response');
    return null;
  } catch (err) {
    console.log(`    Discord error: ${(err as Error).message}`);
    return null;
  }
}

async function fetchTelegramMembers(username: string): Promise<number | null> {
  try {
    const res = await fetch(`https://t.me/${username}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; OwnYourMind-Research-Bot)',
      },
    });

    if (!res.ok) {
      console.log(`    Telegram: HTTP ${res.status} for @${username}`);
      return null;
    }

    const html = await res.text();

    // Telegram format: "9 454 members, 429 online" or "100K subscribers"
    // We need to extract ONLY the number before "members" or "subscribers"
    const extraMatch = html.match(/class="tgme_page_extra"[^>]*>([^<]+)</i);
    if (extraMatch) {
      const text = extraMatch[1];
      // Match the number part before "members" or "subscribers"
      // Handles formats: "9 454 members", "100K subscribers", "1,234 members"
      const numMatch = text.match(/([\d\s,.']+[KkMm]?)\s*(?:members|subscribers)/i);
      if (numMatch) {
        let numStr = numMatch[1].trim();
        // Handle K/M suffixes
        const multiplier = /[Mm]$/i.test(numStr) ? 1_000_000 : /[Kk]$/i.test(numStr) ? 1_000 : 1;
        numStr = numStr.replace(/[KkMm]$/i, '');
        // Remove space/comma/dot separators, parse as integer
        const cleaned = numStr.replace(/[\s,.']/g, '');
        const count = parseInt(cleaned, 10) * multiplier;
        if (!isNaN(count) && count > 0) {
          return count;
        }
      }
    }

    console.log('    Telegram: could not parse member count from page');
    return null;
  } catch (err) {
    console.log(`    Telegram error: ${(err as Error).message}`);
    return null;
  }
}

// X/Twitter: Skipped. The X API v2 requires OAuth 2.0 and a paid
// tier (Basic plan $100/month) for follower counts. Not worth
// automating at this stage. X follower counts are updated manually
// during quarterly reviews.

async function main() {
  console.log(`Community Metrics Refresh${DRY_RUN ? ' (DRY RUN)' : ''}`);
  console.log('---');

  const files = fs.readdirSync(PROJECTS_DIR).filter(
    (f) => f.endsWith('.json') && !f.startsWith('_')
  );

  let updated = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = path.join(PROJECTS_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    let data: Record<string, any>;

    try {
      data = JSON.parse(raw);
    } catch {
      console.log(`  SKIP ${file}: invalid JSON`);
      skipped++;
      continue;
    }

    const config = data.meta?.refresh_config;
    const discordId = config?.discord_server_id;
    const telegramUsername = config?.telegram_username;

    if (!discordId && !telegramUsername) {
      console.log(`  SKIP ${file}: no discord_server_id or telegram_username`);
      skipped++;
      continue;
    }

    console.log(`\n  ${file}:`);

    const fieldsUpdated: string[] = [];
    const previousValues: Record<string, unknown> = {};
    const newValues: Record<string, unknown> = {};

    let discordMembers: number | null = null;
    let telegramMembers: number | null = null;

    // Fetch Discord
    if (discordId) {
      console.log(`    Fetching Discord (invite: ${discordId})...`);
      discordMembers = await fetchDiscordMembers(discordId);
      if (discordMembers !== null) {
        console.log(`    Discord: ${discordMembers.toLocaleString()} members`);
        const oldVal = data.community?.discord_members ?? null;
        if (oldVal !== discordMembers) {
          fieldsUpdated.push('community.discord_members');
          previousValues['community.discord_members'] = oldVal;
          newValues['community.discord_members'] = discordMembers;
        }
      }
    }

    // Fetch Telegram
    if (telegramUsername) {
      console.log(`    Fetching Telegram (@${telegramUsername})...`);
      telegramMembers = await fetchTelegramMembers(telegramUsername);
      if (telegramMembers !== null) {
        console.log(`    Telegram: ${telegramMembers.toLocaleString()} members`);
        const oldVal = data.community?.telegram_members ?? null;
        if (oldVal !== telegramMembers) {
          fieldsUpdated.push('community.telegram_members');
          previousValues['community.telegram_members'] = oldVal;
          newValues['community.telegram_members'] = telegramMembers;
        }
      }
    }

    if (fieldsUpdated.length === 0) {
      console.log('    No changes');

      // Still append a snapshot even if values unchanged
      if (!DRY_RUN) {
        if (!data.metrics_history) data.metrics_history = [];
        data.metrics_history.push({
          date: today(),
          source: 'community-refresh',
          stars: data.technical?.github_metrics?.stars ?? null,
          forks: data.technical?.github_metrics?.forks ?? null,
          open_issues: data.technical?.github_metrics?.open_issues ?? null,
          contributors: data.technical?.github_metrics?.contributors ?? null,
          total_commits: data.technical?.github_metrics?.total_commits ?? null,
          total_repos: data.technical?.github_metrics?.total_repos ?? null,
          discord_members: discordMembers ?? data.community?.discord_members ?? null,
          telegram_members: telegramMembers ?? data.community?.telegram_members ?? null,
          x_followers: data.community?.x_followers ?? null,
        });
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
        console.log('    Snapshot appended');
      }
      continue;
    }

    console.log(`    ${fieldsUpdated.length} field(s) changed:`);
    for (const f of fieldsUpdated) {
      console.log(`      ${f}: ${JSON.stringify(previousValues[f])} -> ${JSON.stringify(newValues[f])}`);
    }

    if (DRY_RUN) {
      updated++;
      continue;
    }

    // Apply updates
    if (!data.community) data.community = {};
    if (discordMembers !== null) {
      data.community.discord_members = discordMembers;
    }
    if (telegramMembers !== null) {
      data.community.telegram_members = telegramMembers;
    }

    // Append metrics snapshot
    if (!data.metrics_history) data.metrics_history = [];
    data.metrics_history.push({
      date: today(),
      source: 'community-refresh',
      stars: data.technical?.github_metrics?.stars ?? null,
      forks: data.technical?.github_metrics?.forks ?? null,
      open_issues: data.technical?.github_metrics?.open_issues ?? null,
      contributors: data.technical?.github_metrics?.contributors ?? null,
      total_commits: data.technical?.github_metrics?.total_commits ?? null,
      total_repos: data.technical?.github_metrics?.total_repos ?? null,
      discord_members: discordMembers ?? data.community?.discord_members ?? null,
      telegram_members: telegramMembers ?? data.community?.telegram_members ?? null,
      x_followers: data.community?.x_followers ?? null,
    });

    // Increment version and update date
    data.meta.version = (data.meta.version ?? 0) + 1;
    data.meta.last_updated = today();

    // Append to auto_refresh_log (capped at MAX_LOG_ENTRIES)
    if (!data.meta.auto_refresh_log) data.meta.auto_refresh_log = [];
    data.meta.auto_refresh_log.push({
      run_date: today(),
      fields_updated: fieldsUpdated,
      previous_values: previousValues,
      new_values: newValues,
      run_by: 'community-refresh',
    });
    if (data.meta.auto_refresh_log.length > MAX_LOG_ENTRIES) {
      data.meta.auto_refresh_log = data.meta.auto_refresh_log.slice(-MAX_LOG_ENTRIES);
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
    console.log('    Written');
    updated++;
  }

  console.log(`\n---\n${updated} file(s) ${DRY_RUN ? 'would be ' : ''}updated, ${skipped} skipped.`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
