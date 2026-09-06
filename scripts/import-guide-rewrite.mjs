#!/usr/bin/env node
/**
 * 匯入 ChatGPT 重寫後的 JSON，更新 lib/guides/articles/{slug}.ts
 * 用法：npm run guides:import -- iceland-winter-self-drive-days tmp/guides-rewrite/iceland-winter-self-drive-days.rewritten.json
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { GUIDE_ARTICLE_SOURCES } from "../lib/guides/articles/index.ts";

const [slug, jsonPath] = process.argv.slice(2);

if (!slug || !jsonPath) {
  console.error("用法: node scripts/import-guide-rewrite.mjs <slug> <json-path>");
  process.exit(1);
}

const existing = GUIDE_ARTICLE_SOURCES.find((a) => a.slug === slug);
if (!existing) {
  console.error(`找不到 slug: ${slug}`);
  process.exit(1);
}

const raw = JSON.parse(readFileSync(jsonPath, "utf8"));
if (raw._meta?.slug && raw._meta.slug !== slug) {
  console.error(`JSON _meta.slug (${raw._meta.slug}) 與參數 slug 不一致`);
  process.exit(1);
}

const merged = {
  slug: existing.slug,
  title: raw.title,
  description: raw.description,
  category: raw.category,
  journeyStage: existing.journeyStage,
  coverImage: existing.coverImage,
  publishedAt: existing.publishedAt,
  ...(existing.featured ? { featured: true } : {}),
  featuredTrip: {
    href: existing.featuredTrip.href,
    title: raw.featuredTrip?.title ?? existing.featuredTrip.title,
    blurb: raw.featuredTrip?.blurb ?? existing.featuredTrip.blurb,
  },
  sections: raw.sections,
};

for (const key of ["title", "description", "category", "sections"]) {
  if (merged[key] == null) {
    console.error(`缺少必填欄位: ${key}`);
    process.exit(1);
  }
}

if (!Array.isArray(merged.sections) || merged.sections.length === 0) {
  console.error("sections 須為非空陣列");
  process.exit(1);
}

const articlePath = join(
  dirname(fileURLToPath(import.meta.url)),
  `../lib/guides/articles/${slug}.ts`,
);

const body = `import type { GuideArticle } from "../types";

export const guideArticle: GuideArticle = ${JSON.stringify(merged, null, 2)};
`;

writeFileSync(articlePath, body, "utf8");
console.log(`Updated ${articlePath}`);

const sync = spawnSync("npx", ["tsx", "scripts/sync-guides-index.mjs"], {
  stdio: "inherit",
  cwd: join(dirname(fileURLToPath(import.meta.url)), ".."),
});

if (sync.status !== 0) {
  process.exit(sync.status ?? 1);
}

console.log("建議執行: npm run audit:places && npm run audit:tw");
