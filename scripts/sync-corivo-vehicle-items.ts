/**
 * 從 Corivo 拉取 CAR 選項 ID，依與 winter-4 相同的陣列順序對應 tier。
 * 用法：SYNC_PRICING_CLI=1 npx tsx scripts/sync-corivo-vehicle-items.ts <packageTourId>
 */
import { readFileSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fetchCorivoPackageItems } from "../lib/trip-pricing/corivo-client";
import { icelandSelfDriveWinter4Pricing } from "../lib/trip-pricing/iceland-self-drive-winter-4";

const TIER_ORDER = [
  "ffar",
  "cfmn",
  "ifai",
  "ifar",
  "fmdn",
  "ifmn",
  "gfar",
] as const;

function loadEnvLocal() {
  const envPath = resolve(import.meta.dirname, "..", ".env.local");
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

const packageTourId = Number(process.argv[2]);
if (!packageTourId) {
  console.error("Usage: npx tsx scripts/sync-corivo-vehicle-items.ts <packageTourId>");
  process.exit(1);
}

const instanceId =
  process.env.CORIVO_CLIENT_ID ??
  icelandSelfDriveWinter4Pricing.corivo?.instanceId ??
  "ae034790-70dd-4df5-93a0-957be2883176";

async function main() {
  const items = await fetchCorivoPackageItems(instanceId, packageTourId, {
    adults: 2,
    children: 0,
    infants: 0,
  });
  const car = items.find((item) => item.type === "CAR");
  const choiceIds = (car?.choices ?? []).map((choice) => choice.id);

  if (choiceIds.length !== TIER_ORDER.length) {
    console.warn(
      `警告：CAR 選項數 ${choiceIds.length} 與 tier 數 ${TIER_ORDER.length} 不一致`,
    );
  }

  const vehicleItems: Record<string, number> = {};
  TIER_ORDER.forEach((tierId, index) => {
    if (choiceIds[index] !== undefined) {
      vehicleItems[tierId] = choiceIds[index];
    }
  });

  console.log(JSON.stringify({ packageTourId, vehicleItems }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
