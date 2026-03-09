import fs from 'node:fs';
import path from 'node:path';

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

export interface OnchainMetrics {
  timestamp: number;
  date: string;
  venice?: VeniceMetrics;
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

export function getVeniceMetrics(): VeniceMetrics | null {
  const metrics = getOnchainMetrics();
  return metrics?.venice ?? null;
}
