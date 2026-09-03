"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
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
  referenceSupplierPriceLabel: string | null;
  referenceRetailPriceLabel: string | null;
};

type SnapshotStatus = "all" | "healthy" | "expired" | "missing";

function snapshotStatus(pkg: PackageSummary): SnapshotStatus {
  if (pkg.snapshotCount === 0) return "missing";
  if (pkg.isExpired) return "expired";
  return "healthy";
}

const STATUS_LABELS: Record<Exclude<SnapshotStatus, "all">, string> = {
  healthy: "正常",
  expired: "已過期",
  missing: "無快照",
};

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
      <div className="admin-panel">
        <p className="admin-muted">
          唯讀瀏覽 Corivo 計價快照；供應商價與前台售價（+15%）並列。價格快照有效期 30 天，請於調價或上新套餐後手動同步。
        </p>

        {!loading && (
          <section className="admin-card">
            <h3 className="admin-card__title">套餐統計</h3>
            <p className="admin-muted">
              共 <strong>{total}</strong> 筆 Corivo 套餐
              {filteredPackages.length !== total && (
                <>
                  {" "}
                  · 篩選後 <strong>{filteredPackages.length}</strong> 筆
                </>
              )}
            </p>
            <div className="admin-category-summary">
              {PRICING_PACKAGE_CATEGORY_ORDER.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`admin-category-chip${
                    category === key ? " admin-category-chip--active" : ""
                  }`}
                  onClick={() =>
                    setCategory((current) => (current === key ? "all" : key))
                  }
                >
                  {PRICING_PACKAGE_CATEGORY_LABELS[key]}
                  <span className="admin-category-chip__count">
                    {categoryCounts[key]}
                  </span>
                </button>
              ))}
              {category !== "all" && (
                <button
                  type="button"
                  className="admin-link admin-category-summary__clear"
                  onClick={() => setCategory("all")}
                >
                  顯示全部 {total} 筆
                </button>
              )}
            </div>
          </section>
        )}

        <section className="admin-card">
          <h3 className="admin-card__title">篩選</h3>
          <div className="admin-filter-grid">
            <label className="admin-field">
              <span className="admin-field__label">關鍵字</span>
              <input
                type="search"
                className="admin-field__input"
                value={q}
                onChange={(event) => setQ(event.target.value)}
                placeholder="行程代碼、系統代碼、天數、Corivo ID"
              />
            </label>
            <label className="admin-field">
              <span className="admin-field__label">分類</span>
              <select
                className="admin-field__input"
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value as PricingPackageCategory | "all")
                }
              >
                <option value="all">全部（{total}）</option>
                {PRICING_PACKAGE_CATEGORY_ORDER.map((key) => (
                  <option key={key} value={key}>
                    {PRICING_PACKAGE_CATEGORY_LABELS[key]}（{categoryCounts[key]}）
                  </option>
                ))}
              </select>
            </label>
            <label className="admin-field">
              <span className="admin-field__label">快照狀態</span>
              <select
                className="admin-field__input"
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value as SnapshotStatus)
                }
              >
                <option value="all">全部</option>
                <option value="healthy">正常</option>
                <option value="expired">已過期</option>
                <option value="missing">無快照</option>
              </select>
            </label>
          </div>
        </section>

        {loading ? (
          <p className="admin-muted">載入中…</p>
        ) : filteredPackages.length === 0 ? (
          <p className="admin-muted">沒有符合條件的套餐。</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>分類</th>
                  <th>行程代碼</th>
                  <th>系統代碼</th>
                  <th>天數</th>
                  <th>快照筆數</th>
                  <th>更新時間</th>
                  <th>狀態</th>
                  <th>參考供應商價</th>
                  <th>參考售價</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {filteredPackages.map((pkg, index) => {
                  const pkgStatus = snapshotStatus(pkg);
                  const statusLabel =
                    pkgStatus === "healthy"
                      ? STATUS_LABELS.healthy
                      : pkgStatus === "expired"
                        ? STATUS_LABELS.expired
                        : STATUS_LABELS.missing;
                  return (
                    <tr key={pkg.packageId}>
                      <td className="tabular-nums admin-table__index">
                        {index + 1}
                      </td>
                      <td>{pkg.categoryLabel ?? "—"}</td>
                      <td className="admin-table__mono admin-table__tour-code">
                        {pkg.tourCode ?? "—"}
                      </td>
                      <td
                        className="admin-table__mono admin-table__system-code"
                        title={pkg.packageTitle ?? undefined}
                      >
                        {pkg.packageId}
                      </td>
                      <td>{pkg.tripDays ?? "—"}</td>
                      <td>{pkg.snapshotCount}</td>
                      <td>
                        {pkg.updatedAt
                          ? new Date(pkg.updatedAt).toLocaleString("zh-TW")
                          : "—"}
                      </td>
                      <td>{statusLabel}</td>
                      <td className="tabular-nums">
                        {pkg.referenceSupplierPriceLabel ?? "—"}
                      </td>
                      <td className="tabular-nums">
                        {pkg.referenceRetailPriceLabel ?? "—"}
                      </td>
                      <td>
                        <div className="admin-actions admin-actions--inline">
                          <Link
                            href={`/admin/pricing/${encodeURIComponent(pkg.packageId)}`}
                            className="admin-link"
                          >
                            矩陣
                          </Link>
                          <button
                            type="button"
                            className="admin-btn admin-btn--ghost"
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

        {error && <p className="admin-error" role="alert">{error}</p>}
      </div>
    </AdminShell>
  );
}
