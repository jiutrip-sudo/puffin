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

function hashSuffix(stem) {
  const match = stem.match(/_([a-f0-9]{6,})$/i);
  return match?.[1]?.toLowerCase();
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function legacyToAssetId(filename, usedIds) {
  const stem = filename.replace(/\.[a-z0-9]+$/i, "");
  const hash = hashSuffix(stem);
  let readable = stem.replace(/_[a-f0-9]{6,}$/i, "").replace(/^\d+_/, "").replace(/^_+/, "");
  const readableSlug = slugify(readable);

  let base =
    readableSlug && readableSlug.length > 2 && !/^_+$/.test(readable)
      ? readableSlug.slice(0, 60)
      : hash || slugify(stem.replace(/^_+/, "")) || slugify(stem);

  if (!base) {
    base = hash || `legacy-${slugify(stem).slice(0, 40)}`;
  }

  let assetId = base.slice(0, 80);
  if (usedIds.has(assetId)) {
    const suffix = hash || slugify(stem).slice(-12) || "dup";
    assetId = `${base.slice(0, 72)}-${suffix}`.replace(/-+/g, "-").replace(/^-|-$/g, "");
  }

  usedIds.add(assetId);
  return assetId;
}

function legacyToNameEn(filename) {
  const stem = filename.replace(/\.[a-z0-9]+$/i, "");
  const hash = hashSuffix(stem);
  const name = stem
    .replace(/_[a-f0-9]{6,}$/i, "")
    .replace(/^\d+_/, "")
    .replace(/^_+/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return name || (hash ? `Legacy ${hash}` : stem.replace(/[_-]+/g, " ").trim());
}

function galleryIdToNameEn(id) {
  return id.replace(/-/g, " ").replace(/\s+/g, " ").trim();
}

/** @type {Record<string, { assetId: string; nameEn: string; legacyFile: string; tripId?: string }>} */
const map = {};
const usedAssetIds = new Set();

function remember(legacyFile, nameEn, tripId) {
  if (!legacyFile || map[legacyFile]) return;
  map[legacyFile] = {
    assetId: legacyToAssetId(legacyFile, usedAssetIds),
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
