import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const auroraPremiumMinibusSpot: TripAttraction = {
  name: "雷克雅維克出發精選極光小巴團",
  nameEn: "Premium Northern Lights Minibus",
  region: "雷克雅維克",
  subtitle: "25 人以內的極光小巴團",
  imageUrl: IMG("5_f4643ac461.jpg"),
  galleryImages: [
    IMG("5_f4643ac461.jpg"),
    IMG("1_2_25ff42627e.jpg"),
  ],
  paragraphs: [
    "人數較精簡的追光行程",
    `從${PLACE_TW.reykjavik}出發，小巴駛離市區光害，嚮導依當日預報選擇觀測點。冬季夜空下等候極光出現，適合攝影與初次追光旅客。`,
    "極光無法保證；若因天候取消或當晚未見極光，改期條款依營運商規定。請提前 30 分鐘抵達接送點並穿足夠保暖衣物。",
  ],
};
