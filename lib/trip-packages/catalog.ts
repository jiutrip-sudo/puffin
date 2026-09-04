import type { SiteLocale } from "@/lib/site-locale";
import { localizeDeep } from "@/lib/i18n/localize";
import { COMING_SOON_TRIPS } from "@/lib/trip-options";
import { getAllTripPackages } from "./registry";
import type { TripPackage } from "./types";

export type CatalogFromPrice = {
  /** 零售每人價（ISK，已含前台加價） */
  perPersonDoubleIsk: number;
  displayLabel: string;
  assumptions: string;
  syncedAt: string;
};

export type TripTransport = "self-drive" | "group";
export type TripSeason = "summer" | "winter";
export type TripRouteType = "ring" | "non-ring" | "south" | "other";
export type TripDaysRange = "4-6" | "7-9" | "10-14";

export type TripCatalogItem = {
  tripKey: string;
  title: string;
  subtitle: string;
  description: string;
  days: number;
  durationLabel: string;
  transport: TripTransport;
  season: TripSeason;
  routeType: TripRouteType;
  heroImage: string;
  comingSoon: boolean;
  tags: string[];
  fromPrice?: CatalogFromPrice;
};

function parseTransport(tripKey: string): TripTransport {
  return tripKey.includes("/group/") ? "group" : "self-drive";
}

function parseSeason(tripKey: string): TripSeason {
  return tripKey.includes("/winter/") ? "winter" : "summer";
}

function inferRouteType(pkg: TripPackage): TripRouteType {
  const { tripKey, title, subtitle } = pkg;
  const text = `${title} ${subtitle}`;

  if (tripKey.includes("non-ring")) {
    return "non-ring";
  }

  if (text.includes("環島") && !text.includes("非環島")) {
    return "ring";
  }

  if (
    text.includes("南岸") ||
    text.includes("黃金圈") ||
    text.includes("斯奈山") ||
    text.includes("西南")
  ) {
    return "south";
  }

  return "other";
}

function buildTags(pkg: TripPackage, transport: TripTransport, routeType: TripRouteType): string[] {
  const tags: string[] = [];

  tags.push(transport === "self-drive" ? "自駕" : "跟團");
  tags.push(pkg.season.label);

  if (routeType === "ring") tags.push("環島");
  if (routeType === "non-ring") tags.push("非環島");
  if (routeType === "south") tags.push("南岸專線");

  return tags;
}

export function toTripCatalogItem(pkg: TripPackage): TripCatalogItem {
  const transport = parseTransport(pkg.tripKey);
  const season = parseSeason(pkg.tripKey);
  const routeType = inferRouteType(pkg);

  return {
    tripKey: pkg.tripKey,
    title: pkg.title,
    subtitle: pkg.subtitle,
    description: pkg.intro.summary,
    days: pkg.duration.days,
    durationLabel: `${pkg.duration.days}日`,
    transport,
    season,
    routeType,
    heroImage: pkg.heroImage,
    comingSoon: COMING_SOON_TRIPS.has(pkg.tripKey),
    tags: buildTags(pkg, transport, routeType),
  };
}

export function getTripCatalogItems(locale: SiteLocale = "zh-TW"): TripCatalogItem[] {
  return getAllTripPackages()
    .map((pkg) => {
      const localized =
        locale === "zh-TW" ? pkg : localizeDeep(pkg, locale);
      return toTripCatalogItem(localized);
    })
    .sort((a, b) => a.days - b.days || a.title.localeCompare(b.title, "zh-Hant"));
}

export function matchesDaysRange(days: number, range: TripDaysRange): boolean {
  switch (range) {
    case "4-6":
      return days >= 4 && days <= 6;
    case "7-9":
      return days >= 7 && days <= 9;
    case "10-14":
      return days >= 10 && days <= 14;
    default:
      return true;
  }
}
