"use client";

import { forwardRef, useEffect, useState } from "react";

const SECTIONS = [
  { id: "overview", label: "簡介" },
  { id: "route", label: "路線" },
  { id: "itinerary", label: "行程" },
  { id: "inclusions", label: "費用包含" },
  { id: "room-vehicle", label: "房型車型" },
  { id: "faq", label: "常見問題" },
  { id: "similar", label: "相似行程" },
] as const;

type TripSectionNavProps = {
  elevated?: boolean;
};

export const TripSectionNav = forwardRef<HTMLElement, TripSectionNavProps>(
  function TripSectionNav({ elevated = false }, ref) {
  const [activeId, setActiveId] = useState<string>("overview");

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

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={ref}
      className={`sticky top-[var(--trip-header-height)] z-[60] border-b transition-[background,backdrop-filter,box-shadow,border-color] duration-300 ${
        elevated
          ? "glass-white"
          : "border-foreground/10 bg-background/90 backdrop-blur-md"
      }`}
      aria-label="行程分頁"
    >
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 md:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActiveId(id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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
