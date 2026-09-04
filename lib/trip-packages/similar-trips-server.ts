import "server-only";

import { COMING_SOON_TRIPS } from "@/lib/trip-options";
import type { CatalogFromPrice } from "@/lib/trip-packages/catalog";
import { toTripCatalogItem } from "@/lib/trip-packages/catalog";
import { localizeDeep } from "@/lib/i18n/localize";
import type { SiteLocale } from "@/lib/site-locale";
import { normalizeTripPackageForTaiwan } from "@/lib/trip-packages/localize-trip-spot";
import { getTripPackage } from "@/lib/trip-packages/registry";
import { resolvePackageTripKey } from "@/lib/trip-packages/resolve-package-trip-key";
import {
  buildSimilarTripsForDisplay,
  type SimilarTripCard,
  SIMILAR_TRIP_DISPLAY_COUNT,
} from "@/lib/trip-packages/similar-trips";
import type { SimilarTrip, TripPackage } from "@/lib/trip-packages/types";
import { attachCatalogFromPrices } from "@/lib/trip-pricing/catalog-from-price";

export type { SimilarTripCard };

function enrichTripCard(
  trip: SimilarTrip & { fromPrice?: CatalogFromPrice; comingSoon: boolean },
  locale: SiteLocale,
): SimilarTripCard {
  const pkg = getTripPackage(resolvePackageTripKey(trip.tripKey));
  if (!pkg) {
    return { ...trip, comingSoon: trip.comingSoon };
  }

  const twPackage = normalizeTripPackageForTaiwan(pkg);
  const localized =
    locale === "zh-TW" ? twPackage : localizeDeep(twPackage, locale);
  const catalog = toTripCatalogItem(localized);

  return {
    ...trip,
    subtitle: catalog.subtitle,
    heroImage: catalog.heroImage,
    tags: catalog.tags,
    fromPrice: trip.fromPrice,
    comingSoon: trip.comingSoon,
  };
}

export async function getSimilarTripCardsForDisplay(
  pkg: TripPackage,
  locale: SiteLocale,
): Promise<SimilarTripCard[]> {
  const trips = buildSimilarTripsForDisplay(
    { tripKey: pkg.tripKey, days: pkg.duration.days },
    pkg.similarTrips,
    locale,
    SIMILAR_TRIP_DISPLAY_COUNT,
  );

  const withFlags = trips.map((trip) => ({
    ...trip,
    comingSoon: COMING_SOON_TRIPS.has(trip.tripKey),
  }));

  const withPrices = await attachCatalogFromPrices(withFlags, locale, (tripKey) =>
    getTripPackage(resolvePackageTripKey(tripKey))?.id,
  );

  return withPrices.map((trip) => enrichTripCard(trip, locale));
}
