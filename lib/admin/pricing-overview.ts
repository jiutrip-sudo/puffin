import { getAllTripPackages, getTripPackageByPackageId } from "@/lib/trip-packages/registry";
import { formatIskAdmin } from "@/lib/i18n/display-money";
import {
  classifyPricingPackage,
  comparePricingPackages,
  countPricingPackagesByCategory,
  getPricingPackageCategoryLabel,
  type PricingPackageCategory,
} from "@/lib/admin/pricing-package-category";
import { applyRetailMarkupAmount } from "@/lib/trip-pricing/retail-markup";
import {
  listPricingSnapshotMatrixRows,
  type PricingSnapshotMatrixFilters,
  type PricingSnapshotMatrixRow,
} from "@/lib/trip-pricing/pricing-snapshot-matrix";
import {
  getAllPricingConfigs,
  usesCorivoPricing,
  getPricingConfig,
} from "@/lib/trip-pricing/fetch";
import {
  buildOverviewEntryFromSnapshot,
  readPricingOverviewIndex,
  writePricingOverviewIndex,
} from "@/lib/trip-pricing/pricing-overview-index";
import { readPackagePricingSnapshot } from "@/lib/trip-pricing/pricing-snapshot-store";
import {
  isSnapshotFresh,
  PRICING_SNAPSHOT_MAX_AGE_MS,
  type PackagePricingSnapshot,
} from "@/lib/trip-pricing/pricing-snapshot-types";

export type PricingPackageSummary = {
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

export type PricingMatrixRow = PricingSnapshotMatrixRow & {
  /** @deprecated 請用 supplierPerPersonDouble；保留供舊 CSV 欄位相容 */
  perPersonDouble: number;
};

export type PricingMatrixFilters = PricingSnapshotMatrixFilters;

export type PricingOverviewResult = {
  total: number;
  categoryCounts: Record<PricingPackageCategory, number>;
  packages: PricingPackageSummary[];
};

function buildSummaryFromIndexEntry(
  config: ReturnType<typeof getAllPricingConfigs>[number],
  entry: ReturnType<typeof buildOverviewEntryFromSnapshot>,
  tripPackage: ReturnType<typeof getTripPackageByPackageId>,
): PricingPackageSummary {
  const supplierTotal = entry.referenceSupplierTotal;
  const retailTotal =
    supplierTotal !== null ? applyRetailMarkupAmount(supplierTotal) : null;
  const depositRate = config.depositRate ?? 0.2;
  const depositTotal =
    retailTotal !== null ? Math.round(retailTotal * depositRate) : null;
  const category = classifyPricingPackage(config.packageId);

  return {
    packageId: config.packageId,
    tourCode: tripPackage?.tourCode ?? null,
    packageTitle: tripPackage?.title ?? null,
    tripDays: config.tripDurationDays ?? null,
    category,
    categoryLabel: category ? getPricingPackageCategoryLabel(category) : null,
    corivoPackageTourId: config.corivo?.packageTourId ?? null,
    snapshotCount: entry.snapshotCount,
    availabilityCount: entry.availabilityCount,
    updatedAt: entry.updatedAt,
    isExpired: entry.updatedAt
      ? !isSnapshotFresh(entry.updatedAt, PRICING_SNAPSHOT_MAX_AGE_MS)
      : true,
    referenceSupplierPrice: supplierTotal,
    referenceRetailPrice: retailTotal,
    referenceDeposit: depositTotal,
    referenceSupplierPriceLabel:
      supplierTotal !== null ? formatIskAdmin(supplierTotal) : null,
    referenceRetailPriceLabel:
      retailTotal !== null ? formatIskAdmin(retailTotal) : null,
    referenceDepositLabel:
      depositTotal !== null ? formatIskAdmin(depositTotal) : null,
  };
}

export async function listPricingPackageSummaries(): Promise<PricingOverviewResult> {
  const configs = getAllPricingConfigs().filter(usesCorivoPricing);
  const tripPackagesById = new Map(
    getAllTripPackages().map((pkg) => [pkg.id, pkg]),
  );

  let index = await readPricingOverviewIndex();
  const missingIds = configs
    .map((config) => config.packageId)
    .filter((packageId) => !index?.packages[packageId]);

  if (missingIds.length > 0) {
    const snapshots = await Promise.all(
      missingIds.map((packageId) => readPackagePricingSnapshot(packageId)),
    );

    index = index ?? {
      updatedAt: new Date().toISOString(),
      packages: {},
    };

    missingIds.forEach((packageId, indexOffset) => {
      index!.packages[packageId] = buildOverviewEntryFromSnapshot(
        snapshots[indexOffset] ?? null,
      );
    });
    index.updatedAt = new Date().toISOString();
    await writePricingOverviewIndex(index);
  }

  const summaries = configs.map((config) =>
    buildSummaryFromIndexEntry(
      config,
      index!.packages[config.packageId] ??
        buildOverviewEntryFromSnapshot(null),
      tripPackagesById.get(config.packageId),
    ),
  );

  summaries.sort(comparePricingPackages);

  return {
    total: summaries.length,
    categoryCounts: countPricingPackagesByCategory(summaries),
    packages: summaries,
  };
}

export function listPricingMatrixRows(
  snapshot: PackagePricingSnapshot | null,
  filters: PricingMatrixFilters,
): PricingMatrixRow[] {
  return listPricingSnapshotMatrixRows(snapshot, filters).map((row) => ({
    ...row,
    perPersonDouble: row.supplierPerPersonDouble,
  }));
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
    "零售人均 ISK",
    "訂金 ISK",
    "供應商人均 ISK",
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
      row.retailPerPerson,
      row.deposit,
      row.supplierPerPersonDouble,
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

  const tripPackage = getTripPackageByPackageId(packageId);
  const snapshot = await readPackagePricingSnapshot(packageId);
  return {
    config,
    snapshot,
    tourCode: tripPackage?.tourCode ?? null,
    packageTitle: tripPackage?.title ?? null,
  };
}
