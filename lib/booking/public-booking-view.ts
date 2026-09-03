import {
  formatDisplayMoney,
  formatFrozenDisplayAmount,
  formatIskAdmin,
  localeFromDisplayCurrency,
} from "@/lib/i18n/display-money";
import { formatIsk } from "@/lib/trip-pricing/calculate";
import { getPricingConfig } from "@/lib/trip-pricing/fetch";
import { formatDisplayDate, computeTripEndDate } from "@/lib/trip-date-utils";
import {
  getManualPaymentInstructions,
  CHECKOUT_OFFICE_EMAIL,
} from "@/lib/checkout/manual-payment";
import type { CheckoutPaymentMethod } from "@/lib/checkout/types";
import type { LocalBookingRecord, LocalBookingStatus } from "./types";

const STATUS_LABELS: Record<LocalBookingStatus, string> = {
  awaiting_supplier: "待供應商確認",
  pending_payment: "待付款",
  payment_confirmed: "款項已確認",
  cancelled: "已取消",
};

const PAYMENT_METHOD_LABELS: Record<CheckoutPaymentMethod, string> = {
  bank_transfer: "銀行匯款",
  cash: "現金付款",
};

export type PublicBookingPaymentInfo = {
  title: string;
  amountLabel: string;
  steps: string[];
  notes: string[];
  bankAccount: {
    holderName: string;
    accountNumber: string;
    institutionLine: string;
  } | null;
};

export type PublicBookingView = {
  confirmationCode: string;
  status: LocalBookingStatus;
  statusLabel: string;
  packageTitle: string;
  startDate: string;
  endDate: string;
  tripDays: number;
  adults: number;
  children: number;
  infants: number;
  accommodationLabel: string;
  vehicleLabel: string;
  paymentMethodLabel: string;
  payFullAmount: boolean;
  totalAmount: string;
  corivoTotal: string | null;
  promoCode: string | null;
  promoDiscount: string | null;
  amountDue: string;
  amountDueLabel: string;
  leadTravelerName: string;
  createdAt: string;
  paymentInfo: PublicBookingPaymentInfo | null;
  supportEmail: string;
  awaitingSupplierMessage: string | null;
  fxDisclaimer: string | null;
};

function formatTravelerName(firstName: string, lastName: string): string {
  const parts = [firstName.trim(), lastName.trim()].filter(Boolean);
  return parts.length > 0 ? parts.join(" ") : "—";
}

function formatBookingMoney(
  record: LocalBookingRecord,
  iskAmount: number,
): string {
  const pricing = record.pricing;
  if (pricing.displayCurrency && pricing.fxRate) {
    const locale = localeFromDisplayCurrency(pricing.displayCurrency);
    return formatDisplayMoney(iskAmount, locale);
  }
  return formatIsk(iskAmount);
}

function formatBookingAmountDue(record: LocalBookingRecord): string {
  const pricing = record.pricing;
  if (pricing.displayAmountDue !== undefined && pricing.displayCurrency) {
    return formatFrozenDisplayAmount(
      pricing.displayAmountDue,
      pricing.displayCurrency,
    );
  }
  return formatIsk(pricing.amountDue);
}

export function buildPublicBookingView(record: LocalBookingRecord): PublicBookingView | null {
  const session = record.session;
  const config = getPricingConfig(session.packageId);
  const tripDays = config?.tripDurationDays ?? 1;
  const endDateIso = session.startDate
    ? computeTripEndDate(session.startDate, tripDays)
    : "";

  const accommodationLabel =
    config?.tiers.find((tier) => tier.id === session.accommodationTier)?.label ??
    session.accommodationTier;
  const vehicleTier = config?.vehicleTiers.find(
    (tier) => tier.id === session.vehicleTier,
  );
  const vehicleLabel =
    vehicleTier?.footnote?.trim() ||
    vehicleTier?.label.split("|")[0]?.trim() ||
    session.vehicleTier;

  const lead =
    session.travelers.find((traveler) => traveler.type === "ADULT") ??
    session.travelers[0];

  const amountDueLabel = session.payFullAmount ? "應付全額" : "應付訂金";
  const promoDiscount = record.pricing.promoDiscount ?? 0;
  const retailTotal =
    record.pricing.retailTotalIsk ??
    record.pricing.corivoTotal ??
    record.pricing.total;

  let paymentInfo: PublicBookingPaymentInfo | null = null;
  let awaitingSupplierMessage: string | null = null;

  if (record.status === "awaiting_supplier") {
    awaitingSupplierMessage =
      "我們已收到您的預訂申請，專員將於 3 個工作天內與您聯絡。供應商確認可成團後，將另行通知付款方式與金額。";
  } else if (record.status === "pending_payment") {
    const formatAmount = (amount: number) =>
      record.pricing.displayCurrency
        ? formatFrozenDisplayAmount(amount, record.pricing.displayCurrency)
        : formatIsk(amount);

    const instructions = getManualPaymentInstructions(
      session.paymentMethod,
      record.confirmationCode,
      record.pricing.displayAmountDue ?? record.pricing.amountDue,
      session.payFullAmount,
      formatAmount,
    );
    paymentInfo = {
      title: instructions.title,
      amountLabel: instructions.amountLabel,
      steps: instructions.steps,
      notes: instructions.notes,
      bankAccount: instructions.bankAccount
        ? {
            holderName: instructions.bankAccount.holderName,
            accountNumber: instructions.bankAccount.accountNumber,
            institutionLine: instructions.bankAccount.institutionLine,
          }
        : null,
    };
  }

  return {
    confirmationCode: record.confirmationCode,
    status: record.status,
    statusLabel: STATUS_LABELS[record.status],
    packageTitle: session.packageTitle,
    startDate: formatDisplayDate(session.startDate),
    endDate: formatDisplayDate(endDateIso),
    tripDays,
    adults: session.adults,
    children: session.children,
    infants: session.infants,
    accommodationLabel,
    vehicleLabel,
    paymentMethodLabel: PAYMENT_METHOD_LABELS[session.paymentMethod],
    payFullAmount: session.payFullAmount,
    totalAmount: formatBookingMoney(record, record.pricing.total),
    corivoTotal:
      promoDiscount > 0 && retailTotal > record.pricing.total
        ? formatBookingMoney(record, retailTotal)
        : null,
    promoCode: record.pricing.promoCode ?? null,
    promoDiscount:
      promoDiscount > 0
        ? formatBookingMoney(record, promoDiscount)
        : null,
    amountDue: formatBookingAmountDue(record),
    amountDueLabel,
    leadTravelerName: formatTravelerName(
      lead?.firstName ?? "",
      lead?.lastName ?? "",
    ),
    createdAt: record.createdAt,
    paymentInfo,
    supportEmail: CHECKOUT_OFFICE_EMAIL,
    awaitingSupplierMessage,
    fxDisclaimer: record.pricing.fxAsOf
      ? `參考匯率截至 ${record.pricing.fxAsOf}`
      : null,
  };
}
