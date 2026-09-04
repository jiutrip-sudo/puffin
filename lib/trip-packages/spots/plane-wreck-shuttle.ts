import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const planeWreckShuttleSpot: TripAttraction = {
  name: "Plane Wreck DC-3飛機殘骸往返接送服務",
  nameEn: "DC-3 Plane Wreck Shuttle",
  region: "冰島南部",
  subtitle: "索爾黑馬黑沙灘飛機殘骸接駁車",
  imageUrl: IMG("Plane_DC_3_6a46d18e06.png"),
  galleryImages: [
    IMG("Plane_DC_3_6a46d18e06.png"),
    IMG("plane_wreck_unsplash2_34bf5e223d.jpg"),
  ],
  paragraphs: [
    "免健行往返飛機殘骸",
    "1973 年美軍 DC-3 因燃油耗盡迫降於索爾黑馬（Sólheimasandur）黑沙灘，機員全數生還，機身至今留在沙灘上。現為私人土地，不可開車直達；從公路停車場步行單程約 1–1.5 小時。",
    `接駁車往返停車場與殘骸，省去長途步行，適合時間有限或不想在風中健行的旅客。地點在 1 號公路旁，距${PLACE_TW.skogafoss}與${PLACE_TW.vik}皆不遠。請留意天候，惡劣天氣可能停運。`,
  ],
};
