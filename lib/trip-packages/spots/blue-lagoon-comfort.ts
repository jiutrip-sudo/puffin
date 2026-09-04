import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const blueLagoonComfortSpot: TripAttraction = {
  name: "藍湖溫泉（Blue Lagoon）舒適體驗",
  nameEn: "Blue Lagoon Comfort",
  region: "雷克雅內斯半島",
  subtitle: "含矽泥面膜與飲品的藍湖入場套票",
  imageUrl: IMG("2_2_3fe1e87828.jpg"),
  galleryImages: [
    IMG("2_2_3fe1e87828.jpg"),
    IMG("BLUE_LAGOON_2f31e94cb2.jpg"),
  ],
  paragraphs: [
    "藍湖舒適級入場體驗",
    `藍湖（Blue Lagoon）在${PLACE_TW.reykjanes}熔岩區，乳藍色地熱水約 37–39°C，富含矽藻與礦物質。舒適套票（Comfort）通常含入場、毛巾、矽泥面膜與一杯飲品；泳衣需自備或現場租借。`,
    "建議事先線上預約時段，旺季尤其熱門。抵離航班前後泡湯是常見安排，請預留更衣與往返時間。",
  ],
};
