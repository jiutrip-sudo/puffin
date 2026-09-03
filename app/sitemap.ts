import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { localePath } from "@/lib/i18n/paths";
import { getAllGuideSlugs } from "@/lib/guides/registry";
import { getAllTripPackages } from "@/lib/trip-packages/registry";
import {
  COMING_SOON_TRIPS,
  DEPARTURE_OPTIONS,
  getTripPackageHref,
  ICELAND_OPTIONS,
  ICELAND_GROUP_SEASON_OPTIONS,
  ICELAND_SELF_DRIVE_OPTIONS,
  ICELAND_SELF_DRIVE_WINTER_DAY_OPTIONS,
  ICELAND_GROUP_SUMMER_DAY_OPTIONS,
  ICELAND_GROUP_WINTER_DAY_OPTIONS,
  isTripRoutePickerHref,
} from "@/lib/trip-options";

function withZhCnVariants(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const zhCnEntries = entries.map((entry) => {
    const pathname = new URL(entry.url).pathname;
    return {
      ...entry,
      url: absoluteUrl(localePath(pathname, "zh-CN")),
    };
  });

  return [...entries, ...zhCnEntries];
}

function funnelSitemapEntry(href: string, priority: number): MetadataRoute.Sitemap[number] | null {
  if (isTripRoutePickerHref(href)) {
    return null;
  }

  return {
    url: absoluteUrl(href),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/iceland"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/taiwan"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/guides"), lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: absoluteUrl("/booking/lookup"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/terms-and-conditions"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/privacy-policy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const guidePages = getAllGuideSlugs().map((slug) => ({
    url: absoluteUrl(`/guides/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const tripPackages = getAllTripPackages()
    .filter((pkg) => !COMING_SOON_TRIPS.has(pkg.tripKey))
    .map((pkg) => ({
      url: absoluteUrl(getTripPackageHref(pkg.tripKey, "zh-TW")),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    }));

  const funnelPages: MetadataRoute.Sitemap = [];

  for (const option of DEPARTURE_OPTIONS) {
    const entry = funnelSitemapEntry(option.href, 0.7);
    if (entry) funnelPages.push(entry);
  }

  for (const option of ICELAND_OPTIONS) {
    const entry = funnelSitemapEntry(option.href, 0.75);
    if (entry) funnelPages.push(entry);
  }

  for (const option of ICELAND_SELF_DRIVE_OPTIONS) {
    const entry = funnelSitemapEntry(option.href, 0.7);
    if (entry) funnelPages.push(entry);
  }

  for (const option of ICELAND_GROUP_SEASON_OPTIONS) {
    const entry = funnelSitemapEntry(option.href, 0.65);
    if (entry) funnelPages.push(entry);
  }

  for (const option of ICELAND_SELF_DRIVE_WINTER_DAY_OPTIONS) {
    const entry = funnelSitemapEntry(option.href, 0.65);
    if (entry) funnelPages.push(entry);
  }

  for (const option of ICELAND_GROUP_SUMMER_DAY_OPTIONS) {
    const entry = funnelSitemapEntry(option.href, 0.5);
    if (entry) funnelPages.push(entry);
  }

  for (const option of ICELAND_GROUP_WINTER_DAY_OPTIONS) {
    const entry = funnelSitemapEntry(option.href, 0.5);
    if (entry) funnelPages.push(entry);
  }

  return withZhCnVariants([
    ...staticPages,
    ...guidePages,
    ...tripPackages,
    ...funnelPages,
  ]);
}
