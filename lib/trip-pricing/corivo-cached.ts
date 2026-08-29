import { unstable_cache } from "next/cache";
import {
  fetchCorivoPackageItems,
  fetchCorivoPackageTourPrice,
  type CorivoPackageItem,
  type CorivoPackageTourPrice,
  type CorivoPriceItem,
  type CorivoTravelerCounts,
} from "./corivo-client";

const PACKAGE_ITEMS_REVALIDATE = 3600;
const PRICE_REVALIDATE = 300;

function useDirectCorivoFetch(): boolean {
  return process.env.SYNC_PRICING_CLI === "1";
}

const getPackageItemsCached = unstable_cache(
  async (
    instanceId: string,
    packageTourId: number,
    adults: number,
    children: number,
    infants: number,
  ): Promise<CorivoPackageItem[]> =>
    fetchCorivoPackageItems(instanceId, packageTourId, {
      adults,
      children,
      infants,
    }),
  ["corivo-package-items"],
  { revalidate: PACKAGE_ITEMS_REVALIDATE, tags: ["corivo-package-items"] },
);

const getPackageTourPriceCached = unstable_cache(
  async (
    instanceId: string,
    packageTourId: number,
    date: string,
    adults: number,
    children: number,
    infants: number,
    currencyCode: string,
    itemsKey: string,
  ): Promise<CorivoPackageTourPrice> => {
    const items = JSON.parse(itemsKey) as CorivoPriceItem[];
    return fetchCorivoPackageTourPrice(instanceId, {
      packageTourId,
      date,
      allTravelers: { adults, children, infants },
      items,
      currencyCode,
    });
  },
  ["corivo-package-tour-price"],
  { revalidate: PRICE_REVALIDATE, tags: ["corivo-package-price"] },
);

export async function cachedFetchCorivoPackageItems(
  instanceId: string,
  packageTourId: number,
  travelers: CorivoTravelerCounts,
): Promise<CorivoPackageItem[]> {
  if (useDirectCorivoFetch()) {
    return fetchCorivoPackageItems(instanceId, packageTourId, travelers);
  }
  return getPackageItemsCached(
    instanceId,
    packageTourId,
    travelers.adults,
    travelers.children,
    travelers.infants,
  );
}

export async function cachedFetchCorivoPackageTourPrice(
  instanceId: string,
  input: {
    packageTourId: number;
    date: string;
    allTravelers: CorivoTravelerCounts;
    items: CorivoPriceItem[];
    currencyCode: string;
  },
): Promise<CorivoPackageTourPrice> {
  if (useDirectCorivoFetch()) {
    return fetchCorivoPackageTourPrice(instanceId, input);
  }
  const { packageTourId, date, allTravelers, items, currencyCode } = input;
  const itemsKey = JSON.stringify(items);

  return getPackageTourPriceCached(
    instanceId,
    packageTourId,
    date,
    allTravelers.adults,
    allTravelers.children,
    allTravelers.infants,
    currencyCode,
    itemsKey,
  );
}
