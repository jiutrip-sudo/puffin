import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const kirkjufellSpot: TripAttraction = {
  name: PLACE_TW.kirkjufell,
  nameEn: "Kirkjufell",
  region: PLACE_TW.snaefellsnes,
  subtitle: "斯奈山半島上最上鏡的山峰與瀑布同框",
  imageUrl: IMG("kirkjufell1_b2a1018312.jpg"),
  galleryImages: [
    IMG("kirkjufell1_b2a1018312.jpg"),
    IMG("kirkjufell2_26aae9d397.jpg"),
    IMG("kirkjufell3_a34c5b3e82.jpg"),
  ],
  paragraphs: [
    "草帽山與教會山瀑布的經典構圖",
    `${PLACE_TW.kirkjufell}（Kirkjufell，又常被稱為草帽山）高約 463 公尺，位在${PLACE_TW.snaefellsnes}西岸，俯瞰漁港格倫達菲厄澤（Grundarfjörður）。山峰弧度圓潤、頂端尖銳，是冰島曝光率最高的山景之一，也常出現在攝影與影視作品中。`,
    "沿 54 號公路北上時，教會山會在遠方逐漸清晰；請勿在路肩違規停車拍照，應使用指定停車區。山體南側與陸地相連，除北面朝海外，東、西、南側皆可取景；經典畫面常包含公路對側的教會山瀑布（Kirkjufellsfoss）——瀑布本身不大，但與山峰同框時層次豐富。",
    "教會山屬私人土地，登山需事先取得許可並聘請嚮導，一般旅客以路邊觀景與短程步行最為安全。冬季積雪結冰時風勢強，請穿防滑鞋並留意天候。",
    "若行程涵蓋斯奈山半島，教會山通常與半島環線其他停靠點（如海岸峭壁、漁村）安排在同一天；夏季日照長，傍晚光線尤適合拍攝。",
  ],
};
