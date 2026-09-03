import { formatIskAdmin } from "@/lib/i18n/display-money";
import { applyRetailMarkupAmount } from "@/lib/trip-pricing/retail-markup";
import {
  getAllPricingConfigs,
  usesCorivoPricing,
  getPricingConfig,
} from "@/lib/trip-pricing/fetch";
import { readPackagePricingSnapshot } from "@/lib/trip-pricing/pricing-snapshot-store";
import {
  isSnapshotFresh,
  PRICING_SNAPSHOT_MAX_AGE_MS,
  type PackagePricingSnapshot,
} from "@/lib/trip-pricing/pricing-snapshot-types";
import type { PricingResult } from "@/lib/trip-pricing/types";

export type PricingPackageSummary = {
  packageId: string;
  tripDays: number | null;
  corivoPackageTourId: number | null;
  snapshotCount: number;
  availabilityCount: number;
  updatedAt: string | null;
  isExpired: boolean;
  referenceSupplierPrice: number | null;
  referenceRetailPrice: number | null;
  referenceSupplierPriceLabel: string | null;
  referenceRetailPriceLabel: string | null;
};

export type PricingMatrixRow = {
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

export type PricingMatrixFilters = {
  startDateFrom?: string;
  startDateTo?: string;
  accommodationTier?: string;
  vehicleTier?: string;
  adults?: number;
};

function findReferencePrice(
  snapshot: PackagePricingSnapshot | null,
): PricingResult | null {
  if (!snapshot) return null;

  for (const [key, entry] of Object.entries(snapshot.prices)) {
    const [, adults, , , accTier] = key.split("|");
    if (accTier === "comfort" && adults === "2") {
      return entry.result;
    }
  }

  const first = Object.values(snapshot.prices)[0];
  return first?.result ?? null;
}

function parseMatrixKey(key: string): Omit<PricingMatrixRow, "supplierTotal" | "retailTotal" | "deposit" | "perPersonDouble" | "syncedAt"> {
  const [startDate, adults, children, infants, accommodationTier, vehicleTier] =
    key.split("|");

  return {
    key,
    startDate: startDate ?? "",
    adults: Number(adults) || 0,
    children: Number(children) || 0,
    infants: Number(infants) || 0,
    accommodationTier: accommodationTier ?? "",
    vehicleTier: vehicleTier ?? "",
  };
}

export async function listPricingPackageSummaries(): Promise<
  PricingPackageSummary[]
> {
  const configs = getAllPricingConfigs().filter(usesCorivoPricing);
  const summaries: PricingPackageSummary[] = [];

  for (const config of configs) {
    const snapshot = await readPackagePricingSnapshot(config.packageId);
    const reference = findReferencePrice(snapshot);
    const supplierTotal = reference?.total ?? null;
    const retailTotal =
      supplierTotal !== null ? applyRetailMarkupAmount(supplierTotal) : null;

    summaries.push({
      packageId: config.packageId,
      tripDays: config.tripDurationDays ?? null,
      corivoPackageTourId: config.corivo?.packageTourId ?? null,
      snapshotCount: snapshot ? Object.keys(snapshot.prices).length : 0,
      availabilityCount: snapshot
        ? Object.keys(snapshot.availability).length
        : 0,
      updatedAt: snapshot?.updatedAt ?? null,
      isExpired: snapshot?.updatedAt
        ? !isSnapshotFresh(snapshot.updatedAt, PRICING_SNAPSHOT_MAX_AGE_MS)
        : true,
      referenceSupplierPrice: supplierTotal,
      referenceRetailPrice: retailTotal,
      referenceSupplierPriceLabel:
        supplierTotal !== null ? formatIskAdmin(supplierTotal) : null,
      referenceRetailPriceLabel:
        retailTotal !== null ? formatIskAdmin(retailTotal) : null,
    });
  }

  return summaries.sort((a, b) => a.packageId.localeCompare(b.packageId));
}

export function listPricingMatrixRows(
  snapshot: PackagePricingSnapshot | null,
  filters: PricingMatrixFilters,
): PricingMatrixRow[] {
  if (!snapshot) return [];

  const rows: PricingMatrixRow[] = [];

  for (const [key, entry] of Object.entries(snapshot.prices)) {
    const parsed = parseMatrixKey(key);

    if (filters.startDateFrom && parsed.startDate < filters.startDateFrom) {
      continue;
    }
    if (filters.startDateTo && parsed.startDate > filters.startDateTo) {
      continue;
    }
    if (
      filters.accommodationTier &&
      parsed.accommodationTier !== filters.accommodationTier
    ) {
      continue;
    }
    if (filters.vehicleTier && parsed.vehicleTier !== filters.vehicleTier) {
      continue;
    }
    if (filters.adults !== undefined && parsed.adults !== filters.adults) {
      continue;
    }

    const supplierTotal = entry.result.total;
    rows.push({
      ...parsed,
      supplierTotal,
      retailTotal: applyRetailMarkupAmount(supplierTotal),
      deposit: entry.result.deposit,
      perPersonDouble: entry.result.perPersonDouble,
      syncedAt: entry.syncedAt,
    });
  }

  return rows.sort((a, b) => {
    const dateCmp = a.startDate.localeCompare(b.startDate);
    if (dateCmp !== 0) return dateCmp;
    return a.key.localeCompare(b.key);
  });
}

export function paginateRows<T>(rows: T[], page: number, pageSize: number): {
  rows: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
} {
  const total = rows.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    rows: rows.slice(start, start + pageSize),
    total,
    page: safePage,
    pageSize,
    totalPages,
  };
}

export function buildPricingMatrixCsv(rows: PricingMatrixRow[]): string {
  const header = [
    "出發日",
    "成人",
    "兒童",
    "嬰兒",
    "房型",
    "車型",
    "供應商價 ISK",
    "前台售價 ISK",
    "訂金 ISK",
    "人均雙人 ISK",
    "同步時間",
  ].join(",");

  const lines = rows.map((row) =>
    [
      row.startDate,
      row.adults,
      row.children,
      row.infants,
      row.accommodationTier,
      row.vehicleTier || "—",
      row.supplierTotal,
      row.retailTotal,
      row.deposit,
      row.perPersonDouble,
      row.syncedAt,
    ].join(","),
  );

  return [header, ...lines].join("\n");
}

export async function getPricingPackageDetail(packageId: string) {
  const config = getPricingConfig(packageId);
  if (!config || !usesCorivoPricing(config)) {
    return null;
  }

  const snapshot = await readPackagePricingSnapshot(packageId);
  return { config, snapshot };
}
