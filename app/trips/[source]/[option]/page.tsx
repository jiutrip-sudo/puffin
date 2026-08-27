import Link from "next/link";
import { notFound } from "next/navigation";
import { TripCard } from "@/components/TripCard";
import { BottomPanel } from "@/components/BottomPanel";
import { TransitionBar } from "@/components/TransitionBar";
import { HeroMedia } from "@/components/HeroMedia";
import {
  OPTION_LABELS,
  PLACEHOLDER_TRIPS,
  SOURCE_LABELS,
} from "@/lib/trip-options";

type PageProps = {
  params: Promise<{ source: string; option: string }>;
};

export default async function TripsPage({ params }: PageProps) {
  const { source, option } = await params;

  const sourceLabel = SOURCE_LABELS[source];
  const optionLabel = OPTION_LABELS[option];

  if (!sourceLabel || !optionLabel) {
    notFound();
  }

  const backHref = source === "taiwan" ? "/taiwan" : "/iceland";
  const backLabel = sourceLabel;

  return (
    <div className="min-h-screen">
      <section className="relative w-full">
        <div
          className="relative w-full min-h-[40vh] overflow-hidden md:min-h-0 md:aspect-video"
        >
          <HeroMedia priority={false} />

          <header className="absolute top-0 left-0 right-0 z-30 px-6 py-5 md:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <Link
                href="/"
                className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/25"
              >
                Puffin Iceland
              </Link>
              <Link
                href={backHref}
                className="glass rounded-full px-5 py-2 text-xs font-medium text-white/80 transition-all hover:bg-white/25"
              >
                返回 {backLabel}
              </Link>
            </div>
          </header>

          <div
            className="absolute inset-0 z-10 flex min-h-[40vh] flex-col justify-end px-6 pb-12 pt-4 md:min-h-0 md:px-8 md:pb-10"
          >
            <div className="mx-auto w-full max-w-7xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/70">
                {sourceLabel}
              </p>
              <h1 className="mt-3 text-4xl font-extrabold text-white drop-shadow-sm md:text-5xl">
                {optionLabel}行程
              </h1>
              <p className="mt-3 max-w-lg text-sm text-white/80">
                為您精選的 {sourceLabel} · {optionLabel} 行程
              </p>
            </div>
          </div>
        </div>
      </section>

      <TransitionBar tags={[`#${optionLabel}`, `#${sourceLabel}`, "#冰島之旅"]} />

      <BottomPanel>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_TRIPS.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </BottomPanel>
    </div>
  );
}
