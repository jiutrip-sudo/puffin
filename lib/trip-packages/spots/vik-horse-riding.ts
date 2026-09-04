import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const vikHorseRidingSpot: TripAttraction = {
  name: "維克 | 冰島馬騎行體驗",
  nameEn: "Vík Horse Riding",
  region: "冰島南部",
  subtitle: "黑沙灘上的冰島馬騎行",
  imageUrl: IMG("vik_black_beach_horse_riding_5c1f7d9db0.png"),
  galleryImages: [
    IMG("vik_black_beach_horse_riding_5c1f7d9db0.png"),
    IMG("black_beach_riding2_a548581f03.jpg"),
  ],
  paragraphs: [
    "南岸最具代表性的騎馬體驗",
    `在${PLACE_TW.vik}鎮出發，沿黑沙灘騎行，遠眺大西洋與雷尼斯岩。冰島馬體型小巧、性情溫和，適合初學者；沿途穿越溪流與熔岩地貌，可體驗獨特的 tölt 步法。`,
    "參加者體重上限約 100 公斤，須能獨立上馬。孕婦及有嚴重腰背、膝蓋問題者不建議參加。請穿長褲與包腳鞋，並依天氣加穿防風外套。",
  ],
};
