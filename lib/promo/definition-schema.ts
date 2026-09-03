import {
  PRICING_PACKAGE_CATEGORY_ORDER,
  type PricingPackageCategory,
} from "@/lib/admin/pricing-package-category";
import { findPromoDefinition, normalizePromoCode } from "./registry";
import type { PromoCodeDefinition, PromoDiscountType } from "./types";
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export type PromoDefinitionInput = {
  code?: string;
  label?: string;
  type?: PromoDiscountType;
  value?: number;
  active?: boolean;
  categories?: PricingPackageCategory[];
  packageIds?: string[];
  validFrom?: string | null;
  validUntil?: string | null;
  departureFrom?: string | null;
  departureUntil?: string | null;
  minTravelers?: number | null;
  maxUses?: number | null;
  minOrderTotal?: number | null;
  perCustomerLimit?: number | null;
};

function isValidDate(value: string): boolean {
  return DATE_PATTERN.test(value);
}

function parseOptionalDate(
  value: string | null | undefined,
  field: string,
): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (!isValidDate(value)) {
    throw new Error(`${field} 須為 YYYY-MM-DD`);
  }
  return value;
}

function parseOptionalPositiveInt(
  value: number | null | undefined,
  field: string,
): number | undefined {
  if (value === undefined || value === null) return undefined;
  if (!Number.isInteger(value) || value < 1) {
    throw new Error(`${field} 須為正整數`);
  }
  return value;
}

const PROMO_CODE_PATTERN = /^[A-Z0-9][A-Z0-9_-]{2,31}$/;

function parseCategories(
  categories: PricingPackageCategory[] | undefined,
): PricingPackageCategory[] | undefined {
  if (!categories?.length) return undefined;

  const unique = [...new Set(categories)];
  for (const category of unique) {
    if (!PRICING_PACKAGE_CATEGORY_ORDER.includes(category)) {
      throw new Error("套餐分類無效");
    }
  }

  return unique;
}

export function parsePromoDefinitionInput(
  input: PromoDefinitionInput,
  options?: { requireCode?: boolean; existingCode?: string },
): PromoCodeDefinition {
  const requireCode = options?.requireCode ?? false;
  const code = input.code?.trim().toUpperCase() ?? options?.existingCode ?? "";

  if (!code) {
    throw new Error("請輸入優惠碼");
  }

  if (!PROMO_CODE_PATTERN.test(code)) {
    throw new Error("優惠碼須為 3–32 字元，僅限英數、底線、連字號");
  }

  if (requireCode && findPromoDefinition(code)) {
    throw new Error("此優惠碼與 Git 定義衝突");
  }

  const label = input.label?.trim();
  if (!label) {
    throw new Error("請輸入顯示名稱");
  }

  if (input.type !== "percent" && input.type !== "fixed_isk") {
    throw new Error("折扣類型無效");
  }

  if (
    typeof input.value !== "number" ||
    !Number.isFinite(input.value) ||
    input.value <= 0
  ) {
    throw new Error("折扣數值須大於 0");
  }

  if (input.type === "percent" && (input.value < 1 || input.value > 100)) {
    throw new Error("百分比折扣須介於 1–100");
  }

  if (input.type === "fixed_isk" && !Number.isInteger(input.value)) {
    throw new Error("固定折抵須為整數 ISK");
  }

  const categories = parseCategories(input.categories);
  const packageIds = input.packageIds?.map((id) => id.trim()).filter(Boolean);

  if (categories?.length && packageIds?.length) {
    throw new Error("套餐分類與 packageIds 不可同時設定");
  }

  const validFrom = parseOptionalDate(input.validFrom, "validFrom");
  const validUntil = parseOptionalDate(input.validUntil, "validUntil");
  const departureFrom = parseOptionalDate(input.departureFrom, "departureFrom");
  const departureUntil = parseOptionalDate(
    input.departureUntil,
    "departureUntil",
  );

  if (validFrom && validUntil && validFrom > validUntil) {
    throw new Error("優惠碼生效日不可晚於失效日");
  }

  if (departureFrom && departureUntil && departureFrom > departureUntil) {
    throw new Error("出發日起日不可晚於迄日");
  }

  return {
    code: normalizePromoCode(code),
    label,
    type: input.type,
    value: input.type === "percent" ? input.value : Math.round(input.value),
    active: input.active ?? true,
    categories,
    packageIds: packageIds?.length ? packageIds : undefined,
    validFrom,
    validUntil,
    departureFrom,
    departureUntil,
    minTravelers: parseOptionalPositiveInt(input.minTravelers, "minTravelers"),
    maxUses: parseOptionalPositiveInt(input.maxUses, "maxUses"),
    minOrderTotal: parseOptionalPositiveInt(
      input.minOrderTotal,
      "minOrderTotal",
    ),
    perCustomerLimit: parseOptionalPositiveInt(
      input.perCustomerLimit,
      "perCustomerLimit",
    ),
  };
}
