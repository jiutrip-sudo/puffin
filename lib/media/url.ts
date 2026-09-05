/** R2 / 自訂 media CDN base（不含結尾斜線） */
export function mediaBaseUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.trim();
  if (!raw) return undefined;
  return raw.replace(/\/$/, "");
}

export function mediaUrl(path: string): string {
  const base = mediaBaseUrl();
  if (!base) {
    throw new Error("NEXT_PUBLIC_MEDIA_BASE_URL 未設定");
  }
  return `${base}/${path.replace(/^\//, "")}`;
}

/** 新路徑：spots/{slug}/{variant}.webp */
export function spotImage(slug: string, variant = "cover"): string {
  return mediaUrl(`spots/${slug}/${variant}.webp`);
}

export function isMediaCdnUrl(src: string): boolean {
  const base = mediaBaseUrl();
  if (!base) return false;
  return src.startsWith(`${base}/`);
}
