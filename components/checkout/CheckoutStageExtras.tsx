"use client";

import { TripImage } from "@/components/trip-package/TripImage";
import Link from "next/link";
import { CheckoutPromoCode } from "./CheckoutPromoCode";
import { useEffect, useMemo, useState } from "react";
import { useFormatMoney } from "@/lib/i18n/use-format-money";
import type { CheckoutSession } from "@/lib/checkout/types";
import {
  CHECKOUT_PAYMENT_OPTIONS,
  CHECKOUT_BANK_ACCOUNT,
} from "@/lib/checkout/manual-payment";
import { buildBookingLookupPath } from "@/lib/booking/booking-lookup-url";
import { CheckoutSuccessIcon } from "./CheckoutSuccessIcon";
import {
  CHECKOUT_PRIVACY_POLICY_URL,
  CHECKOUT_SERVICE_TERMS_PARAGRAPHS,
  CHECKOUT_SERVICE_TERMS_URL,
} from "@/lib/checkout/checkout-service-terms";
import { toggleExtraSelection } from "@/lib/checkout/extra-selection";
import { upsertExtraSelection, type ExtraParticipantCounts } from "@/lib/checkout/extra-participants";
import type {
  CorivoOptionalExtra,
  CorivoOptionalExtraDay,
  CorivoOptionalExtraDeparture,
} from "@/lib/checkout/corivo-optional-extras";
import {
  formatCheckoutExtraDayDate,
  getCheckoutExtraDayTitle,
} from "@/lib/checkout/extra-day-labels";
import { BookingShimmer } from "@/components/trip-package/BookingPriceShimmer";
import { TripSpotDetailModal } from "@/components/trip-package/TripSpotDetailModal";
import { resolveExtraTripAttraction } from "@/lib/checkout/extra-to-attraction";
import { CheckoutExtraAddModal } from "./CheckoutExtraAddModal";

type ExtraAddTarget = {
  extra: CorivoOptionalExtra;
  departure: CorivoOptionalExtraDeparture;
};

type StageExtrasProps = {
  session: CheckoutSession;
  onChange: (patch: Partial<CheckoutSession>) => void;
};

export function CheckoutStageExtras({
  session,
  onChange,
}: StageExtrasProps) {
  const { formatMoney } = useFormatMoney();
  const [days, setDays] = useState<CorivoOptionalExtraDay[]>([]);
  const [currency, setCurrency] = useState("ISK");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [infoExtra, setInfoExtra] = useState<CorivoOptionalExtra | null>(null);
  const [addTarget, setAddTarget] = useState<ExtraAddTarget | null>(null);

  const requestBody = useMemo(
    () => ({
      packageId: session.packageId,
      startDate: session.startDate,
      adults: session.adults,
      children: session.children,
      infants: session.infants,
    }),
    [session],
  );

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch("/api/checkout/optional-extras", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then(async (response) => {
        const data = (await response.json()) as {
          days?: CorivoOptionalExtraDay[];
          currency?: string;
          error?: string;
        };
        if (!response.ok) {
          throw new Error(data.error ?? "取得活動目錄失敗");
        }
        if (!cancelled) {
          setDays(data.days ?? []);
          setCurrency(data.currency ?? "ISK");
        }
      })
      .catch((fetchError) => {
        if (!cancelled) {
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : "取得活動目錄時發生錯誤",
          );
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [requestBody]);

  const selectedIds = new Set(
    session.selectedExtras.map((extra) => extra.packageItemId),
  );

  const handleOpenAddModal = (
    extra: CorivoOptionalExtraDay["extras"][number],
    departure: CorivoOptionalExtraDeparture,
  ) => {
    setAddTarget({ extra, departure });
  };

  const handleConfirmAdd = (
    extra: CorivoOptionalExtraDay["extras"][number],
    departureStartTime: string,
    counts: ExtraParticipantCounts,
  ) => {
    const next = upsertExtraSelection(
      session.selectedExtras,
      {
        packageItemId: extra.packageItemId,
        productId: extra.productId,
        packageTourDay: extra.packageTourDay,
        departureStartTime,
        minTravelers: extra.minTravelers,
        maxTravelers: extra.maxTravelers,
      },
      session.travelers,
      counts,
      session,
    );
    onChange({ selectedExtras: next });
  };
  const infoAttraction = useMemo(
    () =>
      infoExtra
        ? resolveExtraTripAttraction(session.packageId, infoExtra)
        : null,
    [infoExtra, session.packageId],
  );

  const totalExtras = days.reduce((sum, day) => sum + day.extras.length, 0);

  return (
    <div className="checkout-stage">
      <header className="checkout-extra-hero">
        <div className="checkout-extra-hero__title-row">
          <h2 className="checkout-extra-hero__title">套餐中的特色體驗</h2>
          <span className="checkout-extra-hero__plus" aria-hidden="true">+</span>
        </div>
        <p className="checkout-extra-hero__desc">
          您可以選擇額外的自選項目來豐富您的旅程
        </p>
      </header>

      {loading && (
        <div className="checkout-extra-loading">
          <BookingShimmer variant="total" />
          <p className="checkout-block__hint">載入活動目錄…</p>
        </div>
      )}

      {error && (
        <p className="checkout-error" role="alert">{error}</p>
      )}

      {!loading && !error && totalExtras === 0 && (
        <div className="checkout-placeholder-card">
          <p className="text-sm text-foreground/70">
            此出發日期暫無可加購活動，可直接前往填寫旅客資訊。
          </p>
        </div>
      )}

      {!loading && !error && days.length > 0 && (
        <div className="checkout-extra-days">
          {days.map((day) => {
            const dayTitle = getCheckoutExtraDayTitle(
              session.packageId,
              day.packageTourDay,
            );

            return (
              <section key={day.packageTourDay} className="checkout-extra-day">
                <div className="checkout-extra-day__header">
                  <h3 className="checkout-extra-day__heading">
                    第 {day.packageTourDay} 天
                    {dayTitle ? ` - ${dayTitle}` : ""}
                  </h3>
                  <p className="checkout-extra-day__date">
                    <CheckoutExtraCalendarIcon />
                    <span>{formatCheckoutExtraDayDate(day.date)}</span>
                  </p>
                </div>

                {day.extras.length === 0 ? (
                  <p className="checkout-block__hint">本日無可加購項目</p>
                ) : (
                  <ul className="checkout-extra-grid">
                    {day.extras.map((extra) => {
                      const departure = extra.departures[0];
                      if (!departure) return null;

                      const selected = selectedIds.has(extra.packageItemId);
                      const participantCount = session.adults + session.children;
                      const disabled =
                        participantCount < extra.minTravelers ||
                        participantCount > extra.maxTravelers;
                      const perPerson =
                        extra.priceFromPerTravelerInCurrency > 0
                          ? extra.priceFromPerTravelerInCurrency
                          : departure.priceInCurrency;

                      return (
                        <li key={extra.packageItemId}>
                          <article
                            className={`checkout-extra-card${selected ? " checkout-extra-card--selected" : ""}`}
                          >
                            <div className="checkout-extra-card__media">
                              {extra.imageUrl ? (
                                <TripImage
                                  src={extra.imageUrl}
                                  alt=""
                                  fill
                                  className="checkout-extra-card__image"
                                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                                />
                              ) : (
                                <div
                                  className="checkout-extra-card__image checkout-extra-card__image--placeholder"
                                  aria-hidden="true"
                                />
                              )}
                            </div>

                            <div className="checkout-extra-card__body">
                              <p className="checkout-extra-card__name">
                                {extra.name}
                              </p>
                              <p className="checkout-extra-card__price tabular-nums">
                                {formatMoney(perPerson)}
                                <span className="checkout-extra-card__per-person">
                                  / 人
                                </span>
                              </p>
                              {disabled && (
                                <p className="checkout-extra-card__warn">
                                  目前旅客人數不符合此活動要求
                                </p>
                              )}
                              <div className="checkout-extra-card__actions">
                                <button
                                  type="button"
                                  className="checkout-extra-card__info-btn"
                                  onClick={() => setInfoExtra(extra)}
                                >
                                  查看資訊
                                </button>
                                <button
                                  type="button"
                                  className={`checkout-extra-card__add-btn${selected ? " checkout-extra-card__add-btn--selected" : ""}`}
                                  disabled={disabled && !selected}
                                  onClick={() => handleOpenAddModal(extra, departure)}
                                >
                                  {selected ? "已添加" : "添加"}
                                </button>
                              </div>
                            </div>
                          </article>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      )}

      {addTarget && (
        <CheckoutExtraAddModal
          extra={addTarget.extra}
          departure={addTarget.departure}
          session={session}
          currency={currency}
          onClose={() => setAddTarget(null)}
          onConfirm={(counts) =>
            handleConfirmAdd(
              addTarget.extra,
              addTarget.departure.startTime,
              counts,
            )
          }
        />
      )}

      {infoAttraction && (
        <TripSpotDetailModal
          spot={infoAttraction}
          onClose={() => setInfoExtra(null)}
        />
      )}
    </div>
  );
}

function CheckoutExtraCalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="checkout-extra-day__calendar" aria-hidden="true">
      <rect
        x="4"
        y="5"
        width="16"
        height="16"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M4 9h16M8 3v4M16 3v4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

type StagePaymentProps = {
  session: CheckoutSession;
  depositRate: number;
  loading: boolean;
  error: string | null;
  pricingLoading: boolean;
  promoDiscount: number;
  onChange: (patch: Partial<CheckoutSession>) => void;
  onSubmit: () => void;
};

export function CheckoutStagePayment({
  session,
  depositRate,
  loading,
  error,
  pricingLoading,
  promoDiscount,
  onChange,
  onSubmit,
}: StagePaymentProps) {
  const depositPercent = Math.round(depositRate * 100);

  return (
    <div className="checkout-stage checkout-stage--payment">
      <h2 className="checkout-block__title">付款</h2>

      <div className="checkout-payment-section checkout-payment-section--promo">
        <CheckoutPromoCode
          session={session}
          appliedCode={session.promoCode}
          promoDiscount={promoDiscount}
          pricingLoading={pricingLoading}
          onApply={(code) => onChange({ promoCode: code })}
          onRemove={() => onChange({ promoCode: "" })}
        />
      </div>

      <div className="checkout-payment-section">
        <h3 className="checkout-payment-section__title">您打算支付多少？</h3>
        <div className="checkout-payment-options">
          <label className="checkout-radio">
            <input
              type="radio"
              name="payOption"
              checked={!session.payFullAmount}
              onChange={() => onChange({ payFullAmount: false })}
            />
            <span>先付訂金（{depositPercent}%）</span>
          </label>
          <label className="checkout-radio">
            <input
              type="radio"
              name="payOption"
              checked={session.payFullAmount}
              onChange={() => onChange({ payFullAmount: true })}
            />
            <span>一次付清全額</span>
          </label>
        </div>
      </div>

      <div className="checkout-payment-section">
        <h3 className="checkout-payment-section__title">您打算如何付款？</h3>
        <div className="checkout-payment-method-grid">
          {CHECKOUT_PAYMENT_OPTIONS.map((option) => {
            const selected = session.paymentMethod === option.id;
            return (
              <button
                key={option.id}
                type="button"
                className={`checkout-payment-method${selected ? " checkout-payment-method--selected" : ""}`}
                onClick={() => onChange({ paymentMethod: option.id })}
              >
                <span className="checkout-payment-method__label">
                  {option.label}
                </span>
                <span className="checkout-payment-method__summary">
                  {option.summary}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {session.paymentMethod === "bank_transfer" && (
        <dl className="checkout-bank-account checkout-bank-account--stage">
          <p className="checkout-bank-account__heading">匯款帳戶</p>
          <div>
            <dt>戶名</dt>
            <dd>{CHECKOUT_BANK_ACCOUNT.holderName}</dd>
          </div>
          <div>
            <dt>機構名稱代號</dt>
            <dd>{CHECKOUT_BANK_ACCOUNT.institutionLine}</dd>
          </div>
          <div>
            <dt>帳號</dt>
            <dd className="checkout-bank-account__number">
              {CHECKOUT_BANK_ACCOUNT.accountNumber}
            </dd>
          </div>
        </dl>
      )}

      <section className="checkout-stage-card checkout-terms-card">
        <h3 className="checkout-terms-card__title">服務條款</h3>
        <div className="checkout-terms-card__body">
          {CHECKOUT_SERVICE_TERMS_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <label className="checkout-terms-card__agree">
          <input
            type="checkbox"
            checked={session.acceptTerms}
            onChange={(event) =>
              onChange({ acceptTerms: event.target.checked })
            }
          />
          <span className="checkout-terms-card__agree-label">
            我同意
            <a
              href={CHECKOUT_SERVICE_TERMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="checkout-terms-card__inline-link"
            >
              服務條款
            </a>
            及
            <a
              href={CHECKOUT_PRIVACY_POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="checkout-terms-card__inline-link"
            >
              隱私權政策
            </a>
          </span>
          <a
            href={CHECKOUT_SERVICE_TERMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="checkout-terms-card__link"
            aria-label="在新分頁開啟完整服務條款"
          >
            <ExternalLinkIcon />
          </a>
        </label>
      </section>

      {error && (
        <p className="checkout-error mt-4" role="alert">{error}</p>
      )}

      <button
        type="button"
        className="checkout-primary-btn mt-6 checkout-stage--payment__submit-desktop"
        disabled={loading || !session.acceptTerms}
        onClick={onSubmit}
      >
        {loading ? "建立訂單中…" : "確認預訂"}
      </button>
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="checkout-terms-card__link-icon" aria-hidden="true">
      <path
        d="M14 5h5v5M10 14 19 5M15 5h4v4M10 14v5h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function resolveLeadTravelerEmail(session: CheckoutSession): string {
  const lead =
    session.travelers.find((traveler) => traveler.type === "ADULT") ??
    session.travelers[0];
  return lead?.email?.trim().toLowerCase() ?? "";
}

function CopyConfirmationCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      className="checkout-copy-btn"
      onClick={() => void handleCopy()}
    >
      {copied ? "已複製" : "複製訂單號"}
    </button>
  );
}

type StageConfirmationProps = {
  session: CheckoutSession;
  packageTitle: string;
  confirmationCode: string | null;
  depositRate: number;
  totalAmount: number | null;
  customerEmailSent: boolean;
  backHref: string;
};

export function CheckoutStageConfirmation({
  session,
  packageTitle,
  confirmationCode,
  depositRate,
  totalAmount,
  customerEmailSent,
  backHref,
}: StageConfirmationProps) {
  const { formatMoney, fxDisclaimer } = useFormatMoney();
  const leadEmail = resolveLeadTravelerEmail(session);
  const lookupHref = confirmationCode
    ? buildBookingLookupPath(confirmationCode, leadEmail)
    : "/booking/lookup";

  const amountDue =
    totalAmount !== null
      ? session.payFullAmount
        ? totalAmount
        : Math.round(totalAmount * depositRate)
      : null;

  return (
    <div className="checkout-stage checkout-confirmation">
      <header className="checkout-confirmation-hero checkout-reveal checkout-reveal--1">
        <CheckoutSuccessIcon />
        <h2 className="checkout-block__title">預訂申請</h2>
        <p className="checkout-success-banner checkout-success-banner--celebrate">
          預訂申請已收到！
        </p>
      </header>

      <p className="checkout-block__desc checkout-reveal checkout-reveal--2">
        {packageTitle}
      </p>
      {confirmationCode && (
        <div className="checkout-reference checkout-reveal checkout-reveal--3">
          <span>訂單號：</span>
          <strong className="checkout-reference__code">{confirmationCode}</strong>
        </div>
      )}
      {confirmationCode && (
        <div className="checkout-confirmation-lookup checkout-reveal checkout-reveal--3">
          <p className="checkout-block__hint">
            請保存訂單號；確認信寄出後，也可隨時查詢申請進度。
          </p>
          <div className="checkout-confirmation-lookup__actions">
            <Link href={lookupHref} className="checkout-primary-btn">
              查詢訂單狀態
            </Link>
            <CopyConfirmationCode code={confirmationCode} />
          </div>
        </div>
      )}

      <div className="checkout-manual-payment-summary checkout-reveal checkout-reveal--4">
        <p>
          我們已收到您的預訂申請。專員將於 <strong>3 個工作天內</strong>與您聯絡，向供應商確認可成團後另行通知付款方式。
        </p>
        {amountDue !== null && (
          <p className="checkout-block__hint mt-2">
            參考價格：
            <strong className="tabular-nums">{formatMoney(amountDue)}</strong>
            {session.payFullAmount ? "（全額）" : "（訂金）"}
          </p>
        )}
        <p className="checkout-block__hint mt-2">{fxDisclaimer}</p>
      </div>

      <p className="checkout-block__desc mt-4 checkout-reveal checkout-reveal--6">
        {customerEmailSent
          ? "確認信已寄至您填寫的 Email，請查收申請摘要。"
          : "若未收到 Email，請聯絡顧問確認申請狀態。"}
        供應商確認後，我們將寄送付款說明。
      </p>

      <div
        className="checkout-actions checkout-step-footer checkout-confirmation-actions checkout-reveal checkout-reveal--7"
      >
        <Link
          href={backHref}
          className="checkout-ghost-btn checkout-step-footer__back"
        >
          ‹ 返回行程
        </Link>
        <Link
          href="/"
          className="checkout-primary-btn checkout-step-footer__next checkout-confirmation-actions__home"
        >
          返回首頁
        </Link>
      </div>
      <p className="checkout-block__hint checkout-confirmation-links checkout-reveal checkout-reveal--8">
        <Link href={lookupHref}>查詢訂單</Link>
        <span aria-hidden="true"> · </span>
        <Link href={CHECKOUT_SERVICE_TERMS_URL}>服務條款</Link>
        <span aria-hidden="true"> · </span>
        <Link href={CHECKOUT_PRIVACY_POLICY_URL}>隱私權政策</Link>
        <span aria-hidden="true"> · </span>
        <Link href="/iceland">冰島行程</Link>
        <span aria-hidden="true"> · </span>
        <Link href="/taiwan">台灣行程</Link>
      </p>
    </div>
  );
}
