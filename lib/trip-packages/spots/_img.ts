import { resolveSpotImg } from "@/lib/media/resolve";

/** 既有 spot 檔名；manifest 有 R2 資源時自動切換，否則 fallback senlinmao */
export const IMG = (file: string) => resolveSpotImg(file);

export { mediaUrl, spotImage } from "@/lib/media/url";
