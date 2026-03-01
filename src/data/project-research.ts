import fs from 'node:fs';
import path from 'node:path';

// ============================================
// OYM Project Research Record
//
// Structured research data for DeAI projects.
// Each project gets a JSON file in src/data/projects/
// named {TICKER}_{slug}.json (e.g. MOR_morpheus.json).
//
// All fields are optional except meta.project_id.
// Partially-completed research files are valid.
// ============================================

// --- Meta ---
// Tracks research provenance, versioning and completeness.

// --- Refresh Config ---
// Identifiers for automated data refresh pipelines.

export interface RefreshConfig {
  /** GitHub organisation name (e.g. "opentensor") */
  github_org?: string | null;
  /** Primary GitHub repository name (e.g. "bittensor") */
  github_primary_repo?: string | null;
  /** CoinGecko API identifier (e.g. "bittensor") */
  coingecko_id?: string | null;
  /** Discord server ID for member count (not currently automated) */
  discord_server_id?: string | null;
  /** Telegram username for member count (not currently automated) */
  telegram_username?: string | null;
  /** X/Twitter handle (not currently automated) */
  x_handle?: string | null;
  /** Dot-path list of prose fields containing embedded numeric figures that cannot be auto-refreshed */
  prose_fields_with_embedded_figures?: string[] | null;
}

export interface RefreshLogEntry {
  /** Date the refresh was run: YYYY-MM-DD */
  run_date: string;
  /** List of field paths that were updated */
  fields_updated: string[];
  /** Previous values of updated fields */
  previous_values: Record<string, unknown>;
  /** New values of updated fields */
  new_values: Record<string, unknown>;
  /** Who or what ran the refresh (e.g. "github-actions", "manual-quarterly") */
  run_by: string;
}

export interface ResearchMeta {
  /** Kebab-case identifier matching the content collection slug (e.g. "morpheus") */
  project_id: string;
  /** Date research was conducted: YYYY-MM-DD */
  research_date?: string | null;
  /** Name of the person who compiled this record */
  researcher?: string | null;
  /** Monotonically increasing version number, starting at 1 */
  version?: number | null;
  /** Date of last edit: YYYY-MM-DD */
  last_updated?: string | null;
  /** Current review status */
  status?: 'draft' | 'fact-checked' | 'published' | null;
  /** List of things that could not be confirmed or sourced */
  research_gaps?: string[] | null;
  /** Configuration for automated data refresh pipelines */
  refresh_config?: RefreshConfig | null;
  /** Log of automated refresh runs (capped at 12 entries) */
  auto_refresh_log?: RefreshLogEntry[] | null;
}

// --- Identity ---
// Core project metadata and links.

export interface ProjectIdentity {
  /** Official project name */
  name?: string | null;
  /** Token ticker symbol */
  ticker?: string | null;
  /** Primary category matching content collection enum */
  category?: string | null;
  /** More specific classification within the category */
  subcategory?: string | null;
  /** The project's own tagline or slogan */
  tagline?: string | null;
  /** OYM's plain-English summary of what the project does */
  one_liner?: string | null;
  /** Primary website URL */
  website?: string | null;
  /** Developer/user documentation URL */
  documentation_url?: string | null;
  /** Whitepaper or litepaper URL */
  whitepaper_url?: string | null;
  /** Primary GitHub organisation or repo URL */
  github_url?: string | null;
  /** Primary blockchain or L1 the project operates on */
  chain?: string | null;
  /** Mainnet or token launch date: YYYY-MM-DD */
  launch_date?: string | null;
  /** Current operational status */
  current_status?: 'mainnet' | 'testnet' | 'beta' | 'development' | 'defunct' | null;
  /** URL to project logo/icon */
  logo_url?: string | null;
}

// --- Team ---
// Founding team, entity structure and funding history.

export interface TeamMember {
  /** Full name or known pseudonym */
  name?: string | null;
  /** Current role/title */
  role?: string | null;
  /** Brief professional background */
  background?: string | null;
  /** LinkedIn or X profile URL */
  linkedin_or_x?: string | null;
  /** Whether this person's real identity is publicly known */
  doxxed?: boolean | null;
}

export interface FundingRound {
  /** Type of round: seed, Series A, public sale, etc. */
  round_type?: string | null;
  /** Amount raised in USD */
  amount_usd?: number | null;
  /** Date of the round: YYYY-MM-DD */
  date?: string | null;
  /** Lead investor name */
  lead_investor?: string | null;
}

export interface TeamInfo {
  /** Key founding and leadership team members */
  founding_team?: TeamMember[] | null;
  /** Estimated total team size (full-time equivalents) */
  team_size_estimate?: number | null;
  /** Legal entity name (e.g. "Morpheus Foundation") */
  entity_name?: string | null;
  /** Jurisdiction of the legal entity */
  entity_jurisdiction?: string | null;
  /** Notable VC firms, angels or institutional backers */
  notable_backers?: string[] | null;
  /** Funding history */
  funding_raised?: {
    /** Total USD raised across all rounds */
    total_usd?: number | null;
    /** Individual funding rounds */
    rounds?: FundingRound[] | null;
  } | null;
}

// --- Technical ---
// Architecture, code quality, security posture.

export interface GitHubMetrics {
  /** Total number of repositories in the org */
  total_repos?: number | null;
  /** URL of the primary/most active repository */
  primary_repo_url?: string | null;
  /** Total commits across primary repo */
  total_commits?: number | null;
  /** Number of unique contributors */
  contributors?: number | null;
  /** Date of most recent commit: YYYY-MM-DD */
  last_commit_date?: string | null;
  /** GitHub stars on primary repo */
  stars?: number | null;
  /** GitHub forks on primary repo */
  forks?: number | null;
  /** Open issue count on primary repo */
  open_issues?: number | null;
}

export interface AuditRecord {
  /** Auditing firm or individual */
  auditor?: string | null;
  /** Date audit was completed: YYYY-MM-DD */
  date?: string | null;
  /** What was covered (e.g. "smart contracts", "full protocol") */
  scope?: string | null;
  /** Brief summary of findings */
  result_summary?: string | null;
  /** URL to published audit report */
  report_url?: string | null;
}

export interface TechnicalInfo {
  /** Paragraph explaining how the system works at a high level */
  architecture_summary?: string | null;
  /** Consensus mechanism used (PoS, PoW, custom, N/A) */
  consensus_mechanism?: string | null;
  /** What data/logic lives on-chain */
  what_is_onchain?: string | null;
  /** What data/logic lives off-chain */
  what_is_offchain?: string | null;
  /** External systems the project depends on */
  key_dependencies?: string[] | null;
  /** Languages used for on-chain code (Solidity, Rust, etc.) */
  smart_contract_languages?: string[] | null;
  /** Whether all core code is open source */
  open_source?: boolean | null;
  /** Software licence (MIT, Apache 2.0, BSL, etc.) */
  license?: string | null;
  /** GitHub activity metrics */
  github_metrics?: GitHubMetrics | null;
  /** Security audits completed */
  audits?: AuditRecord[] | null;
  /** Any known security incidents or exploits */
  security_incidents?: string[] | null;
}

// --- Tokenomics ---
// Token mechanics, supply schedule, staking, and economic model.

export interface TokenAllocation {
  /** Allocation category (Community, Team, Investors, Treasury, etc.) */
  category?: string | null;
  /** Percentage of total/initial supply */
  percentage?: number | null;
  /** Vesting schedule description */
  vesting_schedule?: string | null;
  /** Cliff period before tokens begin unlocking */
  cliff?: string | null;
  /** Additional context */
  notes?: string | null;
}

export interface TokenSupply {
  /** Hard cap on total tokens that will ever exist (null if uncapped) */
  max_supply?: number | null;
  /** Total tokens minted to date */
  total_supply?: number | null;
  /** Tokens in active circulation */
  circulating_supply?: number | null;
  /** Date the circulating supply figure was recorded: YYYY-MM-DD */
  circulating_supply_date?: string | null;
  /** Circulating as a percentage of max supply (0-100) */
  circulating_percentage?: number | null;
}

export interface TokenDistribution {
  /** Breakdown of initial token allocation */
  initial_allocation?: TokenAllocation[] | null;
  /** How tokens were initially distributed (fair launch, ICO, airdrop, etc.) */
  distribution_method?: string | null;
}

export interface TokenEmissions {
  /** Emission model classification */
  model?: 'fixed' | 'deflationary' | 'inflationary' | 'disinflationary' | null;
  /** Current daily token emissions */
  current_daily_emissions?: number | null;
  /** Current annual inflation rate as a percentage */
  current_annual_inflation_rate?: number | null;
  /** Description of halving or reduction schedule */
  halving_schedule?: string | null;
  /** Description of next significant emission event */
  next_major_emission_event?: string | null;
  /** Date of next emission event: YYYY-MM-DD */
  next_event_date?: string | null;
  /** Description of any burn mechanism */
  burn_mechanism?: string | null;
}

export interface TokenStaking {
  /** Whether staking is available */
  staking_available?: boolean | null;
  /** Type of staking (delegated PoS, liquid staking, lock-and-earn, etc.) */
  staking_type?: string | null;
  /** Minimum amount required to stake */
  minimum_stake?: number | null;
  /** Required lock-up period description */
  lock_up_period?: string | null;
  /** Current nominal APY as a percentage */
  current_apy_nominal?: number | null;
  /** Real yield after accounting for inflation */
  real_yield_after_inflation?: number | null;
  /** Percentage of supply currently staked (0-100) */
  staking_ratio?: number | null;
  /** Known risks of staking */
  staking_risks?: string[] | null;
  /** Conditions under which staked tokens can be slashed */
  slashing_conditions?: string | null;
}

export interface TokenomicsInfo {
  /** Full token name */
  token_name?: string | null;
  /** Token ticker */
  ticker?: string | null;
  /** Token standard (ERC-20, SPL, native, etc.) */
  token_standard?: string | null;
  /** Primary function of the token */
  token_type?: 'utility' | 'governance' | 'both' | 'work' | 'other' | null;
  /** List of things the token is used for */
  token_utility?: string[] | null;
  /** Supply figures */
  supply?: TokenSupply | null;
  /** Initial distribution */
  distribution?: TokenDistribution | null;
  /** Emission schedule */
  emissions?: TokenEmissions | null;
  /** Staking mechanics */
  staking?: TokenStaking | null;
  /** High-level classification of the token economic model */
  token_model_classification?: string | null;
  /** Additional notes on tokenomics */
  tokenomics_notes?: string | null;
}

// --- Participation ---
// How to get involved and developer resources.

export interface ParticipationMethod {
  /** Category of participation */
  type?: 'staking' | 'node_operation' | 'mining' | 'validating' | 'building' | 'using' | 'contributing' | 'governance' | null;
  /** What this method involves */
  description?: string | null;
  /** Hardware requirements (if applicable) */
  minimum_hardware?: string | null;
  /** Minimum capital required in USD */
  minimum_capital_usd?: number | null;
  /** Technical skill level needed */
  technical_skill_required?: 'none' | 'basic' | 'intermediate' | 'advanced' | 'expert' | null;
  /** Expected returns or earnings description */
  estimated_returns?: string | null;
  /** Things that make entry difficult */
  barriers_to_entry?: string[] | null;
  /** Whether OYM or the project has a how-to guide */
  guide_available?: boolean | null;
  /** URL to the guide */
  guide_url?: string | null;
}

export interface DeveloperResources {
  /** Whether an SDK is available */
  sdk_available?: boolean | null;
  /** Whether a public API is available */
  api_available?: boolean | null;
  /** Quality assessment of developer documentation */
  documentation_quality?: 'poor' | 'adequate' | 'good' | 'excellent' | null;
  /** Description of developer community size */
  developer_community_size?: string | null;
  /** Whether a grants/bounty programme exists */
  grants_program?: boolean | null;
  /** URL to grants programme */
  grants_url?: string | null;
}

export interface ParticipationInfo {
  /** Ways to participate in the project */
  methods?: ParticipationMethod[] | null;
  /** Resources available for developers */
  developer_resources?: DeveloperResources | null;
}

// --- Usage Metrics ---
// On-chain and off-chain activity indicators.

export interface UsageMetrics {
  /** Daily active users/addresses */
  active_users_daily?: number | null;
  /** Monthly active users/addresses */
  active_users_monthly?: number | null;
  /** All-time transaction count */
  total_transactions?: number | null;
  /** Average daily transactions */
  daily_transactions?: number | null;
  /** Total value locked in USD */
  tvl_usd?: number | null;
  /** Description of compute delivered (e.g. "X inference requests/day") */
  compute_delivered?: string | null;
  /** Number of active network nodes */
  nodes_active?: number | null;
  /** Number of active validators */
  validators_active?: number | null;
  /** Number of active miners */
  miners_active?: number | null;
  /** Number of unique smart contracts deployed on the platform */
  unique_contracts_deployed?: number | null;
  /** Annualised protocol revenue in USD */
  revenue_annual_usd?: number | null;
  /** Where protocol revenue comes from */
  revenue_source?: string | null;
  /** Source/dashboard used to obtain these metrics */
  metrics_source?: string | null;
  /** Date these metrics were captured: YYYY-MM-DD */
  metrics_date?: string | null;
  /** Additional context on usage data */
  usage_notes?: string | null;
}

// --- Community ---
// Social presence, governance and sentiment.

export interface CommunityInfo {
  /** Discord server member count */
  discord_members?: number | null;
  /** Telegram group member count */
  telegram_members?: number | null;
  /** X/Twitter follower count */
  x_followers?: number | null;
  /** GitHub contributor count across all repos */
  github_contributors?: number | null;
  /** Description of governance participation rate */
  governance_participation_rate?: string | null;
  /** Governance model description */
  governance_model?: string | null;
  /** URL to governance forum or voting platform */
  governance_url?: string | null;
  /** Key community channels with URLs */
  key_community_channels?: string[] | null;
  /** Brief summary of community sentiment */
  sentiment_summary?: string | null;
  /** Additional community notes */
  community_notes?: string | null;
}

// --- Freedom Score ---
// OYM's decentralisation and sovereignty assessment.
// Six dimensions scored individually, summing to a total out of 100.

export interface FreedomDimension {
  /** Score for this dimension */
  score?: number | null;
  /** Maximum possible score for this dimension */
  max?: number | null;
  /** Evidence and reasoning for the score */
  evidence?: string | null;
}

export interface FreedomScoreBreakdown {
  /** Physical infrastructure distribution (max 20) */
  infrastructure_decentralisation?: FreedomDimension | null;
  /** Decision-making power distribution (max 20) */
  governance_decentralisation?: FreedomDimension | null;
  /** Fairness of initial and ongoing token distribution (max 15) */
  token_distribution_fairness?: FreedomDimension | null;
  /** Resistance to censorship and content filtering (max 15) */
  censorship_resistance?: FreedomDimension | null;
  /** User control over their own data (max 15) */
  data_sovereignty?: FreedomDimension | null;
  /** Code transparency and auditability (max 15) */
  open_source_transparency?: FreedomDimension | null;
}

export interface FreedomScore {
  /** Total score out of 100 */
  total_score?: number | null;
  /** Maximum possible score (always 100) */
  max_possible?: number | null;
  /** Individual dimension scores */
  breakdown?: FreedomScoreBreakdown | null;
  /** Letter grade: A (80-100), B (60-79), C (40-59), D (20-39), F (0-19) */
  freedom_grade?: 'A' | 'B' | 'C' | 'D' | 'F' | null;
  /** 2-3 sentence summary of decentralisation assessment */
  freedom_summary?: string | null;
}

// --- Assessment ---
// OYM's editorial judgement on the project.

export interface Assessment {
  /** Things that genuinely work today, not promises */
  what_works_today?: string[] | null;
  /** Claims or features that are overstated */
  what_is_hype?: string[] | null;
  /** Material risks to participants */
  key_risks?: string[] | null;
  /** Genuine competitive advantages */
  competitive_advantages?: string[] | null;
  /** Competitive weaknesses */
  competitive_disadvantages?: string[] | null;
  /** Similar projects for comparison (ticker or name) */
  comparable_projects?: string[] | null;
  /** Forward-looking assessment */
  outlook?: string | null;
  /** Overall editorial assessment */
  overall_assessment?: string | null;
}

// --- Sources ---
// Every claim should be traceable to a source.
// Tier 1: primary (docs, contracts, on-chain data)
// Tier 2: secondary (audits, research reports)
// Tier 3: social/community (interviews, forums)
// Tier 4: unverified (social media, anon claims)

export interface Source {
  /** Unique identifier within this record (e.g. "S001") */
  source_id?: string | null;
  /** Reliability tier: 1 (highest) to 4 (lowest) */
  tier?: number | null;
  /** Type of source */
  type?: 'documentation' | 'whitepaper' | 'smart_contract' | 'github' | 'block_explorer' | 'market_data' | 'audit_report' | 'research_report' | 'interview' | 'social_media' | 'governance' | 'news' | null;
  /** Title of the source document or page */
  title?: string | null;
  /** URL */
  url?: string | null;
  /** Author name */
  author?: string | null;
  /** Publisher or platform */
  publisher?: string | null;
  /** Publication date: YYYY-MM-DD */
  date_published?: string | null;
  /** Date OYM accessed this source: YYYY-MM-DD */
  date_accessed?: string | null;
  /** Which fields in this record were informed by this source */
  data_points_sourced?: string[] | null;
  /** Notes on source reliability */
  reliability_notes?: string | null;
}

// --- Metrics History ---
// Time-series snapshots for trending sparklines on project pages.

export interface MetricsSnapshot {
  /** Date the snapshot was taken: YYYY-MM-DD */
  date: string;
  /** What triggered this snapshot */
  source: 'github-refresh' | 'manual-quarterly' | 'manual';
  stars?: number | null;
  forks?: number | null;
  open_issues?: number | null;
  contributors?: number | null;
  total_commits?: number | null;
  total_repos?: number | null;
  discord_members?: number | null;
  telegram_members?: number | null;
  x_followers?: number | null;
}

// --- Top-level record ---

export interface ProjectResearchRecord {
  meta: ResearchMeta;
  identity?: ProjectIdentity | null;
  team?: TeamInfo | null;
  technical?: TechnicalInfo | null;
  tokenomics?: TokenomicsInfo | null;
  participation?: ParticipationInfo | null;
  usage_metrics?: UsageMetrics | null;
  community?: CommunityInfo | null;
  freedom_score?: FreedomScore | null;
  assessment?: Assessment | null;
  sources?: Source[] | null;
  metrics_history?: MetricsSnapshot[] | null;
}

// ============================================
// Utility: load a project research record
// ============================================

const PROJECTS_DIR = path.join(process.cwd(), 'src/data/projects');

/**
 * Load a project research record by project ID (content collection slug).
 * Searches for any JSON file ending in `_{projectId}.json` in the projects directory.
 * Returns null if no file exists or if the file fails to parse.
 */
export function getProjectResearch(projectId: string): ProjectResearchRecord | null {
  try {
    const files = fs.readdirSync(PROJECTS_DIR);
    const match = files.find(
      (f) => f.endsWith(`_${projectId}.json`) || f === `${projectId}.json`
    );

    if (!match) return null;

    const filePath = path.join(PROJECTS_DIR, match);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data: ProjectResearchRecord = JSON.parse(raw);

    // Minimal validation: must have meta.project_id
    if (!data.meta?.project_id) {
      console.warn(`[project-research] ${match}: missing meta.project_id, skipping`);
      return null;
    }

    return data;
  } catch (err) {
    if (err instanceof SyntaxError) {
      console.warn(`[project-research] Failed to parse JSON for "${projectId}":`, err.message);
    } else if ((err as NodeJS.ErrnoException).code !== 'ENOENT') {
      console.warn(`[project-research] Error loading research for "${projectId}":`, err);
    }
    return null;
  }
}

/**
 * Load all project research records from the projects directory.
 * Skips files starting with _ (templates) and files that fail to parse.
 */
export function getAllProjectResearch(): ProjectResearchRecord[] {
  try {
    const files = fs.readdirSync(PROJECTS_DIR);
    const records: ProjectResearchRecord[] = [];

    for (const file of files) {
      if (!file.endsWith('.json') || file.startsWith('_')) continue;

      try {
        const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf-8');
        const data: ProjectResearchRecord = JSON.parse(raw);
        if (data.meta?.project_id) {
          records.push(data);
        }
      } catch (err) {
        console.warn(`[project-research] Skipping ${file}:`, (err as Error).message);
      }
    }

    return records;
  } catch {
    return [];
  }
}
