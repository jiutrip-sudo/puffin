import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const lavaFieldHorseRidingSpot: TripAttraction = {
  name: "熔岩地騎馬體驗",
  nameEn: "Lava Field Horse Riding",
  region: "雷克雅維克",
  subtitle: "首都近郊熔岩原野騎行",
  imageUrl: IMG("icelandic_horse_ec951d0e80.png"),
  galleryImages: [
    IMG("icelandic_horse_ec951d0e80.png"),
    IMG("3_H6_A0284_51ed047d81.jpg"),
  ],
  paragraphs: [
    "穿越熔岩地貌的騎馬",
    `從${PLACE_TW.reykjavik}郊區出發，在教練帶領下騎冰島馬穿越熔岩原野與鄉間小徑，體驗獨特的 tölt 步法。冰島馬體型小巧、性情溫和，初學者與有經驗騎手皆可。`,
    "請於活動開始前 30 分鐘抵達；穿長褲與包腳鞋。孕婦及有嚴重腰背問題者不建議參加。",
  ],
};
