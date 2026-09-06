/**
 * 攻略媒體：r2Key → CDN URL，並驗證 manifest。
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const MANIFEST_PATH = join(ROOT, "lib/media/manifest.json");

function loadManifestKeys() {
  const manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));
  return new Set(Array.isArray(manifest.keys) ? manifest.keys : []);
}

function mediaBaseUrl() {
  const raw = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.trim();
  if (!raw) {
    throw new Error("NEXT_PUBLIC_MEDIA_BASE_URL 未設定");
  }
  return raw.replace(/\/$/, "");
}

export function isMediaCdnUrl(src) {
  const base = mediaBaseUrl();
  return typeof src === "string" && src.startsWith(`${base}/`);
}

export function resolveR2Key(r2Key) {
  if (!r2Key || typeof r2Key !== "string") {
    throw new Error("r2Key 必填");
  }
  const normalized = r2Key.replace(/^\//, "");
  const keys = loadManifestKeys();
  if (!keys.has(normalized)) {
    throw new Error(`r2Key 不在 manifest：${normalized}`);
  }
  return `${mediaBaseUrl()}/${normalized}`;
}

export function resolveCoverImage(raw) {
  if (raw.coverR2Key) {
    return resolveR2Key(raw.coverR2Key);
  }
  if (raw.coverImage) {
    if (isMediaCdnUrl(raw.coverImage)) {
      return raw.coverImage;
    }
    throw new Error(
      "coverImage 須為 R2 CDN URL，或改用 coverR2Key（禁止 unsplash、senlinmao、/images/）",
    );
  }
  throw new Error("缺少 coverR2Key 或 coverImage");
}

export function resolveSectionImage(image) {
  if (!image) {
    return undefined;
  }
  if (image.r2Key) {
    const { r2Key, alt, caption } = image;
    if (!alt?.trim()) {
      throw new Error("section.image.alt 必填");
    }
    return {
      src: resolveR2Key(r2Key),
      alt: alt.trim(),
      ...(caption?.trim() ? { caption: caption.trim() } : {}),
    };
  }
  if (image.src) {
    if (!image.alt?.trim()) {
      throw new Error("section.image.alt 必填");
    }
    if (!isMediaCdnUrl(image.src)) {
      throw new Error(`section.image.src 須為 R2 CDN：${image.src}`);
    }
    return {
      src: image.src,
      alt: image.alt.trim(),
      ...(image.caption?.trim() ? { caption: image.caption.trim() } : {}),
    };
  }
  throw new Error("section.image 須含 r2Key 或 src");
}

export function resolveSections(sections) {
  return sections.map((section, index) => {
    if (!section.image) {
      throw new Error(`sections[${index}] 缺少 image（每節須配圖）`);
    }
    const image = resolveSectionImage(section.image);
    const { image: _drop, ...rest } = section;
    return { ...rest, image };
  });
}
