import { randomInt, randomUUID } from "node:crypto";
import type { CheckoutSession } from "@/lib/checkout/types";
import type { SiteLocale } from "@/lib/site-locale";
import type { PricingConfig, PricingResult } from "@/lib/trip-pricing/types";
import { writeLocalBooking } from "./booking-store";
import {
  buildBookingPricingFromResult,
  type CreateLocalBookingResult,
  type LocalBookingRecord,
} from "./types";

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
  locale: SiteLocale,
): Promise<CreateLocalBookingResult> {
  const bookingPricing = buildBookingPricingFromResult(
    pricing,
    session,
    config,
    locale,
  );

  const record: LocalBookingRecord = {
    id: randomUUID(),
    confirmationCode: generateConfirmationCode(),
    createdAt: new Date().toISOString(),
    status: "awaiting_supplier",
    packageId: session.packageId,
    session,
    pricing: bookingPricing,
    email: null,
    supplierStatus: "pending",
    corivoPackageTourId: config.corivo?.packageTourId,
  };

  await writeLocalBooking(record);

  return {
    bookingId: record.id,
    confirmationCode: record.confirmationCode,
    record,
  };
}
