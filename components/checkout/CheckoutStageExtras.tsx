"use client";

import { useEffect, useMemo, useState } from "react";
import { formatIsk } from "@/lib/trip-pricing/calculate";
import type { CheckoutSession } from "@/lib/checkout/types";
import {
  CHECKOUT_PAYMENT_OPTIONS,
  CHECKOUT_BANK_ACCOUNT,
  getManualPaymentInstructions,
} from "@/lib/checkout/manual-payment";
import {
  formatExtraDepartureLabel,
  toggleExtraSelection,
} from "@/lib/checkout/extra-selection";
import type { CorivoOptionalExtraDay } from "@/lib/checkout/corivo-optional-extras";
import { BookingShimmer } from "@/components/trip-package/BookingPriceShimmer";

type StageExtrasProps = {
  session: CheckoutSession;
  onChange: (patch: Partial<CheckoutSession>) => void;
  onContinue: () => void;
};

export function CheckoutStageExtras({
  session,
  onChange,
  onContinue,
}: StageExtrasProps) {
  const [days, setDays] = useState<CorivoOptionalExtraDay[]>([]);
  const [currency, setCurrency] = useState("ISK");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const handleToggle = (
    extra: CorivoOptionalExtraDay["extras"][number],
    departureStartTime: string,
  ) => {
    const next = toggleExtraSelection(
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
    );
    onChange({ selectedExtras: next });
  };

  const totalExtras = days.reduce((sum, day) => sum + day.extras.length, 0);

  return (
    <div className="checkout-stage">
      <h2 className="checkout-block__title">活動與一日遊</h2>
      <p className="checkout-block__desc">
        依行程日加購南岸冰川徒步、藍冰洞、溫泉等自選項目。價格以冰島克朗（ISK）顯示。
      </p>

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
          {days.map((day) => (
            <section key={day.packageTourDay} className="checkout-extra-day">
              <h3 className="checkout-extra-day__title">
                第 {day.packageTourDay} 天
                <span className="checkout-extra-day__date">
                  {formatDayDate(day.date)}
                </span>
              </h3>

              {day.extras.length === 0 ? (
                <p className="checkout-block__hint">本日無可加購項目</p>
              ) : (
                <ul className="checkout-extra-list">
                  {day.extras.map((extra) => {
                    const departure = extra.departures[0];
                    if (!departure) return null;

                    const selected = selectedIds.has(extra.packageItemId);
                    const participantCount = session.adults + session.children;
                    const disabled =
                      participantCount < extra.minTravelers ||
                      participantCount > extra.maxTravelers;

                    return (
                      <li key={extra.packageItemId}>
                        <button
                          type="button"
                          className={`checkout-extra-card${selected ? " checkout-extra-card--selected" : ""}`}
                          disabled={disabled}
                          onClick={() =>
                            handleToggle(extra, departure.startTime)
                          }
                        >
                          <div className="checkout-extra-card__body">
                            <p className="checkout-extra-card__name">
                              {extra.name}
                            </p>
                            {extra.durationLabel && (
                              <p className="checkout-extra-card__meta">
                                {extra.durationLabel}
                              </p>
                            )}
                            <p className="checkout-extra-card__meta">
                              {formatExtraDepartureLabel(departure.startTime)}
                              {extra.minTravelers > 1
                                ? ` · ${extra.minTravelers}–${extra.maxTravelers} 人`
                                : ""}
                            </p>
                            {disabled && (
                              <p className="checkout-extra-card__warn">
                                目前旅客人數不符合此活動要求
                              </p>
                            )}
                          </div>
                          <div className="checkout-extra-card__price">
                            <span className="checkout-extra-card__amount tabular-nums">
                              {formatIsk(departure.priceInCurrency)}
                            </span>
                            <span className="checkout-extra-card__currency">
                              {currency}
                            </span>
                            {extra.priceFromPerTravelerInCurrency > 0 &&
                              session.adults + session.children > 1 && (
                                <span className="checkout-extra-card__per-person">
                                  約 {formatIsk(extra.priceFromPerTravelerInCurrency)} / 人
                                </span>
                              )}
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          ))}
        </div>
      )}

      <button
        type="button"
        className="checkout-primary-btn mt-6"
        onClick={onContinue}
      >
        {session.selectedExtras.length > 0
          ? `已選 ${session.selectedExtras.length} 項，填寫旅客資訊`
          : "略過，填寫旅客資訊"}
      </button>
    </div>
  );
}

function formatDayDate(dateString: string): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("zh-TW", {
    month: "short",
    day: "numeric",
    weekday: "short",
  });
}

type StagePaymentProps = {
  session: CheckoutSession;
  depositRate: number;
  loading: boolean;
  error: string | null;
  onChange: (patch: Partial<CheckoutSession>) => void;
  onSubmit: () => void;
};

export function CheckoutStagePayment({
  session,
  depositRate,
  loading,
  error,
  onChange,
  onSubmit,
}: StagePaymentProps) {
  const depositPercent = Math.round(depositRate * 100);

  return (
    <div className="checkout-stage">
      <h2 className="checkout-block__title">付款方式</h2>
      <p className="checkout-block__desc">
        本網站暫不提供線上刷卡。確認預訂後，訂單即成立；請依您選擇的方式於期限內完成付款，顧問將人工確認並更新訂單狀態。
      </p>

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

      <label className="checkout-terms mt-6 flex items-start gap-3">
        <input
          type="checkbox"
          checked={session.acceptTerms}
          onChange={(e) => onChange({ acceptTerms: e.target.checked })}
        />
        <span className="text-sm leading-relaxed text-foreground/80">
          我已閱讀並同意服務條款；預訂者代表全團旅客接受條款並負責付款。
        </span>
      </label>

      {error && (
        <p className="checkout-error mt-4" role="alert">{error}</p>
      )}

      <button
        type="button"
        className="checkout-primary-btn mt-6"
        disabled={loading || !session.acceptTerms}
        onClick={onSubmit}
      >
        {loading ? "建立訂單中…" : "確認預訂"}
      </button>
    </div>
  );
}

type StageConfirmationProps = {
  session: CheckoutSession;
  packageTitle: string;
  confirmationCode: string | null;
  bookingId: string;
  depositRate: number;
  totalAmount: number | null;
  customerEmailSent: boolean;
};

export function CheckoutStageConfirmation({
  session,
  packageTitle,
  confirmationCode,
  bookingId,
  depositRate,
  totalAmount,
  customerEmailSent,
}: StageConfirmationProps) {
  const amountDue =
    totalAmount !== null
      ? session.payFullAmount
        ? totalAmount
        : Math.round(totalAmount * depositRate)
      : null;

  const paymentLabel =
    session.paymentMethod === "bank_transfer" ? "銀行匯款" : "現金付款";

  const instructions =
    amountDue !== null
      ? getManualPaymentInstructions(
          session.paymentMethod,
          confirmationCode,
          amountDue,
          session.payFullAmount,
          formatIsk,
        )
      : null;

  return (
    <div className="checkout-stage checkout-confirmation">
      <h2 className="checkout-block__title">預訂確認</h2>
      <p className="checkout-success-banner">
        訂單已成立！
      </p>
      <p className="checkout-block__desc">
        {packageTitle}
      </p>
      {confirmationCode && (
        <p className="checkout-reference">
          訂單號：<strong>{confirmationCode}</strong>
        </p>
      )}
      <p className="checkout-block__hint">預訂 ID：{bookingId}</p>

      <div className="checkout-manual-payment-summary">
        <p>
          付款方式：<strong>{paymentLabel}</strong>
          {amountDue !== null && (
            <>
              {" · "}
              {instructions?.amountLabel}：
              <strong className="tabular-nums">{formatIsk(amountDue)}</strong>
            </>
          )}
        </p>
        <p className="checkout-block__hint">
          顧問將人工確認款項後通知您；未於期限內付款，訂單可能被取消。
        </p>
      </div>

      {instructions && (
        <section className="checkout-manual-payment-instructions">
          <h3 className="checkout-manual-payment-instructions__title">
            {instructions.title}
          </h3>
          {instructions.bankAccount && (
            <dl className="checkout-bank-account">
              <div>
                <dt>戶名</dt>
                <dd>{instructions.bankAccount.holderName}</dd>
              </div>
              <div>
                <dt>機構名稱代號</dt>
                <dd>{instructions.bankAccount.institutionLine}</dd>
              </div>
              <div>
                <dt>帳號</dt>
                <dd className="checkout-bank-account__number">
                  {instructions.bankAccount.accountNumber}
                </dd>
              </div>
            </dl>
          )}
          <ol className="checkout-manual-payment-instructions__steps">
            {instructions.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <ul className="checkout-manual-payment-instructions__notes">
            {instructions.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      )}

      <p className="checkout-block__desc mt-4">
        {customerEmailSent
          ? "確認信已寄至您填寫的 Email，請查收付款說明。"
          : "若未收到 Email，請聯絡顧問索取付款說明。"}
        出發前會提供完整行程文件與票券。
      </p>
    </div>
  );
}
