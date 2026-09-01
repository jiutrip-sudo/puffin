import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { syncAllPackagePricing } from "../lib/trip-pricing/pricing-snapshot-sync";

/** tsx 不會自動載入 .env.local，同步前手動注入環境變數。 */
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
process.env.SYNC_PRICING_CLI = "1";

async function main() {
  const hasKv =
    Boolean(process.env.UPSTASH_KV_REST_API_URL) ||
    Boolean(process.env.KV_REST_API_URL);
  if (!hasKv) {
    console.warn(
      "警告：未偵測到 KV REST 憑證，快照只會寫入本機 .data/。請確認 .env.local 含 UPSTASH_KV_REST_API_URL。",
    );
  }

  const reports = await syncAllPackagePricing();
  console.log(JSON.stringify({ ok: true, kvConfigured: hasKv, reports }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
