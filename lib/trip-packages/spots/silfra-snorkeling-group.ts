import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const silfraSnorkelingGroupSpot: TripAttraction = {
  name: "絲浮拉裂谷（Silfra）浮潛體驗（含首都接送）",
  nameEn: "Silfra Snorkeling (with Reykjavík transfer)",
  region: "冰島南部",
  subtitle: "在歐亞與北美板塊之間的清澈裂縫浮潛",
  imageUrl: IMG("Silfra_snorkeling5_e325829527.jpg"),
  galleryImages: [
    IMG("Silfra_snorkeling5_e325829527.jpg"),
    IMG("Silfra_snorkeling_eca221b839.jpg"),
    IMG("Silfra_snorkeling2_007c4cf6c5.jpg"),
    IMG("Silfra_snorkeling6_d76840e31c.jpg"),
  ],
  paragraphs: [
    "板塊裂縫中的世界級能見度",
    `絲浮拉（Silfra）裂縫在${PLACE_TW.thingvellir}內，是歐亞與北美板塊分離處少數可親身進入的水域。朗格冰川融水經熔岩過濾後極為清澈，能見度常超過 100 公尺，呈藍綠色。`,
    "活動為乾式浮潛，下水前會接受安全與技巧說明；水溫常年約 2–4°C，需穿乾衣與保暖內層。全程在嚮導帶領下進行，無需潛水證照，但須會游泳且不懼水。",
    "有身高、體重與年齡限制，孕婦不宜參加；須能以英語理解安全指示。最少成團人數與接送時間依營運商公告為準，建議出發前確認信箱通知。",
  ],
};
