import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const dimmuborgirSpot: TripAttraction = {
  name: "黑暗城堡熔岩群",
  nameEn: "Dimmuborgir",
  region: "冰島北部",
  subtitle: "米湖東側的熔岩柱迷宮",
  imageUrl: IMG("Dimmuborgir1_fb065fc970.jpg"),
  galleryImages: [
    IMG("Dimmuborgir1_fb065fc970.jpg"),
    IMG("Dimmuborgir2_66eb5381ee.jpg"),
  ],
  paragraphs: [
    "熔岩凝固成的黑色城堡",
    `黑暗城堡（Dimmuborgir）在${PLACE_TW.myvatn}東側，約 2300 年前火山噴發時，滾燙熔岩流過沼澤，地下水蒸氣將岩漿塑成洞穴、石柱與峭壁，宛如一座黑色城堡。`,
    "冰島民間傳說稱岩石是日曬後石化的巨怪；此地亦與冰島 13 個聖誕精靈（Yule Lads）的故事有關。園內有多條標示步道，地形複雜易迷路，請依路線指示行走。",
    "通常與米湖、Grjótagjá 洞穴、眾神瀑布排在同一日北部行程；夏季蚊蠓較多，建議備防蚊液。",
  ],
};
