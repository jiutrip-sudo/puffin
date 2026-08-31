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
  pricePerChildInCurrency?: number;
  pricePerInfantInCurrency?: number;
};

export type CorivoOptionalExtraInfo = {
  paragraphs: string[];
  infoBanner: string | null;
  images: string[];
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
  imageUrl: string | null;
  info: CorivoOptionalExtraInfo | null;
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
        pricePerChildInCurrency?: number;
        pricePerInfantInCurrency?: number;
      }>;
      _content: {
        name: string | null;
        durationLabel: string | null;
        image: { url: string | null } | null;
        serviceModal: {
          content: string | null;
          infoBanner: string | null;
          images: Array<{ url: string | null }>;
        } | null;
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
        query groupedOptionalExtras($input: OptionalExtraInput!, $currency: String!) {
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
                pricePerChildInCurrency(currency: $currency)
                pricePerInfantInCurrency(currency: $currency)
              }
              _content {
                name
                durationLabel
                image {
                  url
                }
                serviceModal {
                  content
                  infoBanner
                  images {
                    url
                  }
                }
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
    extras: (day.extras ?? [])
      .filter((extra) => extra._content?.name?.trim())
      .map((extra) => {
      const content = extra._content!;
      const modal = content?.serviceModal;
      const modalImages = (modal?.images ?? [])
        .map((image) => image.url?.trim())
        .filter((url): url is string => Boolean(url));
      const cardImage = content?.image?.url?.trim() ?? modalImages[0] ?? null;

      return {
        productId: extra.productId,
        packageItemId: extra.packageItemId,
        packageTourDay: extra.packageTourDay,
        minTravelers: extra.minTravelers,
        maxTravelers: extra.maxTravelers,
        priceFromInCurrency: extra.priceFromInCurrency,
        priceFromPerTravelerInCurrency: extra.priceFromPerTravelerInCurrency,
        name: content.name!.trim(),
        durationLabel: content.durationLabel ?? null,
        imageUrl: cardImage,
        info: modal
          ? {
              paragraphs: parseServiceModalParagraphs(modal.content),
              infoBanner: modal.infoBanner?.trim() || null,
              images: modalImages,
            }
          : null,
        departures: (extra.departures ?? []).map((departure) => ({
          startTime: departure.startTime,
          priceInCurrency: departure.priceInCurrency,
          pricePerAdultInCurrency: departure.pricePerAdultInCurrency,
          pricePerChildInCurrency: departure.pricePerChildInCurrency,
          pricePerInfantInCurrency: departure.pricePerInfantInCurrency,
        })),
      };
    }),
  }));
}

type EditorJsBlock = {
  type?: string;
  data?: { text?: string };
};

function parseServiceModalParagraphs(content: string | null | undefined): string[] {
  if (!content?.trim()) return [];

  try {
    const parsed = JSON.parse(content) as { blocks?: EditorJsBlock[] };
    return (parsed.blocks ?? [])
      .filter((block) => block.type === "paragraph" && block.data?.text?.trim())
      .map((block) => block.data!.text!.trim());
  } catch {
    return [];
  }
}
