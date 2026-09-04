import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const keridSpot: TripAttraction = {
  name: "凱瑞斯火山口",
  nameEn: "Kerið Crater",
  region: "冰島南部",
  subtitle: "黃金圈路旁紅岩碧湖的火山口湖",
  imageUrl: IMG("kerid1_f15da5c881.jpg"),
  galleryImages: [
    IMG("kerid1_f15da5c881.jpg"),
    IMG("kerid2_06a579efeb.jpg"),
    IMG("kerid3_467079c053.jpg"),
    IMG("Kerid_1a2aee2f66.jpg"),
  ],
  paragraphs: [
    "三千年前形成的火山口湖",
    `凱瑞斯火山口（Kerið）位在黃金圈南側，距${PLACE_TW.thingvellir}約 40 分鐘車程，是 Tjarnarhólar 火山群中最大、也最受攝影者喜愛的火山口之一。長約 270 公尺、寬 170 公尺、深 55 公尺，口緣鐵質火山岩呈鮮紅色，底部湖水碧綠，與苔蘚形成強烈對比。`,
    "多數研究認為這是一座錐形火山，約六千五百年前爆發後岩漿庫枯竭，火山口壁塌陷而成今日地貌。民間傳說湖水水位會與遠方 Búrfell 山上的湖泊此消彼長，增添幾分傳奇色彩。",
    "步道可沿火山口 rim 環走，近距離俯瞰湖景；部分區段需付入場費維護步道。通常與辛格維利爾、蓋錫爾、黃金瀑布排在同一日黃金圈行程。",
  ],
};
