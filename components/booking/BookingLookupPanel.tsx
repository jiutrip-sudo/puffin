"use client";

import Link from "next/link";
import { useState } from "react";
import { normalizeConfirmationCode } from "@/lib/booking/normalize-confirmation-code";
import type { PublicBookingView } from "@/lib/booking/public-booking-view";
import { CHECKOUT_OFFICE_EMAIL } from "@/lib/checkout/manual-payment";

type BookingLookupPanelProps = {
  initialConfirmationCode?: string;
  initialEmail?: string;
};

function travelerSummary(booking: PublicBookingView): string {
  const parts = [`${booking.adults} 位成人`];
  if (booking.children > 0) parts.push(`${booking.children} 名兒童`);
  if (booking.infants > 0) parts.push(`${booking.infants} 名嬰兒`);
  return parts.join("、");
}

function statusClass(status: PublicBookingView["status"]): string {
  if (status === "payment_confirmed") return "booking-lookup-status--confirmed";
  if (status === "cancelled") return "booking-lookup-status--cancelled";
  return "booking-lookup-status--pending";
}

export function BookingLookupPanel({
  initialConfirmationCode = "",
  initialEmail = "",
}: BookingLookupPanelProps) {
  const [confirmationCode, setConfirmationCode] = useState(() =>
    initialConfirmationCode
      ? normalizeConfirmationCode(initialConfirmationCode)
      : "",
  );
  const [email, setEmail] = useState(() => initialEmail.trim().toLowerCase());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [booking, setBooking] = useState<PublicBookingView | null>(null);
  const hasPrefill = Boolean(initialConfirmationCode || initialEmail);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setBooking(null);

    const normalizedCode = normalizeConfirmationCode(confirmationCode);
    const normalizedEmail = email.trim().toLowerCase();

    try {
      const response = await fetch("/api/booking/lookup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          confirmationCode: normalizedCode,
          email: normalizedEmail,
        }),
      });
      const data = (await response.json()) as {
        booking?: PublicBookingView;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "查詢失敗");
      }

      if (!data.booking) {
        throw new Error("查詢結果不完整");
      }

      setBooking(data.booking);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "查詢訂單時發生錯誤",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-lookup">
      <header className="booking-lookup__intro">
        <h1 className="booking-lookup__title">查詢訂單</h1>
        <p className="booking-lookup__desc">
          請輸入預訂時填寫的 Email 與訂單號（例如 DLT-123456），即可查看付款狀態與匯款說明。
        </p>
      </header>

      {hasPrefill && (
        <p className="booking-lookup-form__prefill-hint">
          已從連結帶入部分資料，請確認後查詢。
        </p>
      )}

      <form className="booking-lookup-form" onSubmit={handleSubmit}>
        <label className="booking-lookup-field">
          <span className="booking-lookup-field__label">訂單號</span>
          <input
            type="text"
            className="booking-lookup-field__input"
            value={confirmationCode}
            onChange={(event) =>
              setConfirmationCode(normalizeConfirmationCode(event.target.value))
            }
            placeholder="DLT-123456"
            autoComplete="off"
            spellCheck={false}
            required
          />
        </label>

        <label className="booking-lookup-field">
          <span className="booking-lookup-field__label">Email</span>
          <input
            type="email"
            className="booking-lookup-field__input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={(event) =>
              setEmail(event.target.value.trim().toLowerCase())
            }
            placeholder="與預訂時填寫的 Email 相同"
            autoComplete="email"
            required
          />
        </label>

        <button
          type="submit"
          className="booking-lookup-form__submit"
          disabled={loading}
        >
          {loading ? "查詢中…" : "查詢訂單"}
        </button>
      </form>

      {error && (
        <p className="booking-lookup-error" role="alert">
          {error}
        </p>
      )}

      {booking && (
        <article className="booking-lookup-result">
          <header className="booking-lookup-result__head">
            <div>
              <p className="booking-lookup-result__code-label">訂單號</p>
              <p className="booking-lookup-result__code">{booking.confirmationCode}</p>
            </div>
            <span
              className={`booking-lookup-status ${statusClass(booking.status)}`}
            >
              {booking.statusLabel}
            </span>
          </header>

          <h2 className="booking-lookup-result__package">{booking.packageTitle}</h2>

          <dl className="booking-lookup-result__meta">
            <div>
              <dt>出發日</dt>
              <dd>{booking.startDate}</dd>
            </div>
            <div>
              <dt>結束日</dt>
              <dd>{booking.endDate}</dd>
            </div>
            <div>
              <dt>天數</dt>
              <dd>{booking.tripDays} 天</dd>
            </div>
            <div>
              <dt>旅客人數</dt>
              <dd>{travelerSummary(booking)}</dd>
            </div>
            <div>
              <dt>主要旅客</dt>
              <dd>{booking.leadTravelerName}</dd>
            </div>
            <div>
              <dt>住宿</dt>
              <dd>{booking.accommodationLabel}</dd>
            </div>
            <div>
              <dt>租車</dt>
              <dd>{booking.vehicleLabel}</dd>
            </div>
            <div>
              <dt>付款方式</dt>
              <dd>{booking.paymentMethodLabel}</dd>
            </div>
            {booking.corivoTotal && (
              <div>
                <dt>原價</dt>
                <dd className="tabular-nums">{booking.corivoTotal}</dd>
              </div>
            )}
            {booking.promoCode && booking.promoDiscount && (
              <div>
                <dt>優惠碼（{booking.promoCode}）</dt>
                <dd className="tabular-nums">-{booking.promoDiscount}</dd>
              </div>
            )}
            <div>
              <dt>訂單總額</dt>
              <dd className="tabular-nums">{booking.totalAmount}</dd>
            </div>
            <div>
              <dt>{booking.amountDueLabel}</dt>
              <dd className="tabular-nums booking-lookup-result__amount-due">
                {booking.amountDue}
              </dd>
            </div>
          </dl>

          {booking.status === "payment_confirmed" && (
            <p className="booking-lookup-result__note">
              款項已確認。若有行程文件或出發前事項，顧問將以 Email 或電話與您聯絡。
            </p>
          )}

          {booking.status === "cancelled" && (
            <p className="booking-lookup-result__note">
              此訂單已取消。如需協助請聯絡{" "}
              <a href={`mailto:${booking.supportEmail}`}>{booking.supportEmail}</a>。
            </p>
          )}

          {booking.awaitingSupplierMessage && (
            <p className="booking-lookup-result__note">
              {booking.awaitingSupplierMessage}
            </p>
          )}

          {booking.paymentInfo && (
            <section className="booking-lookup-payment">
              <h3 className="booking-lookup-payment__title">
                {booking.paymentInfo.title}
              </h3>
              <ol className="booking-lookup-payment__steps">
                {booking.paymentInfo.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              {booking.paymentInfo.bankAccount && (
                <div className="booking-lookup-payment__bank">
                  <p>{booking.paymentInfo.bankAccount.holderName}</p>
                  <p className="tabular-nums">
                    {booking.paymentInfo.bankAccount.accountNumber}
                  </p>
                  <p>{booking.paymentInfo.bankAccount.institutionLine}</p>
                </div>
              )}
              <ul className="booking-lookup-payment__notes">
                {booking.paymentInfo.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          )}

          <p className="booking-lookup-result__support">
            需要協助？請聯絡{" "}
            <a href={`mailto:${booking.supportEmail}`}>{booking.supportEmail}</a>
          </p>
        </article>
      )}

      <p className="booking-lookup__footer-hint">
        找不到訂單？請確認 Email 是否與預訂時填寫的一致，或聯絡{" "}
        <a href={`mailto:${CHECKOUT_OFFICE_EMAIL}`}>{CHECKOUT_OFFICE_EMAIL}</a>。
      </p>

      <p className="booking-lookup__back">
        <Link href="/">返回首頁</Link>
        <span aria-hidden="true"> · </span>
        <Link href="/iceland">冰島行程</Link>
      </p>
    </div>
  );
}
