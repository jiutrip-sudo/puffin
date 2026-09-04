import type { SiteLocale } from "@/lib/site-locale";
import { attachCatalogFromPrices } from "@/lib/trip-pricing/catalog-from-price";
import { getTripPackage } from "./registry";
import { getTripCatalogItems, type TripCatalogItem } from "./catalog";

export async function getTripCatalogItemsWithFromPrices(
  locale: SiteLocale = "zh-TW",
): Promise<TripCatalogItem[]> {
  const items = getTripCatalogItems(locale);
  return attachCatalogFromPrices(items, locale, (tripKey) => {
    return getTripPackage(tripKey)?.id;
  });
}
