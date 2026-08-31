import type { CorivoTravelerCounts } from "@/lib/trip-pricing/corivo-client";

const CORIVO_GRAPHQL_URL = "https://gateway.corivo.io/graphql";

type GraphqlResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

export type CorivoOptionalExtraDeparture = {
  startTime: string;
  priceInCurrency: number;
  pricePerAdultInCurrency?: number;
};

export type CorivoOptionalExtra = {
  productId: number;
  packageItemId: number;
  packageTourDay: number;
  minTravelers: number;
  maxTravelers: number;
  priceFromInCurrency: number;
  priceFromPerTravelerInCurrency: number;
  name: string;
  durationLabel: string | null;
  departures: CorivoOptionalExtraDeparture[];
};

export type CorivoOptionalExtraDay = {
  packageTourDay: number;
  date: string;
  extras: CorivoOptionalExtra[];
};

type GroupedOptionalExtrasResponse = {
  groupedOptionalExtras: Array<{
    packageTourDay: number;
    date: string;
    extras: Array<{
      productId: number;
      packageItemId: number;
      packageTourDay: number;
      minTravelers: number;
      maxTravelers: number;
      priceFromInCurrency: number;
      priceFromPerTravelerInCurrency: number;
      departures: Array<{
        startTime: string;
        priceInCurrency: number;
        pricePerAdultInCurrency?: number;
      }>;
      _content: {
        name: string | null;
        durationLabel: string | null;
      } | null;
    }>;
  }>;
};

export async function fetchCorivoGroupedOptionalExtras(
  instanceId: string,
  packageTourId: number,
  startDate: string,
  travelers: CorivoTravelerCounts,
  currencyCode: string,
): Promise<CorivoOptionalExtraDay[]> {
  const response = await fetch(CORIVO_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-client-id": instanceId,
    },
    body: JSON.stringify({
      query: `
        query groupedOptionalExtras($input: OptionalExtraInput!) {
          groupedOptionalExtras(input: $input) {
            packageTourDay
            date
            extras {
              productId
              packageItemId
              packageTourDay
              minTravelers
              maxTravelers
              priceFromInCurrency(currency: $currency)
              priceFromPerTravelerInCurrency(currency: $currency)
              departures {
                startTime
                priceInCurrency(currency: $currency)
                pricePerAdultInCurrency(currency: $currency)
              }
              _content {
                name
                durationLabel
              }
            }
          }
        }
      `,
      variables: {
        input: {
          packageTourId,
          startDate,
          allTravelers: travelers,
        },
        currency: currencyCode,
      },
    }),
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Corivo 活動目錄回應異常（${response.status}）`);
  }

  const payload = (await response.json()) as GraphqlResponse<
    GroupedOptionalExtrasResponse
  >;

  if (payload.errors?.length) {
    throw new Error(payload.errors[0]?.message ?? "取得活動目錄失敗");
  }

  const days = payload.data?.groupedOptionalExtras ?? [];

  return days.map((day) => ({
    packageTourDay: day.packageTourDay,
    date: day.date,
    extras: (day.extras ?? []).map((extra) => ({
      productId: extra.productId,
      packageItemId: extra.packageItemId,
      packageTourDay: extra.packageTourDay,
      minTravelers: extra.minTravelers,
      maxTravelers: extra.maxTravelers,
      priceFromInCurrency: extra.priceFromInCurrency,
      priceFromPerTravelerInCurrency: extra.priceFromPerTravelerInCurrency,
      name:
        extra._content?.name?.trim() ||
        `自選活動（#${extra.productId}）`,
      durationLabel: extra._content?.durationLabel ?? null,
      departures: (extra.departures ?? []).map((departure) => ({
        startTime: departure.startTime,
        priceInCurrency: departure.priceInCurrency,
        pricePerAdultInCurrency: departure.pricePerAdultInCurrency,
      })),
    })),
  }));
}
