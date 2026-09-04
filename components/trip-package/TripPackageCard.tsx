"use client";

import Link from "next/link";
import { TripImage } from "@/components/trip-package/TripImage";
import { getTripPackageHref } from "@/lib/trip-options";
import type { CatalogFromPrice } from "@/lib/trip-packages/catalog";
import { t } from "@/lib/i18n/messages";
import type { SiteLocale } from "@/lib/site-locale";
import { localizeText } from "@/lib/i18n/localize";

export type TripPackageCardData = {
  tripKey: string;
  title: string;
  subtitle?: string;
  description?: string;
  durationLabel: string;
  heroImage?: string;
  tags?: string[];
  fromPrice?: CatalogFromPrice;
};

type TripPackageCardProps = {
  trip: TripPackageCardData;
  locale: SiteLocale;
  comingSoon?: boolean;
};

export function TripPackageCard({
  trip,
  locale,
  comingSoon = false,
}: TripPackageCardProps) {
  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-primary-surface/40">
        {trip.heroImage ? (
          <TripImage
            src={trip.heroImage}
            alt={trip.title}
            fill
            className={`object-cover transition-transform duration-500 ${
              comingSoon ? "opacity-80" : "group-hover:scale-105"
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-surface/60 to-primary-dark/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent" />
        {comingSoon && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-foreground/70 shadow-sm">
            {localizeText("即將推出", locale)}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 pt-12">
          <h3 className="line-clamp-2 text-sm font-bold leading-snug text-white md:text-base">
            {trip.title}
          </h3>
          {trip.subtitle ? (
            <p className="mt-1 line-clamp-1 text-xs text-white/80">{trip.subtitle}</p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-3 md:p-4">
        {comingSoon ? (
          <p className="mt-auto text-sm font-semibold text-foreground/45">
            {localizeText("敬請期待", locale)}
          </p>
        ) : trip.fromPrice ? (
          <div
            className="mt-auto flex items-center justify-between gap-2 border-t border-foreground/8 pt-3"
            title={trip.fromPrice.assumptions}
          >
            <p className="min-w-0 text-sm font-bold tabular-nums text-foreground">
              <span className="mr-1 text-[10px] font-semibold text-foreground/55">
                {t("common.perPerson", locale)}
              </span>
              {trip.fromPrice.displayLabel}
              <span className="ml-0.5 text-xs font-semibold text-foreground/60">
                {t("common.from", locale)}
              </span>
            </p>
            <span
              className="shrink-0 text-lg font-semibold text-primary-dark transition-transform group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </div>
        ) : (
          <div className="mt-auto flex justify-end border-t border-foreground/8 pt-3">
            <span
              className="text-lg font-semibold text-primary-dark transition-transform group-hover:translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </div>
        )}
      </div>
    </>
  );

  if (comingSoon) {
    return (
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-primary-surface/15 opacity-90">
        {content}
      </article>
    );
  }

  return (
    <Link
      href={getTripPackageHref(trip.tripKey, locale)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-primary-surface/15 transition-all hover:border-primary/30 hover:bg-primary-surface/25 hover:shadow-lg hover:shadow-primary/10"
    >
      {content}
    </Link>
  );
}
