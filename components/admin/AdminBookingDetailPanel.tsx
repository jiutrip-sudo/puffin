"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AdminShell } from "./AdminShell";
import { formatIsk } from "@/lib/trip-pricing/calculate";
import type { LocalBookingRecord } from "@/lib/booking/types";

type BookingDetail = {
  id: string;
  confirmationCode: string;
  createdAt: string;
  status: string;
  packageTitle: string;
  leadEmail: string;
  leadName: string;
  startDate: string;
  total: number;
  amountDue: number;
  promoCode: string | null;
  record: LocalBookingRecord;
};

const STATUS_LABELS: Record<string, string> = {
  pending_payment: "待付款",
  payment_confirmed: "款項已確認",
  cancelled: "已取消",
};

export function AdminBookingDetailPanel({ bookingId }: { bookingId: string }) {
  const [detail, setDetail] = useState<BookingDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`);
      const data = (await response.json()) as BookingDetail & { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "讀取失敗");
      }

      setDetail(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "讀取失敗");
    } finally {
      setLoading(false);
    }
  }, [bookingId]);

  useEffect(() => {
    void load();
  }, [load]);

  const patchStatus = async (status: string) => {
    setActionLoading(true);
    setNotice(null);
    setError(null);

    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = (await response.json()) as BookingDetail & { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "更新失敗");
      }

      setDetail(data);
      setNotice("訂單狀態已更新");
    } catch (err) {
      setError(err instanceof Error ? err.message : "更新失敗");
    } finally {
      setActionLoading(false);
    }
  };

  const confirmPayment = async () => {
    setActionLoading(true);
    setNotice(null);
    setError(null);

    try {
      const response = await fetch(
        `/api/admin/bookings/${bookingId}/confirm-payment`,
        { method: "POST" },
      );
      const data = (await response.json()) as {
        booking?: BookingDetail;
        email?: { sent?: boolean; error?: string };
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "確認款項失敗");
      }

      if (data.booking) setDetail(data.booking);

      if (data.email?.sent) {
        setNotice("款項已確認，並已寄送通知信給旅客");
      } else {
        setNotice(
          `款項已確認，但通知信未寄出：${data.email?.error ?? "未知錯誤"}`,
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "確認款項失敗");
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminShell title="訂單詳情">
        <p className="admin-muted">載入中…</p>
      </AdminShell>
    );
  }

  if (!detail) {
    return (
      <AdminShell title="訂單詳情">
        <p className="admin-error">{error ?? "找不到訂單"}</p>
        <Link href="/admin/bookings" className="admin-link">返回列表</Link>
      </AdminShell>
    );
  }

  const record = detail.record;
  const pricing = record.pricing;

  return (
    <AdminShell title="訂單詳情">
      <div className="admin-panel">
        <p>
          <Link href="/admin/bookings" className="admin-link">← 返回訂單列表</Link>
        </p>

        <header className="admin-detail__header">
          <div>
            <h2 className="admin-detail__title">{detail.confirmationCode}</h2>
            <p className="admin-muted">
              建立於 {new Date(detail.createdAt).toLocaleString("zh-TW")}
            </p>
          </div>
          <span className={`admin-status admin-status--${detail.status}`}>
            {STATUS_LABELS[detail.status] ?? detail.status}
          </span>
        </header>

        {notice && <p className="admin-notice">{notice}</p>}
        {error && <p className="admin-error" role="alert">{error}</p>}

        <div className="admin-detail__grid">
          <section className="admin-card">
            <h3 className="admin-card__title">行程與旅客</h3>
            <dl className="admin-kv">
              <div><dt>套餐</dt><dd>{detail.packageTitle}</dd></div>
              <div><dt>出發日</dt><dd>{detail.startDate}</dd></div>
              <div><dt>主要旅客</dt><dd>{detail.leadName}</dd></div>
              <div><dt>Email</dt><dd>{detail.leadEmail}</dd></div>
              <div><dt>付款方式</dt><dd>{record.session.paymentMethod}</dd></div>
              <div><dt>旅客數</dt><dd>{record.session.travelers.length} 人</dd></div>
            </dl>
          </section>

          <section className="admin-card">
            <h3 className="admin-card__title">金額</h3>
            <dl className="admin-kv">
              {pricing.corivoTotal && pricing.corivoTotal > pricing.total && (
                <div><dt>原價</dt><dd className="tabular-nums">{formatIsk(pricing.corivoTotal)}</dd></div>
              )}
              {pricing.promoCode && (
                <div>
                  <dt>優惠碼</dt>
                  <dd>
                    {pricing.promoCode}
                    {pricing.promoDiscount
                      ? ` (-${formatIsk(pricing.promoDiscount)})`
                      : ""}
                  </dd>
                </div>
              )}
              <div><dt>訂單總額</dt><dd className="tabular-nums">{formatIsk(pricing.total)}</dd></div>
              <div><dt>應付</dt><dd className="tabular-nums">{formatIsk(pricing.amountDue)}</dd></div>
            </dl>
          </section>
        </div>

        <section className="admin-card">
          <h3 className="admin-card__title">旅客名單</h3>
          <ul className="admin-traveler-list">
            {record.session.travelers.map((traveler) => (
              <li key={traveler.correlationId}>
                {traveler.firstName} {traveler.lastName} · {traveler.type} · {traveler.email}
              </li>
            ))}
          </ul>
        </section>

        <section className="admin-card">
          <h3 className="admin-card__title">操作</h3>
          <div className="admin-actions">
            {detail.status === "pending_payment" && (
              <button
                type="button"
                className="admin-btn admin-btn--primary"
                disabled={actionLoading}
                onClick={() => void confirmPayment()}
              >
                確認款項並通知旅客
              </button>
            )}
            {detail.status !== "cancelled" && (
              <button
                type="button"
                className="admin-btn admin-btn--danger"
                disabled={actionLoading}
                onClick={() => void patchStatus("cancelled")}
              >
                取消訂單
              </button>
            )}
            {detail.status === "cancelled" && (
              <button
                type="button"
                className="admin-btn admin-btn--ghost"
                disabled={actionLoading}
                onClick={() => void patchStatus("pending_payment")}
              >
                恢復為待付款
              </button>
            )}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
