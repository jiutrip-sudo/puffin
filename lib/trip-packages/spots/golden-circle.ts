import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const goldenCircleSpot: TripAttraction = {
  name: PLACE_TW.goldenCircle,
  nameEn: "Golden Circle",
  region: "冰島南部",
  subtitle: `辛格維利爾、${PLACE_TW.geysir}與${PLACE_TW.gullfoss}的經典一日線`,
  imageUrl: IMG("golden_circle1_b2e6f91bdb.jpg"),
  galleryImages: [
    IMG("golden_circle1_b2e6f91bdb.jpg"),
    IMG("z3rd_03dd6ce7bf.jpg"),
    IMG("geysir_unsplash3_82d9f4f9ea.jpg"),
    IMG("jan_brennenstuhl_i_Jyw_d_Mcs_VE_unsplash_950b4250f1.jpg"),
  ],
  paragraphs: [
    "冰島最熱門的短途環線",
    `${PLACE_TW.goldenCircle}從${PLACE_TW.reykjavik}出發，車程約 250 公里，串起三大景點：${PLACE_TW.thingvellir}、${PLACE_TW.geysir}與${PLACE_TW.gullfoss}。這條路線也是冰島最早成形的觀光動線之一，兼具自然景觀與歷史意義。`,
    `${PLACE_TW.thingvellir}為世界遺產，十世紀起便是冰島議會 Alþingi 的集會地。公園座落於北美與歐亞板塊分離的裂谷上，可沿 Almannagjá 峽谷步道行走；峽谷中的絲浮拉（Silfra）裂縫以極高透明度聞名，是浮潛熱門地點。`,
    `Haukadalur 山谷的${PLACE_TW.geysir}以史托克（Strokkur）間歇泉最為人知，約每 5–10 分鐘噴出沸水柱與蒸氣。大蓋錫爾（Geysir）本身已長期休眠。`,
    `路線最遠端的${PLACE_TW.gullfoss}分上下兩段跌入深谷，晴天時水流帶金褐色光澤，「黃金」之名由此而來；水霧中亦常見彩虹。無論天候，兩層瀑布的氣勢都相當震撼。`,
  ],
};
