import type { TripPackage } from "@/lib/trip-packages/types";
import type { PricingConfig } from "@/lib/trip-pricing/types";
import type { SiteLocale } from "@/lib/site-locale";
import { absoluteUrl } from "@/lib/site-url";
import { COMPANY_INFO } from "@/lib/company-info";
import { buildTripStructuredData } from "@/lib/seo/trip-json-ld";
import { JsonLd } from "./JsonLd";

type TripProductJsonLdProps = {
  package: TripPackage;
  pricingConfig: PricingConfig;
  locale?: SiteLocale;
};

export function TripProductJsonLd({
  package: pkg,
  pricingConfig,
  locale = "zh-TW",
}: TripProductJsonLdProps) {
  return <JsonLd data={buildTripStructuredData(pkg, pricingConfig, locale)} />;
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
