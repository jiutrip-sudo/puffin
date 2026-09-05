#!/usr/bin/env node
/**
 * 列出仍指向 senlinmao.com 的圖片 URL（不含 node_modules / tmp）
 *
 *   node scripts/audit-images.mjs
 *   node scripts/audit-images.mjs --fail
 */
import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SKIP = new Set(["node_modules", ".next", "tmp", "media-outbox"]);
const failOnHit = process.argv.includes("--fail");

/** @type {Array<{ file: string; count: number }>} */
const hits = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.(ts|tsx|js|mjs|json|md)$/.test(name)) continue;
    const text = fs.readFileSync(full, "utf8");
    const matches = text.match(/senlinmao\.com/g);
    if (matches?.length) {
      hits.push({ file: path.relative(ROOT, full), count: matches.length });
    }
  }
}

walk(ROOT);

const total = hits.reduce((sum, row) => sum + row.count, 0);
console.log(`senlinmao.com 引用：${total} 處，${hits.length} 個檔案\n`);
for (const row of hits.sort((a, b) => b.count - a.count)) {
  console.log(`  ${row.count}\t${row.file}`);
}

const manifestPath = path.join(ROOT, "lib/media/manifest.json");
if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const keys = manifest.keys ?? [];
  const spotCount = keys.filter((key) => key.startsWith("spots/")).length;
  const tripCount = keys.filter((key) => key.startsWith("trips/")).length;
  const pricingCount = keys.filter((key) => key.startsWith("pricing/")).length;
  const guidesCount = keys.filter((key) => key.startsWith("guides/")).length;
  console.log(
    `\nR2 manifest：${keys.length} 個資源（spots ${spotCount} · trips ${tripCount} · pricing ${pricingCount} · guides ${guidesCount}）`,
  );
}

const tripMapPath = path.join(ROOT, "lib/media/trip-legacy-map.json");
if (fs.existsSync(tripMapPath)) {
  const tripMap = JSON.parse(fs.readFileSync(tripMapPath, "utf8"));
  console.log(`trip-legacy-map：${Object.keys(tripMap).length} 個待同步 trip 資源`);
}

const pricingMapPath = path.join(ROOT, "lib/media/pricing-legacy-map.json");
if (fs.existsSync(pricingMapPath)) {
  const pricingMap = JSON.parse(fs.readFileSync(pricingMapPath, "utf8"));
  console.log(
    `pricing-legacy-map：${Object.keys(pricingMap).length} 個待同步 pricing 資源`,
  );
}

const guidesMapPath = path.join(ROOT, "lib/media/guides-legacy-map.json");
if (fs.existsSync(guidesMapPath)) {
  const guidesMap = JSON.parse(fs.readFileSync(guidesMapPath, "utf8"));
  console.log(
    `guides-legacy-map：${Object.keys(guidesMap).length} 個待同步 guides 資源`,
  );
}

if (failOnHit && total > 0) {
  process.exit(1);
}
