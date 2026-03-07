import { useState, useMemo } from 'react';

interface ProjectData {
  id: string;
  title: string;
  token: string;
  category: string;
  status: string;
  freedomScore: number;
  returnsScore: number | null;
  returnsScoreBreakdown: {
    tokenUtility?: number;
    valueAccrual?: number;
    supplyDynamics?: number;
    revenueSustainability?: number;
    liquidityAccess?: number;
  } | null;
  returnsScoreEvidence: {
    tokenUtility?: string;
    valueAccrual?: string;
    supplyDynamics?: string;
    revenueSustainability?: string;
    liquidityAccess?: string;
  } | null;
  launchType: string | null;
  chain: string | null;
  supplyType: string | null;
  maxSupply: string | null;
  verdict: string | null;
  oymHolds: boolean;
  market: {
    price: number;
    marketCap: number;
    fdv: number;
    priceChange24h: number;
    priceChange7d: number;
  } | null;
}

interface Props {
  projects: ProjectData[];
}

const MAX_COMPARE = 4;

function scoreColor(score: number): string {
  if (score >= 7) return '#10B981';
  if (score >= 4) return '#F59E0B';
  return '#EF4444';
}

function gradeFromScore(score: number): string {
  if (score >= 8) return 'A';
  if (score >= 7) return 'B';
  if (score >= 6) return 'C';
  if (score >= 5) return 'D';
  return 'F';
}

function quadrant(freedom: number, returns: number | null): string {
  if (!returns) return '--';
  const highFreedom = freedom >= 5.5;
  const highReturns = returns >= 5.5;
  if (highFreedom && highReturns) return 'A — Best of both';
  if (highFreedom && !highReturns) return 'B — Sovereignty play';
  if (!highFreedom && highReturns) return 'C — Centralised value';
  return 'D — Avoid';
}

function formatPrice(value: number): string {
  if (value === 0) return 'N/A';
  if (value < 0.01) return `$${value.toFixed(4)}`;
  if (value < 1) return `$${value.toFixed(3)}`;
  return `$${value.toFixed(2)}`;
}

function formatMarketCap(value: number): string {
  if (value === 0) return 'N/A';
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
  return `$${(value / 1e3).toFixed(0)}K`;
}

function formatPercent(value: number): string {
  if (value === 0) return '0.0%';
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(1)}%`;
}

export default function ProjectCompare({ projects }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = useMemo(() => {
    const cats = [...new Set(projects.map((p) => p.category))].sort();
    return ['all', ...cats];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.token.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [projects, search, categoryFilter]);

  const selectedProjects = useMemo(() => {
    return selected.map((id) => projects.find((p) => p.id === id)).filter(Boolean) as ProjectData[];
  }, [selected, projects]);

  function toggleProject(id: string) {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((s) => s !== id);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, id];
    });
  }

  function clearAll() {
    setSelected([]);
  }

  const returnsBreakdownLabels = [
    { key: 'tokenUtility', label: 'Token Utility', max: 20 },
    { key: 'valueAccrual', label: 'Value Accrual', max: 20 },
    { key: 'supplyDynamics', label: 'Supply Dynamics', max: 20 },
    { key: 'revenueSustainability', label: 'Revenue Sustainability', max: 25 },
    { key: 'liquidityAccess', label: 'Liquidity & Access', max: 15 },
  ] as const;

  return (
    <div>
      {/* Project Selector */}
      <div className="card-elevated p-5 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-accent)]"
          />
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  categoryFilter === cat
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {filteredProjects.map((p) => {
            const isSelected = selected.includes(p.id);
            const isDisabled = !isSelected && selected.length >= MAX_COMPARE;
            return (
              <button
                key={p.id}
                onClick={() => toggleProject(p.id)}
                disabled={isDisabled}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-[var(--color-accent)] text-white ring-2 ring-[var(--color-accent)] ring-offset-2 ring-offset-[var(--color-bg-secondary)]'
                    : isDisabled
                      ? 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-tertiary)] cursor-not-allowed opacity-50'
                      : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-primary)]'
                }`}
              >
                <img
                  src={`/images/logos/${p.id}.png`}
                  alt=""
                  className="w-4 h-4 rounded-full"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                {p.title}
                <span className="text-xs opacity-70">{p.token}</span>
              </button>
            );
          })}
        </div>

        {selected.length > 0 && (
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-[var(--color-border)]">
            <span className="text-sm text-[var(--color-text-secondary)]">
              {selected.length} of {MAX_COMPARE} selected
            </span>
            <button
              onClick={clearAll}
              className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Comparison Display */}
      {selectedProjects.length === 0 ? (
        <div className="card-elevated p-12 text-center">
          <p className="text-[var(--color-text-tertiary)] text-lg mb-2">Select up to {MAX_COMPARE} projects to compare</p>
          <p className="text-[var(--color-text-tertiary)] text-sm">Click project names above to add them to the comparison</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Overview */}
          <div className="card-elevated overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left p-4 text-[var(--color-text-tertiary)] font-medium w-40">Overview</th>
                  {selectedProjects.map((p) => (
                    <th key={p.id} className="p-4 text-center min-w-[160px]">
                      <div className="flex flex-col items-center gap-1">
                        <img
                          src={`/images/logos/${p.id}.png`}
                          alt=""
                          className="w-8 h-8 rounded-full ring-1 ring-[var(--color-border)]"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        <a href={`/projects/${p.id}/`} className="font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)]">
                          {p.title}
                        </a>
                        <span className="text-xs font-mono text-[var(--color-accent)]">{p.token}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <Row label="Category" projects={selectedProjects} render={(p) => (
                  <span className="capitalize">{p.category}</span>
                )} />
                <Row label="Chain" projects={selectedProjects} render={(p) => (
                  <span>{p.chain || '--'}</span>
                )} />
                <Row label="Launch type" projects={selectedProjects} render={(p) => (
                  <span className="capitalize">{p.launchType?.replace('-', ' ') || '--'}</span>
                )} />
                <Row label="Supply" projects={selectedProjects} render={(p) => (
                  <span className="capitalize">{p.supplyType || '--'}</span>
                )} />
                <Row label="OYM holds" projects={selectedProjects} render={(p) => (
                  <span style={{ color: p.oymHolds ? '#10B981' : 'var(--color-text-tertiary)' }}>
                    {p.oymHolds ? 'Yes' : 'No'}
                  </span>
                )} />
                <Row label="Quadrant" projects={selectedProjects} render={(p) => (
                  <span className="text-xs">{quadrant(p.freedomScore, p.returnsScore)}</span>
                )} />
              </tbody>
            </table>
          </div>

          {/* Scores */}
          <div className="card-elevated overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left p-4 text-[var(--color-text-tertiary)] font-medium w-40">Scores</th>
                  {selectedProjects.map((p) => (
                    <th key={p.id} className="p-4 text-center font-semibold text-[var(--color-text-primary)] min-w-[160px]">
                      {p.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <Row label="Freedom Score" projects={selectedProjects} render={(p) => (
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg font-bold" style={{ color: scoreColor(p.freedomScore) }}>
                      {(p.freedomScore * 10).toFixed(0)}
                    </span>
                    <span className="text-xs text-[var(--color-text-tertiary)]">
                      Grade {gradeFromScore(p.freedomScore)}
                    </span>
                    <ScoreBar score={p.freedomScore} max={10} />
                  </div>
                )} />
                <Row label="Returns Score" projects={selectedProjects} render={(p) => (
                  <div className="flex flex-col items-center gap-1">
                    {p.returnsScore ? (
                      <>
                        <span className="text-lg font-bold" style={{ color: scoreColor(p.returnsScore) }}>
                          {(p.returnsScore * 10).toFixed(0)}
                        </span>
                        <span className="text-xs text-[var(--color-text-tertiary)]">
                          Grade {gradeFromScore(p.returnsScore)}
                        </span>
                        <ScoreBar score={p.returnsScore} max={10} />
                      </>
                    ) : (
                      <span className="text-[var(--color-text-tertiary)]">--</span>
                    )}
                  </div>
                )} />
              </tbody>
            </table>
          </div>

          {/* Returns Breakdown */}
          <div className="card-elevated overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left p-4 text-[var(--color-text-tertiary)] font-medium w-40">Returns Breakdown</th>
                  {selectedProjects.map((p) => (
                    <th key={p.id} className="p-4 text-center font-semibold text-[var(--color-text-primary)] min-w-[160px]">
                      {p.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {returnsBreakdownLabels.map(({ key, label, max }) => (
                  <Row key={key} label={`${label} /${max}`} projects={selectedProjects} render={(p) => {
                    const value = p.returnsScoreBreakdown?.[key as keyof typeof p.returnsScoreBreakdown];
                    if (value == null) return <span className="text-[var(--color-text-tertiary)]">--</span>;
                    const pct = value / max;
                    const color = pct >= 0.75 ? '#10B981' : pct >= 0.5 ? '#F59E0B' : '#EF4444';
                    return (
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-bold" style={{ color }}>{value}</span>
                        <div className="w-full max-w-[100px] h-1.5 rounded-full bg-[var(--color-bg-primary)]">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${pct * 100}%`, backgroundColor: color }}
                          />
                        </div>
                      </div>
                    );
                  }} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Returns Evidence */}
          {selectedProjects.some((p) => p.returnsScoreEvidence) && (
            <div className="card-elevated overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left p-4 text-[var(--color-text-tertiary)] font-medium w-40">Evidence</th>
                    {selectedProjects.map((p) => (
                      <th key={p.id} className="p-4 text-center font-semibold text-[var(--color-text-primary)] min-w-[160px]">
                        {p.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {returnsBreakdownLabels.map(({ key, label }) => (
                    <Row key={key} label={label} projects={selectedProjects} render={(p) => {
                      const evidence = p.returnsScoreEvidence?.[key as keyof typeof p.returnsScoreEvidence];
                      return (
                        <span className="text-xs text-[var(--color-text-secondary)] leading-relaxed block text-left">
                          {evidence || '--'}
                        </span>
                      );
                    }} />
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Market Data */}
          <div className="card-elevated overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left p-4 text-[var(--color-text-tertiary)] font-medium w-40">Market</th>
                  {selectedProjects.map((p) => (
                    <th key={p.id} className="p-4 text-center font-semibold text-[var(--color-text-primary)] min-w-[160px]">
                      {p.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <Row label="Price" projects={selectedProjects} render={(p) => (
                  <span className="font-mono">{p.market ? formatPrice(p.market.price) : '--'}</span>
                )} />
                <Row label="Market Cap" projects={selectedProjects} render={(p) => (
                  <span className="font-mono">{p.market ? formatMarketCap(p.market.marketCap) : '--'}</span>
                )} />
                <Row label="FDV" projects={selectedProjects} render={(p) => (
                  <span className="font-mono">{p.market ? formatMarketCap(p.market.fdv) : '--'}</span>
                )} />
                <Row label="24h" projects={selectedProjects} render={(p) => {
                  if (!p.market) return <span>--</span>;
                  const c = p.market.priceChange24h >= 0 ? '#10B981' : '#EF4444';
                  return <span className="font-mono" style={{ color: c }}>{formatPercent(p.market.priceChange24h)}</span>;
                }} />
                <Row label="7d" projects={selectedProjects} render={(p) => {
                  if (!p.market) return <span>--</span>;
                  const c = p.market.priceChange7d >= 0 ? '#10B981' : '#EF4444';
                  return <span className="font-mono" style={{ color: c }}>{formatPercent(p.market.priceChange7d)}</span>;
                }} />
                <Row label="Mcap/FDV" projects={selectedProjects} render={(p) => {
                  if (!p.market || !p.market.fdv) return <span>--</span>;
                  const ratio = p.market.marketCap / p.market.fdv;
                  return <span className="font-mono">{(ratio * 100).toFixed(0)}%</span>;
                }} />
              </tbody>
            </table>
          </div>

          {/* Verdict */}
          <div className="card-elevated overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left p-4 text-[var(--color-text-tertiary)] font-medium w-40">OYM Verdict</th>
                  {selectedProjects.map((p) => (
                    <th key={p.id} className="p-4 text-center font-semibold text-[var(--color-text-primary)] min-w-[160px]">
                      {p.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <Row label="" projects={selectedProjects} render={(p) => (
                  <span className="text-xs text-[var(--color-text-secondary)] leading-relaxed block text-left">
                    {p.verdict || '--'}
                  </span>
                )} />
                <tr className="border-t border-[var(--color-border)]">
                  <td className="p-4" />
                  {selectedProjects.map((p) => (
                    <td key={p.id} className="p-4 text-center">
                      <a
                        href={`/projects/${p.id}/`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
                      >
                        Full review &rarr;
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ label, projects, render }: {
  label: string;
  projects: ProjectData[];
  render: (p: ProjectData) => React.ReactNode;
}) {
  return (
    <tr className="border-b border-[var(--color-border)] last:border-0">
      <td className="p-4 text-[var(--color-text-tertiary)] font-medium text-xs whitespace-nowrap">{label}</td>
      {projects.map((p) => (
        <td key={p.id} className="p-4 text-center">{render(p)}</td>
      ))}
    </tr>
  );
}

function ScoreBar({ score, max }: { score: number; max: number }) {
  const pct = (score / max) * 100;
  return (
    <div className="w-full max-w-[100px] h-2 rounded-full bg-[var(--color-bg-primary)]">
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${pct}%`, backgroundColor: scoreColor(score) }}
      />
    </div>
  );
}
