import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reykjavikSeaAnglingSpot: TripAttraction = {
  name: "冰島海釣體驗（雷克雅維克出發）",
  nameEn: "Sea Angling from Reykjavík",
  region: "雷克雅維克",
  subtitle: "老港出發的北大西洋海釣",
  imageUrl: IMG("1_db432558d3.jpg"),
  galleryImages: [
    IMG("1_db432558d3.jpg"),
    IMG("3_H6_A9478_bbc89301ab.jpg"),
  ],
  paragraphs: [
    "首都近海的海釣體驗",
    `從${PLACE_TW.reykjavik}老港乘船出海，沿途可見 Esja 山與維澤島（Viðey）等景致。船員示範釣法，冰島近海魚種豐富，新手也容易上鉤。`,
    "視當日渔獲，船員可能現場烹調部分魚獲供品嚐（依數量與尺寸規定）。出海受天候影響，請穿保暖防風衣物並提前確認集合時間。",
  ],
};
