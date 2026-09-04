import type { TripPackage } from "@/lib/trip-packages/types";
import type { PricingConfig } from "@/lib/trip-pricing/types";
import { getRequestLocale } from "@/lib/i18n/server";
import { getSimilarTripCardsForDisplay } from "@/lib/trip-packages/similar-trips-server";
import { TripPackagePageClient } from "./TripPackagePageClient";

type TripPackagePageProps = {
  package: TripPackage;
  pricingConfig: PricingConfig;
};

export async function TripPackagePage({
  package: pkg,
  pricingConfig,
}: TripPackagePageProps) {
  const locale = await getRequestLocale();
  const similarTrips = await getSimilarTripCardsForDisplay(pkg, locale);

  return (
    <TripPackagePageClient
      package={pkg}
      pricingConfig={pricingConfig}
      similarTrips={similarTrips}
    />
  );
}
