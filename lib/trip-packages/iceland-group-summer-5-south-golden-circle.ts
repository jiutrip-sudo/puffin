import type { TripPackage } from "./types";
import {
  icelandGroupSummer5GoldenCircleDay1Highlights,
  icelandGroupSummer5GoldenCircleDay1OptionalActivities,
} from "./iceland-group-summer-5-south-golden-circle-day1-cards";
import {
  icelandGroupSummer5GoldenCircleDay2Highlights,
  icelandGroupSummer5GoldenCircleDay2OptionalActivities,
  icelandGroupSummer5GoldenCircleDay3Highlights,
  icelandGroupSummer5GoldenCircleDay3OptionalActivities,
  icelandGroupSummer5GoldenCircleDay4Highlights,
  icelandGroupSummer5GoldenCircleDay4OptionalActivities,
  icelandGroupSummer5GoldenCircleDay5Highlights,
  icelandGroupSummer5GoldenCircleDay5OptionalActivities,
} from "./iceland-group-summer-5-south-golden-circle-days2-5-cards";

export const icelandGroupSummer5SouthGoldenCircle: TripPackage = {
  id: "iceland-group-summer-5-south-golden-circle",
  tripKey: "iceland/group/summer/5/south-golden-circle",
  slug: "iceland-summer-5-day-tour-package-golden-circle-south-coast-jokulsarlon",
  tourCode: "SMD-053",
  title: "5 天 4 夜冰島夏季精華跟團遊",
  subtitle: "黃金圈&南岸風光&傑古沙龍冰河湖",
  duration: { days: 5, nights: 4 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-053",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/gyesir_eruption_group_watching_sightseeing_iceland_summer_35a76fb314.png",
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
      "這個 5 天 4 夜夏季跟團套餐涵蓋黃金圈與南岸兩日，由品質小巴團與專業嚮導帶領，含冰川健行與 Sky Lagoon 體驗。行程善用夏季長日照，節奏適中、安排務實。",
    full: `這個 5 天 4 夜夏季跟團套餐涵蓋黃金圈與南岸兩日，由品質小巴團與專業嚮導帶領。套餐含凱夫拉維克機場至市區大巴接送與 Sky Lagoon 溫泉體驗，充分利用夏季長日照與午夜陽光，行程安排務實。

第二日造訪黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss），並前往凱瑞斯火山口（Kerid Crater）。南岸動線串連塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）；冰川健行由嚮導陪同並提供安全裝備（10 月前為冰川健行，之後改為藍冰洞體驗）。`,
  },
  gallery: [
    {
      id: "gyesir_eruption_group_wa",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gyesir_eruption_group_watching_sightseeing_iceland_summer_35a76fb314.png",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "Seljalandsfoss_5864fea1e",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Seljalandsfoss_5864fea1ea.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "View_over_Reynisdrangar_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/View_over_Reynisdrangar_97bb3d41fd.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "laila_gebhard_Rt4p0_K_Mo",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/laila_gebhard_Rt4p0_K_Mo86k_unsplash_c8a960fa02.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "遊覽冰島黃金圈的三大著名景點",
    "探索黃金圈小眾絕美火山口",
    "一網打盡南岸瀑布與海岸景觀",
    "置身於異星球般的黑沙灘上",
    "感受千年冰山的震撼與壯美",
    "深度體驗冰島地熱溫泉",
  ],
  attractions: [
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
        "黃金瀑布（Gullfoss）位於Haukadalur山谷的Hvítá河上，是冰島最受歡迎的旅遊景點之一，也和辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）組成了著名的黃金圈線路。許多人認為這裡是冰島最美的瀑布，沒錯，即使冰島有數以千計的瀑布，但也許沒有一條像黃金瀑布一樣聞名於世。",
        "黃金瀑布的得名，是因為在陽光明媚的日子裡，瀑布的水會呈現出美妙夢幻的金褐色。從科學的角度解釋，是因為瀑布水是冰川水，攜帶著多年來大量冰川冰從陸地上鑿下的沉積物。",
        "黃金瀑布由兩段瀑布組合而成，一段高11米，另一段高21米，流入下方長達2.5公里寬約20米的裂縫中。在冰河時代末期，巨大的洪水造成了這條裂縫，而不斷的水流侵蝕使它每年延長25釐米。這裡平均水流速度為每秒109立方米，冬季平均流速為每秒80立方米，夏季的水流速度會提高至每秒130立方米。",
        "在冬季，黃金瀑布是最受風光攝影師們歡迎的地方之一，因為這裡是拍攝北極光的絕佳地點。不過，瀑布周圍狹窄的小路上可能會結冰，因此如果您在冬季遊覽黃金瀑布，我們強烈建議您不要離開主路。",
      ],
    },
    {
      name: "蓋錫爾間歇泉地帶",
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
        "Geysir間歇泉被人們稱為蓋錫爾間歇泉地帶（The Great Geysir），是現代歐洲人所知的第一個間歇泉，甚至英文中表示“間歇泉”的單詞“Geyser”就是因它而得名。它坐落於冰島西南岸的Haukadalur山谷中，與辛格維利爾國家公園（Þingvellir National Park）和黃金瀑布（Gullfoss）共同組成了聞名遐邇的冰島黃金圈線路。",
        "研究表明，蓋錫爾間歇泉已經存在了約1萬年，它最高的一次噴發是在1845年，噴發高度約為170米。但由於地殼運動和人類行為，它目前處於沉寂狀態。上世紀，冰島人曾嘗試多種方法使其噴發，例如在噴口周圍開鑿通道以降低地下水位，或是向噴泉口丟入肥皂，但這些行為後來引發了關於環境保護的爭議，因此在上世紀90年代被叫停。",
        "不過旅客倒不必擔心無法看到間歇泉噴發，Geysir間歇泉向南50米的史托克間歇泉（Strokkur）是目前最為活躍的間歇泉，也是吸引旅客數量最多的間歇泉。 它每5-10分鐘噴發一次，高達約30米左右，噴發出的水柱溫度超過100攝氏。",
        "需要注意的是，由於間歇泉的水溫極高，可能導致嚴重的人員傷亡，其周圍設有指定區域，出於安全考慮，一定要呆在這些區域內，確保與間歇泉保持一定的距離，也不要向間歇泉、地熱池和火山噴氣口扔東西。",
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
  ],
  routeOverviewSubtitle: "南岸與黃金圈夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、Sky Lagoon 溫泉）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布 → 凱瑞斯火山口）" },
    { label: "第 3 天", detail: "塞里雅蘭／斯科加瀑布 → 冰川健行 → 黑沙灘" },
    { label: "第 4 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 維克" },
    { label: "第 5 天", detail: "雷克雅維克 → 機場離境" }
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
        lng: -21.1274,
        lat: 64.255,
        label: "第 2 天",
        detail: "黃金圈經典路線",
      },
      {
        lng: -19.511,
        lat: 63.615,
        label: "第 3 天",
        detail: "南岸瀑布 → 冰川健行 → 黑沙灘",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 4 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 維克",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 5 天",
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
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n入境日安排 Sky Lagoon 天空之境溫泉體驗，在無邊泳池中眺望北大西洋海景，體驗冰島地熱溫泉文化。夏季長日照下，晚間仍有機會感受午夜陽光。建議早些休息，為次日品質小巴團儲備體力。",
      highlights: icelandGroupSummer5GoldenCircleDay1Highlights,
      optionalActivities: icelandGroupSummer5GoldenCircleDay1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈3+1：辛格維利爾國家公園 & 蓋錫爾間歇泉地帶 & 黃金瀑布 & 凱瑞斯火山口",
      accommodation: "南岸",
      description:
        "今日搭乘品質小巴團造訪黃金圈。辛格維利爾國家公園（Þingvellir National Park）位於歐亞與北美板塊裂谷邊緣，也是冰島議會昔日開會之地。接著前往蓋錫爾間歇泉地帶，活躍的史托克間歇泉（Strokkur）每數分鐘噴發一次，水柱高達約 30 米。黃金瀑布（Gullfoss）雙層水幕在陽光下常形成彩虹。\n\n行程另安排凱瑞斯火山口（Kerid Crater），這座三千年前形成的休眠火山口湖水色彩鮮明。夏季長日照讓各景點色彩飽和。今晚入住南岸附近飯店。",
      highlights: icelandGroupSummer5GoldenCircleDay2Highlights,
      optionalActivities: icelandGroupSummer5GoldenCircleDay2OptionalActivities,
    },
    {
      day: 3,
      title: "塞里雅蘭瀑布 & 斯科加瀑布 & 索爾黑馬冰川 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日搭乘品質小巴團沿南岸一號公路南下。夏季南岸瀑布水量充沛、草木蔥鬱。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）、秘密瀑布（Gljúfrabúi）與斯科加瀑布（Skógafoss）；夏季可沿小徑繞至塞里雅蘭瀑布後方，斯科加瀑布晴朗時常可見彩虹。接著在專業嚮導帶領下進行索爾黑馬冰川（Sólheimajökull）徒步，穿戴安全裝備近距離感受千年冰川地貌（10 月前為冰川健行，之後改為藍冰洞體驗）。最後前往黑沙灘（Reynisfjara），遠處可見雷尼斯岩（Reynisdrangar）；夏季加達爾懸崖常有海鳥棲息。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店。",
      highlights: icelandGroupSummer5GoldenCircleDay3Highlights,
      optionalActivities: icelandGroupSummer5GoldenCircleDay3OptionalActivities,
    },
    {
      day: 4,
      title: "傑古沙龍冰河湖 & 鑽石沙灘 & 維克",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園。傑古沙龍冰河湖（Jökulsárlón）上漂浮著形態各異的冰山；對岸的鑽石沙灘（Diamond Beach）上，浮冰在黑色沙灘上晶瑩閃耀。夏季長日照讓冰河湖色彩格外飽和。\n\n回程途中經過覆蓋綠色苔蘚的埃爾德熔岩原（Eldhraun），並途經維克（Vík）。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupSummer5GoldenCircleDay4Highlights,
      optionalActivities: icelandGroupSummer5GoldenCircleDay4OptionalActivities,
    },
    {
      day: 5,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續。\n\n若仍有餘裕，可在市區漫步：托寧湖（Tjörnin）、哈爾格林姆斯教堂（Hallgrímskirkja）或哈帕音樂廳（Harpa）都是不錯的選擇。",
      highlights: icelandGroupSummer5GoldenCircleDay5Highlights,
      optionalActivities: icelandGroupSummer5GoldenCircleDay5OptionalActivities,
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
          question: "什麼是自選報名活動？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行在每一天的行程下方增加了對應的自選報名活動，您可以根據自己的需求選擇是否自費參加這些額外的活動。\"]",
        },
        {
          question: "預定後多久能收到相關的參團資料？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在您付完定金後的5-7個工作日內（且在參團前），我們會提供行程相關的訂單資訊清單（包含預定飯店資訊等）及簽證輔助材料；在付完全款並提供航班資訊等所有有效資訊後的5-7個工作日內（且在參團前），我們會提供完整的行程手冊等。行程手冊包含中文行程單、接送地址、各類景點、歷史、文化、自然等資訊描述。\"]",
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
        },
        {
          question: "我應該提前多久預訂冰島行程？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"由於冰島的旅遊業資源有限，為了保障您的出行品質，我們建議您\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"至少在出行前幾週開始在我們的官網預訂行程\"]",
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
      tripKey: "iceland/group/summer/5/south-snaefellsnes",
      title: "5 天 4 夜冰島夏季夢幻跟團遊",
      tourCode: "SMD-051",
      durationLabel: "5 天／4 夜",
      description:
        "斯奈山半島與南岸精華，適合想兼顧西線風光的旅客。",
    },
    {
      tripKey: "iceland/group/summer/6/south-snaefellsnes-golden-circle",
      title: "6 天 5 夜冰島夏季跟團遊",
      tourCode: "SMD-061",
      durationLabel: "6 天／5 夜",
      description:
        "黃金圈、南岸與斯奈山半島一次走遍的樂享路線。",
    },
  ],
};
