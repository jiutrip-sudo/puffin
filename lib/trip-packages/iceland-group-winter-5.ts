import type { TripPackage } from "./types";
import {
  icelandGroupWinter5Day1Highlights,
  icelandGroupWinter5Day1OptionalActivities,
} from "./iceland-group-winter-5-day1-cards";
import {
  icelandGroupWinter5Day2Highlights,
  icelandGroupWinter5Day2OptionalActivities,
  icelandGroupWinter5Day3Highlights,
  icelandGroupWinter5Day3OptionalActivities,
  icelandGroupWinter5Day4Highlights,
  icelandGroupWinter5Day4OptionalActivities,
  icelandGroupWinter5Day5Highlights,
  icelandGroupWinter5Day5OptionalActivities,
} from "./iceland-group-winter-5-days2-5-cards";

export const icelandGroupWinter5: TripPackage = {
  id: "iceland-group-winter-5",
  tripKey: "iceland/group/winter/5",
  slug: "5-days-winter-package-golden-circle-south-coast-jokulsarlon-glacier-lagoon",
  tourCode: "SLMMD-052",
  title: "5 天 4 夜冰島冬季超值跟團遊",
  subtitle: "傑古沙龍冰河湖 & 黃金圈",
  duration: { days: 5, nights: 4 },
  season: { label: "冬季", months: "11 月–4 月" },
  meta: {
    departure: "雷克雅未克",
    transport: "跟團",
    tourCode: "SLMMD-052",
  },
  eyebrow: "冰島集合 · 跟團 · 冬季",
  backHref: "/trips/iceland/group/winter",
  backLabel: "返回冬季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/Gullfoss_0572e78e11.jpg",
  whyChooseUs: [
    {
      id: "deposit",
      title: "20% 訂金",
      description: "輕鬆預訂，無需一次付清全額",
    },
    {
      id: "booking",
      title: "安心預訂",
      description: "行程變更可協助調整",
    },
    {
      id: "refund",
      title: "退款保證",
      description: "依條款提供退款保障",
    },
    {
      id: "flexible",
      title: "彈性出發日",
      description: "依您的班機與假期安排出發",
    },
    {
      id: "reviews",
      title: "好評口碑",
      description: "豐富冰島跟團服務經驗",
    },
    {
      id: "local",
      title: "本地優選供應商",
      description: "直連冰島在地嚮導與住宿",
    },
  ],
  intro: {
    summary:
      "我們為您精心設計規劃了冰島五日套餐，從住宿到遊玩，全覽包辦，如果您想在數日內遊覽冰島的極致風光精華，就來參加我們的冰島冬季五日南岸之旅套餐吧！精選緊湊的行程，可以讓您此次出遊滿載而歸！",
    full: `我們為您精心設計規劃了冰島五日套餐，從住宿到遊玩，全覽包辦，如果您想在數日內遊覽冰島的極致風光精華，就來參加我們的冰島冬季五日南岸之旅套餐吧！精選緊湊的行程，可以讓您此次出遊滿載而歸！

本次冰島冬季5日超值套餐包含南岸兩天加黃金圈一天的品質小巴團，將帶領您探索壯麗的南岸瀑布呈現出驚人的水流和壯觀的飛瀑景象，您還將有機會近距離接觸冰川。在傑古沙龍冰河湖（Jökulsárlón）中，您將目睹漂浮的冰山和冰川碎片，彷彿置身於童話世界，而鑽石沙灘（Diamond Beach）上的閃爍冰山殘片更是令人歎為觀止，為您的旅程增添了一份浪漫和神秘。除此之外，冰島黃金圈的三大景點，包括令人歎為觀止的間歇泉（Geysir）、辛格維利爾國家公園（Þingvellir National Park）和黃金瀑布（Gullfoss），也將讓您親眼目睹到地球自然奇觀。

如果您在極光季節參團，途中還將有機會遠離光汙染的地方，與神秘的極光相遇。在清冷的冬夜裡，您將仰望天空，欣賞到極光的炫舞。`,
  },
  gallery: [
    {
      id: "Gullfoss_0572e78e11",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Gullfoss_0572e78e11.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "lake_1112520_1280_1a107c",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/lake_1112520_1280_1a107cc6a5.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "strokkur_1_56419c484e",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/strokkur_1_56419c484e.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    }
  ],
  highlights: [
    "體驗正宗冰島溫泉文化",
    "探索冰島黃金圈迷人冬景",
    "穿過北美板塊和亞歐大陸板塊的分界線",
    "欣賞冰島style的南岸瀑布飛流",
    "探索世無其二的瓦特納藍冰洞",
    "醉心於冰河湖和鑽石沙灘的神秘浪漫",
    "抵達冰島最浪漫的傑古沙龍冰河湖",
    "站在獨特的黑沙灘感受異星風貌",
  ],
  attractions: [
    {
      name: "雷克雅未克",
      nameEn: "Reykjavík",
      region: "雷克雅未克",
      subtitle: "城市、雪山、酒吧、溫泉、北極光，這裡應有盡有。",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Reykjavik_bathed_in_sunset_2b179f83fe.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Reykjavik_bathed_in_sunset_2b179f83fe.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reykjavik1_839e01ff5d.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reykjavik_cityscape_in_iceland_158525984_5c1182144cedfd00018fbb38_7f469e1459.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Reykjavik_d71a13c273.jpg",
      ],
      paragraphs: [
        "雷克雅未克（Reykjavík）是冰島共和國的首都，冰島第一大城市。這裡一面臨海，雙面環山，是一個充滿活力和文化氛圍的城市，融合著現代都市生活與自然美景。位於冰島西南海岸的雷克雅未克，也是世界上最北的主權國家首都。市區人口約為13萬，整個大都會區人口超過23萬，是冰島經濟、政治和文化生活的中心。",
        "雷克雅未克的歷史可以追溯到9世紀，當時由Ingólfr Arnarson帶領的諾斯人定居者建立了第一個永久性定居點。雷克雅未克這個名字在冰島語中意為“煙霧灣”，指的是當地的溫泉蒸汽。如今，雷克雅未克以其清潔、綠色和安全的環境而聞名，在全球生活品質指數中始終排名靠前。市區範圍內，擁有多個帶有溫泉池的公共泳池，以及唯一的精品溫泉Sky Lagoon。",
        "雷克雅未克緊湊的市中心充滿了各種景點。最具標誌性的地標之一是哈爾格林姆斯教堂（Hallgrímskirkja），這座高聳的教堂從觀景塔上可以俯瞰城市全景。其建築靈感來自冰島的玄武岩熔岩壁，既引人注目又象徵著城市的創新精神。坐落在海岸線上的哈帕音樂廳（Harpa），其玻璃外牆反射著海洋和天空，是另一座現代建築奇觀，也是大型文化活動的中心，包括音樂會、展覽和節日活動等等。",
        "藝術和文化是雷克雅未克身份的重要組成部分。城市擁有眾多博物館、畫廊和劇院。冰島國家美術館和雷克雅未克藝術博物館為藝術愛好者提供了欣賞當代藝術的平台。街頭藝術和壁畫裝飾了許多建築，為城市增添了生機。雷克雅未克還有多個年度節日，如雷克雅未克藝術節、冰島Airwaves音樂節和冬季燈光節，吸引了大量國際旅客，展示了城市的活力文化景觀。",
        "在雷克雅未克，自然同樣近在咫尺。城市坐落在Faxaflói峽灣，有著壯麗的海岸景色，旅客可以輕鬆地從舊港踏上出海觀鯨、觀海鸚以及海釣之旅。僅需很短的距離，旅客便可探索黃金圈，線路包括辛格維利爾國家公園、間歇泉和壯觀的黃金瀑布三大冰島最熱門旅遊景點。城市本身也擁有眾多公園和綠地，如Laugardalur公園、植物園、動物園以及各種運動公園。",
        "雷克雅未克的美食場景多種多樣且富有創新，反映了傳統的冰島菜餚和國際風味的融合。新鮮的海鮮、羊肉和乳製品在當地菜餚中佔據重要位置，而眾多餐館和咖啡館提供從米其林Fine Dining到休閒街頭小吃的各種選擇。城市的夜生活同樣充滿活力，擁有各種酒吧、俱樂部和現場音樂演出，特別是在週末生機勃勃。",
        "可持續發展和創新是雷克雅未克發展的關鍵。這裡是全球可再生能源城市模型的先驅，幾乎所有的電力和供暖需求都由地熱和水電滿足。這種可持續性也在城市的公共交通系統、自行車道和眾多綠色倡議中得到了體現。",
        "雷克雅未克完美地融合了過去與現在，提供了豐富的城市文化生活和自然美景。無論您是想享受便利的都市生活、探索充滿活力的藝術場景，還是深入冰島令人驚歎的自然風光，雷克雅未克作為您到達冰島的第一站，一定能為您帶來難忘的體驗。",
      ],
    },
    {
      name: "塞里雅蘭瀑布",
      nameEn: "Seljalandsfoss",
      region: "冰島南部",
      subtitle: "繞行至塞里雅蘭瀑布的身後領略不一樣的風景",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss1_b6412d5d4e.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss1_b6412d5d4e.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss2_6d4717fdda.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss3_531d93910f.jpg",
      ],
      paragraphs: [
        "塞里雅蘭瀑布之美的不同角度",
        "塞里雅蘭瀑布（Seljalandsfoss）位於冰島南部1號公路旁，是一個落差達60米的巨大瀑布。在冰島這樣一個瀑布遍佈的國家，它的獨特之處就在於瀑布之後有一個寬闊的洞穴可供人穿行，旅客繞行至瀑布背後能夠透過水簾欣賞落日晚霞和冰島南岸的美麗景色。",
        "瀑布所在的塞里雅蘭河（Seljalandsá）發源於埃亞菲亞德拉冰蓋（Eyjafjallajökull），河水充滿冰川融水，奔流向南，在陡峭的懸崖上飛瀉而下，這也是塞里雅蘭瀑布得名的原因。塞里雅蘭瀑布在過去直接流入大西洋，而現在由於海平面的下降，海洋和瀑布之間出現了一片低地。站在瀑布頂端，您可以看到大西洋和冰島南海岸的壯麗景色。",
        "由於其雄偉壯觀和極其獨特的景觀，塞里雅蘭瀑布也出現在了許多膾炙人口的影視作品當中，例如《星際迷航》第三季和賈斯汀·比伯的《I'll Show You》MV中，以及在一檔美國真人秀節目《極速前進》第六季當中，它也被用作挑戰關卡。",
        "需要提醒旅客的是，無論是夏季還是冬季前往塞里雅蘭瀑布，都需要注意這條小路極其溼滑，由於瀑布落差巨大，因此無論是否有風，瀑布都會打溼這條隱藏在其後的小路。冬季，這條小路有可能會因為安全原因而封路，如果幸運沒有遇到道路封閉的情況，請一定要注意腳下，另外還要注意頭上可能會落下的冰柱。",
        "在距離幾百米塞里雅蘭外的地方，還有另外一條令人驚歎叫絕的瀑布，它近幾年才被人們發掘，被稱為秘密瀑布（Gljúfrabúi）。落差高達40米，秘密瀑布隱藏在一個狹窄而神秘的峽谷中，也正是因此特性而得名。在前往秘密瀑布的途中，還能看到另一個迷人的小瀑布，在群山、河流和清新的空氣環繞之處驕傲地展示著自己的美麗。",
      ],
    },
    {
      name: "斯科加瀑布",
      nameEn: "Skógafoss",
      region: "冰島南部",
      subtitle: "在冰島最具代表性的瀑布之一等待雙彩虹的出現",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/skogafoss2_67abee5632.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/skogafoss2_67abee5632.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/skogafoss1_7e720b62ca.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/skogafoss3_d680db80b4.jpg",
      ],
      paragraphs: [
        "沉浸在冰島斯科加瀑布的難忘美景中",
        "斯科加瀑布（Skógafoss）是位於冰島南部的一個瀑布，高60米，寬25米，直接來自兩座冰川：埃亞菲亞德拉冰蓋（Eyjafjallajökull）和米達爾斯冰原（Mýrdalsjökull）。斯科加瀑布流經的懸崖是上個冰河時代冰島海岸線的一部分，由於冰雪消融導致冰島的陸地面積上升，它目前距離海岸線已有5公里距離。",
        "斯科加瀑布一年四季都十分壯觀，高達60米的水幕令人印象深刻，走近水幕，旅客會被籠罩在水花、雲霧和巨大的聲響之中。由於瀑布持續噴出大量水花，在晴朗的日子裡，通常可以看到一道或兩道彩虹。如果您願意攀登500多級臺階到達瀑布頂端的平台，您將欣賞到冰島南部海岸線的壯麗景色，這裡也是著名的Fimmvorduhals徒步路線的起點。",
        "斯科加瀑布的魅力遠不止於此，它還有一個美麗的古老傳說。據傳，一位叫Þrasi的維京人將一箱財寶扔進了河裡，許多人試圖撈起這個寶箱，但都失敗了。直到有一天，有人爬進了瀑布，但只能抓住箱子側面的把手。由於木頭已經腐朽，把手斷裂，寶物墜入瀑布底部，再也找不到了。有一段時間，這個把手一直掛在瀑布旁斯科加教堂的門上。如今，如果您參觀斯科加博物館，您可以親眼目睹這枚當地人所說的寶箱的“戒指”。",
        "在斯科加瀑布不遠處的塞里雅蘭瀑布（Seljalandsfoss）同樣十分受旅客歡迎，在那裡人們可以繞到瀑布背後，拍下一張逆光的完美照片。",
      ],
    },
    {
      name: "黑沙灘",
      nameEn: "Reynisfjara Black Sand Beach",
      region: "冰島南部",
      subtitle: "在洶湧詭譎的黑沙灘留下你的腳印",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara1_ef5a24c2b7.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara1_ef5a24c2b7.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara2_b3ec97ed1f.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara3_725ed9b454.jpg",
      ],
      paragraphs: [
        "讓人萌生「這是地球嗎？」疑問的異世黑沙灘",
        "維克黑沙灘（Reynisfjara Black Sand Beach，音譯為雷尼斯黑沙灘）因其位於維克鎮（Vík í Mýrdal）附近而得名。沙灘位於冰島南岸的環島1號公路沿線，交通便捷，是冰島最著名的海灘之一。火山噴發形成的黝黑色砂石千百年來受到北大西洋的海浪拍打，每年有無數旅客被其魔幻、深邃又略顯恐怖的奇異景色而折服。",
        "讓維克黑沙灘從冰島眾多海灘中脫穎而出的，不僅是自古以來火山爆發後岩漿遇到海水迅速冷卻而形成的黝黑砂石，還有這片沙灘所能捕獲的風景。漫步於黑沙灘之上，可以眺望不遠處的雷尼斯岩（Reynisdrangar）。據說這些怪異的海柱是石化的巨魔，也有人堅信它們實際上曾經是海岸線懸崖的一部分，在其他部分被海水沖垮後依然屹立不倒。無論哪種說法能打動你，它們都賦予了黑沙灘一道獨特壯觀的風景線。",
        "維克黑沙灘還有兩個著名的玄武岩柱景觀：加達爾懸崖（Gardar cliff）和Hálsanefshellir洞穴，它們像風琴管一樣駐守在暗黑色的灘原上。這些八角玄武岩柱是火山熔岩突然冷卻後形成的，石柱的高度不一，有的只有半米，有的則高達 20 米。夏季，加達爾懸崖還是成千上萬只海鸚和北極燕鷗等野生鳥類的棲息地。從海岸邊還可以看到迪霍拉里（Dyrhólaey）的拱門在大西洋上若隱若現的美妙景色。",
        "最後，也是最重要的一點，在維克黑沙灘遊玩時，切記注意安全！",
        "目前，為了保障旅客的生命安全，維克黑沙灘根據具體情況劃分了不同區域，並設置了相應的燈光。當黃燈和紅燈亮起時，旅客均不得進入相應顏色的區域。不必擔心，在安全的距離內，您完全可以看到同樣壯觀的景色。請注意，維克黑沙灘是沒有救生員或其他有人值守的，因此，請不要冒險靠近大海，為您的生命負責。",
      ],
    },
    {
      name: "鑽石沙灘",
      nameEn: "The Diamond Beach",
      region: "冰島東部",
      subtitle: "雕琢於大海之中，閃耀在陽光之下。親身前往鑽石沙灘，捕捉千年冰山的異世景象。",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/diamond_beach_unsplash_11020ebd2f.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/diamond_beach_unsplash_11020ebd2f.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/diamond_beach_unsplash2_8710988286.jpg",
      ],
      paragraphs: [
        "當冰山遇上黑沙灘",
        "鑽石沙灘（The Diamond Beach）的原名是Breiðamerkursandur沙灘，位於冰島南部，瓦特納冰川（Vatnajökull）南端傑古沙龍冰河湖（Jökulsárlón）附近。鑽石沙灘的得名是因為沙灘上晶瑩剔透的透明體，而這些實際上並不是鑽石，而是傑古沙龍冰河湖上的漂浮的冰山隨河流流向大西洋中，擱淺在了黢黑的沙灘上。伴隨著洶湧的大西洋海浪，透亮的冰山與暗黑的沙灘透露著一絲詭譎異世的氣氛。",
        "冰島以黑沙灘聞名於世，而鑽石海灘也當然不是冰島唯一的黑色海灘，其中最有名的黑沙灘之一當屬位於維克鎮（Vík í Mýrdal）附近的維克黑沙灘（Reynisfjara）。這些黑沙灘的形成得歸因於冰島的火山地貌。當火山熔岩與冰冷的海水接觸後迅速冷卻形成玄武岩，隨著時間的推移，碎裂的玄武岩變得越來越小，最終變成了沙子。",
        "全年的任何時候都適合來鑽石海灘遊覽打卡。夏季陽光充足，日照時間長，在交通層面上更加安全和便捷，沙灘上的冰塊由於是冰川冰，在夏季也不會融化，反而光芒會更加耀眼。冬季，北大西洋海面狂野不羈，海浪拍打著黑色的沙灘，形成一幅更加壯觀的畫面。冬季的金色日落讓鑽石海灘在白天非常上鏡。幸運的話，您還有機會能夠在鑽石沙灘上看見北極光。不過冬天遊覽要特別注意兩點，一是一定要穿得暖和一些；二是一定要與海浪保持安全距離。",
      ],
    },
    {
      name: "傑古沙龍冰河湖",
      nameEn: "Jökulsárlón",
      region: "冰島東部",
      subtitle: "在壯觀的傑古沙龍冰河湖親身體驗冰島的自然奇觀。",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/DSC_00389_4_cadb104463.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/DSC_00389_4_cadb104463.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_unsplash4_afb37701fc.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_unsplash6_8247d88371.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_unsplash5_67dfcff32b.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_unsplash2_3ff49270dd.jpg",
      ],
      paragraphs: [
        "冰島“皇冠上的明珠”",
        "傑古沙龍冰河湖（Jökulsárlón）是瓦特納冰川（Vatnajökull）南部出口冰川Breiðamerkurjökull冰川的一片瀉湖，靠近冰島1號環島公路，距離雷克雅未克約370公里，是冰島最偉大的自然奇觀之一。",
        "冰河湖的歷史不久，大約在20世紀30年代形成，氣候變暖是其主要成因。巨大的冰塊不斷從Breiðamerkurjökull冰川上斷裂掉落，漂浮在湖面上。湖面不寬，但深達250米，是冰島最深的湖泊。",
        "傑古沙龍冰河湖被《孤獨星球》列為此生必去景點之一。",
        "從水上游覽傑古沙龍冰河湖是最有趣且壯觀的方式。許多人喜歡乘船遊覽，因為這樣既能欣賞冰川湖，又能穿梭在冰山之間航行。有兩種船型——水陸兩棲船或衝鋒艇——可供選擇。其中最為熱門的選項就是傑古沙龍冰河湖水陸兩棲船遊。如果您想要更加沉浸式的體驗，那麼可以試試皮划艇項目，親手划船穿越鏡面般的水域，欣賞其充滿藍白色調的超現實環境。",
        "眾多流行文化的名篇曾在傑古沙龍冰河湖留下印跡，《007之雷霆殺機》和《007之擇日而亡》的動作場面在這裡攝製，《勞拉：古墓麗影》《蝙蝠俠：俠影之謎》以及綜藝《極速前進》等諸多頂級的製作都曾在此取景拍攝。",
      ],
    },
    {
      name: "辛格維利爾國家公園",
      nameEn: "Þingvellir National Park",
      region: "冰島南部",
      subtitle: "穿越時空，近距離了解最冰島的自然和文化。",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/thingve_Ilir_unsplash_bea6a68605.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/thingve_Ilir_unsplash_bea6a68605.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/thingvellir_unsplash3_4b40480cfd.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/thingvellir_unsplash2_ebd6ece138.jpg",
      ],
      paragraphs: [
        "在辛格維利爾國家公園追隨維京人的腳步",
        "辛格維利爾國家公園（Þingvellir National Park，又譯為辛格維勒國家公園）位於冰島西南部，距離冰島首都雷克雅未克東北約40公里，是冰島著名黃金圈路線的三大景點之一。辛格維利爾國家公園地處北美板塊和歐亞板塊分離所產生的巨大裂谷邊緣，也是冰島最早議會所在地，是一個具有重要歷史、文化和自然意義的地方，也是冰島最受歡迎的旅遊目的地之一。",
        "公元930年，議會在辛格維利爾的平原上成立，標誌著冰島作為一個獨立國家的存在。園內地標法律石（Lögberg ）據說是世界上第一個議會聚集的地方，自930年以來，這裡見證了無數法律的裁決與正義的伸張。1928年，冰島通過立法保護議會遺址，兩年後，辛格維利爾國家公園正式建成，成為了冰島全國第一個國家公園。",
        "Öxarárfoss是園內最受歡迎的景點之一，這條高13米、寬20米的瀑布在冬季會完全凍結，是攀冰愛好者的最愛。旅客除了通過步行路線遊覽公園，還可以體驗例如垂釣和浮潛等多種多樣的活動。公園南側的辛格瓦德拉湖是冰島境內最大的天然湖泊，湖中有褐鱒魚和各式的北極鮭魚，是全國數一數二的垂釣地點。另外，因驚人的能見度而世界聞名的絲浮拉大裂縫（Silfra）也位於國家公園範圍內。如果滿足有關潛水資格和規定，則能夠潛入清澈冰冷的地下水一探究竟。如果沒有潛水證，那麼參加大樂旅行社旅行的浮潛團則是一個更好的選擇，潛水小白也能夠自在地領略絲浮拉的美麗。",
        "在冰島，或許沒有任何一個地方比辛格維利爾國家公園在歷史、文化和自然方面更加重要。由於其獨特的地位和對世界以及冰島本國的重要價值，辛格維利爾國家公園在2004年被列為聯合國教科文組織世界遺產。",
      ],
    },
    {
      name: "間歇泉",
      nameEn: "The Great Geysir and Strokkur",
      region: "冰島南部",
      subtitle: "感受來自地表之下的自然力量",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/be5ba64f349aa795f653231dac5e44a_fa8600600a.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/be5ba64f349aa795f653231dac5e44a_fa8600600a.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/geysir_unsplash_83e7e7b45e.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/geysir_unsplash2_dd17e22e52.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/geysir_unsplash3_82d9f4f9ea.jpg",
      ],
      paragraphs: [
        "見證間歇泉噴發時刻",
        "Geysir間歇泉被人們稱為大間歇泉（The Great Geysir），有時又譯為蓋歇爾間歇泉，是現代歐洲人所知的第一個間歇泉，甚至英文中表示“間歇泉”的單詞“Geyser”就是因它而得名。它坐落於冰島西南岸的Haukadalur山谷中，與辛格維利爾國家公園（Þingvellir National Park）和黃金瀑布（Gullfoss）共同組成了聞名遐邇的冰島黃金圈線路。",
        "研究表明，蓋歇爾間歇泉已經存在了約1萬年，它最高的一次噴發是在1845年，噴發高度約為170米。但由於地殼運動和人類行為，它目前處於沉寂狀態。上世紀，冰島人曾嘗試多種方法使其噴發，例如在噴口周圍開鑿通道以降低地下水位，或是向噴泉口丟入肥皂，但這些行為後來引發了關於環境保護的爭議，因此在上世紀90年代被叫停。",
        "不過旅客倒不必擔心無法看到間歇泉噴發，Geysir間歇泉向南50米的史托克間歇泉（Strokkur）是目前最為活躍的間歇泉，也是吸引旅客數量最多的間歇泉。 它每5-10分鐘噴發一次，高達約30米左右，噴發出的水柱溫度超過100攝氏度。",
        "需要注意的是，由於間歇泉的水溫極高，可能導致嚴重的人員傷亡，其周圍設有指定區域，出於安全考慮，一定要呆在這些區域內，確保與間歇泉保持一定的距離，也不要向間歇泉、地熱池和火山噴氣口扔東西。",
      ],
    },
    {
      name: "黃金瀑布",
      nameEn: "Gullfoss",
      region: "冰島南部",
      subtitle: "一起探索通往冰島最大瀑布之一的道路",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gullfoss1_9c5319c04c.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gullfoss1_9c5319c04c.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gullfoss2_4aa3699337.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gullfoss3_62d8e5e998.jpg",
      ],
      paragraphs: [
        "在陽光下流動的黃金",
        "黃金瀑布（Gullfoss）位於Haukadalur山谷的Hvítá河上，是冰島最受歡迎的旅遊景點之一，也和辛格維利爾國家公園（Þingvellir National Park）、間歇泉（Geysir）組成了著名的黃金圈線路。許多人認為這裡是冰島最美的瀑布，沒錯，即使冰島有數以千計的瀑布，但也許沒有一條像黃金瀑布一樣聞名於世。",
        "黃金瀑布的得名，是因為在陽光明媚的日子裡，瀑布的水會呈現出美妙夢幻的金褐色。從科學的角度解釋，是因為瀑布水是冰川水，攜帶著多年來大量冰川冰從陸地上鑿下的沉積物。",
        "黃金瀑布由兩段瀑布組合而成，一段高11米，另一段高21米，流入下方長達2.5公里寬約20米的裂縫中。在冰河時代末期，巨大的洪水造成了這條裂縫，而不斷的水流侵蝕使它每年延長25釐米。這裡平均水流速度為每秒109立方米，冬季平均流速為每秒80立方米，夏季的水流速度會提高至每秒130立方米。",
        "在冬季，黃金瀑布是最受風光攝影師們歡迎的地方之一，因為這裡是拍攝北極光的絕佳地點。不過，瀑布周圍狹窄的小路上可能會結冰，因此如果您在冬季遊覽黃金瀑布，我們強烈建議您不要離開主路。",
      ],
    },
  ],
  routeOverviewSubtitle: "南岸與黃金圈冬季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅未克（入境、機場接送、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸 → 塞里雅蘭／斯科加瀑布 → 黑沙灘 → 維克" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞探險 → 返回雷克雅未克" },
    { label: "第 4 天", detail: "黃金圈（辛格維利爾 → 間歇泉 → 黃金瀑布）" },
    { label: "第 5 天", detail: "雷克雅未克 → 機場離境" }
  ],
  routeMap: {
    waypoints: [
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 1 天",
        detail: "雷克雅未克（入境、機場接送）",
      },
      {
        lng: -18.057,
        lat: 63.794,
        label: "第 2 天",
        detail: "南岸瀑布 → 黑沙灘 → 維克",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 3 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞",
      },
      {
        lng: -20.5322,
        lat: 64.3271,
        label: "第 4 天",
        detail: "黃金圈",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 5 天",
        detail: "雷克雅未克 → 機場離境",
      },
    ],
  },
  itinerary: [
    {
      day: 1,
      title: "入境日",
      accommodation: "雷克雅未克",
      description:
        "這是您抵達冰島的第一天，您將乘坐我們為您安排的機場大巴前往冰島首都雷克雅未克，您可以先去預定的飯店辦理入住。如果您是上午或者下午抵達冰島，您不妨先去冰島新晉網紅溫泉：天空之境溫泉（Sky Lagoon），體驗一下冰島的溫泉文化。在無邊的泳池中，一邊享受溫泉和風景，一邊品嚐美酒飲料。您可以體驗Sky Lagoon獨創的七部療法，獨具特色，您將全方位感受冰島人對溫泉的詮釋。如果您是晚班飛機抵達冰島，不妨早早休息，好好期待第二天的精彩行程。",
      highlights: icelandGroupWinter5Day1Highlights,
      optionalActivities: icelandGroupWinter5Day1OptionalActivities,
    },
    {
      day: 2,
      title: "冰島南岸：塞里雅蘭瀑布、斯科加瀑布、黑沙灘",
      accommodation: "南岸",
      description:
        "南岸之旅啟程的第一天，您會來到南岸最美的兩大瀑布：塞里雅蘭瀑布（Seljalandsfoss）和斯科加瀑布（Skógafoss）。距離塞里雅蘭瀑布不遠的秘密瀑布（Gljúfrabúi）也是行程中的一站。這是一處隱藏在巖縫中的秘境。它以其深邃和幽靜，吸引著每一位探險者。水流在狹窄的巖縫中穿梭奔騰，發出轟鳴，用其幽深和神秘，給人以無盡遐想。塞里雅蘭瀑布盛攬南岸風光，它也是冰島唯一一個可以走到水幕後面的瀑布！您真切感受到冰島style的“水簾洞”，用不同視角欣賞瀑布的迷人風采。塞里雅蘭瀑布周圍的環境極為美麗，冬季時分，周邊原本翠綠的草地和壯觀的山脈染上冬日冰霜，您可以在這裡感受到大自然的宏偉和寧靜。相較於塞里雅蘭瀑布，斯科加瀑布的水量更大，寬闊的水簾如銀色絲綢從懸崖峭壁上飛流直落，陽光照射下，時常有雙彩虹掛於上方！站在瀑布底部，水霧的清涼將給予您別樣的感受，您還可以沿著步梯來到瀑布頂端，一覽瀑布全景和南岸風光。同樣，您今天還會來到冰島著名的黑沙灘（Reynisfjara），感受大西洋的海浪衝擊岸邊，看如同管風琴般的玄武岩石柱矗立在旁，縱覽末日異星之景。不過值得注意的是，不要過於靠近海浪，以免發生危險。",
      highlights: icelandGroupWinter5Day2Highlights,
      optionalActivities: icelandGroupWinter5Day2OptionalActivities,
    },
    {
      day: 3,
      title: "東南部風光：傑古沙龍冰河湖、鑽石沙灘、藍冰洞探險",
      accommodation: "雷克雅未克",
      description:
        "今天您會繼續向東出發。抵達冰島最浪漫的景點之一——傑古沙龍冰河湖（Jökulsárlón）。在這裡，您可以欣賞到漂浮在冰河湖中的冰川碎塊，隨著水流靜靜地向大海飄去。這裡也是很多知名的電影的取景地。您有機會目睹到游弋在湖中的海豹，以及翱翔在空中的海鷗和其他鳥類。在冰河湖對面的鑽石冰沙灘（Diamond Beach）更是別有一種獨特的美感，黑色沙灘上佈滿了擱淺的冰塊，好似一顆顆鑽石鑲嵌在沙灘上。今天專業嚮導會帶領您探索好似冰晶剔透晶瑩的藍冰洞（Crystal Ice Cave），一探冰川內部究竟。光線透過冰晶的結構，創造出獨特的光影效果，讓整個洞穴散發出令人陶醉的氛圍。您可以在藍冰洞中感受冰川紋理結構，觸摸千年的冰川，沉浸在被純粹的冰晶藍色所籠罩包圍之感。在藍冰洞探險完畢後，您將開始返程，沿途您還會路過冰島最古老的木教堂之一：Hofskirkja草皮教堂。它坐落在一片古老的熔岩地上，周圍是一望無際的荒原。教堂外牆塗成淡黃白色，屋頂覆蓋著傳統的草皮，既適應了冰島的氣候，又與周圍的自然環境和諧相融。再往西回走，你將被周圍的埃爾德熔岩原（Eldhraun）所震撼。這片熔岩地是多年前火山爆發後留下的遺蹟，它們的形狀各異，有的像波浪，有的像蜂窩，夏季時熔岩地上覆蓋著苔蘚，為這片黑色的大地披上了一層綠色的外衣。而在冬季，這些熔岩地會被覆蓋上白色的雪層。行程最後回到維克小鎮（Vik í Mýrdal），這個位於冰島環島公路1號公路沿線，靠近著名的黑沙灘和米達爾斯冰川（Myrdalsjökull），有多家飯店、民宿、餐廳和咖啡館，小巧而充滿活力。還記得那個測視力的紅頂小教堂嗎？沒錯，它就坐落在這裡。",
      highlights: icelandGroupWinter5Day3Highlights,
      optionalActivities: icelandGroupWinter5Day3OptionalActivities,
    },
    {
      day: 4,
      title: "黃金圈：辛格維利爾國家公園、間歇泉、黃金瀑布",
      accommodation: "雷克雅未克",
      description:
        "今天您會到達被列為聯合國教科文組織世界遺產的辛格維利爾國家公園（Þingvellir National Park）。辛格維利爾國家公園也是歐亞和北美構造板塊交界地，您可以體驗同時站在兩大板塊上的神奇感受，打卡拍照。您會來到著名的明信片取景地：蓋歇爾間歇泉（The Great Geysir），也被稱為大間歇泉。由於它名聲在外，也逐漸成為了這一獨特自然現象的代名詞。不過如今大間歇泉幾乎不再噴發，其旁邊的史托克（Strokkur)間歇泉每隔5-10分鐘便會噴出水柱，有的甚至高達數十米，壯觀不已。作為黃金圈的命名來源，黃金瀑布（Gullfoss）同樣頗負盛名，尤為壯闊的黃金瀑布在陽光照射下，時長有彩虹掛於上方，這聲如奔雷的瀑布，給人撲面而來的震撼。凱瑞斯火山口（Kerið Crater）大約3000年前形成於一次劇烈的火山爆發，如今呈現出一個近乎完美的圓形，直徑約270米，深度達到55米。火山口壁由層層疊疊的火山岩構成，它們的色彩從深紅到黝黑，記錄著火山活動的歷史。火山口內部的湖水清澈見底，呈現出一種深邃的藍綠色，彷彿是天神遺落的一塊翡翠。沿著火山口邊緣的小徑漫步，你可以從不同角度欣賞這獨特的地貌，感受大自然的鬼斧神工。",
      highlights: icelandGroupWinter5Day4Highlights,
      optionalActivities: icelandGroupWinter5Day4OptionalActivities,
    },
    {
      day: 5,
      title: "離境日",
      accommodation: "—",
      description:
        "時光總是過得飛快，今天便是您的離境日了，相信這幾天的行程一定讓您收穫滿滿。如果您有剩餘的時間，不妨在雷克雅未克市區逛逛，或是給親朋好友挑選一下伴手禮，或是再品嚐一下冰島美食，在咖啡店小憩，再度體驗濃厚的北歐文化。在離開冰島前，請您記得去機場大廳辦理退稅，期待您下次再來冰島。友情提示：請您提前兩小時抵達機場候機，請您起飛前三個半小時在市區飯店位置等待接機。",
      highlights: icelandGroupWinter5Day5Highlights,
      optionalActivities: icelandGroupWinter5Day5OptionalActivities,
    }
  ],
  inclusions: {
    included: [

    ],
    excluded: [

    ],
  },
  faq: [
    {
      id: "trip",
      title: "行程與跟團",
      items: [
        {
          question: "大樂旅行社旅行的旅行團套餐是什麼？是自營的嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"大樂旅行社旅行的旅行團套餐是我們最熱門的產品。在旅行團套餐中，我們將為您提供線路合理、景點全面的觀光套餐，均包含機場往返首都接送、首都參團接送、冰島本地優選供應商的一日遊與多日遊（含司機兼嚮導）、住宿（含早餐）、獨家客製的中文路書（含各類景點、歷史、文化、自然等資訊描述）、台灣冰島雙時區的中文客服等服務，並提供行程客製服務。\"]",
        },
        {
          question: "什麼是自選報名活動？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"大樂旅行社旅行在每一天的行程下方增加了對應的自選報名活動，您可以根據自己的需求選擇是否自費參加這些額外的活動。\"]",
        },
        {
          question: "預定後多久能收到相關的參團資料？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在您付完定金後的5-7個工作日內（且在參團前），我們會提供行程相關的訂單資訊清單（包含預定飯店資訊等）及簽證輔助材料；在付完全款並提供航班資訊等所有有效資訊後的5-7個工作日內（且在參團前），我們會提供完整的行程路書等。路書包含中文行程單、接送地址、各類景點、歷史、文化、自然等資訊描述。\"]",
        },
        {
          question: "為什麼我只能選擇首都雷克雅未克地區的飯店等級？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為首都雷克雅未克的飯店選擇更多，且行程相對更靈活。而套餐內冰島其他地區的行程中，參團的顧客都是統一行動的，有固定的行程路線和固定的飯店。因此為保障行程的統一性與合理性，並不浪費顧客的遊覽時間，其他地區暫時無法選擇飯店等級，請您體諒。\"]",
        },
        {
          question: "套餐單人間為什麼需要補差價？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為冰島的單人間房價要高於雙人間房價的一半，而預定時的默認房價是按雙人間均攤至每人的價格來計算的。因此套餐內的單人間需要補交一筆差價。由於旅行團套餐系統設定在預定環節僅可以選首都雷克雅未克地區的房間數量，如果需要將套餐中包含的旅行團增加單人間，那麼需要在初始頁面選中1人來查看全程單人間價格，具體細節可諮詢客服。\"]",
        },
        {
          question: "為什麼不是所有飯店都能到飯店門口接團？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"為了維持雷克雅未克市中心舒適安全的城市環境，冰島政府規定旅遊巴士不可隨意進入市中心區域，而必須在附近指定的接車地點接送旅客。\"]",
        },
        {
          question: "在冰島旅行安全嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"冰島是地球上最安全的國家之一。\"]",
        },
        {
          question: "去冰島旅遊需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"雖然比世界上緯度相近的許多地方都要溫暖，但冰島總體上還是一個寒冷的國家，特別是在冬季，平均氣溫在0攝氏度左右，而夏季的平均氣溫約在10-15度。\"]",
        },
        {
          question: "去冰島旅遊需要辦理什麼簽證？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"中國大陸公民前往冰島旅行需要辦理旅遊簽證。冰島屬於申根國家，因此您需要辦理申根簽證。\"]",
        },
        {
          question: "如果天氣原因導致不發團該怎麼辦？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"針對以下三種情況，我們將分別處理您的退款事宜：\"]",
        },
        {
          question: "這個行程的行李額是多少？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"您能夠攜帶上車的行李箱最大尺寸為56 x 45 x 25 cm（大約為22寸行李箱大小）。如果您有其他大件行李，也可以聯繫飯店寄存。\"]",
        }
      ],
    },
    {
      id: "accommodation",
      title: "住宿相關",
      items: [
        {
          question: "為什麼冰島的大床房都是兩張床拼起來的？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島作為旅遊業國家，所有飯店不論是首都還是郊外的雙人間或雙床間幾乎都是同樣的房型和床型。飯店為了保證入住率，大床由兩張床拼接而成，飯店前臺會根據預定的要求將床鋪合併或拆分。\"]",
        }
      ],
    }
  ],
  similarTrips: [
    {
      tripKey: "iceland/group/winter/4",
      title: "4 天 3 夜冰島冬日精簡跟團遊",
      tourCode: "SLMMD-042",
      durationLabel: "4 天／3 夜",
      description:
        "藍冰洞探險與南岸精華，適合時間有限的冬季旅客。",
    },
    {
      tripKey: "iceland/group/winter/6",
      title: "6 天 5 夜冰島冬季跟團遊",
      tourCode: "SLMMD-062",
      durationLabel: "6 天／5 夜",
      description:
        "南岸、黃金圈與斯奈山半島，冬季跟團一次走遍冰島西部精華。",
    },
  ],
};
