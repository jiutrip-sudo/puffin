#!/usr/bin/env node
/**
 * 掃描 lib/trip-packages/spots/*.ts，產生 legacy 檔名 → R2 路徑對照。
 *
 *   node scripts/build-media-inventory.mjs
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SPOTS_DIR = path.join(ROOT, "lib/trip-packages/spots");
const OUT = path.join(ROOT, "lib/media/legacy-map.json");

const IMG_RE = /IMG\(\s*["']([^"']+)["']\s*,?\s*\)/g;
const NAME_EN_RE = /nameEn:\s*["']([^"']+)["']/;

const files = fs
  .readdirSync(SPOTS_DIR)
  .filter((name) => name.endsWith(".ts") && name !== "_img.ts" && name !== "index.ts")
  .sort();

/** @type {Record<string, { slug: string; variant: string; nameEn: string }>} */
const map = {};

for (const file of files) {
  const slug = file.replace(/\.ts$/, "");
  const content = fs.readFileSync(path.join(SPOTS_DIR, file), "utf8");
  const nameEn = content.match(NAME_EN_RE)?.[1] ?? slug;

  const filenames = [];
  for (const match of content.matchAll(IMG_RE)) {
    const filename = match[1];
    if (!filenames.includes(filename)) {
      filenames.push(filename);
    }
  }

  filenames.forEach((filename, index) => {
    const variant = index === 0 ? "cover" : `gallery-${index}`;
    map[filename] = { slug, variant, nameEn };
  });
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${JSON.stringify(map, null, 2)}\n`);
console.log(`Wrote ${Object.keys(map).length} entries → ${path.relative(ROOT, OUT)}`);
