import type { TripAttraction } from "../types";
import { IMG } from "./_img";
import { PLACE_TW } from "@/lib/i18n/iceland-place-names";

export const planeWreckSpot: TripAttraction = {
  name: "飛機殘骸",
  nameEn: "Solheimasandur Plane Wreck",
  region: "冰島南部",
  subtitle: "索爾黑馬黑沙灘上的 DC-3 迫降遺跡",
  imageUrl: IMG("plane_wreck_unsplash2_34bf5e223d.jpg"),
  galleryImages: [
    IMG("plane_wreck_unsplash2_34bf5e223d.jpg"),
    IMG("plane_wreck_unsplash3_48501ca14e.jpg"),
    IMG("asa_rodger_hu2_c_F_Ff_VSA_unsplash_f73a890eee.jpg"),
  ],
  paragraphs: [
    "黑沙灘上的白色機身剪影",
    "1973 年，一架美國海軍 DC-3 因燃油耗盡迫降於索爾黑馬（Sólheimasandur）黑沙灘，七名機員全數生還，機身則留在原地成為冰島最知名的攝影地標之一。沙灘由卡特拉火山冰川洪水沖刷而成，與純白機殘形成強烈對比。",
    `地點在 1 號公路旁，距${PLACE_TW.skogafoss}約 10 分鐘、${PLACE_TW.vik}與黑沙灘約 20 分鐘車程。現為私人土地，不可開車直達殘骸；須在公路旁停車場下車，步行單程約 1–1.5 小時，或搭乘接駁車（約 15 分鐘）。`,
    "步道平坦但風大、無遮蔽，冬季務必做好防風保暖；惡劣天氣請勿前往。南岸冰川平原氣候變化快，曾有旅客因失溫遇難，請評估體力與天候後再出發。",
  ],
};
