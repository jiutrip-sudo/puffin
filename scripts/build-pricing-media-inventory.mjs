#!/usr/bin/env node
/**
 * 掃描 lib/trip-pricing/iceland-*.ts 的 SLM_IMAGE / SLM_CAR_IMAGE 檔名。
 * 已在 spot / trip legacy-map 的略過。
 *
 *   node scripts/build-pricing-media-inventory.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const PRICING_DIR = path.join(ROOT, "lib/trip-pricing");
const SPOT_MAP_PATH = path.join(ROOT, "lib/media/legacy-map.json");
const TRIP_MAP_PATH = path.join(ROOT, "lib/media/trip-legacy-map.json");
const OUT = path.join(ROOT, "lib/media/pricing-legacy-map.json");

const SLM_IMAGE_RE = /SLM_(?:IMAGE|CAR_IMAGE)\(\s*["']([^"']+)["']/g;

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

function inferPricingNameEn(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes("guesthouse") || lower === "_bf970f5aa3.png") {
    return "Iceland guesthouse bedroom";
  }
  if (
    lower.includes("type_") ||
    lower.includes("_car_") ||
    lower.includes("landcruiser") ||
    lower.startsWith("ifmn")
  ) {
    return "Iceland rental car";
  }
  if (
    lower.includes("bar") ||
    lower.includes("restaurant") ||
    lower.includes("breakfast")
  ) {
    return "Iceland hotel restaurant";
  }
  if (lower.includes("glacier_lagoon")) {
    return "Iceland hotel lobby";
  }
  if (lower.includes("hotel") || lower.includes("lights") || lower.includes("sand")) {
    return "Iceland hotel room";
  }
  if (lower.includes("siglo") || lower.includes("skuggi") || lower.includes("fosshotel")) {
    return "Iceland hotel room";
  }
  return "Iceland accommodation";
}

/** @type {Record<string, { assetId: string; nameEn: string; legacyFile: string }>} */
const map = {};

const spotFiles = new Set(
  fs.existsSync(SPOT_MAP_PATH) ? Object.keys(loadJson(SPOT_MAP_PATH)) : [],
);
const tripFiles = new Set(
  fs.existsSync(TRIP_MAP_PATH) ? Object.keys(loadJson(TRIP_MAP_PATH)) : [],
);

const pricingFiles = fs
  .readdirSync(PRICING_DIR)
  .filter((name) => name.startsWith("iceland-") && name.endsWith(".ts"))
  .sort();

for (const file of pricingFiles) {
  const content = fs.readFileSync(path.join(PRICING_DIR, file), "utf8");
  for (const match of content.matchAll(SLM_IMAGE_RE)) {
    const legacyFile = match[1];
    if (spotFiles.has(legacyFile) || tripFiles.has(legacyFile) || map[legacyFile]) {
      continue;
    }
    map[legacyFile] = {
      assetId: legacyToAssetId(legacyFile),
      nameEn: inferPricingNameEn(legacyFile),
      legacyFile,
    };
  }
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${JSON.stringify(map, null, 2)}\n`);

console.log(
  `Wrote ${Object.keys(map).length} pricing entries → ${path.relative(ROOT, OUT)}`,
);
