import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reynisdrangarSpot: TripAttraction = {
  name: PLACE_TW.reynisdrangar,
  nameEn: "Reynisdrangar",
  region: "冰島南部",
  subtitle: "領略三個玄武岩石從海面拔起的壯觀風景.",
  imageUrl: IMG("Reynisdrangar1_e7a33951c7.jpg"),
  galleryImages: [
    IMG("Reynisdrangar1_e7a33951c7.jpg"),
    IMG("Reynisdrangar3_1cc0b15f0a.jpg"),
    IMG("Reynisdrangar2_1c540bca59.jpg"),
  ],
  paragraphs: [
    "石化的巨怪如今矗立守候著黑沙灘",
    `雷尼斯岩（Reynisdrangar）位於${PLACE_TW.reynisfjara}外的海中央，緊鄰${PLACE_TW.vik}，是冰島南岸最熱門的景點之一。60餘米高的玄武岩柱高聳入雲、長滿尖刺，從洶湧的大西洋海面上突兀而出。從遠處看，這些伸出海面的石柱就像是一個背上長滿尖刺的巨型生物正沉睡在海面。`,
    "雷尼斯岩的奇異造型和它從海面拔起的雄偉氣勢難免讓人遐想連篇。關於雷尼斯岩的神話也比比皆是，其中一個最有名的說法是：曾經有三個巨怪試圖把船從海里拖到陸地上，當他們把最後一艘船拉上岸時，太陽開始升起。當這些巨怪被太陽光照射到時，他們都變成了石頭。還有神話說，一個男人的妻子被巨怪綁架並殺害。傷心欲絕、滿懷復仇之心的丈夫最終在此追上了巨怪，並把巨怪變成了石頭。",
    "但科學來說，在約 1800 萬年前，火山熔岩流經懸崖進入海洋後開始冷卻而形成了玄武岩懸崖。而我們所看到的雷尼斯岩則是在懸崖之後開始形成的。這個過程被稱為“水力侵蝕”，即海浪不斷拍打懸崖，削弱了懸崖的強度，最終導致懸崖崩塌，最後形成了這些巖柱。因此，雷尼斯並不是從海中升起的玄武岩堆，而是雷尼斯懸崖的幾塊“廢墟”。",
    "最後，也是最重要的一點，參觀雷尼斯岩時，切記注意安全！",
  ],
};
