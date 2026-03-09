import fs from 'node:fs';
import path from 'node:path';

export interface ProjectOnchainData {
  token_supply?: number;
  token_supply_arbitrum?: number;
  token_supply_ethereum?: number;
  staked?: number;
  staking_ratio?: number;
  diem_supply?: number;
  chain: string;
  contracts: Record<string, string>;
}

export interface OnchainMetrics {
  timestamp: number;
  date: string;
  [key: string]: ProjectOnchainData | number | string;
}

// Legacy alias
export interface VeniceMetrics {
  vvv_total_supply: number;
  vvv_staked: number;
  vvv_staking_ratio: number;
  diem_total_supply: number;
  contracts: {
    vvv_token: string;
    vvv_staking: string;
    diem_token: string;
    chain: string;
  };
}

const METRICS_PATH = path.join(process.cwd(), 'src/data/onchain-metrics.json');

export function getOnchainMetrics(): OnchainMetrics | null {
  try {
    const raw = fs.readFileSync(METRICS_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function getProjectMetrics(slug: string): ProjectOnchainData | null {
  const metrics = getOnchainMetrics();
  if (!metrics) return null;
  const data = metrics[slug];
  if (!data || typeof data !== 'object') return null;
  return data as ProjectOnchainData;
}

export function getVeniceMetrics(): VeniceMetrics | null {
  const data = getProjectMetrics('venice');
  if (!data) return null;
  return {
    vvv_total_supply: data.token_supply ?? 0,
    vvv_staked: data.staked ?? 0,
    vvv_staking_ratio: data.staking_ratio ?? 0,
    diem_total_supply: data.diem_supply ?? 0,
    contracts: {
      vvv_token: data.contracts?.token ?? '',
      vvv_staking: data.contracts?.staking ?? '',
      diem_token: data.contracts?.diem ?? '',
      chain: data.chain ?? 'base',
    },
  };
}
