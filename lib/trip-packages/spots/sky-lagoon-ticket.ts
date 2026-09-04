import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const skyLagoonTicketSpot: TripAttraction = {
  name: "Sky Lagoon 天空之境溫泉7步療法純享體驗門票",
  nameEn: "Sky Lagoon Pure Lite Ritual",
  region: "雷克雅維克",
  subtitle: "首都近郊七步療法溫泉門票",
  imageUrl: IMG("skylagoon1_a6d89d4b28.png"),
  galleryImages: [
    IMG("skylagoon1_a6d89d4b28.png"),
    IMG("image_9e81d2e77a.png"),
  ],
  paragraphs: [
    "含七步療法的入場票",
    `Sky Lagoon 在${PLACE_TW.reykjavik}近郊 Skerjafjörður，2021 年開幕。70 公尺無邊際池面向大西洋，可遠眺凱尼爾山與斯奈菲爾斯冰川。`,
    "Pure Lite 等票種含招牌七步療法：溫泉、冷水池、桑拿、霧汽房、身體磨砂、濕蒸與漿果飲品。最低入場年齡 12 歲，請事先預約並攜帶泳衣。",
  ],
};
