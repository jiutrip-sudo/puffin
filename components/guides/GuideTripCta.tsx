"use client";

import Link from "next/link";
import { CHECKOUT_OFFICE_EMAIL } from "@/lib/checkout/manual-payment";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { localePath } from "@/lib/i18n/paths";
import { localizeText } from "@/lib/i18n/localize";

const FEATURED_TRIP_HREF = "/trips/iceland/self-drive/winter/4";
const FEATURED_TRIP_TITLE = "4 天 3 夜冰島南岸冬季自駕遊";

type GuideTripCtaProps = {
  className?: string;
};

export function GuideTripCta({ className = "" }: GuideTripCtaProps) {
  const locale = useSiteLocale();

  return (
    <aside
      className={`guide-trip-cta rounded-xl border border-foreground/10 bg-primary-surface/20 p-5 md:p-6 ${className}`.trim()}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-dark">
        {localizeText("推薦行程", locale)}
      </p>
      <h2 className="mt-1 text-lg font-bold text-foreground md:text-xl">
        {localizeText(FEATURED_TRIP_TITLE, locale)}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-foreground/70">
        {localizeText(
          "冰川徒步與南岸精華，含住宿、租車與 20% 訂金即可預訂。",
          locale,
        )}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href={localePath(FEATURED_TRIP_HREF, locale)}
          className="guide-trip-cta__primary"
        >
          {localizeText("查看行程與費用", locale)}
        </Link>
        <a
          href={`mailto:${CHECKOUT_OFFICE_EMAIL}`}
          className="guide-trip-cta__secondary"
        >
          {localizeText("聯絡顧問", locale)}
        </a>
        <Link
          href={localePath("/booking/lookup", locale)}
          className="guide-trip-cta__secondary"
        >
          {localizeText("查詢訂單", locale)}
        </Link>
      </div>
    </aside>
  );
}
