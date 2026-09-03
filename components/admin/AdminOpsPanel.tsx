"use client";

import { useCallback, useEffect, useState } from "react";
import type { PricingPackageCategory } from "@/lib/admin/pricing-package-category";
import {
  AdminPromoForm,
  EMPTY_PROMO_FORM,
  promoFormToPayload,
  promoToFormValues,
  type PromoFormValues,
} from "./AdminPromoForm";
import { AdminShell } from "./AdminShell";

type PromoRow = {
  code: string;
  label: string;
  type: string;
  value: number;
  categories: PricingPackageCategory[];
  categoriesLabel: string;
  source: "registry" | "dynamic";
  registryActive: boolean;
  active: boolean;
  registryMaxUses: number | null;
  maxUses: number | null;
  registryValidUntil: string | null;
  validUntil: string | null;
  validFrom: string | null;
  departureFrom: string | null;
  departureUntil: string | null;
  minTravelers: number | null;
  minOrderTotal: number | null;
  perCustomerLimit: number | null;
  used: number;
  remaining: number | null;
  hasOverride: boolean;
  overrideUpdatedAt: string | null;
};

type SyncReport = {
  packageId: string;
  pricesSynced: number;
  pricesFailed: number;
  availabilitySynced: number;
  availabilityFailed: number;
  durationMs: number;
  errors: string[];
};

type PromoDraft = {
  maxUses: string;
  validUntil: string;
};

function PromoSourceBadge({ source }: { source: PromoRow["source"] }) {
  return (
    <span
      className={
        source === "registry"
          ? "admin-status admin-status--awaiting_supplier"
          : "admin-status admin-status--payment_confirmed"
      }
    >
      {source === "registry" ? "Git" : "後台"}
    </span>
  );
}

function PromoOpsRow({
  promo,
  savingCode,
  editingCode,
  onSave,
  onToggleActive,
  onEdit,
  onDelete,
}: {
  promo: PromoRow;
  savingCode: string | null;
  editingCode: string | null;
  onSave: (code: string, patch: { maxUses?: number | null; validUntil?: string | null }) => void;
  onToggleActive: (code: string, active: boolean) => void;
  onEdit: (code: string) => void;
  onDelete: (code: string) => void;
}) {
  const [draft, setDraft] = useState<PromoDraft>({
    maxUses: promo.maxUses?.toString() ?? "",
    validUntil: promo.validUntil ?? "",
  });
  const isSaving = savingCode === promo.code;
  const isEditing = editingCode === promo.code;

  useEffect(() => {
    setDraft({
      maxUses: promo.maxUses?.toString() ?? "",
      validUntil: promo.validUntil ?? "",
    });
  }, [promo.maxUses, promo.validUntil]);

  return (
    <tr>
      <td>
        <div className="admin-promo-code-cell">
          <span className="admin-table__mono">{promo.code}</span>
          <PromoSourceBadge source={promo.source} />
        </div>
      </td>
      <td>{promo.label}</td>
      <td>{promo.categoriesLabel}</td>
      <td>
        {promo.type === "percent" ? `${promo.value}%` : `ISK ${promo.value}`}
      </td>
      <td>
        {promo.used}
        {promo.maxUses != null ? ` / ${promo.maxUses}` : ""}
      </td>
      <td>{promo.remaining ?? "—"}</td>
      <td>
        {promo.source === "registry" ? (
          <>
            <input
              type="date"
              className="admin-field__input admin-promo-input"
              value={draft.validUntil}
              onChange={(event) =>
                setDraft((current) => ({
                  ...current,
                  validUntil: event.target.value,
                }))
              }
            />
            {promo.registryValidUntil &&
              promo.validUntil !== promo.registryValidUntil && (
                <span className="admin-muted admin-promo-hint">
                  Git：{promo.registryValidUntil}
                </span>
              )}
          </>
        ) : (
          promo.validUntil ?? "—"
        )}
      </td>
      <td>
        <span
          className={
            promo.active
              ? "admin-status admin-status--payment_confirmed"
              : "admin-status admin-status--pending_payment"
          }
        >
          {promo.active ? "啟用" : "停用"}
        </span>
        {promo.hasOverride && promo.active !== promo.registryActive && (
          <span className="admin-muted admin-promo-hint">已覆寫</span>
        )}
      </td>
      <td>
        <div className="admin-promo-actions">
          {promo.source === "registry" ? (
            <>
              <input
                type="number"
                min={0}
                className="admin-field__input admin-promo-input admin-promo-input--number"
                value={draft.maxUses}
                placeholder="無上限"
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    maxUses: event.target.value,
                  }))
                }
              />
              <button
                type="button"
                className="admin-btn admin-btn--ghost"
                disabled={isSaving}
                onClick={() =>
                  onSave(promo.code, {
                    maxUses:
                      draft.maxUses.trim() === ""
                        ? null
                        : Number.parseInt(draft.maxUses, 10),
                    validUntil:
                      draft.validUntil.trim() === "" ? null : draft.validUntil,
                  })
                }
              >
                儲存
              </button>
              <button
                type="button"
                className={`admin-btn ${promo.active ? "admin-btn--danger" : "admin-btn--primary"}`}
                disabled={isSaving}
                onClick={() => onToggleActive(promo.code, !promo.active)}
              >
                {promo.active ? "停用" : "啟用"}
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="admin-btn admin-btn--ghost"
                disabled={isSaving}
                onClick={() => onEdit(promo.code)}
              >
                {isEditing ? "編輯中" : "編輯"}
              </button>
              <button
                type="button"
                className={`admin-btn ${promo.active ? "admin-btn--danger" : "admin-btn--primary"}`}
                disabled={isSaving}
                onClick={() => onToggleActive(promo.code, !promo.active)}
              >
                {promo.active ? "停用" : "啟用"}
              </button>
              <button
                type="button"
                className="admin-btn admin-btn--danger"
                disabled={isSaving}
                onClick={() => onDelete(promo.code)}
              >
                刪除
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

export function AdminOpsPanel() {
  const [promos, setPromos] = useState<PromoRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingCode, setSavingCode] = useState<string | null>(null);
  const [syncLoading, setSyncLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [syncResult, setSyncResult] = useState<string | null>(null);
  const [reports, setReports] = useState<SyncReport[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [createForm, setCreateForm] = useState<PromoFormValues>(EMPTY_PROMO_FORM);
  const [editingCode, setEditingCode] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<PromoFormValues>(EMPTY_PROMO_FORM);

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

  const updatePromo = async (
    code: string,
    patch: Record<string, unknown>,
  ) => {
    setSavingCode(code);
    setError(null);

    try {
      const response = await fetch(
        `/api/admin/ops/promos/${encodeURIComponent(code)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(patch),
        },
      );
      const data = (await response.json()) as {
        promo?: PromoRow;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "更新失敗");
      }

      if (data.promo) {
        setPromos((current) =>
          current.map((promo) =>
            promo.code === data.promo!.code ? data.promo! : promo,
          ),
        );
      } else {
        await loadPromos();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "更新失敗");
    } finally {
      setSavingCode(null);
    }
  };

  const createPromo = async () => {
    setSavingCode("__create__");
    setError(null);

    try {
      const response = await fetch("/api/admin/ops/promos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(promoFormToPayload(createForm)),
      });
      const data = (await response.json()) as {
        promo?: PromoRow;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "建立失敗");
      }

      if (data.promo) {
        setPromos((current) =>
          [...current, data.promo!].sort((a, b) => a.code.localeCompare(b.code)),
        );
      } else {
        await loadPromos();
      }

      setCreateForm(EMPTY_PROMO_FORM);
      setShowCreateForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "建立失敗");
    } finally {
      setSavingCode(null);
    }
  };

  const saveEditedPromo = async () => {
    if (!editingCode) return;
    await updatePromo(editingCode, promoFormToPayload(editForm));
    setEditingCode(null);
    setEditForm(EMPTY_PROMO_FORM);
  };

  const deletePromo = async (code: string) => {
    if (!window.confirm(`確定刪除優惠碼 ${code}？此操作無法復原。`)) {
      return;
    }

    setSavingCode(code);
    setError(null);

    try {
      const response = await fetch(
        `/api/admin/ops/promos/${encodeURIComponent(code)}`,
        { method: "DELETE" },
      );
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "刪除失敗");
      }

      setPromos((current) => current.filter((promo) => promo.code !== code));
      if (editingCode === code) {
        setEditingCode(null);
        setEditForm(EMPTY_PROMO_FORM);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "刪除失敗");
    } finally {
      setSavingCode(null);
    }
  };

  const startEdit = (code: string) => {
    const promo = promos.find((entry) => entry.code === code);
    if (!promo || promo.source !== "dynamic") return;
    setEditingCode(code);
    setEditForm(promoToFormValues(promo));
    setShowCreateForm(false);
  };

  const runSync = async () => {
    setSyncLoading(true);
    setSyncResult(null);
    setError(null);
    setReports([]);

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

      const reportList = data.reports ?? [];
      setReports(reportList);

      const failed = reportList.filter(
        (report) => report.pricesFailed > 0 || report.errors.length > 0,
      );
      setSyncResult(
        failed.length > 0
          ? `同步完成（${data.syncedAt}），${failed.length} 個套餐有失敗項目`
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
            手動觸發 Corivo 計價快照全量同步。價格快照有效期 30 天；調價或上新套餐後請執行。
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

          {reports.length > 0 && (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>套餐</th>
                    <th>價格成功</th>
                    <th>價格失敗</th>
                    <th>可訂成功</th>
                    <th>可訂失敗</th>
                    <th>耗時</th>
                    <th>錯誤</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.packageId}>
                      <td className="admin-table__mono">{report.packageId}</td>
                      <td>{report.pricesSynced}</td>
                      <td>{report.pricesFailed}</td>
                      <td>{report.availabilitySynced}</td>
                      <td>{report.availabilityFailed}</td>
                      <td>{Math.round(report.durationMs / 1000)}s</td>
                      <td>
                        {report.errors.length > 0
                          ? report.errors.slice(0, 2).join("；")
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="admin-card">
          <div className="admin-card__header">
            <div>
              <h3 className="admin-card__title">優惠碼</h3>
              <p className="admin-muted">
                Git 定義的優惠碼可緊急停用或調整上限；後台建立的優惠碼可完整編輯，立即生效。
              </p>
            </div>
            <button
              type="button"
              className="admin-btn admin-btn--primary"
              onClick={() => {
                setShowCreateForm((current) => !current);
                setEditingCode(null);
              }}
            >
              {showCreateForm ? "收起表單" : "新增優惠碼"}
            </button>
          </div>

          {showCreateForm && (
            <AdminPromoForm
              values={createForm}
              onChange={setCreateForm}
              submitLabel="建立優惠碼"
              submitting={savingCode === "__create__"}
              onSubmit={() => void createPromo()}
              onCancel={() => {
                setShowCreateForm(false);
                setCreateForm(EMPTY_PROMO_FORM);
              }}
            />
          )}

          {editingCode && (
            <div className="admin-promo-edit-panel">
              <h4 className="admin-card__subtitle">編輯 {editingCode}</h4>
              <AdminPromoForm
                values={editForm}
                onChange={setEditForm}
                codeReadOnly
                submitLabel="儲存變更"
                submitting={savingCode === editingCode}
                onSubmit={() => void saveEditedPromo()}
                onCancel={() => {
                  setEditingCode(null);
                  setEditForm(EMPTY_PROMO_FORM);
                }}
              />
            </div>
          )}

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
                    <th>適用分類</th>
                    <th>折扣</th>
                    <th>已用</th>
                    <th>剩餘</th>
                    <th>有效至</th>
                    <th>狀態</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {promos.map((promo) => (
                    <PromoOpsRow
                      key={promo.code}
                      promo={promo}
                      savingCode={savingCode}
                      editingCode={editingCode}
                      onSave={updatePromo}
                      onToggleActive={(code, active) =>
                        void updatePromo(code, { active })
                      }
                      onEdit={startEdit}
                      onDelete={(code) => void deletePromo(code)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {error && (
          <p className="admin-error" role="alert">
            {error}
          </p>
        )}
      </div>
    </AdminShell>
  );
}
