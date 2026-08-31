import type { CheckoutSession } from "@/lib/checkout/types";

/**
 * 本站自有預訂系統 — 訂單生命週期
 *
 * - `pending_payment`：已成立，待匯款／現金
 * - `payment_confirmed`：專員人工確認入帳
 * - `cancelled`：已取消
 *
 * 計價／可訂狀態仍可依 Corivo 快照或 API；**訂單建立不呼叫 Corivo checkout**。
 */
export type LocalBookingStatus =
  | "pending_payment"
  | "payment_confirmed"
  | "cancelled";

export type LocalBookingPricing = {
  total: number;
  deposit: number;
  amountDue: number;
  currency: string;
};

export type LocalBookingEmailStatus = {
  customerSent: boolean;
  staffSent: boolean;
  customerError?: string;
  staffError?: string;
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
};

export type CreateLocalBookingResult = {
  bookingId: string;
  confirmationCode: string;
  record: LocalBookingRecord;
};
