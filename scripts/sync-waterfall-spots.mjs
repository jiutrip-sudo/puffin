#!/usr/bin/env node
/**
 * 將各檔案中重複的塞里雅蘭／斯科加瀑布景點物件，改為引用 spots/ 單一來源。
 *
 *   node scripts/sync-waterfall-spots.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PACKAGES_DIR = path.join(ROOT, "lib/trip-packages");

const SPOT_CONFIGS = [
  {
    marker: /name: "塞里雅蘭瀑布",\s*nameEn: "Seljalandsfoss",/,
    importLine: 'import { seljalandsfossSpot } from "./spots/seljalandsfoss";',
    replacement: "seljalandsfossSpot",
    exclude: "spots/seljalandsfoss.ts",
  },
  {
    marker: /name: "斯科加瀑布",\s*nameEn: "Skógafoss",/,
    importLine: 'import { skogafossSpot } from "./spots/skogafoss";',
    replacement: "skogafossSpot",
    exclude: "spots/skogafoss.ts",
  },
];

function findObjectBounds(content, startIndex) {
  let depth = 0;
  let inString = false;
  let escape = false;

  for (let i = startIndex; i < content.length; i++) {
    const ch = content[i];

    if (inString) {
      if (escape) {
        escape = false;
        continue;
      }
      if (ch === "\\") {
        escape = true;
        continue;
      }
      if (ch === '"') inString = false;
      continue;
    }

    if (ch === '"') {
      inString = true;
      continue;
    }

    if (ch === "{") depth += 1;
    if (ch === "}") {
      depth -= 1;
      if (depth === 0) {
        let end = i + 1;
        while (end < content.length && /[\s,]/.test(content[end])) end += 1;
        return { start: startIndex, end };
      }
    }
  }

  return null;
}

function ensureImport(content, importLine) {
  if (content.includes(importLine)) return content;

  const importMatch = content.match(/^import .+;\n/m);
  if (importMatch) {
    const insertAt = importMatch.index + importMatch[0].length;
    return (
      content.slice(0, insertAt) + importLine + "\n" + content.slice(insertAt)
    );
  }

  return importLine + "\n" + content;
}

function syncSpotInFile(filePath, config) {
  if (filePath.includes(config.exclude)) return 0;

  let content = fs.readFileSync(filePath, "utf8");
  let replacements = 0;

  while (true) {
    const markerMatch = content.match(config.marker);
    if (!markerMatch || markerMatch.index === undefined) break;

    const markerIndex = markerMatch.index;
    const objectStart = content.lastIndexOf("{", markerIndex);
    const bounds = findObjectBounds(content, objectStart);
    if (!bounds) break;

    const indentMatch = content.slice(0, objectStart).match(/(^|\n)([ \t]*)$/);
    const indent = indentMatch?.[2] ?? "  ";
    const replacement = `${indent}${config.replacement},`;

    content =
      content.slice(0, bounds.start) + replacement + content.slice(bounds.end);
    replacements += 1;
  }

  if (replacements === 0) return 0;

  content = ensureImport(content, config.importLine);
  fs.writeFileSync(filePath, content, "utf8");
  return replacements;
}

const totals = new Map();

for (const name of fs.readdirSync(PACKAGES_DIR)) {
  if (!name.endsWith(".ts")) continue;
  const filePath = path.join(PACKAGES_DIR, name);

  for (const config of SPOT_CONFIGS) {
    const count = syncSpotInFile(filePath, config);
    if (count > 0) {
      totals.set(name, (totals.get(name) ?? 0) + count);
      console.log(
        `${path.relative(ROOT, filePath)}: ${count} × ${config.replacement}`,
      );
    }
  }
}

console.log(
  `\nSynced waterfall spots in ${totals.size} file(s), ${[...totals.values()].reduce((a, b) => a + b, 0)} replacement(s).`,
);
