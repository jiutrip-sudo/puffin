import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const jokulsarlonAmphibianBoatSpot: TripAttraction = {
  name: "傑古沙龍冰河湖水陸兩棲船遊",
  nameEn: "Jökulsárlón Amphibian Boat Tour",
  region: "冰島東部",
  subtitle: "冰河湖經典兩棲船遊覽",
  imageUrl: IMG("Joekulsarlon_Boat_d66523c73b.png"),
  galleryImages: [
    IMG("Joekulsarlon_Boat_d66523c73b.png"),
    IMG("3_3313617579.jpg"),
  ],
  paragraphs: [
    "冰河湖最受歡迎的船遊方式",
    `${PLACE_TW.jokulsarlon}由 Breiðamerkurjökull 冰川融水形成，浮冰密布。兩棲船可在水面與冰塊間穿行，近距離觀察冰山與崩塌景象，船員解說冰川地質與生態。`,
    "夏季營運，建議事先預約。湖上風大，請穿保暖防風衣物；有年齡限制，出發前請確認當日船班與天候。",
  ],
};
