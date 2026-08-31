import type { TripPackage } from "@/lib/trip-packages/types";
import type { PricingConfig } from "@/lib/trip-pricing/types";
import { absoluteUrl } from "@/lib/site-url";
import { COMPANY_INFO } from "@/lib/company-info";
import { JsonLd } from "./JsonLd";

type TripProductJsonLdProps = {
  package: TripPackage;
  pricingConfig: PricingConfig;
};

export function TripProductJsonLd({
  package: pkg,
  pricingConfig,
}: TripProductJsonLdProps) {
  const pageUrl = absoluteUrl(`/trips/${pkg.tripKey}`);
  const minPrice = pricingConfig.tiers[0]?.perPersonDouble;

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.title,
    description: pkg.intro.summary,
    image: [pkg.heroImage],
    sku: pkg.tourCode,
    brand: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
    },
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "ISK",
      availability: "https://schema.org/InStock",
      ...(minPrice != null ? { price: minPrice } : {}),
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首頁",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "冰島集合",
        item: absoluteUrl("/iceland"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pkg.title,
        item: pageUrl,
      },
    ],
  };

  return <JsonLd data={[product, breadcrumb]} />;
}

export function SiteOrganizationJsonLd() {
  const email =
    COMPANY_INFO.contact.find((item) => item.label === "信箱")?.value ??
    "vip@dollar-travel.com";
  const phone =
    COMPANY_INFO.contact.find((item) => item.label === "電話")?.value ?? "";
  const address =
    COMPANY_INFO.contact.find((item) => item.label === "地址")?.value ?? "";

  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: COMPANY_INFO.name,
    url: absoluteUrl("/"),
    email,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressCountry: "TW",
    },
  };

  return <JsonLd data={data} />;
}
