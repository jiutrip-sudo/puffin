import fs from "fs";
import path from "path";
import { Converter } from "opencc-js";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "tmp/slm-intro-sync.json");

const PACKAGES = [
  {
    id: "iceland-self-drive-winter-6",
    file: "iceland-self-drive-winter-6.ts",
    slug: "6-days-5-nights-winter-self-drive-tour-south-coast-ice-cave",
  },
  {
    id: "iceland-self-drive-winter-7",
    file: "iceland-self-drive-winter-7.ts",
    slug: "aurora-holiday-in-iceland-7-days",
  },
  {
    id: "iceland-self-drive-winter-8",
    file: "iceland-self-drive-winter-8.ts",
    slug: "8-days-winter-self-drive-tour-iceland-ring-road",
  },
  {
    id: "iceland-self-drive-winter-8-non-ring",
    file: "iceland-self-drive-winter-8-non-ring.ts",
    slug: "classic-8-days-winter-self-drive-tour-south-west-iceland",
  },
  {
    id: "iceland-self-drive-winter-9",
    file: "iceland-self-drive-winter-9.ts",
    slug: "9-days-self-drive-package-in-winter-go-around-iceland",
  },
  {
    id: "iceland-self-drive-winter-9-non-ring",
    file: "iceland-self-drive-winter-9-non-ring.ts",
    slug: "9-days-winter-self-drive-tour-golden-circle-south-west-iceland",
  },
  {
    id: "iceland-self-drive-winter-10",
    file: "iceland-self-drive-winter-10.ts",
    slug: "classic-10-days-winter-self-drive-package-around-iceland-and-snaefellsnes",
  },
  {
    id: "iceland-self-drive-winter-10-non-ring",
    file: "iceland-self-drive-winter-10-non-ring.ts",
    slug: "10-days-winter-self-drive-tour-golden-circle-south-west-iceland",
  },
  {
    id: "iceland-self-drive-winter-11",
    file: "iceland-self-drive-winter-11.ts",
    slug: "winter-self-drive-around-iceland-and-snaefellsnes-in-11-days",
  },
  {
    id: "iceland-self-drive-winter-12",
    file: "iceland-self-drive-winter-12.ts",
    slug: "around-iceland-winter-self-drive-package-12-days-with-northern-lights",
  },
  {
    id: "iceland-self-drive-summer-4",
    file: "iceland-self-drive-summer-4.ts",
    slug: "south-iceland-self-drive-tour-in-4-days",
    htmlIntro: true,
  },
  {
    id: "iceland-group-winter-4",
    file: "iceland-group-winter-4.ts",
    slug: "iceland-4-days-express-winter-package-south-coast-ice-cave",
  },
];

const converter = Converter({ from: "cn", to: "tw" });

const TW_TERMS = [
  ["游客", "旅客"],
  ["遊客", "旅客"],
  ["視頻", "影片"],
  ["视频", "影片"],
  ["信息", "資訊"],
  ["默认", "預設"],
  ["联系", "聯絡"],
  ["软件", "軟體"],
  ["登录", "登入"],
  ["雷市", "雷克雅未克"],
  ["顯眼包", "矚目焦點"],
  ["显眼包", "矚目焦點"],
  ["塞裡雅蘭", "塞里雅蘭"],
  ["裡雅蘭", "里雅蘭"],
  ["平臺", "平台"],
  ["質量", "品質"],
  ["質量指數", "生活品質指數"],
  ["導遊", "嚮導"],
  ["导游", "嚮導"],
  ["雷尼斯巖", "雷尼斯岩"],
  ["後臺", "後台"],
  ["森林猫", "帕芬假期"],
  ["森林貓", "帕芬假期"],
  ["中国冰岛", "台灣冰島"],
  ["中國冰島", "台灣冰島"],
  ["中国游客", "台灣旅客"],
  ["中國遊客", "台灣旅客"],
  ["中国旅客", "台灣旅客"],
  ["中國旅客", "台灣旅客"],
  ["定製", "客製"],
  ["定制", "客製"],
  ["国内", "台灣"],
  ["公证件", "公證文件"],
  ["认证件", "認證文件"],
  ["驾驶认证件", "駕照認證文件"],
  ["冲锋衣", "防風外套"],
  ["被盗", "被盜"],
  ["酒店", "飯店"],
  ["併入", "並入"],
  ["为您", "為您"],
  ["为你", "為你"],
];

function stripHtml(text) {
  return text
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function toTw(text) {
  if (!text) return text;
  let out = converter(stripHtml(text));
  for (const [from, to] of TW_TERMS) out = out.split(from).join(to);
  return out.replace(/\s+/g, " ").trim();
}

function decodeSlmHtml(raw) {
  const pushes = [...raw.matchAll(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g)];
  let combined = "";
  for (const p of pushes)
    combined += p[1].replace(/\\n/g, "").replace(/\\"/g, '"');
  return combined.replace(/\\u([0-9a-f]{4})/gi, (_, c) =>
    String.fromCharCode(parseInt(c, 16)),
  );
}

function extractIntroParas(decoded) {
  const introStart = decoded.indexOf('"content":{"blocks":');
  const introEnd = decoded.indexOf('"highlightsBlock"');
  if (introStart < 0 || introEnd < 0) return [];
  const introChunk = decoded.slice(introStart, introEnd);
  const introParas = [];
  for (const m of introChunk.matchAll(
    /"type":"paragraph".*?"text":"((?:[^"\\]|\\.)*)"/g,
  )) {
    const text = toTw(m[1].replace(/\\"/g, '"').replace(/\\n/g, "\n"));
    if (text.length > 10) introParas.push(text);
  }
  return introParas;
}

async function fetchIntro(pkg) {
  const url = `https://www.senlinmao.com/tour-packages/${pkg.slug}/`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${pkg.id}: HTTP ${res.status}`);
  const raw = await res.text();

  let paras = [];
  if (pkg.htmlIntro) {
    for (const m of raw.matchAll(
      /TextBlock-module-scss-module__rUuuYW__paragraph"><p>([\s\S]*?)<\/p><\/section>/g,
    )) {
      const text = toTw(m[1]);
      if (text.length > 10) paras.push(text);
    }
  } else {
    paras = extractIntroParas(decodeSlmHtml(raw));
  }

  if (!paras.length) throw new Error(`${pkg.id}: no intro paragraphs`);
  return {
    id: pkg.id,
    file: pkg.file,
    url,
    summary: paras[0],
    full: paras.join("\n\n"),
    paragraphCount: paras.length,
    fullLength: paras.join("\n\n").length,
  };
}

const results = [];
for (const pkg of PACKAGES) {
  try {
    const intro = await fetchIntro(pkg);
    results.push(intro);
    console.log(`OK ${pkg.id} (${intro.paragraphCount} paras, ${intro.fullLength} chars)`);
  } catch (error) {
    console.error(`FAIL ${pkg.id}:`, error.message);
    process.exitCode = 1;
  }
}

fs.writeFileSync(OUT, JSON.stringify(results, null, 2));
console.log(`Wrote ${OUT}`);
