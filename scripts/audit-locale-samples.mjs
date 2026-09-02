import { Converter } from "opencc-js";
import { readFileSync, writeFileSync } from "node:fs";

const converter = Converter({ from: "tw", to: "cn" });

/** 與 lib/i18n/iceland-place-names.ts PLACE_CN_OVERRIDES 同步（OpenCC 前套用） */
const PLACE_CN = [
  ["雷克雅維克", "雷克雅未克"],
  ["塞里雅蘭瀑布", "塞里雅兰瀑布"],
  ["蓋錫爾間歇泉地帶", "盖锡尔间歇泉地带"],
  ["傑古沙龍冰河湖", "杰古沙龙冰河湖"],
  ["鑽石沙灘", "钻石沙滩"],
  ["維克", "维克"],
  ["德爾達圖赫菲溫泉", "德尔达图赫菲温泉"],
  ["藍湖溫泉", "蓝湖温泉"],
].sort((a, b) => b[0].length - a[0].length);

const CN_TERMS = [
  ["旅客", "游客"],
  ["影片", "视频"],
  ["資訊", "信息"],
  ["聯絡", "联系"],
  ["軟體", "软件"],
  ["台灣", "台湾"],
  ["台灣出發", "台湾出发"],
  ["飯店", "酒店"],
  ["嚮導", "导游"],
  ["品質認證", "质量认证"],
  ["敬請期待", "敬请期待"],
];

function localizeText(text) {
  let out = text;
  for (const [from, to] of PLACE_CN) {
    out = out.split(from).join(to);
  }
  out = converter(out);
  for (const [from, to] of CN_TERMS) {
    out = out.split(from).join(to);
  }
  return out;
}

const samples = [
  {
    name: "home",
    tw: "探索冰島，從這裡開始。台灣出發或冰島集合，為您量身規劃完美旅程。",
  },
  {
    name: "checkout",
    tw: "結帳 · 選擇套餐 · 聯絡資訊 · 確認訂單",
  },
  {
    name: "trip-intro",
    tw: "冬季南岸自駕，4 天夠嗎？多數旅客第一次冬季自駕冰島，會集中在南岸。",
  },
  {
    name: "faq",
    tw: "費用包含與不含 · 常見問題 · 敬請期待",
  },
  {
    name: "company",
    tw: "大樂旅行社股份有限公司 · 聯絡人 · 品質認證",
  },
  {
    name: "reykjavik",
    tw: "抵達雷克雅維克，從首都出發探索黃金圈。",
  },
  {
    name: "south-coast",
    tw: "南岸維克、塞里雅蘭瀑布與傑古沙龍冰河湖。",
  },
];

const packageFiles = [
  "lib/trip-packages/iceland-self-drive-winter-6.ts",
  "lib/trip-packages/iceland-group-summer-5.ts",
  "lib/trip-packages/iceland-self-drive-summer-4.ts",
];

const lines = ["# Locale audit samples", "", "## Static samples", ""];

for (const sample of samples) {
  lines.push(`### ${sample.name}`);
  lines.push(`- TW: ${sample.tw}`);
  lines.push(`- CN: ${localizeText(sample.tw)}`);
  lines.push("");
}

lines.push("## Package title samples", "");

for (const file of packageFiles) {
  const source = readFileSync(file, "utf8");
  const match = source.match(/title:\s*"([^"]+)"/);
  if (!match) continue;
  lines.push(`### ${file}`);
  lines.push(`- TW: ${match[1]}`);
  lines.push(`- CN: ${localizeText(match[1])}`);
  lines.push("");
}

const output = lines.join("\n");
writeFileSync("tmp/locale-audit.md", output);
console.log(output);
console.log("\nWrote tmp/locale-audit.md");
