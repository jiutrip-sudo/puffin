import { applyRetailMarkupAmount } from "./retail-markup";
import { getDefaultVehicleTier } from "./calculate";
import type { PricingConfig } from "./types";
import {
  isSnapshotFresh,
  type PackagePricingSnapshot,
} from "./pricing-snapshot-types";

export type PricingSnapshotMatrixFilters = {
  startDateFrom?: string;
  startDateTo?: string;
  accommodationTier?: string;
  vehicleTier?: string;
  adults?: number;
  children?: number;
  infants?: number;
};

export type PricingSnapshotMatrixRow = {
  key: string;
  startDate: string;
  adults: number;
  children: number;
  infants: number;
  accommodationTier: string;
  vehicleTier: string;
  supplierTotal: number;
  retailTotal: number;
  /** 零售每人價（ISK，供應商總價加價後除以人數） */
  retailPerPerson: number;
  deposit: number;
  /** Corivo 供應商人均（未加零售 markup） */
  supplierPerPersonDouble: number;
  syncedAt: string;
  isFresh: boolean;
};

type ParsedMatrixKey = Omit<
  PricingSnapshotMatrixRow,
  | "supplierTotal"
  | "retailTotal"
  | "retailPerPerson"
  | "deposit"
  | "supplierPerPersonDouble"
  | "syncedAt"
  | "isFresh"
>;

function parseMatrixKey(key: string): ParsedMatrixKey | null {
  const [startDate, adultsRaw, childrenRaw, infantsRaw, accommodationTier, vehicleTier] =
    key.split("|");

  const adults = Number(adultsRaw);
  const children = Number(childrenRaw);
  const infants = Number(infantsRaw);

  if (
    !startDate ||
    accommodationTier === undefined ||
    vehicleTier === undefined ||
    Number.isNaN(adults) ||
    Number.isNaN(children) ||
    Number.isNaN(infants)
  ) {
    return null;
  }

  return {
    key,
    startDate,
    adults,
    children,
    infants,
    accommodationTier,
    vehicleTier,
  };
}

function matchesFilters(
  row: ParsedMatrixKey,
  filters: PricingSnapshotMatrixFilters,
): boolean {
  if (filters.startDateFrom && row.startDate < filters.startDateFrom) {
    return false;
  }
  if (filters.startDateTo && row.startDate > filters.startDateTo) {
    return false;
  }
  if (
    filters.accommodationTier &&
    row.accommodationTier !== filters.accommodationTier
  ) {
    return false;
  }
  if (filters.vehicleTier && row.vehicleTier !== filters.vehicleTier) {
    return false;
  }
  if (filters.adults !== undefined && row.adults !== filters.adults) {
    return false;
  }
  if (filters.children !== undefined && row.children !== filters.children) {
    return false;
  }
  if (filters.infants !== undefined && row.infants !== filters.infants) {
    return false;
  }
  return true;
}

function partySize(row: Pick<ParsedMatrixKey, "adults" | "children" | "infants">): number {
  return row.adults + row.children + row.infants;
}

export function listPricingSnapshotMatrixRows(
  snapshot: PackagePricingSnapshot | null,
  filters: PricingSnapshotMatrixFilters = {},
  options?: { requireFresh?: boolean },
): PricingSnapshotMatrixRow[] {
  if (!snapshot) return [];

  const requireFresh = options?.requireFresh ?? false;
  const rows: PricingSnapshotMatrixRow[] = [];

  for (const [key, entry] of Object.entries(snapshot.prices)) {
    const parsed = parseMatrixKey(key);
    if (!parsed || !matchesFilters(parsed, filters)) continue;

    const isFresh = isSnapshotFresh(entry.syncedAt);
    if (requireFresh && !isFresh) continue;

    const travelers = partySize(parsed);
    if (travelers <= 0) continue;

    const supplierTotal = entry.result.total;
    if (!Number.isFinite(supplierTotal) || supplierTotal <= 0) continue;

    const retailTotal = applyRetailMarkupAmount(supplierTotal);
    const retailPerPerson = Math.round(retailTotal / travelers);

    rows.push({
      ...parsed,
      supplierTotal,
      retailTotal,
      retailPerPerson,
      deposit: entry.result.deposit,
      supplierPerPersonDouble: entry.result.perPersonDouble,
      syncedAt: entry.syncedAt,
      isFresh,
    });
  }

  return rows.sort((a, b) => {
    const dateCmp = a.startDate.localeCompare(b.startDate);
    if (dateCmp !== 0) return dateCmp;
    return a.key.localeCompare(b.key);
  });
}

export function findLowestRetailPerPersonFromSnapshot(
  snapshot: PackagePricingSnapshot | null,
  filters: PricingSnapshotMatrixFilters = {},
  options?: { requireFresh?: boolean },
): PricingSnapshotMatrixRow | null {
  const rows = listPricingSnapshotMatrixRows(snapshot, filters, options);

  let best: PricingSnapshotMatrixRow | null = null;
  for (const row of rows) {
    if (!Number.isFinite(row.retailPerPerson) || row.retailPerPerson <= 0) continue;
    if (!best || row.retailPerPerson < best.retailPerPerson) {
      best = row;
    }
  }

  return best;
}

/**
 * 卡片起價：優先預設房型＋預設車型；若快照缺該房型則改為預設車型下最低價。
 */
export function findCatalogFromPriceRow(
  snapshot: PackagePricingSnapshot | null,
  config: PricingConfig,
): PricingSnapshotMatrixRow | null {
  const options = { requireFresh: true };
  const primary = buildCatalogFromPriceFilters(config);

  const primaryMatch = findLowestRetailPerPersonFromSnapshot(
    snapshot,
    primary,
    options,
  );
  if (primaryMatch) return primaryMatch;

  const vehicleTier = getDefaultVehicleTier(config);
  if (!vehicleTier) {
    return findLowestRetailPerPersonFromSnapshot(
      snapshot,
      CATALOG_FROM_PRICE_FILTERS,
      options,
    );
  }

  return findLowestRetailPerPersonFromSnapshot(
    snapshot,
    {
      ...CATALOG_FROM_PRICE_FILTERS,
      vehicleTier,
    },
    options,
  );
}

/** 卡片起價：2 位成人（不含房型／車型，請用 buildCatalogFromPriceFilters） */
export const CATALOG_FROM_PRICE_FILTERS: PricingSnapshotMatrixFilters = {
  adults: 2,
  children: 0,
  infants: 0,
};

/** 與詳情頁預設條件一致：經濟型（第一個房型）＋預設車型，再取各出發日最低零售人均 */
export function buildCatalogFromPriceFilters(
  config: PricingConfig,
): PricingSnapshotMatrixFilters {
  return {
    ...CATALOG_FROM_PRICE_FILTERS,
    accommodationTier: config.tiers[0]?.id,
    vehicleTier: getDefaultVehicleTier(config),
  };
}
