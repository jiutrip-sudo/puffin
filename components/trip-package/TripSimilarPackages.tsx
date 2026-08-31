import Link from "next/link";
import { COMING_SOON_TRIPS } from "@/lib/trip-options";
import type { SimilarTrip } from "@/lib/trip-packages/types";

type TripSimilarPackagesProps = {
  trips: SimilarTrip[];
};

function tripHref(tripKey: string): string {
  const parts = tripKey.split("/");
  if (parts.length !== 4) return "#";
  return `/trips/${parts.join("/")}`;
}

export function TripSimilarPackages({ trips }: TripSimilarPackagesProps) {
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
            <SimilarTripCard key={trip.tripKey} trip={trip} comingSoon={false} />
          ))}
        </div>
      )}

      {comingSoonTrips.length > 0 && (
        <div>
          <p className="mb-4 text-sm font-semibold text-foreground/60">
            同系列即將推出
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {comingSoonTrips.map((trip) => (
              <SimilarTripCard key={trip.tripKey} trip={trip} comingSoon />
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
}: {
  trip: SimilarTrip;
  comingSoon: boolean;
}) {
  return (
    <article
      className={`flex min-h-[220px] flex-col rounded-2xl border border-foreground/10 bg-primary-surface/15 p-6 md:min-h-[240px] md:p-7 ${
        comingSoon ? "opacity-85" : "transition-colors hover:border-primary/30 hover:bg-primary-surface/25"
      }`}
    >
      <p className="font-display text-xs font-semibold uppercase tracking-wide text-primary-dark">
        冬季自駕 · {trip.tourCode}
        {comingSoon && (
          <span className="ml-2 rounded-full bg-foreground/8 px-2 py-0.5 text-[10px] font-bold normal-case tracking-normal text-foreground/55">
            即將推出
          </span>
        )}
      </p>
      <h3 className="mt-2 text-lg font-bold leading-snug text-foreground md:text-xl">
        {trip.title}
      </h3>
      <p className="mt-2 text-sm font-medium text-foreground/55">
        {trip.durationLabel}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/75 md:text-base">
        {trip.description}
      </p>
      {comingSoon ? (
        <p className="mt-5 text-sm font-semibold text-foreground/45">
          敬請期待
        </p>
      ) : (
        <Link
          href={tripHref(trip.tripKey)}
          className="mt-5 inline-flex text-sm font-semibold text-primary-dark hover:underline md:text-base"
        >
          查看行程 →
        </Link>
      )}
    </article>
  );
}
