import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { sampleMonthlyDates } from "../lib/trip-date-utils";
import { calculateCorivoTripPrice } from "../lib/trip-pricing/corivo-calculate";
import { icelandSelfDriveSummer11Pricing } from "../lib/trip-pricing/iceland-self-drive-summer-11";

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
    ...icelandSelfDriveSummer11Pricing,
    corivo: { ...icelandSelfDriveSummer11Pricing.corivo! },
  };
  const { min, max } = config.bookingDateRange ?? {
    min: "2026-09-10",
    max: "2027-10-31",
  };
  const dates = sampleMonthlyDates(min, max, config.bookingDateExclusions);
  const tiers = ["budget", "comfort", "quality"] as const;
  const vehicles = config.vehicleTiers.map((tier) => tier.id);
  let ok = 0;
  let fail = 0;

  for (const date of dates) {
    for (const accommodationTier of tiers) {
      for (const vehicleTier of vehicles) {
        try {
          await calculateCorivoTripPrice(config, {
            packageId: config.packageId,
            startDate: date,
            adults: 2,
            children: 0,
            infants: 0,
            accommodationTier,
            roomType: "double",
            vehicleTier,
          });
          ok += 1;
        } catch (error) {
          fail += 1;
          const message =
            error instanceof Error ? error.message : "計價失敗";
          console.error(
            `FAIL ${date} ${accommodationTier} ${vehicleTier}: ${message}`,
          );
        }
      }
    }
  }

  console.log(
    JSON.stringify(
      {
        dates: dates.length,
        combos: dates.length * tiers.length * vehicles.length,
        ok,
        fail,
      },
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
