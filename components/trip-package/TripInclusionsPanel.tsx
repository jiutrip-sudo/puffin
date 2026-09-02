"use client";

import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { t } from "@/lib/i18n/messages";

type TripInclusionsPanelProps = {
  included: string[];
  excluded: string[];
};

export function TripInclusionsPanel({
  included,
  excluded,
}: TripInclusionsPanelProps) {
  const locale = useSiteLocale();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
        <h3 className="text-sm font-bold text-foreground">
          {t("trip.section.included", locale)}
        </h3>
        <ul className="mt-3 space-y-2">
          {included.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-relaxed text-foreground/80"
            >
              <span className="text-emerald-600" aria-hidden>+</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-foreground/15 bg-foreground/5 p-5">
        <h3 className="text-sm font-bold text-foreground">
          {t("trip.section.excluded", locale)}
        </h3>
        <ul className="mt-3 space-y-2">
          {excluded.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-relaxed text-foreground/80"
            >
              <span className="text-foreground/40" aria-hidden>−</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
