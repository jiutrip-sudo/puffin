import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const geysirSpot: TripAttraction = {
  name: PLACE_TW.geysir,
  nameEn: "The Great Geysir and Strokkur",
  region: "冰島南部",
  subtitle: "感受來自地表之下的自然力量",
  imageUrl: IMG("be5ba64f349aa795f653231dac5e44a_fa8600600a.jpg"),
  galleryImages: [
    IMG("be5ba64f349aa795f653231dac5e44a_fa8600600a.jpg"),
    IMG("geysir_unsplash_83e7e7b45e.jpg"),
    IMG("geysir_unsplash2_dd17e22e52.jpg"),
    IMG("geysir_unsplash3_82d9f4f9ea.jpg"),
  ],
  paragraphs: [
    "見證間歇泉噴發時刻",
    `Geysir間歇泉被人們稱為大間歇泉（The Great Geysir），坐落於冰島西南岸的Haukadalur山谷中，與${PLACE_TW.thingvellir}和${PLACE_TW.gullfoss}共同組成了聞名遐邇的冰島${PLACE_TW.goldenCircle}線路。`,
    "研究表明，蓋錫爾間歇泉已經存在了約1萬年，它最高的一次噴發是在1845年，噴發高度約為170米。但由於地殼運動和人類行為，它目前處於沉寂狀態。上世紀，冰島人曾嘗試多種方法使其噴發，例如在噴口周圍開鑿通道以降低地下水位，或是向噴泉口丟入肥皂，但這些行為後來引發了關於環境保護的爭議，因此在上世紀90年代被叫停。",
    "不過旅客倒不必擔心無法看到間歇泉噴發，Geysir間歇泉向南50米的史托克間歇泉（Strokkur）是目前最為活躍的間歇泉，也是吸引旅客數量最多的間歇泉。 它每5-10分鐘噴發一次，高達約30米左右，噴發出的水柱溫度超過100攝氏度。",
    "需要注意的是，由於間歇泉的水溫極高，可能導致嚴重的人員傷亡，其周圍設有指定區域，出於安全考慮，一定要呆在這些區域內，確保與間歇泉保持一定的距離，也不要向間歇泉、地熱池和火山噴氣口扔東西。",
  ],
};
