import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const jokulsarlonSpot: TripAttraction = {
  name: PLACE_TW.jokulsarlon,
  nameEn: "Jökulsárlón",
  region: "冰島東部",
  subtitle: "瓦特納冰川出口的浮冰瀉湖",
  imageUrl: IMG("DSC_00389_4_cadb104463.jpg"),
  galleryImages: [
    IMG("DSC_00389_4_cadb104463.jpg"),
    IMG("jokulsarlon_unsplash4_afb37701fc.jpg"),
    IMG("jokulsarlon_unsplash6_8247d88371.jpg"),
    IMG("jokulsarlon_unsplash5_67dfcff32b.jpg"),
    IMG("jokulsarlon_unsplash2_3ff49270dd.jpg"),
  ],
  paragraphs: [
    "冰島最知名的冰川瀉湖",
    `${PLACE_TW.jokulsarlon}（Jökulsárlón）位在瓦特納冰川（Vatnajökull）南緣，Breiðamerkurjökull 冰川舌前端，沿一號公路即可抵達，距雷克雅維克約五小時車程。湖面散布著從冰川斷裂的浮冰，藍白交錯，是東南岸最震撼的自然景觀之一。`,
    "這座瀉湖形成歷史其實不長，約自 1930 年代起因氣候變遷、冰川退縮而擴大。浮冰持續崩落、在湖中緩緩漂移，最終經河道流入大西洋。湖水最深處約 250 公尺，是冰島最深的湖泊之一。",
    "在岸邊散步就能欣賞冰山與遠方冰川，若想更靠近水面，可另行預約船遊：常見有水陸兩棲船或橡皮艇等方案，依季節與天候開放。夏季日照長、交通相對穩定；冬季景色更為冷冽，但請留意路面與船班時刻。",
    `瀉湖出口河道旁的${PLACE_TW.diamondBeach}，可看到被沖上岸的碎冰躺在黑沙上，像散落的「鑽石」；兩處景點通常安排在同一日造訪。無論是否乘船，請勿攀爬浮冰或踏入危險水域，並遵守現場導覽人員指示。`,
  ],
};
