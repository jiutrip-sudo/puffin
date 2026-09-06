import spotLegacyMap from "@/lib/media/legacy-map.json";
import tripLegacyMap from "@/lib/media/trip-legacy-map.json";
import pricingLegacyMap from "@/lib/media/pricing-legacy-map.json";
import guidesLegacyMap from "@/lib/media/guides-legacy-map.json";
import manifest from "@/lib/media/manifest.json";
import { mediaBaseUrl } from "@/lib/media/url";
import type { PricingConfig } from "@/lib/trip-pricing/types";
import type { TripPackage } from "@/lib/trip-packages/types";

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
  guideSlug: string;
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

/** senlinmao URL → R2（spot → trip → pricing → guides）；已登記 inventory 則不再 fallback senlinmao */
export function resolveSenlinmaoUrl(url: string): string {
  if (!url.includes("senlinmao.com")) {
    return url;
  }

  const legacyFile = legacyFileFromSenlinmaoUrl(url);
  if (!legacyFile) {
    return url;
  }

  const resolved = resolveLegacyFile(legacyFile);
  if (resolved) {
    return resolved;
  }

  if (
    legacyFile in spotLegacyMap ||
    legacyFile in tripLegacyMap ||
    legacyFile in pricingLegacyMap ||
    legacyFile in guidesLegacyMap
  ) {
    throw new Error(
      `媒體尚未同步至 R2：${legacyFile}（請執行 media:sync -- --all --force --upload）`,
    );
  }

  return url;
}

/** spot 舊檔名 → R2 spots/{slug}/{variant}.webp，不引用 senlinmao */
export function resolveSpotImg(file: string): string {
  const base = mediaBaseUrl();
  const entry = (spotLegacyMap as Record<string, SpotLegacyEntry>)[file];
  if (base && entry) {
    const key = `spots/${entry.slug}/${entry.variant}.webp`;
    if (manifestKeys.has(key)) {
      return `${base}/${key}`;
    }
  }

  throw new Error(
    `Spot 圖片尚未同步至 R2：${file}（請執行 npm run media:sync -- --all --force --upload）`,
  );
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

/** 若 pricing 仍含 senlinmao URL（舊資料），轉成 R2 */
export function applyPricingConfigMedia(config: PricingConfig): PricingConfig {
  return {
    ...config,
    tiers: config.tiers.map((tier) => ({
      ...tier,
      imageUrl: resolveSenlinmaoUrl(tier.imageUrl),
      galleryImages: tier.galleryImages?.map((url) => resolveSenlinmaoUrl(url)),
    })),
    vehicleTiers: config.vehicleTiers?.map((vehicle) => ({
      ...vehicle,
      imageUrl: resolveSenlinmaoUrl(vehicle.imageUrl),
    })),
  };
}

export function applyGuideArticleMedia<
  T extends {
    slug: string;
    coverImage: string;
    sections?: Array<{
      image?: { src: string; alt: string; caption?: string };
    }>;
  },
>(article: T): T {
  return {
    ...article,
    coverImage: resolveGuideCoverImage(article),
    ...(article.sections
      ? {
          sections: article.sections.map((section) =>
            section.image
              ? {
                  ...section,
                  image: {
                    ...section.image,
                    src: resolveGuideSectionImageSrc(section.image.src),
                  },
                }
              : section,
          ),
        }
      : {}),
  };
}

function resolveGuideSectionImageSrc(src: string): string {
  if (src.includes("senlinmao.com")) {
    return resolveSenlinmaoUrl(src);
  }
  return src;
}

function resolveGuideCoverImage(article: {
  slug: string;
  coverImage: string;
}): string {
  const base = mediaBaseUrl();
  if (base && article.coverImage.startsWith(`${base}/`)) {
    return article.coverImage;
  }

  if (!article.coverImage.includes("senlinmao.com")) {
    return article.coverImage;
  }
  const entry = (guidesLegacyMap as Record<string, GuidesLegacyEntry>)[
    article.slug
  ];
  if (base && entry) {
    const key = `guides/assets/${entry.assetId}.webp`;
    if (manifestKeys.has(key)) {
      return `${base}/${key}`;
    }
  }

  throw new Error(
    `攻略封面尚未同步至 R2：${article.slug}（請執行 npm run media:sync:guides -- --all --force --upload）`,
  );
}
