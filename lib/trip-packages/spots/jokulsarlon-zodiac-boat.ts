import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const jokulsarlonZodiacBoatSpot: TripAttraction = {
  name: "傑古沙龍冰河湖快艇（Zodiac Boat）船遊體驗",
  nameEn: "Jökulsárlón Zodiac Boat Tour",
  region: "冰島東部",
  subtitle: "快艇深入冰山之間",
  imageUrl: IMG("jokulsarlon_zodiac_boat_tour_potrait_8ef997e874.png"),
  galleryImages: [
    IMG("jokulsarlon_zodiac_boat_tour_potrait_8ef997e874.png"),
    IMG("jokulsarlon_zodiac_boat_tour_4e3fd00550.webp"),
  ],
  paragraphs: [
    "比兩棲船更接近浮冰",
    `搭乘 Zodiac 快艇穿越${PLACE_TW.jokulsarlon}，可更靠近千年浮冰，嚮導解說冰河湖形成與冰川生態。現場提供連體防寒服與救生衣。`,
    "請提前 30 分鐘至售票處報到。兒童須達身高要求（通常 130 公分以上）；建議內穿保暖層並配戴帽子、手套。",
  ],
};
