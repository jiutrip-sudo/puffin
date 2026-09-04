import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvLocal() {
  const envPath = resolve(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;

  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const packageId = process.argv[2] ?? "iceland-self-drive-summer-8";
const targetDisplay = process.argv[3] ?? "38540";
const useDefaults = process.argv.includes("--defaults");

const { readPackagePricingSnapshot } = await import(
  "../lib/trip-pricing/pricing-snapshot-store.ts"
);
const {
  findCatalogFromPriceRow,
  findLowestRetailPerPersonFromSnapshot,
  listPricingSnapshotMatrixRows,
  CATALOG_FROM_PRICE_FILTERS,
  buildCatalogFromPriceFilters,
} = await import("../lib/trip-pricing/pricing-snapshot-matrix.ts");
const { findCatalogFromPrice } = await import(
  "../lib/trip-pricing/catalog-from-price.ts"
);
const { formatDisplayMoney } = await import("../lib/i18n/display-money.ts");
const { getPricingConfig } = await import("../lib/trip-pricing/fetch.ts");

const snapshot = await readPackagePricingSnapshot(packageId);
const config = getPricingConfig(packageId);

if (!snapshot) {
  console.error(`No snapshot for ${packageId}`);
  process.exit(1);
}

const filters = useDefaults && config
  ? buildCatalogFromPriceFilters(config)
  : CATALOG_FROM_PRICE_FILTERS;

const best = useDefaults && config
  ? findCatalogFromPriceRow(snapshot, config)
  : findLowestRetailPerPersonFromSnapshot(
      snapshot,
      filters,
      { requireFresh: true },
    );

const catalog = config
  ? findCatalogFromPrice(snapshot, config, "zh-TW")
  : null;
if (catalog) {
  console.log("\n--- findCatalogFromPrice result ---");
  console.log(catalog.displayLabel, catalog.assumptions);
}

function describeRow(row) {
  return {
    startDate: row.startDate,
    party: `${row.adults}/${row.children}/${row.infants}`,
    accommodationTier: row.accommodationTier,
    accommodationLabel:
      config?.tiers.find((tier) => tier.id === row.accommodationTier)?.label ??
      row.accommodationTier,
    vehicleTier: row.vehicleTier || "—",
    vehicleLabel:
      config?.vehicleTiers.find((tier) => tier.id === row.vehicleTier)?.label ??
      row.vehicleTier,
    supplierTotalIsk: row.supplierTotal,
    retailTotalIsk: row.retailTotal,
    retailPerPersonIsk: row.retailPerPerson,
    displayTwd: formatDisplayMoney(row.retailPerPerson, "zh-TW"),
    syncedAt: row.syncedAt,
    snapshotKey: row.key,
  };
}

console.log(`Package: ${packageId}`);
console.log(`Filters: ${JSON.stringify(filters)}`);
console.log(`Snapshot updated: ${snapshot.updatedAt}`);
console.log(`Price entries: ${Object.keys(snapshot.prices).length}`);

if (best) {
  console.log("\n--- Catalog minimum (2 adults, fresh snapshot) ---");
  console.log(JSON.stringify(describeRow(best), null, 2));
}

const matching = listPricingSnapshotMatrixRows(
  snapshot,
  filters,
  { requireFresh: true },
).filter((row) =>
  formatDisplayMoney(row.retailPerPerson, "zh-TW").replace(/[^\d]/g, "") ===
  targetDisplay,
);

console.log(`\n--- Rows matching NT$ ${targetDisplay} display ---`);
if (matching.length === 0) {
  console.log("(none)");
} else {
  for (const row of matching) {
    console.log(JSON.stringify(describeRow(row), null, 2));
  }
}
