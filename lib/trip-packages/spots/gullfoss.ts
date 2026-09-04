import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const gullfossSpot: TripAttraction = {
  name: PLACE_TW.gullfoss,
  nameEn: "Gullfoss",
  region: "冰島南部",
  subtitle: "兩段式瀑布跌入深邃裂谷的黃金圈終點",
  imageUrl: IMG("gullfoss1_9c5319c04c.jpg"),
  galleryImages: [
    IMG("gullfoss1_9c5319c04c.jpg"),
    IMG("gullfoss2_4aa3699337.jpg"),
    IMG("gullfoss3_62d8e5e998.jpg"),
  ],
  paragraphs: [
    "冰島最上鏡的瀑布之一",
    `${PLACE_TW.gullfoss}（Gullfoss）位在 Hvítá 河上，屬 Haukadalur 山谷一帶，與${PLACE_TW.thingvellir}、${PLACE_TW.geysir}共同構成${PLACE_TW.goldenCircle}。瀑布分上下兩段：上段約 11 公尺、下段約 21 公尺，最終跌入長約 2.5 公里、深達數十公尺的裂谷，水霧在陽光下常映出彩虹。`,
    "「黃金」之名來自晴天時水流帶出的金褐色光澤——冰川融水夾帶細碎沉積物，在日光折射下呈現溫暖色調。夏季水量充沛，平均每秒可達百立方公尺以上；冬季流量略降，但結冰邊緣與蒸騰水霧同樣壯觀。",
    "觀景步道沿裂谷邊緣設置多個平台，可從不同高度俯瞰瀑布。早期曾有開發水力發電的計畫，因民間力促保留而中止；今日所見的自然景觀，得益於當時的保護行動。",
    "冬季平台與步道可能結冰濕滑，請穿防滑鞋並留在主路範圍內。夜間或冬季若搭配極光拍攝，需注意保暖與安全，勿為取景靠近無護欄的崖邊。",
  ],
};
