const CORIVO_GRAPHQL_URL = "https://gateway.corivo.io/graphql";

type GraphqlResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

export type CorivoTravelerCounts = {
  adults: number;
  children: number;
  infants: number;
};

export type CorivoPriceItem = {
  id: number;
  quantity: number;
  travelers: CorivoTravelerCounts;
};

export type CorivoHotelRoomChoice = {
  id: number;
  isMandatory?: boolean;
  product: {
    category: string;
    classification: { id: number; code: string; name: string };
  };
};

export type CorivoPackageItem = {
  type: string;
  dayFrom: number;
  dayTo: number;
  choices: CorivoHotelRoomChoice[];
};

export type CorivoPackageTourPrice = {
  basePrice: number;
  totalPrice: number;
  totalPriceInCurrency: number;
  currency: string;
};

export type CorivoPackageItemSelection = {
  itemId: number;
  quantity: number;
  travelers: CorivoTravelerCounts;
};

export type CorivoPackageAvailability = {
  availabilityStatus: string;
  isAvailable: boolean;
  unavailableItems: number[];
};

function toCorivoDateTime(date: string): string {
  return date.includes("T") ? date : `${date}T00:00:00.000Z`;
}

async function corivoRequest<T>(
  instanceId: string,
  query: string,
  variables: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(CORIVO_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-client-id": instanceId,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Corivo 計價服務回應異常（${response.status}）`);
  }

  const payload = (await response.json()) as GraphqlResponse<T>;
  if (payload.errors?.length) {
    throw new Error(payload.errors[0]?.message ?? "Corivo 計價失敗");
  }

  if (!payload.data) {
    throw new Error("Corivo 計價回傳為空");
  }

  return payload.data;
}

export async function fetchCorivoPackageItems(
  instanceId: string,
  packageTourId: number,
  travelers: CorivoTravelerCounts,
): Promise<CorivoPackageItem[]> {
  const data = await corivoRequest<{ packageItems: CorivoPackageItem[] }>(
    instanceId,
    `
      query packageItems(
        $packageTourId: Int!
        $travelers: TravelerCombinationInput!
        $choices: Boolean!
        $product: Boolean!
      ) {
        packageItems(packageId: $packageTourId, travelers: $travelers) {
          type
          dayFrom
          dayTo
          choices @include(if: $choices) {
            id
            isMandatory
            product @include(if: $product) {
              ... on HotelRoom {
                category
                classification { id code name }
              }
            }
          }
        }
      }
    `,
    {
      packageTourId,
      travelers,
      choices: true,
      product: true,
    },
  );

  return data.packageItems ?? [];
}

export async function fetchCorivoPackageTourPrice(
  instanceId: string,
  input: {
    packageTourId: number;
    date: string;
    allTravelers: CorivoTravelerCounts;
    items: CorivoPriceItem[];
    currencyCode: string;
  },
): Promise<CorivoPackageTourPrice> {
  const data = await corivoRequest<{ packageTourPrice: CorivoPackageTourPrice }>(
    instanceId,
    `
      query packageTourPrice($input: PackageTourPriceInput!) {
        packageTourPrice(input: $input) {
          basePrice
          totalPrice
          totalPriceInCurrency
          currency
        }
      }
    `,
    {
      input: {
        packageTourId: input.packageTourId,
        date: input.date,
        allTravelers: input.allTravelers,
        items: input.items,
        currencyCode: input.currencyCode,
        preDays: 0,
        postDays: 0,
        promoCode: "",
      },
    },
  );

  return data.packageTourPrice;
}

export async function fetchCorivoPackageAvailability(
  instanceId: string,
  input: {
    packageTourId: number;
    date: string;
    allTravelers: CorivoTravelerCounts;
    itemSelections: CorivoPackageItemSelection[];
  },
): Promise<CorivoPackageAvailability> {
  const data = await corivoRequest<{
    packageAvailability: CorivoPackageAvailability[];
  }>(
    instanceId,
    `
      query packageAvailability($input: PackageTourAvailabilityInput!) {
        packageAvailability(input: $input) {
          availabilityStatus
          isAvailable
          unavailableItems
        }
      }
    `,
    {
      input: {
        packageTourId: input.packageTourId,
        date: toCorivoDateTime(input.date),
        allTravelers: input.allTravelers,
        packageSelections: [{ itemSelections: input.itemSelections }],
      },
    },
  );

  const entry = data.packageAvailability?.[0];
  if (!entry) {
    throw new Error("Corivo 可訂狀態回傳為空");
  }

  return entry;
}
