#!/usr/bin/env node
/**
 * senlinmao 鏡像（spots / trips / pricing / guides）→ WebP →（可選）上傳 R2
 *
 * 環境變數（.env.local 或 shell）：
 *   PEXELS_API_KEY
 *   NEXT_PUBLIC_MEDIA_BASE_URL   （僅供提示，腳本不讀取網站）
 *   R2_BUCKET_NAME=puffinholiday-media
 *
 * 上傳需已 wrangler login，或設定 R2 S3 API 憑證。
 *
 * 用法：
 *   node scripts/build-media-inventory.mjs
 *   node scripts/media-sync.mjs --slug seljalandsfoss
 *   node scripts/media-sync.mjs --slug seljalandsfoss --variant cover --dry-run
 *   node scripts/media-sync.mjs --all --limit 5
 *   node scripts/media-sync.mjs --slug seljalandsfoss --upload
 *   node scripts/media-sync.mjs --all --force --upload          # spots：鏡像 senlinmao 原圖
 *   node scripts/build-trip-media-inventory.mjs
 *   node scripts/media-sync.mjs --kind trips --all --force --upload   # trips：鏡像 senlinmao 原圖
 *   node scripts/build-pricing-media-inventory.mjs
 *   node scripts/media-sync.mjs --kind pricing --all --upload
 *   node scripts/media-sync.mjs --kind pricing --all --force --upload  # 鏡像 senlinmao 原圖覆寫 Pexels
 *   node scripts/build-guides-media-inventory.mjs
 *   node scripts/media-sync.mjs --kind guides --all --force --upload  # guides：鏡像 senlinmao 原圖
 */
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import sharp from "sharp";
import { loadEnvLocal } from "./load-env-local.mjs";

loadEnvLocal();

const ROOT = process.cwd();
const SPOT_MAP_PATH = path.join(ROOT, "lib/media/legacy-map.json");
const TRIP_MAP_PATH = path.join(ROOT, "lib/media/trip-legacy-map.json");
const PRICING_MAP_PATH = path.join(ROOT, "lib/media/pricing-legacy-map.json");
const GUIDES_MAP_PATH = path.join(ROOT, "lib/media/guides-legacy-map.json");
const MANIFEST_PATH = path.join(ROOT, "lib/media/manifest.json");
const OUTBOX = path.join(ROOT, "media-outbox");

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const R2_BUCKET = process.env.R2_BUCKET_NAME ?? "puffinholiday-media";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const upload = args.includes("--upload");
const all = args.includes("--all");
const kind = readArg("--kind") ?? "spots";
const slugArg = readArg("--slug");
const variantArg = readArg("--variant");
const limit = Number(readArg("--limit") ?? "0") || Infinity;

function readArg(flag) {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
}

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function saveManifest(manifest) {
  fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
}

/** @returns {Array<{ slug: string; variant: string; nameEn: string; legacyFile: string; kind: string }>} */
function collectSpotJobs(legacyMap) {
  /** @type {Map<string, { slug: string; variant: string; nameEn: string; legacyFile: string; kind: string }>} */
  const byKey = new Map();

  for (const [legacyFile, entry] of Object.entries(legacyMap)) {
    const key = `${entry.slug}:${entry.variant}`;
    if (!byKey.has(key)) {
      byKey.set(key, { ...entry, legacyFile, kind: "spots" });
    }
  }

  return [...byKey.values()];
}

/** @returns {Array<{ slug: string; variant: string; nameEn: string; legacyFile: string; kind: string }>} */
function collectTripJobs(tripMap) {
  return Object.values(tripMap)
    .filter((entry) => {
      if (!entry.assetId) {
        console.warn(`略過空 assetId：${entry.legacyFile}`);
        return false;
      }
      return true;
    })
    .map((entry) => ({
      slug: entry.assetId,
      variant: "asset",
      nameEn: entry.nameEn,
      legacyFile: entry.legacyFile,
      kind: "trips",
    }));
}

/** @returns {Array<{ slug: string; variant: string; nameEn: string; legacyFile: string; kind: string }>} */
function collectPricingJobs(pricingMap) {
  return Object.values(pricingMap).map((entry) => ({
    slug: entry.assetId,
    variant: "asset",
    nameEn: entry.nameEn,
    legacyFile: entry.legacyFile,
    kind: "pricing",
  }));
}

/** @returns {Array<{ slug: string; variant: string; nameEn: string; legacyFile: string; kind: string }>} */
function collectGuidesJobs(guidesMap) {
  return Object.values(guidesMap).map((entry) => ({
    slug: entry.assetId,
    variant: "asset",
    nameEn: entry.nameEn,
    legacyFile: entry.legacyFile,
    kind: "guides",
  }));
}

function collectJobs(legacyMap, tripMap, pricingMap, guidesMap) {
  let jobs =
    kind === "trips"
      ? collectTripJobs(tripMap)
      : kind === "pricing"
        ? collectPricingJobs(pricingMap)
        : kind === "guides"
          ? collectGuidesJobs(guidesMap)
          : kind === "all"
            ? [
                ...collectSpotJobs(legacyMap),
                ...collectTripJobs(tripMap),
                ...collectPricingJobs(pricingMap),
                ...collectGuidesJobs(guidesMap),
              ]
            : collectSpotJobs(legacyMap);

  if (slugArg) {
    jobs = jobs.filter((job) => job.slug === slugArg);
    if (variantArg) {
      jobs = jobs.filter((job) => job.variant === variantArg);
    }
  } else if (!all) {
    console.error("請指定 --slug <slug> 或 --all");
    process.exit(1);
  }

  return jobs.slice(0, limit);
}

function r2KeyForJob(job) {
  if (job.kind === "trips") {
    return `trips/assets/${job.slug}.webp`;
  }
  if (job.kind === "pricing") {
    return `pricing/assets/${job.slug}.webp`;
  }
  if (job.kind === "guides") {
    return `guides/assets/${job.slug}.webp`;
  }
  return `spots/${job.slug}/${job.variant}.webp`;
}

function labelForJob(job) {
  if (job.kind === "trips" || job.kind === "pricing" || job.kind === "guides") {
    return `${job.slug} / asset`;
  }
  return `${job.slug} / ${job.variant}`;
}

function usesSenlinmaoMirror(job) {
  return (
    job.kind === "spots" ||
    job.kind === "trips" ||
    job.kind === "pricing" ||
    job.kind === "guides"
  );
}

/** slug / assetId 專用搜尋詞（legacy：僅非 mirror job 時使用） */
const QUERY_OVERRIDES = {
  "reykjavik-horse-riding": ["Icelandic horse", "Iceland horse"],
  "iceland-green-grass-and-waterfall": ["Iceland waterfall", "Iceland landscape"],
  "gyesir-eruption-group-watching-sightseeing-iceland-summer": [
    "Geysir Iceland",
    "Strokkur geyser",
  ],
};

function buildPexelsQueries(job) {
  const nameEn = job.nameEn.replace(/\s+/g, " ").trim();
  const slugWords = job.slug.replace(/-/g, " ");
  const candidates = [
    ...(QUERY_OVERRIDES[job.slug] ?? []),
    `${nameEn} Iceland`,
    nameEn,
    `${nameEn.replace(/\s+(riding|tour|experience|activity)\b/gi, "").trim()} Iceland`,
    `${slugWords} Iceland`,
    slugWords,
  ];

  return [...new Set(candidates.map((q) => q.replace(/\s+/g, " ").trim()).filter(Boolean))];
}

async function searchPexelsOnce(query) {
  if (!PEXELS_API_KEY) {
    throw new Error(
      "PEXELS_API_KEY 未設定。請在專案根目錄 .env.local 加入：PEXELS_API_KEY=你的key",
    );
  }

  const url = new URL("https://api.pexels.com/v1/search");
  url.searchParams.set("query", query);
  url.searchParams.set("per_page", "1");
  url.searchParams.set("orientation", "landscape");

  const res = await fetch(url, {
    headers: { Authorization: PEXELS_API_KEY },
  });

  if (!res.ok) {
    throw new Error(`Pexels API ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  const photo = data.photos?.[0];
  if (!photo) {
    return null;
  }

  return photo;
}

async function searchPexels(job) {
  const queries = buildPexelsQueries(job);

  for (const query of queries) {
    const photo = await searchPexelsOnce(query);
    if (photo) {
      return { photo, query };
    }
    console.log(`  Pexels 無結果，改試：${query}`);
  }

  throw new Error(`Pexels 無結果（已試 ${queries.join(" → ")}）`);
}

async function downloadAndConvert(photo, destPath) {
  const src =
    photo.src.large2x || photo.src.large || photo.src.original;
  const res = await fetch(src);
  if (!res.ok) {
    throw new Error(`下載失敗 ${res.status}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());

  await writeWebp(buffer, destPath);
}

const SLM_MIRROR_BASE =
  "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good";

async function mirrorSenlinmaoAndConvert(legacyFile, destPath) {
  const res = await fetch(`${SLM_MIRROR_BASE}/${legacyFile}`);
  if (!res.ok) {
    throw new Error(`senlinmao 鏡像下載失敗 ${res.status}：${legacyFile}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeWebp(buffer, destPath);
  console.log(`  已鏡像 senlinmao → ${path.relative(ROOT, destPath)}`);
}

async function writeWebp(buffer, destPath) {
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  await sharp(buffer)
    .rotate()
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(destPath);
}

function uploadToR2(localPath, r2Key) {
  execFileSync(
    "npx",
    [
      "wrangler",
      "r2",
      "object",
      "put",
      `${R2_BUCKET}/${r2Key}`,
      "--file",
      localPath,
      "--remote",
    ],
    { stdio: "inherit", cwd: ROOT },
  );
}

async function main() {
  if (kind === "spots" || kind === "all") {
    if (!fs.existsSync(SPOT_MAP_PATH)) {
      console.log("找不到 legacy-map.json，先執行 build-media-inventory…");
      execFileSync("node", ["scripts/build-media-inventory.mjs"], {
        stdio: "inherit",
        cwd: ROOT,
      });
    }
  }

  if (kind === "trips" || kind === "all") {
    if (!fs.existsSync(TRIP_MAP_PATH)) {
      console.log("找不到 trip-legacy-map.json，先執行 build-trip-media-inventory…");
      execFileSync("node", ["scripts/build-trip-media-inventory.mjs"], {
        stdio: "inherit",
        cwd: ROOT,
      });
    }
  }

  if (kind === "pricing" || kind === "all") {
    if (!fs.existsSync(PRICING_MAP_PATH)) {
      console.log("找不到 pricing-legacy-map.json，先執行 build-pricing-media-inventory…");
      execFileSync("node", ["scripts/build-pricing-media-inventory.mjs"], {
        stdio: "inherit",
        cwd: ROOT,
      });
    }
  }

  if (kind === "guides" || kind === "all") {
    if (!fs.existsSync(GUIDES_MAP_PATH)) {
      console.log("找不到 guides-legacy-map.json，先執行 build-guides-media-inventory…");
      execFileSync("node", ["scripts/build-guides-media-inventory.mjs"], {
        stdio: "inherit",
        cwd: ROOT,
      });
    }
  }

  const legacyMap = fs.existsSync(SPOT_MAP_PATH)
    ? loadJson(SPOT_MAP_PATH)
    : {};
  const tripMap = fs.existsSync(TRIP_MAP_PATH) ? loadJson(TRIP_MAP_PATH) : {};
  const pricingMap = fs.existsSync(PRICING_MAP_PATH)
    ? loadJson(PRICING_MAP_PATH)
    : {};
  const guidesMap = fs.existsSync(GUIDES_MAP_PATH) ? loadJson(GUIDES_MAP_PATH) : {};
  const manifest = loadJson(MANIFEST_PATH);
  const keySet = new Set(manifest.keys ?? []);

  if (kind === "trips" || kind === "all") {
    const validTripKeys = new Set(
      Object.values(tripMap).map((entry) => `trips/assets/${entry.assetId}.webp`),
    );
    let pruned = 0;
    for (const key of keySet) {
      if (key.startsWith("trips/assets/") && !validTripKeys.has(key)) {
        keySet.delete(key);
        pruned += 1;
      }
    }
    if (pruned > 0) {
      console.log(`已自 manifest 移除 ${pruned} 個過期 trip 圖 key`);
    }
  }

  const jobs = collectJobs(legacyMap, tripMap, pricingMap, guidesMap);

  console.log(`Kind: ${kind}`);
  console.log(`Jobs: ${jobs.length}${dryRun ? " (dry-run)" : ""}`);

  /** @type {Array<{ slug: string; variant: string; error: string }>} */
  const failures = [];

  for (const job of jobs) {
    const r2Key = r2KeyForJob(job);
    const localPath = path.join(OUTBOX, r2Key);
    const primaryQuery = buildPexelsQueries(job)[0];
    const jobLabel = usesSenlinmaoMirror(job)
      ? `${job.slug} / mirror ${job.legacyFile}`
      : `${primaryQuery}`;

    console.log(`\n→ ${labelForJob(job)}  (${jobLabel})`);

    if (keySet.has(r2Key) && !args.includes("--force")) {
      if (upload && fs.existsSync(localPath)) {
        try {
          uploadToR2(localPath, r2Key);
          console.log(`  已上傳 ${R2_BUCKET}/${r2Key}（manifest 已有，略過下載）`);
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          console.error(`  ✘ 上傳失敗：${message}`);
          failures.push({ slug: job.slug, variant: job.variant, error: message });
        }
      } else if (upload) {
        console.log(
          `  manifest 已有但找不到 ${path.relative(ROOT, localPath)}，加 --force 重新下載`,
        );
      } else {
        console.log("  略過：manifest 已有（加 --force 可覆寫，或加 --upload 只上傳本地檔）");
      }
      continue;
    }

    if (dryRun) {
      console.log(`  會寫入 ${localPath} → R2:${r2Key}`);
      continue;
    }

    try {
      if (usesSenlinmaoMirror(job)) {
        await mirrorSenlinmaoAndConvert(job.legacyFile, localPath);
      } else {
        const { photo, query } = await searchPexels(job);
        if (query !== primaryQuery) {
          console.log(`  使用備援關鍵字：${query}`);
        }
        console.log(
          `  Pexels #${photo.id} by ${photo.photographer} — ${photo.url}`,
        );
        await downloadAndConvert(photo, localPath);
        console.log(`  已輸出 ${path.relative(ROOT, localPath)}`);
      }

      if (upload) {
        uploadToR2(localPath, r2Key);
        console.log(`  已上傳 ${R2_BUCKET}/${r2Key}`);
      }

      keySet.add(r2Key);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  ✘ 略過：${message}`);
      failures.push({ slug: job.slug, variant: job.variant, error: message });
    }
  }

  if (!dryRun) {
    saveManifest({ keys: [...keySet].sort() });
    console.log(`\n已更新 ${path.relative(ROOT, MANIFEST_PATH)}`);
    if (!upload) {
      console.log(
        "\n本地檔在 media-outbox/。確認後加 --upload 上傳 R2，或手動拖進 Dashboard。",
      );
    }
    if (failures.length > 0) {
      console.log(`\n失敗 ${failures.length} 項（其餘已處理）：`);
      for (const row of failures) {
        console.log(`  - ${row.slug} / ${row.variant}: ${row.error}`);
      }
      console.log("\n可稍後用 --slug <slug> 重試，或在 media-sync.mjs 的 QUERY_OVERRIDES 加搜尋詞。");
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
