import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const hofnSpot: TripAttraction = {
  name: PLACE_TW.hofn,
  nameEn: "Höfn",
  region: "冰島東部",
  subtitle: "東南岸的漁港與龍蝦小鎮",
  imageUrl: IMG("hofn3_3b1e58b24e.jpg"),
  galleryImages: [
    IMG("hofn3_3b1e58b24e.jpg"),
    IMG("hofn2_db5c2826b6.jpg"),
    IMG("hofn1_50d523e0a3.jpg"),
  ],
  paragraphs: [
    "瓦特納冰川腳下的港口城",
    `${PLACE_TW.hofn}（Höfn，冰島語意為「港口」）位在東南岸 Hornafjörður 灣畔，瓦特納冰川以南，是前往傑古沙龍冰河湖、斯卡夫塔山的中途補給與過夜點。人口約兩千四百人，超市、旅館、游泳池與冰川博物館一應俱全。`,
    "鎮上以龍蝦料理聞名，多家餐廳供應當地海產。周邊可遠眺西角山（Vestrahorn）、出口冰川與海岸線，春季也是觀鳥的好時機。",
    "從維克沿 1 號公路東行約 2.5–3 小車程，常作東南岸兩日行程的住宿基地。",
  ],
};
