import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { calculateCorivoTripPrice } from "../lib/trip-pricing/corivo-calculate";
import { icelandSelfDriveWinter4Pricing } from "../lib/trip-pricing/iceland-self-drive-winter-4";
import { icelandSelfDriveWinter5Pricing } from "../lib/trip-pricing/iceland-self-drive-winter-5";

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

const START = "2026-11-01";
const INPUT = {
  packageId: "iceland-self-drive-winter-5",
  startDate: START,
  adults: 2,
  children: 0,
  infants: 0,
  accommodationTier: "comfort",
  roomType: "double" as const,
};

async function main() {
  const w4 = {
    ...icelandSelfDriveWinter4Pricing,
    corivo: icelandSelfDriveWinter4Pricing.corivo!,
  };
  const w5Wrong = {
    ...icelandSelfDriveWinter5Pricing,
    corivo: { ...icelandSelfDriveWinter5Pricing.corivo! },
  };

  const w5Correct = {
    ...icelandSelfDriveWinter5Pricing,
    corivo: {
      ...icelandSelfDriveWinter5Pricing.corivo!,
      vehicleItems: {
        cfmn: 62630,
        ifai: 62632,
        ifar: 62633,
        ifmn: 62629,
        gfar: 126156,
        fmdn: 79444,
        ffar: 62631,
      },
    },
  };

  const w4Price = await calculateCorivoTripPrice(w4, {
    ...INPUT,
    packageId: "iceland-self-drive-winter-4",
    vehicleTier: "cfmn",
  });
  console.log("winter-4 cfmn total:", w4Price.total);

  try {
    const wrong = await calculateCorivoTripPrice(w5Wrong, {
      ...INPUT,
      vehicleTier: "cfmn",
    });
    console.log("winter-5 wrong cfmn total:", wrong.total);
  } catch (e) {
    console.log("winter-5 wrong cfmn error:", (e as Error).message);
  }

  const right = await calculateCorivoTripPrice(w5Correct, {
    ...INPUT,
    vehicleTier: "cfmn",
  });
  console.log("winter-5 correct cfmn total:", right.total);

  const addons: Record<string, number> = {};
  for (const tier of w5Correct.vehicleTiers) {
    const result = await calculateCorivoTripPrice(w5Correct, {
      ...INPUT,
      vehicleTier: tier.id,
    });
    addons[tier.id] = result.vehicleAddon;
    console.log(`${tier.id}: total=${result.total} addon=${result.vehicleAddon}`);
  }
  console.log("\naddonTotals JSON:", JSON.stringify(addons, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
