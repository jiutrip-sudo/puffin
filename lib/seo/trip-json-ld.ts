import type { TripPackage } from "@/lib/trip-packages/types";
import type { PricingConfig } from "@/lib/trip-pricing/types";
import type { SiteLocale } from "@/lib/site-locale";
import { absoluteUrl } from "@/lib/site-url";
import { COMPANY_INFO } from "@/lib/company-info";
import { getTripPackageHref, OPTION_LABELS, SOURCE_LABELS } from "@/lib/trip-options";

function toAbsoluteImageUrl(image: string): string {
  return image.startsWith("http") ? image : absoluteUrl(image);
}

export function buildTripTouristTripJsonLd(
  pkg: TripPackage,
  pricingConfig: PricingConfig,
  pageUrl: string,
) {
  const minPrice = pricingConfig.tiers[0]?.perPersonDouble;

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.intro.summary,
    image: toAbsoluteImageUrl(pkg.heroImage),
    identifier: pkg.tourCode,
    touristType: pkg.meta.transport,
    provider: {
      "@type": "TravelAgency",
      name: COMPANY_INFO.name,
      url: absoluteUrl("/"),
    },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: pkg.itinerary.length,
      itemListElement: pkg.itinerary.map((day, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `第 ${day.day} 天：${day.title}`,
        description: day.description,
      })),
    },
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "ISK",
      availability: "https://schema.org/InStock",
      ...(minPrice != null ? { price: minPrice } : {}),
    },
  };
}

export function buildTripBreadcrumbJsonLd(pkg: TripPackage, pageUrl: string) {
  const parts = pkg.tripKey.split("/");
  const source = parts[0] ?? "iceland";
  const option = parts[1] ?? "";
  const suboption = parts[2] ?? "";
  const sourceLabel = SOURCE_LABELS[source] ?? source;
  const optionLabel = OPTION_LABELS[option] ?? option;
  const suboptionLabel = OPTION_LABELS[suboption] ?? suboption;

  const elements: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }> = [
    {
      "@type": "ListItem",
      position: 1,
      name: "首頁",
      item: absoluteUrl("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: sourceLabel,
      item: absoluteUrl(`/${source}`),
    },
  ];

  if (option) {
    elements.push({
      "@type": "ListItem",
      position: elements.length + 1,
      name: optionLabel,
      item: absoluteUrl(`/trips/${source}/${option}`),
    });
  }

  if (suboption) {
    elements.push({
      "@type": "ListItem",
      position: elements.length + 1,
      name: suboptionLabel,
      item: absoluteUrl(`/trips/${source}/${option}/${suboption}`),
    });
  }

  elements.push({
    "@type": "ListItem",
    position: elements.length + 1,
    name: pkg.title,
    item: pageUrl,
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: elements,
  };
}

export function buildTripFaqJsonLd(pkg: TripPackage) {
  const questions = pkg.faq.flatMap((group) => group.items);
  if (questions.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildTripStructuredData(
  pkg: TripPackage,
  pricingConfig: PricingConfig,
  locale: SiteLocale = "zh-TW",
): Array<Record<string, unknown>> {
  const pageUrl = absoluteUrl(getTripPackageHref(pkg.tripKey, locale));
  const data: Array<Record<string, unknown>> = [
    buildTripTouristTripJsonLd(pkg, pricingConfig, pageUrl),
    buildTripBreadcrumbJsonLd(pkg, pageUrl),
  ];

  const faq = buildTripFaqJsonLd(pkg);
  if (faq) {
    data.push(faq);
  }

  return data;
}
