import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const harpaSpot: TripAttraction = {
  name: PLACE_TW.harpa,
  nameEn: "Harpa",
  region: PLACE_TW.reykjavik,
  subtitle: "海港邊的玻璃音樂廳，雷克雅維克的文化地標",
  imageUrl: IMG("Harpa_Exterior_765d2cad4e.jpg"),
  galleryImages: [
    IMG("Harpa_Exterior_765d2cad4e.jpg"),
    IMG("Harpa_Reflection_Sunset_d5679e30b9.jpg"),
    IMG("Harpa_Concert_Hall_and_Ferry_66cf578f72.jpg"),
    IMG("Harpa_and_Statue_ea54cb28e1.jpg"),
  ],
  paragraphs: [
    "玻璃外牆映著海港天色變化",
    `${PLACE_TW.harpa}（Harpa）坐落在雷克雅維克舊港旁，2011 年啟用，由丹麥與冰島建築師合作設計。外牆由幾何玻璃與金屬框架構成，白天折射海面與天空，夜晚點燈後成為海濱最醒目的建築之一。`,
    "音樂廳內有多個演出空間，常年舉辦音樂會、戲劇與展覽；大廳音響設備完善，是冰島國際藝術節等重要活動的場地。即使不進場看演出，也可在大廳公共區域短暫參觀，或在一樓咖啡座休息。",
    "哈帕與太陽航海者雕塑、舊港出海行程相鄰，適合排在抵達或離境日的市區散步路線中。若遇大型活動，周邊交通管制較多，請預留步行時間。",
  ],
};
