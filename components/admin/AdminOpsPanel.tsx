"use client";

import { useCallback, useEffect, useState } from "react";
import { AdminShell } from "./AdminShell";

type PromoRow = {
  code: string;
  label: string;
  type: string;
  value: number;
  active: boolean;
  maxUses: number | null;
  used: number;
  remaining: number | null;
};

type SyncReport = {
  packageId: string;
  ok: boolean;
  error?: string;
};

export function AdminOpsPanel() {
  const [promos, setPromos] = useState<PromoRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncLoading, setSyncLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [syncResult, setSyncResult] = useState<string | null>(null);

  const loadPromos = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/ops/promos");
      const data = (await response.json()) as {
        promos?: PromoRow[];
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "讀取失敗");
      }

      setPromos(data.promos ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "讀取失敗");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadPromos();
  }, [loadPromos]);

  const runSync = async () => {
    setSyncLoading(true);
    setSyncResult(null);
    setError(null);

    try {
      const response = await fetch("/api/admin/ops/sync-pricing", {
        method: "POST",
      });
      const data = (await response.json()) as {
        ok?: boolean;
        syncedAt?: string;
        reports?: SyncReport[];
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "同步失敗");
      }

      const failed = (data.reports ?? []).filter((report) => !report.ok);
      setSyncResult(
        failed.length > 0
          ? `同步完成（${data.syncedAt}），${failed.length} 個套餐失敗`
          : `同步成功（${data.syncedAt}）`,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "同步失敗");
    } finally {
      setSyncLoading(false);
    }
  };

  return (
    <AdminShell title="營運工具">
      <div className="admin-panel">
        <section className="admin-card">
          <h3 className="admin-card__title">計價同步</h3>
          <p className="admin-muted">
            手動觸發 Corivo 計價快照同步（與每日 cron 相同）。
          </p>
          <button
            type="button"
            className="admin-btn admin-btn--primary"
            disabled={syncLoading}
            onClick={() => void runSync()}
          >
            {syncLoading ? "同步中…" : "立即同步計價"}
          </button>
          {syncResult && <p className="admin-notice">{syncResult}</p>}
        </section>

        <section className="admin-card">
          <h3 className="admin-card__title">優惠碼用量（唯讀）</h3>
          <p className="admin-muted">
            優惠碼定義在 Git（lib/promo/registry.ts），此處僅顯示使用次數。
          </p>

          {loading ? (
            <p className="admin-muted">載入中…</p>
          ) : promos.length === 0 ? (
            <p className="admin-muted">尚無優惠碼。</p>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>代碼</th>
                    <th>名稱</th>
                    <th>類型</th>
                    <th>已用</th>
                    <th>上限</th>
                    <th>狀態</th>
                  </tr>
                </thead>
                <tbody>
                  {promos.map((promo) => (
                    <tr key={promo.code}>
                      <td className="admin-table__mono">{promo.code}</td>
                      <td>{promo.label}</td>
                      <td>
                        {promo.type === "percent"
                          ? `${promo.value}%`
                          : `ISK ${promo.value}`}
                      </td>
                      <td>{promo.used}</td>
                      <td>{promo.maxUses ?? "—"}</td>
                      <td>{promo.active ? "啟用" : "停用"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {error && <p className="admin-error" role="alert">{error}</p>}
      </div>
    </AdminShell>
  );
}
