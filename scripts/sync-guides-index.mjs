#!/usr/bin/env node
import { readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ARTICLES_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  "../lib/guides/articles",
);

const slugs = readdirSync(ARTICLES_DIR)
  .filter((name) => name.endsWith(".ts") && name !== "index.ts")
  .map((name) => name.replace(/\.ts$/, ""))
  .sort();

function toIdentifier(slug) {
  return slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

const imports = slugs
  .map(
    (slug) =>
      `import { guideArticle as ${toIdentifier(slug)} } from "./${slug}";`,
  )
  .join("\n");

const entries = slugs.map((slug) => `  ${toIdentifier(slug)},`).join("\n");

const body = `${imports}${imports ? "\n" : ""}
import type { GuideArticle } from "../types";

export const GUIDE_ARTICLE_SOURCES: GuideArticle[] = [
${entries}
];
`;

writeFileSync(join(ARTICLES_DIR, "index.ts"), body, "utf8");
console.log(`Synced index.ts (${slugs.length} articles)`);
