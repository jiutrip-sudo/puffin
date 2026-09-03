"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AdminShell } from "./AdminShell";
import { formatIskAdmin } from "@/lib/i18n/display-money";

type MatrixRow = {
  key: string;
  startDate: string;
  adults: number;
  children: number;
  infants: number;
  accommodationTier: string;
  vehicleTier: string;
  supplierTotal: number;
  retailTotal: number;
  deposit: number;
  perPersonDouble: number;
  syncedAt: string;
};

type PackageMeta = {
  tripDays: number | null;
  tourCode: string | null;
  packageTitle: string | null;
  corivoPackageTourId: number | null;
  tiers: Array<{ id: string; label: string }>;
  vehicleTiers: Array<{ id: string; label: string }>;
};

export function AdminPricingDetailPanel({ packageId }: { packageId: string }) {
  const [rows, setRows] = useState<MatrixRow[]>([]);
  const [meta, setMeta] = useState<PackageMeta | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [quoteLoadingKey, setQuoteLoadingKey] = useState<string | null>(null);
  const [liveQuotes, setLiveQuotes] = useState<
    Record<string, { supplierTotal: number; retailTotal: number; fetchedAt: string }>
  >({});

  const [startDateFrom, setStartDateFrom] = useState("");
  const [startDateTo, setStartDateTo] = useState("");
  const [accommodationTier, setAccommodationTier] = useState("");
  const [vehicleTier, setVehicleTier] = useState("");
  const [adults, setAdults] = useState("");

  const queryString = useMemo(() => {
    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("pageSize", "50");
    if (startDateFrom) params.set("startDateFrom", startDateFrom);
    if (startDateTo) params.set("startDateTo", startDateTo);
    if (accommodationTier) params.set("accommodationTier", accommodationTier);
    if (vehicleTier) params.set("vehicleTier", vehicleTier);
    if (adults) params.set("adults", adults);
    return params.toString();
  }, [page, startDateFrom, startDateTo, accommodationTier, vehicleTier, adults]);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/admin/pricing/${encodeURIComponent(packageId)}?${queryString}`,
      );
      const data = (await response.json()) as {
        rows?: MatrixRow[];
        config?: PackageMeta;
        total?: number;
        totalPages?: number;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "讀取失敗");
      }

      setRows(data.rows ?? []);
      setMeta(data.config ?? null);
      setTotal(data.total ?? 0);
      setTotalPages(data.totalPages ?? 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "讀取失敗");
    } finally {
      setLoading(false);
    }
  }, [packageId, queryString]);

  useEffect(() => {
    void load();
  }, [load]);

  const runLiveQuote = async (row: MatrixRow) => {
    setQuoteLoadingKey(row.key);
    setError(null);

    try {
      const response = await fetch(
        `/api/admin/pricing/${encodeURIComponent(packageId)}/quote`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            mode: "price",
            startDate: row.startDate,
            adults: row.adults,
            children: row.children,
            infants: row.infants,
            accommodationTier: row.accommodationTier,
            vehicleTier: row.vehicleTier,
          }),
        },
      );
      const data = (await response.json()) as {
        supplierTotal?: number;
        retailTotal?: number;
        fetchedAt?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "查價失敗");
      }

      if (data.supplierTotal !== undefined && data.retailTotal !== undefined) {
        setLiveQuotes((prev) => ({
          ...prev,
          [row.key]: {
            supplierTotal: data.supplierTotal!,
            retailTotal: data.retailTotal!,
            fetchedAt: data.fetchedAt ?? new Date().toISOString(),
          },
        }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "查價失敗");
    } finally {
      setQuoteLoadingKey(null);
    }
  };

  const exportCsv = () => {
    const params = new URLSearchParams(queryString);
    params.set("format", "csv");
    params.delete("page");
    params.delete("pageSize");
    window.location.href = `/api/admin/pricing/${encodeURIComponent(packageId)}?${params.toString()}`;
  };

  return (
    <AdminShell title="計價矩陣">
      <div className="admin-panel">
        <p>
          <Link href="/admin/pricing" className="admin-link">← 返回計價總覽</Link>
        </p>

        <header className="admin-detail__header">
          <div>
            <h2 className="admin-detail__title">
              {meta?.tourCode ?? packageId}
            </h2>
            {meta?.packageTitle && (
              <p className="admin-muted">{meta.packageTitle}</p>
            )}
            <p className="admin-muted admin-detail__subtitle-mono">
              系統代碼 {packageId}
              {meta
                ? ` · ${meta.tripDays ? `${meta.tripDays} 天 · ` : ""}Corivo ID ${meta.corivoPackageTourId ?? "—"} · 共 ${total} 筆`
                : ""}
            </p>
          </div>
        </header>

        <section className="admin-card">
          <h3 className="admin-card__title">篩選</h3>
          <div className="admin-filter-grid">
            <label className="admin-field">
              <span className="admin-field__label">出發日起</span>
              <input
                type="date"
                className="admin-field__input"
                value={startDateFrom}
                onChange={(event) => {
                  setPage(1);
                  setStartDateFrom(event.target.value);
                }}
              />
            </label>
            <label className="admin-field">
              <span className="admin-field__label">出發日迄</span>
              <input
                type="date"
                className="admin-field__input"
                value={startDateTo}
                onChange={(event) => {
                  setPage(1);
                  setStartDateTo(event.target.value);
                }}
              />
            </label>
            <label className="admin-field">
              <span className="admin-field__label">房型</span>
              <select
                className="admin-field__input"
                value={accommodationTier}
                onChange={(event) => {
                  setPage(1);
                  setAccommodationTier(event.target.value);
                }}
              >
                <option value="">全部</option>
                {meta?.tiers.map((tier) => (
                  <option key={tier.id} value={tier.id}>
                    {tier.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="admin-field">
              <span className="admin-field__label">車型</span>
              <select
                className="admin-field__input"
                value={vehicleTier}
                onChange={(event) => {
                  setPage(1);
                  setVehicleTier(event.target.value);
                }}
              >
                <option value="">全部</option>
                {meta?.vehicleTiers.map((tier) => (
                  <option key={tier.id} value={tier.id}>
                    {tier.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="admin-field">
              <span className="admin-field__label">成人數</span>
              <input
                type="number"
                min={1}
                className="admin-field__input"
                value={adults}
                onChange={(event) => {
                  setPage(1);
                  setAdults(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="admin-actions">
            <button
              type="button"
              className="admin-btn admin-btn--ghost"
              onClick={exportCsv}
            >
              匯出 CSV
            </button>
          </div>
        </section>

        {notice && <p className="admin-notice">{notice}</p>}
        {error && <p className="admin-error" role="alert">{error}</p>}

        {loading ? (
          <p className="admin-muted">載入中…</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>出發日</th>
                  <th>人數</th>
                  <th>房型</th>
                  <th>車型</th>
                  <th>供應商價</th>
                  <th>前台售價</th>
                  <th>訂金</th>
                  <th>同步時間</th>
                  <th>即時</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  const live = liveQuotes[row.key];
                  return (
                    <tr key={row.key}>
                      <td>{row.startDate}</td>
                      <td>
                        {row.adults}/{row.children}/{row.infants}
                      </td>
                      <td>{row.accommodationTier}</td>
                      <td>{row.vehicleTier || "—"}</td>
                      <td className="tabular-nums">
                        {live
                          ? formatIskAdmin(live.supplierTotal)
                          : formatIskAdmin(row.supplierTotal)}
                      </td>
                      <td className="tabular-nums">
                        {live
                          ? formatIskAdmin(live.retailTotal)
                          : formatIskAdmin(row.retailTotal)}
                      </td>
                      <td className="tabular-nums">
                        {formatIskAdmin(row.deposit)}
                      </td>
                      <td>
                        {new Date(row.syncedAt).toLocaleString("zh-TW")}
                      </td>
                      <td>
                        <button
                          type="button"
                          className="admin-btn admin-btn--ghost"
                          disabled={quoteLoadingKey === row.key}
                          onClick={() => void runLiveQuote(row)}
                        >
                          {quoteLoadingKey === row.key ? "查詢中…" : "查價"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {totalPages > 1 && (
          <div className="admin-pagination">
            <button
              type="button"
              className="admin-btn admin-btn--ghost"
              disabled={page <= 1}
              onClick={() => setPage((value) => value - 1)}
            >
              上一頁
            </button>
            <span className="admin-muted">
              第 {page} / {totalPages} 頁
            </span>
            <button
              type="button"
              className="admin-btn admin-btn--ghost"
              disabled={page >= totalPages}
              onClick={() => setPage((value) => value + 1)}
            >
              下一頁
            </button>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
