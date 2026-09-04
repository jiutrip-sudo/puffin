import type { SiteLocale } from "@/lib/site-locale";
import type { CatalogFromPrice } from "@/lib/trip-packages/catalog";
import { formatDisplayMoney } from "@/lib/i18n/display-money";
import { localizeText } from "@/lib/i18n/localize";
import { getPricingConfig } from "./fetch";
import type { PricingSnapshotKeyInput } from "./pricing-snapshot-keys";
import {
  isSnapshotFresh,
  type PackagePricingSnapshot,
} from "./pricing-snapshot-types";
import { readPackagePricingSnapshot } from "./pricing-snapshot-store";
import { applyRetailMarkupAmount, applyRetailMarkupToResult } from "./retail-markup";
import type { PricingConfig, PricingResult } from "./types";
import { mapWithConcurrency } from "./map-with-concurrency";

export type { CatalogFromPrice };

function parsePricingSnapshotKey(key: string): PricingSnapshotKeyInput | null {
  const parts = key.split("|");
  if (parts.length < 6) return null;

  const [startDate, adultsRaw, childrenRaw, infantsRaw, accommodationTier, vehicleTier] =
    parts;

  const adults = Number(adultsRaw);
  const children = Number(childrenRaw);
  const infants = Number(infantsRaw);

  if (
    !startDate ||
    !accommodationTier ||
    Number.isNaN(adults) ||
    Number.isNaN(children) ||
    Number.isNaN(infants)
  ) {
    return null;
  }

  return {
    startDate,
    adults,
    children,
    infants,
    accommodationTier,
    vehicleTier,
  };
}

function resolveTierLabel(
  config: PricingConfig | undefined,
  tierId: string,
): string {
  return config?.tiers.find((tier) => tier.id === tierId)?.label ?? tierId;
}

function resolveVehicleLabel(
  config: PricingConfig | undefined,
  vehicleTierId: string,
): string | null {
  if (!vehicleTierId) return null;
  return (
    config?.vehicleTiers.find((tier) => tier.id === vehicleTierId)?.label ??
    vehicleTierId
  );
}

function formatAssumptions(
  input: PricingSnapshotKeyInput,
  config: PricingConfig | undefined,
  locale: SiteLocale,
): string {
  const roomLabel = resolveTierLabel(config, input.accommodationTier);
  const vehicleLabel = resolveVehicleLabel(config, input.vehicleTier);

  const detailParts = [localizeText("2 位成人", locale), roomLabel];
  if (vehicleLabel) detailParts.push(vehicleLabel);

  return `${detailParts.join("・")}；${localizeText("依出發日、房型與車型調整", locale)}`;
}

function computeRetailPerPersonDouble(
  supplierResult: PricingResult,
  partySize: number,
  depositRate: number,
): number {
  const supplierTotal = supplierResult.total;
  if (!Number.isFinite(supplierTotal) || supplierTotal <= 0) {
    return applyRetailMarkupToResult(supplierResult, depositRate).perPersonDouble;
  }

  const retailTotal = applyRetailMarkupAmount(supplierTotal);
  const travelers =
    partySize > 0 ? partySize : Math.max(0, supplierResult.travelerCount);

  if (travelers <= 0) {
    return applyRetailMarkupToResult(supplierResult, depositRate).perPersonDouble;
  }

  return Math.round(retailTotal / travelers);
}

export function findCatalogFromPrice(
  snapshot: PackagePricingSnapshot | null,
  config: PricingConfig | undefined,
  locale: SiteLocale,
): CatalogFromPrice | null {
  if (!snapshot) return null;

  const depositRate = config?.depositRate ?? 0.2;

  let best:
    | {
        retailPerPersonDouble: number;
        input: PricingSnapshotKeyInput;
        syncedAt: string;
      }
    | undefined;

  for (const [key, entry] of Object.entries(snapshot.prices)) {
    if (!isSnapshotFresh(entry.syncedAt)) continue;

    const input = parsePricingSnapshotKey(key);
    if (!input) continue;
    if (input.adults !== 2 || input.children !== 0 || input.infants !== 0) continue;

    const partySize = input.adults + input.children + input.infants;
    const retailPerPersonDouble = computeRetailPerPersonDouble(
      entry.result,
      partySize,
      depositRate,
    );
    if (!Number.isFinite(retailPerPersonDouble) || retailPerPersonDouble <= 0) continue;

    if (!best || retailPerPersonDouble < best.retailPerPersonDouble) {
      best = {
        retailPerPersonDouble,
        input,
        syncedAt: entry.syncedAt,
      };
    }
  }

  if (!best) return null;

  return {
    perPersonDoubleIsk: best.retailPerPersonDouble,
    displayLabel: formatDisplayMoney(best.retailPerPersonDouble, locale),
    assumptions: formatAssumptions(best.input, config, locale),
    syncedAt: best.syncedAt,
  };
}

export async function readCatalogFromPrice(
  packageId: string,
  locale: SiteLocale,
): Promise<CatalogFromPrice | null> {
  const snapshot = await readPackagePricingSnapshot(packageId);
  const config = getPricingConfig(packageId);
  return findCatalogFromPrice(snapshot, config, locale);
}

export async function attachCatalogFromPrices<
  T extends { tripKey: string; comingSoon: boolean },
>(
  items: T[],
  locale: SiteLocale,
  getPackageId: (tripKey: string) => string | undefined,
): Promise<Array<T & { fromPrice?: CatalogFromPrice }>> {
  return mapWithConcurrency(items, 8, async (item) => {
    if (item.comingSoon) return item;

    const packageId = getPackageId(item.tripKey);
    if (!packageId) return item;

    const fromPrice = await readCatalogFromPrice(packageId, locale);
    if (!fromPrice) return item;

    return { ...item, fromPrice };
  });
}
