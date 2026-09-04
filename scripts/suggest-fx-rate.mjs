#!/usr/bin/env node
/**
 * 依銀行／央行參考匯率，建議 FX_ISK_TO_DISPLAY 政策係數。
 *
 * 用法（擇一）：
 *   npm run suggest-fx -- --twd-per-isk 0.252
 *   npm run suggest-fx -- --usd-twd 32.5 --isk-per-usd 138
 *   npm run suggest-fx -- --usd-twd 32.5 --isk-per-usd 138 --cny-per-usd 7.25
 *
 * 選項：
 *   --buffer 0.03     安全緩衝（預設 3%）
 *   --date 2026-09-04 參考日（預設今日）
 */

function parseArgs(argv) {
  const args = {
    buffer: 0.03,
    date: new Date().toISOString().slice(0, 10),
  };

  for (let i = 2; i < argv.length; i++) {
    const key = argv[i];
    const next = argv[i + 1];
    switch (key) {
      case "--twd-per-isk":
        args.twdPerIsk = Number(next);
        i++;
        break;
      case "--usd-twd":
        args.usdTwd = Number(next);
        i++;
        break;
      case "--isk-per-usd":
        args.iskPerUsd = Number(next);
        i++;
        break;
      case "--cny-per-isk":
        args.cnyPerIsk = Number(next);
        i++;
        break;
      case "--cny-per-usd":
        args.cnyPerUsd = Number(next);
        i++;
        break;
      case "--buffer":
        args.buffer = Number(next);
        i++;
        break;
      case "--date":
        args.date = next;
        i++;
        break;
      case "--help":
      case "-h":
        args.help = true;
        break;
      default:
        break;
    }
  }

  return args;
}

function roundRateUp(rate) {
  return Math.ceil(rate * 100) / 100;
}

function main() {
  const args = parseArgs(process.argv);

  if (args.help) {
    console.log(`建議政策匯率係數（ISK → 展示幣）

用法：
  npm run suggest-fx -- --twd-per-isk 0.252
  npm run suggest-fx -- --usd-twd 32.5 --isk-per-usd 138

說明：
  1. 優先採「往來銀行即期賣出」或央行交叉匯率作為參考
  2. 政策係數 = 參考值 × (1 + buffer)，係數向上取整至小數第二位
  3. 前台金額另會向上取整至 NT$10（見 lib/i18n/fx-rates.ts）
  4. 每季檢視；ISK 波動 > 5% 再調整 lib/i18n/fx-rates.ts
`);
    return;
  }

  let twdPerIsk = args.twdPerIsk;
  if (twdPerIsk === undefined) {
    if (args.usdTwd === undefined || args.iskPerUsd === undefined) {
      console.error(
        "請提供 --twd-per-isk，或同時提供 --usd-twd 與 --isk-per-usd。",
      );
      process.exit(1);
    }
    twdPerIsk = args.usdTwd / args.iskPerUsd;
  }

  if (!Number.isFinite(twdPerIsk) || twdPerIsk <= 0) {
    console.error("無效的 TWD/ISK 參考匯率。");
    process.exit(1);
  }

  const policyTwdPerIsk = twdPerIsk * (1 + args.buffer);
  const suggestedTwd = roundRateUp(policyTwdPerIsk);

  let cnyPerIsk = args.cnyPerIsk;
  if (cnyPerIsk === undefined && args.cnyPerUsd !== undefined && args.iskPerUsd) {
    cnyPerIsk = args.cnyPerUsd / args.iskPerUsd;
  }
  let suggestedCny = null;
  if (cnyPerIsk !== undefined && Number.isFinite(cnyPerIsk)) {
    suggestedCny = roundRateUp(cnyPerIsk * (1 + args.buffer));
  }

  const sampleIsk = 182_408;
  const sampleTwd = Math.ceil((sampleIsk * suggestedTwd) / 10) * 10;

  console.log("--- 政策匯率建議 ---");
  console.log(`參考日：${args.date}`);
  console.log(`參考 1 ISK → TWD：${twdPerIsk.toFixed(6)}`);
  console.log(`安全緩衝：${(args.buffer * 100).toFixed(1)}%`);
  console.log(`建議 FX_ISK_TO_DISPLAY.TWD：${suggestedTwd}`);
  if (suggestedCny !== null) {
    console.log(`建議 FX_ISK_TO_DISPLAY.CNY：${suggestedCny}`);
  }
  console.log("");
  console.log("請更新 lib/i18n/fx-rates.ts：");
  console.log(`  FX_UPDATED_AT = "${args.date}"`);
  console.log(`  FX_POLICY.referenceDate = "${args.date}"`);
  console.log(`  FX_POLICY.referenceTwdPerIsk = ${twdPerIsk.toFixed(3)}`);
  console.log(`  FX_ISK_TO_DISPLAY.TWD = ${suggestedTwd}`);
  if (suggestedCny !== null) {
    console.log(`  FX_ISK_TO_DISPLAY.CNY = ${suggestedCny}`);
  }
  console.log("");
  console.log(
    `範例（零售每人 ${sampleIsk.toLocaleString("en-US")} ISK）→ NT$ ${sampleTwd.toLocaleString("en-US")}（含 NT$10 向上取整）`,
  );
}

main();
