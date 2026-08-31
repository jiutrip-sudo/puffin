import Link from "next/link";
import { CHECKOUT_OFFICE_EMAIL } from "@/lib/checkout/manual-payment";

const FEATURED_TRIP_HREF = "/trips/iceland/self-drive/winter/4";
const FEATURED_TRIP_TITLE = "4 天 3 夜冰島南岸冬季自駕遊";

type GuideTripCtaProps = {
  className?: string;
};

export function GuideTripCta({ className = "" }: GuideTripCtaProps) {
  return (
    <aside
      className={`guide-trip-cta rounded-xl border border-foreground/10 bg-primary-surface/20 p-5 md:p-6 ${className}`.trim()}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-dark">
        推薦行程
      </p>
      <h2 className="mt-1 text-lg font-bold text-foreground md:text-xl">
        {FEATURED_TRIP_TITLE}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-foreground/70">
        冰川徒步與南岸精華，含住宿、租車與 20% 訂金即可預訂。
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link href={FEATURED_TRIP_HREF} className="guide-trip-cta__primary">
          查看行程與費用
        </Link>
        <a
          href={`mailto:${CHECKOUT_OFFICE_EMAIL}`}
          className="guide-trip-cta__secondary"
        >
          聯絡顧問
        </a>
        <Link href="/booking/lookup" className="guide-trip-cta__secondary">
          查詢訂單
        </Link>
      </div>
    </aside>
  );
}
