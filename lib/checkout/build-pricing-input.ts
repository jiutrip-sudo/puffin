import { occupanciesToRoomSlots } from "@/lib/checkout/room-occupancy";
import { getCheckoutLeadEmail } from "@/lib/checkout/lead-email";
import type { CheckoutSession } from "@/lib/checkout/types";
import type { PricingInput } from "@/lib/trip-pricing/types";

/** 將 checkout session 轉為計價 API 輸入 */
export function buildCheckoutPricingInput(
  session: CheckoutSession,
  options?: { includeExtras?: boolean; promoCode?: string },
): PricingInput {
  const extraPackageItemIds = session.selectedExtras.map(
    (extra) => extra.packageItemId,
  );
  const includeExtras = options?.includeExtras ?? true;
  let promo: string | undefined;
  if (options?.promoCode !== undefined) {
    promo = options.promoCode.trim() || undefined;
  } else {
    promo = session.promoCode.trim() || undefined;
  }

  return {
    packageId: session.packageId,
    startDate: session.startDate,
    adults: session.adults,
    children: session.children,
    infants: session.infants,
    accommodationTier: session.accommodationTier,
    roomType: "double",
    vehicleTier: session.vehicleTier,
    roomSlots: occupanciesToRoomSlots(session.roomOccupancies),
    extraPackageItemIds:
      includeExtras && extraPackageItemIds.length > 0
        ? extraPackageItemIds
        : undefined,
    promoCode: promo,
    customerEmail: getCheckoutLeadEmail(session),
  };
}
