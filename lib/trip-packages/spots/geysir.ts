import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const geysirSpot: TripAttraction = {
  name: PLACE_TW.geysir,
  nameEn: "The Great Geysir and Strokkur",
  region: "冰島南部",
  subtitle: "等候史托克間歇泉每隔數分鐘噴發一次",
  imageUrl: IMG("be5ba64f349aa795f653231dac5e44a_fa8600600a.jpg"),
  galleryImages: [
    IMG("be5ba64f349aa795f653231dac5e44a_fa8600600a.jpg"),
    IMG("geysir_unsplash_83e7e7b45e.jpg"),
    IMG("geysir_unsplash2_dd17e22e52.jpg"),
    IMG("geysir_unsplash3_82d9f4f9ea.jpg"),
  ],
  paragraphs: [
    "冰島最知名的間歇泉地熱區",
    `${PLACE_TW.geysir}位在 Haukadalur 山谷，與${PLACE_TW.thingvellir}、${PLACE_TW.gullfoss}同屬${PLACE_TW.goldenCircle}經典路線。園區內最古老的是 Geysir（大間歇泉），歷史可追溯到約一萬年前，1845 年曾記錄到約 170 公尺的噴發高度；如今因地下水位變化，已長期處於沉寂狀態。`,
    "旅客今日主要觀賞的是南側約 50 公尺外的史托克間歇泉（Strokkur）——冰島最活躍、也最可靠的間歇泉之一，通常每 5 至 10 分鐘噴發一次，水柱高度約 30 公尺，水溫超過攝氏 100 度。園區還散布著多個地熱池與蒸氣噴口，空氣中硫磺味明顯，是感受冰島地熱能量的代表性景點。",
    "間歇泉與地熱池的水溫極高，請務必留在指定步道與觀景區內，勿跨越繩索或靠近噴口邊緣，也不要向泉眼投擲物品。噴發前水面會先鼓起、隨後瞬間衝高，建議提前舉起相機，並留意四周其他旅客。",
    "停車場與園區入口設有簡單餐飲與紀念品，夏季車位較緊，跟團或自駕都建議預留 45 分鐘至 1 小時，以便完整看過至少一次噴發。",
  ],
};
