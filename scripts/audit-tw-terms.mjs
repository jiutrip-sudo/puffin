#!/usr/bin/env node
/**
 * 掃描繁中用語問題（大陸／網路行銷詞彙）。
 * 執行：npm run audit:tw
 * CI：npm run audit:tw -- --fail
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const scanDirs = [
  path.join(root, "app"),
  path.join(root, "components"),
  path.join(root, "lib/guides"),
  path.join(root, "lib/i18n/messages"),
  path.join(root, "lib/trip-packages"),
];
const outPath = path.join(root, "tmp/tw-term-audit.md");
const failOnIssues = process.argv.includes("--fail");

/** 排除簡中轉換表與稽核腳本本身 */
const EXCLUDE_FILES = new Set([
  path.join(root, "lib/i18n/cn-terms.ts"),
  path.join(root, "scripts/apply-tw-term-fixes.mjs"),
  path.join(root, "scripts/audit-tw-terms.mjs"),
]);

const PATTERNS = [
  { pattern: /登录|注册|联系|信息|视频|默认|邮箱|手机|用户|网络/g, label: "簡體／大陸行政用語" },
  { pattern: /打卡/g, label: "網路行銷「打卡」" },
  { pattern: /網紅|网红/g, label: "網路行銷「網紅」" },
  { pattern: /花少/g, label: "綜藝行銷「花少」" },
  { pattern: /冲锋衣/g, label: "大陸用語「冲锋衣」" },
  { pattern: /酒店/g, label: "大陸用語「酒店」（台灣常用飯店）" },
  { pattern: /冰川徒步/g, label: "大陸用語「冰川徒步」（台灣常用冰川健行）" },
];

function walkFiles(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git") continue;
      files.push(...walkFiles(full));
    } else if (/\.(ts|tsx|mdx)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function lineNumber(text, index) {
  return text.slice(0, index).split("\n").length;
}

function excerpt(text, index) {
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + 60);
  return text.slice(start, end).replace(/\n/g, " ");
}

const allIssues = [];

for (const dir of scanDirs) {
  for (const filePath of walkFiles(dir)) {
    if (EXCLUDE_FILES.has(filePath)) continue;
    const rel = path.relative(root, filePath);
    const text = fs.readFileSync(filePath, "utf8");

    for (const { pattern, label } of PATTERNS) {
      const re = new RegExp(pattern.source, pattern.flags);
      let match;
      while ((match = re.exec(text)) !== null) {
        allIssues.push({
          file: rel,
          label,
          line: lineNumber(text, match.index),
          match: match[0],
          excerpt: excerpt(text, match.index),
        });
      }
    }
  }
}

const grouped = new Map();
for (const issue of allIssues) {
  const key = issue.label;
  if (!grouped.has(key)) grouped.set(key, []);
  grouped.get(key).push(issue);
}

let md = `# 繁中用語稽核\n\n產生時間：${new Date().toISOString()}\n\n`;
md += `共 **${allIssues.length}** 處問題，**${grouped.size}** 類。\n\n`;

for (const [label, issues] of grouped) {
  md += `## ${label}（${issues.length}）\n\n`;
  for (const i of issues.slice(0, 50)) {
    md += `- \`${i.file}:${i.line}\` 「${i.match}」 — …${i.excerpt}…\n`;
  }
  if (issues.length > 50) md += `\n_（另有 ${issues.length - 50} 處未列出）_\n`;
  md += "\n";
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, md, "utf8");
console.log(`Wrote ${path.relative(root, outPath)} (${allIssues.length} issues)`);

if (failOnIssues && allIssues.length > 0) {
  console.error("TW term audit failed.");
  process.exit(1);
}
