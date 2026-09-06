#!/usr/bin/env node
/**
 * 一鍵發布攻略：新建或更新 lib/guides/articles/{slug}.ts
 * 用法：npm run guides:publish -- path/to/article.json
 *
 * Draft JSON：coverR2Key + sections[].image.r2Key（見 scripts/guides/image-picks.json）
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { loadEnvLocal } from "./load-env-local.mjs";
import { GUIDE_JOURNEY_STAGES } from "../lib/guides/journey-stages.ts";
import { GUIDE_ARTICLE_SOURCES } from "../lib/guides/articles/index.ts";
import {
  resolveCoverImage,
  resolveSections,
} from "./guide-media.mjs";

loadEnvLocal();

const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error("用法: npm run guides:publish -- <json-path>");
  process.exit(1);
}

const raw = JSON.parse(readFileSync(jsonPath, "utf8"));
const slug = raw.slug ?? raw._meta?.slug;
if (!slug || typeof slug !== "string") {
  console.error("JSON 須含 slug");
  process.exit(1);
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error("slug 須為小寫 kebab-case");
  process.exit(1);
}

const existing = GUIDE_ARTICLE_SOURCES.find((a) => a.slug === slug);
const articlePath = join(
  dirname(fileURLToPath(import.meta.url)),
  `../lib/guides/articles/${slug}.ts`,
);
const isUpdate = existsSync(articlePath);

for (const key of ["title", "description", "category", "sections"]) {
  if (raw[key] == null) {
    console.error(`缺少必填欄位: ${key}`);
    process.exit(1);
  }
}

if (!Array.isArray(raw.sections) || raw.sections.length === 0) {
  console.error("sections 須為非空陣列");
  process.exit(1);
}

let sections;
try {
  sections = resolveSections(raw.sections);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}

let article;

if (isUpdate && existing) {
  let coverImage;
  try {
    coverImage =
      raw.coverR2Key || raw.coverImage
        ? resolveCoverImage(raw)
        : existing.coverImage;
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }

  article = {
    slug: existing.slug,
    title: raw.title,
    description: raw.description,
    category: raw.category,
    journeyStage: existing.journeyStage,
    coverImage,
    publishedAt: existing.publishedAt,
    ...(existing.featured ? { featured: true } : {}),
    featuredTrip: {
      href: existing.featuredTrip.href,
      title: raw.featuredTrip?.title ?? existing.featuredTrip.title,
      blurb: raw.featuredTrip?.blurb ?? existing.featuredTrip.blurb,
    },
    sections,
  };
} else {
  for (const key of ["journeyStage", "publishedAt", "featuredTrip"]) {
    if (raw[key] == null) {
      console.error(`新建攻略缺少: ${key}`);
      process.exit(1);
    }
  }

  if (!raw.coverR2Key && !raw.coverImage) {
    console.error("新建攻略缺少 coverR2Key");
    process.exit(1);
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

  let coverImage;
  try {
    coverImage = resolveCoverImage(raw);
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }

  article = {
    slug,
    title: raw.title,
    description: raw.description,
    category: raw.category,
    journeyStage: raw.journeyStage,
    coverImage,
    publishedAt: raw.publishedAt,
    ...(raw.featured ? { featured: true } : {}),
    featuredTrip: raw.featuredTrip,
    sections,
  };
}

const body = `import type { GuideArticle } from "../types";

export const guideArticle: GuideArticle = ${JSON.stringify(article, null, 2)};
`;

writeFileSync(articlePath, body, "utf8");
console.log(isUpdate ? `Updated ${articlePath}` : `Created ${articlePath}`);

const sync = spawnSync("npx", ["tsx", "scripts/sync-guides-index.mjs"], {
  stdio: "inherit",
  cwd: join(dirname(fileURLToPath(import.meta.url)), ".."),
});

if (sync.status !== 0) {
  process.exit(sync.status ?? 1);
}

console.log(`\n預覽: http://localhost:3000/guides/${slug}`);
