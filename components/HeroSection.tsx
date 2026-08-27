import { HeroMedia } from "./HeroMedia";
import { HeroMediaFrame } from "./HeroMediaFrame";
import { SiteHeader } from "./SiteHeader";

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  tagline?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  align?: "center" | "start";
  priority?: boolean;
  highlightTitle?: boolean;
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
  highlightTitle = false,
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
              ? `absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center md:px-8 ${footer ? "pb-24 md:pb-28" : ""} pt-16`
              : "absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-24 pt-16 text-center md:items-start md:px-8 md:pb-28 md:pt-20 md:text-left"
          }
        >
          <div
            className={
              isCentered
                ? "mx-auto w-full max-w-3xl"
                : "mx-auto w-full max-w-3xl md:max-w-7xl"
            }
          >
            {eyebrow && (
              <p className="hero-text-shadow-sm mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 md:mb-5">
                {eyebrow}
              </p>
            )}
            <h1
              className={
                highlightTitle
                  ? "hero-text-shadow text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
                  : isCentered
                    ? "hero-text-shadow text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl"
                    : "hero-text-shadow text-3xl font-extrabold text-white md:text-5xl"
              }
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={
                  isCentered
                    ? "hero-text-shadow-sm mx-auto mt-4 max-w-md text-base leading-relaxed text-white/90 md:mt-5"
                    : "hero-text-shadow-sm mt-3 max-w-lg text-sm text-white/90 md:mt-4"
                }
              >
                {subtitle}
              </p>
            )}
            {tagline && isCentered && (
              <p className="hero-text-shadow-sm mx-auto mt-4 max-w-md text-[10px] font-medium uppercase leading-relaxed tracking-[0.2em] text-white/65 md:text-xs">
                {tagline}
              </p>
            )}
            {children && (
              <div
                className={
                  isCentered
                    ? "mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row md:mt-8 md:gap-7"
                    : "mt-8 flex flex-col items-center md:items-start"
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
