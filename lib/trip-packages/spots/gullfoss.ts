import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const gullfossSpot: TripAttraction = {
  name: PLACE_TW.gullfoss,
  nameEn: "Gullfoss",
  region: "冰島南部",
  subtitle: "一起探索通往冰島最大瀑布之一的道路",
  imageUrl: IMG("gullfoss1_9c5319c04c.jpg"),
  galleryImages: [
    IMG("gullfoss1_9c5319c04c.jpg"),
    IMG("gullfoss2_4aa3699337.jpg"),
    IMG("gullfoss3_62d8e5e998.jpg"),
  ],
  paragraphs: [
    "在陽光下流動的黃金",
    `黃金瀑布（Gullfoss）位於Haukadalur山谷的Hvítá河上，是冰島最受歡迎的旅遊景點之一，也和${PLACE_TW.thingvellir}、${PLACE_TW.geysir}組成了著名的${PLACE_TW.goldenCircle}線路。許多人認為這裡是冰島最美的瀑布，沒錯，即使冰島有數以千計的瀑布，但也許沒有一條像黃金瀑布一樣聞名於世。`,
    "黃金瀑布的得名，是因為在陽光明媚的日子裡，瀑布的水會呈現出美妙夢幻的金褐色。從科學的角度解釋，是因為瀑布水是冰川水，攜帶著多年來大量冰川冰從陸地上鑿下的沉積物。",
    "黃金瀑布由兩段瀑布組合而成，一段高11米，另一段高21米，流入下方長達2.5公里寬約20米的裂縫中。在冰河時代末期，巨大的洪水造成了這條裂縫，而不斷的水流侵蝕使它每年延長25釐米。這裡平均水流速度為每秒109立方米，冬季平均流速為每秒80立方米，夏季的水流速度會提高至每秒130立方米。",
    "在冬季，黃金瀑布是最受風光攝影師們歡迎的地方之一，因為這裡是拍攝北極光的絕佳地點。不過，瀑布周圍狹窄的小路上可能會結冰，因此如果您在冬季遊覽黃金瀑布，我們強烈建議您不要離開主路。",
  ],
};
