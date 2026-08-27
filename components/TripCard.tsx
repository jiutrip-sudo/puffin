import Image from "next/image";
import type { PlaceholderTrip } from "@/lib/trip-options";

type TripCardProps = {
  trip: PlaceholderTrip;
};

export function TripCard({ trip }: TripCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-primary-surface/30 transition-all hover:shadow-lg hover:shadow-primary/10">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image
          src={trip.image}
          alt={trip.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white md:text-xl">{trip.name}</h3>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-sm text-white/80">{trip.days} 天</span>
            <span className="text-sm font-semibold text-white">{trip.price}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <button
          type="button"
          className="w-full rounded-full border border-foreground/10 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-foreground/25 hover:bg-foreground/5"
        >
          查看詳情 →
        </button>
      </div>
    </article>
  );
}
