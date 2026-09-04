import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const blueLagoonSpot: TripAttraction = {
  name: "藍湖溫泉",
  nameEn: "Blue Lagoon",
  region: "雷克雅內斯半島",
  subtitle: "乳藍色地熱湖的冰島溫泉標誌",
  imageUrl: IMG("bluelagoon2_03f4fe484e.jpg"),
  galleryImages: [
    IMG("bluelagoon2_03f4fe484e.jpg"),
    IMG("bluelagoon1_3cc32fcacd.jpg"),
  ],
  paragraphs: [
    "雷克雅內斯半島的溫泉名片",
    `藍湖溫泉（Blue Lagoon）在${PLACE_TW.reykjanes}熔岩區，面向索比約恩山（Þorbjörn），是冰島最知名的地熱浴場之一。湖水乳藍色來自矽藻與礦物質，水溫約 37–39°C。`,
    "湖水最初與附近地熱發電廠排水有關；1980 年代起因礦物成分受到關注，逐步發展為對外開放的溫泉與 spa 設施。水中二氧化矽、藻類與礦物質含量豐富，常見於抵離航班前後的放鬆行程。",
    "現場提供多種入場級別與餐飲（如 Lava、Moss 餐廳）。需事先線上預約時段；旺季建議提早訂位，並依官網規定攜帶泳衣與毛巾。",
  ],
};
