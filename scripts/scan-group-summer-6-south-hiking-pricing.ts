import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { sampleMonthlyDates } from "../lib/trip-date-utils";
import { calculateCorivoTripPrice } from "../lib/trip-pricing/corivo-calculate";
import { icelandGroupSummer6SouthHikingPricing } from "../lib/trip-pricing/iceland-group-summer-6-south-hiking";

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
    ...icelandGroupSummer6SouthHikingPricing,
    corivo: { ...icelandGroupSummer6SouthHikingPricing.corivo! },
  };
  const { min, max } = config.bookingDateRange ?? {
    min: "2026-09-11",
    max: "2027-10-31",
  };
  const dates = sampleMonthlyDates(min, max, config.bookingDateExclusions);
  const tiers = ["budget", "comfort", "quality"] as const;
  let ok = 0;
  let fail = 0;

  for (const date of dates) {
    for (const accommodationTier of tiers) {
      try {
        await calculateCorivoTripPrice(config, {
          packageId: config.packageId,
          startDate: date,
          adults: 2,
          children: 0,
          infants: 0,
          accommodationTier,
          roomType: "double",
          vehicleTier: "",
        });
        ok += 1;
      } catch (error) {
        fail += 1;
        const message = error instanceof Error ? error.message : "計價失敗";
        console.error(`FAIL ${date} ${accommodationTier}: ${message}`);
      }
    }
  }

  console.log(
    JSON.stringify(
      { dates: dates.length, combos: dates.length * tiers.length, ok, fail },
      null,
      2,
    ),
  );

  if (fail > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
