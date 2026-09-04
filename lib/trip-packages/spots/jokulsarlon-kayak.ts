import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const jokulsarlonKayakSpot: TripAttraction = {
  name: "傑古沙龍冰河湖獨木舟體驗",
  nameEn: "Jökulsárlón Kayaking",
  region: "冰島東部",
  subtitle: "平台舟近距離穿梭浮冰",
  imageUrl: IMG("kayaking1_89345632eb.jpg"),
  galleryImages: [
    IMG("kayaking1_89345632eb.jpg"),
    IMG("kayaking_9412ffa392.jpg"),
  ],
  paragraphs: [
    "以更慢節奏探索冰河湖",
    `在${PLACE_TW.jokulsarlon}以平台舟（sit-on-top）划行，可更貼近浮冰與冰川前緣，偶有海豹與海鳥。嚮導提供防寒裝備並說明技巧，新手在指導下亦可參加。`,
    "參加者須年滿 14 歲，體重上限約 120 公斤。請提前 30 分鐘抵達集合點；活動受天候影響，惡劣天氣可能改期或取消。",
  ],
};
