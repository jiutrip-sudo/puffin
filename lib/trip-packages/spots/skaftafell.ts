import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const skaftafellSpot: TripAttraction = {
  name: "斯卡夫塔山國家公園",
  nameEn: "Skaftafell National Park",
  region: "冰島東部",
  subtitle: "瓦特納冰川西南麓的健行與冰川景觀",
  imageUrl: IMG("skaftafell_unsplash2_896376fc08.jpg"),
  galleryImages: [
    IMG("skaftafell_unsplash2_896376fc08.jpg"),
    IMG("skaftafell_unsplash_73c8d3fa66.jpg"),
    IMG("cassie_boca_pgkr_Kjq_Pe_Xg_unsplash_9c2f4b98c8.jpg"),
  ],
  paragraphs: [
    "南岸冰川健行的熱門基地",
    `斯卡夫塔山（Skaftafell）位在 1 號公路旁，${PLACE_TW.vik}與赫本（Höfn）之間，是瓦特納冰川（Vatnajökull）西南麓的自然保護區。1967 年設為國家公園，2008 年併入瓦特納冰川國家公園。厄賴法耶屈德爾火山（Öræfajökull）為此地擋風，天氣常比周邊穩定，白冰川、黑沙灘與綠草坡形成鮮明對比。`,
    "步道選擇多元：前往斯瓦蒂瀑布（Svartifoss）與斯卡夫塔山冰川（Skaftafellsjökull）的路線短而平緩，適合一般旅人；莫薩山谷（Morsárdalur）、克里斯汀娜山峰（Kristínartindar）則較具挑戰性。園內有露營地與旅客中心，可取得路線圖、天氣與冰川展覽資訊。",
    "夏季是最佳健行季；冬季部分路線可能因冰雪封閉。冰川健行、藍冰洞等活動多由此或鄰近集合點出發，請依現場公告與導遊指示行動。",
  ],
};
