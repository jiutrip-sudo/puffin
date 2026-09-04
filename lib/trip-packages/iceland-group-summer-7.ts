import type { TripPackage } from "./types";
import {
  icelandGroupSummer7Day1Highlights,
  icelandGroupSummer7Day1OptionalActivities,
} from "./iceland-group-summer-7-day1-cards";
import {
  icelandGroupSummer7Day2Highlights,
  icelandGroupSummer7Day2OptionalActivities,
  icelandGroupSummer7Day3Highlights,
  icelandGroupSummer7Day3OptionalActivities,
  icelandGroupSummer7Day4Highlights,
  icelandGroupSummer7Day4OptionalActivities,
  icelandGroupSummer7Day5Highlights,
  icelandGroupSummer7Day5OptionalActivities,
  icelandGroupSummer7Day6Highlights,
  icelandGroupSummer7Day6OptionalActivities,
  icelandGroupSummer7Day7Highlights,
  icelandGroupSummer7Day7OptionalActivities,
} from "./iceland-group-summer-7-days2-7-cards";

export const icelandGroupSummer7: TripPackage = {
  id: "iceland-group-summer-7",
  tripKey: "iceland/group/summer/7",
  slug: "iceland-summer-7-day-classic-tour-package-golden-circle-snaefellsnes-inside-the-volcano",
  tourCode: "SMD-071",
  title: "7 天 6 夜冰島夏季經典跟團遊",
  subtitle: "黃金圈&斯奈山半島&可選高地徒步",
  duration: { days: 7, nights: 6 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-071",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/seljalandsfoss1_b6412d5d4e.jpg",
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
      "這個 7 天 6 夜夏季跟團套餐涵蓋黃金圈、南岸、冰河湖與斯奈山半島深度環遊，由品質小巴團與專業嚮導帶領。第六日為自由活動，可另行加購內陸高地徒步。夏季日照長，沿途可欣賞海鸚與午夜陽光。",
    full: `這個 7 天 6 夜夏季跟團套餐涵蓋黃金圈、南岸、傑古沙龍冰河湖與斯奈山半島（Snæfellsnes）深度環遊，由品質小巴團與專業嚮導帶領。套餐含凱夫拉維克機場至市區大巴接送，充分運用夏季日照長的優勢，行程安排務實。

行程涵蓋黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss），並參觀凱瑞斯火山口（Kerið）；南岸則有塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、索爾黑馬冰川健行、黑沙灘（Reynisfjara）與雷尼斯岩（Reynisdrangar）。第四日造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）；第五日深度遊覽斯奈山半島，造訪教會山（Kirkjufell）、阿爾納斯塔皮（Arnarstapi）與布迪爾黑教堂（Búðakirkja）。

第六日為自由活動，可另行加購蘭德曼納勞卡（Landmannalaugar）內陸高地徒步——僅夏季開放。入境日可前往 Sky Lagoon 天空之境溫泉放鬆身心。夏季迪霍拉里（Dyrhólaey）等地常有海鸚棲息，實際停留時間將由嚮導依天候與路況調整。`,
  },
  gallery: [
    {
      id: "seljalandsfoss1_b6412d5d",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss1_b6412d5d4e.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "ivars_krutainis_z_L0s_Zo",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/ivars_krutainis_z_L0s_Zoxl_Ck_unsplash_f16ff9febf.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "jan_gemerle_VXF_7qu_Dt_E",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jan_gemerle_VXF_7qu_Dt_E04_unsplash_aac7793663.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "jared_erondu_j4_Pa_E7_E2",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jared_erondu_j4_Pa_E7_E2_Ws_unsplash_f444c22749.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "NL_3327_f37b46f012",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/NL_3327_f37b46f012.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "遊覽黃金圈並拜訪沿途小眾景點",
    "雙腳橫跨歐亞與美洲板塊",
    "在1號環島公路欣賞冰島最美海岸線",
    "感受黑沙灘的銀波浩渺",
    "近距離欣賞傑古沙龍冰河湖",
    "在斯奈山半島體會一步一景",
    "健行內陸高地，感受彩色山谷的多樣",
    "盡情體會南岸瀑布的水霧清冽",
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
        "辛格維利爾國家公園（Þingvellir National Park，又譯為辛格維勒國家公園）位於冰島西南部，距離冰島首都雷克雅維克東北約40公里，是冰島著名黃金圈路線的三大景點之一。辛格維利爾國家公園地處北美板塊和歐亞板塊分離所產生的巨大裂谷邊緣，也是冰島最早議會所在地，是一個具有重要歷史、文化和自然意義的地方，也是冰島最受歡迎的旅遊目的地之一。",
        "公元930年，議會在辛格維利爾國家公園的平原上成立，標誌著冰島作為一個獨立國家的存在。園內地標法律石（Lögberg ）據說是世界上第一個議會聚集的地方，自930年以來，這裡見證了無數法律的裁決與正義的伸張。1928年，冰島通過立法保護議會遺址，兩年後，辛格維利爾國家公園正式建成，成為了冰島全國第一個國家公園。",
        "Öxarárfoss是園內最受歡迎的景點之一，這條高13米、寬20米的瀑布在冬季會完全凍結，是攀冰愛好者的最愛。旅客除了通過步行路線遊覽公園，還可以體驗例如垂釣和浮潛等多種多樣的活動。公園南側的辛格瓦德拉湖是冰島境內最大的天然湖泊，湖中有褐鱒魚和各式的北極鮭魚，是全國數一數二的垂釣地點。另外，因驚人的能見度而世界聞名的絲浮拉大裂縫（Silfra）也位於國家公園範圍內。如果滿足有關潛水資格和規定，則能夠潛入清澈冰冷的地下水一探究竟。如果沒有潛水證，那麼參加帕芬假期旅行的浮潛團則是一個更好的選擇，潛水小白也能夠自在地領略絲浮拉的美麗。",
        "在冰島，或許沒有任何一個地方比辛格維利爾國家公園在歷史、文化和自然方面更加重要。由於其獨特的地位和對世界以及冰島本國的重要價值，辛格維利爾國家公園在2004年被列為聯合國教科文組織世界遺產。",
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
      name: "教會山",
      nameEn: "Kirkjufell",
      region: "斯奈山半島",
      subtitle: "形似草帽，出鏡權遊，教會山的魅力已被無數人領略。",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/kirkjufell1_b2a1018312.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/kirkjufell1_b2a1018312.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/kirkjufell2_26aae9d397.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/kirkjufell3_a34c5b3e82.jpg",
      ],
      paragraphs: [
        "全冰島最出片的山峰",
        "教會山（Kirkjufell）位於冰島西部的斯奈山半島之上，高463米，迷人的弧度、小小的尖頂以及植被覆蓋的山峰形似草帽，因此它也被臺灣旅客稱為“草帽山”。",
        "教會山高高聳立在漁港小鎮格倫達菲厄澤（Grundarfjörður）的遠處，是冰島出鏡率最高的山峰，也是世界十大最美山峰之一，同時還是《權力的遊戲》中著名的“箭頭山”。教會山每天吸引著無數旅客和攝影師的到訪，他們無一例外都想在這裡留下一張多彩、別緻又巍美的照片。",
        "當您沿著54號公路向北駛向斯奈山半島時，教會山就會顯現在您的眼前。但請注意不要在路上停車下車拍照。教會山呈近乎完美的圓柱形，山的南側與陸地相連，因此，除了向海的北面，您可以從東西南三個方向欣賞山景。但是，您也可以劃獨木舟行至教會山腳下，從北面欣賞山峰景觀。",
        "在網絡上搜索一番，您會發現絕大多數教會山的照片左側都有一個精緻的瀑布，這就是位於54號公路另一側的教會山瀑布（Kirkjufellsfoss）。教會山瀑布很小，單論景色，它一定不如冰島那些最有名的瀑布，但它的位置讓它與教會山相輔相成，極大地增添了畫面的豐富程度，因此也成為了旅客紛紛而至的景點。",
        "關於教會山的健行、攝影等資訊，您可以查看頁面下方的常見問題，那裡有更詳細的說明。",
      ],
    },
    {
      name: "布迪爾黑教堂",
      nameEn: "Búðakirkja",
      region: "斯奈山半島",
      subtitle: "斯奈山半島上擁有300餘年歷史的黑色教堂",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Budakirkja3_743b89f7a2.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Budakirkja3_743b89f7a2.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Budakirkja1_910d19313e.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Budakirkja2_9a606719cd.jpg",
      ],
      paragraphs: [
        "冰島標誌性的黑色小教堂",
        "布迪爾黑教堂（Búðakirkja）是一座黑色的木製教堂，位於冰島斯奈山半島的南側布迪爾小鎮。如今，黑教堂是冰島的一大熱門旅遊景點與攝影取景地。",
        "教堂至今仍在使用，既可用於教區的傳統教堂活動，也可用於其他活動。布迪爾黑教堂是冰島很受歡迎的求婚地點，也是觀賞午夜陽光和北極光的熱門地點。通體黝黑的外表讓教堂染上了神秘的色彩，教堂在上世紀50及80年代經過兩次修繕，但都保持了其原始的丹麥設計風格。",
        "布迪爾黑教堂具有重要的文化和歷史意義，1701年，Bent Lauridtsend在獲得主教許可後，預備在布迪爾建造教堂。教堂的選址也充滿傳奇色彩，相傳有一老婦提議，選一男人原地轉圈直至暈眩，然後向天空發射三支箭，第三支箭的落點就是建教堂的地點。1816年，丹麥國王克里斯蒂安八世下令拆除教堂，1848年，教堂得到重建。1984年，教堂遷至現址。幾經翻修後，這座丹麥設計的教堂仍保留著一些可以追溯到18世紀的文物。",
      ],
    },
  ],
  routeOverviewSubtitle: "黃金圈、南岸、斯奈山半島與自由活動日夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、Sky Lagoon 溫泉）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）" },
    { label: "第 3 天", detail: "南岸瀑布 → 冰川健行 → 黑沙灘" },
    { label: "第 4 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "斯奈山半島深度環遊" },
    { label: "第 6 天", detail: "雷克雅維克（自由活動日，可選內陸健行）" },
    { label: "第 7 天", detail: "雷克雅維克 → 機場離境" }
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
        lng: -20.5322,
        lat: 64.3271,
        label: "第 2 天",
        detail: "黃金圈三大景點",
      },
      {
        lng: -18.057,
        lat: 63.794,
        label: "第 3 天",
        detail: "南岸瀑布 → 黑沙灘",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 4 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘",
      },
      {
        lng: -23.8,
        lat: 64.8,
        label: "第 5 天",
        detail: "斯奈山半島深度環遊",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 6 天",
        detail: "雷克雅維克（自由活動日）",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 7 天",
        detail: "雷克雅維克 → 機場離境",
      },
    ],
  },
  itinerary: [
    {
      day: 1,
      title: "入境日：雷克雅維克 & Sky Lagoon溫泉",
      accommodation: "雷克雅維克",
      description:
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n若班機抵達時間較早，可前往 Sky Lagoon 天空之境溫泉體驗七步療法，或在市區漫步感受極北首都的風貌。夏季日照長，晚間亦可沿著海岸線散步。",
      highlights: icelandGroupSummer7Day1Highlights,
      optionalActivities: icelandGroupSummer7Day1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈經典路線",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。辛格維利爾位於歐亞與北美板塊交界的大裂谷，是冰島最早議會所在地；蓋錫爾間歇泉地帶可目睹史托克間歇泉（Strokkur）每隔數分鐘噴發的熱水柱。\n\n走近黃金瀑布時，巨大的水流令人屏息；陽光下水珠有時散發金色光芒。嚮導亦將帶您參觀凱瑞斯火山口（Kerið Crater）。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupSummer7Day2Highlights,
      optionalActivities: icelandGroupSummer7Day2OptionalActivities,
    },
    {
      day: 3,
      title: "冰島南岸：瀑布 & 冰川健行 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日品質小巴團沿南岸一號公路南下。夏季日照長，沿途綠意盎然。\n\n首先造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；天候許可時可繞行至塞里雅蘭瀑布後方小徑，亦可造訪秘密瀑布（Gljúfrabúi）。接著在專業嚮導帶領下進行索爾黑馬冰川（Sólheimajökull）徒步，穿戴安全裝備踏上夾雜火山灰紋路的藍白冰川。（注：冰川健行體驗僅限 10 月前，10 月開始將替換為藍冰洞體驗。）\n\n最後前往黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中。夏季迪霍拉里（Dyrhólaey）常有海鸚棲息。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店。",
      highlights: icelandGroupSummer7Day3Highlights,
      optionalActivities: icelandGroupSummer7Day3OptionalActivities,
    },
    {
      day: 4,
      title: "傑古沙龍冰河湖 & 鑽石沙灘",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。浮冰在湖面緩緩漂移，夏季陽光下冰塊晶瑩閃耀，與黑色沙灘形成鮮明對比。\n\n返程途中將經過埃爾德熔岩原（Eldhraun）與維克（Vík），夏季維克附近常有魯冰花盛開。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupSummer7Day4Highlights,
      optionalActivities: icelandGroupSummer7Day4OptionalActivities,
    },
    {
      day: 5,
      title: "斯奈山半島深度環遊",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團深度遊覽斯奈山半島（Snæfellsnes），這片被稱為「冰島縮影」的半島匯集冰川、火山、海岸峭壁與漁村風光。途中經過博爾加內斯（Borgarnes），亦可造訪海豹沙灘（Ytri-Tunga）觀察海豹。\n\n行程將造訪布迪爾黑教堂（Búðakirkja）、阿爾納斯塔皮（Arnarstapi）海岸峭壁與 Djúpalónssandur 黑沙灘，以及教會山（Kirkjufell）與教會山瀑布（Kirkjufellsfoss）。夏季午夜陽光下，教會山輪廓格外分明。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupSummer7Day5Highlights,
      optionalActivities: icelandGroupSummer7Day5OptionalActivities,
    },
    {
      day: 6,
      title: "自由活動日（可選內陸徒步）",
      accommodation: "雷克雅維克",
      description:
        "今日為自由活動日，可在雷克雅維克市區自由安排，漫步洛加維格大街（Laugavegur）、哈帕音樂廳（Harpa）與彩虹街等景點。\n\n建議另行加購蘭德曼納勞卡（Landmannalaugar）內陸高地徒步一日遊——僅夏季開放，流紋岩山脈色彩斑斕，徒步結束後可在天然地熱溫泉中放鬆。亦可另行加購絲浮拉裂谷（Silfra）浮潛、觀鯨或溫泉等體驗。內陸高地一般於 6 月至 9 月開放，具體時間依天候而定。今晚繼續入住雷克雅維克。",
      highlights: icelandGroupSummer7Day6Highlights,
      optionalActivities: icelandGroupSummer7Day6OptionalActivities,
    },
    {
      day: 7,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續，並提前確認接機大巴時間。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻，漫步洛加維格大街（Laugavegur）或造訪哈爾格林姆斯大教堂。入境日未造訪溫泉者，亦可選擇 Sky Lagoon 或藍湖溫泉（Blue Lagoon）結束旅程。",
      highlights: icelandGroupSummer7Day7Highlights,
      optionalActivities: icelandGroupSummer7Day7OptionalActivities,
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
          question: "去冰島旅遊需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"雖然比世界上緯度相近的許多地方都要溫暖，但冰島總體上還是一個寒冷的國家，特別是在冬季，平均氣溫在0攝氏度左右，而夏季的平均氣溫約在10-15度。\"]",
        },
        {
          question: "在冰島旅遊需要嚮導嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島固然以其神奇且的自然景觀而聞名於世，但是同樣不可忽視的是冰島的歷史、文化以及地理資訊。\"]",
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
      tripKey: "iceland/group/summer/6",
      title: "6 天 5 夜冰島夏季樂享跟團遊",
      tourCode: "SMD-061",
      durationLabel: "6 天／5 夜",
      description:
        "黃金圈、南岸與斯奈山半島，適合時間較緊的夏季旅客。",
    },
    {
      tripKey: "iceland/group/summer/8",
      title: "8 天 7 夜冰島夏季跟團遊",
      tourCode: "SMD-083",
      durationLabel: "8 天／7 夜",
      description:
        "更完整的夏季跟團路線，涵蓋更多冰島精華景點。",
    },
  ],
};
