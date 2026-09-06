#!/usr/bin/env node
/**
 * 從完整 JSON 建立新攻略（從零開始用）。
 * 用法：npm run guides:new -- tmp/guides-rewrite/my-slug.json
 *
 * JSON 須含 slug、title、description、category、journeyStage、coverImage、
 * publishedAt、featuredTrip、sections；featured 可選。
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { GUIDE_JOURNEY_STAGES } from "../lib/guides/journey-stages.ts";

const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error("用法: npm run guides:new -- <json-path>");
  process.exit(1);
}

const raw = JSON.parse(readFileSync(jsonPath, "utf8"));
const slug = raw.slug ?? raw._meta?.slug;
if (!slug || typeof slug !== "string") {
  console.error("JSON 須含 slug");
  process.exit(1);
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error("slug 須為小寫 kebab-case，例如 iceland-winter-self-drive-days");
  process.exit(1);
}

const articlePath = join(
  dirname(fileURLToPath(import.meta.url)),
  `../lib/guides/articles/${slug}.ts`,
);

try {
  readFileSync(articlePath);
  console.error(`已存在: ${articlePath}（請用 guides:import 更新文案）`);
  process.exit(1);
} catch {
  // ok
}

const required = [
  "title",
  "description",
  "category",
  "journeyStage",
  "coverImage",
  "publishedAt",
  "featuredTrip",
  "sections",
];

for (const key of required) {
  if (raw[key] == null) {
    console.error(`缺少必填欄位: ${key}`);
    process.exit(1);
  }
}

if (!GUIDE_JOURNEY_STAGES.some((s) => s.id === raw.journeyStage)) {
  console.error(
    `journeyStage 須為: ${GUIDE_JOURNEY_STAGES.map((s) => s.id).join(", ")}`,
  );
  process.exit(1);
}

if (!raw.featuredTrip?.href) {
  console.error("featuredTrip.href 必填");
  process.exit(1);
}

if (!Array.isArray(raw.sections) || raw.sections.length === 0) {
  console.error("sections 須為非空陣列");
  process.exit(1);
}

const article = {
  slug,
  title: raw.title,
  description: raw.description,
  category: raw.category,
  journeyStage: raw.journeyStage,
  coverImage: raw.coverImage,
  publishedAt: raw.publishedAt,
  ...(raw.featured ? { featured: true } : {}),
  featuredTrip: raw.featuredTrip,
  sections: raw.sections,
};

const body = `import type { GuideArticle } from "../types";

export const guideArticle: GuideArticle = ${JSON.stringify(article, null, 2)};
`;

writeFileSync(articlePath, body, "utf8");
console.log(`Created ${articlePath}`);

const sync = spawnSync("npx", ["tsx", "scripts/sync-guides-index.mjs"], {
  stdio: "inherit",
  cwd: join(dirname(fileURLToPath(import.meta.url)), ".."),
});

if (sync.status !== 0) {
  process.exit(sync.status ?? 1);
}

console.log("建議執行: npm run audit:places && npm run audit:tw");
