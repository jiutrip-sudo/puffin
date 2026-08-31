import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { getAllGuideSlugs } from "@/lib/guides/registry";
import { getAllTripPackages } from "@/lib/trip-packages/registry";
import {
  DEPARTURE_OPTIONS,
  ICELAND_OPTIONS,
  ICELAND_GROUP_SEASON_OPTIONS,
  ICELAND_SELF_DRIVE_OPTIONS,
  ICELAND_SELF_DRIVE_WINTER_DAY_OPTIONS,
  ICELAND_GROUP_SUMMER_DAY_OPTIONS,
  ICELAND_GROUP_WINTER_DAY_OPTIONS,
} from "@/lib/trip-options";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/iceland"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/taiwan"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/guides"), lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: absoluteUrl("/booking/lookup"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/terms-and-conditions"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const guidePages = getAllGuideSlugs().map((slug) => ({
    url: absoluteUrl(`/guides/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const tripPackages = getAllTripPackages().map((pkg) => ({
    url: absoluteUrl(`/trips/${pkg.tripKey}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  const funnelPages: MetadataRoute.Sitemap = [];

  for (const option of DEPARTURE_OPTIONS) {
    funnelPages.push({
      url: absoluteUrl(option.href),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const option of ICELAND_OPTIONS) {
    funnelPages.push({
      url: absoluteUrl(option.href),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  for (const option of ICELAND_SELF_DRIVE_OPTIONS) {
    funnelPages.push({
      url: absoluteUrl(option.href),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const option of ICELAND_GROUP_SEASON_OPTIONS) {
    funnelPages.push({
      url: absoluteUrl(option.href),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  for (const option of ICELAND_SELF_DRIVE_WINTER_DAY_OPTIONS) {
    funnelPages.push({
      url: absoluteUrl(option.href),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  for (const option of ICELAND_GROUP_SUMMER_DAY_OPTIONS) {
    funnelPages.push({
      url: absoluteUrl(option.href),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  for (const option of ICELAND_GROUP_WINTER_DAY_OPTIONS) {
    funnelPages.push({
      url: absoluteUrl(option.href),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return [...staticPages, ...guidePages, ...tripPackages, ...funnelPages];
}
