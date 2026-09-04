import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const sunVoyagerSpot: TripAttraction = {
  name: "太陽航海者",
  nameEn: "Sun Voyager",
  region: PLACE_TW.reykjavik,
  subtitle: "海濱步道上的不鏽鋼船型雕塑",
  imageUrl: IMG("reykjavik2_b97db08584.jpg"),
  galleryImages: [
    IMG("reykjavik2_b97db08584.jpg"),
    IMG("Solfarid_9c24228023.jpg"),
    IMG("Sun_Voyager_a18897c683.jpg"),
  ],
  paragraphs: [
    "面向大海的「夢想之船」",
    "太陽航海者（Sun Voyager，冰島語 Sólfar）位在 Sæbraut 海濱步道，由藝術家 Jón Gunnar Árnason 設計，1990 年落成。流線型不鏽鋼船身常被聯想為維京船，但作者本意是象徵希望與自由的一艘夢想之船，而非歷史復刻。",
    "雕塑背向城市、面向 Faxaflói 海灣與远山，日出日落時光影變化明顯，是雷克雅維克最常見的明信片角度之一。步道寬敞，可短暫停留拍照；冬季風大，請抓牢相機並注意保暖。",
    "與哈帕音樂廳、舊港相距不遠，可與市區半日散步一併安排；附近停車位有限，旺季建議步行或短程接駁。",
  ],
};
