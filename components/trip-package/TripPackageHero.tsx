import { TripImage } from "@/components/trip-package/TripImage";
import type { TripPackage } from "@/lib/trip-packages/types";

type TripPackageHeroProps = {
  package: TripPackage;
};

export function TripPackageHero({ package: pkg }: TripPackageHeroProps) {
  return (
    <section className="trip-package-hero">
      <TripImage
        src={pkg.heroImage}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="trip-package-hero__content relative mx-auto max-w-7xl px-4 pb-10 pt-[calc(env(safe-area-inset-top)+4.5rem)] md:px-8 md:pb-14 md:pt-24">
        <p className="font-display hero-text-shadow-sm text-[10px] font-medium uppercase tracking-[0.25em] text-white/85">
          {pkg.eyebrow}
        </p>
        <h1 className="hero-text-shadow mt-2 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
          {pkg.title}
        </h1>
        <p className="hero-text-shadow-sm mt-2 text-lg text-white/92 md:text-xl">
          {pkg.subtitle}
        </p>
      </div>
    </section>
  );
}
