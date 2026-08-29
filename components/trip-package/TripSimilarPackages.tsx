import Link from "next/link";
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
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {trips.map((trip) => (
        <article
          key={trip.tripKey}
          className="flex min-h-[220px] flex-col rounded-2xl border border-foreground/10 bg-primary-surface/15 p-6 transition-colors hover:border-primary/30 hover:bg-primary-surface/25 md:min-h-[240px] md:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-dark">
            冬季自駕 · {trip.tourCode}
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
          <Link
            href={tripHref(trip.tripKey)}
            className="mt-5 inline-flex text-sm font-semibold text-primary-dark hover:underline md:text-base"
          >
            查看行程 →
          </Link>
        </article>
      ))}
    </div>
  );
}
