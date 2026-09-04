import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const snowmobileLangjokullSpot: TripAttraction = {
  name: "朗格冰川雪地摩托體驗",
  nameEn: "Langjökull Snowmobile",
  region: "黃金圈",
  subtitle: "黃金瀑布出發的冰川雪地摩托",
  imageUrl: IMG("Snowmobiling_in_iceland_74161f17de.png"),
  galleryImages: [
    IMG("Snowmobiling_in_iceland_74161f17de.png"),
    IMG("Snowmobiling_in_iceland_f4a729ddc9.jpg"),
  ],
  paragraphs: [
    "冰島最熱門的雪地摩托路線之一",
    `朗格冰川（Langjökull）是冰島第二大冰川。行程通常從${PLACE_TW.gullfoss}附近停車場集合，乘超級吉普上冰川營地，嚮導說明駕駛與安全裝備（頭盔、防水騎行服、手套等）後，在冰原上騎行並聆聽冰川地質與傳說。`,
    "需具基本體能並遵守年齡限制；請穿保暖防水衣物。冬季與夏季路線可能不同，出發前請確認當日天候與集合時間。",
  ],
};
