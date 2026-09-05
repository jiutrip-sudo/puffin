#!/usr/bin/env node
/**
 * 掃描 lib/guides/registry.ts 各篇 coverImage（senlinmao），產生 guides-legacy-map.json。
 * assetId = 攻略 slug → R2：guides/assets/{slug}.webp
 *
 *   node scripts/build-guides-media-inventory.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const REGISTRY_PATH = path.join(ROOT, "lib/guides/registry.ts");
const OUT = path.join(ROOT, "lib/media/guides-legacy-map.json");

const ARTICLE_COVER_RE =
  /slug:\s*["']([^"']+)["'][\s\S]*?coverImage:\s*\n?\s*["']([^"']+)["']/g;

function legacyFileFromSenlinmaoUrl(url) {
  if (!url.includes("senlinmao.com")) return undefined;
  const match = url.match(/senlinmao\.com\/images\/[^/]+\/([^/?#]+)/);
  return match?.[1];
}

function titleToNameEn(title) {
  return title.replace(/\s+/g, " ").trim();
}

/** @type {Record<string, { guideSlug: string; assetId: string; nameEn: string; legacyFile: string }>} */
const map = {};

const content = fs.readFileSync(REGISTRY_PATH, "utf8");

for (const match of content.matchAll(ARTICLE_COVER_RE)) {
  const guideSlug = match[1];
  const coverUrl = match[2];
  const legacyFile = legacyFileFromSenlinmaoUrl(coverUrl);
  if (!legacyFile || map[guideSlug]) {
    continue;
  }

  const titleMatch = content
    .slice(match.index ?? 0, (match.index ?? 0) + 400)
    .match(/title:\s*["']([^"']+)["']/);
  const nameEn = titleMatch ? titleToNameEn(titleMatch[1]) : guideSlug.replace(/-/g, " ");

  map[guideSlug] = {
    guideSlug,
    assetId: guideSlug,
    nameEn,
    legacyFile,
  };
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${JSON.stringify(map, null, 2)}\n`);

console.log(
  `Wrote ${Object.keys(map).length} guide entries → ${path.relative(ROOT, OUT)}`,
);
