"use client";

import Image from "next/image";
import { formatIsk } from "@/lib/trip-pricing/calculate";
import type { CheckoutSession } from "@/lib/checkout/types";
import { BookingShimmer } from "@/components/trip-package/BookingPriceShimmer";
import { RoomTypeBedIcon } from "@/components/trip-package/RoomTypeBedIcon";
import { formatRoomOccupancyLine } from "@/lib/checkout/extra-sidebar-lines";
import type { useCheckoutOrderSummary } from "./useCheckoutOrderSummary";

type SummaryState = ReturnType<typeof useCheckoutOrderSummary>;

type CheckoutOrderSummaryPanelProps = {
  summary: SummaryState;
  variant?: "sidebar" | "sheet";
  showHero?: boolean;
  showCta?: boolean;
  ctaDisabled?: boolean;
  ctaLoading?: boolean;
  onPrimaryAction?: () => void;
};

function formatChineseDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map((part) => Number(part));
  if (!year || !month || !day) return dateStr;
  return `${year}年${month}月${day}日`;
}

function formatTravelerSummary(session: CheckoutSession): string {
  const parts: string[] = [];
  if (session.adults > 0) parts.push(`${session.adults} 位成人`);
  if (session.children > 0) parts.push(`${session.children} 名兒童`);
  if (session.infants > 0) parts.push(`${session.infants} 名嬰兒`);
  return parts.join("、");
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="checkout-sidebar__meta-icon" aria-hidden="true">
      <rect x="4" y="5" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function SteeringIcon() {
  return (
    <svg viewBox="0 0 24 24" className="checkout-sidebar__detail-icon" aria-hidden="true">
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="checkout-sidebar__detail-icon" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path d="M6 20c0-3.5 2.7-6 6-6s6 2.5 6 6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function BedIcon() {
  return <RoomTypeBedIcon className="checkout-sidebar__detail-icon" />;
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="checkout-sidebar__detail-icon" aria-hidden="true">
      <path d="M5 16h14l-1.2-4.2A2 2 0 0 0 15.9 9H8.1a2 2 0 0 0-1.9 1.3L5 16Z" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <circle cx="8" cy="16" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function AccordionChevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`checkout-sidebar__accordion-chevron${open ? " checkout-sidebar__accordion-chevron--open" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckoutOrderSummaryPanel({
  summary,
  variant = "sidebar",
  showHero = true,
  showCta = false,
  ctaDisabled = false,
  ctaLoading = false,
  onPrimaryAction,
}: CheckoutOrderSummaryPanelProps) {
  const {
    session,
    loading,
    pricing,
    packagePricing,
    packageOpen,
    setPackageOpen,
    extrasOpen,
    setExtrasOpen,
    extraSidebarLines,
    extrasLinesLoading,
    accommodationLabel,
    vehicleTitle,
    vehicleGear,
    tripDays,
    tripNights,
    endDate,
    depositRate,
    deposit,
    roomCount,
    hasExtras,
    packageSubtotal,
    extrasSubtotal,
    heroImage,
    primaryCtaLabel,
  } = summary;

  const isSheet = variant === "sheet";

  return (
    <>
      {isSheet && heroImage && (
        <div className="checkout-summary-sheet__head">
          <div className="checkout-summary-sheet__thumb">
            <Image
              src={heroImage}
              alt=""
              width={72}
              height={48}
              className="checkout-summary-sheet__thumb-image"
            />
          </div>
          <h2 className="checkout-summary-sheet__title">{session.packageTitle}</h2>
        </div>
      )}

      {!isSheet && showHero && heroImage && (
        <div className="checkout-sidebar__hero">
          <Image
            src={heroImage}
            alt=""
            fill
            className="checkout-sidebar__hero-image"
            sizes="(min-width: 1024px) 360px, 100vw"
            priority
          />
        </div>
      )}

      <div className={isSheet ? "checkout-summary-sheet__body" : "checkout-sidebar__body"}>
        {!isSheet && (
          <h1 className="checkout-sidebar__headline">{session.packageTitle}</h1>
        )}

        <div className="checkout-sidebar__date-block">
          <div className="checkout-sidebar__date-row">
            <CalendarIcon />
            <p className="checkout-sidebar__date-range">
              {formatChineseDate(session.startDate)} - {formatChineseDate(endDate)}
            </p>
          </div>
          <p className="checkout-sidebar__duration">
            {isSheet
              ? `${tripDays}天/${tripNights}夜`
              : `${tripDays} 天 / ${tripNights} 夜`}
          </p>
        </div>

        <hr className="checkout-sidebar__divider" />

        <div className="checkout-sidebar__package-section">
          <button
            type="button"
            className={`checkout-sidebar__package-toggle${isSheet ? " checkout-sidebar__package-toggle--sheet" : ""}`}
            onClick={() => setPackageOpen((open) => !open)}
            aria-expanded={packageOpen}
          >
            <span>您的旅行團套餐</span>
            {isSheet ? (
              <AccordionChevron open={packageOpen} />
            ) : (
              <span
                className={`checkout-sidebar__chevron${packageOpen ? " checkout-sidebar__chevron--open" : ""}`}
                aria-hidden="true"
              >
                ›
              </span>
            )}
          </button>

          {packageOpen && (
            <ul className="checkout-sidebar__detail-list">
              <li className="checkout-sidebar__detail-item">
                <SteeringIcon />
                <span>自駕套餐</span>
              </li>
              <li className="checkout-sidebar__detail-item checkout-sidebar__detail-item--split">
                <div className="checkout-sidebar__detail-main">
                  <PersonIcon />
                  <span>{formatTravelerSummary(session)}</span>
                </div>
                <span className="checkout-sidebar__detail-price tabular-nums">
                  {loading ? (
                    <BookingShimmer variant="badge" />
                  ) : pricing ? (
                    `${formatIsk(pricing.perPersonDouble)} / 人`
                  ) : (
                    "—"
                  )}
                </span>
              </li>
              <li className="checkout-sidebar__detail-item checkout-sidebar__detail-item--rooms">
                <BedIcon />
                <div className="checkout-sidebar__detail-stack">
                  <span>
                    {accommodationLabel}（{roomCount} 個房間，{session.adults} 位成人）
                  </span>
                  <ul className="checkout-sidebar__room-sublist">
                    {session.roomOccupancies.map((room, index) => (
                      <li key={`room-${index}`}>
                        {formatRoomOccupancyLine(room)}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="checkout-sidebar__detail-item">
                <CarIcon />
                <span>
                  {vehicleTitle}
                  {vehicleGear ? `（${vehicleGear}）` : ""}
                </span>
              </li>
            </ul>
          )}

          <div className="checkout-sidebar__subtotal-row">
            <span>旅行團套餐小計</span>
            <span className="checkout-sidebar__subtotal-value tabular-nums">
              {loading || (hasExtras && !packagePricing) ? (
                <BookingShimmer variant="badge" />
              ) : packageSubtotal !== null ? (
                formatIsk(packageSubtotal)
              ) : (
                "—"
              )}
            </span>
          </div>
        </div>

        {hasExtras && (
          <div className="checkout-sidebar__package-section checkout-sidebar__extras-section">
            <button
              type="button"
              className={`checkout-sidebar__package-toggle${isSheet ? " checkout-sidebar__package-toggle--sheet" : ""}`}
              onClick={() => setExtrasOpen((open) => !open)}
              aria-expanded={extrasOpen}
            >
              <span>您的附加服務</span>
              {isSheet ? (
                <AccordionChevron open={extrasOpen} />
              ) : (
                <span
                  className={`checkout-sidebar__chevron${extrasOpen ? " checkout-sidebar__chevron--open" : ""}`}
                  aria-hidden="true"
                >
                  ›
                </span>
              )}
            </button>

            {extrasOpen && (
              <ul className="checkout-sidebar__extra-lines">
                {extraSidebarLines.map((line) => (
                  <li key={line.packageItemId} className="checkout-sidebar__extra-line">
                    <span className="checkout-sidebar__extra-line-label">
                      {line.name}
                      {line.participantLabel}
                    </span>
                    <span className="checkout-sidebar__extra-line-price tabular-nums">
                      {extrasLinesLoading ? (
                        <BookingShimmer variant="badge" />
                      ) : (
                        formatIsk(line.amount)
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="checkout-sidebar__subtotal-row">
              <span>附加小計</span>
              <span className="checkout-sidebar__subtotal-value tabular-nums">
                {loading || extrasLinesLoading || (hasExtras && !packagePricing) ? (
                  <BookingShimmer variant="badge" />
                ) : (
                  formatIsk(extrasSubtotal)
                )}
              </span>
            </div>
          </div>
        )}

        <hr className="checkout-sidebar__total-divider" />

        {pricing?.promoDiscount && pricing.promoDiscount > 0 && (
          <div className="checkout-sidebar__promo-row">
            <span>
              優惠碼
              {pricing.promoCodeApplied || session.promoCode
                ? `（${pricing.promoCodeApplied ?? session.promoCode}）`
                : ""}
            </span>
            <span className="checkout-sidebar__promo-value tabular-nums">
              -{formatIsk(pricing.promoDiscount)}
            </span>
          </div>
        )}

        <div className="checkout-sidebar__total-row checkout-sidebar__total-row--grand">
          <span>總計</span>
          <span className="checkout-sidebar__total-value tabular-nums">
            {loading ? (
              <BookingShimmer variant="total" />
            ) : pricing ? (
              <>
                {isSheet && <span className="checkout-sidebar__approx">大約 </span>}
                {formatIsk(pricing.total)}
              </>
            ) : (
              "—"
            )}
          </span>
        </div>

        {isSheet && pricing && !loading && (
          <div className="checkout-sidebar__isk-settlement">
            <p>將以冰島克朗（ISK）價格為準進行結算：</p>
            <p className="checkout-sidebar__isk-amount tabular-nums">
              {formatIsk(pricing.total)}
            </p>
          </div>
        )}

        {!showCta && pricing && !loading && !isSheet && (
          <p className="checkout-sidebar__deposit">
            訂金（{Math.round(depositRate * 100)}%）約 {formatIsk(deposit)}
          </p>
        )}

        {!isSheet && (
          <p className="checkout-sidebar__note">
            實際結算以冰島克朗（ISK）為準；顯示金額供參考。
          </p>
        )}

        {showCta && onPrimaryAction && (
          <button
            type="button"
            className="checkout-sidebar__cta checkout-mobile-chrome__cta"
            onClick={onPrimaryAction}
            disabled={ctaDisabled || ctaLoading}
          >
            {ctaLoading ? "建立訂單中…" : primaryCtaLabel}
          </button>
        )}
      </div>
    </>
  );
}
