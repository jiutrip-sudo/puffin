import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const kirkjufellsfossSpot: TripAttraction = {
  name: "教會山瀑布",
  nameEn: "Kirkjufellsfoss",
  region: "斯奈山半島",
  subtitle: "教會山前景的經典三股瀑布",
  imageUrl: IMG("koushik_chowdavarapu_JT_8_IW_Aaxp_Qk_unsplash_b8dd319dcb.jpg"),
  galleryImages: [
    IMG("koushik_chowdavarapu_JT_8_IW_Aaxp_Qk_unsplash_b8dd319dcb.jpg"),
    IMG("kirkjufellsfoss1_7c3ec6c488.jpg"),
    IMG("kirkjufellsfoss2_0f8828f92c.jpg"),
  ],
  paragraphs: [
    "草帽山最上鏡的前景",
    `教會山瀑布（Kirkjufellsfoss）在 54 號公路旁，與${PLACE_TW.kirkjufell}隔路相望，是拍攝「瀑布 + 教會山」構圖的標準機位。水流來自 Kirkjufellsá 河，被岩石分成三股，落差不大，卻因山峰背景而成為西部最熱門的攝影點之一。`,
    "停車場就在瀑布旁，步行即可取景；清晨與傍晚光線較柔和。通常與教會山、格倫達菲厄澤（Grundarfjörður）小鎮排在同一日斯奈山半島行程。",
  ],
};
