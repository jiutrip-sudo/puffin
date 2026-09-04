import type { TripPackage } from "./types";
import {
  icelandGroupSummer6SouthHikingDay1Highlights,
  icelandGroupSummer6SouthHikingDay1OptionalActivities,
} from "./iceland-group-summer-6-south-hiking-day1-cards";
import {
  icelandGroupSummer6SouthHikingDay2Highlights,
  icelandGroupSummer6SouthHikingDay2OptionalActivities,
  icelandGroupSummer6SouthHikingDay3Highlights,
  icelandGroupSummer6SouthHikingDay3OptionalActivities,
  icelandGroupSummer6SouthHikingDay4Highlights,
  icelandGroupSummer6SouthHikingDay4OptionalActivities,
  icelandGroupSummer6SouthHikingDay5Highlights,
  icelandGroupSummer6SouthHikingDay5OptionalActivities,
  icelandGroupSummer6SouthHikingDay6Highlights,
  icelandGroupSummer6SouthHikingDay6OptionalActivities,
} from "./iceland-group-summer-6-south-hiking-days2-6-cards";

export const icelandGroupSummer6SouthHiking: TripPackage = {
  id: "iceland-group-summer-6-south-hiking",
  tripKey: "iceland/group/summer/6/south-hiking",
  slug: "iceland-summer-6-day-adventure-tour-package-glacier-hiking-volcano-whale-watching",
  tourCode: "SMD-063",
  title: "6 天 5 夜冰島夏季徒步探險跟團遊",
  subtitle: "冰川健行&火山探險&首都觀鯨",
  duration: { days: 6, nights: 5 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-063",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/Landmannalaugar_2_620b529d48.jpg",
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
      "這個 6 天 5 夜夏季探險跟團套餐涵蓋火山內部探險、觀鯨、南岸冰川健行與冰河湖，由品質小巴團與專業嚮導帶領。第五日為自由活動，可另行加購蘭德曼納勞卡高地徒步。",
    full: `這個 6 天 5 夜夏季探險跟團套餐涵蓋火山內部探險、雷克雅維克觀鯨、南岸冰川健行與傑古沙龍冰河湖，由品質小巴團與專業嚮導帶領。套餐含凱夫拉維克機場至市區大巴接送，充分運用夏季日照長的優勢。

第二日將搭乘升降機深入 Þríhnúkagígur 休眠火山內部，並從雷克雅維克老港口出海觀鯨。南岸行程涵蓋塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、索爾黑馬冰川健行、黑沙灘（Reynisfjara）與雷尼斯岩（Reynisdrangar）；第四日造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。

第五日為自由活動，可另行加購蘭德曼納勞卡（Landmannalaugar）高地徒步——僅夏季開放，流紋岩山脈色彩斑斕。夏季迪霍拉里（Dyrhólaey）等地常有海鸚棲息，實際停留時間將由嚮導依天候與路況調整。`,
  },
  gallery: [
    {
      id: "Landmannalaugar_2_620b52",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Landmannalaugar_2_620b529d48.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "Hiking_83c27cfc41",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Hiking_83c27cfc41.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "inside_the_volcano_by_bi",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/inside_the_volcano_by_bicnick_105c479b81.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "3_62c3245c5d",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/3_62c3245c5d.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "jared_erondu_j4_Pa_E7_E2",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jared_erondu_j4_Pa_E7_E2_Ws_unsplash_f444c22749.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "深入探索火山內部奧秘",
    "用健行的方式解鎖高地內陸",
    "感受黑沙灘的神奇力量",
    "欣賞南部三大瀑布的不同風格",
    "抵達傑古沙龍冰河湖觸摸千年冰山",
    "一覽千年歷史的羽毛峽谷",
  ],
  attractions: [
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
        "需要提醒旅客的是，無論是夏季還是冬季前往塞里雅蘭瀑布，都需要注意這條小路極其濕滑，由於瀑布落差巨大，因此無論是否有風，瀑布都會打濕這條隱藏在其後的小路。冬季，這條小路有可能會因為安全原因而封路，如果幸運沒有遇到道路封閉的情況，請一定要注意腳下，另外還要注意頭上可能會落下的冰柱。",
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
      name: "蘭德曼納勞卡",
      nameEn: "Landmannalaugar",
      region: "冰島南部",
      subtitle: "進入火山中心地帶，用腳步丈量冰島高地",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/landmannalaugar_unsplash3_2b2dc0fc79.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/landmannalaugar_unsplash3_2b2dc0fc79.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/fernando_puente_GJYY_5_VZB_3c_unsplash_727770bf3b.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jon_flobrant_t_Ssb28hz_ZSI_unsplash_c7b16cdc81.jpg",
      ],
      paragraphs: [
        "健行愛好者的夢幻樂園",
        "蘭德曼納勞卡（Landmannalaugar）位於冰島南部的內陸高地，處於Laugahraun熔岩地邊緣。其名直譯為“大眾泳池”，是冰島南部自駕遊的熱門景點，也是健行旅行者的天堂，有著眾多可供選擇的健行路線，同時還以其豐富的天然溫泉和斑瀾的地質特徵而著稱。與冰島的其他景點相比，蘭德曼納勞卡的交通略顯不便，但這也為追求空曠寧靜的旅客提供了一個遠離人群的好機會。",
        "蘭德曼納勞卡所處的Laugahraun熔岩地形成於1477年前後的火山爆發，讓它成為了一幅巨大的畫卷，五顏六色的流紋巖山峰讓人目不暇接，綠色、藍色、黃色、紅色和粉色的岩石不斷映入眼簾，就像是小時候用油筆塗畫一樣隨意又充滿大自然的想像力。",
        "蘭德曼納勞卡是健行旅行的理想去處，這裡有多條長度和難度各異的路線供健行者選擇。短途的路線包括Brennisteinsalda火山線路，領略流紋巖山脈的集大成者；一小時健行攀登Bláhnjúkur，欣賞藍峰頂端的絕美風景；四小時健行前往Ljótipollur火山口湖，看看這口“醜水坑”究竟是美是醜。",
        "長途路線中最有名的當屬“Laugavegur”路線，長度約為54km，健行者通常需要4天時間從北到南走完這條路線，終點為索斯莫克（Þórsmörk）。沿途會穿過色彩斑斕的流紋巖山、黑曜石般的熔岩地、熱氣騰騰的溫泉、清澈如鏡的湖泊、暗世界的黑色沙漠，最後到達一片鬱鬱蔥蔥的森林，國家地理雜誌曾將其列為世界上最美麗的健行路線之一。",
        "在蘭德曼納勞卡健行旅行，最完美的放鬆方式無疑是在山谷中的天然溫泉中閉目養神、舒緩肌肉，畢竟這裡的名字翻譯過來就是“大眾泳池”，它在歷史上被用作偏遠地區的地熱療養之地。因此，一定別忘了在你的登山包中裝上一件泳衣和浴巾。",
        "不過，需要注意的是，如果您選擇自駕前往蘭德曼納勞卡高地，如今冰島環境局政策有所更新，需要您提前預定好停車位哦。",
      ],
    },
  ],
  routeOverviewSubtitle: "南岸健行探險夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送）" },
    { label: "第 2 天", detail: "火山內部探險與雷克雅維克觀鯨" },
    { label: "第 3 天", detail: "南岸三大瀑布 → 冰川健行 → 黑沙灘" },
    { label: "第 4 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "自由活動日（可選高地健行）" },
    { label: "第 6 天", detail: "雷克雅維克 → 機場離境" }
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
        lng: -21.9426,
        lat: 64.1466,
        label: "第 2 天",
        detail: "火山內部探險與觀鯨",
      },
      {
        lng: -19.0,
        lat: 63.55,
        label: "第 3 天",
        detail: "南岸瀑布 → 冰川健行 → 黑沙灘",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 4 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 5 天",
        detail: "自由活動日",
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
      title: "入境日：雷克雅維克市區",
      accommodation: "雷克雅維克",
      description:
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n若班機抵達時間較早，可在市區漫步感受極北首都的風貌，沿著海岸線散步或造訪哈爾格林姆斯大教堂。亦可另行加購 Sky Lagoon 天空之境溫泉。夏季日照長，建議早休息，為明日出發儲備體力。",
      highlights: icelandGroupSummer6SouthHikingDay1Highlights,
      optionalActivities: icelandGroupSummer6SouthHikingDay1OptionalActivities,
    },
    {
      day: 2,
      title: "火山內部探秘 & 雷克雅維克觀鯨",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團前往 Þríhnúkagígur 休眠火山，徒步穿越火山口後乘坐升降機深入地球內部，在專業嚮導帶領下近距離觀察多彩礦石層與岩壁構造。這是世界上少數允許旅客進入的火山之一。\n\n下午返回雷克雅維克，從老港口（Old Harbour）出海觀鯨。夏季冰島海域常見座頭鯨、小鬚鯨與白喙海豚。傍晚返回市區住宿。",
      highlights: icelandGroupSummer6SouthHikingDay2Highlights,
      optionalActivities: icelandGroupSummer6SouthHikingDay2OptionalActivities,
    },
    {
      day: 3,
      title: "南岸三大瀑布 & 索爾黑馬冰川健行 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日品質小巴團沿南岸一號公路南下。夏季日照長，沿途綠意盎然。\n\n首先造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；天候許可時可繞行至塞里雅蘭瀑布後方小徑。接著在專業嚮導帶領下進行索爾黑馬冰川（Sólheimajökull）徒步，穿戴安全裝備踏上夾雜火山灰紋路的藍白冰川。（注：冰川健行體驗僅限 10 月前，10 月開始將替換為藍冰洞體驗。）\n\n最後前往黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中。夏季迪霍拉里（Dyrhólaey）常有海鸚棲息。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店。",
      highlights: icelandGroupSummer6SouthHikingDay3Highlights,
      optionalActivities: icelandGroupSummer6SouthHikingDay3OptionalActivities,
    },
    {
      day: 4,
      title: "傑古沙龍冰河湖 & 鑽石沙灘",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。浮冰在湖面緩緩漂移，夏季陽光下冰塊晶瑩閃耀，與黑色沙灘形成鮮明對比。\n\n返程途中將經過埃爾德熔岩原（Eldhraun）與維克（Vík），夏季維克附近常有魯冰花盛開。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupSummer6SouthHikingDay4Highlights,
      optionalActivities: icelandGroupSummer6SouthHikingDay4OptionalActivities,
    },
    {
      day: 5,
      title: "自由活動日（可選蘭德曼納勞卡徒步）",
      accommodation: "雷克雅維克",
      description:
        "今日為自由活動日，可在雷克雅維克市區自由安排，漫步洛加維格大街（Laugavegur）、哈帕音樂廳（Harpa）與彩虹街等景點。\n\n建議另行加購蘭德曼納勞卡（Landmannalaugar）高地徒步一日遊——僅夏季開放，流紋岩山脈色彩斑斕，徒步結束後可在天然地熱溫泉中放鬆。亦可另行加購絲浮拉裂谷（Silfra）浮潛、觀鯨或溫泉等體驗。內陸高地一般於 6 月至 9 月開放，具體時間依天候而定。今晚繼續入住雷克雅維克。",
      highlights: icelandGroupSummer6SouthHikingDay5Highlights,
      optionalActivities: icelandGroupSummer6SouthHikingDay5OptionalActivities,
    },
    {
      day: 6,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續，並提前確認接機大巴時間。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻，或選擇前往溫泉放鬆。",
      highlights: icelandGroupSummer6SouthHikingDay6Highlights,
      optionalActivities: icelandGroupSummer6SouthHikingDay6OptionalActivities,
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
          question: "在冰島旅行安全嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"冰島是地球上最安全的國家之一。\"]",
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
      tripKey: "iceland/group/summer/6/south-snaefellsnes-golden-circle",
      title: "6 天 5 夜冰島夏季樂享跟團遊",
      tourCode: "SMD-061",
      durationLabel: "6 天／5 夜",
      description:
        "黃金圈、南岸與斯奈山半島，適合想兼顧西線風光的旅客。",
    },
    {
      tripKey: "iceland/group/summer/7/south-snaefellsnes-golden-circle",
      title: "7 天 6 夜冰島夏季經典跟團遊",
      tourCode: "SMD-071",
      durationLabel: "7 天／6 夜",
      description:
        "更完整的夏季跟團路線，含高地徒步自由日。",
    },
  ],
};
