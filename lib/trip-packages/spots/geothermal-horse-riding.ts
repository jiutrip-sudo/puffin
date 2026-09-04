import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const geothermalHorseRidingSpot: TripAttraction = {
  name: "冰島地熱溫泉區騎馬體驗",
  nameEn: "Geothermal Area Horse Riding",
  region: "冰島南部",
  subtitle: "惠拉蓋爾濟地熱區騎行",
  imageUrl: IMG(
    "icelandic_horse_riding_in_geothermal_hot_springs_area_fffc1c1c18.png",
  ),
  galleryImages: [
    IMG(
      "icelandic_horse_riding_in_geothermal_hot_springs_area_fffc1c1c18.png",
    ),
    IMG("3c_4_13fcb3c1c1.jpg"),
  ],
  paragraphs: [
    "地熱蒸氣旁的騎馬路線",
    "行程多在惠拉蓋爾濟（Hveragerði）一帶，穿越地熱溫泉區與雷克雅山（Reykjafjall）坡地，可見蒸氣騰起與亨吉爾火山遠景。結束後返回馬廄，可與工作人員交流冰島馬知識。",
    `通常從${PLACE_TW.reykjavik}出發或於郊區集合。請提前 30 分鐘抵達，穿長褲與包腳鞋。`,
  ],
};
