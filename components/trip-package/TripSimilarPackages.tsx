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
    <div className="grid gap-4 sm:grid-cols-2">
      {trips.map((trip) => (
        <article
          key={trip.tripKey}
          className="rounded-2xl border border-foreground/10 bg-primary-surface/15 p-5 transition-colors hover:border-primary/30 hover:bg-primary-surface/25"
        >
          <p className="text-xs font-medium text-primary-dark">
            冬季自駕 · {trip.tourCode}
          </p>
          <h3 className="mt-1 text-base font-bold text-foreground">
            {trip.title}
          </h3>
          <p className="mt-1 text-xs text-foreground/55">
            {trip.durationLabel}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/75">
            {trip.description}
          </p>
          <Link
            href={tripHref(trip.tripKey)}
            className="mt-4 inline-flex text-sm font-semibold text-primary-dark hover:underline"
          >
            查看行程 →
          </Link>
        </article>
      ))}
    </div>
  );
}
