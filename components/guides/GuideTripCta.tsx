"use client";

import Link from "next/link";
import { CHECKOUT_OFFICE_EMAIL } from "@/lib/checkout/manual-payment";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { localePath } from "@/lib/i18n/paths";
import { localizeText } from "@/lib/i18n/localize";

const DEFAULT_TRIP = {
  href: "/trips/iceland/self-drive/winter/4",
  title: "4 天 3 夜冰島南岸冬季自駕遊",
  blurb: "冰川健行與南岸精華，含住宿、租車與 20% 訂金即可預訂。",
};

type GuideTripCtaProps = {
  className?: string;
  variant?: "default" | "index";
  tripHref?: string;
  tripTitle?: string;
  tripBlurb?: string;
};

export function GuideTripCta({
  className = "",
  variant = "default",
  tripHref = DEFAULT_TRIP.href,
  tripTitle = DEFAULT_TRIP.title,
  tripBlurb = DEFAULT_TRIP.blurb,
}: GuideTripCtaProps) {
  const locale = useSiteLocale();

  if (variant === "index") {
    return (
      <aside
        className={`guide-trip-cta rounded-xl border border-foreground/10 bg-primary-surface/20 p-5 md:p-6 ${className}`.trim()}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-dark">
          {localizeText("下一步", locale)}
        </p>
        <h2 className="mt-1 text-lg font-bold text-foreground md:text-xl">
          {localizeText("準備好規劃行程了嗎？", locale)}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          {localizeText(
            "瀏覽全部自駕與跟團行程，依天數與季節篩選比較；不確定時也可直接聯絡顧問。",
            locale,
          )}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href={localePath("/trips", locale)} className="guide-trip-cta__primary">
            {localizeText("瀏覽全部行程", locale)}
          </Link>
          <a href={`mailto:${CHECKOUT_OFFICE_EMAIL}`} className="guide-trip-cta__secondary">
            {localizeText("聯絡顧問", locale)}
          </a>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className={`guide-trip-cta rounded-xl border border-foreground/10 bg-primary-surface/20 p-5 md:p-6 ${className}`.trim()}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-dark">
        {localizeText("推薦行程", locale)}
      </p>
      <h2 className="mt-1 text-lg font-bold text-foreground md:text-xl">
        {localizeText(tripTitle, locale)}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-foreground/70">
        {localizeText(tripBlurb, locale)}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link href={localePath(tripHref, locale)} className="guide-trip-cta__primary">
          {localizeText("查看行程與費用", locale)}
        </Link>
        <a href={`mailto:${CHECKOUT_OFFICE_EMAIL}`} className="guide-trip-cta__secondary">
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
