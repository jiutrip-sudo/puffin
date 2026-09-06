import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const dalvikSpot: TripAttraction = {
  name: "達爾維克",
  nameEn: "Dalvík",
  region: "冰島北部",
  subtitle: "埃亞峽灣的滑雪與賞鯨小港",
  imageUrl: IMG("Dalvik1_a8b4f5d641.jpg"),
  galleryImages: [
    IMG("Dalvik1_a8b4f5d641.jpg"),
    IMG("Dalvik3_48020d168c.jpg"),
    IMG("Dalvik2_634a2418d7.jpg"),
    IMG("Dalvik_d6a76bc66f.jpg"),
  ],
  paragraphs: [
    "阿克雷里以北的漁港山城",
    `達爾維克（Dalvík）在${PLACE_TW.akureyri}以北約 43 公里，坐落在埃亞峽灣（Eyjafjörður）中，人口約一千五百人，以漁業為主。港口可搭渡輪前往赫里斯島（Hrísey）與格里姆賽島（Grímsey）。`,
    "每年八月第二個週六舉辦大魚節（Fiskidagurinn mikli），港口免費供應海鮮，是當地最熱鬧的節日之一。",
    "冬季滑雪是達爾維克招牌：滑雪場設備完善，曾培育多位代表冰島出賽的選手，亦有直升機滑雪行程。夏季則以賞鯨聞名，常見座頭鯨、白喙海豚與小鬚鯨，成功率相當高。",
  ],
};
