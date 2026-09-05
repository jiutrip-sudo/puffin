#!/usr/bin/env node
/**
 * 掃描行程 package 的 hero / gallery senlinmao 圖，產生 trip-legacy-map.json。
 * 已在 spot legacy-map 的檔名略過（runtime 直接重用 spots/）。
 *
 *   node scripts/build-trip-media-inventory.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const PACKAGES_DIR = path.join(ROOT, "lib/trip-packages");
const SPOT_MAP_PATH = path.join(ROOT, "lib/media/legacy-map.json");
const OUT = path.join(ROOT, "lib/media/trip-legacy-map.json");

function legacyFileFromSenlinmaoUrl(url) {
  if (!url.includes("senlinmao.com")) return undefined;
  const match = url.match(/senlinmao\.com\/images\/[^/]+\/([^/?#]+)/);
  return match?.[1];
}
const PACKAGE_ID_RE = /id:\s*["']([^"']+)["']/;
const GALLERY_BLOCK_RE = /gallery:\s*\[([\s\S]*?)\],/;

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function legacyToAssetId(filename) {
  const stem = filename.replace(/\.[a-z0-9]+$/i, "");
  let trimmed = stem.replace(/_[a-f0-9]{6,}$/i, "").replace(/^\d+_/, "");
  if (!trimmed || /^_+$/.test(trimmed)) {
    trimmed = stem.replace(/^_+/, "");
  }
  const assetId = trimmed
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
  return (
    assetId ||
    `legacy-${stem.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40)}`
  );
}

function legacyToNameEn(filename) {
  return filename
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/_[a-f0-9]{6,}$/i, "")
    .replace(/^\d+_/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function galleryIdToNameEn(id) {
  return id.replace(/-/g, " ").replace(/\s+/g, " ").trim();
}

/** @type {Record<string, { assetId: string; nameEn: string; legacyFile: string; tripId?: string }>} */
const map = {};

function remember(legacyFile, nameEn, tripId) {
  if (!legacyFile || map[legacyFile]) return;
  map[legacyFile] = {
    assetId: legacyToAssetId(legacyFile),
    nameEn: nameEn || legacyToNameEn(legacyFile),
    legacyFile,
    ...(tripId ? { tripId } : {}),
  };
}

const spotMap = fs.existsSync(SPOT_MAP_PATH) ? loadJson(SPOT_MAP_PATH) : {};
const spotFiles = new Set(Object.keys(spotMap));

const packageFiles = fs
  .readdirSync(PACKAGES_DIR)
  .filter(
    (name) =>
      name.startsWith("iceland-") &&
      name.endsWith(".ts") &&
      !name.includes("-day") &&
      !name.includes("-days"),
  )
  .sort();

for (const file of packageFiles) {
  const content = fs.readFileSync(path.join(PACKAGES_DIR, file), "utf8");
  const tripId = content.match(PACKAGE_ID_RE)?.[1];

  const galleryBlock = content.match(GALLERY_BLOCK_RE)?.[1];
  if (galleryBlock) {
    for (const item of galleryBlock.matchAll(
      /\{[^{}]*id:\s*["']([^"']+)["'][^{}]*url:\s*["']([^"']+)["'][^{}]*\}/g,
    )) {
      const galleryId = item[1];
      const url = item[2];
      const legacyFile = legacyFileFromSenlinmaoUrl(url);
      if (!legacyFile || spotFiles.has(legacyFile)) continue;
      remember(legacyFile, galleryIdToNameEn(galleryId), tripId);
    }
  }

  const heroMatch = content.match(
    /heroImage:\s*\n?\s*["']([^"']+)["']/,
  );
  if (heroMatch) {
    const legacyFile = legacyFileFromSenlinmaoUrl(heroMatch[1]);
    if (legacyFile && !spotFiles.has(legacyFile)) {
      remember(legacyFile, legacyToNameEn(legacyFile), tripId);
    }
  }
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${JSON.stringify(map, null, 2)}\n`);

console.log(
  `Wrote ${Object.keys(map).length} trip-only entries → ${path.relative(ROOT, OUT)}`,
);
console.log(`（略過 ${spotFiles.size} 個已在 spot legacy-map 的檔名）`);
