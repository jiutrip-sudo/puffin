import { localizeDeep } from "@/lib/i18n/localize";
import { normalizeContentForTaiwan } from "@/lib/i18n/tw-content-normalize";
import type { SiteLocale } from "@/lib/site-locale";
import type { TripAttraction, TripPackage } from "./types";

function normalizeTripSpotFields(spot: TripAttraction): TripAttraction {
  return {
    ...spot,
    name: normalizeContentForTaiwan(spot.name),
    region: spot.region ? normalizeContentForTaiwan(spot.region) : undefined,
    subtitle: spot.subtitle
      ? normalizeContentForTaiwan(spot.subtitle)
      : undefined,
    description: spot.description
      ? normalizeContentForTaiwan(spot.description)
      : undefined,
    paragraphs: spot.paragraphs?.map((paragraph) =>
      normalizeContentForTaiwan(paragraph),
    ),
  };
}

export function localizeTripSpot(
  spot: TripAttraction,
  locale: SiteLocale,
): TripAttraction {
  const twNormalized = normalizeTripSpotFields(spot);

  if (locale === "zh-TW") {
    return twNormalized;
  }

  return localizeDeep(twNormalized, locale);
}

export function normalizeTripPackageModalContent(pkg: TripPackage): TripPackage {
  return {
    ...pkg,
    attractions: pkg.attractions.map((spot) => localizeTripSpot(spot, "zh-TW")),
    itinerary: pkg.itinerary.map((day) => ({
      ...day,
      highlights: day.highlights?.map((spot) => localizeTripSpot(spot, "zh-TW")),
      optionalActivities: day.optionalActivities?.map((spot) =>
        localizeTripSpot(spot, "zh-TW"),
      ),
    })),
  };
}
