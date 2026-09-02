import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { syncPackagePricingById } from "../lib/trip-pricing/pricing-snapshot-sync";

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
  const report = await syncPackagePricingById("iceland-group-winter-10-non-ring");
  console.log(JSON.stringify(report, null, 2));
  if (!report || report.pricesFailed > 0 || report.availabilityFailed > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
