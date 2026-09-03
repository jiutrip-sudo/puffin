"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AdminShell } from "./AdminShell";
import {
  formatFrozenDisplayAmount,
  formatIskAdmin,
} from "@/lib/i18n/display-money";
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
  awaiting_supplier: "待供應商確認",
  pending_payment: "待付款",
  payment_confirmed: "款項已確認",
  cancelled: "已取消",
};

function formatAdminCustomerAmount(pricing: LocalBookingRecord["pricing"]): string {
  if (pricing.displayAmountDue !== undefined && pricing.displayCurrency) {
    return formatFrozenDisplayAmount(
      pricing.displayAmountDue,
      pricing.displayCurrency,
    );
  }
  return formatIskAdmin(pricing.amountDue);
}

export function AdminBookingDetailPanel({ bookingId }: { bookingId: string }) {
  const [detail, setDetail] = useState<BookingDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [supplierNote, setSupplierNote] = useState("");

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
      setSupplierNote(data.record.supplierNote ?? "");
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

  const confirmSupplier = async () => {
    setActionLoading(true);
    setNotice(null);
    setError(null);

    try {
      const response = await fetch(
        `/api/admin/bookings/${bookingId}/confirm-supplier`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ note: supplierNote }),
        },
      );
      const data = (await response.json()) as {
        booking?: BookingDetail;
        email?: { sent?: boolean; error?: string };
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "確認供應商失敗");
      }

      if (data.booking) setDetail(data.booking);

      if (data.email?.sent) {
        setNotice("供應商已確認，並已寄送付款說明給旅客");
      } else {
        setNotice(
          `供應商已確認，但付款說明信未寄出：${data.email?.error ?? "未知錯誤"}`,
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "確認供應商失敗");
    } finally {
      setActionLoading(false);
    }
  };

  const rejectSupplier = async () => {
    setActionLoading(true);
    setNotice(null);
    setError(null);

    try {
      const response = await fetch(
        `/api/admin/bookings/${bookingId}/reject-supplier`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ note: supplierNote }),
        },
      );
      const data = (await response.json()) as {
        booking?: BookingDetail;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "標記無法成團失敗");
      }

      if (data.booking) setDetail(data.booking);
      setNotice("已標記為無法成團並取消訂單");
    } catch (err) {
      setError(err instanceof Error ? err.message : "標記無法成團失敗");
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
  const supplierTotal =
    pricing.supplierTotal ?? pricing.corivoTotal ?? pricing.total;
  const retailTotal = pricing.retailTotalIsk ?? pricing.total;
  const margin = pricing.total - supplierTotal;

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
            <h3 className="admin-card__title">金額對照</h3>
            <dl className="admin-kv">
              <div>
                <dt>供應商價</dt>
                <dd className="tabular-nums">{formatIskAdmin(supplierTotal)}</dd>
              </div>
              <div>
                <dt>前台售價</dt>
                <dd className="tabular-nums">{formatIskAdmin(retailTotal)}</dd>
              </div>
              {pricing.promoCode && (
                <div>
                  <dt>優惠碼</dt>
                  <dd>
                    {pricing.promoCode}
                    {pricing.promoDiscount
                      ? ` (-${formatIskAdmin(pricing.promoDiscount)})`
                      : ""}
                  </dd>
                </div>
              )}
              <div>
                <dt>客人應付（ISK）</dt>
                <dd className="tabular-nums">{formatIskAdmin(pricing.total)}</dd>
              </div>
              <div>
                <dt>客人應付（展示幣）</dt>
                <dd className="tabular-nums">{formatAdminCustomerAmount(pricing)}</dd>
              </div>
              <div>
                <dt>毛利（約）</dt>
                <dd className="tabular-nums">{formatIskAdmin(margin)}</dd>
              </div>
              {pricing.fxAsOf && (
                <div>
                  <dt>匯率截至</dt>
                  <dd>{pricing.fxAsOf}</dd>
                </div>
              )}
            </dl>
          </section>
        </div>

        <section className="admin-card">
          <h3 className="admin-card__title">供應商</h3>
          <dl className="admin-kv">
            <div>
              <dt>Corivo packageTourId</dt>
              <dd className="admin-table__mono">
                {record.corivoPackageTourId ?? "—"}
              </dd>
            </div>
            <div>
              <dt>供應商狀態</dt>
              <dd>{record.supplierStatus ?? "—"}</dd>
            </div>
            {record.supplierConfirmedAt && (
              <div>
                <dt>確認時間</dt>
                <dd>{new Date(record.supplierConfirmedAt).toLocaleString("zh-TW")}</dd>
              </div>
            )}
          </dl>
          <label className="admin-field">
            <span className="admin-field__label">供應商備註</span>
            <textarea
              className="admin-field__input"
              rows={3}
              value={supplierNote}
              onChange={(event) => setSupplierNote(event.target.value)}
              placeholder="森林貓回覆、訂位編號等"
            />
          </label>
        </section>

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
            {detail.status === "awaiting_supplier" && (
              <>
                <button
                  type="button"
                  className="admin-btn admin-btn--primary"
                  disabled={actionLoading}
                  onClick={() => void confirmSupplier()}
                >
                  供應商已確認（通知付款）
                </button>
                <button
                  type="button"
                  className="admin-btn admin-btn--danger"
                  disabled={actionLoading}
                  onClick={() => void rejectSupplier()}
                >
                  無法成團（取消）
                </button>
              </>
            )}
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
            {detail.status !== "cancelled" && detail.status !== "awaiting_supplier" && (
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
                onClick={() => void patchStatus("awaiting_supplier")}
              >
                恢復為待供應商確認
              </button>
            )}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
