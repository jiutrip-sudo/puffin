import type { TripPackage } from "./types";
import {
  icelandSelfDriveSummer6Day1Highlights,
  icelandSelfDriveSummer6Day1OptionalActivities,
} from "./iceland-self-drive-summer-6-day1-cards";
import {
  icelandSelfDriveSummer6Day2Highlights,
  icelandSelfDriveSummer6Day2OptionalActivities,
  icelandSelfDriveSummer6Day3Highlights,
  icelandSelfDriveSummer6Day3OptionalActivities,
  icelandSelfDriveSummer6Day4Highlights,
  icelandSelfDriveSummer6Day4OptionalActivities,
  icelandSelfDriveSummer6Day5Highlights,
  icelandSelfDriveSummer6Day5OptionalActivities,
  icelandSelfDriveSummer6Day6Highlights,
  icelandSelfDriveSummer6Day6OptionalActivities,
} from "./iceland-self-drive-summer-6-days2-6-cards";

export const icelandSelfDriveSummer6: TripPackage = {
  id: "iceland-self-drive-summer-6",
  tripKey: "iceland/self-drive/summer/6",
  slug: "6-days-south-coast-and-golden-circle-summer-self-drive-tour",
  tourCode: "SLMSD-061",
  title: "6 天 5 夜冰島夏季精選自駕遊",
  subtitle: "南岸風光 & 傑古沙龍冰河湖",
  duration: { days: 6, nights: 5 },
  season: { label: "夏季", months: "4 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "自駕",
    tourCode: "SLMSD-061",
  },
  eyebrow: "冰島集合 · 自駕 · 夏季",
  backHref: "/trips/iceland/self-drive/summer",
  backLabel: "返回夏季自駕",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/_b6fee84594.jpg",
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
      description: "豐富冰島自駕服務經驗",
    },
    {
      id: "local",
      title: "本地優選供應商",
      description: "直連冰島合規車行與住宿",
    },
  ],
  intro: {
    summary:
      "這個 6 天 5 夜冰島夏季精選自駕遊涵蓋南岸精華、黃金圈與斯奈山半島，在充足日照下盡覽冰島西南部經典風光。行程充分顧及夏季路況與長日照，節奏適中、安排務實。",
    full: `這個 6 天 5 夜冰島夏季精選自駕遊涵蓋南岸精華、黃金圈與斯奈山半島，在充足日照下盡覽冰島西南部經典風光。套餐充分顧及夏季日照時數與路況，行程安排合理、節奏適中，讓您既能盡覽經典，也能細細感受夏日風貌。

行程涵蓋黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）；南岸則有黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）等代表性風景；第五日更將探索被譽為「冰島縮影」的斯奈山半島。夏季亦可另行加購冰川徒步、冰河湖船遊或地熱溫泉體驗；盛夏時分，日照可延續至深夜，別忘了留意午夜太陽下的暮色風光。

完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，沿途景點、人文、歷史與自然皆有詳盡說明，讓您輕鬆盡享冰島夏季精華。不論是在藍湖溫泉中放鬆身心，或是在黑沙灘聆聽海浪聲，都將留下獨一無二的回憶。`,
  },
  gallery: [
    {
      id: "_b6fee84594",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/_b6fee84594.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "Seljalandsfoss_9def270af",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Seljalandsfoss_9def270af0.avif",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "DJI_0443_30e25d42d6",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/DJI_0443_30e25d42d6.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    }
  ],
  highlights: [
    "全程由您掌控方向盤並設定自己的旅行節奏",
    "沿著經典的環島1號公路啟程",
    "參觀著名的黃金圈三大景點",
    "探索冰島南岸瀑布、黑沙灘、飛機殘骸",
    "遨遊傑古沙龍冰河湖，欣賞鑽石沙灘的魅力",
    "打卡西部秀美的熔岩瀑布和兒童瀑布",
    "探索小眾羽毛峽谷，拜訪最南端小鎮維克",
    "擁有充足的時間漫遊首都雷克雅維克",
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
        "在雷克雅維克，自然同樣近在咫尺。城市坐落在Faxaflói峽灣，有著壯麗的海岸景色，旅客可以輕鬆地從舊港踏上出海觀鯨、觀海鸚以及海釣之旅。僅需很短的距離，旅客便可探索黃金圈，線路包括辛格維利爾國家公園、間歇泉和壯觀的黃金瀑布三大冰島最熱門旅遊景點。城市本身也擁有眾多公園和綠地，如Laugardalur公園、植物園、動物園以及各種運動公園。",
        "雷克雅維克的美食場景多種多樣且富有創新，反映了傳統的冰島菜餚和國際風味的融合。新鮮的海鮮、羊肉和乳製品在當地菜餚中佔據重要位置，而眾多餐館和咖啡館提供從米其林Fine Dining到休閒街頭小吃的各種選擇。城市的夜生活同樣充滿活力，擁有各種酒吧、俱樂部和現場音樂演出，特別是在週末生機勃勃。",
        "可持續發展和創新是雷克雅維克發展的關鍵。這裡是全球可再生能源城市模型的先驅，幾乎所有的電力和供暖需求都由地熱和水電滿足。這種可持續性也在城市的公共交通系統、自行車道和眾多綠色倡議中得到了體現。",
        "雷克雅維克完美地融合了過去與現在，提供了豐富的城市文化生活和自然美景。無論您是想享受便利的都市生活、探索充滿活力的藝術場景，還是深入冰島令人驚歎的自然風光，雷克雅維克作為您到達冰島的第一站，一定能為您帶來難忘的體驗。",
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
      name: "教堂鎮",
      nameEn: "Kirkjubæjarklaustur",
      region: "冰島南部",
      subtitle: "在教堂鎮親歷冰島的歷史文化，並感受獨特的人文氛圍",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/DJI_0443_30e25d42d6.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/DJI_0443_30e25d42d6.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Kirkjubaejarklaustur1_59009a9dce.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Kirkjubaejarklaustur2_4bb321bbab.jpg",
      ],
      paragraphs: [
        "感受超過九百年曆史的冰島小鎮",
        "教堂鎮（Kirkjubæjarklaustur）是隸屬於斯卡夫塔雷普爾市（Skaftárhreppur）的小鎮，常住人口約150人，位於冰島南部、瓦特納冰川（Vatnajökull）的西南側，是冰島環島1號公路上的重要一站，也是前往傑古沙龍冰河湖（Jökulsárlón）的必經之地。教堂鎮以其悠久豐富的歷史和周邊集聚的景點而聞名，是冰島南部環島旅行中不容錯過的停留地。",
        "教堂鎮的歷史可以追溯到12世紀，其名稱在冰島語中可以被拆分為三個單詞，分別是“教堂”、“莊園”和“修道院“。在中世紀，這裡有一座本篤會修道院，現在依然可以參觀其遺址。鎮上還保存著古老的教堂建築，讓人們領略到歷史的厚重感。鎮上的服務與設施齊全，與所有冰島城鎮和村莊一樣，也設有一個帶熱水浴缸的游泳池。",
        "教堂鎮上有不少小眾景點，包括Stjórnarfoss瀑布和姐妹瀑布（Systrafoss），以及特別的教堂地磚（Kirkjugólf），其實是地下的玄武岩柱，經過風浪的侵蝕和塑造，只有頂部顯露在地面之上，看上去就像鋪砌的教堂地板一樣。其周邊地區更是分佈著大大小小、或著名或小眾的旅遊地，例如羽毛峽谷（Fjaðrárgljúfur）、拉基火山（Laki）、矮人岩石（Dverghamrar）等。是旅客選擇在冰島南部環島時停車休整的不錯選擇。",
        "我們強烈推薦下榻位於小鎮東側3公里處的magma飯店",
      ],
    },
    {
      name: "迪霍拉里",
      nameEn: "Dyrhólaey",
      region: "冰島南部",
      subtitle: "在迪霍拉里盡收冰島南岸美景，近距離與海鸚say hi！",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Dyrholaey1_38349f5b51.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Dyrholaey1_38349f5b51.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Dyrholaey2_d75d7fa72b.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Dyrholaey3_559b79fe53.jpg",
      ],
      paragraphs: [
        "屹立在冰島最南端的雄偉海角",
        "迪霍拉里（Dyrhólaey）是位於冰島大陸最南端的岬角，距離維克鎮（Vík í Mýrdal）和黑沙灘（Reynisfjara）不到20分鐘車程，成為了冰島南部1號公路自駕旅客的必去之處。海角海拔為120米，古老且造型特別的迪霍拉里燈塔坐落在海角地形的頂端，面向大海。在海角延伸之處有一個巨大的黑色岩石拱門矗立在海中，海角因此得名（其冰島名直譯為“門洞島”），海鸚和絨鴨也在此安家。",
        "迪霍拉里被認為是因為冰川時期晚期的一次水下火山噴發形成的，從前被水手們稱為雷尼斯岩（Reynisdrangar），西面則是一望無際的黑色沙灘海岸線。",
        "自1978年起，迪霍拉里成為了自然保護區。因為這裡有豐富的野生動物資源，尤其是海鸚（puffin）和絨鴨。這裡也是冰島觀賞海鸚的最可靠和最便捷的地方，這些呆萌的“玩具小鳥”每年5-9月在此棲息，即使在夏季的暴風雨中，它們也會在懸崖頂上嬉戲。",
        "迪霍拉里燈塔造型奇特，依照城堡而建，現在看到的這座燈塔於 1927 年建成，遠眺岩石拱門和狂野的大西洋。燈塔每隔 10 秒發出一束白光，為海岸附近的航運船隻提供指引。",
        "旅客在迪霍拉里遊玩時，特別需要注意安全問題。",
      ],
    },
    {
      name: "羽毛峽谷",
      nameEn: "Fjaðrárgljúfur",
      region: "冰島南部",
      subtitle: "來世界最美峽谷感受大自然的鬼斧神工",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Fjadrargljufur1_1391949e75.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Fjadrargljufur1_1391949e75.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Fjadrargljufur2_026e6e2dcc.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Fjadrargljufur3_2155e6b135.jpg",
      ],
      paragraphs: [
        "被河流雕刻而成的蜿蜒峽谷",
        "羽毛峽谷（Fjaðrárgljúfur）是一個形成於九千年前的巨大峽谷，位於冰島南岸環島1號公路旁，處在埃爾德熔岩原（Eldhraun）和教堂鎮（Kirkjubæjarklaustur）之間。峽谷深約 100 米，長約2公里，壁立千仞，蜿蜒狹窄。峽谷基岩大多是冰河時期寒冷時期形成的橙玄玻璃巖，據推測已有兩百萬年的歷史。",
        "羽毛峽谷從前是一個被低估的小眾景點，在賈斯汀·比伯的MV之後才逐漸有了名氣。它的特別之處在於其陡峭、彎曲和折轉的巖壁，到處都是不規則的岩石斜面和凸起，點綴著柔軟的青草和苔蘚。在峽谷深處，一條靜靜流淌的河流蜿蜒流向大海。這些地貌形成了夢幻般的景象，讓人難以用語言來形容。",
        "羽毛峽谷徒步有兩條線路，分別是從峽谷頂部以及峽谷下方。從停車場開始，有一條有標記的小路通向峽谷頂部的峽谷觀景點，那裡是俯瞰峽谷壯麗景色最佳的地點。這條路相對容易、好走，而另一條從峽谷下方的徒步線路則更加冒險，您需要蹚過淺淺卻異常冰冷的河水，最好穿上溯溪鞋、登山杖等專業徒步的工具。",
        "美麗的羽毛峽谷在四季呈現出的景色截然不同。冬夏無疑是這裡最熱鬧的季節，夏天滿眼的綠色植被和泛著金色陽光的河流讓人流連忘返，而冬季白雪皚皚覆蓋著蜿蜒曲折的峽谷，河水的藍色深邃冷酷。春秋兩季，你會看到植被與苔蘚呈現處棕褐色的景象，另外，由於強降水原因，羽毛峽谷的路面會變得泥濘溼滑，許多旅客會為了避免弄髒鞋子衣服而離開標記的路線。一方面這是非常危險的行為，另一方面這會對植被造成嚴重的破壞。",
      ],
    },
    {
      name: "維克鎮",
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
        "維克鎮（Vík í Mýrdal）位於冰島南岸中部，隸屬於卡特拉火山（Katla）以南的Mýrdalshreppur市，在連接冰島東西兩側方面發揮著重要作用。這裡寧靜祥和，風景優美，固定人口約300人，是方圓 50 多公里內唯一的集中居民區。",
        "維克鎮是當地重要的零售中心和旅遊業服務中心，雖然相比首都區域，這裡的物資供應有限且價格昂貴，但這也是周圍唯一擁有各種公共服務設施的城鎮，有超市、酒吧、餐廳、咖啡館、公共泳池和加油站等一系列設施。維克鎮飯店也較為集中，成為了冰島南部路線上的固定歇腳點。",
        "維克鎮不僅提供了“充電站”的功能，這裡本身也有著吸引力十足的旅遊資源：比如標誌性的維克教堂和全國僅有兩家的熔岩秀（Lava Show），通過將真正的熔岩加熱至 1100攝氏度，再將其灌入展廳，再現火山爆發的場景。從維克鎮出發前往著名的維克黑沙灘（Reynisfjara ）、迪霍拉里（Dyrhólaey）以及雷尼斯岩（Reynisdrangar）都十分方便。",
        "維克鎮周邊地區冰川遍佈，因此有眾多有趣驚險的戶外活動可供旅客選擇，是名副其實的戶外探險勝地：",
        "米達爾斯冰原（Mýrdalsjökull）為旅客提供瞭如冰川徒步、冰河湖湖皮划艇等活動；在卡特拉火山附近，您有機會體驗冰島獨一份的夏日冰洞探險以及雪地摩托的瘋狂駕駛感；在索爾黑馬黑沙灘（Sólheimasandur）上駕駛全地形車（ATV）；在峽谷中乘坐峽谷滑索或是乘坐滑翔傘“飛翔”在空中，一定會讓您的腎上腺素飆升。對於那些不喜歡過於刺激的項目的旅客，這附近也有許多的靜謐的徒步路線，維克鎮的郊區還有一個風景優美的高爾夫球場。",
        "維克教堂是維克鎮最具標誌性的地標建築，這座紅頂教堂於1934年竣工，是新人舉辦婚禮的絕佳場所，而且由於小鎮靠近卡特拉火山，如果火山爆發或發生危險，地勢較高的教堂就成為了鎮民的撤離點。",
      ],
    },
    {
      name: "熔岩瀑布",
      nameEn: "Hraunfossar",
      region: "冰島西部",
      subtitle: "冰島西部熔岩地上冒出的壯觀瀑布群，您一定不想錯過。",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/3_H6_A7791_4395de2b82.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/3_H6_A7791_4395de2b82.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/hraunfossar1_f201d71a46.webp",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/hraunfossar2_456cb6e815.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/DJI_0927_b298ae6a19.jpg",
      ],
      paragraphs: [
        "上百條溪流匯聚而成的流水飛瀑",
        "赫倫瀑布（Hraunfossar）又名熔岩瀑布，是一處位於冰島西部雷克霍特（Reykholt）附近的美麗而獨特的瀑布群，距離首都雷克雅維克約122公里，僅需1小時40分鐘的車程即可到達。",
        "就算在冰島這樣一個遍佈瀑布的國家，赫倫瀑布也憑藉其獨特的風景而成為了最有名的瀑布之一。赫倫瀑布並非像其他瀑布一樣，由一條河流流過懸崖而形成，而是上百條小溪流經這裡共同聚成了這一壯觀雄奇的水幕景觀。",
        "旅客們都說，瀑布的水似乎是從熔岩地底中生生冒出來的。然而實際上，赫倫瀑布與和它相鄰的兒童瀑布（Barnafossar）都是來自赫維塔河，這條冰川河發源自冰島西部的Hallmundarhraun熔岩原。",
        "在停車場旁的觀景臺上，旅客可以俯瞰赫倫瀑布、附近的兒童瀑布以及赫維塔河。當地人在1891年修建了一座橫跨河流的人行橋，並在整整一個世紀後對其進行了翻新。此外，還有一條徒步小徑可以從赫倫瀑布通往兒童瀑布。",
        "兒童瀑布相比於赫倫瀑布更加狹窄，也更加湍急，兒童瀑布名字的特殊是因為它過去一個帶有悲劇色彩的傳說故事。相傳附近的一戶人家的小孩在此溺水身亡，母親於是詛咒了瀑布上的石橋，隨後石橋就因為地震而被摧毀。",
        "兩條瀑布十分相近，一般來說，旅客會選擇一同遊玩。",
      ],
    },
    {
      name: "雷克霍特",
      nameEn: "Reykholt",
      region: "冰島西部",
      subtitle: "前往中世紀著名作家斯諾里的故鄉，感受歷史古城的氣息。",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/imgp9586_4_ee8ad0bf2d.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/imgp9586_4_ee8ad0bf2d.jpg",
      ],
      paragraphs: [
        "冰島西部歷史重鎮",
        "雷克霍特（Reykholt）位於冰島西部，是冰島最著名的歷史小鎮之一，是 13 世紀作家、詩人和學者斯諾里·斯圖盧松（Snorri Sturluson）的故鄉。在他的時代，雷克霍特是冰島的文化中心，也是冰島最好的學校的所在地。需要旅客留心的是，冰島南部還有一個同名小鎮，著名的番茄農場（Friðheimar）就位於那裡。",
        "在雷克霍特，您可以參觀斯諾里舊農場的遺蹟，農場和澡堂之間有一條小道，斯諾里就是在那裡去世的。另外，鎮上的文化中心和教堂也向旅客開放，文化中心提供歷史展覽、嚮導和講座，夏季時全天開放，而冬季時僅在工作日開放。教堂則會不定期地舉辦音樂會等文化活動。",
        "雷克霍爾特最著名的建築之一就是斯諾里在1206年至1241年的故居，這裡是冰島為數不多的保存完好的中世紀時期建築，承載著近千年的冰島記憶。",
        "除了歷史景觀，距離雷克霍特約15分鐘車程的赫倫瀑布（Hraunfossar）和兒童瀑布（Barnafossar）為小鎮增添了迷人的自然風光。赫倫瀑布由一連串小瀑布組成，看似發源於一片沒有河流或湖泊的原野，實際上，水流從Hallmundarhraun熔岩地的小溪流淌而來。兒童瀑布緊鄰其邊，是一處狹窄而湍急的瀑布，擁有一個略顯傷感的傳說故事。",
      ],
    },
  ],
  routeOverviewSubtitle: "南岸、黃金圈與斯奈山半島夏季自駕動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、取車、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸瀑布群 → 黑沙灘 → 南岸住宿" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 返回首都途中" },
    { label: "第 4 天", detail: "黃金圈（辛格維利爾 → 間歇泉 → 黃金瀑布）" },
    { label: "第 5 天", detail: "斯奈山半島（教會山 → 布迪爾 → 漁村海岸）→ 雷克雅維克" },
    { label: "第 6 天", detail: "雷克雅維克市區（可選）→ 機場離境" }
  ],
  routeMap: {
    waypoints: [
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 1 天",
        detail: "雷克雅維克（入境、取車）",
      },
      {
        lng: -18.057,
        lat: 63.794,
        label: "第 2 天",
        detail: "南岸瀑布群 → 黑沙灘",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 3 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘",
      },
      {
        lng: -20.5322,
        lat: 64.3271,
        label: "第 4 天",
        detail: "黃金圈三大景點",
      },
      {
        lng: -23.783,
        lat: 64.926,
        label: "第 5 天",
        detail: "斯奈山半島 → 教會山",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 6 天",
        detail: "雷克雅維克 → 機場離境",
      },
    ],
  },
  itinerary: [
    {
      day: 1,
      title: "入境日",
      accommodation: "雷克雅維克",
      description:
        "今天是您入境冰島的第一天。抵達後請先至租車櫃檯取車，工作人員會協助檢查車輛，並說明冰島安全駕駛須知。之後即可前往雷克雅維克精選飯店入住安頓。\n\n若時間充裕，可造訪哈爾格林姆斯大教堂、哈帕音樂廳與彩虹街，或另行加購 Sky Lagoon 天空之境溫泉放鬆身心，為接下來的南岸自駕儲備體力。",
      highlights: icelandSelfDriveSummer6Day1Highlights,
      optionalActivities: icelandSelfDriveSummer6Day1OptionalActivities,
    },
    {
      day: 2,
      title: "南岸瀑布風光、黑沙灘",
      accommodation: "南岸",
      description:
        "今天請一早出發，沿冰島南岸一號公路南下。夏季南岸草木蒼翠，日照時間長，適合從容造訪沿途景點。\n\n首先來到塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；夏季塞里雅蘭瀑布後方小徑通常開放，但極其濕滑，請注意腳下。斯科加瀑布晴朗時常可見彩虹，亦可攀登步道眺望南岸海岸線。\n\n繼續南下造訪迪霍拉里（Dyrhólaey）自然保護區，夏季是觀賞海鸚的絕佳時機；隨後來到黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中。亦可另行加購索爾黑馬冰川徒步。今晚入住南岸附近飯店。",
      highlights: icelandSelfDriveSummer6Day2Highlights,
      optionalActivities: icelandSelfDriveSummer6Day2OptionalActivities,
    },
    {
      day: 3,
      title: "傑古沙龍冰河湖、鑽石沙灘",
      accommodation: "南岸",
      description:
        "今日繼續往東南前進，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。浮冰在夏日陽光下呈現純白至藍綠的多種色調，擱淺於黑色沙灘上的冰塊晶瑩閃耀，黑白對比格外震撼。\n\n夏季冰河湖船遊開放時間最長，亦可另行加購船遊或斯卡夫塔山冰川徒步。結束後折返西岸，入住南岸附近飯店。",
      highlights: icelandSelfDriveSummer6Day3Highlights,
      optionalActivities: icelandSelfDriveSummer6Day3OptionalActivities,
    },
    {
      day: 4,
      title: "黃金圈",
      accommodation: "西部",
      description:
        "今日造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。走近黃金瀑布時，您將被巨大的水流所震撼；夏季陽光下水珠有時散發金色光芒。於蓋錫爾間歇泉地帶，可目睹史托克間歇泉（Strokkur）每隔數分鐘噴發的熱水柱。\n\n於辛格維利爾國家公園漫步時，亦可另行加購絲浮拉裂谷（Silfra）浮潛體驗。沿線亦可順道造訪凱瑞斯火山口（Kerið）等景點。結束後前往西部住宿。",
      highlights: icelandSelfDriveSummer6Day4Highlights,
      optionalActivities: icelandSelfDriveSummer6Day4OptionalActivities,
    },
    {
      day: 5,
      title: "斯奈山半島",
      accommodation: "雷克雅維克",
      description:
        "今日探索斯奈山半島，這片被譽為「冰島縮影」的半島距離雷克雅維克約兩小時車程。您將以順時針方向環繞半島，造訪海豹沙灘（Ytri Tunga）、布迪爾黑教堂（Búðakirkja）、阿爾納斯塔皮（Arnarstapi）漁村海岸，以及 Djúpalónssandur 黑沙灘。\n\n半島最著名的地標教會山（Kirkjufell）在夏季翠綠植被的襯托下格外醒目。若時間充裕，亦可北上造訪斯蒂基斯霍爾米（Stykkishólmur）漁港小鎮。傍晚返回雷克雅維克住宿。",
      highlights: icelandSelfDriveSummer6Day5Highlights,
      optionalActivities: icelandSelfDriveSummer6Day5OptionalActivities,
    },
    {
      day: 6,
      title: "離境日",
      accommodation: "—",
      description:
        "歡樂時光總是過得特別快。今天是離境日，請預留時間前往機場辦理退稅與還車。若班機時間較晚，可在雷克雅維克市區多留片刻，最後感受這座北歐首都的獨特氛圍。期待您下次再來冰島！",
      highlights: icelandSelfDriveSummer6Day6Highlights,
      optionalActivities: icelandSelfDriveSummer6Day6OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含冰島駕駛實用資訊，以及各類景點、歷史、文化和自然等資訊描述）",
      "5整天租車（多種車型可選，包含CDW碰撞險）",
      "冰島行程期間5晚住宿",
      "每日住宿提供早餐",
      "簽證輔助行程單材料提供",
      "台灣冰島雙時區服務",
      "VAT增值稅",
    ],
    excluded: [
      "午餐",
      "晚餐",
      "自選報名活動",
      "個人旅行保險",
      "車輛升級保險",
      "途中各種其他費用（包括油費、停車費、罰款等）",
      "里程稅",
    ],
  },
  faq: [
    {
      id: "rental",
      title: "租車相關",
      items: [
        {
          question: "在冰島租車有什麼要求？最低年齡是多少？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在大樂旅行社旅行租車，SUV、越野車、商務旅行等車型的最低年齡限制為\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"23\"]",
        },
        {
          question: "在冰島租車需要什麼證件？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"通過大樂旅行社旅行租車，在取車時需要駕駛員攜帶以下3種證件：\"]",
        },
        {
          question: "在冰島自駕租車保險主要包括哪幾種？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島租車保險主要包括如下：\"]",
        }
      ],
    },
    {
      id: "insurance",
      title: "保險相關",
      items: [
        {
          question: "為什麼必須通過冰島本地車行購買保險？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這樣做的目的是避開第三方平台“全險”陷阱，保障您的權益。\"]",
        },
        {
          question: "為什麼說來冰島自駕建議您買全險或零賠付保險套餐？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島自駕是探索壯麗景觀的最佳方式，但獨特的路況和氣候也潛藏風險。冰島地理環境、天氣路況特殊，遇到大風或者暴風雪、沙塵暴等極端不可抗天氣。為避免高價賠付，強烈建議您升級全險套餐（或稱零賠付保險），最大程度消除您的後顧之憂，讓旅程專注享受而非擔憂賠償。\"]",
        },
        {
          question: "冰島自駕過程中什麼情況即便您購買全險也不賠付？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島自駕租車雖說全險和0賠付保險基本涵蓋所有保險類型，但以下情況任何保險均不覆蓋，租車人需承擔全額維修及罰金（主要為主觀故意或重大過失造成的損失）\"]",
        }
      ],
    },
    {
      id: "trip",
      title: "行程與自駕",
      items: [
        {
          question: "冰島哪個季節最適合自駕遊？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"夏季是冰島最受歡迎的自駕遊季節。6月到8月的天氣最好，日照時間最長，陽光最為充足，這意味著您每天可以有更多的時間來遊玩，開車也會更加安心。另外，有些景區會在夏季開放更多的體驗遊玩項目，例如傑古沙龍冰河湖的船遊服務在夏季的開放時間最長，且在11月中旬至次年五月期間暫停運營。\"]",
        },
        {
          question: "去冰島自駕需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"無論您在哪個季節前往冰島，都可能會遇到各種天氣情況。有鑑於此，參加冰島自駕套餐時，您最好確保帶上能夠適應不同天氣所需的衣物：\"]",
        },
        {
          question: "我可以自由安排自駕的時間嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"完全可以！\"]",
        },
        {
          question: "冰島值得去嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這個問題可能不同的人有不同的答案。但是作為一個專注於冰島旅行的團隊，以及作為一群熱愛自然、熱愛美好的個體來說：\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"是的！冰島太值得了！\"]",
        },
        {
          question: "什麼是自選報名活動？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"大樂旅行社旅行在每一天的行程下方增加了對應的自選報名活動，您可以根據自己的需求選擇是否自費參加這些額外的活動。\"]",
        },
        {
          question: "套餐單人間為什麼需要補差價？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為冰島的單人間房價要高於雙人間房價的一半，而預定時的默認房價是按雙人間均攤至每人的價格來計算的。因此套餐內的單人間需要補交一筆差價。由於旅行團套餐系統設定在預定環節僅可以選首都雷克雅維克地區的房間數量，如果需要將套餐中包含的旅行團增加單人間，那麼需要在初始頁面選中1人來查看全程單人間價格，具體細節可諮詢客服。\"]",
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
      tripKey: "iceland/self-drive/summer/4",
      title: "4 天 3 夜冰島南岸夏季自駕遊",
      tourCode: "SLMSD-042",
      durationLabel: "4 天／3 夜",
      description:
        "在有限的夏季日照裡，將南岸精華景點一網打盡，包含傑古沙龍冰河湖與黃金瀑布。",
    },
    {
      tripKey: "iceland/self-drive/summer/5",
      title: "5 天 4 夜冰島夏季精簡自駕套餐",
      tourCode: "SLMSD-051",
      durationLabel: "5 天／4 夜",
      description:
        "將冰島南部精華收入囊中，搭配戶外體驗與黃金圈經典路線。",
    },
    {
      tripKey: "iceland/self-drive/summer/7",
      title: "冰島西南岸 7 天 6 夜夏季自駕遊",
      tourCode: "SLMSD-072",
      durationLabel: "7 天／6 夜",
      description:
        "黃金圈、南岸與斯奈山半島盡收囊中，更從容探索冰島西南部。",
    },
    {
      tripKey: "iceland/self-drive/summer/8",
      title: "8 天 7 夜冰島夏季精選自駕",
      tourCode: "SLMSD-082",
      durationLabel: "8 天／7 夜",
      description:
        "沿一號公路環島，遊覽黃金圈、南岸、冰河湖、東部峽灣、米湖與西部白銀圈。",
    },
  ],
};
