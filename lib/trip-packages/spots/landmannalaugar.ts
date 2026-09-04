import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const landmannalaugarSpot: TripAttraction = {
  name: "蘭德曼納勞卡",
  nameEn: "Landmannalaugar",
  region: "冰島高地",
  subtitle: "彩色流紋岩山谷與天然地熱溫泉",
  imageUrl: IMG("landmannalaugar_unsplash3_2b2dc0fc79.jpg"),
  galleryImages: [
    IMG("landmannalaugar_unsplash3_2b2dc0fc79.jpg"),
    IMG("fernando_puente_GJYY_5_VZB_3c_unsplash_727770bf3b.jpg"),
    IMG("jon_flobrant_t_Ssb28hz_ZSI_unsplash_c7b16cdc81.jpg"),
  ],
  paragraphs: [
    "健行與高地溫泉的夏季經典",
    "蘭德曼納勞卡（Landmannalaugar）位於冰島南部內陸高地，毗鄰 Laugahraun 熔岩地。名字意為「民眾之池」，以彩色流紋岩山丘、地熱溫泉與多條健行路線聞名，僅夏季道路開放。",
    "短途可走 Brennisteinsalda 火山線或攀登 Bláhnjúkur 藍峰；較長的 Ljótipollur 火山口湖約需四小時。知名的 Laugavegur 健行（約 54 公里、通常四日）終點為索斯莫克（Þórsmörk），國家地理曾列為世界最美健行路線之一。",
    "一日行程後可在山谷天然溫泉放鬆；自駕前往須留意高地路況與環境局停車預約規定。健行請穿防水鞋並備泳衣、浴巾。",
  ],
};
