import { getTripPackage } from "@/lib/trip-packages/registry";
import { getPricingConfig } from "@/lib/trip-pricing/fetch";
import { localizeDeep } from "@/lib/i18n/localize";
import type { SiteLocale } from "@/lib/site-locale";
import { getRequestLocale } from "@/lib/i18n/server";

const localizedPackageCache = new Map<string, ReturnType<typeof buildLocalized>>();

type LocalizedPackageResult = {
  package: NonNullable<ReturnType<typeof getTripPackage>>;
  pricingConfig: NonNullable<ReturnType<typeof getPricingConfig>>;
};

function buildLocalized(
  tripKey: string,
  locale: SiteLocale,
): LocalizedPackageResult | undefined {
  const packageData = getTripPackage(tripKey);
  if (!packageData) return undefined;

  const pricingConfig = getPricingConfig(packageData.id);
  if (!pricingConfig) return undefined;

  if (locale === "zh-TW") {
    return { package: packageData, pricingConfig };
  }

  return {
    package: localizeDeep(packageData, locale),
    pricingConfig: localizeDeep(pricingConfig, locale),
  };
}

export function getTripPackageWithPricing(
  tripKey: string,
  locale?: SiteLocale,
) {
  const packageData = getTripPackage(tripKey);
  if (!packageData) return undefined;

  const pricingConfig = getPricingConfig(packageData.id);
  if (!pricingConfig) return undefined;

  if (!locale || locale === "zh-TW") {
    return { package: packageData, pricingConfig };
  }

  const cacheKey = `${locale}:${tripKey}`;
  const cached = localizedPackageCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const localized = buildLocalized(tripKey, locale);
  if (localized) {
    localizedPackageCache.set(cacheKey, localized);
  }
  return localized;
}

export async function getTripPackageWithPricingForRequest(tripKey: string) {
  const locale = await getRequestLocale();
  return getTripPackageWithPricing(tripKey, locale);
}
