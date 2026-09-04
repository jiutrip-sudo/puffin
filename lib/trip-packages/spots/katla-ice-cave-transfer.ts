import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const katlaIceCaveTransferSpot: TripAttraction = {
  name: "卡特拉冰洞探險（含首都接送）",
  nameEn: "Katla Ice Cave with Transfer",
  region: "冰島南部",
  subtitle: "含雷克雅維克接送的全年冰洞",
  imageUrl: IMG("katlatrack_tours_Katla_1_c637acd217.jpg"),
  galleryImages: [
    IMG("katlatrack_tours_Katla_1_c637acd217.jpg"),
    IMG("man_and_woman_katla_ice_cave_iceland_c13ba13931.webp"),
  ],
  paragraphs: [
    "首都出發的卡特拉冰洞一日遊",
    `從${PLACE_TW.reykjavik}乘超級吉普南下，日光充足時常停靠${PLACE_TW.skogafoss}、${PLACE_TW.seljalandsfoss}。在 Kötlujökull 冰舌下探索藍黑層疊的卡特拉冰洞，嚮導提供頭盔、冰爪並解說火山地質。`,
    "全程約一日，傍晚返回首都。不適合易暈車或背部傷患旅客；請穿防水保暖衣物與結實鞋履。",
  ],
};
