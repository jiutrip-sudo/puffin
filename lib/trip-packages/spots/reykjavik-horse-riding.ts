import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reykjavikHorseRidingSpot: TripAttraction = {
  name: "雷克雅維克市郊冰島馬騎行體驗",
  nameEn: "Icelandic Horse Riding",
  region: "雷克雅維克",
  subtitle: "首都近郊與冰島馬一起騎行",
  imageUrl: IMG("3_1f93eb8d0c.jpg"),
  galleryImages: [
    IMG("3_1f93eb8d0c.jpg"),
    IMG("4_34f06a7e05.jpg"),
    IMG("3_2ee0efdc1a.jpg"),
    IMG("2_8dbc11160f.jpg"),
  ],
  paragraphs: [
    "與冰島馬的郊野騎行",
    `冰島馬體型小巧、性情溫和，以獨特的 tölt 步法聞名。行程多在${PLACE_TW.reykjavik}郊外的熔岩原野與鄉間小徑，教練帶領初學者與有經驗騎手皆可參加。`,
    "請於活動開始前 30 分鐘抵達集合點；騎行時勿背大件背包，可寄放於馬廄置物櫃。建議穿長褲與包腳鞋，並依天氣加穿防風防水外套。",
  ],
};
