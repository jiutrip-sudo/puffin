import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";

const DEFAULT_OG_IMAGE = "/images/dollar-travel-logo.png";

export function buildPageMetadata(options: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const canonical = options.path ? absoluteUrl(options.path) : undefined;
  const ogImage = options.ogImage ?? absoluteUrl(DEFAULT_OG_IMAGE);

  return {
    title: options.title,
    description: options.description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: options.title,
      description: options.description,
      url: canonical,
      siteName: "大樂旅行社",
      locale: "zh_TW",
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
