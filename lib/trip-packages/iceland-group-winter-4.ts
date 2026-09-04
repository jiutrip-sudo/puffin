import type { TripPackage } from "./types";
import {
  icelandGroupWinter4Day1Highlights,
  icelandGroupWinter4Day1OptionalActivities,
} from "./iceland-group-winter-4-day1-cards";
import {
  icelandGroupWinter4Day2Highlights,
  icelandGroupWinter4Day2OptionalActivities,
  icelandGroupWinter4Day3Highlights,
  icelandGroupWinter4Day3OptionalActivities,
  icelandGroupWinter4Day4Highlights,
  icelandGroupWinter4Day4OptionalActivities,
} from "./iceland-group-winter-4-days2-4-cards";

export const icelandGroupWinter4: TripPackage = {
  id: "iceland-group-winter-4",
  tripKey: "iceland/group/winter/4",
  slug: "iceland-4-days-express-winter-package-south-coast-ice-cave",
  tourCode: "SMD-042",
  title: "4 天 3 夜冰島冬日精簡跟團遊",
  subtitle: "藍冰洞探險 & 南岸風光",
  duration: { days: 4, nights: 3 },
  season: { label: "冬季", months: "11 月–4 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-042",
  },
  eyebrow: "冰島集合 · 跟團 · 冬季",
  backHref: "/trips/iceland/group/winter",
  backLabel: "返回冬季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/1_1_cd1cf553bf.jpg",
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
      "這個冬季 4 日跟團套餐濃縮南岸精華，兩日品質小巴團造訪瀑布、黑沙灘、冰河湖與藍冰洞，並有機會看見北極光。行程顧及冬季日照短，由專業嚮導依天候調整節奏。",
    full: `這個冬季 4 日跟團套餐濃縮南岸精華，兩日品質小巴團造訪塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）、鑽石沙灘（Diamond Beach）與藍冰洞（Blue Ice Cave），並有機會看見北極光。套餐含凱夫拉維克機場至市區大巴接送與專業嚮導帶領，充分顧及冬季日照短、天候變化快的特性，行程安排務實。

南岸一號公路串連冰島最具代表性的冬日風景；藍冰洞探險為行程亮點，由嚮導陪同並提供安全裝備。入境日可選擇 Sky Lagoon 溫泉放鬆，為後續南岸行程儲備體力。極光季節若天候許可，嚮導將帶領團員遠離光害處追尋極光。`,
  },
  gallery: [
    {
      id: "1_1_cd1cf553bf",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/1_1_cd1cf553bf.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "3_H6_A4188_a22dd3c024",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/3_H6_A4188_a22dd3c024.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "reynisfjara_beach_7d9152",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara_beach_7d915298d6.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "3_015d0a6dc8",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/3_015d0a6dc8.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "vik1_39585849fc",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/vik1_39585849fc.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    }
  ],
  highlights: [
    "冰島南岸熱門景點一網打盡",
    "體驗 Sky Lagoon 天空之境溫泉",
    "一覽冰島南岸斯科加瀑布全景",
    "在黑沙灘感受大西洋澎湃之力",
    "欣賞冰島最浪漫的鑽石沙灘",
    "專業冰洞探險嚮導和行程中的安全裝備提供",
  ],
  attractions: [
    {
      name: "雷克雅維克",
      nameEn: "Reykjavík",
      region: "雷克雅維克",
      subtitle: "城市、雪山、酒吧、溫泉、北極光，這裡應有盡有。",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Reykjavik_bathed_in_sunset_2b179f83fe.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Reykjavik_bathed_in_sunset_2b179f83fe.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reykjavik1_839e01ff5d.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reykjavik_cityscape_in_iceland_158525984_5c1182144cedfd00018fbb38_7f469e1459.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Reykjavik_d71a13c273.jpg",
      ],
      paragraphs: [
        "雷克雅維克（Reykjavík）是冰島共和國的首都，冰島第一大城市。這裡一面臨海，雙面環山，是一個充滿活力和文化氛圍的城市，融合著現代都市生活與自然美景。位於冰島西南海岸的雷克雅維克，也是世界上最北的主權國家首都。市區人口約為13萬，整個大都會區人口超過23萬，是冰島經濟、政治和文化生活的中心。",
        "雷克雅維克的歷史可以追溯到9世紀，當時由Ingólfr Arnarson帶領的諾斯人定居者建立了第一個永久性定居點。雷克雅維克這個名字在冰島語中意為“煙霧灣”，指的是當地的溫泉蒸汽。如今，雷克雅維克以其清潔、綠色和安全的環境而聞名，在全球生活品質指數中始終排名靠前。市區範圍內，擁有多個帶有溫泉池的公共泳池，以及唯一的精品溫泉Sky Lagoon。",
        "雷克雅維克緊湊的市中心充滿了各種景點。最具標誌性的地標之一是哈爾格林姆斯教堂（Hallgrímskirkja），這座高聳的教堂從觀景塔上可以俯瞰城市全景。其建築靈感來自冰島的玄武岩熔岩壁，既引人注目又象徵著城市的創新精神。坐落在海岸線上的哈帕音樂廳（Harpa），其玻璃外牆反射著海洋和天空，是另一座現代建築奇觀，也是大型文化活動的中心，包括音樂會、展覽和節日活動等等。",
        "藝術和文化是雷克雅維克身份的重要組成部分。城市擁有眾多博物館、畫廊和劇院。冰島國家美術館和雷克雅維克藝術博物館為藝術愛好者提供了欣賞當代藝術的平台。街頭藝術和壁畫裝飾了許多建築，為城市增添了生機。雷克雅維克還有多個年度節日，如雷克雅維克藝術節、冰島Airwaves音樂節和冬季燈光節，吸引了大量國際旅客，展示了城市的活力文化景觀。",
        "在雷克雅維克，自然同樣近在咫尺。城市坐落在Faxaflói峽灣，有著壯麗的海岸景色，旅客可以輕鬆地從舊港踏上出海觀鯨、觀海鸚以及海釣之旅。僅需很短的距離，旅客便可探索黃金圈，線路包括辛格維利爾國家公園、蓋錫爾間歇泉地帶和壯觀的黃金瀑布三大冰島最熱門旅遊景點。城市本身也擁有眾多公園和綠地，如Laugardalur公園、植物園、動物園以及各種運動公園。",
        "雷克雅維克的美食場景多種多樣且富有創新，反映了傳統的冰島菜餚和國際風味的融合。新鮮的海鮮、羊肉和乳製品在當地菜餚中佔據重要位置，而眾多餐館和咖啡館提供從米其林Fine Dining到休閒街頭小吃的各種選擇。城市的夜生活同樣充滿活力，擁有各種酒吧、俱樂部和現場音樂演出，特別是在週末生機勃勃。",
        "可持續發展和創新是雷克雅維克發展的關鍵。這裡是全球可再生能源城市模型的先驅，幾乎所有的電力和供暖需求都由地熱和水電滿足。這種可持續性也在城市的公共交通系統、自行車道和眾多綠色倡議中得到了體現。",
        "雷克雅維克完美地融合了過去與現在，提供了豐富的城市文化生活和自然美景。無論您是想享受便利的都市生活、探索充滿活力的藝術場景，還是深入冰島令人驚歎的自然風光，雷克雅維克作為您到達冰島的第一站，一定能為您帶來難忘的體驗。",
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
        "斯科加瀑布一年四季都十分壯觀，高達60米的水幕令人印象深刻，走近水幕，旅客會被籠罩在水花、雲霧和巨大的聲響之中。由於瀑布持續噴出大量水花，在晴朗的日子裡，通常可以看到一道或兩道彩虹。如果您願意攀登500多級階梯到達瀑布頂端的平台，您將欣賞到冰島南部海岸線的壯麗景色，這裡也是著名的Fimmvorduhals健行路線的起點。",
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
        "黑沙灘（Reynisfjara Black Sand Beach，音譯為雷尼斯黑沙灘）因其位於維克（Vík í Mýrdal）附近而得名。沙灘位於冰島南岸的環島1號公路沿線，交通便捷，是冰島最著名的海灘之一。火山噴發形成的黝黑色砂石千百年來受到北大西洋的海浪拍打，每年有無數旅客被其魔幻、深邃又略顯恐怖的奇異景色而折服。",
        "讓黑沙灘從冰島眾多海灘中脫穎而出的，不僅是自古以來火山爆發後巖漿遇到海水迅速冷卻而形成的黝黑砂石，還有這片沙灘所能捕獲的風景。漫步於黑沙灘之上，可以眺望不遠處的雷尼斯岩（Reynisdrangar）。據說這些怪異的海柱是石化的巨魔，也有人堅信它們實際上曾經是海岸線懸崖的一部分，在其他部分被海水沖垮後依然屹立不倒。無論哪種說法能打動你，它們都賦予了黑沙灘一道獨特壯觀的風景線。",
        "黑沙灘還有兩個著名的玄武岩柱景觀：加達爾懸崖（Gardar cliff）和Hálsanefshellir洞穴，它們像風琴管一樣駐守在暗黑色的灘原上。這些八角玄武岩柱是火山熔岩突然冷卻後形成的，石柱的高度不一，有的只有半米，有的則高達 20 米。夏季，加達爾懸崖還是成千上萬只海鸚和北極燕鷗等野生鳥類的棲息地。從海岸邊還可以看到迪霍拉里（Dyrhólaey）的拱門在大西洋上若隱若現的美妙景色。",
        "最後，也是最重要的一點，在黑沙灘遊玩時，切記注意安全！",
        "目前，為了保障旅客的生命安全，黑沙灘根據具體情況劃分了不同區域，並設置了相應的燈光。當黃燈和紅燈亮起時，旅客均不得進入相應顏色的區域。不必擔心，在安全的距離內，您完全可以看到同樣壯觀的景色。請注意，黑沙灘是沒有救生員或其他有人值守的，因此，請不要冒險靠近大海，為您的生命負責。",
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
        "傑古沙龍冰河湖（Jökulsárlón）是瓦特納冰川（Vatnajökull）南部出口冰川Breiðamerkurjökull冰川的一片瀉湖，靠近冰島1號環島公路，距離雷克雅維克約370公里，是冰島最偉大的自然奇觀之一。",
        "冰河湖的歷史不久，大約在20世紀30年代形成，氣候變暖是其主要成因。巨大的冰塊不斷從Breiðamerkurjökull冰川上斷裂掉落，漂浮在湖面上。湖面不寬，但深達250米，是冰島最深的湖泊。",
        "傑古沙龍冰河湖被《孤獨星球》列為此生必去景點之一。",
        "從水上遊覽傑古沙龍冰河湖是最有趣且壯觀的方式。許多人喜歡乘船遊覽，因為這樣既能欣賞冰川湖，又能穿梭在冰山之間航行。有兩種船型——水陸兩棲船或衝鋒艇——可供選擇。其中最為熱門的選項就是傑古沙龍冰河湖水陸兩棲船遊。如果您想要更加沉浸式的體驗，那麼可以試試獨木舟項目，親手划船穿越鏡面般的水域，欣賞其充滿藍白色調的超現實環境。",
        "眾多流行文化的名篇曾在傑古沙龍冰河湖留下印跡，《007之雷霆殺機》和《007之擇日而亡》的動作場面在這裡攝製，《勞拉：古墓麗影》《蝙蝠俠：俠影之謎》以及綜藝《極速前進》等諸多頂級的製作都曾在此取景拍攝。",
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
        "冰島以黑沙灘聞名於世，而鑽石海灘也當然不是冰島唯一的黑色海灘，其中最有名的黑沙灘之一當屬位於維克（Vík í Mýrdal）附近的黑沙灘（Reynisfjara）。這些黑沙灘的形成得歸因於冰島的火山地貌。當火山熔岩與冰冷的海水接觸後迅速冷卻形成玄武岩，隨著時間的推移，碎裂的玄武岩變得越來越小，最終變成了沙子。",
        "全年的任何時候都適合造訪鑽石海灘。夏季陽光充足，日照時間長，交通也較為便利安全；沙灘上的冰塊來自冰川，夏季也不會融化，反而在陽光下更加耀眼。冬季北大西洋海面氣勢磅礡，海浪拍打黑色沙灘，景色更為壯觀；金色日落也讓白天格外上鏡。幸運的話，還有機會在鑽石海灘上看見北極光。冬季造訪請務必穿暖，並與海浪保持安全距離。",
      ],
    },
    {
      name: "維克",
      nameEn: "Vík í Mýrdal",
      region: "冰島南部",
      subtitle: "連接雷克雅維克與南岸的樞紐小鎮",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/vik1_39585849fc.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/vik1_39585849fc.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/vik2_5c8ab4b497.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/vik3_a117bb10f1.jpg",
      ],
      paragraphs: [
        "南岸樞紐維克小鎮",
        "維克（Vík í Mýrdal）位於冰島南岸中部，隸屬於卡特拉火山（Katla）以南的Mýrdalshreppur市，在連接冰島東西兩側方面發揮著重要作用。這裡寧靜祥和，風景優美，固定人口約300人，是方圓 50 多公里內唯一的集中居民區。",
        "維克是當地重要的零售中心和旅遊業服務中心，雖然相比首都區域，這裡的物資供應有限且價格昂貴，但這也是周圍唯一擁有各種公共服務設施的城鎮，有超市、酒吧、餐廳、咖啡館、公共泳池和加油站等一系列設施。維克飯店也較為集中，成為了冰島南部路線上的固定歇腳點。",
        "維克不僅提供了“充電站”的功能，這裡本身也有著吸引力十足的旅遊資源：比如標誌性的維克教堂和全國僅有兩家的熔岩秀（Lava Show），通過將真正的熔岩加熱至 1100攝氏，再將其灌入展廳，再現火山爆發的場景。從維克出發前往著名的黑沙灘（Reynisfjara ）、迪霍拉里（Dyrhólaey）以及雷尼斯岩（Reynisdrangar）都十分方便。",
        "維克周邊地區冰川遍佈，因此有眾多有趣驚險的戶外活動可供旅客選擇，是名副其實的戶外探險勝地：",
        "米達爾斯冰原（Mýrdalsjökull）為旅客提供瞭如冰川健行、冰河湖湖獨木舟等活動；在卡特拉火山附近，您有機會體驗冰島獨一份的夏日冰洞探險以及雪地摩托的瘋狂駕駛感；在索爾黑馬黑沙灘（Sólheimasandur）上駕駛全地形車（ATV）；在峽谷中乘坐峽谷滑索或是乘坐滑翔傘“飛翔”在空中，一定會讓您的腎上腺素飆升。對於那些不喜歡過於刺激的項目的旅客，這附近也有許多的靜謐的健行路線，維克的郊區還有一個風景優美的高爾夫球場。",
        "維克教堂是維克最具標誌性的地標建築，這座紅頂教堂於1934年竣工，是新人舉辦婚禮的絕佳場所，而且由於小鎮靠近卡特拉火山，如果火山爆發或發生危險，地勢較高的教堂就成為了鎮民的撤離點。",
      ],
    },
  ],
  routeOverviewSubtitle: "南岸冬季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸一號公路 → 塞里雅蘭／斯科加瀑布 → 黑沙灘 → 維克" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞探險 → 返回雷克雅維克" },
    { label: "第 4 天", detail: "雷克雅維克 → 機場離境" }
  ],
  routeMap: {
    waypoints: [
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 1 天",
        detail: "雷克雅維克（入境、機場接送）",
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
        lng: -21.9426,
        lat: 64.1466,
        label: "第 4 天",
        detail: "雷克雅維克 → 機場離境",
      },
    ],
  },
  itinerary: [
    {
      day: 1,
      title: "入境日：雷克雅維克&舒適溫泉",
      accommodation: "雷克雅維克",
      description:
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n若班機抵達時間較早，可選擇前往 Sky Lagoon 天空之境溫泉放鬆身心，在無邊泳池中眺望海景，體驗冰島地熱溫泉文化。晚間抵達者可在市區用餐後早些休息，為次日南岸品質小巴團儲備體力。",
      highlights: icelandGroupWinter4Day1Highlights,
      optionalActivities: icelandGroupWinter4Day1OptionalActivities,
    },
    {
      day: 2,
      title: "塞里雅蘭瀑布、斯科加瀑布、黑沙灘",
      accommodation: "南岸",
      description:
        "今日搭乘品質小巴團沿南岸一號公路南下。冬季南岸色調獨特：白雪覆蓋大地、天際染上粉霞。\n\n首先造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；冬季基於安全考量，塞里雅蘭瀑布後方小徑通常封閉。斯科加瀑布水量充沛，晴朗時常可見彩虹。繼續前往黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中；途中經過維克（Vík）。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店，天候許可時可遠離光源追尋極光。",
      highlights: icelandGroupWinter4Day2Highlights,
      optionalActivities: icelandGroupWinter4Day2OptionalActivities,
    },
    {
      day: 3,
      title: "傑古沙龍冰河湖、鑽石沙灘、藍冰洞探險",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園。傑古沙龍冰河湖（Jökulsárlón）上漂浮著來自 Breiðamerkurjökull 冰舌的冰山，遠處瓦特納冰川（Vatnajökull）若隱若現；對岸的鑽石沙灘（Diamond Beach）上，浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外震撼。\n\n行程亮點為藍冰洞（Blue Ice Cave）探險：在專業嚮導帶領下穿戴安全裝備，進入冰川內部欣賞深邃冰藍世界。結束後返回雷克雅維克住宿。冬季日照短，實際停留時間將由嚮導依天候與路況調整。",
      highlights: icelandGroupWinter4Day3Highlights,
      optionalActivities: icelandGroupWinter4Day3OptionalActivities,
    },
    {
      day: 4,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續。\n\n若仍有餘裕，可在市區漫步：托寧湖（Tjörnin）、哈帕音樂廳（Harpa）與博物館都是不錯的選擇。入境日未造訪溫泉者，亦可選擇前往藍湖溫泉（Blue Lagoon）結束旅程。",
      highlights: icelandGroupWinter4Day4Highlights,
      optionalActivities: icelandGroupWinter4Day4OptionalActivities,
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
          question: "帕芬假期旅行的旅行團套餐是什麼？是自營的嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行的旅行團套餐是我們最熱門的產品。在旅行團套餐中，我們將為您提供線路合理、景點全面的觀光套餐，均包含機場往返首都接送、首都參團接送、冰島本地優選供應商的一日遊與多日遊（含司機兼嚮導）、住宿（含早餐）、獨家客製的中文行程手冊（含各類景點、歷史、文化、自然等資訊描述）、台灣冰島雙時區的中文客服等服務，並提供行程客製服務。\"]",
        },
        {
          question: "預定後多久能收到相關的參團資料？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在您付完定金後的5-7個工作日內（且在參團前），我們會提供行程相關的訂單資訊清單（包含預定飯店資訊等）及簽證輔助材料；在付完全款並提供航班資訊等所有有效資訊後的5-7個工作日內（且在參團前），我們會提供完整的行程手冊等。行程手冊包含中文行程單、接送地址、各類景點、歷史、文化、自然等資訊描述。\"]",
        },
        {
          question: "什麼是自選報名活動？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行在每一天的行程下方增加了對應的自選報名活動，您可以根據自己的需求選擇是否自費參加這些額外的活動。\"]",
        },
        {
          question: "為什麼我只能選擇首都雷克雅維克地區的飯店等級？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為首都雷克雅維克的飯店選擇更多，且行程相對更靈活。而套餐內冰島其他地區的行程中，參團的顧客都是統一行動的，有固定的行程路線和固定的飯店。因此為保障行程的統一性與合理性，並不浪費顧客的遊覽時間，其他地區暫時無法選擇飯店等級，請您體諒。\"]",
        },
        {
          question: "套餐單人間為什麼需要補差價？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為冰島的單人間房價要高於雙人間房價的一半，而預定時的默認房價是按雙人間均攤至每人的價格來計算的。因此套餐內的單人間需要補交一筆差價。由於旅行團套餐系統設定在預定環節僅可以選首都雷克雅維克地區的房間數量，如果需要將套餐中包含的旅行團增加單人間，那麼需要在初始頁面選中1人來查看全程單人間價格，具體細節可諮詢客服。\"]",
        },
        {
          question: "為什麼不是所有飯店都能到飯店門口接團？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"為了維持雷克雅維克市中心舒適安全的城市環境，冰島政府規定旅遊巴士不可隨意進入市中心區域，而必須在附近指定的接車地點接送旅客。\"]",
        },
        {
          question: "冰島值得去嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這個問題可能不同的人有不同的答案。但是作為一個專注於冰島旅行的團隊，以及作為一群熱愛自然、熱愛美好的個體來說：\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"是的！冰島太值得了！\"]",
        },
        {
          question: "冰島哪個季節最適合旅遊？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這個問題要取決於您的旅行計劃和安排，對於想體驗不同景觀和項目的旅客來說，答案也會有所不同：\"]",
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
          question: "在冰島旅遊需要嚮導嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島固然以其神奇且的自然景觀而聞名於世，但是同樣不可忽視的是冰島的歷史、文化以及地理資訊。\"]",
        },
        {
          question: "如果天氣原因導致不發團該怎麼辦？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"針對以下三種情況，我們將分別處理您的退款事宜：\"]",
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
      tripKey: "iceland/group/winter/5",
      title: "5 天 4 夜冰島冬季超值跟團遊",
      tourCode: "SMD-052",
      durationLabel: "5 天／4 夜",
      description:
        "南岸、冰河湖與黃金圈，冬季跟團一次收齊冰島精華。",
    },
  ],
};
