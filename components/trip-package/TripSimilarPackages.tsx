"use client";

import type { SimilarTripCard } from "@/lib/trip-packages/similar-trips";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { localizeText } from "@/lib/i18n/localize";
import { TripPackageCard } from "./TripPackageCard";

type TripSimilarPackagesProps = {
  trips: SimilarTripCard[];
};

export function TripSimilarPackages({ trips }: TripSimilarPackagesProps) {
  const locale = useSiteLocale();
  const bookableTrips = trips.filter((trip) => !trip.comingSoon);
  const comingSoonTrips = trips.filter((trip) => trip.comingSoon);

  if (bookableTrips.length === 0 && comingSoonTrips.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {bookableTrips.length > 0 && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {bookableTrips.map((trip) => (
            <TripPackageCard
              key={trip.tripKey}
              locale={locale}
              comingSoon={false}
              trip={{
                tripKey: trip.tripKey,
                title: trip.title,
                subtitle: trip.subtitle,
                description: trip.description,
                durationLabel: trip.durationLabel,
                heroImage: trip.heroImage,
                tags: trip.tags,
                fromPrice: trip.fromPrice,
              }}
            />
          ))}
        </div>
      )}

      {comingSoonTrips.length > 0 && (
        <div>
          <p className="mb-4 text-sm font-semibold text-foreground/60">
            {localizeText("同系列即將推出", locale)}
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {comingSoonTrips.map((trip) => (
              <TripPackageCard
                key={trip.tripKey}
                locale={locale}
                comingSoon
                trip={{
                  tripKey: trip.tripKey,
                  title: trip.title,
                  subtitle: trip.subtitle,
                  description: trip.description,
                  durationLabel: trip.durationLabel,
                  heroImage: trip.heroImage,
                  tags: trip.tags,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
