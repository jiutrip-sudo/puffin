import spotLegacyMap from "@/lib/media/legacy-map.json";
import tripLegacyMap from "@/lib/media/trip-legacy-map.json";
import pricingLegacyMap from "@/lib/media/pricing-legacy-map.json";
import guidesLegacyMap from "@/lib/media/guides-legacy-map.json";
import manifest from "@/lib/media/manifest.json";
import { mediaBaseUrl } from "@/lib/media/url";
import type { TripPackage } from "@/lib/trip-packages/types";

const SLM_BASE =
  "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good";

type SpotLegacyEntry = {
  slug: string;
  variant: string;
  nameEn: string;
};

type TripLegacyEntry = {
  assetId: string;
  nameEn: string;
  legacyFile: string;
};

type PricingLegacyEntry = {
  assetId: string;
  nameEn: string;
  legacyFile: string;
};

type GuidesLegacyEntry = {
  assetId: string;
  nameEn: string;
  legacyFile: string;
};

const manifestKeys = new Set<string>(
  Array.isArray(manifest.keys) ? manifest.keys : [],
);

export function legacyFileFromSenlinmaoUrl(url: string): string | undefined {
  const match = url.match(/senlinmao\.com\/images\/[^/]+\/([^/?#]+)/);
  return match?.[1];
}

function resolveLegacyFile(legacyFile: string): string | undefined {
  const base = mediaBaseUrl();
  if (!base) return undefined;

  const spotEntry = (spotLegacyMap as Record<string, SpotLegacyEntry>)[
    legacyFile
  ];
  if (spotEntry) {
    const key = `spots/${spotEntry.slug}/${spotEntry.variant}.webp`;
    if (manifestKeys.has(key)) {
      return `${base}/${key}`;
    }
  }

  const tripEntry = (tripLegacyMap as Record<string, TripLegacyEntry>)[
    legacyFile
  ];
  if (tripEntry) {
    const key = `trips/assets/${tripEntry.assetId}.webp`;
    if (manifestKeys.has(key)) {
      return `${base}/${key}`;
    }
  }

  const pricingEntry = (pricingLegacyMap as Record<string, PricingLegacyEntry>)[
    legacyFile
  ];
  if (pricingEntry) {
    const key = `pricing/assets/${pricingEntry.assetId}.webp`;
    if (manifestKeys.has(key)) {
      return `${base}/${key}`;
    }
  }

  const guidesEntry = (guidesLegacyMap as Record<string, GuidesLegacyEntry>)[
    legacyFile
  ];
  if (guidesEntry) {
    const key = `guides/assets/${guidesEntry.assetId}.webp`;
    if (manifestKeys.has(key)) {
      return `${base}/${key}`;
    }
  }

  return undefined;
}

/** senlinmao URL → R2（spot → trip → pricing → guides），否則原 URL */
export function resolveSenlinmaoUrl(url: string): string {
  if (!url.includes("senlinmao.com")) {
    return url;
  }

  const legacyFile = legacyFileFromSenlinmaoUrl(url);
  if (!legacyFile) {
    return url;
  }

  return resolveLegacyFile(legacyFile) ?? url;
}

/** spot 舊檔名；manifest 有 R2 時自動切換，否則 fallback senlinmao */
export function resolveSpotImg(file: string): string {
  const r2 = resolveLegacyFile(file);
  if (r2) return r2;
  return `${SLM_BASE}/${file}`;
}

export function applyTripPackageMedia(pkg: TripPackage): TripPackage {
  return {
    ...pkg,
    heroImage: resolveSenlinmaoUrl(pkg.heroImage),
    gallery: pkg.gallery.map((item) => ({
      ...item,
      url: resolveSenlinmaoUrl(item.url),
    })),
  };
}

export function applyGuideArticleMedia<T extends { coverImage: string }>(
  article: T,
): T {
  return {
    ...article,
    coverImage: resolveSenlinmaoUrl(article.coverImage),
  };
}
