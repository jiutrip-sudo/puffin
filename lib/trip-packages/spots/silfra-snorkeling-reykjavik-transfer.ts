import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const silfraSnorkelingReykjavikTransferSpot: TripAttraction = {
  name: "絲浮拉 Silfra 浮潛體驗（含雷克雅維克接送）",
  nameEn: "Silfra Snorkeling (with Reykjavík transfer)",
  region: "冰島南部",
  subtitle: "板塊裂縫中的乾式浮潛（含首都接送）",
  imageUrl: IMG("silfra_snorkeling_1_483bb2a929.jpg"),
  galleryImages: [
    IMG("silfra_snorkeling_1_483bb2a929.jpg"),
    IMG("silfra_3_1d702a2a92.jpg"),
  ],
  paragraphs: [
    "含雷克雅維克接送的絲浮拉浮潛",
    `絲浮拉（Silfra）裂縫在${PLACE_TW.thingvellir}內，是歐亞與北美板塊分離處。朗格冰川融水經熔岩過濾後極為清澈，能見度常超過 100 公尺。`,
    "活動為乾式浮潛，下水前會接受安全說明；水溫常年約 2–4°C。須會游泳且不懼水，有身高、體重與年齡限制，孕婦不宜參加。接送時間依營運商公告為準。",
  ],
};
