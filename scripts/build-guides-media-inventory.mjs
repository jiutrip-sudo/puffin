#!/usr/bin/env node
/**
 * 掃描 lib/guides/registry.ts 的 coverImage senlinmao URL。
 * 已在 spot / trip / pricing legacy-map 的略過（runtime 直接重用）。
 *
 *   node scripts/build-guides-media-inventory.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const REGISTRY_PATH = path.join(ROOT, "lib/guides/registry.ts");
const SPOT_MAP_PATH = path.join(ROOT, "lib/media/legacy-map.json");
const TRIP_MAP_PATH = path.join(ROOT, "lib/media/trip-legacy-map.json");
const PRICING_MAP_PATH = path.join(ROOT, "lib/media/pricing-legacy-map.json");
const OUT = path.join(ROOT, "lib/media/guides-legacy-map.json");

const COVER_RE =
  /coverImage:\s*\n?\s*["']https:\/\/www\.senlinmao\.com\/images\/[^/]+\/([^"'?#]+)["']/g;

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

/** @type {Record<string, { assetId: string; nameEn: string; legacyFile: string }>} */
const map = {};

const knownFiles = new Set([
  ...(fs.existsSync(SPOT_MAP_PATH) ? Object.keys(loadJson(SPOT_MAP_PATH)) : []),
  ...(fs.existsSync(TRIP_MAP_PATH) ? Object.keys(loadJson(TRIP_MAP_PATH)) : []),
  ...(fs.existsSync(PRICING_MAP_PATH)
    ? Object.keys(loadJson(PRICING_MAP_PATH))
    : []),
]);

const content = fs.readFileSync(REGISTRY_PATH, "utf8");

for (const match of content.matchAll(COVER_RE)) {
  const legacyFile = match[1];
  if (!legacyFile || knownFiles.has(legacyFile) || map[legacyFile]) {
    continue;
  }

  map[legacyFile] = {
    assetId: legacyToAssetId(legacyFile),
    nameEn: legacyToNameEn(legacyFile) || "Iceland landscape",
    legacyFile,
  };
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${JSON.stringify(map, null, 2)}\n`);

console.log(
  `Wrote ${Object.keys(map).length} guide-only entries → ${path.relative(ROOT, OUT)}`,
);
if (Object.keys(map).length === 0) {
  console.log("（現有攻略封面均可重用 spots/trips/pricing，無需另 sync）");
}
