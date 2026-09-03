import type { CheckoutSession } from "@/lib/checkout/types";

/** 從 checkout session 取得主聯絡人 email */
export function getCheckoutLeadEmail(session: CheckoutSession): string | undefined {
  const lead =
    session.travelers.find((traveler) => traveler.type === "ADULT") ??
    session.travelers[0];
  const email = lead?.email?.trim();
  return email || undefined;
}
