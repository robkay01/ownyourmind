#!/usr/bin/env tsx
// ============================================
// Staleness Report for Research Records
//
// Read-only script. Inspects all project research JSONs
// and prints a staleness report to stdout.
//
// Usage:
//   npm run check:staleness
// ============================================

import fs from 'node:fs';
import path from 'node:path';

const PROJECTS_DIR = path.join(process.cwd(), 'src/data/projects');

function daysSince(dateStr: string | null | undefined): number | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  return Math.floor((Date.now() - d.getTime()) / (1000 * 60 * 60 * 24));
}

function main() {
  const files = fs.readdirSync(PROJECTS_DIR).filter(
    (f) => f.endsWith('.json') && !f.startsWith('_')
  );

  if (files.length === 0) {
    console.log('No project research files found.');
    return;
  }

  console.log('OYM Research Staleness Report');
  console.log(`Generated: ${new Date().toISOString().split('T')[0]}`);
  console.log('='.repeat(60));

  let totalFlags = 0;

  for (const file of files) {
    const filePath = path.join(PROJECTS_DIR, file);
    let data: Record<string, any>;

    try {
      data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } catch {
      console.log(`\n${file}: INVALID JSON -- cannot analyse`);
      totalFlags++;
      continue;
    }

    const meta = data.meta ?? {};
    const ticker = data.identity?.ticker ?? meta.project_id ?? file;
    const flags: string[] = [];

    // 1. meta.last_updated age
    const lastUpdatedAge = daysSince(meta.last_updated);
    if (lastUpdatedAge === null) {
      flags.push('WARN: meta.last_updated is missing');
    } else if (lastUpdatedAge > 180) {
      flags.push(`CRITICAL: last_updated ${lastUpdatedAge}d ago -- freedom score reassessment needed`);
    } else if (lastUpdatedAge > 90) {
      flags.push(`WARN: last_updated ${lastUpdatedAge}d ago -- quarterly review needed`);
    }

    // 2. auto_refresh_log last entry age
    const log = meta.auto_refresh_log;
    if (Array.isArray(log) && log.length > 0) {
      const lastRunAge = daysSince(log[log.length - 1].run_date);
      if (lastRunAge !== null && lastRunAge > 35) {
        flags.push(`WARN: last GitHub refresh ${lastRunAge}d ago (>35d) -- data may be stale`);
      }
    } else if (meta.refresh_config?.github_org) {
      flags.push('INFO: no auto_refresh_log entries -- GitHub refresh has never run');
    }

    // 3. usage_metrics.metrics_date age
    const metricsAge = daysSince(data.usage_metrics?.metrics_date);
    if (metricsAge === null && data.usage_metrics) {
      flags.push('WARN: usage_metrics.metrics_date is missing');
    } else if (metricsAge !== null && metricsAge > 90) {
      flags.push(`WARN: usage_metrics ${metricsAge}d old -- refresh needed`);
    }

    // 4. Prose fields with embedded figures
    const proseFields = meta.refresh_config?.prose_fields_with_embedded_figures;
    if (Array.isArray(proseFields) && proseFields.length > 0) {
      flags.push(`REVIEW: ${proseFields.length} prose field(s) contain embedded figures:`);
      for (const pf of proseFields) {
        flags.push(`  - ${pf}`);
      }
    }

    // 5. Empty audits on non-draft projects
    const audits = data.technical?.audits;
    if (meta.status !== 'draft' && Array.isArray(audits) && audits.length === 0) {
      flags.push('WARN: no security audits recorded on non-draft project');
    }

    // 6. Research gaps
    const gaps = meta.research_gaps;
    if (Array.isArray(gaps) && gaps.length > 0) {
      flags.push(`INFO: ${gaps.length} research gap(s):`);
      for (const g of gaps) {
        flags.push(`  - ${g}`);
      }
    }

    // 7. Pending security incidents
    const incidents = data.technical?.security_incidents;
    if (Array.isArray(incidents)) {
      for (const inc of incidents) {
        const desc = typeof inc === 'string' ? inc : inc?.description ?? '';
        if (/pending|ongoing|unresolved|active/i.test(desc)) {
          flags.push(`CRITICAL: active/pending security incident: ${desc.slice(0, 100)}...`);
        }
      }
    }

    // Print project section
    if (flags.length > 0) {
      console.log(`\n${ticker} (${file})`);
      console.log('-'.repeat(40));
      for (const f of flags) {
        console.log(`  ${f}`);
      }
      totalFlags += flags.length;
    } else {
      console.log(`\n${ticker} (${file}): OK`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`${files.length} file(s) checked, ${totalFlags} flag(s) raised.`);
}

main();
