import { createRoomOccupanciesFromCounts } from "./room-occupancy";
import { emptyTravelerForms } from "./sync-travelers";
import type { CheckoutSession } from "./types";

export type CheckoutSearchParams = {
  packageId?: string;
  packageTitle?: string;
  startDate?: string;
  adults?: string;
  children?: string;
  infants?: string;
  accommodationTier?: string;
  vehicleTier?: string;
};

function parseCount(value: string | undefined, fallback: number): number {
  const n = Number.parseInt(value ?? "", 10);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

export function parseCheckoutSession(
  params: CheckoutSearchParams,
  defaults: {
    packageId: string;
    packageTitle: string;
    accommodationTier: string;
    vehicleTier: string;
    startDate: string;
  },
): CheckoutSession | null {
  const packageId = params.packageId ?? defaults.packageId;
  if (!packageId) return null;

  const adults = parseCount(params.adults, 2);
  const children = parseCount(params.children, 0);
  const infants = parseCount(params.infants, 0);
  const startDate = params.startDate ?? defaults.startDate;

  if (!startDate) return null;

  const roomOccupancies = createRoomOccupanciesFromCounts(
    adults,
    children,
    infants,
  );

  return {
    packageId,
    packageTitle: params.packageTitle ?? defaults.packageTitle,
    startDate,
    adults,
    children,
    infants,
    roomOccupancies,
    accommodationTier: params.accommodationTier ?? defaults.accommodationTier,
    vehicleTier: params.vehicleTier ?? defaults.vehicleTier,
    preDays: 0,
    postDays: 0,
    promoCode: "",
    selectedExtras: [],
    travelers: emptyTravelerForms(adults, children, infants),
    specialRequests: "",
    agentName: "",
    acceptTerms: false,
    payFullAmount: false,
    paymentMethod: "bank_transfer",
  };
}
