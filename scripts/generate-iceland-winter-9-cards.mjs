import fs from "fs";
import path from "path";
import { Converter } from "opencc-js";

const ROOT = path.resolve(import.meta.dirname, "..");
const SLM_HTML = process.env.SLM_HTML ?? "/tmp/slm-winter-9.html";
const IMG_BASE =
  "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good";

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
  ["塞裡雅蘭", "塞里雅蘭"],
  ["裡雅蘭", "里雅蘭"],
  ["森林猫", "大樂旅行社"],
  ["森林貓", "大樂旅行社"],
  ["辛格维利尔", "辛格維利爾"],
  ["杰古沙龙", "傑古沙龍"],
  ["钻石沙滩", "鑽石沙灘"],
  ["蓝冰洞", "藍冰洞"],
  ["众神瀑布", "眾神瀑布"],
];

function toTw(text) {
  if (!text) return text;
  let out = converter(text);
  for (const [from, to] of TW_TERMS) out = out.split(from).join(to);
  return out.replace(/\s+/g, " ").trim();
}

function splitTitle(title) {
  if (title.includes("｜")) {
    const [name, nameEn] = title.split("｜");
    return { name: toTw(name), nameEn: nameEn || undefined };
  }
  return { name: toTw(title), nameEn: undefined };
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, " ");
}

function decodeSlmHtml() {
  const raw = fs.readFileSync(SLM_HTML, "utf8");
  const pushes = [...raw.matchAll(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g)];
  let combined = "";
  for (const p of pushes)
    combined += p[1].replace(/\\n/g, "").replace(/\\"/g, '"');
  return combined.replace(/\\u([0-9a-f]{4})/gi, (_, c) =>
    String.fromCharCode(parseInt(c, 16)),
  );
}

function splitObjects(arrStr) {
  const objs = [];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < arrStr.length; i++) {
    const c = arrStr[i];
    if (c === "{") {
      if (depth === 0) start = i;
      depth++;
    } else if (c === "}") {
      depth--;
      if (depth === 0 && start >= 0) {
        objs.push(arrStr.slice(start, i + 1));
        start = -1;
      }
    }
  }
  return objs;
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

function extractParagraphBlocks(source) {
  const texts = [];
  const seen = new Set();
  for (const block of source.split('"type":"paragraph"').slice(1)) {
    let text = "";
    const parsedIdx = block.indexOf('"parsedContent"');
    if (parsedIdx >= 0) {
      const sectionEnd = block.indexOf("}]}", parsedIdx + 14);
      const section = block.slice(
        parsedIdx,
        sectionEnd > parsedIdx ? sectionEnd + 3 : parsedIdx + 4000,
      );
      const strings = [...section.matchAll(/"content":\["((?:[^"\\]|\\.)*)"/g)];
      text = strings.map((m) => m[1].replace(/\\"/g, '"')).join("");
    }
    if (!text) {
      const t = block.match(/"text":"((?:[^"\\]|\\.)*)"/);
      if (t) text = t[1].replace(/\\"/g, '"');
    }
    text = cleanSlmText(text);
    if (text.length < 3) continue;
    const key = text.slice(0, 60);
    if (seen.has(key)) continue;
    seen.add(key);
    texts.push(text);
  }
  return texts;
}

function itemParagraphs(objStr) {
  const modalIdx = objStr.indexOf('"modalContent":{');
  const contentIdx = objStr.indexOf('"content":{');
  if (modalIdx >= 0) {
    const modal = extractParagraphBlocks(objStr.slice(modalIdx));
    if (modal.length > 0) return modal;
  }
  if (contentIdx >= 0) {
    return extractParagraphBlocks(objStr.slice(contentIdx));
  }
  return [];
}

function parseItem(objStr) {
  const title = objStr.match(/"title":"([^"]+)"/)?.[1];
  const desc = objStr
    .match(/"description":"((?:[^"\\]|\\.)*)"/)?.[1]
    ?.replace(/\\"/g, '"')
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
  const region = objStr.match(/"region":"([^"]+)"/)?.[1];
  const images = [
    ...objStr.matchAll(
      /"url":"https:\/\/res\.cloudinary\.com\/senlinmao\/image\/upload\/v\d+\/([^"?]+)/g,
    ),
  ].map((m) => m[1]);
  const seen = new Set();
  const uniqueImages = images.filter((f) => {
    if (
      f.startsWith("large_") ||
      f.startsWith("small_") ||
      f.startsWith("medium_") ||
      f.startsWith("thumbnail_")
    )
      return false;
    if (seen.has(f)) return false;
    seen.add(f);
    return true;
  });
  return {
    title,
    desc,
    region,
    images: uniqueImages,
    paragraphs: itemParagraphs(objStr),
  };
}

function getDay(decoded, dayTitle, nextTitle) {
  const start = decoded.indexOf('"title":"' + dayTitle + '"');
  const end = nextTitle
    ? decoded.indexOf('"title":"' + nextTitle + '"', start + 1)
    : start + 300000;
  const chunk = decoded.slice(start, end);
  const hlStart = chunk.indexOf('"highlights":[') + 13;
  const hlEnd = chunk.indexOf('],"extras"');
  const hlObjs = splitObjects(chunk.slice(hlStart, hlEnd));
  const exStart = chunk.indexOf('"extras":[') + 10;
  let depth = 1;
  let i = exStart;
  while (i < chunk.length && depth > 0) {
    if (chunk[i] === "[") depth++;
    else if (chunk[i] === "]") depth--;
    i++;
  }
  const exObjs = splitObjects(chunk.slice(exStart, i - 1));
  return {
    highlights: hlObjs.map(parseItem),
    extras: exObjs.map(parseItem),
  };
}

function extractAllDays() {
  const decoded = decodeSlmHtml();
  const pairs = [
    ["入境日", "黄金圈之旅"],
    ["黄金圈之旅", "冰岛南岸风光"],
    ["冰岛南岸风光", "冰河湖风光"],
    ["冰河湖风光", "东部峡湾风光"],
    ["东部峡湾风光", "米湖热能区"],
    ["米湖热能区", "北部风光"],
    ["北部风光", "西部风光"],
    ["西部风光", "离境日"],
    ["离境日", null],
  ];
  const all = {};
  for (const [day, next] of pairs) all[day] = getDay(decoded, day, next);
  return all;
}

function renderAttraction(item, indent = "  ") {
  const { name, nameEn } = splitTitle(item.title);
  const lines = [];
  lines.push(`${indent}{`);
  lines.push(`${indent}  name: "${esc(name)}",`);
  if (nameEn) lines.push(`${indent}  nameEn: "${esc(nameEn)}",`);
  if (item.region)
    lines.push(`${indent}  region: "${esc(toTw(item.region))}",`);
  if (item.desc)
    lines.push(`${indent}  subtitle: "${esc(toTw(item.desc))}",`);
  lines.push(`${indent}  imageUrl: IMG("${item.images[0]}"),`);
  lines.push(`${indent}  galleryImages: [`);
  for (const f of item.images) lines.push(`${indent}    IMG("${f}"),`);
  lines.push(`${indent}  ],`);
  if (item.paragraphs?.length) {
    lines.push(`${indent}  paragraphs: [`);
    for (const p of item.paragraphs) {
      lines.push(`${indent}    "${esc(toTw(p))}",`);
    }
    lines.push(`${indent}  ],`);
  }
  lines.push(`${indent}},`);
  return lines.join("\n");
}

function renderExports(exports) {
  const blocks = exports.map(({ name, items }) => {
    const body = items.map((it) => renderAttraction(it)).join("\n");
    return `export const ${name}: TripAttraction[] = [\n${body}\n];\n`;
  });
  return `import type { TripAttraction } from "./types";

const IMG = (file: string) =>
  \`${IMG_BASE}/\${file}\`;

${blocks.join("\n")}`;
}

const data = extractAllDays();
const outDir = path.join(ROOT, "lib/trip-packages");

fs.writeFileSync(
  path.join(outDir, "iceland-self-drive-winter-9-day1-cards.ts"),
  renderExports([
    {
      name: "icelandSelfDriveWinter9Day1Highlights",
      items: data["入境日"].highlights,
    },
    {
      name: "icelandSelfDriveWinter9Day1OptionalActivities",
      items: data["入境日"].extras,
    },
  ]),
);

fs.writeFileSync(
  path.join(outDir, "iceland-self-drive-winter-9-days2-9-cards.ts"),
  renderExports([
    {
      name: "icelandSelfDriveWinter9Day2Highlights",
      items: data["黄金圈之旅"].highlights,
    },
    {
      name: "icelandSelfDriveWinter9Day2OptionalActivities",
      items: data["黄金圈之旅"].extras,
    },
    {
      name: "icelandSelfDriveWinter9Day3Highlights",
      items: data["冰岛南岸风光"].highlights,
    },
    {
      name: "icelandSelfDriveWinter9Day3OptionalActivities",
      items: data["冰岛南岸风光"].extras,
    },
    {
      name: "icelandSelfDriveWinter9Day4Highlights",
      items: data["冰河湖风光"].highlights,
    },
    {
      name: "icelandSelfDriveWinter9Day4OptionalActivities",
      items: data["冰河湖风光"].extras,
    },
    {
      name: "icelandSelfDriveWinter9Day5Highlights",
      items: data["东部峡湾风光"].highlights,
    },
    {
      name: "icelandSelfDriveWinter9Day5OptionalActivities",
      items: data["东部峡湾风光"].extras,
    },
    {
      name: "icelandSelfDriveWinter9Day6Highlights",
      items: data["米湖热能区"].highlights,
    },
    {
      name: "icelandSelfDriveWinter9Day6OptionalActivities",
      items: data["米湖热能区"].extras,
    },
    {
      name: "icelandSelfDriveWinter9Day7Highlights",
      items: data["北部风光"].highlights,
    },
    {
      name: "icelandSelfDriveWinter9Day7OptionalActivities",
      items: data["北部风光"].extras,
    },
    {
      name: "icelandSelfDriveWinter9Day8Highlights",
      items: data["西部风光"].highlights,
    },
    {
      name: "icelandSelfDriveWinter9Day8OptionalActivities",
      items: data["西部风光"].extras,
    },
    {
      name: "icelandSelfDriveWinter9Day9Highlights",
      items: data["离境日"].highlights,
    },
    {
      name: "icelandSelfDriveWinter9Day9OptionalActivities",
      items: data["离境日"].extras,
    },
  ]),
);

for (const [day, sections] of Object.entries(data)) {
  console.log(day);
  for (const [type, items] of Object.entries(sections)) {
    for (const it of items) {
      console.log(
        `  ${type} ${it.title}: ${it.images.length} imgs, ${it.paragraphs.length} paras`,
      );
    }
  }
}
