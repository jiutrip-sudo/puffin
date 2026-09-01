import type { PromoCodeDefinition } from "./types";

/**
 * 本站優惠碼表（Git 管理，改碼後 deploy 生效）。
 * 不在 Corivo 後台建立優惠碼。
 */
export const PROMO_CODES: PromoCodeDefinition[] = [
  {
    code: "WINTER10",
    label: "冬季自駕 10% 優惠",
    type: "percent",
    value: 10,
    active: true,
    packageIds: ["iceland-self-drive-winter-4"],
    validFrom: "2026-01-01",
    validUntil: "2026-04-30",
    departureFrom: "2026-01-01",
    departureUntil: "2026-03-31",
    minTravelers: 1,
    maxUses: 100,
  },
  {
    code: "VIP50000",
    label: "合作媒體固定折抵",
    type: "fixed_isk",
    value: 50000,
    active: true,
    packageIds: ["iceland-self-drive-winter-4"],
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    maxUses: 20,
  },
];

export function findPromoDefinition(code: string): PromoCodeDefinition | undefined {
  const normalized = normalizePromoCode(code);
  return PROMO_CODES.find(
    (entry) => normalizePromoCode(entry.code) === normalized,
  );
}

export function normalizePromoCode(code: string): string {
  return code.trim().toUpperCase();
}
