import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const landmannalaugarDayTourSpot: TripAttraction = {
  name: "蘭德曼納勞卡高地Landmannalaugar一日遊",
  nameEn: "Landmannalaugar Day Tour",
  region: "冰島高地",
  subtitle: "超級吉普探索五彩山谷",
  imageUrl: IMG("Landmannalaugar_b44d770d8d.png"),
  galleryImages: [
    IMG("Landmannalaugar_b44d770d8d.png"),
    IMG("Landmannalaugar_1_e271c2b668.jpg"),
  ],
  paragraphs: [
    "夏季高地最經典的一日遊",
    "蘭德曼納勞卡（Landmannalaugar）以彩色熔岩山與地熱溫泉聞名，僅夏季道路開放。乘坐超級吉普穿越崎嶇高地，可泡天然溫泉、遠眺 Ljótipollur 湖與 Brennisteinsalda 等奇岩。",
    `通常從${PLACE_TW.reykjavik}飯店或巴士站接送出發。高地天候變化快，請穿防風防水衣物與健行鞋；行程可能因路況或天氣調整。`,
  ],
};
