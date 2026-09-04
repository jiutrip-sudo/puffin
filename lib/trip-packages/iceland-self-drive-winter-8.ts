import type { TripPackage } from "./types";
import {
  icelandSelfDriveWinter8Day1Highlights,
  icelandSelfDriveWinter8Day1OptionalActivities,
} from "./iceland-self-drive-winter-8-day1-cards";
import {
  icelandSelfDriveWinter8Day2Highlights,
  icelandSelfDriveWinter8Day2OptionalActivities,
  icelandSelfDriveWinter8Day3Highlights,
  icelandSelfDriveWinter8Day3OptionalActivities,
  icelandSelfDriveWinter8Day4Highlights,
  icelandSelfDriveWinter8Day4OptionalActivities,
  icelandSelfDriveWinter8Day5Highlights,
  icelandSelfDriveWinter8Day5OptionalActivities,
  icelandSelfDriveWinter8Day6Highlights,
  icelandSelfDriveWinter8Day6OptionalActivities,
  icelandSelfDriveWinter8Day7Highlights,
  icelandSelfDriveWinter8Day7OptionalActivities,
  icelandSelfDriveWinter8Day8Highlights,
  icelandSelfDriveWinter8Day8OptionalActivities,
} from "./iceland-self-drive-winter-8-days2-8-cards";

export const icelandSelfDriveWinter8: TripPackage = {
  id: "iceland-self-drive-winter-8",
  tripKey: "iceland/self-drive/winter/8",
  slug: "8-days-winter-self-drive-tour-iceland-ring-road",
  tourCode: "SSD-082",
  title: "8 天 7 夜冰島冬季 1 號公路環島自駕",
  subtitle: "東部峽灣 & 米湖 & 環島一號公路",
  duration: { days: 8, nights: 7 },
  season: { label: "冬季", months: "10 月–4 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "自駕",
    tourCode: "SSD-082",
  },
  eyebrow: "冰島集合 · 自駕 · 冬季",
  backHref: "/trips/iceland/self-drive/winter/8",
  backLabel: "返回 8 日行程",
  heroImage:
    "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/Fjadrargljufur_Canyon_in_winter_Iceland_9be017508f.jpg",
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
      "這個 8 天 7 夜冰島冬季一號公路環島自駕，沿著冰島最著名的環島公路，盡覽黃金圈、南岸、東部峽灣、米湖與西部白銀圈等冬日風光。行程充分顧及冬季日照與路況，節奏適中、安排務實。",
    full: `這個 8 天 7 夜冰島冬季一號公路環島自駕，沿著冰島最著名的環島公路，盡覽黃金圈、南岸、東部峽灣、米湖與西部白銀圈等冬日風光。套餐充分顧及冬季日照時數與路況，行程安排合理、節奏適中。

您將造訪黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）；沿南岸探索壯麗瀑布、冰川與黑沙灘（Reynisfjara），亦可另行加購冰川健行或藍冰洞探險。

往東則穿越寧靜的東部峽灣海岸，感受漁村與山脈交織的北國風情；北上米湖（Lake Mývatn）地區，可浸泡米湖溫泉（Mývatn Nature Baths）放鬆身心，欣賞北部火山地質奇景。回程則遊覽西部白銀圈（Silver Circle），為環島旅程劃下完美句點。

途中亦可另行加購雪地摩托、溫泉體驗等冬季活動。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，讓您輕鬆盡享冰島環島精華。`,
  },
  gallery: [
    {
      id: "fjadrargljufur",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Fjadrargljufur_Canyon_in_winter_Iceland_9be017508f.jpg",
      alt: "羽毛峽谷",
      caption: "冬季羽毛峽谷",
    },
    {
      id: "barnafoss",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Barnafoss_winter_40e5e436f6.jpg",
      alt: "兒童瀑布",
      caption: "西部兒童瀑布",
    },
    {
      id: "ring-road",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Iceland_Self_drive_winter_06_44f4bcb03d.jpg",
      alt: "冰島冬季自駕",
      caption: "一號公路冬季風光",
    },
    {
      id: "thingvellir",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/thingvellir_unsplash3_4b40480cfd.jpg",
      alt: "辛格維利爾",
      caption: "辛格維利爾國家公園",
    },
    {
      id: "jokulsarlon",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/DSC_00389_4_cadb104463.jpg",
      alt: "傑古沙龍冰河湖",
      caption: "傑古沙龍冰河湖",
    },
    {
      id: "seljalandsfoss",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss1_b6412d5d4e.jpg",
      alt: "塞里雅蘭瀑布",
      caption: "塞里雅蘭瀑布",
    },
    {
      id: "diamond-beach",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/diamond_beach_unsplash_11020ebd2f.jpg",
      alt: "鑽石沙灘",
      caption: "鑽石沙灘",
    },
    {
      id: "gullfoss",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gullfoss1_9c5319c04c.jpg",
      alt: "黃金瀑布",
      caption: "黃金瀑布",
    },
    {
      id: "reykjavik",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Reykjavik_bathed_in_sunset_2b179f83fe.jpg",
      alt: "雷克雅維克",
      caption: "雷克雅維克夕陽",
    },
  ],
  highlights: [
    "全程由您掌控方向盤，自主設定環島節奏",
    "自駕體驗冰島最熱門一號公路環島線",
    "遊覽南岸塞里雅蘭與斯科加瀑布、黑沙灘",
    "感受傑古沙龍冰河湖與鑽石沙灘的浪漫",
    "探訪神秘迷人的東部峽灣與北部米湖",
    "遊覽冰島西部白銀圈風光",
  ],
  attractions: [
    {
      name: "塞里雅蘭瀑布",
      nameEn: "Seljalandsfoss",
      region: "冰島南部",
      subtitle: "塞里雅蘭瀑布之美的不同角度",
      imageUrl:
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss1_b6412d5d4e.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss1_b6412d5d4e.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss2_6d4717fdda.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss3_531d93910f.jpg",
      ],
      paragraphs: [
        "塞里雅蘭瀑布（Seljalandsfoss）位於冰島南部1號公路旁，是一個落差達60米的巨大瀑布。在冰島這樣一個瀑布遍佈的國家，它的獨特之處就在於瀑布之後有一個寬闊的洞穴可供人穿行，旅客繞行至瀑布背後能夠透過水簾欣賞落日晚霞和冰島南岸的美麗景色。",
        "瀑布所在的塞里雅蘭河（Seljalandsá）發源於埃亞菲亞德拉冰蓋（Eyjafjallajökull），河水充滿冰川融水，奔流向南，在陡峭的懸崖上飛瀉而下，這也是塞里雅蘭瀑布得名的原因。塞里雅蘭瀑布在過去直接流入大西洋，而現在由於海平面的下降，海洋和瀑布之間出現了一片低地。站在瀑布頂端，您可以看到大西洋和冰島南海岸的壯麗景色。",
        "由於其雄偉壯觀和極其獨特的景觀，塞里雅蘭瀑布也出現在了許多膾炙人口的影視作品當中，例如《星際迷航》第三季和賈斯汀·比伯的《I'll Show You》MV中，以及在一檔美國真人秀節目《極速前進》第六季當中，它也被用作挑戰關卡。",
        "需要提醒旅客的是，無論是夏季還是冬季前往塞里雅蘭瀑布，都需要注意這條小路極其濕滑，由於瀑布落差巨大，因此無論是否有風，瀑布都會打濕這條隱藏在其後的小路。冬季，這條小路有可能會因為安全原因而封路，如果幸運沒有遇到道路封閉的情況，請一定要注意腳下，另外還要注意頭上可能會落下的冰柱。",
        "在距離幾百米塞里雅蘭外的地方，還有另外一條令人驚嘆叫絕的瀑布，它近幾年才被人們發掘，被稱為秘密瀑布（Gljúfrabúi）。落差高達40米，秘密瀑布隱藏在一個狹窄而神秘的峽谷中，也正是因此特性而得名。在前往秘密瀑布的途中，還能看到另一個迷人的小瀑布，在群山、河流和清新的空氣環繞之處驕傲地展示著自己的美麗。",
      ],
    },
    {
      name: "黑沙灘",
      nameEn: "Reynisfjara Black Sand Beach",
      region: "冰島南部",
      subtitle: "讓人萌生「這是地球嗎？」疑問的異世黑沙灘",
      imageUrl:
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara1_ef5a24c2b7.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara2_b3ec97ed1f.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara1_ef5a24c2b7.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara3_725ed9b454.jpg",
      ],
      paragraphs: [
        "黑沙灘（Reynisfjara Black Sand Beach，音譯為雷尼斯黑沙灘）因其位於維克（Vík í Mýrdal）附近而得名。沙灘位於冰島南岸的環島1號公路沿線，交通便捷，是冰島最著名的海灘之一。火山噴發形成的黝黑色砂石千百年來受到北大西洋的海浪拍打，每年有無數旅客被其魔幻、深邃又略顯恐怖的奇異景色而折服。",
        "讓黑沙灘從冰島眾多海灘中脫穎而出的，不僅是自古以來火山爆發後巖漿遇到海水迅速冷卻而形成的黝黑砂石，還有這片沙灘所能捕獲的風景。漫步於黑沙灘之上，可以眺望不遠處的雷尼斯岩（Reynisdrangar）。據說這些怪異的海柱是石化的巨魔，也有人堅信它們實際上曾經是海岸線懸崖的一部分，在其他部分被海水沖垮後依然屹立不倒。無論哪種說法能打動你，它們都賦予了黑沙灘一道獨特壯觀的風景線。",
        "黑沙灘還有兩個著名的玄武岩柱景觀：加達爾懸崖（Gardar cliff）和Hálsanefshellir洞穴，它們像風琴管一樣駐守在暗黑色的灘原上。這些八角玄武岩柱是火山熔岩突然冷卻後形成的，石柱的高度不一，有的只有半米，有的則高達 20 米。夏季，加達爾懸崖還是成千上萬只海鸚和北極燕鷗等野生鳥類的棲息地。從海岸邊還可以看到迪霍拉里（Dyrhólaey）的拱門在大西洋上若隱若現的美妙景色。",
        "最後，也是最重要的一點，在黑沙灘遊玩時，切記注意安全！這裡雖然風景絕美，但卻是冰島最危險的地方之一。由於大西洋洋流在到達冰島之前毫無陸地阻擋，積蓄了巨大的能量，因此這裡經常會出現巨浪，而且水流非常湍急。當浪拍打上來時，如果被浪擊倒，會很難再站起來。海浪會產生一股吸力，沖走沙石，將你拖入水面。而一旦落水，水流就會把你拉離海岸，而冰冷的海水則會在幾分鐘內讓你失溫而造成生命危險。2021年，一名台灣旅客因被捲入巨浪中而不幸遇難。因此，一定要與海水保持距離，保證生命安全！",
        "目前，為了保障旅客的生命安全，黑沙灘根據具體情況劃分了不同區域，並設置了相應的燈光。當黃燈和紅燈亮起時，旅客均不得進入相應顏色的區域。不必擔心，在安全的距離內，您完全可以看到同樣壯觀的景色。請注意，黑沙灘是沒有救生員或其他有人值守的，因此，請不要冒險靠近大海，為您的生命負責。",
      ],
    },
    {
      name: "傑古沙龍冰河湖",
      nameEn: "Jökulsárlón",
      region: "冰島東部",
      subtitle: "冰島「皇冠上的明珠」",
      imageUrl:
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/DSC_00389_4_cadb104463.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/DSC_00389_4_cadb104463.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_unsplash4_afb37701fc.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_unsplash6_8247d88371.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_unsplash5_67dfcff32b.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_unsplash2_3ff49270dd.jpg",
      ],
      paragraphs: [
        "傑古沙龍冰河湖（Jökulsárlón）是瓦特納冰川（Vatnajökull）南部出口冰川Breiðamerkurjökull冰川的一片瀉湖，靠近冰島1號環島公路，距離雷克雅維克約370公里，是冰島最偉大的自然奇觀之一。",
        "冰河湖的歷史不久，大約在20世紀30年代形成，氣候變暖是其主要成因。巨大的冰塊不斷從Breiðamerkurjökull冰川上斷裂掉落，漂浮在湖面上。湖面不寬，但深達250米，是冰島最深的湖泊。",
        "傑古沙龍冰河湖被《孤獨星球》列為此生必去景點之一。它從一個狹窄的入口流入大西洋，隨河同流的冰塊被沖刷在黑沙灘上，留下了鑽石沙灘（Diamond Beach）這一壯觀景象。魚類豐富的冰河湖旁棲息著許多海豹，它們在湛藍的冰塊上曬著太陽，偶爾跳入湖中美美地飽餐一頓。景區全年開放，湖畔的小餐館也是如此。對於徒步愛好者來說，可以在傑古沙龍冰河湖與小冰河湖（Fjallsárlón）之間發現一條健行路線，沿途風景優美，令人難忘。",
        "從水上遊覽傑古沙龍冰河湖是最有趣且壯觀的方式。許多人喜歡乘船遊覽，因為這樣既能欣賞冰川湖，又能穿梭在冰山之間航行。有兩種船型——水陸兩棲船或衝鋒艇——可供選擇。其中最為熱門的選項就是傑古沙龍冰河湖水陸兩棲船遊。如果您想要更加沉浸式的體驗，那麼可以試試獨木舟項目，親手划船穿越鏡面般的水域，欣賞其充滿藍白色調的超現實環境。",
        "眾多流行文化的名篇曾在傑古沙龍冰河湖留下印跡，《007之雷霆殺機》和《007之擇日而亡》的動作場面在這裡攝製，《勞拉：古墓麗影》《蝙蝠俠：俠影之謎》以及綜藝《極速前進》等諸多頂級的製作都曾在此取景拍攝。",
      ],
    },
    {
      name: "飛機殘骸",
      nameEn: "Solheimasandur Plane Wreck",
      region: "冰島南部",
      subtitle: "南岸必訪景點",
      imageUrl:
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/plane_wreck_unsplash2_34bf5e223d.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/plane_wreck_unsplash2_34bf5e223d.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Plane_DC_3_6a46d18e06.png",
      ],
      paragraphs: [
        "飛機殘骸是冰島南岸一處非常有特色的景觀，可說是美麗的意外。這架道格拉斯 DC-3 飛機（R4D-8）原屬美國海軍所有，1973 年在南岸 Sólheimasandur 黑沙灘發生事故後迫降於沙灘之上，如今成為冰島南岸獨特地標，吸引無數旅客前來造訪。",
        "若需前往 DC-3 飛機殘骸，可選擇從停車場徒步（單程約 1.5–2 小時），或搭乘擺渡車減輕體力負擔。冬季請注意保暖與路況安全。",
      ],
    },
    {
      name: "鑽石沙灘",
      nameEn: "The Diamond Beach",
      region: "冰島東部",
      subtitle: "當冰山遇上黑沙灘",
      imageUrl:
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/diamond_beach_unsplash_11020ebd2f.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/diamond_beach_unsplash_11020ebd2f.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/diamond_beach_unsplash2_8710988286.jpg",
      ],
      paragraphs: [
        "鑽石沙灘（The Diamond Beach）的原名是Breiðamerkursandur沙灘，位於冰島南部，瓦特納冰川（Vatnajökull）南端傑古沙龍冰河湖（Jökulsárlón）附近。鑽石沙灘的得名是因為沙灘上晶瑩剔透的透明體，而這些實際上並不是鑽石，而是傑古沙龍冰河湖上的漂浮的冰山隨河流流向大西洋中，擱淺在了黢黑的沙灘上。伴隨著洶湧的大西洋海浪，透亮的冰山與暗黑的沙灘透露著一絲詭譎異世的氣氛。",
        "冰島以黑沙灘聞名於世，而鑽石海灘也當然不是冰島唯一的黑色海灘，其中最有名的黑沙灘之一當屬位於維克（Vík í Mýrdal）附近的黑沙灘（Reynisfjara）。這些黑沙灘的形成得歸因於冰島的火山地貌。當火山熔岩與冰冷的海水接觸後迅速冷卻形成玄武岩，隨著時間的推移，碎裂的玄武岩變得越來越小，最終變成了沙子。",
        "全年的任何時候都適合造訪鑽石海灘。夏季陽光充足，日照時間長，交通也較為便利安全；沙灘上的冰塊來自冰川，夏季也不會融化，反而在陽光下更加耀眼。冬季北大西洋海面氣勢磅礡，海浪拍打黑色沙灘，景色更為壯觀；金色日落也讓白天格外上鏡。幸運的話，還有機會在鑽石海灘上看見北極光。冬季造訪請務必穿暖，並與海浪保持安全距離。",
      ],
    },
    {
      name: "黃金瀑布",
      nameEn: "Gullfoss",
      region: "冰島南部",
      subtitle: "在陽光下流動的黃金",
      imageUrl:
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gullfoss1_9c5319c04c.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gullfoss1_9c5319c04c.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gullfoss2_4aa3699337.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gullfoss3_62d8e5e998.jpg",
      ],
      paragraphs: [
        "黃金瀑布（Gullfoss）位於 Haukadalur 山谷的 Hvítá 河上，是冰島最受歡迎的旅遊景點之一，與辛格維利爾國家公園、蓋錫爾間歇泉地帶組成著名的黃金圈線路。",
        "黃金瀑布由兩段瀑布組合而成，冬季地表被白雪覆蓋時景色尤為壯麗。走近瀑布時，您將被巨大的水流所震撼；在陽光照射下，水珠有時會散發金色光芒。冬季亦是拍攝北極光的熱門地點之一，請注意路面結冰，勿離開主路。",
      ],
    },
    {
      name: "蓋錫爾間歇泉地帶",
      nameEn: "The Great Geysir and Strokkur",
      region: "冰島南部",
      subtitle: "感受來自地表之下的自然力量",
      imageUrl:
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/be5ba64f349aa795f653231dac5e44a_fa8600600a.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/be5ba64f349aa795f653231dac5e44a_fa8600600a.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/geysir_unsplash_83e7e7b45e.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/geysir_unsplash2_dd17e22e52.jpg",
      ],
      paragraphs: [
        "Geysir 間歇泉被人們稱為蓋錫爾間歇泉地帶（The Great Geysir），英文單詞「Geyser」即因它而得名。它坐落於冰島西南岸 Haukadalur 山谷，與辛格維利爾國家公園和黃金瀑布共同組成黃金圈。",
        "史托克間歇泉（Strokkur）是目前最為活躍的間歇泉，每 5–10 分鐘噴發一次，高達約 30 米。請待在指定安全區域內，勿向間歇泉或地熱池投擲物品。",
      ],
    },
    {
      name: "米湖",
      nameEn: "Lake Mývatn",
      region: "冰島北部",
      subtitle: "北部火山地貌與地熱奇景",
      imageUrl:
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/myvatn2_c34ac89174.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/myvatn2_c34ac89174.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/myvatn3_409d3572c2.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/myvatn1_aeddb05db2.jpg",
      ],
      paragraphs: [
        "米湖（Mývatn）位於冰島北部，是環島自駕的經典北部亮點。周邊分佈著偽火山、熔岩地貌、地熱區與豐富鳥類生態，冬季雪景下尤為壯麗。",
        "可順道造訪黛提瀑布（Dettifoss）、赫盧茲布濟爾基爾地熱區（Hverir）等景點，並有機會在開闊夜空下追尋極光。",
      ],
    },
  ],
  routeOverviewSubtitle: "一號公路冬季環島自駕動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、取車）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）→ 南岸" },
    { label: "第 3 天", detail: "南岸瀑布群 → 黑沙灘 → 維克 → 南岸住宿" },
    { label: "第 4 天", detail: "瓦特納冰川 → 傑古沙龍冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "東部峽灣海岸公路 → 東部住宿" },
    { label: "第 6 天", detail: "米湖地區（地熱區、偽火山）→ 北部住宿" },
    { label: "第 7 天", detail: "西部白銀圈（熔岩瀑布、兒童瀑布）→ 雷克雅維克" },
    { label: "第 8 天", detail: "雷克雅維克市區（可選）→ 機場離境" },
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
        lng: -20.5322,
        lat: 64.3271,
        label: "第 2 天",
        detail: "黃金圈 → 南岸",
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
        lng: -14.4,
        lat: 65.26,
        label: "第 5 天",
        detail: "東部峽灣",
      },
      {
        lng: -17.0,
        lat: 65.6,
        label: "第 6 天",
        detail: "米湖地區",
      },
      {
        lng: -20.88,
        lat: 64.75,
        label: "第 7 天",
        detail: "西部白銀圈 → 雷克雅維克",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 8 天",
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
        "今天是您入境冰島的第一天。抵達後請先至租車櫃檯取車，工作人員會協助檢查車輛，並說明冰島冬季環島安全駕駛須知。之後即可前往雷克雅維克精選飯店入住安頓。\n\n若時間充裕，可另行加購藍湖溫泉或 Sky Lagoon 天空之境溫泉放鬆身心，為接下來的環島自駕儲備體力。",
      highlights: icelandSelfDriveWinter8Day1Highlights,
      optionalActivities: icelandSelfDriveWinter8Day1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈",
      accommodation: "南岸",
      description:
        "今日造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。於辛格維利爾國家公園漫步時，亦可另行加購絲浮拉裂谷（Silfra）浮潛、雪地摩托或溫泉體驗。結束後繼續南下，今晚入住南岸。",
      highlights: icelandSelfDriveWinter8Day2Highlights,
      optionalActivities: icelandSelfDriveWinter8Day2OptionalActivities,
    },
    {
      day: 3,
      title: "南岸風光",
      accommodation: "南岸",
      description:
        "今天請一早出發，沿冰島南岸一號公路南下。冬季南岸色調獨特：白雪覆蓋大地、天際染上一抹粉霞，為旅程增添溫暖氣息。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；冬季基於安全考量，塞里雅蘭瀑布後方小徑通常封閉。繼續南下造訪黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中；沿途亦可安排 DC-3 飛機殘骸，或另行加購冰川健行等戶外體驗。今晚繼續入住南岸。",
      highlights: icelandSelfDriveWinter8Day3Highlights,
      optionalActivities: icelandSelfDriveWinter8Day3OptionalActivities,
    },
    {
      day: 4,
      title: "冰河湖風光",
      accommodation: "南岸",
      description:
        "今日繼續往東南前進，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外震撼。\n\n若時間充裕，亦可另行加購藍冰洞探險或斯卡夫塔山冰川健行，深入認識歐洲最大冰川的冬日奇景。今晚繼續入住南岸。",
      highlights: icelandSelfDriveWinter8Day4Highlights,
      optionalActivities: icelandSelfDriveWinter8Day4OptionalActivities,
    },
    {
      day: 5,
      title: "東部峽灣風光",
      accommodation: "東部",
      description:
        "今日沿東部峽灣海岸公路北上，穿越幽靜峽灣與漁村，感受冰島東部壯闊而寧靜的冬日海岸風光。冬季東部日照時數較短，請預留充足行車時間，並留意天候與路況。今晚入住東部。",
      highlights: icelandSelfDriveWinter8Day5Highlights,
      optionalActivities: icelandSelfDriveWinter8Day5OptionalActivities,
    },
    {
      day: 6,
      title: "米湖風光",
      accommodation: "北部",
      description:
        "今日前往北部米湖（Lake Mývatn）地區，探索偽火山、熔岩地貌與地熱奇景等獨特火山地質景觀。米湖周邊是冬季追尋北極光的熱門區域之一，請留意天候預報與路面狀況。今晚入住北部。",
      highlights: icelandSelfDriveWinter8Day6Highlights,
      optionalActivities: icelandSelfDriveWinter8Day6OptionalActivities,
    },
    {
      day: 7,
      title: "西部白銀圈",
      accommodation: "雷克雅維克",
      description:
        "今日返回首都途中，遊覽西部白銀圈（Silver Circle）：熔岩瀑布（Hraunfossar）、兒童瀑布（Barnafoss）等西部特色景觀，為環島旅程劃下句點。傍晚回到雷克雅維克住宿。",
      highlights: icelandSelfDriveWinter8Day7Highlights,
      optionalActivities: icelandSelfDriveWinter8Day7OptionalActivities,
    },
    {
      day: 8,
      title: "離境日",
      accommodation: "—",
      description:
        "歡樂時光總是過得特別快。今天是離境日，請預留時間前往凱夫拉維克國際機場辦理還車與退稅。若班機時間較晚，可在雷克雅維克市區多留片刻，最後感受這座北歐首都的獨特氛圍。期待您下次再來冰島！",
      highlights: icelandSelfDriveWinter8Day8Highlights,
      optionalActivities: icelandSelfDriveWinter8Day8OptionalActivities,
    },
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含冰島駕駛實用資訊，以及各類景點、歷史、文化和自然等資訊描述）",
      "7 整天租車（多種車型可選，包含 CDW 碰撞險）",
      "冰島行程期間 7 晚住宿",
      "簽證輔助行程單材料提供",
      "台灣冰島雙時區服務",
      "VAT 增值稅",
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
            "透過帕芬假期租車，SUV、越野車、商務旅行等車型的最低年齡限制為 23 歲，其他小型轎車最低年齡限制為 20 歲。租車時，您必須持有合法且有效的駕照至少一年。台灣旅客需在來冰島之前申請駕照的英文版翻譯公證文件以及國際駕照。取車時，需出示國際駕照與駕照公證文件。注意：您需要準備一張主駕駛人名下的信用卡，並在租車時出示，用於處理車輛出現任何損壞或其他額外費用時的押金。我們接受美國運通卡、萬事達卡和 VISA 卡。",
        },
        {
          question: "在冰島租車需要什麼證件？",
          answer:
            "取車時需要駕駛人攜帶以下 3 種證件：駕照原件；駕照的英文翻譯公證文件；駕駛人本人名下的信用卡（用於支付汽車出現任何損壞或其他額外費用的押金）。我們接受萬事達卡、VISA 卡以及美國運通卡。",
        },
        {
          question: "你們的租車時間怎麼計算？",
          answer:
            "租車服務供應商以 24 小時為最小租賃單位，因此若還車時間晚於租車時間，需支付額外 24 小時的租車費用。例如今天上午 8 點開始租車，明天上午 11 點還車，將需支付 2 天的租車費用。",
        },
        {
          question:
            "環島自駕前後在雷克雅維克額外停留幾日，是否會自動添加相應的租車價格？",
          answer:
            "若在客製行程時添加了在雷克雅維克的額外停留日，套餐總價不會自動包含額外日期的租車費用。若希望這段期間也能用車，請聯絡我們，我們會重新確認訂單，額外租車費用將計入您的旅行餘額。若更希望在雷克雅維克步行或搭乘大眾運輸，您可以在 BSÍ 公車站搭乘 Flybus 前往機場。",
        },
      ],
    },
    {
      id: "insurance",
      title: "保險相關",
      items: [
        {
          question: "租車包含什麼保險？",
          answer:
            "我們提供的租車服務均包含基本責任保險和防撞險。防撞險有自付額（免賠額），發生事故時需由您支付，金額因租車類型與供應商而異。取車時可選擇支付額外費用以降低自付額。您也可購買額外保險，以防碎石路和灰土路行駛造成的損壞，額外保險可在取車時於服務台購買。我們也建議所有前往冰島的旅客提前購買旅行保險，為取消行程、行李遺失或被盗、醫療費用等提供保障。",
        },
        {
          question: "在冰島自駕租車保險主要包括哪幾種？",
          answer:
            "主要包括：1. 基礎碰撞險（CDW）— 覆蓋租賃車輛自身碰撞損傷，自付額最高約 35 萬 ISK。2. 超級碰撞險（SCDW）— CDW 升級版，大幅降低自付額。3. 碎石防護險（GP）— 覆蓋碎石路況造成的擋風玻璃、車燈、車身漆面、後視鏡損傷，自付額約 4 萬 ISK。4. 盜竊保護險（TP）— 覆蓋租賃車輛整車被盜，不包含車內個人財物。5. 第三方責任險 — 覆蓋事故中對第三方車輛或財產的損害。自付額因車行及車型可能有差異，預訂時請仔細核對條款。",
        },
        {
          question: "為什麼必須透過冰島本地車行購買保險？",
          answer:
            "目的是避開第三方平台「全險」陷阱，保障您的權益。國內第三方平台宣傳的「全險」常由中國境內保險公司承保，與冰島本地車行保險體系脫鉤；條款往往未覆蓋冰島常見風險（如 SAAP 沙塵險），理賠流程繁瑣且易遭拒賠。冰島本地車行保險專為冰島環境設計，提供 SAAP 沙塵與火山灰保險、GP 碎石險等；出險由車行直接處理，還車驗車透明。建議拒絕國內第三方平台保險，透過帕芬假期直連本地合規車行預訂，取車時核對保單並拍攝驗車影片。",
        },
        {
          question: "為什麼建議購買全險或零賠付保險套餐？",
          answer:
            "冰島路況與氣候特殊，碎石飛濺、極端天氣、狹窄單行橋與融雪濕滑路面等風險較高。強烈建議升級全險或零賠付（Zero Excess）套餐，確認 0 自付額的覆蓋範圍，讓旅程專注享受而非擔憂賠償。",
        },
        {
          question: "即便購買全險，哪些情況仍不賠付？",
          answer:
            "以下情況任何保險均不覆蓋，租車人需承擔全額維修及罰金：故意損壞車輛；酒駕／毒駕、危險駕駛；越野駕駛（Off-road）或闖入禁行區；疏忽造成的離合器、手煞車損壞；遺失車鑰匙、GPS；加油錯誤；車內燃燒物或腐蝕液體損壞；涉水損壞（部分零賠付套餐可賠，需提前確認）；動物碰撞（需停車報警 112）；陷車拖車費；交通違規罰單；車內財物被盜。",
        },
      ],
    },
    {
      id: "trip",
      title: "行程與自駕",
      items: [
        {
          question: "冬季在冰島自駕安全嗎？",
          answer:
            "雖然冬季天氣有時惡劣，但大部分時間冰島主要道路與城市道路暢通，鏟雪車會定期清理城鎮與熱門景點附近道路。冬季暴風雪有時可能迫使您改變計畫；透過帕芬假期預訂的優點是，天氣不佳時我們可依經驗與資源迅速與您共同調整行程。若對冬季駕駛沒有信心，也可選擇跟團套餐。",
        },
        {
          question: "在冰島自駕可以玩些什麼？",
          answer:
            "自駕讓您依自己的節奏前往喜歡的地方。可沿南岸觀賞瀑布、前往瓦特納冰川國家公園、體驗藍冰洞、參觀黃金圈、冬季追逐北極光、探索斯奈山半島、在藍湖溫泉放鬆、品嚐當地美食、乘船觀鯨等。選擇取決於天數與興趣，選擇權在您手中。",
        },
        {
          question: "去冰島自駕需要準備什麼行李？",
          answer:
            "無論哪個季節都可能遇到各種天氣，建議攜帶：防水防風外套與長褲、防水徒步鞋、透氣運動鞋、墨鏡、手套毛線帽圍巾、泳衣、羊毛衫或毛衣、羽絨衣、保濕霜與潤唇膏、手機支架，以及駕照翻譯公證文件。",
        },
        {
          question: "什麼是自選報名活動？",
          answer:
            "每一天行程下方列有對應的自選報名活動，您可依需求選擇是否自費參加。這些活動經嚴選，最能體現冰島當地風土人情或特色文化，可依喜好放心選擇。",
        },
      ],
    },
    {
      id: "accommodation",
      title: "住宿相關",
      items: [
        {
          question: "為什麼冰島的大床房都是兩張床拼起來的？",
          answer:
            "冰島旅宿業為提高入住率，雙人房大床多由兩張床拼接，前台會依預訂要求合併或拆分。僅首都個別豪華或精品飯店的高級房與套房有完整大床。您可在預訂頁選擇雷克雅維克地區的住宿級別，建議提早預訂以有更多選擇。",
        },
        {
          question: "套餐單人房為什麼需要補差價？",
          answer:
            "冰島單人房房價高於雙人房房價的一半，預設房價按雙人房均攤計算，因此單人房需補差價。若需全程單人房，可在初始頁面選 1 人查看全程單人房價格，細節可諮詢客服。",
        },
      ],
    },
  ],
  similarTrips: [
    {
      tripKey: "iceland/self-drive/winter/4",
      title: "4 天 3 夜冰島南岸冬季自駕遊",
      tourCode: "SSD-042",
      durationLabel: "4 天／3 夜",
      description:
        "在有限的冬季日照裡，將南岸精華景點一網打盡，包含傑古沙龍冰河湖、藍冰洞、黃金瀑布。",
    },
    {
      tripKey: "iceland/self-drive/winter/5",
      title: "5 天 4 夜冰島冬季精簡自駕套餐",
      tourCode: "SSD-052",
      durationLabel: "5 天／4 夜",
      description:
        "將冰島南部精華收入囊中，搭配戶外體驗，並有機會看見舞動的北極光！",
    },
    {
      tripKey: "iceland/self-drive/winter/6",
      title: "6 天 5 夜冰島冬季經典自駕遊",
      tourCode: "SSD-062",
      durationLabel: "6 天／5 夜",
      description:
        "領略冰島冬日風光，造訪經典黃金圈與南岸小眾景點，體驗冰洞探險、追逐極光。",
    },
    {
      tripKey: "iceland/self-drive/winter/7",
      title: "冰島西南岸 7 天 6 夜冬季自駕遊",
      tourCode: "SSD-072",
      durationLabel: "7 天／6 夜",
      description:
        "黃金圈、南岸與斯奈山半島盡收囊中，途中還有機會看見舞動的北極光。",
    },
  ],
};
