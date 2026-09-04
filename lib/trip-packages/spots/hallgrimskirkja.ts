import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const hallgrimskirkjaSpot: TripAttraction = {
  name: PLACE_TW.hallgrimskirkja,
  nameEn: "Hallgrímskirkja",
  region: PLACE_TW.reykjavik,
  subtitle: "登上塔頂，俯瞰雷克雅維克全景",
  imageUrl: IMG("3_H6_A4726_db03df2882.jpg"),
  galleryImages: [
    IMG("3_H6_A4726_db03df2882.jpg"),
    IMG("Hallgrimskirkja_and_statue_7708039358.jpg"),
    IMG("Hallgrimskirkja_Church_Reykjavik_Iceland_1_8756f217e7.jpg"),
    IMG("Hallgrimskirkja_Church_1_905b7555be.jpg"),
    IMG("Hallgrimskirkja_Interior_acd42f66b0.jpg"),
  ],
  paragraphs: [
    "雷克雅維克天際線的玄武岩教堂",
    `${PLACE_TW.hallgrimskirkja}（Hallgrímskirkja）是雷克雅維克最醒目的地標，主塔高 72 公尺，為冰島最高的建築之一。教堂紀念 17 世紀詩人兼牧師哈爾格林姆爾·佩圖爾松（Hallgrímur Pétursson），外觀靈感來自玄武岩柱狀節理，呈現冰島特有的火山地貌線條。`,
    "旅客可搭乘電梯登上塔頂觀景台，360 度眺望彩色屋頂、港口與遠方山脈；教堂前方還立有探險家萊夫·埃里克松（Leif Erikson）雕像。內部空間高挑簡潔，管風琴聲響宏亮，若遇演奏或禮拜，請放低音量並尊重現場規範。",
    "教堂位於市中心高地，步行可連接洛加維格大街與港區；冬季塔頂風大，請注意保暖。入場與登塔通常需購票，旺季建議預留排隊時間。",
  ],
};
