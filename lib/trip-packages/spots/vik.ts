import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const vikSpot: TripAttraction = {
  name: PLACE_TW.vik,
  nameEn: "Vík í Mýrdal",
  region: "冰島南部",
  subtitle: "南岸中段的補給與住宿重鎮",
  imageUrl: IMG("vik1_39585849fc.jpg"),
  galleryImages: [
    IMG("vik1_39585849fc.jpg"),
    IMG("vik2_5c8ab4b497.jpg"),
    IMG("vik3_a117bb10f1.jpg"),
  ],
  paragraphs: [
    "卡特拉火山腳下的南岸小鎮",
    `${PLACE_TW.vik}（Vík í Mýrdal）位在冰島南岸 1 號公路中段，卡特拉（Katla）火山以南，常住人口約三百人，卻是方圓五十公里內唯一的集中聚落。往東往西都要經過這裡，超市、加油站、餐廳與旅館一應俱全，是南岸自駕常選的過夜點。`,
    "小鎮本身也值得停留：紅頂的維克教堂建於 1934 年，因地勢較高，傳統上也是火山警報時的避難集合點。鎮上另有熔岩秀（Lava Show），以真實熔岩演示火山噴發過程。前往黑沙灘、迪霍拉里、雷尼斯岩等景點，車程都在半小時內。",
    "周邊米達爾斯冰原（Mýrdalsjökull）與索爾黑馬地區活動密集——冰川健行、冰洞、雪地摩托、ATV 等戶外行程多從此出發；若偏好安靜，郊區也有海岸步道與高爾夫球場可安排半日散步。",
  ],
};
