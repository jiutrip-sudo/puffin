import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import type { SiteLocale } from "@/lib/site-locale";
import { siteLocaleToOpenGraphLocale } from "@/lib/site-locale";
import { localePath } from "@/lib/i18n/paths";
import { DEFAULT_OG_IMAGE, SITE_DISPLAY_NAME } from "@/lib/company-info";

const DEFAULT_OG_IMAGE_PATH = DEFAULT_OG_IMAGE.src;
const DEFAULT_OG_IMAGE_WIDTH = DEFAULT_OG_IMAGE.width;
const DEFAULT_OG_IMAGE_HEIGHT = DEFAULT_OG_IMAGE.height;

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
  const ogImage = options.ogImage ?? absoluteUrl(DEFAULT_OG_IMAGE_PATH);
  const openGraphImages = options.ogImage
    ? [{ url: ogImage }]
    : [
        {
          url: ogImage,
          width: DEFAULT_OG_IMAGE_WIDTH,
          height: DEFAULT_OG_IMAGE_HEIGHT,
          alt: DEFAULT_OG_IMAGE.alt,
        },
      ];
  const alternateLocale = locale === "zh-CN" ? "zh-TW" : "zh-CN";
  const alternatePath = canonicalPath
    ? absoluteUrl(localePath(canonicalPath, alternateLocale))
    : undefined;
  const defaultPath = canonicalPath
    ? absoluteUrl(localePath(canonicalPath, "zh-TW"))
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
                ...(defaultPath ? { "x-default": defaultPath } : {}),
              }
            : undefined,
        }
      : undefined,
    openGraph: {
      title: options.title,
      description: options.description,
      url: canonical,
      siteName: SITE_DISPLAY_NAME,
      locale: siteLocaleToOpenGraphLocale(locale),
      alternateLocale: siteLocaleToOpenGraphLocale(alternateLocale),
      type: "website",
      images: openGraphImages,
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
