import { localizeDeep } from "@/lib/i18n/localize";
import { normalizeContentForTaiwan } from "@/lib/i18n/tw-content-normalize";
import { parseFaqAnswerText } from "@/lib/trip-packages/parse-faq-answer";
import type { SiteLocale } from "@/lib/site-locale";
import type { TripAttraction, TripPackage } from "./types";

function tw(text: string): string {
  return normalizeContentForTaiwan(text);
}

function normalizeTripSpotFields(spot: TripAttraction): TripAttraction {
  return {
    ...spot,
    name: tw(spot.name),
    nameEn: spot.nameEn,
    region: spot.region ? tw(spot.region) : undefined,
    subtitle: spot.subtitle ? tw(spot.subtitle) : undefined,
    description: spot.description ? tw(spot.description) : undefined,
    paragraphs: spot.paragraphs?.map((paragraph) => tw(paragraph)),
    galleryImages: spot.galleryImages,
    imageUrl: spot.imageUrl,
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

/** 將行程套餐所有使用者可見繁中欄位統一為台灣用語 */
export function normalizeTripPackageForTaiwan(pkg: TripPackage): TripPackage {
  return {
    ...pkg,
    title: tw(pkg.title),
    subtitle: tw(pkg.subtitle),
    season: {
      ...pkg.season,
      label: tw(pkg.season.label),
      months: tw(pkg.season.months),
    },
    meta: {
      ...pkg.meta,
      departure: tw(pkg.meta.departure),
      transport: tw(pkg.meta.transport),
    },
    whyChooseUs: pkg.whyChooseUs.map((item) => ({
      ...item,
      title: tw(item.title),
      description: tw(item.description),
    })),
    intro: {
      summary: tw(pkg.intro.summary),
      full: tw(pkg.intro.full),
    },
    gallery: pkg.gallery.map((image) => ({
      ...image,
      alt: tw(image.alt),
      caption: image.caption ? tw(image.caption) : undefined,
    })),
    highlights: pkg.highlights.map(tw),
    attractions: pkg.attractions.map((spot) => localizeTripSpot(spot, "zh-TW")),
    routeStops: pkg.routeStops.map((stop) => ({
      label: tw(stop.label),
      detail: stop.detail ? tw(stop.detail) : undefined,
    })),
    routeOverviewSubtitle: pkg.routeOverviewSubtitle
      ? tw(pkg.routeOverviewSubtitle)
      : undefined,
    routeMap: pkg.routeMap
      ? {
          ...pkg.routeMap,
          waypoints: pkg.routeMap.waypoints.map((waypoint) => ({
            ...waypoint,
            label: tw(waypoint.label),
            detail: waypoint.detail ? tw(waypoint.detail) : undefined,
          })),
        }
      : undefined,
    itinerary: pkg.itinerary.map((day) => ({
      ...day,
      title: tw(day.title),
      accommodation: tw(day.accommodation),
      description: tw(day.description),
      highlights: day.highlights?.map((spot) => localizeTripSpot(spot, "zh-TW")),
      optionalActivities: day.optionalActivities?.map((spot) =>
        localizeTripSpot(spot, "zh-TW"),
      ),
    })),
    inclusions: {
      included: pkg.inclusions.included.map(tw),
      excluded: pkg.inclusions.excluded.map(tw),
    },
    faq: pkg.faq.map((group) => ({
      ...group,
      title: tw(group.title),
      items: group.items.map((item) => ({
        question: tw(item.question),
        answer: tw(parseFaqAnswerText(item.answer)),
      })),
    })),
    similarTrips: pkg.similarTrips.map((trip) => ({
      ...trip,
      title: tw(trip.title),
      durationLabel: tw(trip.durationLabel),
      description: tw(trip.description),
    })),
    backLabel: tw(pkg.backLabel),
  };
}

/** @deprecated 請用 {@link normalizeTripPackageForTaiwan} */
export const normalizeTripPackageModalContent = normalizeTripPackageForTaiwan;
