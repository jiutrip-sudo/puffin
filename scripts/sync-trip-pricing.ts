import { syncAllPackagePricing } from "../lib/trip-pricing/pricing-snapshot-sync";

async function main() {
  const reports = await syncAllPackagePricing();
  console.log(JSON.stringify({ ok: true, reports }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
