import fs from 'node:fs';
import path from 'node:path';

export interface MarketData {
  price: number;
  marketCap: number;
  fdv: number;
  priceChange24h: number;
  priceChange7d: number;
  sparkline7d: number[];
}

export type MarketDataMap = Record<string, MarketData>;

const CACHE_PATH = path.join(process.cwd(), 'src/data/market-data.json');
const CACHE_MAX_AGE = 1000 * 60 * 30; // 30 minutes

function readCache(): { data: MarketDataMap; timestamp: number } | null {
  try {
    const raw = fs.readFileSync(CACHE_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeCache(data: MarketDataMap): void {
  fs.writeFileSync(CACHE_PATH, JSON.stringify({ data, timestamp: Date.now() }, null, 2));
}

export async function fetchMarketData(coingeckoIds: string[]): Promise<MarketDataMap> {
  const ids = coingeckoIds.filter(Boolean);
  if (ids.length === 0) return {};

  // Check cache freshness
  const cached = readCache();
  if (cached && Date.now() - cached.timestamp < CACHE_MAX_AGE) {
    return cached.data;
  }

  try {
    const idsParam = ids.join(',');
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${idsParam}&sparkline=true&price_change_percentage=24h,7d`;

    const res = await fetch(url, {
      headers: { 'Accept': 'application/json' },
    });

    if (!res.ok) {
      console.warn(`CoinGecko API returned ${res.status}, using cached data`);
      return cached?.data ?? {};
    }

    const json = await res.json();
    // Merge fresh data with cached data so missing IDs retain old values
    const result: MarketDataMap = { ...(cached?.data ?? {}) };

    for (const coin of json) {
      result[coin.id] = {
        price: coin.current_price ?? 0,
        marketCap: coin.market_cap ?? 0,
        fdv: coin.fully_diluted_valuation ?? 0,
        priceChange24h: coin.price_change_percentage_24h_in_currency ?? coin.price_change_percentage_24h ?? 0,
        priceChange7d: coin.price_change_percentage_7d_in_currency ?? 0,
        sparkline7d: coin.sparkline_in_7d?.price ?? [],
      };
    }

    writeCache(result);
    return result;
  } catch (err) {
    console.warn('CoinGecko fetch failed, using cached data:', err);
    return cached?.data ?? {};
  }
}

export function formatPrice(value: number): string {
  if (value === 0) return 'N/A';
  if (value < 0.01) return `$${value.toFixed(4)}`;
  if (value < 1) return `$${value.toFixed(3)}`;
  return `$${value.toFixed(2)}`;
}

export function formatMarketCap(value: number): string {
  if (value === 0) return 'N/A';
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
  return `$${(value / 1e3).toFixed(0)}K`;
}

export function formatPercent(value: number): string {
  if (value === 0) return '0.0%';
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(1)}%`;
}
