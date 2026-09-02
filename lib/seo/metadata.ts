import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import type { SiteLocale } from "@/lib/site-locale";
import { siteLocaleToOpenGraphLocale } from "@/lib/site-locale";
import { localePath } from "@/lib/i18n/paths";

const DEFAULT_OG_IMAGE = "/images/dollar-travel-logo.png";

export function buildPageMetadata(options: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  locale?: SiteLocale;
}): Metadata {
  const locale = options.locale ?? "zh-TW";
  const canonicalPath = options.path;
  const canonical = canonicalPath ? absoluteUrl(localePath(canonicalPath, locale)) : undefined;
  const ogImage = options.ogImage ?? absoluteUrl(DEFAULT_OG_IMAGE);
  const alternateLocale = locale === "zh-CN" ? "zh-TW" : "zh-CN";
  const alternatePath = canonicalPath
    ? absoluteUrl(localePath(canonicalPath, alternateLocale))
    : undefined;

  return {
    title: options.title,
    description: options.description,
    alternates: canonical
      ? {
          canonical,
          languages: alternatePath
            ? {
                [locale]: canonical,
                [alternateLocale]: alternatePath,
              }
            : undefined,
        }
      : undefined,
    openGraph: {
      title: options.title,
      description: options.description,
      url: canonical,
      siteName: "大樂旅行社",
      locale: siteLocaleToOpenGraphLocale(locale),
      alternateLocale: siteLocaleToOpenGraphLocale(alternateLocale),
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: options.title,
      description: options.description,
      images: [ogImage],
    },
    robots: options.noIndex ? { index: false, follow: false } : undefined,
  };
}
