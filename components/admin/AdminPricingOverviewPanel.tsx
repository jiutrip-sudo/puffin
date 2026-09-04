"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AdminFxRateChip } from "./AdminFxRateChip";
import { AdminFxRateNote } from "./AdminIskTwdAmount";
import { AdminReferencePriceBlock } from "./AdminReferencePriceBlock";
import { AdminShell } from "./AdminShell";
import {
  PRICING_PACKAGE_CATEGORY_LABELS,
  PRICING_PACKAGE_CATEGORY_ORDER,
  type PricingPackageCategory,
} from "@/lib/admin/pricing-package-category";

type PackageSummary = {
  packageId: string;
  tourCode: string | null;
  packageTitle: string | null;
  tripDays: number | null;
  category: PricingPackageCategory | null;
  categoryLabel: string | null;
  corivoPackageTourId: number | null;
  snapshotCount: number;
  availabilityCount: number;
  updatedAt: string | null;
  isExpired: boolean;
  referenceSupplierPrice: number | null;
  referenceRetailPrice: number | null;
  referenceDeposit: number | null;
  referenceSupplierPriceLabel: string | null;
  referenceRetailPriceLabel: string | null;
  referenceDepositLabel: string | null;
};

type SnapshotStatus = "all" | "healthy" | "expired" | "missing";

function snapshotStatus(pkg: PackageSummary): Exclude<SnapshotStatus, "all"> {
  if (pkg.snapshotCount === 0) return "missing";
  if (pkg.isExpired) return "expired";
  return "healthy";
}

const STATUS_LABELS: Record<Exclude<SnapshotStatus, "all">, string> = {
  healthy: "正常",
  expired: "已過期",
  missing: "無快照",
};

function formatShortUpdatedAt(value: string | null): string {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${month}/${day} ${hours}:${minutes}`;
}

function PricingStatusBadge({
  status,
}: {
  status: Exclude<SnapshotStatus, "all">;
}) {
  return (
    <span className={`admin-snapshot-status admin-snapshot-status--${status}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}

export function AdminPricingOverviewPanel() {
  const [packages, setPackages] = useState<PackageSummary[]>([]);
  const [total, setTotal] = useState(0);
  const [categoryCounts, setCategoryCounts] = useState<
    Record<PricingPackageCategory, number>
  >({
    "summer-self-drive": 0,
    "summer-group": 0,
    "winter-self-drive": 0,
    "winter-group": 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [syncingId, setSyncingId] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<PricingPackageCategory | "all">(
    "all",
  );
  const [status, setStatus] = useState<SnapshotStatus>("all");

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/pricing");
      const data = (await response.json()) as {
        packages?: PackageSummary[];
        total?: number;
        categoryCounts?: Record<PricingPackageCategory, number>;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "讀取失敗");
      }

      setPackages(data.packages ?? []);
      setTotal(data.total ?? data.packages?.length ?? 0);
      if (data.categoryCounts) {
        setCategoryCounts(data.categoryCounts);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "讀取失敗");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const statusCounts = useMemo(() => {
    const counts = { healthy: 0, expired: 0, missing: 0 };
    for (const pkg of packages) {
      counts[snapshotStatus(pkg)] += 1;
    }
    return counts;
  }, [packages]);

  const filteredPackages = useMemo(() => {
    const keyword = q.trim().toLowerCase();

    return packages.filter((pkg) => {
      if (category !== "all" && pkg.category !== category) return false;
      if (status !== "all" && snapshotStatus(pkg) !== status) return false;
      if (!keyword) return true;

      return (
        pkg.packageId.toLowerCase().includes(keyword) ||
        (pkg.tourCode?.toLowerCase().includes(keyword) ?? false) ||
        (pkg.packageTitle?.toLowerCase().includes(keyword) ?? false) ||
        (pkg.categoryLabel?.toLowerCase().includes(keyword) ?? false) ||
        String(pkg.tripDays ?? "").includes(keyword) ||
        String(pkg.corivoPackageTourId ?? "").includes(keyword)
      );
    });
  }, [packages, q, category, status]);

  const hasActiveFilters =
    q.trim().length > 0 || category !== "all" || status !== "all";

  const clearFilters = () => {
    setQ("");
    setCategory("all");
    setStatus("all");
  };

  const syncPackage = async (packageId: string) => {
    setSyncingId(packageId);
    setError(null);

    try {
      const response = await fetch(`/api/admin/pricing/${packageId}/sync`, {
        method: "POST",
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "同步失敗");
      }

      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "同步失敗");
    } finally {
      setSyncingId(null);
    }
  };

  return (
    <AdminShell title="計價總覽">
      <div className="admin-panel admin-pricing">
        <details className="admin-pricing-note">
          <summary>使用說明</summary>
          <p>
            唯讀瀏覽 Corivo 計價快照。參考價假設為 2 位成人、舒適型房型；供應商價與前台售價（+15%）並列，台幣為政策參考匯率換算（
            <AdminFxRateNote />
            ）。快照有效期 30 天，調價或上新套餐後請手動同步。
          </p>
        </details>

        {error && <p className="admin-error" role="alert">{error}</p>}

        <section className="admin-pricing-kpis" aria-label="快照狀態統計">
          {(
            [
              { key: "all" as const, label: "全部套餐", count: total },
              { key: "healthy" as const, label: "正常", count: statusCounts.healthy },
              { key: "expired" as const, label: "已過期", count: statusCounts.expired },
              { key: "missing" as const, label: "無快照", count: statusCounts.missing },
            ] as const
          ).map((item) => (
            <button
              key={item.key}
              type="button"
              className={`admin-pricing-kpi${
                status === item.key ? " admin-pricing-kpi--active" : ""
              } admin-pricing-kpi--${item.key}`}
              onClick={() => setStatus(item.key)}
              disabled={loading}
            >
              <span className="admin-pricing-kpi__value">{item.count}</span>
              <span className="admin-pricing-kpi__label">{item.label}</span>
            </button>
          ))}
        </section>

        <section className="admin-card admin-pricing-toolbar">
          <div className="admin-pricing-toolbar__search">
            <label className="admin-field admin-field--grow">
              <span className="admin-field__label">搜尋</span>
              <input
                type="search"
                className="admin-field__input"
                value={q}
                onChange={(event) => setQ(event.target.value)}
                placeholder="行程代碼、行程名稱、系統代碼、天數、Corivo ID"
              />
            </label>
            <div className="admin-pricing-toolbar__actions">
              {hasActiveFilters ? (
                <button
                  type="button"
                  className="admin-btn admin-btn--ghost"
                  onClick={clearFilters}
                >
                  清除篩選
                </button>
              ) : null}
              <button
                type="button"
                className="admin-btn admin-btn--ghost"
                disabled={loading}
                onClick={() => void load()}
              >
                {loading ? "載入中…" : "重新載入"}
              </button>
            </div>
          </div>

          <div className="admin-pricing-toolbar__categories">
            <span className="admin-pricing-toolbar__categories-label">分類</span>
            <div className="admin-category-summary">
              <button
                type="button"
                className={`admin-category-chip${
                  category === "all" ? " admin-category-chip--active" : ""
                }`}
                onClick={() => setCategory("all")}
              >
                全部
                <span className="admin-category-chip__count">{total}</span>
              </button>
              {PRICING_PACKAGE_CATEGORY_ORDER.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`admin-category-chip${
                    category === key ? " admin-category-chip--active" : ""
                  }`}
                  onClick={() => setCategory(key)}
                >
                  {PRICING_PACKAGE_CATEGORY_LABELS[key]}
                  <span className="admin-category-chip__count">
                    {categoryCounts[key]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="admin-pricing-toolbar__fx">
            <AdminFxRateChip />
          </div>

          {!loading && filteredPackages.length !== total ? (
            <p className="admin-pricing-toolbar__meta admin-muted">
              顯示 <strong>{filteredPackages.length}</strong> / {total} 筆套餐
            </p>
          ) : null}
        </section>

        {loading ? (
          <div className="admin-table-wrap admin-table-wrap--sticky">
            <table className="admin-table admin-table--pricing">
              <thead>
                <tr>
                  <th>行程</th>
                  <th>分類</th>
                  <th>天數</th>
                  <th>快照</th>
                  <th>更新</th>
                  <th>狀態</th>
                  <th>參考價</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }, (_, index) => (
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
        ) : filteredPackages.length === 0 ? (
          <section className="admin-card admin-pricing-empty">
            <p className="admin-pricing-empty__title">沒有符合條件的套餐</p>
            <p className="admin-muted">
              {hasActiveFilters
                ? "請調整搜尋或篩選條件，或清除篩選後再試。"
                : "目前尚無可顯示的 Corivo 套餐。"}
            </p>
            {hasActiveFilters ? (
              <button
                type="button"
                className="admin-btn admin-btn--ghost"
                onClick={clearFilters}
              >
                清除篩選
              </button>
            ) : null}
          </section>
        ) : (
          <div className="admin-table-wrap admin-table-wrap--sticky">
            <table className="admin-table admin-table--pricing">
              <thead>
                <tr>
                  <th className="admin-table__sticky-col">行程</th>
                  <th>分類</th>
                  <th>天數</th>
                  <th>快照</th>
                  <th>更新</th>
                  <th>狀態</th>
                  <th>
                    參考價
                    <span className="admin-table__th-hint">2 成人・舒適型</span>
                  </th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {filteredPackages.map((pkg) => {
                  const pkgStatus = snapshotStatus(pkg);
                  const matrixHref = `/admin/pricing/${encodeURIComponent(pkg.packageId)}`;

                  return (
                    <tr key={pkg.packageId} className="admin-table__data-row">
                      <td className="admin-table__sticky-col admin-table__trip">
                        <Link href={matrixHref} className="admin-table__trip-link">
                          <span className="admin-table__tour-code">
                            {pkg.tourCode ?? pkg.packageId}
                          </span>
                          {pkg.packageTitle ? (
                            <span className="admin-table__package-title">
                              {pkg.packageTitle}
                            </span>
                          ) : null}
                        </Link>
                      </td>
                      <td className="admin-table__category">
                        {pkg.categoryLabel ?? "—"}
                      </td>
                      <td className="tabular-nums">{pkg.tripDays ?? "—"}</td>
                      <td className="tabular-nums">{pkg.snapshotCount}</td>
                      <td
                        className="admin-table__updated"
                        title={
                          pkg.updatedAt
                            ? new Date(pkg.updatedAt).toLocaleString("zh-TW")
                            : undefined
                        }
                      >
                        {formatShortUpdatedAt(pkg.updatedAt)}
                      </td>
                      <td>
                        <PricingStatusBadge status={pkgStatus} />
                      </td>
                      <td className="admin-table__prices">
                        <AdminReferencePriceBlock
                          supplier={pkg.referenceSupplierPrice}
                          retail={pkg.referenceRetailPrice}
                          deposit={pkg.referenceDeposit}
                        />
                      </td>
                      <td>
                        <div className="admin-actions admin-actions--inline admin-pricing-row-actions">
                          <Link
                            href={matrixHref}
                            className="admin-btn admin-btn--ghost admin-btn--sm"
                          >
                            矩陣
                          </Link>
                          <button
                            type="button"
                            className="admin-btn admin-btn--ghost admin-btn--sm"
                            disabled={syncingId === pkg.packageId}
                            onClick={() => void syncPackage(pkg.packageId)}
                          >
                            {syncingId === pkg.packageId ? "同步中…" : "同步"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
