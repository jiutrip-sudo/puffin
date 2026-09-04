import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { getTripCatalogItemsWithFromPrices } from "../lib/trip-packages/catalog-server";

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

process.env.PRICING_SNAPSHOT_PREFER_LOCAL = "1";

for (const key of [
  "KV_REST_API_TOKEN",
  "UPSTASH_KV_REST_API_URL",
  "UPSTASH_KV_REST_API_TOKEN",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
  "REDIS_URL",
]) {
  delete process.env[key];
}

async function main() {
  const items = await getTripCatalogItemsWithFromPrices("zh-TW");
  const withPrice = items.filter((item) => item.fromPrice);

  console.log(`行程總數：${items.length}`);
  console.log(`有參考價：${withPrice.length}`);
  for (const item of withPrice.slice(0, 5)) {
    console.log(`\n${item.title}`);
    console.log(`  ${item.fromPrice!.displayLabel} 起`);
    console.log(`  ${item.fromPrice!.assumptions}`);
  }

  if (withPrice.length === 0) {
    process.exit(1);
  }

  const winter4 = items.find((item) => item.tripKey === "iceland/group/winter/4");
  if (winter4?.fromPrice) {
    console.log("\n--- 冬日 4 天跟團（驗證）---");
    console.log(`  零售每人 ISK：${winter4.fromPrice.perPersonDoubleIsk}（供應商總價 317,230 → 零售總價 364,815）`);
    console.log(`  顯示：${winter4.fromPrice.displayLabel} 起（政策匯率 + 向上取整）`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
