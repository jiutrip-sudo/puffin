#!/usr/bin/env node
/**
 * 掃描 lib/guides/articles/*.ts 各篇 coverImage（R2），產生 guides-legacy-map.json。
 * 僅當 cover 仍對應 senlinmao legacy 時需手動維護 legacyFile；新稿一律 coverR2Key。
 *
 *   node scripts/build-guides-media-inventory.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const ARTICLES_DIR = path.join(ROOT, "lib/guides/articles");
const OUT = path.join(ROOT, "lib/media/guides-legacy-map.json");

function titleToNameEn(title) {
  return title.replace(/\s+/g, " ").trim();
}

/** @type {Record<string, { guideSlug: string; assetId: string; nameEn: string; legacyFile: string }>} */
const existing = fs.existsSync(OUT)
  ? JSON.parse(fs.readFileSync(OUT, "utf8"))
  : {};

const map = { ...existing };

for (const file of fs.readdirSync(ARTICLES_DIR)) {
  if (!file.endsWith(".ts") || file === "index.ts") continue;
  const content = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf8");
  const slugMatch = content.match(/"slug":\s*"([^"]+)"/);
  if (!slugMatch) continue;
  const guideSlug = slugMatch[1];
  if (map[guideSlug]) continue;

  const titleMatch = content.match(/"title":\s*"([^"]+)"/);
  const nameEn = titleMatch ? titleToNameEn(titleMatch[1]) : guideSlug.replace(/-/g, " ");

  map[guideSlug] = {
    guideSlug,
    assetId: guideSlug,
    nameEn,
    legacyFile: existing[guideSlug]?.legacyFile ?? "",
  };
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${JSON.stringify(map, null, 2)}\n`);

console.log(
  `Wrote ${Object.keys(map).length} guide entries → ${path.relative(ROOT, OUT)}`,
);
