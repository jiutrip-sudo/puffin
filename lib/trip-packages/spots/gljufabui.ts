import type { TripAttraction } from "../types";
import { IMG } from "./_img";
import { PLACE_TW } from "@/lib/i18n/iceland-place-names";

export const gljufrabuiSpot: TripAttraction = {
  name: "秘密瀑布",
  nameEn: "Gljúfrabúi",
  region: "冰島南部",
  subtitle: "塞里雅蘭瀑布旁、藏在岩縫裡的秘境",
  imageUrl: IMG("Gljufrabui2_b243f65773.jpg"),
  galleryImages: [
    IMG("Gljufrabui2_b243f65773.jpg"),
    IMG("Gljufrabui1_c9a6989051.jpg"),
  ],
  paragraphs: [
    "走進峽谷才看得見的瀑布",
    `秘密瀑布（Gljúfrabúi）在南岸 1 號公路旁，與${PLACE_TW.seljalandsfoss}相距不到兩百公尺，卻因入口狹窄、需涉水或攀石進入岩縫，人潮明顯少許。瀑布高約 40 公尺，大半隱在懸崖後方，從外側只能瞥見一縷白練。`,
    "進入峽谷後視野豁然，水聲迴響；若體力與鞋況允許，可沿濕滑岩石走到瀑布下方，但務必留意落石與積水。光線因地形受限，攝影建議帶防水裝備並預留嘗試不同角度的時間。",
    "通常與塞里雅蘭瀑布、斯科加瀑布排在同一日南岸行程；停車場共用區域，建議穿防水外套與防滑鞋。",
  ],
};
