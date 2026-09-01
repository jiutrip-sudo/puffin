import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { calculateCorivoTripPrice } from "../lib/trip-pricing/corivo-calculate";
import { icelandSelfDriveWinter12Pricing } from "../lib/trip-pricing/iceland-self-drive-winter-12";

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
process.env.SYNC_PRICING_CLI = "1";

async function main() {
  const config = {
    ...icelandSelfDriveWinter12Pricing,
    corivo: { ...icelandSelfDriveWinter12Pricing.corivo! },
  };
  const input = {
    packageId: "iceland-self-drive-winter-12",
    startDate: "2026-11-01",
    adults: 2,
    children: 0,
    infants: 0,
    accommodationTier: "comfort",
    roomType: "double" as const,
  };
  const addons: Record<string, number> = {};
  for (const tier of config.vehicleTiers) {
    const result = await calculateCorivoTripPrice(config, {
      ...input,
      vehicleTier: tier.id,
    });
    addons[tier.id] = result.vehicleAddon;
    console.log(`${tier.id}: total=${result.total} addon=${result.vehicleAddon}`);
  }
  console.log("addons:", JSON.stringify(addons));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
