import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { calculateCorivoTripPrice } from "../lib/trip-pricing/corivo-calculate";
import { icelandSelfDriveSummer5Pricing } from "../lib/trip-pricing/iceland-self-drive-summer-5";

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
    ...icelandSelfDriveSummer5Pricing,
    corivo: { ...icelandSelfDriveSummer5Pricing.corivo! },
  };

  for (const tier of config.vehicleTiers) {
    const result = await calculateCorivoTripPrice(config, {
      packageId: config.packageId,
      startDate: "2026-09-10",
      adults: 2,
      children: 0,
      infants: 0,
      accommodationTier: "budget",
      roomType: "double",
      vehicleTier: tier.id,
    });
    console.log(
      `${tier.id}: total=${result.total} addon=${result.vehicleAddon} perPerson=${result.perPersonDouble}`,
    );
  }

  for (const acc of ["budget", "comfort", "quality"] as const) {
    const result = await calculateCorivoTripPrice(config, {
      packageId: config.packageId,
      startDate: "2026-09-10",
      adults: 2,
      children: 0,
      infants: 0,
      accommodationTier: acc,
      roomType: "double",
      vehicleTier: "edmn",
    });
    console.log(`${acc}: total=${result.total} perPerson=${result.perPersonDouble}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
