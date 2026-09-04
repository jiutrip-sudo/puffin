import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const skogafossSpot: TripAttraction = {
  name: PLACE_TW.skogafoss,
  nameEn: "Skógafoss",
  region: "冰島南部",
  subtitle: "走近水幕，等候陽光下的雙彩虹",
  imageUrl: IMG("skogafoss2_67abee5632.jpg"),
  galleryImages: [
    IMG("skogafoss2_67abee5632.jpg"),
    IMG("skogafoss1_7e720b62ca.jpg"),
    IMG("skogafoss3_d680db80b4.jpg"),
  ],
  paragraphs: [
    "南岸最上鏡的寬幅瀑布之一",
    `${PLACE_TW.skogafoss}（Skógafoss）位在冰島南岸，高約 60 公尺、寬約 25 公尺，水源來自埃亞菲亞德拉冰蓋（Eyjafjallajökull）與米達爾斯冰原（Mýrdalsjökull）的融水。瀑布所在的峭壁曾是上一個冰河期冰島海岸線的位置；隨著冰川退卻、陸地抬升，如今瀑布距海岸約 5 公里。`,
    "四季皆壯觀：走近瀑布底部，水花與水霧會撲面而來，雷鳴般的水聲十分震撼。晴朗時水霧常在陽光下形成一道或兩道彩虹。若體力允許，可沿階梯攀登至瀑布頂端平台，俯瞰南岸海岸；這裡也是著名健行路線 Fimmvörðuháls 的南端起點。",
    "當地流傳著維京時代的傳說：名叫 Þrasi 的酋長將一箱財寶沉入河中，後人屢次試圖取回都未成功。有一次有人幾乎抓住箱子的把手，木頭卻當場斷裂，寶箱再度墜入深潭。傳說那把把手曾掛在斯科加教堂門上；今日可在斯科加民俗博物館看到相關展品。",
    `沿一號公路繼續南下，不遠處的${PLACE_TW.seljalandsfoss}以「可走到瀑布背後」聞名，兩座瀑布常安排在同一日行程中，是南岸最經典的瀑布組合。`,
  ],
};
