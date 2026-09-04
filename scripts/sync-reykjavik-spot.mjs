#!/usr/bin/env node
/**
 * 將各檔案中重複的雷克雅維克景點物件，改為引用 spots/reykjavik.ts 單一來源。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PACKAGES_DIR = path.join(ROOT, "lib/trip-packages");

const IMPORT_LINE = 'import { reykjavikSpot } from "./spots/reykjavik";';
const MARKER = /name: "雷克雅維克",\s*nameEn: "Reykjavík",/;

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

function syncFile(filePath) {
  if (filePath.includes("/spots/reykjavik.ts")) return false;

  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  while (true) {
    const markerMatch = content.match(MARKER);
    if (!markerMatch || markerMatch.index === undefined) break;

    const markerIndex = markerMatch.index;
    const objectStart = content.lastIndexOf("{", markerIndex);
    const bounds = findObjectBounds(content, objectStart);
    if (!bounds) break;

    const indentMatch = content.slice(0, objectStart).match(/(^|\n)([ \t]*)$/);
    const indent = indentMatch?.[2] ?? "  ";
    const replacement = `${indent}reykjavikSpot,`;

    content =
      content.slice(0, bounds.start) + replacement + content.slice(bounds.end);
    changed = true;
  }

  if (!changed) return false;

  if (!content.includes(IMPORT_LINE)) {
    const importMatch = content.match(/^import .+;\n/m);
    if (importMatch) {
      const insertAt = importMatch.index + importMatch[0].length;
      content =
        content.slice(0, insertAt) + IMPORT_LINE + "\n" + content.slice(insertAt);
    } else {
      content = IMPORT_LINE + "\n" + content;
    }
  }

  fs.writeFileSync(filePath, content, "utf8");
  return true;
}

let touched = 0;
for (const name of fs.readdirSync(PACKAGES_DIR)) {
  if (!name.endsWith(".ts")) continue;
  const filePath = path.join(PACKAGES_DIR, name);
  if (syncFile(filePath)) {
    touched += 1;
    console.log(path.relative(ROOT, filePath));
  }
}

console.log(`\nSynced reykjavikSpot in ${touched} file(s).`);
