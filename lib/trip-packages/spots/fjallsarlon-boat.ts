import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const fjallsarlonBoatSpot: TripAttraction = {
  name: "Fjallsárlón小冰河湖夏季經典船遊",
  nameEn: "Fjallsárlón Classic Boat Tour",
  region: "冰島東部",
  subtitle: "小冰河湖快艇近距離觀冰",
  imageUrl: IMG("Fjallsarlon_Boat_Tour_Classic_2b091d79e1.png"),
  galleryImages: [
    IMG("Fjallsarlon_Boat_Tour_Classic_2b091d79e1.png"),
    IMG("5_Fjallsarlon_Iceberg_Boat_Tours_glacier_lagoon_7_8e2b806b60.jpg"),
  ],
  paragraphs: [
    "人潮較少的姊妹冰河湖船遊",
    `Fjallsárlón（小冰河湖）在${PLACE_TW.jokulsarlon}以西，浮冰帶藍色與火山灰紋路，氛圍比傑古沙龍更安靜。夏季快艇穿梭冰山之間，嚮導解說冰川地質，偶有機會近距離觸摸浮冰。`,
    "僅夏季開放，建議事先預約。請穿保暖防水衣物，並留意當日天候與船班公告。",
  ],
};
