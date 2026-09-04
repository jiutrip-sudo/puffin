import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const silfraSnorkelingSelfDriveSpot: TripAttraction = {
  name: "絲浮拉大裂谷Silfra浮潛體驗（自駕集合）",
  nameEn: "Silfra Snorkeling (self-drive meetup)",
  region: "冰島南部",
  subtitle: "自行前往辛格維利爾的板塊裂縫浮潛",
  imageUrl: IMG("silfra_snorkeling_6_192e431aaf.jpg"),
  galleryImages: [
    IMG("silfra_snorkeling_6_192e431aaf.jpg"),
    IMG("Silfra_snorkeling5_e325829527.jpg"),
    IMG("Silfra_snorkeling_eca221b839.jpg"),
  ],
  paragraphs: [
    "自駕旅客的絲浮拉乾衣浮潛",
    `集合點通常在${PLACE_TW.thingvellir} Silfra 停車場（Thingvellir P5）。絲浮拉位於板塊交界，冰川融水過濾後能見度極高，是冰島最知名的浮潛地點之一。`,
    "請提前 20–30 分鐘抵達辦理裝備；建議穿貼身保暖衣物與長袜，並備一套乾衣更換。活動為乾式浮潛，下水前有安全講解。",
    "須會游泳、符合身高體重與年齡規定，並能以英語理解指示。最少成團人數與取消政策依營運商為準。",
  ],
};
