import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const blueLagoonComfortTransferSpot: TripAttraction = {
  name: "藍湖溫泉舒適體驗套票（含雷克雅維克往返接送）",
  nameEn: "Blue Lagoon Comfort with Transfer",
  region: "雷克雅內斯半島",
  subtitle: "含首都巴士接送的藍湖舒適套票",
  imageUrl: IMG("blue_lagoon_re6_776ecba9d9.png"),
  galleryImages: [
    IMG("blue_lagoon_re6_776ecba9d9.png"),
    IMG("blue_lagoon_re2_3ca7423c18.png"),
  ],
  paragraphs: [
    "含往返接送的藍湖套票",
    `藍湖（Blue Lagoon）在${PLACE_TW.reykjanes}熔岩區，乳藍色地熱水約 37–39°C。舒適套票通常含入場、毛巾、矽泥面膜與一杯飲品；本行程另含${PLACE_TW.reykjavik}市區（如 BSÍ 巴士站）往返巴士，無需自行開車。`,
    "建議事先預約時段，全程約 4 小時含往返。請攜帶泳衣；抵離航班前後泡湯是常見安排。",
  ],
};
