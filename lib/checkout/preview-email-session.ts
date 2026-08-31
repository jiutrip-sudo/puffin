import { getPricingConfig } from "@/lib/trip-pricing/fetch";
import { getAllTripPackages } from "@/lib/trip-packages/registry";
import { parseCheckoutSession } from "./parse-initial-session";
import type { CheckoutPaymentMethod, CheckoutSession } from "./types";

const DEFAULT_PACKAGE_ID = "iceland-self-drive-winter-4";

function pickDefinedOverrides(
  overrides: Partial<CheckoutSession>,
): Partial<CheckoutSession> {
  return Object.fromEntries(
    Object.entries(overrides).filter(([, value]) => value !== undefined),
  ) as Partial<CheckoutSession>;
}

export function buildCheckoutEmailPreviewSession(
  overrides: Partial<CheckoutSession> = {},
): CheckoutSession | null {
  const definedOverrides = pickDefinedOverrides(overrides);
  const packageId =
    definedOverrides.packageId ?? DEFAULT_PACKAGE_ID;

  const pricingConfig = getPricingConfig(packageId);
  const tripPackage = getAllTripPackages().find((pkg) => pkg.id === packageId);

  if (!pricingConfig) return null;

  const base =
    parseCheckoutSession(
      {
        packageId: definedOverrides.packageId,
        packageTitle: definedOverrides.packageTitle,
        startDate: definedOverrides.startDate,
        adults:
          definedOverrides.adults !== undefined
            ? String(definedOverrides.adults)
            : undefined,
        children:
          definedOverrides.children !== undefined
            ? String(definedOverrides.children)
            : undefined,
        infants:
          definedOverrides.infants !== undefined
            ? String(definedOverrides.infants)
            : undefined,
        accommodationTier: definedOverrides.accommodationTier,
        vehicleTier: definedOverrides.vehicleTier,
      },
      {
        packageId: pricingConfig.packageId,
        packageTitle: tripPackage?.title ?? "冰島冬季自駕 4 日",
        accommodationTier: pricingConfig.tiers[0]?.id ?? "comfort",
        vehicleTier: pricingConfig.vehicleTiers[0]?.id ?? "cfmn",
        startDate: pricingConfig.bookingDateRange?.min ?? "2026-11-01",
      },
    );

  if (!base) return null;

  const session: CheckoutSession = {
    ...base,
    ...definedOverrides,
    packageId: definedOverrides.packageId ?? base.packageId,
    travelers: definedOverrides.travelers ?? base.travelers,
    selectedExtras: definedOverrides.selectedExtras ?? base.selectedExtras,
  };

  if (!definedOverrides.travelers) {
    session.travelers = session.travelers.map((traveler, index) => {
      if (traveler.type === "ADULT" && index === 0) {
        return {
          ...traveler,
          firstName: "王",
          lastName: "大明",
          email: "preview@example.com",
          phoneNumber: "+886912345678",
          nationality: "TW",
          countryOfResidence: "TW",
          dateOfBirth: "1988-05-15",
        };
      }
      if (traveler.type === "ADULT" && index === 1) {
        return {
          ...traveler,
          firstName: "王",
          lastName: "小美",
          email: "preview@example.com",
          phoneNumber: "+886912345678",
          nationality: "TW",
          countryOfResidence: "TW",
          dateOfBirth: "1990-08-20",
        };
      }
      return traveler;
    });
  }

  return session;
}

export function parsePreviewPaymentMethod(
  value: string | null | undefined,
): CheckoutPaymentMethod {
  return value === "cash" ? "cash" : "bank_transfer";
}

export function parsePreviewPayFullAmount(
  value: string | null | undefined,
): boolean {
  return value === "1" || value === "true";
}
