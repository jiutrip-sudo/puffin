"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AdminShell } from "./AdminShell";
import { formatIsk } from "@/lib/trip-pricing/calculate";

type BookingRow = {
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
};

const STATUS_LABELS: Record<string, string> = {
  pending_payment: "待付款",
  payment_confirmed: "款項已確認",
  cancelled: "已取消",
};

export function AdminBookingsPanel() {
  const [bookings, setBookings] = useState<BookingRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (q.trim()) params.set("q", q.trim());
      if (status) params.set("status", status);

      const response = await fetch(`/api/admin/bookings?${params.toString()}`);
      const data = (await response.json()) as {
        bookings?: BookingRow[];
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "讀取失敗");
      }

      setBookings(data.bookings ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "讀取失敗");
    } finally {
      setLoading(false);
    }
  }, [q, status]);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <AdminShell title="訂單管理">
      <div className="admin-panel">
        <form
          className="admin-filters"
          onSubmit={(event) => {
            event.preventDefault();
            void load();
          }}
        >
          <input
            type="search"
            className="admin-field__input"
            placeholder="搜尋訂單號、Email、姓名…"
            value={q}
            onChange={(event) => setQ(event.target.value)}
          />
          <select
            className="admin-field__input"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="">全部狀態</option>
            <option value="pending_payment">待付款</option>
            <option value="payment_confirmed">款項已確認</option>
            <option value="cancelled">已取消</option>
          </select>
          <button type="submit" className="admin-btn admin-btn--primary">搜尋</button>
        </form>

        {error && <p className="admin-error" role="alert">{error}</p>}

        {loading ? (
          <p className="admin-muted">載入中…</p>
        ) : bookings.length === 0 ? (
          <p className="admin-muted">沒有符合條件的訂單。</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>訂單號</th>
                  <th>狀態</th>
                  <th>行程</th>
                  <th>旅客</th>
                  <th>出發日</th>
                  <th>應付</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="admin-table__mono">{booking.confirmationCode}</td>
                    <td>
                      <span className={`admin-status admin-status--${booking.status}`}>
                        {STATUS_LABELS[booking.status] ?? booking.status}
                      </span>
                    </td>
                    <td>{booking.packageTitle}</td>
                    <td>
                      <div>{booking.leadName || "—"}</div>
                      <div className="admin-muted">{booking.leadEmail}</div>
                    </td>
                    <td>{booking.startDate}</td>
                    <td className="tabular-nums">{formatIsk(booking.amountDue)}</td>
                    <td>
                      <Link href={`/admin/bookings/${booking.id}`} className="admin-link">
                        詳情
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
