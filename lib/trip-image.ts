/** Senlinmao / Cloudinary URLs already include transform params; Next image optimizer often 500s on them. */
export function shouldBypassImageOptimization(src: string): boolean {
  try {
    const url = new URL(src);
    const base = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.trim();
    if (base && src.startsWith(base.replace(/\/$/, ""))) {
      return false;
    }
    return (
      url.hostname === "www.senlinmao.com" ||
      url.hostname === "res.cloudinary.com"
    );
  } catch {
    return false;
  }
}

export function resizeTripImageSrc(url: string, width: number): string {
  if (url.includes("senlinmao.com/images/")) {
    return url.replace(/w_\d+/, `w_${width}`);
  }
  const base = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.replace(/\/$/, "");
  if (base && url.startsWith(`${base}/`)) {
    return url;
  }
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}w=${width}&q=80`;
}
