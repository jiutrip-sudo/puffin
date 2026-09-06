#!/usr/bin/env node
/**
 * 匯出攻略 JSON，供 ChatGPT 逐篇重寫（方案 A）。
 * 用法：npm run guides:export
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { GUIDE_JOURNEY_STAGES } from "../lib/guides/journey-stages.ts";
import { GUIDE_ARTICLE_SOURCES } from "../lib/guides/articles/index.ts";

const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), "../tmp/guides-rewrite");

mkdirSync(OUT_DIR, { recursive: true });

for (const article of GUIDE_ARTICLE_SOURCES) {
  const stage = GUIDE_JOURNEY_STAGES.find((s) => s.id === article.journeyStage);
  const payload = {
    _meta: {
      slug: article.slug,
      journeyStage: article.journeyStage,
      journeyStageLabel: stage ? `${stage.step} ${stage.label}` : article.journeyStage,
      doNotChange: [
        "slug",
        "journeyStage",
        "coverImage",
        "publishedAt",
        "featured",
        "featuredTrip.href",
      ],
      notes:
        "僅重寫 title、description、category、featuredTrip.title、featuredTrip.blurb、sections。簡中由網站自動轉換，請只輸出台灣繁中。",
    },
    title: article.title,
    description: article.description,
    category: article.category,
    featuredTrip: {
      href: article.featuredTrip.href,
      title: article.featuredTrip.title,
      blurb: article.featuredTrip.blurb,
    },
    sections: article.sections,
  };

  const outPath = join(OUT_DIR, `${article.slug}.json`);
  writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(outPath);
}

console.log(`\nExported ${GUIDE_ARTICLE_SOURCES.length} guides to tmp/guides-rewrite/`);
