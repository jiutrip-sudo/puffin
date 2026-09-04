import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const laugavegurSpot: TripAttraction = {
  name: "洛加維格大街",
  nameEn: "Laugavegur Street",
  region: PLACE_TW.reykjavik,
  subtitle: "雷克雅維克最熱鬧的購物與餐飲大街",
  imageUrl: IMG("Colorful_street_view_of_Laugavegur_c7f18f046f.jpg"),
  galleryImages: [
    IMG("Colorful_street_view_of_Laugavegur_c7f18f046f.jpg"),
    IMG("Shops_on_Laugavegur_6b7902c6fc.jpg"),
    IMG("Sunrise_in_Laugavegur_0255fdfdd7.jpg"),
    IMG("vivid_graffiti_on_Laugavegur_1418332f75.jpg"),
  ],
  paragraphs: [
    "幾個街區逛遍設計、美食與紀念品",
    "洛加維格大街（Laugavegur）是雷克雅維克歷史最悠久的主街之一，從西端延伸向東，兩旁聚集服飾、設計選物、書店與咖啡館。色彩鮮明的立面與街頭塗鴉，讓這條路兼具生活感與觀光熱度。",
    "白天適合逛街與挑選冰島羊毛、設計小物；傍晚起餐館與酒吧漸熱鬧，週末尤其繁忙。大街與周邊支路（如彩虹街）步行可達哈爾格林姆斯教堂與港區，是自由活動日最常安排的市區路線。",
    "冰島物價偏高，建議先比較再入手；部分小店只收卡，可備少量現金。冬季路面可能結冰，請穿防滑鞋。",
  ],
};
