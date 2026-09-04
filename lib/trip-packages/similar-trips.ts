import { localizeDeep } from "@/lib/i18n/localize";
import type { SiteLocale } from "@/lib/site-locale";
import { normalizeTripPackageForTaiwan } from "@/lib/trip-packages/localize-trip-spot";
import { getAllTripPackages } from "@/lib/trip-packages/registry";
import { resolvePackageTripKey } from "@/lib/trip-packages/resolve-package-trip-key";
import type { CatalogFromPrice } from "@/lib/trip-packages/catalog";
import type { SimilarTrip, TripPackage } from "@/lib/trip-packages/types";

export const SIMILAR_TRIP_DISPLAY_COUNT = 4;

export type SimilarTripCard = SimilarTrip & {
  subtitle?: string;
  heroImage?: string;
  tags?: string[];
  fromPrice?: CatalogFromPrice;
  comingSoon: boolean;
};

type TransportSeason = {
  transport: "group" | "self-drive";
  season: "summer" | "winter";
};

function parseTransportSeason(tripKey: string): TransportSeason {
  const [source, transport, season] = tripKey.split("/");
  if (source !== "iceland") {
    return { transport: "self-drive", season: "summer" };
  }

  return {
    transport: transport === "group" ? "group" : "self-drive",
    season: season === "winter" ? "winter" : "summer",
  };
}

function packageToSimilarTrip(pkg: TripPackage): SimilarTrip {
  return {
    tripKey: pkg.tripKey,
    title: pkg.title,
    tourCode: pkg.tourCode,
    durationLabel: `${pkg.duration.days} 天／${pkg.duration.nights} 夜`,
    description: pkg.intro.summary,
  };
}

/** 同一套餐可能有多個 URL 別名 tripKey，以 canonical key 去重 */
function canonicalTripKey(tripKey: string): string {
  return resolvePackageTripKey(tripKey);
}

function markTripKeySeen(seen: Set<string>, tripKey: string): void {
  seen.add(tripKey);
  seen.add(canonicalTripKey(tripKey));
}

function isTripKeySeen(seen: Set<string>, tripKey: string): boolean {
  return seen.has(tripKey) || seen.has(canonicalTripKey(tripKey));
}

function localizePackage(pkg: TripPackage, locale: SiteLocale): TripPackage {
  const twPackage = normalizeTripPackageForTaiwan(pkg);
  if (locale === "zh-TW") {
    return twPackage;
  }
  return localizeDeep(twPackage, locale);
}

/** 以套餐資料為主，同季同類型補足至指定張數 */
export function buildSimilarTripsForDisplay(
  current: { tripKey: string; days: number },
  configured: SimilarTrip[],
  locale: SiteLocale,
  limit = SIMILAR_TRIP_DISPLAY_COUNT,
): SimilarTrip[] {
  const seen = new Set<string>();
  markTripKeySeen(seen, current.tripKey);
  const result: SimilarTrip[] = [];

  for (const trip of configured) {
    if (isTripKeySeen(seen, trip.tripKey)) continue;
    markTripKeySeen(seen, trip.tripKey);
    result.push({
      ...trip,
      tripKey: canonicalTripKey(trip.tripKey),
    });
    if (result.length >= limit) {
      return result;
    }
  }

  const { transport, season } = parseTransportSeason(current.tripKey);
  const fillers = getAllTripPackages()
    .filter((pkg) => {
      if (isTripKeySeen(seen, pkg.tripKey)) return false;
      const meta = parseTransportSeason(pkg.tripKey);
      return meta.transport === transport && meta.season === season;
    })
    .sort((a, b) => {
      const diffA = Math.abs(a.duration.days - current.days);
      const diffB = Math.abs(b.duration.days - current.days);
      return diffA - diffB || a.duration.days - b.duration.days;
    });

  for (const pkg of fillers) {
    if (isTripKeySeen(seen, pkg.tripKey)) continue;
    markTripKeySeen(seen, pkg.tripKey);
    result.push(packageToSimilarTrip(localizePackage(pkg, locale)));
    if (result.length >= limit) {
      break;
    }
  }

  return result;
}
