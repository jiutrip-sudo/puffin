"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AdminFxRateNote, AdminIskTwdAmount } from "./AdminIskTwdAmount";
import { AdminReferencePriceBlock } from "./AdminReferencePriceBlock";
import { AdminShell } from "./AdminShell";

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
  retailPerPerson: number;
  deposit: number;
  perPersonDouble: number;
  syncedAt: string;
  isFresh: boolean;
};

type PackageMeta = {
  tripDays: number | null;
  tourCode: string | null;
  packageTitle: string | null;
  corivoPackageTourId: number | null;
  depositRate: number;
  tiers: Array<{ id: string; label: string }>;
  vehicleTiers: Array<{ id: string; label: string }>;
};

function formatShortDateTime(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${month}/${day} ${hours}:${minutes}`;
}

function resolveTierLabel(
  tierId: string,
  tiers: Array<{ id: string; label: string }>,
): string {
  return tiers.find((tier) => tier.id === tierId)?.label ?? tierId;
}

function formatPartySize(row: MatrixRow): string {
  return `${row.adults}/${row.children}/${row.infants}`;
}

export function AdminPricingDetailPanel({ packageId }: { packageId: string }) {
  const [rows, setRows] = useState<MatrixRow[]>([]);
  const [meta, setMeta] = useState<PackageMeta | null>(null);
  const [snapshotUpdatedAt, setSnapshotUpdatedAt] = useState<string | null>(
    null,
  );
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
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

  const hasActiveFilters =
    startDateFrom.length > 0 ||
    startDateTo.length > 0 ||
    accommodationTier.length > 0 ||
    vehicleTier.length > 0 ||
    adults.length > 0;

  const clearFilters = () => {
    setPage(1);
    setStartDateFrom("");
    setStartDateTo("");
    setAccommodationTier("");
    setVehicleTier("");
    setAdults("");
  };

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
        snapshotUpdatedAt?: string | null;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "讀取失敗");
      }

      setRows(data.rows ?? []);
      setMeta(data.config ?? null);
      setTotal(data.total ?? 0);
      setTotalPages(data.totalPages ?? 1);
      setSnapshotUpdatedAt(data.snapshotUpdatedAt ?? null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "讀取失敗");
    } finally {
      setLoading(false);
    }
  }, [packageId, queryString]);

  useEffect(() => {
    void load();
  }, [load]);

  const depositRate = meta?.depositRate ?? 0.2;

  const runLiveQuote = async (row: MatrixRow) => {
    setQuoteLoadingKey(row.key);
    setError(null);
    setNotice(null);

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
        setNotice("已更新即時查價結果（僅影響目前頁面顯示，不會寫入快照）。");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "查價失敗");
    } finally {
      setQuoteLoadingKey(null);
    }
  };

  const syncPackage = async () => {
    setSyncing(true);
    setError(null);
    setNotice(null);

    try {
      const response = await fetch(`/api/admin/pricing/${packageId}/sync`, {
        method: "POST",
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "同步失敗");
      }

      setLiveQuotes({});
      setNotice("快照同步完成。");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "同步失敗");
    } finally {
      setSyncing(false);
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
      <div className="admin-panel admin-pricing">
        <div className="admin-pricing-detail__topbar">
          <Link href="/admin/pricing" className="admin-link">
            ← 返回計價總覽
          </Link>
          <div className="admin-pricing-detail__topbar-actions">
            <button
              type="button"
              className="admin-btn admin-btn--ghost admin-btn--sm"
              disabled={loading}
              onClick={() => void load()}
            >
              {loading ? "載入中…" : "重新載入"}
            </button>
            <button
              type="button"
              className="admin-btn admin-btn--ghost admin-btn--sm"
              disabled={syncing}
              onClick={() => void syncPackage()}
            >
              {syncing ? "同步中…" : "同步快照"}
            </button>
            <button
              type="button"
              className="admin-btn admin-btn--primary admin-btn--sm"
              onClick={exportCsv}
            >
              匯出 CSV
            </button>
          </div>
        </div>

        <header className="admin-card admin-pricing-detail__header">
          <div>
            <p className="admin-pricing-detail__eyebrow">計價矩陣</p>
            <h2 className="admin-detail__title">
              {meta?.tourCode ?? packageId}
            </h2>
            {meta?.packageTitle ? (
              <p className="admin-pricing-detail__subtitle">{meta.packageTitle}</p>
            ) : null}
          </div>
          <dl className="admin-pricing-detail__meta">
            <div>
              <dt>系統代碼</dt>
              <dd className="admin-detail__subtitle-mono">{packageId}</dd>
            </div>
            <div>
              <dt>天數</dt>
              <dd>{meta?.tripDays ? `${meta.tripDays} 天` : "—"}</dd>
            </div>
            <div>
              <dt>Corivo ID</dt>
              <dd>{meta?.corivoPackageTourId ?? "—"}</dd>
            </div>
            <div>
              <dt>矩陣筆數</dt>
              <dd>{total}</dd>
            </div>
            <div>
              <dt>快照更新</dt>
              <dd
                title={
                  snapshotUpdatedAt
                    ? new Date(snapshotUpdatedAt).toLocaleString("zh-TW")
                    : undefined
                }
              >
                {snapshotUpdatedAt
                  ? formatShortDateTime(snapshotUpdatedAt)
                  : "—"}
              </dd>
            </div>
          </dl>
        </header>

        <details className="admin-pricing-note">
          <summary>使用說明</summary>
          <p>
            瀏覽此套餐的 Corivo 計價快照矩陣。價格欄顯示供應商價、前台售價（+15%）與訂金（
            {Math.round(depositRate * 100)}%）；「零售人均」為前台售價除以人數。行程卡片「每人起價」取預設房型（第一個等級）與預設車型、2 位成人，在快照各出發日中的最低零售人均，與詳情頁預設條件一致。台幣為政策參考匯率換算（
            <AdminFxRateNote />
            ）。「即時查價」會向 Corivo 重新取價，僅更新目前頁面顯示，不會寫入快照。
          </p>
        </details>

        {notice && <p className="admin-notice">{notice}</p>}
        {error && <p className="admin-error" role="alert">{error}</p>}

        <section className="admin-card admin-pricing-toolbar">
          <div className="admin-filter-grid admin-pricing-detail__filters">
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

          <div className="admin-pricing-toolbar__actions">
            {hasActiveFilters ? (
              <button
                type="button"
                className="admin-btn admin-btn--ghost admin-btn--sm"
                onClick={clearFilters}
              >
                清除篩選
              </button>
            ) : null}
            {!loading && rows.length !== total ? (
              <p className="admin-pricing-toolbar__meta admin-muted">
                本頁 <strong>{rows.length}</strong> 筆 · 篩選後共{" "}
                <strong>{total}</strong> 筆
              </p>
            ) : null}
          </div>
        </section>

        {loading ? (
          <div className="admin-table-wrap admin-table-wrap--sticky">
            <table className="admin-table admin-table--pricing admin-table--matrix">
              <thead>
                <tr>
                  <th>出發日</th>
                  <th>人數</th>
                  <th>房型</th>
                  <th>車型</th>
                  <th>價格</th>
                  <th>零售人均</th>
                  <th>同步</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 8 }, (_, index) => (
                  <tr key={index} className="admin-table__skeleton-row">
                    {Array.from({ length: 8 }, (__, cellIndex) => (
                      <td key={cellIndex}>
                        <span className="admin-skeleton" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : rows.length === 0 ? (
          <section className="admin-card admin-pricing-empty">
            <p className="admin-pricing-empty__title">沒有符合條件的組合</p>
            <p className="admin-muted">
              {hasActiveFilters
                ? "請調整篩選條件，或清除篩選後再試。"
                : "此套餐尚無計價快照，請先同步。"}
            </p>
            {hasActiveFilters ? (
              <button
                type="button"
                className="admin-btn admin-btn--ghost"
                onClick={clearFilters}
              >
                清除篩選
              </button>
            ) : (
              <button
                type="button"
                className="admin-btn admin-btn--primary"
                disabled={syncing}
                onClick={() => void syncPackage()}
              >
                {syncing ? "同步中…" : "同步快照"}
              </button>
            )}
          </section>
        ) : (
          <div className="admin-table-wrap admin-table-wrap--sticky">
            <table className="admin-table admin-table--pricing admin-table--matrix">
              <thead>
                <tr>
                  <th className="admin-table__sticky-col">出發日</th>
                  <th>
                    人數
                    <span className="admin-table__th-hint">成/兒/嬰</span>
                  </th>
                  <th>房型</th>
                  <th>車型</th>
                  <th>價格</th>
                  <th>零售人均</th>
                  <th>同步</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  const live = liveQuotes[row.key];
                  const supplierTotal = live?.supplierTotal ?? row.supplierTotal;
                  const retailTotal = live?.retailTotal ?? row.retailTotal;
                  const deposit = Math.round(retailTotal * depositRate);
                  const travelers = row.adults + row.children + row.infants;
                  const retailPerPerson =
                    travelers > 0 ? Math.round(retailTotal / travelers) : row.retailPerPerson;

                  return (
                    <tr
                      key={row.key}
                      className={`admin-table__data-row${
                        live ? " admin-table__data-row--live" : ""
                      }`}
                    >
                      <td className="admin-table__sticky-col admin-table__date">
                        {row.startDate}
                      </td>
                      <td
                        className="tabular-nums admin-table__party"
                        title={`成人 ${row.adults} · 兒童 ${row.children} · 嬰兒 ${row.infants}`}
                      >
                        {formatPartySize(row)}
                      </td>
                      <td className="admin-table__tier">
                        {resolveTierLabel(row.accommodationTier, meta?.tiers ?? [])}
                      </td>
                      <td className="admin-table__tier">
                        {row.vehicleTier
                          ? resolveTierLabel(
                              row.vehicleTier,
                              meta?.vehicleTiers ?? [],
                            )
                          : "—"}
                      </td>
                      <td className="admin-table__prices">
                        {live ? (
                          <span className="admin-matrix-live-badge">即時</span>
                        ) : null}
                        <AdminReferencePriceBlock
                          supplier={supplierTotal}
                          retail={retailTotal}
                          deposit={deposit}
                        />
                      </td>
                      <td className="admin-table__prices">
                        {live ? (
                          <span className="admin-matrix-live-badge">即時</span>
                        ) : null}
                        <AdminIskTwdAmount isk={retailPerPerson} />
                      </td>
                      <td
                        className="admin-table__updated"
                        title={new Date(row.syncedAt).toLocaleString("zh-TW")}
                      >
                        {formatShortDateTime(row.syncedAt)}
                      </td>
                      <td>
                        <button
                          type="button"
                          className="admin-btn admin-btn--ghost admin-btn--sm"
                          disabled={quoteLoadingKey === row.key}
                          onClick={() => void runLiveQuote(row)}
                        >
                          {quoteLoadingKey === row.key ? "查詢中…" : "即時查價"}
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
              className="admin-btn admin-btn--ghost admin-btn--sm"
              disabled={page <= 1 || loading}
              onClick={() => setPage((value) => value - 1)}
            >
              上一頁
            </button>
            <span className="admin-muted">
              第 {page} / {totalPages} 頁 · 共 {total} 筆
            </span>
            <button
              type="button"
              className="admin-btn admin-btn--ghost admin-btn--sm"
              disabled={page >= totalPages || loading}
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
