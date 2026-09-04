import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const myvatnGeothermalSpot: TripAttraction = {
  name: "米湖地熱區",
  nameEn: "Mývatn Geothermal Area",
  region: "冰島北部",
  subtitle: "米湖旁的沸騰泥池與繽紛地表",
  imageUrl: IMG("Myvatn_Geothermal_Area1_4b4bcb4149.jpg"),
  galleryImages: [
    IMG("Myvatn_Geothermal_Area1_4b4bcb4149.jpg"),
    IMG("Myvatn_Geothermal_Area3_bd3aa3dbed.jpg"),
    IMG("Myvatn_Geothermal_Area2_5844278012.jpg"),
  ],
  paragraphs: [
    "克拉弗拉火山系統下的地熱奇觀",
    `${PLACE_TW.myvatn}地熱區位在北部克拉弗拉（Krafla）火山系統內，沸騰泥漿、硫磺氣孔與礦物染色的地表交織，遠看像另一個星球。最著名的 Hverir 區域以紅黃綠色調與濃烈硫磺味著稱，請留在步道內，勿靠近滾燙泥池。`,
    "米湖（Mývatn，冰島語意為「飛蠓湖」）夏季蚊蠓較多，建議備防蚊液。湖畔與周邊濕地是觀鳥勝地，可見多種水鳥與候鳥。",
    "北部的 Mývatn Nature Baths 常被稱為「北境藍湖」，可與地熱區、眾神瀑布等北部行程合併安排；冬季部分道路可能結冰，請查詢路況。",
  ],
};
