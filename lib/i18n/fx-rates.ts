import type { DisplayCurrency } from "./display-money";

/** 1 ISK 可兌換之展示幣金額（手動維護，約每 1–2 週更新） */
export const FX_ISK_TO_DISPLAY: Record<DisplayCurrency, number> = {
  TWD: 0.23,
  CNY: 0.052,
};

/** 匯率參考更新日（YYYY-MM-DD） */
export const FX_UPDATED_AT = "2026-03-01";

export function getFxRateForCurrency(currency: DisplayCurrency): number {
  return FX_ISK_TO_DISPLAY[currency];
}
