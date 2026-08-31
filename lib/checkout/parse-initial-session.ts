import type { CheckoutSession, CheckoutTravelerForm } from "./types";

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

function emptyTravelerForms(
  adults: number,
  children: number,
  infants: number,
): CheckoutTravelerForm[] {
  const forms: CheckoutTravelerForm[] = [];
  let correlationId = 1;

  for (let i = 0; i < adults; i += 1) {
    forms.push({
      correlationId,
      type: "ADULT",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      nationality: "",
      countryOfResidence: "",
      dateOfBirth: "",
    });
    correlationId += 1;
  }

  for (let i = 0; i < children; i += 1) {
    forms.push({
      correlationId,
      type: "CHILD",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      nationality: "",
      countryOfResidence: "",
      dateOfBirth: "",
    });
    correlationId += 1;
  }

  for (let i = 0; i < infants; i += 1) {
    forms.push({
      correlationId,
      type: "INFANT",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      nationality: "",
      countryOfResidence: "",
      dateOfBirth: "",
    });
    correlationId += 1;
  }

  return forms;
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

  return {
    packageId,
    packageTitle: params.packageTitle ?? defaults.packageTitle,
    startDate,
    adults,
    children,
    infants,
    accommodationTier: params.accommodationTier ?? defaults.accommodationTier,
    vehicleTier: params.vehicleTier ?? defaults.vehicleTier,
    preDays: 0,
    postDays: 0,
    promoCode: "",
    selectedExtras: [],
    travelers: emptyTravelerForms(adults, children, infants),
    acceptTerms: false,
    payFullAmount: false,
    paymentMethod: "bank_transfer",
  };
}
