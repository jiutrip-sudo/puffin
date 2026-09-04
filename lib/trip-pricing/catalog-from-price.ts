import type { SiteLocale } from "@/lib/site-locale";
import type { CatalogFromPrice } from "@/lib/trip-packages/catalog";
import { formatDisplayMoney } from "@/lib/i18n/display-money";
import { localizeText } from "@/lib/i18n/localize";
import { getPricingConfig } from "./fetch";
import { findCatalogFromPriceRow } from "./pricing-snapshot-matrix";
import type { PackagePricingSnapshot } from "./pricing-snapshot-types";
import { readPackagePricingSnapshot } from "./pricing-snapshot-store";
import type { PricingConfig } from "./types";
import { mapWithConcurrency } from "./map-with-concurrency";

export type { CatalogFromPrice };

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
  row: {
    accommodationTier: string;
    vehicleTier: string;
  },
  config: PricingConfig | undefined,
  locale: SiteLocale,
): string {
  const roomLabel = resolveTierLabel(config, row.accommodationTier);
  const vehicleLabel = resolveVehicleLabel(config, row.vehicleTier);

  const detailParts = [localizeText("2 位成人", locale), roomLabel];
  if (vehicleLabel) detailParts.push(vehicleLabel);

  return `${detailParts.join("・")}；${localizeText("依出發日、房型與車型調整", locale)}`;
}

export function findCatalogFromPrice(
  snapshot: PackagePricingSnapshot | null,
  config: PricingConfig | undefined,
  locale: SiteLocale,
): CatalogFromPrice | null {
  if (!config) return null;

  const best = findCatalogFromPriceRow(snapshot, config);
  if (!best) return null;

  return {
    perPersonDoubleIsk: best.retailPerPerson,
    displayLabel: formatDisplayMoney(best.retailPerPerson, locale),
    assumptions: formatAssumptions(best, config, locale),
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
