#!/usr/bin/env node
/**
 * 從森林貓 HTML 快照同步跟團套餐「費用包含與不含」至 lib/trip-packages/*.ts
 * 執行：node scripts/sync-group-inclusions.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Converter } from "opencc-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PACKAGES_DIR = path.join(ROOT, "lib/trip-packages");

const converter = Converter({ from: "cn", to: "tw" });

const TW_TERMS = [
  ["游客", "旅客"],
  ["遊客", "旅客"],
  ["視頻", "影片"],
  ["视频", "影片"],
  ["信息", "資訊"],
  ["默认", "預設"],
  ["默認", "預設"],
  ["联系", "聯絡"],
  ["软件", "軟體"],
  ["登录", "登入"],
  ["雷市", "雷克雅維克"],
  ["雷克雅未克", "雷克雅維克"],
  ["雷克雅维克", "雷克雅維克"],
  ["導遊", "嚮導"],
  ["导游", "嚮導"],
  ["間歇泉", "蓋錫爾間歇泉地帶"],
  ["维克镇", "維克"],
  ["維克鎮", "維克"],
  ["霍芬镇", "赫本"],
  ["霍芬鎮", "赫本"],
  ["森林猫", "帕芬假期"],
  ["森林貓", "帕芬假期"],
  ["定製", "客製"],
  ["定制", "客製"],
  ["酒店", "飯店"],
  ["徒步", "健行"],
  ["預定", "預訂"],
  ["線路", "路線"],
  ["前臺", "櫃檯"],
  ["定金", "訂金"],
  ["路书", "行程手冊"],
  ["路書", "行程手冊"],
  ["舒适级", "舒適級"],
  ["舒適级", "舒適級"],
  ["向导", "嚮導"],
  ["增值税", "增值稅"],
  ["中国冰岛", "台灣冰島"],
  ["中國冰島", "台灣冰島"],
  ["自选报名", "自選報名"],
  ["个人旅行保险", "個人旅行保險"],
];

/** @type {ReadonlyArray<{ packageFile: string; htmlFile: string }>} */
/** SLM 來源有、台灣站不列入；簡中由 lib/trip-packages/locale-inclusions.ts 注入 */
const EXCLUDED_INCLUSION_ITEMS = new Set(["簽證輔助行程單材料提供"]);

const PACKAGE_SOURCES = [
  {
    packageFile: "iceland-group-winter-4.ts",
    htmlFile: "tmp/slm-winter-group-4-live.html",
  },
  {
    packageFile: "iceland-group-winter-5.ts",
    htmlFile: "tmp/slm-winter-group-5-live.html",
  },
  {
    packageFile: "iceland-group-winter-6.ts",
    htmlFile: "tmp/slm-winter-group-6-live.html",
  },
  {
    packageFile: "iceland-group-winter-7.ts",
    htmlFile: "tmp/slm-winter-group-7-live.html",
  },
  {
    packageFile: "iceland-group-summer-4.ts",
    htmlFile: "tmp/slm-summer-group-4-live.html",
  },
  {
    packageFile: "iceland-group-summer-5.ts",
    htmlFile: "tmp/slm-summer-group-5-live.html",
  },
  {
    packageFile: "iceland-group-summer-5-south-golden-circle.ts",
    htmlFile: "tmp/slm-summer-group-5-golden-circle-live.html",
  },
  {
    packageFile: "iceland-group-summer-6.ts",
    htmlFile: "tmp/slm-summer-group-6-live.html",
  },
  {
    packageFile: "iceland-group-summer-6-south-hiking.ts",
    htmlFile: "tmp/slm-summer-group-6-south-hiking-live.html",
  },
  {
    packageFile: "iceland-group-summer-7.ts",
    htmlFile: "tmp/slm-summer-group-7-live.html",
  },
  {
    packageFile: "iceland-group-summer-7-south-golden-circle-hiking.ts",
    htmlFile: "tmp/slm-summer-group-7-south-golden-circle-hiking-live.html",
  },
  {
    packageFile: "iceland-group-summer-8.ts",
    htmlFile: "tmp/slm-summer-group-8-live.html",
  },
  {
    packageFile: "iceland-group-summer-9.ts",
    htmlFile: "tmp/slm-summer-group-9-live.html",
  },
  {
    packageFile: "iceland-group-summer-10.ts",
    htmlFile: "tmp/slm-summer-group-10-live.html",
  },
];

function toTw(text) {
  if (!text) return text;
  let out = converter(text);
  const sorted = [...TW_TERMS].sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of sorted) out = out.split(from).join(to);
  return out.replace(/\s+/g, " ").trim();
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
}

function decodeSlmHtml(htmlPath) {
  const raw = fs.readFileSync(htmlPath, "utf8");
  const pushes = [...raw.matchAll(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g)];
  let combined = "";
  for (const p of pushes) {
    combined += p[1].replace(/\\n/g, "");
  }
  combined = combined.replace(/\\u([0-9a-f]{4})/gi, (_, c) =>
    String.fromCharCode(parseInt(c, 16)),
  );
  while (combined.includes('\\"')) {
    combined = combined.replace(/\\"/g, '"');
  }
  return combined;
}

function cleanSlmText(text) {
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\\\\/g, "")
    .replace(/\\/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractInclusions(decoded) {
  const incBlock = decoded.match(
    /"includedServicesBlock":\{"includedServices":\[([\s\S]*?)\],"title":"行程包含"/,
  );
  const included = [];
  const excluded = [];
  if (!incBlock) return { included, excluded };

  for (const m of incBlock[1].matchAll(
    /"included":(true|false),"title":"((?:[^"\\]|\\.)*)"/g,
  )) {
    const text = toTw(cleanSlmText(m[2].replace(/\\"/g, '"')));
    if (!text || EXCLUDED_INCLUSION_ITEMS.has(text)) continue;
    if (m[1] === "true") included.push(text);
    else excluded.push(text);
  }

  return { included, excluded };
}

function renderInclusionsBlock({ included, excluded }) {
  const lines = included.map((item) => `      "${esc(item)}",`);
  const excludedLines = excluded.map((item) => `      "${esc(item)}",`);
  return `  inclusions: {
    included: [
${lines.join("\n")}
    ],
    excluded: [
${excludedLines.join("\n")}
    ],
  },`;
}

const INCLUSIONS_RE =
  /  inclusions: \{\n    included: \[[\s\S]*?\],\n    excluded: \[[\s\S]*?\],\n  \},/;

let updated = 0;

for (const { packageFile, htmlFile } of PACKAGE_SOURCES) {
  const htmlPath = path.join(ROOT, htmlFile);
  const packagePath = path.join(PACKAGES_DIR, packageFile);

  if (!fs.existsSync(htmlPath)) {
    console.error(`Missing HTML: ${htmlFile}`);
    process.exitCode = 1;
    continue;
  }
  if (!fs.existsSync(packagePath)) {
    console.error(`Missing package: ${packageFile}`);
    process.exitCode = 1;
    continue;
  }

  const decoded = decodeSlmHtml(htmlPath);
  const inclusions = extractInclusions(decoded);
  if (inclusions.included.length === 0 && inclusions.excluded.length === 0) {
    console.error(`No inclusions extracted for ${packageFile}`);
    process.exitCode = 1;
    continue;
  }

  const content = fs.readFileSync(packagePath, "utf8");
  if (!INCLUSIONS_RE.test(content)) {
    console.error(`Could not find inclusions block in ${packageFile}`);
    process.exitCode = 1;
    continue;
  }

  const next = content.replace(INCLUSIONS_RE, renderInclusionsBlock(inclusions));
  if (next === content) continue;

  fs.writeFileSync(packagePath, next, "utf8");
  updated += 1;
  console.log(
    `${packageFile}: ${inclusions.included.length} included, ${inclusions.excluded.length} excluded`,
  );
}

console.log(`\nSynced inclusions in ${updated} package file(s).`);
