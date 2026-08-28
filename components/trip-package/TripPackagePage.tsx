import type { TripPackage } from "@/lib/trip-packages/types";
import type { PricingConfig } from "@/lib/trip-pricing/types";
import { TripPackagePageClient } from "./TripPackagePageClient";

type TripPackagePageProps = {
  package: TripPackage;
  pricingConfig: PricingConfig;
};

export function TripPackagePage({
  package: pkg,
  pricingConfig,
}: TripPackagePageProps) {
  return (
    <TripPackagePageClient package={pkg} pricingConfig={pricingConfig} />
  );
}
