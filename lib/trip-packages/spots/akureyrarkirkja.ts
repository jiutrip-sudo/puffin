import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const akureyrarkirkjaSpot: TripAttraction = {
  name: "阿克雷里大教堂",
  nameEn: "Akureyrarkirkja",
  region: "冰島北部",
  subtitle: "俯瞰阿克雷里市區的路德教堂",
  imageUrl: IMG("Akureyrarkirkja1_cc98890fac.jpg"),
  galleryImages: [
    IMG("Akureyrarkirkja1_cc98890fac.jpg"),
    IMG("Akureyrarkirkja2_c04b67b4d9.jpg"),
    IMG("akureyri_church_0c573033db.jpg"),
  ],
  paragraphs: [
    "北部山城上的教堂地標",
    `阿克雷里大教堂（Akureyrarkirkja）坐落在${PLACE_TW.akureyri}市中心山丘上，1940 年落成，由哈爾格林姆斯教堂同一建築師 Guðjón Samúelsson 設計，風格卻更偏 1920 年代美式折衷，以玄武岩為主材。`,
    "內有 3200 管管風琴、基督生平浮雕，以及北歐傳統的懸掛船模（為海上親人祈福）。彩色玻璃窗來自英國考文垂大教堂的舊窗。開放時間因禮拜或活動調整，請以門口公告為準。",
    "通常與阿克雷里市區、眾神瀑布、米湖排在北部行程；從山下階梯步行約 5 分鐘即可抵達。",
  ],
};
