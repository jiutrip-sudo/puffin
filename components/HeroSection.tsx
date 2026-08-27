import { HeroMedia } from "./HeroMedia";
import { HeroMediaFrame } from "./HeroMediaFrame";
import { SiteHeader } from "./SiteHeader";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  tagline?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  align?: "center" | "start";
  priority?: boolean;
};

export function HeroSection({
  title,
  subtitle,
  eyebrow,
  tagline,
  children,
  footer,
  header,
  align = "center",
  priority = true,
}: HeroSectionProps) {
  const isCentered = align === "center";

  return (
    <section className="relative w-full">
      <HeroMediaFrame>
        <HeroMedia priority={priority} />

        {header ?? <SiteHeader />}

        <div
          className={
            isCentered
              ? `absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center md:px-8 ${footer ? "pb-24 md:pb-28" : ""}`
              : "absolute inset-0 z-10 flex flex-col justify-end px-6 pb-24 pt-4 md:px-8 md:pb-28"
          }
        >
          <div
            className={
              isCentered
                ? "mx-auto w-full max-w-3xl"
                : "mx-auto w-full max-w-7xl"
            }
          >
            {eyebrow && (
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-white/70 md:mb-5">
                {eyebrow}
              </p>
            )}
            <h1
              className={
                isCentered
                  ? "text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl"
                  : "text-4xl font-extrabold text-white drop-shadow-sm md:text-5xl"
              }
            >
              {title}
            </h1>
            <p
              className={
                isCentered
                  ? "mx-auto mt-4 max-w-md text-base leading-relaxed text-white/80 md:mt-5"
                  : "mt-3 max-w-lg text-sm text-white/80"
              }
            >
              {subtitle}
            </p>
            {tagline && isCentered && (
              <p className="mx-auto mt-4 max-w-md text-[10px] font-medium uppercase leading-relaxed tracking-[0.2em] text-white/50 md:text-xs">
                {tagline}
              </p>
            )}
            {children && (
              <div
                className={
                  isCentered
                    ? "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-8"
                    : "mt-8"
                }
              >
                {children}
              </div>
            )}
          </div>
        </div>

        {footer && (
          <div className="absolute bottom-4 left-0 right-0 z-20 md:bottom-6">
            {footer}
          </div>
        )}
      </HeroMediaFrame>
    </section>
  );
}
