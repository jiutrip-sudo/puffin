import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const skogafossSpot: TripAttraction = {
  name: PLACE_TW.skogafoss,
  nameEn: "Skógafoss",
  region: "冰島南部",
  subtitle: "在冰島最具代表性的瀑布之一等待雙彩虹的出現",
  imageUrl: IMG("skogafoss2_67abee5632.jpg"),
  galleryImages: [
    IMG("skogafoss2_67abee5632.jpg"),
    IMG("skogafoss1_7e720b62ca.jpg"),
    IMG("skogafoss3_d680db80b4.jpg"),
  ],
  paragraphs: [
    "沉浸在冰島斯科加瀑布的難忘美景中",
    "斯科加瀑布（Skógafoss）是位於冰島南部的一個瀑布，高60米，寬25米，直接來自兩座冰川：埃亞菲亞德拉冰蓋（Eyjafjallajökull）和米達爾斯冰原（Mýrdalsjökull）。斯科加瀑布流經的懸崖是上個冰河時代冰島海岸線的一部分，由於冰雪消融導致冰島的陸地面積上升，它目前距離海岸線已有5公里距離。",
    "斯科加瀑布一年四季都十分壯觀，高達60米的水幕令人印象深刻，走近水幕，旅客會被籠罩在水花、雲霧和巨大的聲響之中。由於瀑布持續噴出大量水花，在晴朗的日子裡，通常可以看到一道或兩道彩虹。如果您願意攀登500多級臺階到達瀑布頂端的平台，您將欣賞到冰島南部海岸線的壯麗景色，這裡也是著名的Fimmvorduhals徒步路線的起點。",
    "斯科加瀑布的魅力遠不止於此，它還有一個美麗的古老傳說。據傳，一位叫Þrasi的維京人將一箱財寶扔進了河裡，許多人試圖撈起這個寶箱，但都失敗了。直到有一天，有人爬進了瀑布，但只能抓住箱子側面的把手。由於木頭已經腐朽，把手斷裂，寶物墜入瀑布底部，再也找不到了。有一段時間，這個把手一直掛在瀑布旁斯科加教堂的門上。如今，如果您參觀斯科加博物館，您可以親眼目睹這枚當地人所說的寶箱的“戒指”。",
    `在斯科加瀑布不遠處的${PLACE_TW.seljalandsfoss}同樣十分受旅客歡迎，在那裡人們可以繞到瀑布背後，拍下一張逆光的完美照片。`,
  ],
};
