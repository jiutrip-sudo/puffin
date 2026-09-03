import fs from "fs";
import path from "path";
import { Converter } from "opencc-js";

const ROOT = path.resolve(import.meta.dirname, "..");
const SLM_HTML =
  process.env.SLM_HTML ?? path.join(ROOT, "tmp/slm-winter-group-8-live.html");
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

const DAY_PAIRS = [
  ["入境日", "黄金圈：辛格维利尔国家公园，间歇泉，黄金瀑布"],
  [
    "黄金圈：辛格维利尔国家公园，间歇泉，黄金瀑布",
    "塞里雅兰瀑布、斯科加瀑布、索尔黑马冰川徒步、黑沙滩",
  ],
  [
    "塞里雅兰瀑布、斯科加瀑布、索尔黑马冰川徒步、黑沙滩",
    "杰古沙龙冰河湖、钻石沙滩、蓝冰洞探险",
  ],
  ["杰古沙龙冰河湖、钻石沙滩、蓝冰洞探险", "东部峡湾风光"],
  [
    "东部峡湾风光",
    "米湖、Hverir地热泥浆池、黑暗城堡熔岩群、众神瀑布",
  ],
  [
    "米湖、Hverir地热泥浆池、黑暗城堡熔岩群、众神瀑布",
    "阿克雷里、北部观鲸体验",
  ],
  ["阿克雷里、北部观鲸体验", "离境日"],
  ["离境日", null],
];

const ATTRACTION_TITLES = [
  "辛格维利尔国家公园｜Þingvellir National Park",
  "间歇泉｜The Great Geysir and Strokkur",
  "黄金瀑布｜Gullfoss",
  "塞里雅兰瀑布｜Seljalandsfoss",
  "斯科加瀑布｜Skógafoss",
  "黑沙滩｜Reynisfjara Black Sand Beach",
  "杰古沙龙冰河湖｜Jökulsárlón",
  "钻石沙滩｜The Diamond Beach",
  "埃伊尔斯塔济｜Egilsstaðir",
  "米湖 ｜Lake Mývatn",
  "米湖地热区｜Mývatn Geothermal Area",
  "众神瀑布｜Goðafoss",
  "阿克雷里｜Akureyri",
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
    highlights: hlObjs.map(parseItem).filter((it) => it.title).map(sanitizeItem),
    extras: exObjs.map(parseItem).filter((it) => it.title).map(sanitizeItem),
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
    /"header":\{"title":"([^"]+)","images":\[([\s\S]*?)\],"days":\d+,"nights":\d+/,
  );
  const headerTitle = headerMatch?.[1] ?? "";
  const subtitle = headerTitle.includes("：")
    ? headerTitle.split("：").slice(1).join("：")
    : "Sky Lagoon 溫泉 & 斯奈山";

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
    decoded.indexOf('days":[{"title":"入境日'),
  );
  for (const m of daysSection.matchAll(
    /\{"title":"([^"]+)","description":"((?:[^"\\]|\\.)*)","location":(null|"([^"]*)")/g,
  )) {
    const title = m[1];
    if (title === "选择您的住宿类型" || title.includes("选择您在")) continue;
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

function filterRentalParagraphs(paragraphs) {
  return (paragraphs ?? []).filter((p) => {
    if (p === "車型：") return false;
    if (/對於我們的自駕旅客|服務窗口取車/.test(p)) return false;
    if (/租車|取車|還車|駕照|車行/.test(p)) return false;
    return true;
  }).map((p) =>
    p
      .replace(/^3\. 車型：/, "3. 交通方式：")
      .replace(/^對於非自駕旅客來說，/, ""),
  );
}

function sanitizeItem(item) {
  return {
    ...item,
    paragraphs: filterRentalParagraphs(item.paragraphs).map((p) =>
      p.replace(/^3\. 車型：/, "3. 交通方式："),
    ),
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
    { id: "insurance", title: "保險相關", items: [] },
    { id: "trip", title: "行程與跟團", items: [] },
    { id: "accommodation", title: "住宿相關", items: [] },
  ];
  for (const item of items) {
    const q = toTw(item.question);
    const a = toTw(item.answer);
    if (/租車|駕照|駕駛|還車|取車|自駕|車行/.test(q + a)) continue;
    let target = groups[1];
    if (/保險|碰撞|賠付|CDW|SCDW/.test(q)) target = groups[0];
    else if (/住宿|大床|單人房/.test(q)) target = groups[2];
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
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
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
    const hl = `icelandGroupWinter8Day${dayNum}Highlights`;
    const ex = `icelandGroupWinter8Day${dayNum}OptionalActivities`;
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
    "雷克雅未克（入境、機場接送、可選 Sky Lagoon）",
    "黃金圈（辛格維利爾 → 間歇泉 → 黃金瀑布）",
    "南岸 → 塞里雅蘭／斯科加瀑布 → 索爾黑馬冰川 → 黑沙灘",
    "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞",
    "東部峽灣風光",
    "米湖 → Hverir 地熱區 → 黑暗城堡 → 眾神瀑布",
    "阿克雷里 → 北部觀鯨 → 返回雷克雅未克",
    "雷克雅未克 → 機場離境",
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
  icelandGroupWinter8Day1Highlights,
  icelandGroupWinter8Day1OptionalActivities,
} from "./iceland-group-winter-8-day1-cards";
import {
  icelandGroupWinter8Day2Highlights,
  icelandGroupWinter8Day2OptionalActivities,
  icelandGroupWinter8Day3Highlights,
  icelandGroupWinter8Day3OptionalActivities,
  icelandGroupWinter8Day4Highlights,
  icelandGroupWinter8Day4OptionalActivities,
  icelandGroupWinter8Day5Highlights,
  icelandGroupWinter8Day5OptionalActivities,
  icelandGroupWinter8Day6Highlights,
  icelandGroupWinter8Day6OptionalActivities,
  icelandGroupWinter8Day7Highlights,
  icelandGroupWinter8Day7OptionalActivities,
  icelandGroupWinter8Day8Highlights,
  icelandGroupWinter8Day8OptionalActivities,
} from "./iceland-group-winter-8-days2-8-cards";

export const icelandGroupWinter8: TripPackage = {
  id: "iceland-group-winter-8",
  tripKey: "iceland/group/winter/8",
  slug: "8-days-winter-package-circle-of-iceland-blue-ice-cave",
  tourCode: "SMD-082",
  title: "8 天 7 夜冰島冬季跟團遊",
  subtitle: "${esc(toTw(meta.subtitle))}",
  duration: { days: 8, nights: 7 },
  season: { label: "冬季", months: "11 月–4 月" },
  meta: {
    departure: "雷克雅未克",
    transport: "跟團",
    tourCode: "SMD-082",
  },
  eyebrow: "冰島集合 · 跟團 · 冬季",
  backHref: "/trips/iceland/group/winter",
  backLabel: "返回冬季跟團",
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
      description: "豐富冰島跟團服務經驗",
    },
    {
      id: "local",
      title: "本地優選供應商",
      description: "直連冰島在地嚮導與住宿",
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
  routeOverviewSubtitle: "冬季環島跟團：黃金圈、南岸、東部峽灣與北部精華",
  routeStops: [
${routeStops.join(",\n")}
  ],
  routeMap: {
    waypoints: [
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 1 天",
        detail: "雷克雅未克（入境、機場接送）",
      },
      {
        lng: -20.5322,
        lat: 64.3271,
        label: "第 2 天",
        detail: "黃金圈",
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
        detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞",
      },
      {
        lng: -14.4,
        lat: 65.26,
        label: "第 5 天",
        detail: "東部峽灣",
      },
      {
        lng: -16.9,
        lat: 65.6,
        label: "第 6 天",
        detail: "米湖與北部地熱景觀",
      },
      {
        lng: -18.09,
        lat: 65.68,
        label: "第 7 天",
        detail: "阿克雷里 → 觀鯨",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 8 天",
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
      tripKey: "iceland/group/winter/7",
      title: "7 天 6 夜冰島冬季跟團遊",
      tourCode: "SMD-072",
      durationLabel: "7 天／6 夜",
      description:
        "南岸、黃金圈、西部與斯奈山，冬季跟團精選路線。",
    },
    {
      tripKey: "iceland/group/winter/9",
      title: "9 天 8 夜冰島冬季跟團遊",
      tourCode: "SMD-092",
      durationLabel: "9 天／8 夜",
      description:
        "更充裕的冬季環島天數，深度探索冰島北部與西部。",
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
  path.join(outDir, "iceland-group-winter-8-day1-cards.ts"),
  renderExports([
    {
      name: "icelandGroupWinter8Day1Highlights",
      items: dayData["入境日"].highlights,
    },
    {
      name: "icelandGroupWinter8Day1OptionalActivities",
      items: dayData["入境日"].extras,
    },
  ]),
);

const DAY2 = "黄金圈：辛格维利尔国家公园，间歇泉，黄金瀑布";
const DAY3 = "塞里雅兰瀑布、斯科加瀑布、索尔黑马冰川徒步、黑沙滩";
const DAY4 = "杰古沙龙冰河湖、钻石沙滩、蓝冰洞探险";
const DAY5 = "东部峡湾风光";
const DAY6 = "米湖、Hverir地热泥浆池、黑暗城堡熔岩群、众神瀑布";
const DAY7 = "阿克雷里、北部观鲸体验";

fs.writeFileSync(
  path.join(outDir, "iceland-group-winter-8-days2-8-cards.ts"),
  renderExports([
    {
      name: "icelandGroupWinter8Day2Highlights",
      items: dayData[DAY2].highlights,
    },
    {
      name: "icelandGroupWinter8Day2OptionalActivities",
      items: dayData[DAY2].extras,
    },
    {
      name: "icelandGroupWinter8Day3Highlights",
      items: dayData[DAY3].highlights,
    },
    {
      name: "icelandGroupWinter8Day3OptionalActivities",
      items: dayData[DAY3].extras,
    },
    {
      name: "icelandGroupWinter8Day4Highlights",
      items: dayData[DAY4].highlights,
    },
    {
      name: "icelandGroupWinter8Day4OptionalActivities",
      items: dayData[DAY4].extras,
    },
    {
      name: "icelandGroupWinter8Day5Highlights",
      items: dayData[DAY5].highlights,
    },
    {
      name: "icelandGroupWinter8Day5OptionalActivities",
      items: dayData[DAY5].extras,
    },
    {
      name: "icelandGroupWinter8Day6Highlights",
      items: dayData[DAY6].highlights,
    },
    {
      name: "icelandGroupWinter8Day6OptionalActivities",
      items: dayData[DAY6].extras,
    },
    {
      name: "icelandGroupWinter8Day7Highlights",
      items: dayData[DAY7].highlights,
    },
    {
      name: "icelandGroupWinter8Day7OptionalActivities",
      items: dayData[DAY7].extras,
    },
    {
      name: "icelandGroupWinter8Day8Highlights",
      items: dayData["离境日"].highlights,
    },
    {
      name: "icelandGroupWinter8Day8OptionalActivities",
      items: dayData["离境日"].extras,
    },
  ]),
);

fs.writeFileSync(
  path.join(outDir, "iceland-group-winter-8.ts"),
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
