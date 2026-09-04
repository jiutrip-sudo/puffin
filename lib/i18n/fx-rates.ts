import type { DisplayCurrency } from "./display-money";

/**
 * 政策匯率（展示用）
 *
 * - 計價真相為 ISK（Corivo 供應商價 + 零售加價）；台幣／人民幣僅供前台參考。
 * - 參考來源：往來銀行即期／匯款「賣出」匯率，或央行牌價交叉計算（ISK/USD × USD/TWD）。
 * - 更新頻率：每季例行檢視；ISK 累積波動 > 5% 時臨時調整。日常不自動跟市。
 * - 訂單建立時會凍結當時 fxRate／fxAsOf（見 buildBookingPricingFromResult）。
 * - 調整前請執行：npm run suggest-fx
 * - 後台會比對市場參考匯率與 referenceTwdPerIsk；偏離 > rebalanceThreshold 時顯示警告
 */
export const FX_POLICY = {
  referenceSource:
    "往來銀行即期賣出（或央行 USD/TWD、USD/ISK 交叉匯率）",
  referenceDate: "2026-09-04",
  /** 更新前填入：銀行參考「1 ISK 可換得之 TWD」中間值（2026-09-04 市場交叉匯率） */
  referenceTwdPerIsk: 0.2619,
  /** 安全緩衝：政策係數 = referenceTwdPerIsk × (1 + safetyBufferRate) 後再向上取整 */
  safetyBufferRate: 0.03,
  reviewCadence: "quarterly",
  rebalanceThreshold: 0.05,
} as const;

/**
 * 1 ISK 可兌換之展示幣金額（政策匯率係數，手動核定）
 *
 * TWD 例：182,408 ISK × 0.27 ≈ 49,250 → 向上取整至 49,260（見 FX_DISPLAY_ROUND_TO）
 */
export const FX_ISK_TO_DISPLAY: Record<DisplayCurrency, number> = {
  TWD: 0.27,
  CNY: 0.055,
};

/** 匯率參考更新日（YYYY-MM-DD）；與 FX_POLICY.referenceDate 同步 */
export const FX_UPDATED_AT = "2026-09-04";

/** 展示幣別金額向上取整間距（略高估台幣標價，避免匯率波動吃掉毛利） */
export const FX_DISPLAY_ROUND_TO: Record<DisplayCurrency, number> = {
  TWD: 10,
  CNY: 1,
};

export function getFxRateForCurrency(currency: DisplayCurrency): number {
  return FX_ISK_TO_DISPLAY[currency];
}
