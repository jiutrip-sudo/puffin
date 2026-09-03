import type { CheckoutSession } from "@/lib/checkout/types";
import {
  buildDisplayPricingSnapshot,
  convertIskToDisplay,
} from "@/lib/i18n/display-money";
import type { SiteLocale } from "@/lib/site-locale";
import { getRetailMarkupRate } from "@/lib/trip-pricing/retail-markup";
import type { PricingConfig, PricingResult } from "@/lib/trip-pricing/types";

/**
 * 本站自有預訂系統 — 訂單生命週期
 *
 * - `awaiting_supplier`：已收到申請，待向供應商確認
 * - `pending_payment`：供應商已確認，待匯款／現金
 * - `payment_confirmed`：專員人工確認入帳
 * - `cancelled`：已取消
 *
 * 計價／可訂狀態仍可依 Corivo 快照或 API；**訂單建立不呼叫 Corivo checkout**。
 */
export type LocalBookingStatus =
  | "awaiting_supplier"
  | "pending_payment"
  | "payment_confirmed"
  | "cancelled";

export type SupplierStatus = "pending" | "confirmed" | "rejected";

export type LocalBookingPricing = {
  /** 供應商／Corivo 原價（ISK，加價前） */
  supplierTotal: number;
  /** 零售價（ISK，加價後、優惠前） */
  retailTotalIsk: number;
  /** 折後總額（ISK，系統底價） */
  total: number;
  /** @deprecated 同 supplierTotal */
  corivoTotal?: number;
  promoCode?: string | null;
  promoDiscount?: number;
  deposit: number;
  /** 應付金額（ISK 底價） */
  amountDue: number;
  markupRate: number;
  currency: "ISK";
  displayCurrency: "TWD" | "CNY";
  displayTotal: number;
  displayAmountDue: number;
  displayDeposit: number;
  fxRate: number;
  fxAsOf: string;
};

export type LocalBookingEmailStatus = {
  customerSent: boolean;
  staffSent: boolean;
  customerError?: string;
  staffError?: string;
  paymentInstructionsSent?: boolean;
};

export type LocalBookingRecord = {
  id: string;
  confirmationCode: string;
  createdAt: string;
  status: LocalBookingStatus;
  packageId: string;
  session: CheckoutSession;
  pricing: LocalBookingPricing;
  email: LocalBookingEmailStatus | null;
  supplierStatus?: SupplierStatus;
  supplierConfirmedAt?: string;
  supplierNote?: string;
  corivoPackageTourId?: number;
};

export type CreateLocalBookingResult = {
  bookingId: string;
  confirmationCode: string;
  record: LocalBookingRecord;
};

export function buildBookingPricingFromResult(
  pricing: PricingResult,
  session: CheckoutSession,
  config: PricingConfig,
  locale: SiteLocale,
): LocalBookingPricing {
  const depositRate = config.depositRate ?? 0.2;
  const supplierTotal =
    pricing.supplierTotal ?? pricing.corivoTotal ?? pricing.total;
  const retailTotalIsk = pricing.retailTotal ?? pricing.total;
  const total = pricing.total;
  const amountDueIsk = session.payFullAmount
    ? total
    : Math.round(total * depositRate);

  const display = buildDisplayPricingSnapshot(
    total,
    pricing.deposit,
    pricing.perPersonDouble,
    locale,
  );

  const displayAmountDue = session.payFullAmount
    ? display.displayTotal
    : convertIskToDisplay(amountDueIsk, locale);

  const promoCode = session.promoCode.trim() || null;
  const promoDiscount = pricing.promoDiscount ?? 0;

  return {
    supplierTotal,
    retailTotalIsk,
    total,
    corivoTotal: supplierTotal,
    promoCode,
    promoDiscount: promoDiscount > 0 ? promoDiscount : undefined,
    deposit: pricing.deposit,
    amountDue: amountDueIsk,
    markupRate: getRetailMarkupRate(),
    currency: "ISK",
    displayCurrency: display.displayCurrency,
    displayTotal: display.displayTotal,
    displayAmountDue,
    displayDeposit: display.displayDeposit,
    fxRate: display.fxRate,
    fxAsOf: display.fxAsOf,
  };
}
