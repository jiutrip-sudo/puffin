/** Senlinmao / Cloudinary URLs already include transform params; Next image optimizer often 500s on them. */
export function shouldBypassImageOptimization(src: string): boolean {
  try {
    const host = new URL(src).hostname;
    return host === "www.senlinmao.com" || host === "res.cloudinary.com";
  } catch {
    return false;
  }
}

export function resizeTripImageSrc(url: string, width: number): string {
  if (url.includes("senlinmao.com/images/")) {
    return url.replace(/w_\d+/, `w_${width}`);
  }
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}w=${width}&q=80`;
}
