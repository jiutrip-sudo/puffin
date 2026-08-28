import type { TripPackage } from "@/lib/trip-packages/types";

type TripPackageHeroProps = {
  package: TripPackage;
};

export function TripPackageHero({ package: pkg }: TripPackageHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#3d3658] via-primary-dark to-background"
    >
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-[calc(env(safe-area-inset-top)+4.5rem)] md:px-8 md:pb-14 md:pt-24">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/75">
          {pkg.eyebrow}
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
          {pkg.title}
        </h1>
        <p className="mt-2 text-lg text-white/90 md:text-xl">{pkg.subtitle}</p>
      </div>
    </section>
  );
}
