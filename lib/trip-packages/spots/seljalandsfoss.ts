import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const seljalandsfossSpot: TripAttraction = {
  name: PLACE_TW.seljalandsfoss,
  nameEn: "Seljalandsfoss",
  region: "冰島南部",
  subtitle: "繞到瀑布背後，從水幕另一側看南岸風景",
  imageUrl: IMG("seljalandsfoss1_b6412d5d4e.jpg"),
  galleryImages: [
    IMG("seljalandsfoss1_b6412d5d4e.jpg"),
    IMG("seljalandsfoss2_6d4717fdda.jpg"),
    IMG("seljalandsfoss3_531d93910f.jpg"),
  ],
  paragraphs: [
    "可以走到瀑布背後的南岸名景",
    `${PLACE_TW.seljalandsfoss}（Seljalandsfoss）位在冰島南岸一號公路旁，落差約 60 公尺，是南岸自駕或跟團最常造訪的瀑布之一。冰島瀑布眾多，它的特色在於瀑布後方有一條可供通行的步道；晴天傍晚繞到水幕後方，常能看見夕照穿過水霧，把南岸海岸染成金色。`,
    "瀑布水源來自塞里雅蘭河（Seljalandsá），上游連接埃亞菲亞德拉冰蓋（Eyjafjallajökull）的冰川融水。河水沿峭壁奔流而下，形成這道狹長水幕。古時瀑布曾直接匯入大西洋；隨著海平面變化，如今瀑布與海岸之間已是一片低地，登上步道高處仍可遠眺大西洋與南岸綿延的海岸線。",
    "這裡也是冰島最具代表性的攝影景點之一，正面、側面與瀑布背後的視角各有風味，幾乎全年都有旅客造訪。若行程允許，建議預留足夠時間，依光線嘗試不同角度。",
    "無論夏季或冬季，瀑布背後的步道都相當濕滑，水霧會持續飄落，建議穿防水外套與防滑鞋。冬季若積冰或風勢過強，步道可能暫時封閉；若當日仍可通行，請放慢步速，並留意上方可能掉落的冰柱。",
    "瀑布旁幾百公尺處還有秘密瀑布（Gljúfrabúi）：需涉過淺溪、進入狹窄峽谷才能看見，落差約 40 公尺，是近年愈受旅客喜愛的私房景點。兩座瀑布可安排在同一個停靠點一次造訪。",
  ],
};
