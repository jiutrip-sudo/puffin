import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reynisfjaraSpot: TripAttraction = {
  name: PLACE_TW.reynisfjara,
  nameEn: "Reynisfjara Black Sand Beach",
  region: "冰島南部",
  subtitle: "北大西洋的黑色沙灘，請與海浪保持距離",
  imageUrl: IMG("reynisfjara1_ef5a24c2b7.jpg"),
  galleryImages: [
    IMG("reynisfjara1_ef5a24c2b7.jpg"),
    IMG("reynisfjara2_b3ec97ed1f.jpg"),
    IMG("reynisfjara3_725ed9b454.jpg"),
  ],
  paragraphs: [
    "冰島南岸最具代表性的黑色沙灘",
    `${PLACE_TW.reynisfjara}（Reynisfjara）位在${PLACE_TW.vik}附近，沿一號公路即可抵達，是南岸環線幾乎必停的景點。火山熔岩遇海水急速冷卻、歷經海浪研磨，形成細緻的黑色沙粒；搭配遠方的${PLACE_TW.reynisdrangar}與玄武岩峭壁，景色既壯麗又帶著一點神秘氣息。`,
    `從沙灘望向海面，${PLACE_TW.reynisdrangar}像從大西洋拔起的玄武岩柱，是這裡最上鏡的構圖之一。岸邊還有加達爾玄武岩峭壁（Gardar）與 Hálsanefshellir 海蝕洞，柱狀岩石整齊排列，夏季常可見海鸚與海鳥在崖上棲息。天氣晴朗時，往南還能遠眺迪霍拉里（Dyrhólaey）的海拱。`,
    "黑沙灘最需要注意的是安全。這裡沒有救生員，北大西洋的「瘋狗浪」（sneaker waves）可能在看似平靜時突然襲岸。請務必背對大海拍照、不要站在浪線附近，並留意現場黃燈或紅燈警示——亮起時代表該區域不宜靠近。在安全距離欣賞，景色同樣震撼。",
    "冬季路面可能結冰濕滑，夏季則風勢較強；建議穿防滑鞋、防風防水外套。若與南岸其他景點同日安排，可與塞里雅蘭、斯科加瀑布或維克合併造訪，但請把安全提醒放在行程第一位。",
  ],
};
