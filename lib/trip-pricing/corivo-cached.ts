import { unstable_cache } from "next/cache";
import {
  fetchCorivoPackageAvailability,
  fetchCorivoPackageItems,
  fetchCorivoPackageTourPrice,
  type CorivoPackageAvailability,
  type CorivoPackageItem,
  type CorivoPackageItemSelection,
  type CorivoPackageTourPrice,
  type CorivoPriceItem,
  type CorivoTravelerCounts,
} from "./corivo-client";

const PACKAGE_ITEMS_REVALIDATE = 3600;
const PRICE_REVALIDATE = 300;
const AVAILABILITY_REVALIDATE = 300;

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

const getPackageAvailabilityCached = unstable_cache(
  async (
    instanceId: string,
    packageTourId: number,
    date: string,
    adults: number,
    children: number,
    infants: number,
    selectionsKey: string,
  ): Promise<CorivoPackageAvailability> => {
    const itemSelections = JSON.parse(
      selectionsKey,
    ) as CorivoPackageItemSelection[];
    return fetchCorivoPackageAvailability(instanceId, {
      packageTourId,
      date,
      allTravelers: { adults, children, infants },
      itemSelections,
    });
  },
  ["corivo-package-availability"],
  { revalidate: AVAILABILITY_REVALIDATE, tags: ["corivo-package-availability"] },
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

export async function cachedFetchCorivoPackageAvailability(
  instanceId: string,
  input: {
    packageTourId: number;
    date: string;
    allTravelers: CorivoTravelerCounts;
    itemSelections: CorivoPackageItemSelection[];
  },
): Promise<CorivoPackageAvailability> {
  if (useDirectCorivoFetch()) {
    return fetchCorivoPackageAvailability(instanceId, input);
  }
  const { packageTourId, date, allTravelers, itemSelections } = input;
  const selectionsKey = JSON.stringify(itemSelections);

  return getPackageAvailabilityCached(
    instanceId,
    packageTourId,
    date,
    allTravelers.adults,
    allTravelers.children,
    allTravelers.infants,
    selectionsKey,
  );
}
