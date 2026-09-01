import { randomInt, randomUUID } from "node:crypto";
import type { CheckoutSession } from "@/lib/checkout/types";
import type { PricingConfig, PricingResult } from "@/lib/trip-pricing/types";
import { writeLocalBooking } from "./booking-store";
import type { CreateLocalBookingResult, LocalBookingRecord } from "./types";

const DEFAULT_CODE_PREFIX = "DLT";

function generateConfirmationCode(): string {
  const prefix = process.env.BOOKING_CODE_PREFIX?.trim() || DEFAULT_CODE_PREFIX;
  const suffix = String(randomInt(100000, 1000000));
  return `${prefix}-${suffix}`;
}

/**
 * 建立本站訂單並寫入 KV／本機 `.data/bookings/`。
 * 不呼叫 Corivo `checkout` mutation。
 */
export async function createLocalBooking(
  session: CheckoutSession,
  pricing: PricingResult,
  config: PricingConfig,
): Promise<CreateLocalBookingResult> {
  const depositRate = config.depositRate ?? 0.2;
  const amountDue = session.payFullAmount
    ? pricing.total
    : Math.round(pricing.total * depositRate);

  const promoCode = session.promoCode.trim() || null;
  const promoDiscount = pricing.promoDiscount ?? 0;
  const corivoTotal = pricing.corivoTotal ?? pricing.total;

  const record: LocalBookingRecord = {
    id: randomUUID(),
    confirmationCode: generateConfirmationCode(),
    createdAt: new Date().toISOString(),
    status: "pending_payment",
    packageId: session.packageId,
    session,
    pricing: {
      corivoTotal,
      total: pricing.total,
      promoCode,
      promoDiscount: promoDiscount > 0 ? promoDiscount : undefined,
      deposit: pricing.deposit,
      amountDue,
      currency: pricing.currency,
    },
    email: null,
  };

  await writeLocalBooking(record);

  return {
    bookingId: record.id,
    confirmationCode: record.confirmationCode,
    record,
  };
}
