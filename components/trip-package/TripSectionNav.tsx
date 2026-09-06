"use client";

import { forwardRef, useEffect, useState } from "react";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { t } from "@/lib/i18n/messages";
import { localizeText } from "@/lib/i18n/localize";

type TripSectionNavProps = {
  elevated?: boolean;
  /** 捲動離開 Hero 後收斂高度，減少行動版 sticky 占用 */
  compact?: boolean;
  /** 無租車選項的跟團套餐使用「房型」 */
  roomSectionLabel?: string;
};

export const TripSectionNav = forwardRef<HTMLElement, TripSectionNavProps>(
  function TripSectionNav(
    { elevated = false, compact = false, roomSectionLabel = "房型車型" },
    ref,
  ) {
  const locale = useSiteLocale();
  const [activeId, setActiveId] = useState<string>("overview");

  const sections = [
    { id: "overview", label: t("trip.section.overview", locale) },
    { id: "route", label: t("trip.nav.route", locale) },
    { id: "itinerary", label: t("trip.nav.itineraryShort", locale) },
    { id: "inclusions", label: t("trip.nav.inclusionsShort", locale) },
    { id: "room-vehicle", label: localizeText(roomSectionLabel, locale) },
    { id: "faq", label: t("trip.section.faq", locale) },
    { id: "similar", label: t("trip.nav.similarShort", locale) },
  ] as const;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [roomSectionLabel, locale]);

  return (
    <nav
      ref={ref}
      className={`sticky top-[var(--trip-header-height)] z-[60] border-b transition-[background,backdrop-filter,box-shadow,border-color] duration-300 ${
        elevated
          ? "glass-white"
          : "border-foreground/10 bg-background/90 backdrop-blur-md"
      }`}
      aria-label={t("trip.nav.sections", locale)}
    >
      <div
        className={`mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 md:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          compact ? "py-1.5 md:py-2" : "py-2"
        }`}
      >
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActiveId(id)}
            className={`shrink-0 rounded-full font-medium transition-colors ${
              compact ? "px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm" : "px-4 py-2 text-sm"
            } ${
              activeId === id
                ? "bg-primary-dark text-white"
                : "text-foreground/70 hover:bg-primary/10 hover:text-foreground"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
},
);
