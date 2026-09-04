import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const akureyriBotanicalGardenSpot: TripAttraction = {
  name: "阿克雷里植物園",
  nameEn: "Akureyri Botanical Garden",
  region: "冰島北部",
  subtitle: "北極圈附近的溫帶植物園",
  imageUrl: IMG("Akureyri_Botanical_Garden1_a3aab84a71.jpg"),
  galleryImages: [
    IMG("Akureyri_Botanical_Garden1_a3aab84a71.jpg"),
    IMG("Akureyri_Botanical_Garden2_75fb797df6.jpg"),
    IMG("Akureyri_Botanical_Garden3_67f0afc285.jpg"),
  ],
  paragraphs: [
    "埃亞峽灣畔的綠色避風港",
    `${PLACE_TW.akureyri}植物園距北極圈約 50 公里，是世上最北端的植物園之一。1912 年始建為公共花園，1957 年改為植物園，現占地約 3.7 公頃，蒐藏逾六千種植物，含冰島本土與溫帶、高山、北極物種。`,
    "峽灣山脈為園區擋風，形成有利小氣候，使喬木與多年生花卉在嚴苛北部環境中仍能生長。全年免費開放（約 9:00–22:00），冬季部分設施可能關閉。",
    "適合與阿克雷里大教堂、市區散步排在同一日上午或下午；夏季花卉最盛。",
  ],
};
