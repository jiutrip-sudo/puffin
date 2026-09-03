import { COMPANY_INFO } from "@/lib/company-info";
import {
  formatDisplayMoney,
  formatFrozenDisplayAmount,
  formatIskAdmin,
  getFxDisclaimer,
} from "@/lib/i18n/display-money";
import type { SiteLocale } from "@/lib/site-locale";
import { formatDisplayDate, computeTripEndDate } from "@/lib/trip-date-utils";
import type { PricingConfig } from "@/lib/trip-pricing/types";
import type { CheckoutSession } from "./types";
import {
  CHECKOUT_OFFICE_ADDRESS,
  CHECKOUT_OFFICE_EMAIL,
  CHECKOUT_OFFICE_PHONE,
  getManualPaymentInstructions,
} from "./manual-payment";
import type { CheckoutConfirmationEmailData } from "./confirmation-email-types";
import type { CheckoutPaymentMethod } from "./types";

const PAYMENT_METHOD_LABELS: Record<CheckoutPaymentMethod, string> = {
  bank_transfer: "銀行匯款",
  cash: "現金付款",
};

const TRAVELER_TYPE_LABELS: Record<string, string> = {
  ADULT: "成人",
  CHILD: "兒童",
  INFANT: "嬰兒",
};

function formatTravelerName(firstName: string, lastName: string): string {
  const parts = [firstName.trim(), lastName.trim()].filter(Boolean);
  return parts.length > 0 ? parts.join(" ") : "（未填寫）";
}

export function buildCheckoutConfirmationEmailData(
  session: CheckoutSession,
  config: PricingConfig,
  booking: {
    bookingId: string;
    confirmationCode: string | null;
  },
  pricing: {
    total: number;
    supplierTotal?: number;
    retailTotalIsk?: number;
    corivoTotal?: number;
    promoCode?: string | null;
    promoDiscount?: number;
    displayAmountDue?: number;
    displayTotal?: number;
  },
  options: {
    locale: SiteLocale;
    awaitingSupplier?: boolean;
  },
): CheckoutConfirmationEmailData {
  const locale = options.locale;
  const awaitingSupplier = options.awaitingSupplier ?? true;
  const tripDays = config.tripDurationDays ?? 1;
  const endDate = session.startDate
    ? computeTripEndDate(session.startDate, tripDays)
    : "";

  const accommodationLabel =
    config.tiers.find((tier) => tier.id === session.accommodationTier)?.label ??
    session.accommodationTier;
  const vehicleTier =
    config.vehicleTiers.find((tier) => tier.id === session.vehicleTier);
  const vehicleLabel =
    vehicleTier?.label.split("|")[0]?.trim() ?? session.vehicleTier;

  const depositRate = config.depositRate ?? 0.2;
  const totalAmount = pricing.total;
  const supplierTotal =
    pricing.supplierTotal ?? pricing.corivoTotal ?? totalAmount;
  const retailTotalIsk = pricing.retailTotalIsk ?? totalAmount;
  const amountDueIsk = session.payFullAmount
    ? totalAmount
    : Math.round(totalAmount * depositRate);
  const amountDueLabel = session.payFullAmount ? "應付全額" : "應付訂金";
  const promoDiscount = pricing.promoDiscount ?? 0;
  const promoCode = pricing.promoCode?.trim() || null;

  const lead =
    session.travelers.find((traveler) => traveler.type === "ADULT") ??
    session.travelers[0];

  const formatDisplay = (isk: number) => formatDisplayMoney(isk, locale);

  const paymentInstructions = awaitingSupplier
    ? null
    : getManualPaymentInstructions(
        session.paymentMethod,
        booking.confirmationCode,
        pricing.displayAmountDue ?? amountDueIsk,
        session.payFullAmount,
        (amount) =>
          pricing.displayAmountDue !== undefined
            ? formatFrozenDisplayAmount(
                amount,
                locale === "zh-CN" ? "CNY" : "TWD",
              )
            : formatDisplay(amountDueIsk),
      );

  return {
    packageTitle: session.packageTitle,
    startDate: formatDisplayDate(session.startDate),
    endDate: formatDisplayDate(endDate),
    tripDays,
    accommodationLabel,
    vehicleLabel,
    adults: session.adults,
    children: session.children,
    infants: session.infants,
    selectedExtrasCount: session.selectedExtras.length,
    confirmationCode: booking.confirmationCode,
    bookingId: booking.bookingId,
    paymentMethodLabel: PAYMENT_METHOD_LABELS[session.paymentMethod],
    payFullAmount: session.payFullAmount,
    totalAmountFormatted: formatDisplay(totalAmount),
    corivoTotalFormatted:
      promoDiscount > 0 && retailTotalIsk > totalAmount
        ? formatDisplay(retailTotalIsk)
        : null,
    supplierTotalFormatted: formatIskAdmin(supplierTotal),
    retailTotalFormatted: formatDisplay(retailTotalIsk),
    promoCode,
    promoDiscountFormatted:
      promoDiscount > 0 ? formatDisplay(promoDiscount) : null,
    amountDueFormatted: awaitingSupplier
      ? null
      : formatDisplay(amountDueIsk),
    amountDueLabel,
    leadTravelerName: formatTravelerName(
      lead?.firstName ?? "",
      lead?.lastName ?? "",
    ),
    leadTravelerEmail: lead?.email ?? "",
    leadTravelerPhone: lead?.phoneNumber ?? "",
    paymentInstructions,
    travelers: session.travelers.map((traveler) => ({
      name: formatTravelerName(traveler.firstName, traveler.lastName),
      typeLabel: TRAVELER_TYPE_LABELS[traveler.type] ?? traveler.type,
    })),
    awaitingSupplier,
    corivoPackageTourId: config.corivo?.packageTourId,
    fxDisclaimer: getFxDisclaimer(locale),
  };
}

export function getCheckoutOfficeContactBlock(): string {
  return [
    `${COMPANY_INFO.name}`,
    `地址：${CHECKOUT_OFFICE_ADDRESS}`,
    `電話：${CHECKOUT_OFFICE_PHONE}`,
    `信箱：${CHECKOUT_OFFICE_EMAIL}`,
  ].join("\n");
}
