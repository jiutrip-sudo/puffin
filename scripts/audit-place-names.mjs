#!/usr/bin/env node
/**
 * 掃描 lib/trip-packages 中的冰島地名問題。
 * 輸出 tmp/place-name-audit.md；以 --fail 可在 CI 中失敗。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const packagesDir = path.join(root, "lib/trip-packages");
const glossaryPath = path.join(root, "lib/i18n/iceland-place-names.ts");
const outPath = path.join(root, "tmp/place-name-audit.md");
const failOnIssues = process.argv.includes("--fail");

function loadAliasEntries() {
  const src = fs.readFileSync(glossaryPath, "utf8");
  const entries = [];
  const blockRe =
    /\{\s*id:\s*"([^"]+)"[\s\S]*?tw:\s*"([^"]+)"[\s\S]*?(?:aliases:\s*\[([^\]]*)\])?/g;
  let m;
  while ((m = blockRe.exec(src)) !== null) {
    const [, id, tw, aliasBlock = ""] = m;
    const aliases = [...aliasBlock.matchAll(/"([^"]+)"/g)].map((a) => a[1]);
    for (const alias of aliases) {
      if (alias !== tw) entries.push({ alias, tw, id });
    }
  }
  return entries;
}

const aliasEntries = loadAliasEntries();

const simplifiedPatterns = [
  { pattern: /黄金/g, label: "簡體「黄金」", fail: true },
  { pattern: /雷克雅未克/g, label: "大陸用語「雷克雅未克」（台灣應為雷克雅維克）", fail: true },
  { pattern: /盖锡尔|盖歇尔/g, label: "簡體蓋錫爾變體", fail: true },
  { pattern: /钻石沙滩/g, label: "簡體「钻石沙滩」", fail: true },
  { pattern: /杰古沙龙/g, label: "簡體「杰古沙龙」", fail: true },
  { pattern: /维克镇/g, label: "簡體「维克镇」", fail: true },
];

function walkTsFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "spots") continue;
      files.push(...walkTsFiles(full));
    } else if (entry.name.endsWith(".ts")) {
      files.push(full);
    }
  }
  return files;
}

function lineNumber(text, index) {
  return text.slice(0, index).split("\n").length;
}

function excerpt(text, index, radius = 60) {
  const start = Math.max(0, index - radius);
  const end = Math.min(text.length, index + radius);
  return text.slice(start, end).replace(/\n/g, " ");
}

function scanFile(filePath) {
  const rel = path.relative(root, filePath);
  const text = fs.readFileSync(filePath, "utf8");
  const issues = [];

  for (const { pattern, label, fail } of simplifiedPatterns) {
    let match;
    const re = new RegExp(pattern.source, pattern.flags);
    while ((match = re.exec(text)) !== null) {
      issues.push({
        kind: label,
        line: lineNumber(text, match.index),
        excerpt: excerpt(text, match.index),
        blocking: Boolean(fail),
      });
    }
  }

  for (const { alias, tw, id } of aliasEntries) {
    let idx = 0;
    while ((idx = text.indexOf(alias, idx)) !== -1) {
      issues.push({
        kind: `別名「${alias}」→ 應為「${tw}」(${id})`,
        line: lineNumber(text, idx),
        excerpt: excerpt(text, idx),
        blocking: false,
      });
      idx += alias.length;
    }
  }

  const routeMatch = text.match(/routeStops:\s*\[([\s\S]*?)\]\s*,/);
  const itineraryMatches = [
    ...text.matchAll(/description:\s*"([^"]{0,500})/g),
  ].map((m) => m[1]);

  if (routeMatch && itineraryMatches.length > 0) {
    const stops = [...routeMatch[1].matchAll(/detail:\s*"([^"]+)"/g)].map(
      (m) => m[1],
    );
    for (const stop of stops) {
      const stopPlaces = stop
        .split(/[→、，,（）()\s]+/)
        .filter((s) => s.length >= 2);
      for (const place of stopPlaces) {
        const inItinerary = itineraryMatches.some((d) => d.includes(place));
        if (!inItinerary && /[\u4e00-\u9fff]/.test(place)) {
          issues.push({
            kind: "routeStops/itinerary 可能不一致",
            line: 0,
            excerpt: `routeStops 含「${place}」，itinerary description 未找到`,
            detail: stop,
            blocking: false,
          });
        }
      }
    }
  }

  return { rel, issues };
}

const files = walkTsFiles(packagesDir);
const results = files.map(scanFile).filter((r) => r.issues.length > 0);

let md = `# 冰島地名稽核報告\n\n`;
md += `產生時間：${new Date().toISOString()}\n\n`;
md += `掃描檔案：${files.length} 個\n\n`;

if (results.length === 0) {
  md += `✅ 未發現問題。\n`;
} else {
  const total = results.reduce((n, r) => n + r.issues.length, 0);
  md += `⚠️ ${results.length} 個檔案有問題（共 ${total} 筆）\n\n`;
  for (const { rel, issues } of results) {
    md += `## ${rel}\n\n`;
    for (const issue of issues) {
      md += `- **${issue.kind}**`;
      if (issue.line) md += ` (L${issue.line})`;
      md += `\n  - \`${issue.excerpt.trim()}\`\n`;
      if (issue.detail) md += `  - route: ${issue.detail}\n`;
    }
    md += `\n`;
  }
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, md, "utf8");
console.log(`Wrote ${outPath}`);
console.log(
  results.length === 0
    ? "No issues found."
    : `${results.reduce((n, r) => n + r.issues.length, 0)} issue(s) in ${results.length} file(s).`,
);

if (failOnIssues && results.some((r) => r.issues.some((i) => i.blocking))) {
  process.exit(1);
}
