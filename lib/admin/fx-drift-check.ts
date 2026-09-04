import {
  FX_ISK_TO_DISPLAY,
  FX_POLICY,
  FX_UPDATED_AT,
} from "@/lib/i18n/fx-rates";

const MARKET_FX_API_URL =
  process.env.FX_MARKET_API_URL?.trim() ||
  "https://open.er-api.com/v6/latest/USD";

const MARKET_FX_CACHE_MS = 60 * 60 * 1000;

type MarketFxCache = {
  twdPerIsk: number;
  asOf: string;
  source: string;
  fetchedAt: number;
};

let marketFxCache: MarketFxCache | null = null;

export type FxDriftStatus = {
  exceedsThreshold: boolean;
  policyReferenceTwdPerIsk: number;
  policyDisplayTwdPerIsk: number;
  policyReferenceDate: string;
  policyUpdatedAt: string;
  thresholdPercent: number;
  marketTwdPerIsk: number | null;
  marketAsOf: string | null;
  marketSource: string | null;
  driftPercent: number | null;
  driftDirection: "higher" | "lower" | null;
  message: string;
  fetchError?: string;
};

async function fetchMarketTwdPerIsk(): Promise<MarketFxCache> {
  if (
    marketFxCache &&
    Date.now() - marketFxCache.fetchedAt < MARKET_FX_CACHE_MS
  ) {
    return marketFxCache;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);

  try {
    const response = await fetch(MARKET_FX_API_URL, {
      signal: controller.signal,
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`市場匯率 API 回應 ${response.status}`);
    }

    const payload = (await response.json()) as {
      result?: string;
      time_last_update_utc?: string;
      rates?: Record<string, number>;
    };

    if (payload.result && payload.result !== "success") {
      throw new Error("市場匯率 API 回傳失敗");
    }

    const twdPerUsd = payload.rates?.TWD;
    const iskPerUsd = payload.rates?.ISK;

    if (!twdPerUsd || !iskPerUsd) {
      throw new Error("市場匯率 API 缺少 TWD 或 ISK");
    }

    const twdPerIsk = twdPerUsd / iskPerUsd;
    if (!Number.isFinite(twdPerIsk) || twdPerIsk <= 0) {
      throw new Error("無法計算 ISK/TWD 交叉匯率");
    }

    marketFxCache = {
      twdPerIsk,
      asOf: payload.time_last_update_utc ?? new Date().toISOString(),
      source: "USD 交叉匯率（open.er-api.com）",
      fetchedAt: Date.now(),
    };

    return marketFxCache;
  } finally {
    clearTimeout(timeout);
  }
}

function formatPercent(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

export async function getFxDriftStatus(): Promise<FxDriftStatus> {
  const policyReferenceTwdPerIsk = FX_POLICY.referenceTwdPerIsk;
  const thresholdPercent = FX_POLICY.rebalanceThreshold;

  const base: FxDriftStatus = {
    exceedsThreshold: false,
    policyReferenceTwdPerIsk,
    policyDisplayTwdPerIsk: FX_ISK_TO_DISPLAY.TWD,
    policyReferenceDate: FX_POLICY.referenceDate,
    policyUpdatedAt: FX_UPDATED_AT,
    thresholdPercent,
    marketTwdPerIsk: null,
    marketAsOf: null,
    marketSource: null,
    driftPercent: null,
    driftDirection: null,
    message: "ISK/TWD 匯率偏離在可接受範圍內。",
  };

  try {
    const market = await fetchMarketTwdPerIsk();
    const driftRatio =
      (market.twdPerIsk - policyReferenceTwdPerIsk) / policyReferenceTwdPerIsk;
    const driftPercent = Math.abs(driftRatio);
    const exceedsThreshold = driftPercent > thresholdPercent;

    const driftDirection =
      driftRatio > 0.0001 ? "higher" : driftRatio < -0.0001 ? "lower" : null;

    let message = base.message;
    if (exceedsThreshold) {
      const directionLabel =
        driftDirection === "higher"
          ? "高於"
          : driftDirection === "lower"
            ? "低於"
            : "偏離";
      message =
        `市場參考匯率（1 ISK → ${market.twdPerIsk.toFixed(4)} TWD）${directionLabel}政策參考值 ${policyReferenceTwdPerIsk.toFixed(4)}（${FX_POLICY.referenceDate}）` +
        ` ${formatPercent(driftPercent)}，已超過 ${formatPercent(thresholdPercent)} 門檻。` +
        ` 請查銀行／央行牌價後執行 npm run suggest-fx，並更新 lib/i18n/fx-rates.ts。`;
    }

    return {
      ...base,
      exceedsThreshold,
      marketTwdPerIsk: market.twdPerIsk,
      marketAsOf: market.asOf,
      marketSource: market.source,
      driftPercent,
      driftDirection,
      message,
    };
  } catch (error) {
    const fetchError =
      error instanceof Error ? error.message : "無法取得市場匯率";

    return {
      ...base,
      message: `暫無法自動檢查 ISK 匯率偏離（${fetchError}）。請手動比對銀行牌價與政策參考值。`,
      fetchError,
    };
  }
}

/** 測試用：清除市場匯率快取 */
export function clearFxMarketCache(): void {
  marketFxCache = null;
}
