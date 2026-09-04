import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const grjotagjaSpot: TripAttraction = {
  name: "Grjótagjá洞穴",
  nameEn: "Grjótagjá",
  region: "冰島北部",
  subtitle: "米湖旁的熔岩洞溫泉（《權力遊戲》取景地）",
  imageUrl: IMG("grjotagja2_2363306704.jpg"),
  galleryImages: [
    IMG("grjotagja2_2363306704.jpg"),
    IMG("grjotagja1_f0528e853e.jpg"),
  ],
  paragraphs: [
    "曾可泡湯的隱蔽洞穴",
    `Grjótagjá 位在${PLACE_TW.myvatn}與米湖地熱區之間，過去是本地人秘密泡湯處；1975–1984 年火山活動使水溫飆升後，現已禁止入水，僅供參觀。洞穴入口不大，霧天不易發現，請沿步道尋找標示。`,
    "《權力遊戲》中瓊恩與耶哥蕊特的場景以此為靈感，但實際拍攝在攝影棚完成。劇集走紅後遊客大增，目前仍可進入洞穴觀看碧綠池水，但請勿下水、勿留垃圾——洞穴為私人土地。",
    "通常與米湖、黑暗城堡熔岩群排在同一日；地面濕滑，請小心腳步。",
  ],
};
