import {
  PRICING_PACKAGE_CATEGORY_LABELS,
  type PricingPackageCategory,
} from "@/lib/admin/pricing-package-category";
import {
  createDynamicPromo,
  deleteDynamicPromo,
  getAllDynamicPromos,
  updateDynamicPromo,
} from "@/lib/promo/dynamic";
import { parsePromoDefinitionInput } from "@/lib/promo/definition-schema";
import { formatPromoCategories } from "@/lib/promo/package-match";
import { getPromoUseCount } from "@/lib/promo/promo-uses";
import { getAllPromoOverrides, type PromoOperationalOverride } from "@/lib/promo/overrides";
import { resolvePromoDefinition } from "@/lib/promo/resolve";
import { PROMO_CODES, findPromoDefinition } from "@/lib/promo/registry";
import type { PromoCodeDefinition, PromoDefinitionSource } from "@/lib/promo/types";

export type AdminPromoRow = {
  code: string;
  label: string;
  type: string;
  value: number;
  categories: PricingPackageCategory[];
  categoriesLabel: string;
  source: PromoDefinitionSource;
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
  createdAt: string | null;
  updatedAt: string | null;
};

function summarizePromoRow(
  base: PromoCodeDefinition,
  source: PromoDefinitionSource,
  options: {
    override?: PromoOperationalOverride | null;
    used: number;
    createdAt?: string | null;
    updatedAt?: string | null;
  },
): AdminPromoRow {
  const override = options.override ?? null;
  const effective = resolvePromoDefinition(base, override);
  const maxUses = effective.maxUses ?? null;

  return {
    code: base.code,
    label: base.label,
    type: base.type,
    value: base.value,
    categories: base.categories ?? [],
    categoriesLabel: formatPromoCategories(base.categories),
    source,
    registryActive: base.active,
    active: effective.active,
    registryMaxUses: base.maxUses ?? null,
    maxUses,
    registryValidUntil: base.validUntil ?? null,
    validUntil: effective.validUntil ?? null,
    validFrom: base.validFrom ?? null,
    departureFrom: base.departureFrom ?? null,
    departureUntil: base.departureUntil ?? null,
    minTravelers: base.minTravelers ?? null,
    minOrderTotal: base.minOrderTotal ?? null,
    perCustomerLimit: base.perCustomerLimit ?? null,
    used: options.used,
    remaining: maxUses != null ? Math.max(0, maxUses - options.used) : null,
    hasOverride: override != null,
    overrideUpdatedAt: override?.updatedAt ?? null,
    createdAt: options.createdAt ?? null,
    updatedAt: options.updatedAt ?? null,
  };
}

export async function listAdminPromos(): Promise<AdminPromoRow[]> {
  const [overrides, dynamicPromos] = await Promise.all([
    getAllPromoOverrides(),
    getAllDynamicPromos(),
  ]);

  const registryRows = await Promise.all(
    PROMO_CODES.map(async (base) => {
      const override = overrides[base.code] ?? null;
      const used = await getPromoUseCount(base.code);
      return summarizePromoRow(base, "registry", {
        override,
        used,
        updatedAt: override?.updatedAt ?? null,
      });
    }),
  );

  const dynamicRows = await Promise.all(
    dynamicPromos.map(async (record) => {
      const used = await getPromoUseCount(record.code);
      const { createdAt, updatedAt, ...base } = record;
      return summarizePromoRow(base, "dynamic", {
        used,
        createdAt,
        updatedAt,
      });
    }),
  );

  return [...registryRows, ...dynamicRows].sort((a, b) =>
    a.code.localeCompare(b.code),
  );
}

export function getRegistryPromo(code: string): PromoCodeDefinition | undefined {
  return findPromoDefinition(code);
}

export async function createAdminPromo(
  input: Parameters<typeof parsePromoDefinitionInput>[0],
): Promise<AdminPromoRow> {
  const definition = parsePromoDefinitionInput(input, { requireCode: true });
  const record = await createDynamicPromo(definition);
  const used = await getPromoUseCount(record.code);
  const { createdAt, updatedAt, ...base } = record;
  return summarizePromoRow(base, "dynamic", { used, createdAt, updatedAt });
}

export async function updateAdminDynamicPromo(
  code: string,
  input: Parameters<typeof parsePromoDefinitionInput>[0],
): Promise<AdminPromoRow> {
  const definition = parsePromoDefinitionInput(input, { existingCode: code });
  const record = await updateDynamicPromo(code, definition);
  const used = await getPromoUseCount(record.code);
  const { createdAt, updatedAt, ...base } = record;
  return summarizePromoRow(base, "dynamic", { used, createdAt, updatedAt });
}

export async function deleteAdminDynamicPromo(code: string): Promise<void> {
  await deleteDynamicPromo(code);
}

export function formatCategoryLabels(
  categories: PricingPackageCategory[],
): string {
  if (!categories.length) return "全站";
  return categories
    .map((category) => PRICING_PACKAGE_CATEGORY_LABELS[category])
    .join("、");
}
