import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const auroraMiniBusSpot: TripAttraction = {
  name: "雷克雅維克出發MINI巴士極光團",
  nameEn: "Northern Lights MINI Bus Tour",
  region: "雷克雅維克",
  subtitle: "小巴離城追極光",
  imageUrl: IMG("MINI_22daeef80a.png"),
  galleryImages: [
    IMG("MINI_22daeef80a.png"),
    IMG("aurora_borealis_2173702_1920_17e8f5ee5e.jpg"),
  ],
  paragraphs: [
    "小團體的極光追尋",
    `乘坐小巴離開${PLACE_TW.reykjavik}光害區，嚮導依當日預報選擇觀測點。冬季夜空下等候極光出現，適合攝影與初次追光旅客。`,
    "極光為自然現象，無法保證一定出現；若因天候取消或當晚未見極光，多數營運商提供改期或再參加條款（依各公司規定）。請穿保暖衣物並提前抵達集合點。",
  ],
};
