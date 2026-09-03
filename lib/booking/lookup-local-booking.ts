import { readLocalBooking } from "./booking-store";
import { findBookingIdByConfirmationCode } from "./booking-list";
import {
  isValidConfirmationCodeInput,
  normalizeConfirmationCode,
} from "./normalize-confirmation-code";
import { buildPublicBookingView, type PublicBookingView } from "./public-booking-view";
import type { CheckoutSession } from "@/lib/checkout/types";

function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

function isValidEmailInput(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function leadTravelerEmail(session: CheckoutSession): string {
  const lead =
    session.travelers.find((traveler) => traveler.type === "ADULT") ??
    session.travelers[0];
  return normalizeEmail(lead?.email ?? "");
}

export type LookupLocalBookingInput = {
  confirmationCode: string;
  email: string;
};

export type LookupLocalBookingResult =
  | { ok: true; booking: PublicBookingView }
  | { ok: false; error: string };

export async function lookupLocalBooking(
  input: LookupLocalBookingInput,
): Promise<LookupLocalBookingResult> {
  const code = input.confirmationCode?.trim() ?? "";
  const email = input.email?.trim() ?? "";

  if (!isValidConfirmationCodeInput(code)) {
    return { ok: false, error: "請輸入有效的訂單號（例如 DLT-123456）" };
  }

  if (!isValidEmailInput(email)) {
    return { ok: false, error: "請輸入有效的 Email" };
  }

  const bookingId = await findBookingIdByConfirmationCode(code);
  if (!bookingId) {
    return {
      ok: false,
      error: "找不到符合的訂單，請確認訂單號與 Email 是否正確",
    };
  }

  const record = await readLocalBooking(bookingId);
  if (!record) {
    return {
      ok: false,
      error: "找不到符合的訂單，請確認訂單號與 Email 是否正確",
    };
  }

  const normalizedCode = normalizeConfirmationCode(code);
  if (normalizeConfirmationCode(record.confirmationCode) !== normalizedCode) {
    return {
      ok: false,
      error: "找不到符合的訂單，請確認訂單號與 Email 是否正確",
    };
  }

  if (leadTravelerEmail(record.session) !== normalizeEmail(email)) {
    return {
      ok: false,
      error: "找不到符合的訂單，請確認訂單號與 Email 是否正確",
    };
  }

  const view = buildPublicBookingView(record);
  if (!view) {
    return { ok: false, error: "無法載入訂單資料，請聯絡客服" };
  }

  return { ok: true, booking: view };
}
