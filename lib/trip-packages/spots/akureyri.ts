import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const akureyriSpot: TripAttraction = {
  name: PLACE_TW.akureyri,
  nameEn: "Akureyri",
  region: "冰島北部",
  subtitle: "北部最大城鎮，鑽石圈與觀鯨的起點",
  imageUrl: IMG("akureyri2_4315b5a769.jpg"),
  galleryImages: [
    IMG("akureyri2_4315b5a769.jpg"),
    IMG("akureyri1_3578767475.jpg"),
    IMG("akureyri3_ee2c50a339.jpg"),
  ],
  paragraphs: [
    "冰島北部的交通與生活重心",
    `${PLACE_TW.akureyri}人口約兩萬，是冰島第二大城市、北部最大的聚落，坐落在埃亞峽灣（Eyjafjörður）畔。許多北部行程以此為住宿與補給基地，再前往${PLACE_TW.myvatn}、${PLACE_TW.godafoss}、胡薩維克（Húsavík）觀鯨或黛提瀑布（Dettifoss）等景點。`,
    "市中心範圍不大，主要景點多可步行抵達：阿克雷里大教堂（Akureyrarkirkja）矗立於山坡，可俯瞰港灣；植物園蒐集了數千種耐寒植物，是世界最北的大型植物園之一。鎮上咖啡館、餐館與泳池選擇多，冬季還可就近前往 Hlíðarfjall 滑雪場。",
    "阿克雷里著名的心形紅綠燈源自 2008 年金融危機後，市政府以愛心造型取代傳統燈號，希望傳遞鼓勵與溫暖；如今已成為城市特色，旅客常在路口留影。",
    "冬季夜長，晴朗時極光出現機率高；夏季則適合安排觀鯨、健行或前往離島赫里斯（Hrísey）、格里姆塞（Grímsey）等。若環島北段行程緊湊，建議至少停留一晚，感受與首都不同的北部節奏。",
  ],
};
