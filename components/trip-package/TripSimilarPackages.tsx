"use client";

import { TripImage } from "@/components/trip-package/TripImage";
import Link from "next/link";
import {
  COMING_SOON_TRIPS,
  getIcelandGroupSummerPackageTripKey,
  getTripPackageHref,
} from "@/lib/trip-options";
import { getTripPackage } from "@/lib/trip-packages/registry";
import type { SimilarTrip } from "@/lib/trip-packages/types";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { localizeText } from "@/lib/i18n/localize";

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

function shortDurationLabel(durationLabel: string): string {
  return durationLabel.split(/[／/]/)[0]?.trim() ?? durationLabel;
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
            <SimilarTripCard
              key={trip.tripKey}
              trip={trip}
              comingSoon={false}
              locale={locale}
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
              <SimilarTripCard
                key={trip.tripKey}
                trip={trip}
                comingSoon
                locale={locale}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SimilarTripCard({
  trip,
  comingSoon,
  locale,
}: {
  trip: SimilarTrip;
  comingSoon: boolean;
  locale: ReturnType<typeof useSiteLocale>;
}) {
  const pkg = resolvePackage(trip.tripKey);
  const imageUrl = pkg?.heroImage;

  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-primary-surface/40">
        {imageUrl ? (
          <TripImage
            src={imageUrl}
            alt={trip.title}
            fill
            className={`object-cover transition-transform duration-500 ${
              comingSoon ? "opacity-80" : "group-hover:scale-105"
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-surface/60 to-primary-dark/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/25 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {shortDurationLabel(trip.durationLabel)}
        </span>
        {comingSoon && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-foreground/70 shadow-sm">
            {localizeText("即將推出", locale)}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 pt-10">
          <h3 className="line-clamp-2 text-sm font-bold leading-snug text-white md:text-base">
            {trip.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-foreground/75">
          {trip.description}
        </p>
        {comingSoon ? (
          <p className="mt-3 text-sm font-semibold text-foreground/45">
            {localizeText("敬請期待", locale)}
          </p>
        ) : (
          <span className="mt-3 inline-flex text-sm font-semibold text-primary-dark group-hover:underline">
            {localizeText("查看行程 →", locale)}
          </span>
        )}
      </div>
    </>
  );

  if (comingSoon) {
    return (
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-primary-surface/15 opacity-90">
        {content}
      </article>
    );
  }

  return (
    <Link
      href={getTripPackageHref(trip.tripKey, locale)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-primary-surface/15 transition-all hover:border-primary/30 hover:bg-primary-surface/25 hover:shadow-lg hover:shadow-primary/10"
    >
      {content}
    </Link>
  );
}
