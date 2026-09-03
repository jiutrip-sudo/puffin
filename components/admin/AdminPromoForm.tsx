"use client";

import {
  PRICING_PACKAGE_CATEGORY_LABELS,
  PRICING_PACKAGE_CATEGORY_ORDER,
  type PricingPackageCategory,
} from "@/lib/admin/pricing-package-category";

export type PromoFormValues = {
  code: string;
  label: string;
  type: "percent" | "fixed_isk";
  value: string;
  active: boolean;
  categories: PricingPackageCategory[];
  validFrom: string;
  validUntil: string;
  departureFrom: string;
  departureUntil: string;
  minTravelers: string;
  maxUses: string;
  minOrderTotal: string;
  perCustomerLimit: string;
};

export const EMPTY_PROMO_FORM: PromoFormValues = {
  code: "",
  label: "",
  type: "percent",
  value: "",
  active: true,
  categories: [],
  validFrom: "",
  validUntil: "",
  departureFrom: "",
  departureUntil: "",
  minTravelers: "",
  maxUses: "",
  minOrderTotal: "",
  perCustomerLimit: "",
};

type PromoFormSource = {
  code: string;
  label: string;
  type: string;
  value: number;
  active: boolean;
  categories: PricingPackageCategory[];
  validFrom: string | null;
  validUntil: string | null;
  departureFrom: string | null;
  departureUntil: string | null;
  minTravelers: number | null;
  maxUses: number | null;
  minOrderTotal: number | null;
  perCustomerLimit: number | null;
};

export function promoToFormValues(promo: PromoFormSource): PromoFormValues {
  return {
    code: promo.code,
    label: promo.label,
    type: promo.type === "fixed_isk" ? "fixed_isk" : "percent",
    value: promo.value.toString(),
    active: promo.active,
    categories: promo.categories,
    validFrom: promo.validFrom ?? "",
    validUntil: promo.validUntil ?? "",
    departureFrom: promo.departureFrom ?? "",
    departureUntil: promo.departureUntil ?? "",
    minTravelers: promo.minTravelers?.toString() ?? "",
    maxUses: promo.maxUses?.toString() ?? "",
    minOrderTotal: promo.minOrderTotal?.toString() ?? "",
    perCustomerLimit: promo.perCustomerLimit?.toString() ?? "",
  };
}

export function promoFormToPayload(values: PromoFormValues) {
  return {
    code: values.code.trim().toUpperCase(),
    label: values.label.trim(),
    type: values.type,
    value: Number.parseFloat(values.value),
    active: values.active,
    categories: values.categories,
    validFrom: values.validFrom.trim() || null,
    validUntil: values.validUntil.trim() || null,
    departureFrom: values.departureFrom.trim() || null,
    departureUntil: values.departureUntil.trim() || null,
    minTravelers:
      values.minTravelers.trim() === ""
        ? null
        : Number.parseInt(values.minTravelers, 10),
    maxUses:
      values.maxUses.trim() === "" ? null : Number.parseInt(values.maxUses, 10),
    minOrderTotal:
      values.minOrderTotal.trim() === ""
        ? null
        : Number.parseInt(values.minOrderTotal, 10),
    perCustomerLimit:
      values.perCustomerLimit.trim() === ""
        ? null
        : Number.parseInt(values.perCustomerLimit, 10),
  };
}

export function AdminPromoForm({
  values,
  onChange,
  codeReadOnly = false,
  submitLabel,
  onSubmit,
  onCancel,
  submitting = false,
}: {
  values: PromoFormValues;
  onChange: (values: PromoFormValues) => void;
  codeReadOnly?: boolean;
  submitLabel: string;
  onSubmit: () => void;
  onCancel?: () => void;
  submitting?: boolean;
}) {
  const toggleCategory = (category: PricingPackageCategory) => {
    onChange({
      ...values,
      categories: values.categories.includes(category)
        ? values.categories.filter((entry) => entry !== category)
        : [...values.categories, category],
    });
  };

  return (
    <div className="admin-promo-form">
      <div className="admin-promo-form__grid">
        <label className="admin-field">
          <span className="admin-field__label">優惠碼</span>
          <input
            className="admin-field__input"
            value={values.code}
            readOnly={codeReadOnly}
            placeholder="例如 KOL2026"
            onChange={(event) =>
              onChange({
                ...values,
                code: event.target.value.toUpperCase(),
              })
            }
          />
        </label>

        <label className="admin-field">
          <span className="admin-field__label">顯示名稱</span>
          <input
            className="admin-field__input"
            value={values.label}
            onChange={(event) =>
              onChange({ ...values, label: event.target.value })
            }
          />
        </label>

        <label className="admin-field">
          <span className="admin-field__label">折扣類型</span>
          <select
            className="admin-field__input"
            value={values.type}
            onChange={(event) =>
              onChange({
                ...values,
                type: event.target.value as PromoFormValues["type"],
              })
            }
          >
            <option value="percent">百分比</option>
            <option value="fixed_isk">固定 ISK</option>
          </select>
        </label>

        <label className="admin-field">
          <span className="admin-field__label">
            {values.type === "percent" ? "折扣 %" : "折抵 ISK"}
          </span>
          <input
            type="number"
            min={1}
            className="admin-field__input"
            value={values.value}
            onChange={(event) =>
              onChange({ ...values, value: event.target.value })
            }
          />
        </label>

        <label className="admin-field">
          <span className="admin-field__label">生效日</span>
          <input
            type="date"
            className="admin-field__input"
            value={values.validFrom}
            onChange={(event) =>
              onChange({ ...values, validFrom: event.target.value })
            }
          />
        </label>

        <label className="admin-field">
          <span className="admin-field__label">失效日</span>
          <input
            type="date"
            className="admin-field__input"
            value={values.validUntil}
            onChange={(event) =>
              onChange({ ...values, validUntil: event.target.value })
            }
          />
        </label>

        <label className="admin-field">
          <span className="admin-field__label">出發日起</span>
          <input
            type="date"
            className="admin-field__input"
            value={values.departureFrom}
            onChange={(event) =>
              onChange({ ...values, departureFrom: event.target.value })
            }
          />
        </label>

        <label className="admin-field">
          <span className="admin-field__label">出發日迄</span>
          <input
            type="date"
            className="admin-field__input"
            value={values.departureUntil}
            onChange={(event) =>
              onChange({ ...values, departureUntil: event.target.value })
            }
          />
        </label>

        <label className="admin-field">
          <span className="admin-field__label">最低人數</span>
          <input
            type="number"
            min={1}
            className="admin-field__input"
            value={values.minTravelers}
            placeholder="不限"
            onChange={(event) =>
              onChange({ ...values, minTravelers: event.target.value })
            }
          />
        </label>

        <label className="admin-field">
          <span className="admin-field__label">使用上限</span>
          <input
            type="number"
            min={1}
            className="admin-field__input"
            value={values.maxUses}
            placeholder="不限"
            onChange={(event) =>
              onChange({ ...values, maxUses: event.target.value })
            }
          />
        </label>

        <label className="admin-field">
          <span className="admin-field__label">最低訂單金額（ISK）</span>
          <input
            type="number"
            min={1}
            className="admin-field__input"
            value={values.minOrderTotal}
            placeholder="不限"
            onChange={(event) =>
              onChange({ ...values, minOrderTotal: event.target.value })
            }
          />
        </label>

        <label className="admin-field">
          <span className="admin-field__label">每人限用次數</span>
          <input
            type="number"
            min={1}
            className="admin-field__input"
            value={values.perCustomerLimit}
            placeholder="不限"
            onChange={(event) =>
              onChange({ ...values, perCustomerLimit: event.target.value })
            }
          />
        </label>
      </div>

      <fieldset className="admin-promo-form__categories">
        <legend className="admin-field__label">適用分類（未選則全站）</legend>
        <div className="admin-promo-form__category-list">
          {PRICING_PACKAGE_CATEGORY_ORDER.map((category) => (
            <label key={category} className="admin-promo-form__category">
              <input
                type="checkbox"
                checked={values.categories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <span>{PRICING_PACKAGE_CATEGORY_LABELS[category]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="admin-promo-form__active">
        <input
          type="checkbox"
          checked={values.active}
          onChange={(event) =>
            onChange({ ...values, active: event.target.checked })
          }
        />
        <span>建立後立即啟用</span>
      </label>

      <div className="admin-promo-actions">
        <button
          type="button"
          className="admin-btn admin-btn--primary"
          disabled={submitting}
          onClick={onSubmit}
        >
          {submitting ? "處理中…" : submitLabel}
        </button>
        {onCancel && (
          <button
            type="button"
            className="admin-btn admin-btn--ghost"
            disabled={submitting}
            onClick={onCancel}
          >
            取消
          </button>
        )}
      </div>
    </div>
  );
}
