import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reynisfjaraSpot: TripAttraction = {
  name: PLACE_TW.reynisfjara,
  nameEn: "Reynisfjara Black Sand Beach",
  region: "冰島南部",
  subtitle: "在洶湧詭譎的黑沙灘留下你的腳印",
  imageUrl: IMG("reynisfjara1_ef5a24c2b7.jpg"),
  galleryImages: [
    IMG("reynisfjara1_ef5a24c2b7.jpg"),
    IMG("reynisfjara2_b3ec97ed1f.jpg"),
    IMG("reynisfjara3_725ed9b454.jpg"),
  ],
  paragraphs: [
    "讓人萌生「這是地球嗎？」疑問的異世黑沙灘",
    `黑沙灘（Reynisfjara Black Sand Beach）因其位於${PLACE_TW.vik}附近而得名。沙灘位於冰島南岸的環島1號公路沿線，交通便捷，是冰島最著名的海灘之一。火山噴發形成的黝黑色砂石千百年來受到北大西洋的海浪拍打，每年有無數旅客被其魔幻、深邃又略顯恐怖的奇異景色而折服。`,
    `讓黑沙灘從冰島眾多海灘中脫穎而出的，不僅是自古以來火山爆發後岩漿遇到海水迅速冷卻而形成的黝黑砂石，還有這片沙灘所能捕獲的風景。漫步於黑沙灘之上，可以眺望不遠處的${PLACE_TW.reynisdrangar}。據說這些怪異的海柱是石化的巨魔，也有人堅信它們實際上曾經是海岸線懸崖的一部分，在其他部分被海水沖垮後依然屹立不倒。無論哪種說法能打動你，它們都賦予了黑沙灘一道獨特壯觀的風景線。`,
    "黑沙灘還有兩個著名的玄武岩柱景觀：加達爾懸崖（Gardar cliff）和Hálsanefshellir洞穴，它們像風琴管一樣駐守在暗黑色的灘原上。這些八角玄武岩柱是火山熔岩突然冷卻後形成的，石柱的高度不一，有的只有半米，有的則高達 20 米。夏季，加達爾懸崖還是成千上萬只海鸚和北極燕鷗等野生鳥類的棲息地。從海岸邊還可以看到迪霍拉里（Dyrhólaey）的拱門在大西洋上若隱若現的美妙景色。",
    "最後，也是最重要的一點，在黑沙灘遊玩時，切記注意安全！",
    "目前，為了保障旅客的生命安全，黑沙灘根據具體情況劃分了不同區域，並設置了相應的燈光。當黃燈和紅燈亮起時，旅客均不得進入相應顏色的區域。不必擔心，在安全的距離內，您完全可以看到同樣壯觀的景色。請注意，黑沙灘是沒有救生員或其他有人值守的，因此，請不要冒險靠近大海，為您的生命負責。",
  ],
};
