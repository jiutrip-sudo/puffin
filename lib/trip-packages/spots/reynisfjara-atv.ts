import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reynisfjaraAtvSpot: TripAttraction = {
  name: "冰島黑沙灘ATV全地形山地摩托車騎行體驗",
  nameEn: "Black Sand Beach ATV Tour",
  region: "冰島南部",
  subtitle: "米達爾斯冰川營地出發的 ATV 越野",
  imageUrl: IMG("icelandic_ATV_tour_on_black_sand_beach_510f58731a.png"),
  galleryImages: [
    IMG("icelandic_ATV_tour_on_black_sand_beach_510f58731a.png"),
    IMG("ATV_3cf070ca7e.jpg"),
  ],
  paragraphs: [
    "穿越黑熔岩沙地的 ATV 體驗",
    `從米達爾斯冰川（Mýrdalsjökull）營地出發，駕駛 ATV 穿越卡特拉火山熔岩沙地，前往${PLACE_TW.reynisfjara}一帶的南岸地貌。嚮導說明安全須知並提供頭盔與騎行裝備。`,
    "駕駛員須年滿 17 歲並持有效駕照；單數旅客需預訂單人駕駛。請穿保暖防水衣物，並依營運商要求提前抵達集合點。",
  ],
};
