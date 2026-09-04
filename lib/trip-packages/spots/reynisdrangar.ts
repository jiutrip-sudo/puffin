import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reynisdrangarSpot: TripAttraction = {
  name: PLACE_TW.reynisdrangar,
  nameEn: "Reynisdrangar",
  region: "冰島南部",
  subtitle: "黑沙灘外的玄武岩海柱",
  imageUrl: IMG("Reynisdrangar1_e7a33951c7.jpg"),
  galleryImages: [
    IMG("Reynisdrangar1_e7a33951c7.jpg"),
    IMG("Reynisdrangar3_1cc0b15f0a.jpg"),
    IMG("Reynisdrangar2_1c540bca59.jpg"),
  ],
  paragraphs: [
    "從黑沙灘望向海上的三根巨柱",
    `${PLACE_TW.reynisdrangar}（Reynisdrangar）矗立在${PLACE_TW.reynisfjara}外的海面上，距${PLACE_TW.vik}不遠，是南岸最具辨識度的海岸景觀之一。最高的石柱約 66 公尺，玄武岩表面嶙峋陡峭，在陰天或暮色中尤其有戲劇感。`,
    "冰島民間傳說認為，這些海柱是巨怪在日出前來不及躲回陸地、被陽光石化後留下的形體；另一則故事則與復仇與詛咒有關。無論你偏好神話或地質，這組海柱都為黑沙灘增添了難忘的視覺焦點。",
    "從地質角度看，約一千八百萬年前火山熔岩流入海中冷卻，形成玄武岩峭壁；長年海浪侵蝕使崖壁崩塌，殘留的岩柱便成為今日所見的景觀。它們並非從海底「長出」，而是海岸線演變後留下的岩體。",
    "欣賞雷尼斯岩通常與黑沙灘同一停靠點完成。請與海浪保持距離，勿為了取景而靠近危險區域；現場若有警示燈號或封閉標示，請務必遵守。",
  ],
};
