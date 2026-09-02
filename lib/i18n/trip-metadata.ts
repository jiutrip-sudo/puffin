import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { absoluteUrl } from "@/lib/site-url";
import { getRequestLocale } from "@/lib/i18n/server";
import { localizeText } from "@/lib/i18n/localize";
import { getTripPackageWithPricing } from "@/lib/trip-packages/get-package-with-pricing";
import { localePath } from "@/lib/i18n/paths";
import {
  localizeRecordLabels,
} from "@/lib/i18n/trip-options";
import {
  OPTION_LABELS,
  SOURCE_LABELS,
} from "@/lib/trip-options";

export async function buildTripPackageMetadata(
  tripKey: string,
  path: string,
): Promise<Metadata | undefined> {
  const locale = await getRequestLocale();
  const data = getTripPackageWithPricing(tripKey, locale);

  if (!data) {
    return undefined;
  }

  return buildPageMetadata({
    title: `${data.package.title} | 大樂旅行社`,
    description: data.package.intro.summary,
    path,
    locale,
    ogImage: data.package.heroImage.startsWith("http")
      ? data.package.heroImage
      : absoluteUrl(data.package.heroImage),
  });
}

export async function getLocalizedTripLabels() {
  const locale = await getRequestLocale();
  return {
    locale,
    sourceLabels: localizeRecordLabels(SOURCE_LABELS, locale),
    optionLabels: localizeRecordLabels(OPTION_LABELS, locale),
    localize: (text: string) => localizeText(text, locale),
    path: (internalPath: string) => localePath(internalPath, locale),
  };
}
