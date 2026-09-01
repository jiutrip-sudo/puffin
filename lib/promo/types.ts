export type PromoDiscountType = "percent" | "fixed_isk";

export type PromoCodeDefinition = {
  /** 優惠碼（registry 內建議用大寫） */
  code: string;
  /** 顯示用名稱 */
  label: string;
  type: PromoDiscountType;
  /** percent: 1–100；fixed_isk: 折抵 ISK 金額 */
  value: number;
  active: boolean;
  /** 限用套餐 packageId；空則全站 */
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
};

export type PromoValidationContext = {
  packageId: string;
  startDate: string;
  adults: number;
  children: number;
  infants: number;
  /** Corivo 原價（折前 total） */
  corivoTotal: number;
};

export type PromoValidationResult = {
  valid: boolean;
  normalizedCode?: string;
  label?: string;
  discount?: number;
  error?: string;
};
