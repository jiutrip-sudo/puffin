import { HeroMedia } from "./HeroMedia";
import { SiteHeader } from "./SiteHeader";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  tagline?: string;
  children?: React.ReactNode;
};

export function HeroSection({
  title,
  subtitle,
  eyebrow,
  tagline,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative w-full">
      <div
        className="relative w-full min-h-[85vh] overflow-hidden md:min-h-0 md:aspect-video"
      >
        <HeroMedia />

        <SiteHeader />

        <div
          className="absolute inset-0 z-10 flex min-h-[85vh] flex-col justify-end px-6 pb-32 pt-28 md:min-h-0 md:px-8 md:pb-10 md:pt-24"
        >
          <div className="mx-auto grid w-full max-w-7xl items-end gap-8 md:grid-cols-2 md:gap-12">
            <div>
              {eyebrow && (
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-white/70 md:mb-5">
                  {eyebrow}
                </p>
              )}
              <h1
                className="text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl"
              >
                {title}
              </h1>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-white/80 md:mt-5 md:text-base">
                {subtitle}
              </p>
              {children && (
                <div className="mt-10 flex flex-col gap-4 md:mt-8 md:flex-row md:flex-wrap">
                  {children}
                </div>
              )}
            </div>

            {tagline && (
              <div className="hidden md:block md:pt-2">
                <p className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.2em] text-white/55 md:text-xs">
                  {tagline}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
