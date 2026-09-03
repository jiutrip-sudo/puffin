import type { TripPackage } from "./types";
import {
  icelandGroupSummer5Day1Highlights,
  icelandGroupSummer5Day1OptionalActivities,
} from "./iceland-group-summer-5-day1-cards";
import {
  icelandGroupSummer5Day2Highlights,
  icelandGroupSummer5Day2OptionalActivities,
  icelandGroupSummer5Day3Highlights,
  icelandGroupSummer5Day3OptionalActivities,
  icelandGroupSummer5Day4Highlights,
  icelandGroupSummer5Day4OptionalActivities,
  icelandGroupSummer5Day5Highlights,
  icelandGroupSummer5Day5OptionalActivities,
} from "./iceland-group-summer-5-days2-5-cards";

export const icelandGroupSummer5: TripPackage = {
  id: "iceland-group-summer-5",
  tripKey: "iceland/group/summer/5",
  slug: "iceland-summer-5-day-tour-package-snaefellsnes-reynisfjara-jokulsarlon",
  tourCode: "SMD-051",
  title: "5 天 4 夜冰島夏季夢幻跟團遊",
  subtitle: "斯奈山半島&黑沙灘&冰河湖",
  duration: { days: 5, nights: 4 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-051",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/jokulsarlon_unsplash4_afb37701fc.jpg",
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
      "這個 5 天 4 夜夏季跟團套餐涵蓋南岸兩日、冰川健行與斯奈山半島，由品質小巴團與專業嚮導帶領。行程含 Sky Lagoon 體驗，善用夏季長日照與午夜陽光，節奏適中、安排務實。",
    full: `這個 5 天 4 夜夏季跟團套餐涵蓋南岸兩日、冰川健行與斯奈山半島，由品質小巴團與專業嚮導帶領。套餐含凱夫拉維克機場至市區大巴接送與 Sky Lagoon 溫泉體驗，充分利用夏季長日照與午夜陽光，行程安排務實。

南岸動線串連塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）；冰川健行由嚮導陪同並提供安全裝備（10 月前為冰川健行，之後改為藍冰洞體驗）。第四日造訪斯奈山半島，涵蓋教會山（Kirkjufell）、海豹沙灘（Ytri Tunga）與黑教堂（Búðakirkja）。`,
  },
  gallery: [
    {
      id: "jokulsarlon_unsplash4_af",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_unsplash4_afb37701fc.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "jokulsarlon_unsplash3_c1",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_unsplash3_c1dc3489ab.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "Reynisfjara_b4e1fe11a5",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Reynisfjara_b4e1fe11a5.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "reynisfjara2_b3ec97ed1f",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/reynisfjara2_b3ec97ed1f.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "koushik_chowdavarapu_JT_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/koushik_chowdavarapu_JT_8_IW_Aaxp_Qk_unsplash_b8dd319dcb.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "ytri_tunga1_4f26805767",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/ytri_tunga1_4f26805767.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "欣賞冰島夏日的午夜陽光",
    "一覽冰島南部精華景點",
    "踏上斯奈山半島，造訪最熱機位教會山",
    "在冰河湖上近距離感受千年冰山",
    "沉浸在舒適的Sky Lagoon七步療法中",
    "踏上黑沙灘，一秒拍出劉昊然同款",
  ],
  attractions: [
    {
      name: "天空之境溫泉",
      nameEn: "Sky Lagoon",
      region: "雷克雅維克",
      subtitle: "在天然地熱溫泉水中將北大西洋的美景盡收眼底",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/group_in_sky_lagoon_c1a2fc7548.png",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/group_in_sky_lagoon_c1a2fc7548.png",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Sky_Lagoon_743552dfc3.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/skylagoon_b97c4aea60.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/skylagoon2_b2eca622df.jpg",
      ],
      paragraphs: [
        "在首都附近的天空之境溫泉享受放鬆時刻",
        "天空之境溫泉（Sky Lagoon）坐落在距離雷克雅維克6公里的斯凱亞峽灣（Skerjafjörður），是冰島首都地區第一個也是唯一一個溫泉浴場。地表下的地熱資源為溫泉池提供熱量，使水溫保持在38至40攝氏度。歸功於它的便利位置，天空之境溫泉成為了藍湖溫泉（Blue Lagoon）一個很好的替代選擇。",
        "在天空之境溫泉一定要體驗的項目就是這裡獨家的七步療法（7-step Ritual），包含溫泉池、冷水池、幹蒸桑拿、霧汽房、身體清潔磨砂、蒸汽溼蒸和品嚐冰島特色的深色漿果飲品，讓你在欣賞美景的同時，也能沉浸在平靜、自然的能量之中。",
        "想要了解更多，請下劃至FAQ板塊查看更加詳細的介紹。",
        "於2021年正式開放，天空之境溫泉的建築靈感來自冰島自然地質和傳統建築，選用了灰藍色和深綠色等色彩使建築與周圍的自然景象相得益彰。",
        "從70米長的無邊溫泉池向外看去，你不僅能夠一覽北大西洋的全景，欣賞到海上落日，還能夠眺望遠處的凱尼爾山（Keilir）、斯奈菲爾火山（Snæfellsjökull）、冰島總統府（Bessastaðir）。",
        "冬季，浸泡在溫暖的泉水中，你還有機會能夠看到絢麗的北極光在你上空飛舞。溫泉周圍的野生動物也極為多樣，如黑雁、蠣鷸、小磯鷂、北極燕鷗和鸕鷀，幸運的話，您還能看見它們潛入深海捕捉大魚的景象。",
        "在天空之境溫泉，大西洋的鹹溼氣味，野生動物和海洋潮汐的聲音，溫暖的地熱水和酒吧的美酒佳餚一定會帶給你全感官和心靈上的綜合美妙體驗。",
        "請注意：天空之境溫泉（Sky Lagoon）的最低參與年齡為12歲。",
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
        "維克黑沙灘（Reynisfjara Black Sand Beach，音譯為雷尼斯黑沙灘）因其位於維克（Vík í Mýrdal）附近而得名。沙灘位於冰島南岸的環島1號公路沿線，交通便捷，是冰島最著名的海灘之一。火山噴發形成的黝黑色砂石千百年來受到北大西洋的海浪拍打，每年有無數旅客被其魔幻、深邃又略顯恐怖的奇異景色而折服。",
        "讓維克黑沙灘從冰島眾多海灘中脫穎而出的，不僅是自古以來火山爆發後岩漿遇到海水迅速冷卻而形成的黝黑砂石，還有這片沙灘所能捕獲的風景。漫步於黑沙灘之上，可以眺望不遠處的雷尼斯岩（Reynisdrangar）。據說這些怪異的海柱是石化的巨魔，也有人堅信它們實際上曾經是海岸線懸崖的一部分，在其他部分被海水沖垮後依然屹立不倒。無論哪種說法能打動你，它們都賦予了黑沙灘一道獨特壯觀的風景線。",
        "維克黑沙灘還有兩個著名的玄武岩柱景觀：加達爾懸崖（Gardar cliff）和Hálsanefshellir洞穴，它們像風琴管一樣駐守在暗黑色的灘原上。這些八角玄武岩柱是火山熔岩突然冷卻後形成的，石柱的高度不一，有的只有半米，有的則高達 20 米。夏季，加達爾懸崖還是成千上萬只海鸚和北極燕鷗等野生鳥類的棲息地。從海岸邊還可以看到迪霍拉里（Dyrhólaey）的拱門在大西洋上若隱若現的美妙景色。",
        "最後，也是最重要的一點，在維克黑沙灘遊玩時，切記注意安全！",
        "目前，為了保障旅客的生命安全，維克黑沙灘根據具體情況劃分了不同區域，並設置了相應的燈光。當黃燈和紅燈亮起時，旅客均不得進入相應顏色的區域。不必擔心，在安全的距離內，您完全可以看到同樣壯觀的景色。請注意，維克黑沙灘是沒有救生員或其他有人值守的，因此，請不要冒險靠近大海，為您的生命負責。",
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
        "從水上游覽傑古沙龍冰河湖是最有趣且壯觀的方式。許多人喜歡乘船遊覽，因為這樣既能欣賞冰川湖，又能穿梭在冰山之間航行。有兩種船型——水陸兩棲船或衝鋒艇——可供選擇。其中最為熱門的選項就是傑古沙龍冰河湖水陸兩棲船遊。如果您想要更加沉浸式的體驗，那麼可以試試皮划艇項目，親手划船穿越鏡面般的水域，欣賞其充滿藍白色調的超現實環境。",
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
        "冰島以黑沙灘聞名於世，而鑽石海灘也當然不是冰島唯一的黑色海灘，其中最有名的黑沙灘之一當屬位於維克（Vík í Mýrdal）附近的維克黑沙灘（Reynisfjara）。這些黑沙灘的形成得歸因於冰島的火山地貌。當火山熔岩與冰冷的海水接觸後迅速冷卻形成玄武岩，隨著時間的推移，碎裂的玄武岩變得越來越小，最終變成了沙子。",
        "全年的任何時候都適合造訪鑽石海灘。夏季陽光充足，日照時間長，交通也較為便利安全；沙灘上的冰塊來自冰川，夏季也不會融化，反而在陽光下更加耀眼。冬季北大西洋海面氣勢磅礡，海浪拍打黑色沙灘，景色更為壯觀；金色日落也讓白天格外上鏡。幸運的話，還有機會在鑽石海灘上看見北極光。冬季造訪請務必穿暖，並與海浪保持安全距離。",
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
        "教會山（Kirkjufell）位於冰島西部的斯奈山半島之上，高463米，迷人的弧度、小小的尖頂以及植被覆蓋的山峰形似草帽，因此它也被台灣旅客稱為“草帽山”。",
        "教會山高高聳立在漁港小鎮格倫達菲厄澤（Grundarfjörður）的遠處，是冰島出鏡率最高的山峰，也是世界十大最美山峰之一，同時還是《權力的遊戲》中著名的“箭頭山”。教會山每天吸引著無數旅客和攝影師的到訪，他們無一例外都想在這裡留下一張多彩、別緻又巍美的照片。",
        "當您沿著54號公路向北駛向斯奈山半島時，教會山就會顯現在您的眼前。但請注意不要在路上停車下車拍照。教會山呈近乎完美的圓柱形，山的南側與陸地相連，因此，除了向海的北面，您可以從東西南三個方向欣賞山景。但是，您也可以劃皮划艇行至教會山腳下，從北面欣賞山峰景觀。",
        "在網絡上搜索一番，您會發現絕大多數教會山的照片左側都有一個精緻的瀑布，這就是位於54號公路另一側的教會山瀑布（Kirkjufellsfoss）。教會山瀑布很小，單論景色，它一定不如冰島那些最有名的瀑布，但它的位置讓它與教會山相輔相成，極大地增添了畫面的豐富程度，因此也成為了旅客紛紛而至的景點。",
        "關於教會山的徒步、攝影等資訊，您可以查看頁面下方的常見問題，那裡有更詳細的說明。",
      ],
    },
  ],
  routeOverviewSubtitle: "南岸與黃金圈夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、Sky Lagoon 溫泉）" },
    { label: "第 2 天", detail: "塞里雅蘭／斯科加瀑布 → 冰川健行 → 黑沙灘" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 維克" },
    { label: "第 4 天", detail: "斯奈山半島（教會山 → 海豹沙灘 → 黑教堂）" },
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
        lng: -18.057,
        lat: 63.794,
        label: "第 2 天",
        detail: "南岸瀑布 → 黑沙灘 → 維克",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 3 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 維克",
      },
      {
        lng: -23.8,
        lat: 64.8,
        label: "第 4 天",
        detail: "斯奈山半島",
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
      title: "入境日：雷克雅維克 & Sky Lagoon天空之境溫泉",
      accommodation: "雷克雅維克",
      description:
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n入境日安排 Sky Lagoon 天空之境溫泉體驗，在無邊泳池中眺望北大西洋海景。若班機抵達時間較早，亦可於市區散步，途經托寧湖（Tjörnin）一帶感受雷克雅維克市景。夏季長日照下，晚間仍有機會感受午夜陽光。建議早些休息，為次日南岸品質小巴團儲備體力。",
      highlights: icelandGroupSummer5Day1Highlights,
      optionalActivities: icelandGroupSummer5Day1OptionalActivities,
    },
    {
      day: 2,
      title: "塞里雅蘭瀑布 & 斯科加瀑布 & 索爾黑馬冰川 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日搭乘品質小巴團沿南岸一號公路南下。夏季南岸瀑布水量充沛、草木蔥鬱。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）、秘密瀑布（Gljúfrabúi）與斯科加瀑布（Skógafoss）；夏季可沿小徑繞至塞里雅蘭瀑布後方，斯科加瀑布晴朗時常可見彩虹。接著在專業嚮導帶領下進行索爾黑馬冰川（Sólheimajökull）徒步，穿戴安全裝備近距離感受千年冰川地貌（10 月前為冰川健行，之後改為藍冰洞體驗）。最後前往黑沙灘（Reynisfjara），遠處可見雷尼斯岩（Reynisdrangar）；夏季加達爾懸崖常有海鳥棲息。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店。",
      highlights: icelandGroupSummer5Day2Highlights,
      optionalActivities: icelandGroupSummer5Day2OptionalActivities,
    },
    {
      day: 3,
      title: "傑古沙龍冰河湖 & 鑽石沙灘 & 維克",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園。傑古沙龍冰河湖（Jökulsárlón）上漂浮著形態各異的冰山；對岸的鑽石沙灘（Diamond Beach）上，浮冰在黑色沙灘上晶瑩閃耀。夏季長日照讓冰河湖色彩格外飽和。\n\n回程途中經過覆蓋綠色苔蘚的埃爾德熔岩原（Eldhraun），並途經維克（Vík）。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupSummer5Day3Highlights,
      optionalActivities: icelandGroupSummer5Day3OptionalActivities,
    },
    {
      day: 4,
      title: "斯奈山半島：教會山 & 海豹沙灘 & 黑教堂",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團前往斯奈山半島，常被稱為「冰島縮影」，一日之內便可領略多樣地貌。\n\n造訪教會山（Kirkjufell）與教會山瀑布（Kirkjufellsfoss）、海豹沙灘（Ytri Tunga）觀察野生海豹、黑教堂（Búðakirkja），以及阿爾納斯塔皮（Arnarstapi）小漁村與 Djúpalónssandur 黑沙灘。夏季長日照讓半島風光更加清晰。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupSummer5Day4Highlights,
      optionalActivities: icelandGroupSummer5Day4OptionalActivities,
    },
    {
      day: 5,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續。\n\n若仍有餘裕，可在市區漫步：托寧湖（Tjörnin）、哈爾格林姆斯教堂（Hallgrímskirkja）或哈帕音樂廳（Harpa）都是不錯的選擇。",
      highlights: icelandGroupSummer5Day5Highlights,
      optionalActivities: icelandGroupSummer5Day5OptionalActivities,
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
      tripKey: "iceland/group/summer/4",
      title: "4 天 3 夜冰島夏季精簡跟團遊",
      tourCode: "SMD-041",
      durationLabel: "4 天／3 夜",
      description:
        "藍冰洞探險與南岸精華，適合時間有限的夏季旅客。",
    },
    {
      tripKey: "iceland/group/summer/6",
      title: "6 天 5 夜冰島夏季跟團遊",
      tourCode: "SMD-061",
      durationLabel: "6 天／5 夜",
      description:
        "更完整的夏季跟團路線，涵蓋更多冰島精華景點。",
    },
  ],
};
