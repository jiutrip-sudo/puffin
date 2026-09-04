import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const auroraSuperJeepSpot: TripAttraction = {
  name: "超級吉普獵尋北極光之旅",
  nameEn: "Northern Lights Super Jeep Tour",
  region: "雷克雅維克",
  subtitle: "超級吉普深入暗處追極光",
  imageUrl: IMG("_1a983ab81d.png"),
  galleryImages: [
    IMG("_1a983ab81d.png"),
    IMG("aurora_borealis_2173565_1920_de68ee72d3.jpg"),
  ],
  paragraphs: [
    "可抵達一般車輛難行的觀測點",
    `乘坐超級吉普離開${PLACE_TW.reykjavik}，前往光害更低的路段。嚮導解說極光預報與冰島趣聞，車上提供熱飲與毛毯。`,
    "能否看見極光取決於天氣與太陽活動。請穿足夠保暖衣物；若當晚未見極光，改期條款依營運商公告為準。",
  ],
};
