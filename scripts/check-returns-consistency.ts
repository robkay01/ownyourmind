#!/usr/bin/env tsx
// ============================================
// Returns Score Consistency Check
//
// Validates that returns scores are internally consistent
// across frontmatter, editorial body text, and breakdown sums
// for every project in src/content/projects/.
//
// Usage:
//   npm run check:returns
//
// Exit code 1 if any inconsistencies found.
// ============================================

import fs from 'node:fs';
import path from 'node:path';

const PROJECTS_DIR = path.join(process.cwd(), 'src/content/projects');

interface Issue {
  project: string;
  message: string;
  severity: 'ERROR' | 'WARN';
}

function main() {
  const files = fs.readdirSync(PROJECTS_DIR).filter(f => f.endsWith('.md'));
  const issues: Issue[] = [];

  console.log('OYM Returns Score Consistency Check');
  console.log(`Generated: ${new Date().toISOString().split('T')[0]}`);
  console.log('='.repeat(60));

  for (const file of files) {
    const project = file.replace('.md', '');
    const text = fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf-8');
    const parts = text.split('---');
    if (parts.length < 3) continue;

    const fm = parts[1];
    const body = parts.slice(2).join('---');

    // 1. Extract frontmatter returnsScore
    const rsMatch = fm.match(/returnsScore:\s*([\d.]+)/);
    if (!rsMatch) continue; // no returns score, skip
    const returnsScore = parseFloat(rsMatch[1]);
    const raw = Math.round(returnsScore * 10);

    // 2. Extract breakdown dimensions
    const dims: Record<string, number | null> = {
      tokenUtility: null,
      valueAccrual: null,
      supplyDynamics: null,
      revenueSustainability: null,
      liquidityAccess: null,
    };
    const maxes: Record<string, number> = {
      tokenUtility: 20,
      valueAccrual: 20,
      supplyDynamics: 20,
      revenueSustainability: 25,
      liquidityAccess: 15,
    };

    const bdMatch = fm.match(/returnsScoreBreakdown:([\s\S]*?)(?:returnsScoreEvidence|publishDate|updatedDate)/);
    if (bdMatch) {
      for (const key of Object.keys(dims)) {
        const m = bdMatch[1].match(new RegExp(`${key}:\\s*(\\d+)`));
        if (m) dims[key] = parseInt(m[1]);
      }
    }

    // 3. Check breakdown sum matches frontmatter
    const hasBreakdown = Object.values(dims).some(v => v !== null);
    if (hasBreakdown) {
      const bdSum = Object.values(dims).reduce((a: number, b) => a + (b ?? 0), 0);
      if (bdSum !== raw) {
        issues.push({
          project,
          message: `Breakdown sum (${bdSum}) does not match frontmatter raw score (${raw})`,
          severity: 'ERROR',
        });
      }

      // Check individual dimensions are within max
      for (const [key, val] of Object.entries(dims)) {
        if (val !== null && val > maxes[key]) {
          issues.push({
            project,
            message: `${key} (${val}) exceeds max (${maxes[key]})`,
            severity: 'ERROR',
          });
        }
      }
    }

    // 4. Check editorial heading matches
    const headingMatch = body.match(/Returns Score[:\s]*(\d+)\/100/);
    if (headingMatch) {
      const editorialRaw = parseInt(headingMatch[1]);
      if (editorialRaw !== raw) {
        issues.push({
          project,
          message: `Editorial heading (${editorialRaw}/100) does not match frontmatter (${raw}/100)`,
          severity: 'ERROR',
        });
      }
    }

    // 5. Check evidence exists if breakdown exists
    const evidenceMatch = fm.match(/returnsScoreEvidence:/);
    if (hasBreakdown && !evidenceMatch) {
      issues.push({
        project,
        message: 'Has breakdown but no returnsScoreEvidence — evidence dropdowns will be empty',
        severity: 'WARN',
      });
    }

    // 6. Check grade consistency
    const grade = raw >= 85 ? 'A' : raw >= 70 ? 'B' : raw >= 55 ? 'C' : raw >= 40 ? 'D' : 'F';
    const gradeMatch = body.match(/Returns Score[^)]*\(Grade:\s*([A-F])\)/i)
      || body.match(/returns grade[:\s]*([A-F])\b/i);
    if (gradeMatch) {
      const editorialGrade = gradeMatch[1].toUpperCase();
      if (editorialGrade !== grade) {
        issues.push({
          project,
          message: `Editorial grade (${editorialGrade}) does not match calculated grade (${grade}) for score ${raw}`,
          severity: 'ERROR',
        });
      }
    }

    // 7. Pre-token checks
    const statusMatch = fm.match(/status:\s*(\w+)/);
    const tokenMatch = fm.match(/token:\s*"?([^"\n]+)"?/);
    const isPreToken = tokenMatch && /pre-token|none|N\/A|TBD/i.test(tokenMatch[1].trim());
    if (isPreToken && dims.liquidityAccess !== null && dims.liquidityAccess > 0) {
      issues.push({
        project,
        message: `Pre-token project has liquidityAccess of ${dims.liquidityAccess} (should be 0)`,
        severity: 'ERROR',
      });
    }

    // 8. Freedom score consistency check (bonus)
    const fsMatch = fm.match(/freedomScore:\s*([\d.]+)/);
    if (fsMatch) {
      const fs100 = Math.round(parseFloat(fsMatch[1]) * 10);
      const fsHeading = body.match(/Freedom Score[:\s]*(\d+)\/100/);
      if (fsHeading) {
        const editorialFs = parseInt(fsHeading[1]);
        if (editorialFs !== fs100) {
          issues.push({
            project,
            message: `Freedom Score heading (${editorialFs}/100) does not match frontmatter (${fs100}/100)`,
            severity: 'ERROR',
          });
        }
      }
    }

    if (!issues.some(i => i.project === project)) {
      console.log(`  ${project}: OK`);
    }
  }

  // Print issues
  const errors = issues.filter(i => i.severity === 'ERROR');
  const warnings = issues.filter(i => i.severity === 'WARN');

  if (errors.length > 0) {
    console.log('\nERRORS:');
    for (const e of errors) {
      console.log(`  ${e.project}: ${e.message}`);
    }
  }

  if (warnings.length > 0) {
    console.log('\nWARNINGS:');
    for (const w of warnings) {
      console.log(`  ${w.project}: ${w.message}`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`${files.length} project(s) checked. ${errors.length} error(s), ${warnings.length} warning(s).`);

  if (errors.length > 0) {
    process.exit(1);
  }
}

main();
