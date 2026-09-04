#!/usr/bin/env node
/**
 * 稽核行程 Modal 文案（熱門景點 / 旅行亮點 / 自選報名）是否已改為台灣用語。
 *
 *   node scripts/audit-modal-tw.mjs
 *   node scripts/audit-modal-tw.mjs --json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PACKAGES_DIR = path.join(ROOT, "lib/trip-packages");
const SPOTS_DIR = path.join(PACKAGES_DIR, "spots");
const OUT_PATH = path.join(ROOT, "tmp/modal-tw-audit.md");

const { normalizeContentForTaiwan } = await import(
  pathToFileURL(path.join(ROOT, "lib/i18n/tw-content-normalize.ts")).href
);

const MAINLAND_PATTERNS = [
  { re: /游客|游人|游览|视频|质量|导览|导游|峡谷|悬崖|温泉|旅游|通过|为了|里面|闻名|领略|定制|冲锋衣|皮划艇|酒店|冰川徒步|交互式|徒步/g, label: "大陸／簡體殘留詞" },
  { re: /臺階|溼/g, label: "台灣正字待統一（臺階→階梯、溼→濕）" },
  { re: /森林猫|森林貓|中国冰岛|中國冰島|中國遊客|中国旅客/g, label: "競品／大陸行銷用語" },
  { re: /打卡|網紅|网红|花少/g, label: "網路行銷詞" },
  { re: /登录|注册|联系|信息|默认|邮箱|手机|用户|网络/g, label: "簡體行政用語" },
];

function listPackageFiles() {
  return fs
    .readdirSync(PACKAGES_DIR)
    .filter((name) => name.startsWith("iceland-") && name.endsWith(".ts"))
    .map((name) => path.join(PACKAGES_DIR, name));
}

function buildSectionMarkers(content, filePath) {
  const markers = [];
  if (filePath.includes("-cards")) {
    for (const match of content.matchAll(
      /export const \w+(Highlights|OptionalActivities)/g,
    )) {
      markers.push({
        index: match.index ?? 0,
        section: match[1] === "Highlights" ? "highlights" : "optional",
      });
    }
  } else {
    for (const match of content.matchAll(
      /\b(attractions|highlights|optionalActivities)\s*:/g,
    )) {
      markers.push({
        index: match.index ?? 0,
        section: match[1],
      });
    }
  }
  return markers.sort((a, b) => a.index - b.index);
}

function sectionAtOffset(markers, offset) {
  let section = null;
  for (const marker of markers) {
    if (marker.index <= offset) section = marker.section;
    else break;
  }
  return section;
}

function shouldSkipString(decoded, rawKeyBefore) {
  if (!/[\u4e00-\u9fff]/.test(decoded)) return true;
  if (/^https?:\/\//.test(decoded)) return true;
  if (decoded.includes("${")) return true;
  if (/\bnameEn\s*:$/.test(rawKeyBefore.trim())) return true;
  return false;
}

function decodeDoubleQuoted(value) {
  return value
    .replace(/\\n/g, "\n")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");
}

function lineNumber(text, index) {
  return text.slice(0, index).split("\n").length;
}

function extractModalStrings(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const markers = buildSectionMarkers(content, filePath);
  const strings = [];

  content.replace(/"((?:[^"\\]|\\.)*)"/g, (match, inner, offset) => {
    const decoded = decodeDoubleQuoted(inner);
    const lineStart = content.lastIndexOf("\n", offset - 1) + 1;
    const keyBefore = content.slice(lineStart, offset);
    if (shouldSkipString(decoded, keyBefore)) return match;

    const section = sectionAtOffset(markers, offset);
    if (!section) return match;

    strings.push({
      file: path.relative(ROOT, filePath),
      line: lineNumber(content, offset),
      section,
      text: decoded,
    });
    return match;
  });

  return strings;
}

function auditString(entry) {
  const normalized = normalizeContentForTaiwan(entry.text);
  const issues = [];

  if (normalized !== entry.text) {
    issues.push({
      kind: "needs-normalize",
      detail: "來源字串與 normalizeContentForTaiwan 輸出不同（顯示層會改，但來源未落盤）",
    });
  }

  for (const { re, label } of MAINLAND_PATTERNS) {
    const m = entry.text.match(re);
    if (m) {
      issues.push({ kind: "pattern", label, match: m[0] });
    }
  }

  return issues;
}

function hashParagraphs(paragraphs) {
  return paragraphs.join("\n---\n");
}

function auditSpotFiles() {
  const spotFiles = fs
    .readdirSync(SPOTS_DIR)
    .filter((f) => f.endsWith(".ts") && f !== "_img.ts" && f !== "index.ts");

  const spotIssues = [];
  for (const file of spotFiles) {
    const filePath = path.join(SPOTS_DIR, file);
    const content = fs.readFileSync(filePath, "utf8");
    const strings = extractModalStrings(filePath);
    // spots/*.ts aren't in modal sections — scan all Chinese strings in quotes
    const allStrings = [];
    content.replace(/"((?:[^"\\]|\\.)*)"/g, (match, inner, offset) => {
      const decoded = decodeDoubleQuoted(inner);
      if (!/[\u4e00-\u9fff]/.test(decoded)) return match;
      if (/^https?:\/\//.test(decoded)) return match;
      if (decoded.includes("${")) return match;
      allStrings.push({
        file: path.relative(ROOT, filePath),
        line: lineNumber(content, offset),
        section: "spot",
        text: decoded,
      });
      return match;
    });

    for (const entry of allStrings) {
      const issues = auditString(entry);
      if (issues.length > 0) {
        spotIssues.push({ ...entry, issues });
      }
    }
  }

  return { spotFiles: spotFiles.length, spotIssues };
}

function countSpotImports(seljaFirstPara, skogaFirstPara) {
  const files = listPackageFiles();
  const importCounts = new Map();
  let inlineSelja = 0;
  let inlineSkoga = 0;
  let importReykjavik = 0;
  let importSelja = 0;
  let importSkoga = 0;

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, "utf8");
    const rel = path.relative(ROOT, filePath);

    if (content.includes("reykjavikSpot")) importReykjavik++;
    if (content.includes("seljalandsfossSpot")) importSelja++;
    if (content.includes("skogafossSpot")) importSkoga++;

    if (content.includes('name: "塞里雅蘭瀑布"') || content.includes(seljaFirstPara)) {
      inlineSelja++;
    }
    if (content.includes('name: "斯科加瀑布"') || content.includes(skogaFirstPara)) {
      inlineSkoga++;
    }

    for (const match of content.matchAll(
      /from "\.\/spots\/([^"]+)"/g,
    )) {
      const spot = match[1];
      importCounts.set(spot, (importCounts.get(spot) ?? 0) + 1);
    }
  }

  return {
    packageFiles: files.length,
    importReykjavik,
    importSelja,
    importSkoga,
    inlineSelja,
    inlineSkoga,
    importCounts: [...importCounts.entries()].sort((a, b) => b[1] - a[1]),
  };
}

function groupBySpotName(strings) {
  const byName = new Map();
  for (const entry of strings) {
    if (entry.section !== "attractions" && entry.text.length < 4) continue;
    // Heuristic: spot names in attractions often appear as name: "..."
    // We'll track first paragraph signatures per known waterfall names
  }
  return byName;
}

// --- main ---

const seljaFirstPara =
  "塞里雅蘭瀑布（Seljalandsfoss）位於冰島南部1號公路旁";
const skogaFirstPara =
  "斯科加瀑布（Skógafoss）是位於冰島南部的一個瀑布";

const allStrings = [];
for (const filePath of listPackageFiles()) {
  allStrings.push(...extractModalStrings(filePath));
}

const bySection = { attractions: 0, highlights: 0, optional: 0 };
const issueEntries = [];
const needsNormalizeCount = { attractions: 0, highlights: 0, optional: 0 };
const patternCounts = new Map();

for (const entry of allStrings) {
  bySection[entry.section] = (bySection[entry.section] ?? 0) + 1;
  const issues = auditString(entry);
  if (issues.length === 0) continue;

  issueEntries.push({ ...entry, issues });

  if (issues.some((i) => i.kind === "needs-normalize")) {
    needsNormalizeCount[entry.section] =
      (needsNormalizeCount[entry.section] ?? 0) + 1;
  }

  for (const issue of issues) {
    if (issue.kind === "pattern") {
      const key = `${issue.label}：${issue.match}`;
      patternCounts.set(key, (patternCounts.get(key) ?? 0) + 1);
    }
  }
}

const spotAudit = auditSpotFiles();
const imports = countSpotImports(seljaFirstPara, skogaFirstPara);

// Unique spots still inline (seljalandsfoss / skogafoss paragraph fingerprint)
let seljaInlineFiles = 0;
let skogaInlineFiles = 0;
for (const filePath of listPackageFiles()) {
  const content = fs.readFileSync(filePath, "utf8");
  if (content.includes(seljaFirstPara)) seljaInlineFiles++;
  if (content.includes(skogaFirstPara)) skogaInlineFiles++;
}

const totalStrings = allStrings.length;
const totalIssues = issueEntries.length;
const fullyDone = totalStrings - issueEntries.filter((e) =>
  e.issues.some((i) => i.kind === "needs-normalize" || i.kind === "pattern"),
).length;

const jsonMode = process.argv.includes("--json");

const summary = {
  totalModalStrings: totalStrings,
  bySection,
  stringsWithIssues: totalIssues,
  stringsFullyNormalizedInSource: fullyDone,
  percentDoneInSource: Math.round((fullyDone / totalStrings) * 1000) / 10,
  needsNormalizeBySection: needsNormalizeCount,
  spotFiles: spotAudit.spotFiles,
  spotStringsWithIssues: spotAudit.spotIssues.length,
  imports,
  seljaInlineFiles,
  skogaInlineFiles,
  topPatterns: [...patternCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20),
};

if (jsonMode) {
  console.log(JSON.stringify(summary, null, 2));
  process.exit(0);
}

let md = `# Modal 台灣用語稽核\n\n`;
md += `產生時間：${new Date().toISOString()}\n\n`;
md += `## 總覽\n\n`;
md += `| 項目 | 數量 |\n|------|------|\n`;
md += `| Modal 中文字串總數 | ${totalStrings} |\n`;
md += `| 熱門景點 (attractions) | ${bySection.attractions ?? 0} |\n`;
md += `| 旅行亮點 (highlights) | ${bySection.highlights ?? 0} |\n`;
md += `| 自選報名 (optional) | ${bySection.optional ?? 0} |\n`;
md += `| **來源已完全符合台灣用語** | **${fullyDone}** (${summary.percentDoneInSource}%) |\n`;
md += `| 仍有問題的字串 | ${totalIssues} |\n`;
md += `| spots/ 單一來源檔 | ${spotAudit.spotFiles} |\n`;
md += `| spots/ 仍有問題的字串 | ${spotAudit.spotIssues.length} |\n\n`;

md += `## 景點引用狀態\n\n`;
md += `- 套餐檔案數：${imports.packageFiles}\n`;
md += `- 引用 \`reykjavikSpot\`：${imports.importReykjavik} 檔\n`;
md += `- 引用 \`seljalandsfossSpot\`：${imports.importSelja} 檔\n`;
md += `- 引用 \`skogafossSpot\`：${imports.importSkoga} 檔\n`;
md += `- 內嵌塞里雅蘭瀑布正文（SLM 原文指紋）：**${seljaInlineFiles}** 檔\n`;
md += `- 內嵌斯科加瀑布正文（SLM 原文指紋）：**${skogaInlineFiles}** 檔\n\n`;

if (imports.importCounts.length > 0) {
  md += `### spots/ 引用次數\n\n`;
  for (const [spot, count] of imports.importCounts) {
    md += `- \`${spot}\`：${count} 檔\n`;
  }
  md += `\n`;
}

md += `## 待 normalize 字串（依區塊）\n\n`;
md += `- attractions：${needsNormalizeCount.attractions ?? 0}\n`;
md += `- highlights：${needsNormalizeCount.highlights ?? 0}\n`;
md += `- optional：${needsNormalizeCount.optional ?? 0}\n\n`;

md += `## 常見問題詞（前 20）\n\n`;
for (const [key, count] of summary.topPatterns) {
  md += `- ${key}（${count} 次）\n`;
}
md += `\n`;

md += `## 範例：仍有問題的字串（前 40）\n\n`;
for (const entry of issueEntries.slice(0, 40)) {
  const kinds = entry.issues.map((i) => i.label ?? i.kind).join("；");
  const preview = entry.text.slice(0, 80).replace(/\n/g, " ");
  md += `- \`${entry.file}:${entry.line}\` [${entry.section}] ${kinds}\n`;
  md += `  > ${preview}…\n`;
}
if (issueEntries.length > 40) {
  md += `\n_（另有 ${issueEntries.length - 40} 處未列出）_\n`;
}

md += `\n## spots/ 單一來源問題（前 20）\n\n`;
for (const entry of spotAudit.spotIssues.slice(0, 20)) {
  const kinds = entry.issues.map((i) => i.label ?? i.kind).join("；");
  const preview = entry.text.slice(0, 80).replace(/\n/g, " ");
  md += `- \`${entry.file}:${entry.line}\` ${kinds}\n`;
  md += `  > ${preview}…\n`;
}

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, md, "utf8");

console.log(`Wrote ${path.relative(ROOT, OUT_PATH)}`);
console.log(
  `Modal strings: ${totalStrings}, issues: ${totalIssues}, source-done: ${fullyDone} (${summary.percentDoneInSource}%)`,
);
console.log(
  `Seljalandsfoss inline: ${seljaInlineFiles} files, Skógafoss inline: ${skogaInlineFiles} files`,
);
