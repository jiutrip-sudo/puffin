import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const stykkisholmurSpot: TripAttraction = {
  name: "斯蒂基斯霍爾米",
  nameEn: "Stykkishólmur",
  region: "斯奈山半島",
  subtitle: "《白日夢想家》取景的半島港口城",
  imageUrl: IMG("stykkisholmur1_c880ec95f2.jpg"),
  galleryImages: [
    IMG("stykkisholmur1_c880ec95f2.jpg"),
    IMG("stykkisholmur2_708e5bb897.jpg"),
    IMG("3_H6_A9833_07a93016f2.jpg"),
  ],
  paragraphs: [
    "布雷扎峽灣畔的半島中心",
    "斯蒂基斯霍爾米（Stykkishólmur）是斯奈山半島最大港口城，位在布雷扎峽灣（Breiðafjörður）畔，1550 年起為貿易站，現以貝類漁業與觀光為主。《白日夢想家》中「格陵蘭」場景在此取景。",
    "老城挪威之家（Norska húsið，1832）是冰島最古老雙層木造建築，現為民俗博物館。鎮上另有水博物館、鴨絨博物館與發酵鯊魚博物館等特色展館。",
    `距${PLACE_TW.kirkjufell}約 30 分鐘，前往海豹沙灘、布迪爾黑教堂、阿爾納斯塔皮皆方便，是探索斯奈山半島的常選住宿基地。夏季可搭船遊覽布雷扎峽灣島嶼。`,
  ],
};
