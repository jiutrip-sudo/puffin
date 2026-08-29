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
    <section className="relative isolate w-full">
      <div className="site-header-shell pointer-events-none fixed inset-x-0 top-0 z-[90]">
        <div className="pointer-events-auto">
          {header ?? <SiteHeader />}
        </div>
      </div>

      <HeroMediaFrame>
        <HeroMedia priority={priority} />

        <div
          className={
            isCentered
              ? `pointer-events-none absolute inset-0 z-10 flex flex-col px-5 text-center max-md:pt-[calc(env(safe-area-inset-top)+3.25rem)] max-md:pb-[calc(env(safe-area-inset-bottom)+0.5rem)] md:px-8 md:pt-16 ${footer ? "max-md:justify-between md:justify-center" : "justify-center"} ${footer ? "md:pb-28" : ""}`
              : "pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-24 pt-16 text-center md:items-start md:px-8 md:pb-28 md:pt-20 md:text-left"
          }
        >
          <div
            className={
              isCentered && footer
                ? "pointer-events-none flex min-h-0 flex-1 flex-col items-center justify-center max-md:py-2 md:contents"
                : isCentered
                  ? "contents"
                  : ""
            }
          >
            <div
              className={
                isCentered
                  ? "pointer-events-auto mx-auto w-full max-w-3xl"
                  : "pointer-events-auto mx-auto w-full max-w-3xl md:max-w-7xl"
              }
            >
            {eyebrow && (
              <p className="font-display hero-text-shadow-sm mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 sm:mb-4 md:mb-5">
                {eyebrow}
              </p>
            )}
            <h1
              className={
                highlightTitle
                  ? "hero-text-shadow text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl"
                  : isCentered
                    ? "hero-text-shadow text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.5rem] md:text-5xl lg:text-6xl"
                    : "hero-text-shadow text-3xl font-extrabold text-white md:text-5xl"
              }
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={
                  isCentered
                    ? "hero-text-shadow-sm mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base md:mt-5"
                    : "hero-text-shadow-sm mt-3 max-w-lg text-sm text-white/90 md:mt-4"
                }
              >
                {subtitle}
              </p>
            )}
            {tagline && isCentered && (
              <p className="font-display hero-text-shadow-sm mx-auto mt-2 hidden max-w-md text-[10px] font-medium uppercase leading-relaxed tracking-[0.2em] text-white/65 sm:mt-4 sm:block md:text-xs">
                {tagline}
              </p>
            )}
            {children && (
              <div
                className={
                  isCentered
                    ? "mt-5 flex flex-col items-center justify-center gap-4 sm:mt-8 sm:flex-row sm:gap-5 md:mt-8 md:gap-7"
                    : "mt-8 flex flex-col items-center md:items-start"
                }
              >
                {children}
              </div>
            )}
          </div>
          </div>

          {footer && (
            <div className="pointer-events-auto relative z-20 w-full shrink-0 max-md:pt-2 md:absolute md:bottom-6 md:left-0 md:right-0 md:pt-0">
              {footer}
            </div>
          )}
        </div>
      </HeroMediaFrame>
    </section>
  );
}
