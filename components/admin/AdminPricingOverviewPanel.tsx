"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AdminShell } from "./AdminShell";

type PackageSummary = {
  packageId: string;
  tripDays: number | null;
  corivoPackageTourId: number | null;
  snapshotCount: number;
  availabilityCount: number;
  updatedAt: string | null;
  isExpired: boolean;
  referenceSupplierPriceLabel: string | null;
  referenceRetailPriceLabel: string | null;
};

export function AdminPricingOverviewPanel() {
  const [packages, setPackages] = useState<PackageSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [syncingId, setSyncingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/pricing");
      const data = (await response.json()) as {
        packages?: PackageSummary[];
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "讀取失敗");
      }

      setPackages(data.packages ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "讀取失敗");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

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

        {loading ? (
          <p className="admin-muted">載入中…</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>套餐</th>
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
                {packages.map((pkg) => (
                  <tr key={pkg.packageId}>
                    <td className="admin-table__mono">{pkg.packageId}</td>
                    <td>{pkg.tripDays ?? "—"}</td>
                    <td>{pkg.snapshotCount}</td>
                    <td>
                      {pkg.updatedAt
                        ? new Date(pkg.updatedAt).toLocaleString("zh-TW")
                        : "—"}
                    </td>
                    <td>
                      {pkg.snapshotCount === 0
                        ? "無快照"
                        : pkg.isExpired
                          ? "已過期"
                          : "正常"}
                    </td>
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
                ))}
              </tbody>
            </table>
          </div>
        )}

        {error && <p className="admin-error" role="alert">{error}</p>}
      </div>
    </AdminShell>
  );
}
