import fs from "fs";
import path from "path";
import { Converter } from "opencc-js";

const ROOT = path.resolve(import.meta.dirname, "..");
const SLM_HTML =
  process.env.SLM_HTML ?? path.join(ROOT, "tmp/slm-summer-10-live.html");
const IMG_BASE =
  "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good";
const HERO_BASE =
  "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good";

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
  ["森林猫", "大樂旅行社"],
  ["森林貓", "大樂旅行社"],
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

const DAY_PAIRS = [
  ["入境日", "黄金圈之旅"],
  ["黄金圈之旅", "冰岛南岸风光"],
  ["冰岛南岸风光", "杰古沙龙冰河湖、钻石沙滩"],
  ["杰古沙龙冰河湖、钻石沙滩", "东部峡湾风光"],
  ["东部峡湾风光", "米湖及北部风光"],
  ["米湖及北部风光", "冰岛北部"],
  ["冰岛北部", "斯奈山半岛"],
  ["斯奈山半岛", "冰岛西部白银圈"],
  ["冰岛西部白银圈", "离境日"],
  ["离境日", null],
];

const ATTRACTION_TITLES = [
  "塞里雅兰瀑布｜Seljalandsfoss",
  "斯科加瀑布｜Skógafoss",
  "杰古沙龙冰河湖｜Jökulsárlón",
  "瓦特纳冰川｜Vatnajökull",
  "黑沙滩｜Reynisfjara Black Sand Beach",
  "钻石沙滩｜The Diamond Beach",
  "米湖 ｜Lake Mývatn",
  "众神瀑布｜Goðafoss",
  "斯蒂基斯霍尔米｜Stykkishólmur",
  "教会山｜Kirkjufell",
  "赫伦瀑布｜Hraunfossar",
];

const FAQ_CATEGORY_IDS = {
  租车相关: "rental",
  租車相關: "rental",
  保险相关: "insurance",
  保險相關: "insurance",
  行程与自驾: "trip",
  行程與自駕: "trip",
  住宿相关: "accommodation",
  住宿相關: "accommodation",
};

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
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
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
        sectionEnd > parsedIdx ? sectionEnd + 3 : parsedIdx + 8000,
      );
      const strings = [
        ...section.matchAll(/"content":\["((?:[^"\\]|\\.)*)"/g),
        ...section.matchAll(/"content":\[([^\]]+)\]/g).flatMap((m) =>
          [...m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((s) => s[1]),
        ),
      ];
      if (strings.length > 0 && typeof strings[0] === "string") {
        text = strings
          .map((s) => (typeof s === "string" ? s : ""))
          .filter(Boolean)
          .map((s) => s.replace(/\\"/g, '"'))
          .join("");
      } else {
        text = strings
          .map((s) => (typeof s === "string" ? s.replace(/\\"/g, '"') : ""))
          .join("");
      }
      // Flatten nested content arrays from link nodes
      if (!text) {
        text = [...section.matchAll(/"content":\["((?:[^"\\]|\\.)*)"/g)]
          .map((m) => m[1].replace(/\\"/g, '"'))
          .join("");
      }
      const allStrings = [...section.matchAll(/"content":\["((?:[^"\\]|\\.)*)"/g)].map(
        (m) => m[1].replace(/\\"/g, '"'),
      );
      if (allStrings.length > 0) text = allStrings.join("");
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
    highlights: hlObjs.map(parseItem).filter((it) => it.title),
    extras: exObjs.map(parseItem).filter((it) => it.title),
  };
}

function extractAllDays(decoded) {
  const all = {};
  for (const [day, next] of DAY_PAIRS) all[day] = getDay(decoded, day, next);
  return all;
}

function extractObjectAtTitle(chunk, title) {
  const idx = chunk.indexOf('"title":"' + title + '"');
  if (idx < 0) return null;
  let objStart = idx;
  while (objStart > 0 && chunk[objStart] !== "{") objStart--;
  let depth = 0;
  let objEnd = objStart;
  for (let i = objStart; i < chunk.length; i++) {
    if (chunk[i] === "{") depth++;
    else if (chunk[i] === "}") {
      depth--;
      if (depth === 0) {
        objEnd = i + 1;
        break;
      }
    }
  }
  return chunk.slice(objStart, objEnd);
}

function flattenAnswerNode(node) {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(flattenAnswerNode).join("");
  if (node.content) return flattenAnswerNode(node.content);
  return "";
}

function parseFaqAnswer(raw) {
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return cleanSlmText(
        parsed.map((block) => flattenAnswerNode(block)).join("\n\n"),
      );
    }
  } catch {
    // fall through
  }
  return cleanSlmText(raw.replace(/\\"/g, '"'));
}

function extractPackageMeta(decoded) {
  const headerMatch = decoded.match(
    /"header":\{"title":"([^"]+)","images":\[([\s\S]*?)\],"days":10,"nights":9/,
  );
  const headerTitle = headerMatch?.[1] ?? "";
  const subtitle = headerTitle.includes("：")
    ? headerTitle.split("：").slice(1).join("：")
    : "南岸風光 & 傑古沙龍冰河湖";

  const heroFiles = [
    ...(
      headerMatch?.[2]?.matchAll(
        /v\d+\/([^"?]+)/g,
      ) ?? []
    ).map((m) => m[1]),
  ];

  const highlightsMatch = decoded.match(
    /"highlightsBlock":\{"highlights":\[([\s\S]*?)\],"/,
  );
  const highlightBullets = highlightsMatch
    ? [...highlightsMatch[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)]
        .map((m) => cleanSlmText(m[1].replace(/\\"/g, '"')))
        .filter((t) => t.length > 4)
    : [];

  const introStart = decoded.indexOf('"content":{"blocks":');
  const introEnd = decoded.indexOf('"highlightsBlock"');
  const introChunk = decoded.slice(introStart, introEnd);
  const introParas = [];
  for (const m of introChunk.matchAll(
    /"type":"paragraph".*?"text":"((?:[^"\\]|\\.)*)"/g,
  )) {
    const text = cleanSlmText(m[1].replace(/\\"/g, '"'));
    if (text.length > 10) introParas.push(text);
  }

  const incBlock = decoded.match(
    /"includedServicesBlock":\{"includedServices":\[([\s\S]*?)\],"title":"行程包括"/,
  );
  const included = [];
  const excluded = [];
  if (incBlock) {
    for (const m of incBlock[1].matchAll(
      /"included":(true|false),"title":"((?:[^"\\]|\\.)*)"/g,
    )) {
      const text = cleanSlmText(m[2].replace(/\\"/g, '"'));
      if (m[1] === "true") included.push(text);
      else excluded.push(text);
    }
  }

  const faqStart = decoded.indexOf('"faqBlock":');
  const faqChunk = decoded.slice(faqStart, faqStart + 120000);
  const faqItems = [];
  for (const m of faqChunk.matchAll(
    /"question":"((?:[^"\\]|\\.)*)","answer":(\[[\s\S]*?\])(?=,"question"|,"navigationButton|\}])/g,
  )) {
    faqItems.push({
      question: m[1].replace(/\\"/g, '"'),
      answer: parseFaqAnswer(m[2]),
    });
  }

  const attrStart = decoded.indexOf('"highlightsBlock"');
  const attrEnd = decoded.indexOf('"itinerary":{');
  const attrChunk = decoded.slice(attrStart, attrEnd);
  const attractions = ATTRACTION_TITLES.map((title) => {
    const obj = extractObjectAtTitle(attrChunk, title);
    return obj ? parseItem(obj) : null;
  }).filter(Boolean);

  const days = [];
  const daysSection = decoded.slice(
    decoded.indexOf('"days":[{"title":"入境日"'),
  );
  for (const m of daysSection.matchAll(
    /\{"title":"([^"]+)","description":"((?:[^"\\]|\\.)*)","location":(null|"([^"]*)")/g,
  )) {
    const title = m[1];
    if (title === "选择您的住宿类型") continue;
    days.push({
      title,
      description: cleanSlmText(m[2].replace(/\\"/g, '"')),
      location: m[3] === "null" ? "" : (m[4] ?? ""),
    });
  }

  return {
    subtitle,
    heroFiles,
    highlightBullets,
    introParas,
    included,
    excluded,
    faqItems,
    attractions,
    days,
  };
}

function renderAttraction(item, indent = "  ", useImgHelper = true) {
  const { name, nameEn } = splitTitle(item.title);
  const img = (file) =>
    useImgHelper
      ? `IMG("${file}")`
      : `"${IMG_BASE}/${file}"`;
  const lines = [];
  lines.push(`${indent}{`);
  lines.push(`${indent}  name: "${esc(name)}",`);
  if (nameEn) lines.push(`${indent}  nameEn: "${esc(nameEn)}",`);
  if (item.region)
    lines.push(`${indent}  region: "${esc(toTw(item.region))}",`);
  if (item.desc)
    lines.push(`${indent}  subtitle: "${esc(toTw(item.desc))}",`);
  lines.push(`${indent}  imageUrl: ${img(item.images[0])},`);
  lines.push(`${indent}  galleryImages: [`);
  for (const f of item.images) lines.push(`${indent}    ${img(f)},`);
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

function renderStringList(items, indent) {
  return items.map((item) => `${indent}"${esc(toTw(item))}",`).join("\n");
}

function categorizeFaq(items) {
  const groups = [
    { id: "rental", title: "租車相關", items: [] },
    { id: "insurance", title: "保險相關", items: [] },
    { id: "trip", title: "行程與自駕", items: [] },
    { id: "accommodation", title: "住宿相關", items: [] },
  ];
  for (const item of items) {
    const q = toTw(item.question);
    const a = toTw(item.answer);
    let target = groups[2];
    if (/租車|駕照|駕駛|還車|取車/.test(q)) target = groups[0];
    else if (/保險|碰撞|賠付|CDW|SCDW/.test(q)) target = groups[1];
    else if (/住宿|大床|單人房/.test(q)) target = groups[3];
    target.items.push({ question: q, answer: a });
  }
  return groups.filter((g) => g.items.length > 0);
}

function renderPackage(meta, dayData) {
  const summary = toTw(meta.introParas[0] ?? "");
  const full = meta.introParas.map((p) => toTw(p)).join("\n\n");
  const hero = meta.heroFiles[0]
    ? `${HERO_BASE}/${meta.heroFiles[0]}`
    : `${HERO_BASE}/_b6fee84594.jpg`;

  const gallery = meta.heroFiles.map((file, i) => {
    const id = file.replace(/\.[^.]+$/, "").slice(0, 24);
    return `    {
      id: "${id || `gallery-${i}`}",
      url: "${IMG_BASE}/${file}",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    }`;
  });

  const attractions = meta.attractions
    .map((item) => renderAttraction(item, "    ", false))
    .join("\n");

  const itineraryDays = meta.days.map((day, index) => {
    const dayNum = index + 1;
    const title = toTw(day.title);
    const accommodation =
      day.location && day.title !== "离境日" ? toTw(day.location) : "—";
    const description = toTw(day.description);
    const hl = `icelandSelfDriveSummer10Day${dayNum}Highlights`;
    const ex = `icelandSelfDriveSummer10Day${dayNum}OptionalActivities`;
    return `    {
      day: ${dayNum},
      title: "${esc(title)}",
      accommodation: "${esc(accommodation)}",
      description:
        "${esc(description)}",
      highlights: ${hl},
      optionalActivities: ${ex},
    }`;
  });

  const routeStopDetails = [
    "雷克雅未克（入境、取車、可選 Sky Lagoon）",
    "黃金圈（辛格維利爾 → 間歇泉 → 黃金瀑布）→ 南岸",
    "南岸瀑布群 → 黑沙灘 → 維克 → 南岸住宿",
    "瓦特納冰川 → 傑古沙龍冰河湖 → 鑽石沙灘",
    "東部峽灣海岸公路 → 東部住宿",
    "米湖及北部風光 → 米湖地區住宿",
    "眾神瀑布 → 阿克雷里 → 冰島北部",
    "斯奈山半島（教會山 → 斯蒂基斯霍爾米 → 海岸漁村）",
    "西部白銀圈（熔岩瀑布、兒童瀑布）→ 雷克雅未克",
    "雷克雅未克市區（可選）→ 機場離境",
  ];
  const routeStops = meta.days.map((day, index) => {
    const label = `第 ${index + 1} 天`;
    const detail = routeStopDetails[index] ?? toTw(day.title);
    return `    { label: "${label}", detail: "${esc(detail)}" }`;
  });

  const faqGroups = categorizeFaq(meta.faqItems);
  const faq = faqGroups
    .map(
      (group) => `    {
      id: "${group.id}",
      title: "${group.title}",
      items: [
${group.items
  .map(
    (item) => `        {
          question: "${esc(item.question)}",
          answer:
            "${esc(item.answer)}",
        }`,
  )
  .join(",\n")}
      ],
    }`,
    )
    .join(",\n");

  return `import type { TripPackage } from "./types";
import {
  icelandSelfDriveSummer10Day1Highlights,
  icelandSelfDriveSummer10Day1OptionalActivities,
} from "./iceland-self-drive-summer-10-day1-cards";
import {
  icelandSelfDriveSummer10Day2Highlights,
  icelandSelfDriveSummer10Day2OptionalActivities,
  icelandSelfDriveSummer10Day3Highlights,
  icelandSelfDriveSummer10Day3OptionalActivities,
  icelandSelfDriveSummer10Day4Highlights,
  icelandSelfDriveSummer10Day4OptionalActivities,
  icelandSelfDriveSummer10Day5Highlights,
  icelandSelfDriveSummer10Day5OptionalActivities,
  icelandSelfDriveSummer10Day6Highlights,
  icelandSelfDriveSummer10Day6OptionalActivities,
  icelandSelfDriveSummer10Day7Highlights,
  icelandSelfDriveSummer10Day7OptionalActivities,
  icelandSelfDriveSummer10Day8Highlights,
  icelandSelfDriveSummer10Day8OptionalActivities,
  icelandSelfDriveSummer10Day9Highlights,
  icelandSelfDriveSummer10Day9OptionalActivities,
  icelandSelfDriveSummer10Day10Highlights,
  icelandSelfDriveSummer10Day10OptionalActivities,
} from "./iceland-self-drive-summer-10-days2-10-cards";

export const icelandSelfDriveSummer10: TripPackage = {
  id: "iceland-self-drive-summer-10",
  tripKey: "iceland/self-drive/summer/10",
  slug: "10-days-around-iceland-and-snaefellsnes",
  tourCode: "SSD-101",
  title: "10 天 9 夜冰島夏季深度環島自駕",
  subtitle: "${esc(toTw(meta.subtitle))}",
  duration: { days: 10, nights: 9 },
  season: { label: "夏季", months: "4 月–10 月" },
  meta: {
    departure: "雷克雅未克",
    transport: "自駕",
    tourCode: "SSD-101",
  },
  eyebrow: "冰島集合 · 自駕 · 夏季",
  backHref: "/trips/iceland/self-drive/summer",
  backLabel: "返回夏季自駕",
  heroImage: "${hero}",
  whyChooseUs: [
    {
      id: "deposit",
      title: "20% 訂金",
      description: "輕鬆預訂，無需一次付清全額",
    },
    {
      id: "booking",
      title: "安心預訂",
      description: "行程變更可協助調整",
    },
    {
      id: "refund",
      title: "退款保證",
      description: "依條款提供退款保障",
    },
    {
      id: "flexible",
      title: "彈性出發日",
      description: "依您的班機與假期安排出發",
    },
    {
      id: "reviews",
      title: "好評口碑",
      description: "豐富冰島自駕服務經驗",
    },
    {
      id: "local",
      title: "本地優選供應商",
      description: "直連冰島合規車行與住宿",
    },
  ],
  intro: {
    summary:
      "${esc(summary)}",
    full: \`${full.replace(/`/g, "\\`")}\`,
  },
  gallery: [
${gallery.join(",\n")}
  ],
  highlights: [
${renderStringList(meta.highlightBullets, "    ")}
  ],
  attractions: [
${attractions}
  ],
  routeOverviewSubtitle: "一號公路環島夏季自駕動線（含斯奈山半島）",
  routeStops: [
${routeStops.join(",\n")}
  ],
  routeMap: {
    waypoints: [
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 1 天",
        detail: "雷克雅未克（入境、取車）",
      },
      {
        lng: -20.5322,
        lat: 64.3271,
        label: "第 2 天",
        detail: "黃金圈 → 南岸",
      },
      {
        lng: -18.057,
        lat: 63.794,
        label: "第 3 天",
        detail: "南岸瀑布 → 黑沙灘",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 4 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘",
      },
      {
        lng: -14.4,
        lat: 65.26,
        label: "第 5 天",
        detail: "東部峽灣",
      },
      {
        lng: -17.0,
        lat: 65.6,
        label: "第 6 天",
        detail: "米湖及北部風光",
      },
      {
        lng: -17.55,
        lat: 65.68,
        label: "第 7 天",
        detail: "眾神瀑布 → 阿克雷里",
      },
      {
        lng: -23.783,
        lat: 64.926,
        label: "第 8 天",
        detail: "斯奈山半島 → 教會山",
      },
      {
        lng: -21.5,
        lat: 64.7,
        label: "第 9 天",
        detail: "西部白銀圈 → 雷克雅未克",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 10 天",
        detail: "雷克雅未克 → 機場離境",
      },
    ],
  },
  itinerary: [
${itineraryDays.join(",\n")}
  ],
  inclusions: {
    included: [
${renderStringList(meta.included, "      ")}
    ],
    excluded: [
${renderStringList(meta.excluded, "      ")}
    ],
  },
  faq: [
${faq}
  ],
  similarTrips: [
    {
      tripKey: "iceland/self-drive/summer/6",
      title: "6 天 5 夜冰島夏季精選自駕遊",
      tourCode: "SSD-061",
      durationLabel: "6 天／5 夜",
      description:
        "南岸、冰河湖與黃金圈，並造訪斯奈山半島精華景點。",
    },
    {
      tripKey: "iceland/self-drive/summer/7",
      title: "7 天 6 夜冰島夏季暢享自駕遊",
      tourCode: "SSD-071",
      durationLabel: "7 天／6 夜",
      description:
        "黃金圈、南岸與斯奈山半島盡收囊中，更從容探索冰島西南部。",
    },
    {
      tripKey: "iceland/self-drive/summer/8",
      title: "8 天 7 夜冰島夏季環島自駕",
      tourCode: "SSD-081",
      durationLabel: "8 天／7 夜",
      description:
        "夏季版一號公路環島，涵蓋黃金圈、南岸、冰河湖、東部峽灣、米湖與西部白銀圈。",
    },
    {
      tripKey: "iceland/self-drive/summer/9",
      title: "9 天 8 夜冰島夏季環島自駕",
      tourCode: "SSD-091",
      durationLabel: "9 天／8 夜",
      description:
        "一號公路環島經典路線，涵蓋黃金圈、南岸、冰河湖、東北部、米湖與西部。",
    },
  ],
};
`;
}

const decoded = decodeSlmHtml();
const dayData = extractAllDays(decoded);
const meta = extractPackageMeta(decoded);
const outDir = path.join(ROOT, "lib/trip-packages");

fs.writeFileSync(
  path.join(outDir, "iceland-self-drive-summer-10-day1-cards.ts"),
  renderExports([
    {
      name: "icelandSelfDriveSummer10Day1Highlights",
      items: dayData["入境日"].highlights,
    },
    {
      name: "icelandSelfDriveSummer10Day1OptionalActivities",
      items: dayData["入境日"].extras,
    },
  ]),
);

fs.writeFileSync(
  path.join(outDir, "iceland-self-drive-summer-10-days2-10-cards.ts"),
  renderExports([
    {
      name: "icelandSelfDriveSummer10Day2Highlights",
      items: dayData["黄金圈之旅"].highlights,
    },
    {
      name: "icelandSelfDriveSummer10Day2OptionalActivities",
      items: dayData["黄金圈之旅"].extras,
    },
    {
      name: "icelandSelfDriveSummer10Day3Highlights",
      items: dayData["冰岛南岸风光"].highlights,
    },
    {
      name: "icelandSelfDriveSummer10Day3OptionalActivities",
      items: dayData["冰岛南岸风光"].extras,
    },
    {
      name: "icelandSelfDriveSummer10Day4Highlights",
      items: dayData["杰古沙龙冰河湖、钻石沙滩"].highlights,
    },
    {
      name: "icelandSelfDriveSummer10Day4OptionalActivities",
      items: dayData["杰古沙龙冰河湖、钻石沙滩"].extras,
    },
    {
      name: "icelandSelfDriveSummer10Day5Highlights",
      items: dayData["东部峡湾风光"].highlights,
    },
    {
      name: "icelandSelfDriveSummer10Day5OptionalActivities",
      items: dayData["东部峡湾风光"].extras,
    },
    {
      name: "icelandSelfDriveSummer10Day6Highlights",
      items: dayData["米湖及北部风光"].highlights,
    },
    {
      name: "icelandSelfDriveSummer10Day6OptionalActivities",
      items: dayData["米湖及北部风光"].extras,
    },
    {
      name: "icelandSelfDriveSummer10Day7Highlights",
      items: dayData["冰岛北部"].highlights,
    },
    {
      name: "icelandSelfDriveSummer10Day7OptionalActivities",
      items: dayData["冰岛北部"].extras,
    },
    {
      name: "icelandSelfDriveSummer10Day8Highlights",
      items: dayData["斯奈山半岛"].highlights,
    },
    {
      name: "icelandSelfDriveSummer10Day8OptionalActivities",
      items: dayData["斯奈山半岛"].extras,
    },
    {
      name: "icelandSelfDriveSummer10Day9Highlights",
      items: dayData["冰岛西部白银圈"].highlights,
    },
    {
      name: "icelandSelfDriveSummer10Day9OptionalActivities",
      items: dayData["冰岛西部白银圈"].extras,
    },
    {
      name: "icelandSelfDriveSummer10Day10Highlights",
      items: dayData["离境日"].highlights,
    },
    {
      name: "icelandSelfDriveSummer10Day10OptionalActivities",
      items: dayData["离境日"].extras,
    },
  ]),
);

fs.writeFileSync(
  path.join(outDir, "iceland-self-drive-summer-10.ts"),
  renderPackage(meta, dayData),
);

for (const [day, sections] of Object.entries(dayData)) {
  console.log(day);
  for (const [type, items] of Object.entries(sections)) {
    console.log(`  ${type}: ${items.length} items`);
  }
}
console.log("intro paragraphs:", meta.introParas.length);
console.log("highlights:", meta.highlightBullets.length);
console.log("attractions:", meta.attractions.length);
console.log("faq:", meta.faqItems.length);
console.log("days:", meta.days.length);
