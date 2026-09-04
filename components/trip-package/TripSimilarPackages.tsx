"use client";

import {
  COMING_SOON_TRIPS,
  getIcelandGroupSummerPackageTripKey,
} from "@/lib/trip-options";
import { getTripPackage } from "@/lib/trip-packages/registry";
import type { SimilarTrip } from "@/lib/trip-packages/types";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { localizeText } from "@/lib/i18n/localize";
import { TripPackageCard } from "./TripPackageCard";

type TripSimilarPackagesProps = {
  trips: SimilarTrip[];
};

function resolvePackageTripKey(tripKey: string): string {
  const parts = tripKey.split("/");
  if (
    parts.length === 5 &&
    parts[0] === "iceland" &&
    parts[1] === "group" &&
    parts[2] === "summer"
  ) {
    return getIcelandGroupSummerPackageTripKey(parts[3], parts[4]);
  }
  return tripKey;
}

function resolvePackage(tripKey: string) {
  return getTripPackage(resolvePackageTripKey(tripKey));
}

export function TripSimilarPackages({ trips }: TripSimilarPackagesProps) {
  const locale = useSiteLocale();
  const bookableTrips = trips.filter(
    (trip) => !COMING_SOON_TRIPS.has(trip.tripKey),
  );
  const comingSoonTrips = trips.filter((trip) =>
    COMING_SOON_TRIPS.has(trip.tripKey),
  );

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
                description: trip.description,
                durationLabel: trip.durationLabel,
                heroImage: resolvePackage(trip.tripKey)?.heroImage,
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
                  description: trip.description,
                  durationLabel: trip.durationLabel,
                  heroImage: resolvePackage(trip.tripKey)?.heroImage,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
