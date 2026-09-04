import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const auroraBoatTourSpot: TripAttraction = {
  name: "雷克雅維克出發極光船遊",
  nameEn: "Northern Lights by Boat",
  region: "雷克雅維克",
  subtitle: "舊港出海的極光追尋",
  imageUrl: IMG("2_724f80a9ac.jpg"),
  galleryImages: [
    IMG("2_724f80a9ac.jpg"),
    IMG("2_d3d522c3ff.jpg"),
  ],
  paragraphs: [
    "海上追極光的獨特角度",
    `從${PLACE_TW.reykjavik}舊港駛離市區光害，約 15–20 分鐘後在較暗海域等候極光。嚮導解說極光成因與北歐傳說，船上可借用連體防寒服。`,
    "能否看見極光取決於天氣與太陽活動；海上風大，請多層保暖。發團時間依季節調整，出發前請確認當日通知。",
  ],
};
