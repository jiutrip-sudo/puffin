import { resolveSpotImg } from "@/lib/media/resolve";

/** 既有 spot 檔名 → R2，不引用 senlinmao */
export const IMG = (file: string) => resolveSpotImg(file);

export { mediaUrl, spotImage } from "@/lib/media/url";
