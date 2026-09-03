import type { PricingPackageCategory } from "@/lib/admin/pricing-package-category";

export type PromoDiscountType = "percent" | "fixed_isk";

export type PromoDefinitionSource = "registry" | "dynamic";

export type PromoCodeDefinition = {
  /** 優惠碼（registry 內建議用大寫） */
  code: string;
  /** 顯示用名稱 */
  label: string;
  type: PromoDiscountType;
  /** percent: 1–100；fixed_isk: 折抵 ISK 金額 */
  value: number;
  active: boolean;
  /** 限用套餐分類；與 packageIds 擇一，皆空則全站 */
  categories?: PricingPackageCategory[];
  /** 限用套餐 packageId；空則全站（除非有 categories） */
  packageIds?: string[];
  /** 優惠碼生效日（含）YYYY-MM-DD */
  validFrom?: string;
  /** 優惠碼失效日（含）YYYY-MM-DD */
  validUntil?: string;
  /** 限出發日區間（含） */
  departureFrom?: string;
  departureUntil?: string;
  /** 成人＋兒童＋嬰兒最低人數 */
  minTravelers?: number;
  /** 全站使用次數上限（以成功建立訂單計） */
  maxUses?: number;
  /** 最低訂單金額（折前零售價，ISK） */
  minOrderTotal?: number;
  /** 同一 email 使用次數上限 */
  perCustomerLimit?: number;
};

export type PromoValidationContext = {
  packageId: string;
  startDate: string;
  adults: number;
  children: number;
  infants: number;
  /** Corivo 原價（折前 total）；驗證時實際為折前零售價 */
  corivoTotal: number;
  /** 旅客 email（有值時才檢查 perCustomerLimit） */
  customerEmail?: string;
};

export type PromoValidationResult = {
  valid: boolean;
  normalizedCode?: string;
  label?: string;
  discount?: number;
  error?: string;
};
