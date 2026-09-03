import { lookupPromoDefinition } from "./lookup";
import { getPromoUseCount, getPromoUseCountByEmail } from "./promo-uses";
import { getPromoOverride } from "./overrides";
import { promoAppliesToPackage } from "./package-match";
import { resolvePromoDefinition } from "./resolve";
import type {
  PromoCodeDefinition,
  PromoValidationContext,
  PromoValidationResult,
} from "./types";

function isDateWithin(
  date: string,
  from?: string,
  until?: string,
): boolean {
  if (from && date < from) return false;
  if (until && date > until) return false;
  return true;
}

function computeDiscountAmount(
  promo: PromoCodeDefinition,
  corivoTotal: number,
): number {
  if (corivoTotal <= 0) return 0;

  if (promo.type === "percent") {
    const percent = Math.min(100, Math.max(0, promo.value));
    return Math.round(corivoTotal * (percent / 100));
  }

  return Math.min(corivoTotal, Math.max(0, Math.round(promo.value)));
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function validatePromoCode(
  code: string,
  context: PromoValidationContext,
): Promise<PromoValidationResult> {
  const normalized = code.trim().toUpperCase();
  if (!normalized) {
    return { valid: false, error: "請輸入優惠碼" };
  }

  const lookup = await lookupPromoDefinition(normalized);
  if (!lookup) {
    return { valid: false, error: "優惠碼無效或不符合使用條件" };
  }

  const override =
    lookup.source === "registry" ? await getPromoOverride(normalized) : null;
  const promo = resolvePromoDefinition(lookup.promo, override);

  if (!promo.active) {
    return { valid: false, error: "此優惠碼已停用" };
  }

  const today = new Date().toISOString().slice(0, 10);
  if (!isDateWithin(today, promo.validFrom, promo.validUntil)) {
    return { valid: false, error: "此優惠碼不在有效期限內" };
  }

  if (!promoAppliesToPackage(promo, context.packageId)) {
    return { valid: false, error: "此優惠碼不適用於所選套餐" };
  }

  if (
    context.startDate &&
    !isDateWithin(
      context.startDate,
      promo.departureFrom,
      promo.departureUntil,
    )
  ) {
    return { valid: false, error: "此優惠碼不適用於所選出發日" };
  }

  const travelerCount =
    Math.max(0, context.adults) +
    Math.max(0, context.children) +
    Math.max(0, context.infants);

  if (promo.minTravelers && travelerCount < promo.minTravelers) {
    return {
      valid: false,
      error: `此優惠碼至少需要 ${promo.minTravelers} 位旅客`,
    };
  }

  if (promo.minOrderTotal && context.corivoTotal < promo.minOrderTotal) {
    return {
      valid: false,
      error: `訂單金額須達 ISK ${promo.minOrderTotal.toLocaleString("en-US")} 才可使用`,
    };
  }

  if (promo.maxUses) {
    const used = await getPromoUseCount(normalized);
    if (used >= promo.maxUses) {
      return { valid: false, error: "此優惠碼已達使用上限" };
    }
  }

  if (promo.perCustomerLimit && context.customerEmail?.trim()) {
    const usedByCustomer = await getPromoUseCountByEmail(
      normalized,
      normalizeEmail(context.customerEmail),
    );
    if (usedByCustomer >= promo.perCustomerLimit) {
      return { valid: false, error: "此優惠碼已達個人使用上限" };
    }
  }

  const discount = computeDiscountAmount(promo, context.corivoTotal);
  if (discount <= 0) {
    return { valid: false, error: "優惠碼無法套用於目前金額" };
  }

  return {
    valid: true,
    normalizedCode: normalized,
    label: promo.label,
    discount,
  };
}
