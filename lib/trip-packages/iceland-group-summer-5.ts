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
  tourCode: "SLMMD-051",
  title: "5 天 4 夜冰島夏季夢幻跟團遊",
  subtitle: "斯奈山半島&黑沙灘&冰河湖",
  duration: { days: 5, nights: 4 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅未克",
    transport: "跟團",
    tourCode: "SLMMD-051",
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
      "歡迎您加入大樂旅行社旅行為您設計的冰島夏季五日夢幻套餐，讓您在這個冰島之夏留下最為難忘的旅行回憶！在這套精心設計的行程中，您將從首都出發，前往大名鼎鼎的南海岸和斯奈山半島，讓您在短短5日內，盡情體驗這片神秘而迷人的北部之地。",
    full: `歡迎您加入大樂旅行社旅行為您設計的冰島夏季五日夢幻套餐，讓您在這個冰島之夏留下最為難忘的旅行回憶！在這套精心設計的行程中，您將從首都出發，前往大名鼎鼎的南海岸和斯奈山半島，讓您在短短5日內，盡情體驗這片神秘而迷人的北部之地。

旅程從冰島的首都雷克雅未克（Reykjavik）開始，這裡不僅是冰島的文化中心，也是我們探險的起點。隨後，您將前往南岸，沿著南海岸線前行，探訪冰島最著名的瀑布之一——斯科加瀑布（Skógafoss）和塞里雅蘭瀑布（Seljalandsfoss）。在這裡，您可以近距離感受瀑布的磅礴氣勢和清新的水霧。接著，專業嚮導也將帶您前往神秘的黑沙灘（Reynisfjara），感受玄武岩柱的壯觀和沙灘的神秘氛圍。

您還將有機會近距離感受冰川的壯麗，探索冰河湖（Jökulsárlón）和聞名世界的鑽石沙灘（Diamond Beach），體驗斯奈山半島（Snæfellsnes）多樣化的風景。夏日，冰島的自然景觀呈現出一年之中最為生機盎然的一面，綿延的綠色與藍天交相輝映，彷彿步入仙境，更有機會感受何為午夜太陽的神聖光輝。

這個五日套餐不僅包含了精心策劃的行程，還有專業的嚮導服務，確保您的旅行安全、舒適且充滿樂趣。這將是一次讓您深入瞭解冰島自然和文化的旅程，讓您在冰島之夏留下最為難忘的旅行回憶。`,
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
    "踏上斯奈山半島，打卡最熱機位教會山",
    "在冰河湖上近距離感受千年冰山",
    "沉浸在舒適的Sky Lagoon七步療法中",
    "踏上黑沙灘，一秒拍出劉昊然同款",
  ],
  attractions: [
    {
      name: "天空之境溫泉",
      nameEn: "Sky Lagoon",
      region: "雷克雅未克",
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
        "天空之境溫泉（Sky Lagoon）坐落在距離雷克雅未克6公里的斯凱亞峽灣（Skerjafjörður），是冰島首都地區第一個也是唯一一個溫泉浴場。地表下的地熱資源為溫泉池提供熱量，使水溫保持在38至40攝氏度。歸功於它的便利位置，天空之境溫泉成為了藍湖溫泉（Blue Lagoon）一個很好的替代選擇。",
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
        "維克黑沙灘（Reynisfjara Black Sand Beach，音譯為雷尼斯黑沙灘）因其位於維克鎮（Vík í Mýrdal）附近而得名。沙灘位於冰島南岸的環島1號公路沿線，交通便捷，是冰島最著名的海灘之一。火山噴發形成的黝黑色砂石千百年來受到北大西洋的海浪拍打，每年有無數旅客被其魔幻、深邃又略顯恐怖的奇異景色而折服。",
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
        "傑古沙龍冰河湖（Jökulsárlón）是瓦特納冰川（Vatnajökull）南部出口冰川Breiðamerkurjökull冰川的一片瀉湖，靠近冰島1號環島公路，距離雷克雅未克約370公里，是冰島最偉大的自然奇觀之一。",
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
        "冰島以黑沙灘聞名於世，而鑽石海灘也當然不是冰島唯一的黑色海灘，其中最有名的黑沙灘之一當屬位於維克鎮（Vík í Mýrdal）附近的維克黑沙灘（Reynisfjara）。這些黑沙灘的形成得歸因於冰島的火山地貌。當火山熔岩與冰冷的海水接觸後迅速冷卻形成玄武岩，隨著時間的推移，碎裂的玄武岩變得越來越小，最終變成了沙子。",
        "全年的任何時候都適合來鑽石海灘遊覽打卡。夏季陽光充足，日照時間長，在交通層面上更加安全和便捷，沙灘上的冰塊由於是冰川冰，在夏季也不會融化，反而光芒會更加耀眼。冬季，北大西洋海面狂野不羈，海浪拍打著黑色的沙灘，形成一幅更加壯觀的畫面。冬季的金色日落讓鑽石海灘在白天非常上鏡。幸運的話，您還有機會能夠在鑽石沙灘上看見北極光。不過冬天遊覽要特別注意兩點，一是一定要穿得暖和一些；二是一定要與海浪保持安全距離。",
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
    { label: "第 1 天", detail: "雷克雅未克（入境、機場接送、Sky Lagoon 溫泉）" },
    { label: "第 2 天", detail: "塞里雅蘭／斯科加瀑布 → 冰川徒步 → 黑沙灘" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 維克" },
    { label: "第 4 天", detail: "斯奈山半島（教會山 → 海豹沙灘 → 黑教堂）" },
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
        detail: "雷克雅未克 → 機場離境",
      },
    ],
  },
  itinerary: [
    {
      day: 1,
      title: "入境日：雷克雅未克 & Sky Lagoon天空之境溫泉",
      accommodation: "雷克雅未克",
      description:
        "第一天到達冰島，我們將為您預訂雷克雅未克唯一的輕奢溫泉選擇——天空之境溫泉（Sky Lagoon），為您洗去長途航班的疲憊，也為您即將到來的旅途做好準備。在冰島，呼吸的空氣總是夾雜著大海的溫度，而Sky Lagoon溫泉緊鄰大西洋，溫泉設有無邊泳池，彌合了溫泉與大洋，大洋與天空的界限，讓您在泡溫泉的同時，欣賞洶湧澎湃的大西洋景觀和雷克雅未克岩石密佈的壯麗海岸線美景如果時間充足，您完全可以拿著我們為您客製的中文路書，在雷克雅未克市區探索一番，您可以漫步在哈爾格林姆斯大教堂（Hallgrimskirkja）的陰影下，感受這座城市的宗教氛圍；或者在托寧湖（Tjörnin）邊喂天鵝，享受城市的寧靜，沉浸在世界最北部首都的溫暖和浪漫當中。遊玩結束，您不妨回到飯店好好休息，為接下來的冒險做好準備。",
      highlights: icelandGroupSummer5Day1Highlights,
      optionalActivities: icelandGroupSummer5Day1OptionalActivities,
    },
    {
      day: 2,
      title: "塞里雅蘭瀑布 & 斯科加瀑布 & 索爾黑馬冰川 & 黑沙灘",
      accommodation: "南岸",
      description:
        "您將在今天連番探索冰島南海岸的多個黃金景點，其中包括三支風光各異的瀑布，令人腎上腺素飆升的壯美冰川，還有冰島最出圈的景點——雷尼斯黑沙灘（Reynisfjara），以及沙灘上多處奇妙又壯觀的玄武岩景觀。您將首先遊覽並觀賞南岸的三支著名瀑布，它們分別是塞里雅蘭瀑布（Seljalandsfoss）、秘密瀑布（Gljúfrabúi）以及斯科加瀑布（Skógafoss）。塞里雅蘭瀑布是冰島南岸最受歡迎的景點之一，它從古老的海崖傾瀉而下，直入潭底。最特別的地方在於您可以繞到瀑布後方，從不同的視角觀賞瀑布和周圍美景，彷彿置身於水簾洞之中。秘密瀑布隱藏在塞里雅蘭瀑布附近500米的峽谷中，是一座被山洞遮蔽的神秘瀑布。走入峽谷，您會發現水流從頭頂流至眼前，營造出一種曲徑通幽的氛圍。斯科加瀑布大氣磅礴，水霧在晴天時常形成彩虹甚至雙彩虹。此外，斯科加瀑布還與一個維京寶藏的傳說相關，增添了其神秘性。隨後，專業的冰川嚮導將會迎接您踏上索爾黑馬冰川（Sólheimajökull），併為您提供一套專屬的冰川徒步裝備，開啟一場令人心馳神往的冰川徒步冒險。最後，您將到達曾被《國家地理雜誌》評為世界十大非熱帶海灘之一的雷尼斯黑沙灘。近距離欣賞黝黑的火山沙被強勁的大西洋海浪拍打著的場景，這也是拍攝超自然風光照片的最好機位。（注：冰川徒步體驗僅限10月前，10月開始將替換為藍冰洞體驗）。",
      highlights: icelandGroupSummer5Day2Highlights,
      optionalActivities: icelandGroupSummer5Day2OptionalActivities,
    },
    {
      day: 3,
      title: "傑古沙龍冰河湖 & 鑽石沙灘 & 維克鎮",
      accommodation: "雷克雅未克",
      description:
        "今天無疑會是令人心潮澎湃的一天，在這裡，您將親身體驗千年冰山的神秘魅力，沉浸在冰晶般湛藍的湖水之中，感受地球深處傳來的脈動。傑古沙龍冰河湖（Jökulsárlón）是冰島南岸的一顆璀璨明珠，由瓦特納冰川國家公園內的Breiðamerkurjökull冰川融水形成。湖中漂浮著形態各異的巨型冰塊，它們在陽光的照射下閃耀著耀眼的光芒，彷彿是大自然精心雕琢的藝術品。同樣，您還會欣賞到毗鄰傑古沙龍冰河湖的鑽石沙灘（Diamond Beach）。這個沙灘因其黑色的火山沙和散落其上的晶瑩剔透的冰塊而得名，這些冰塊在陽光下閃爍如鑽石，故被稱為“鑽石沙灘。在回程的途中，您會經過連綿起伏的埃爾德熔岩原（Eldhraun），各種新奇的景觀將不斷地映入您的眼簾。",
      highlights: icelandGroupSummer5Day3Highlights,
      optionalActivities: icelandGroupSummer5Day3OptionalActivities,
    },
    {
      day: 4,
      title: "斯奈山半島：教會山 & 海豹沙灘 & 黑教堂",
      accommodation: "雷克雅未克",
      description:
        "斯奈山半島位於冰島西部，在法國作家儒勒·凡爾納的著名小說《地心遊記》中，通往地球中心的入口就位於斯奈菲爾火山。直至今日，斯奈山半島仍被人們認為是一處充滿靈性的地方。您的旅途將囊括這片半島之上的精華景點，一覽“微型冰島”的風貌：斯奈山半島（Snæfellsnes）是冰島西部的一塊瑰寶，以其多樣化的自然景觀和地質特徵而被譽為“冰島縮影”。在這片神奇的土地上，您將體驗到冰島的精華所在。以下是您旅途中將囊括的六大精華景點：您會來到因其獨特的形狀而聞名的教會山（Kirkjufell），又稱草帽山，與之相伴的教會山瀑布（Kirkjufellsfoss）如絲帶般飄落，是攝影愛好者的必去之地。除此之外，以其神秘的黑沙岩外觀而著稱的黑教堂（Búðakirkja），在蒼茫的荒野中訴說著古老的故事，也是斯奈山半島上的一處標誌性建築。同樣，您也會途徑海豹沙灘（Ytri Tunga），看憨態可掬的野生海豹在海灘上悠然自得地曬太陽。斯奈山半島上，阿爾納斯塔皮（Arnarstapi）小漁村和黑沙灘（Djúpalónssandur）更是以其壯麗的海岸線和獨特的地質景觀，讓人彷彿置身於冰島的傳奇之中。這裡不僅是自然愛好者的天堂，也是歷史文化探索者的樂園，您將在這裡感受到冰島自然與文化的深厚交織。",
      highlights: icelandGroupSummer5Day4Highlights,
      optionalActivities: icelandGroupSummer5Day4OptionalActivities,
    },
    {
      day: 5,
      title: "離境日",
      accommodation: "—",
      description:
        "今天您將啟程前往機場離開冰島，我們將會根據您的航班資訊提前預訂好前往機場的接送巴士。如果您的時間充足，不妨在雷克雅未克市區的街道漫步，在咖啡館和烘焙店裡享受時光的緩慢流逝。如果您希望利用時間參加趣味項目，可以考慮室內的熔岩秀（Lava Show）或飛躍冰島4D電影。如果您的時間不足，那麼我們建議您直接前往機場，在凱夫拉維克國際機場的免稅店裡選購紀念品和特色手信。冰島風光季季不同，如果有機會，我們歡迎您下次再來冰島，體驗不一樣的風景，或是深入自駕探尋小眾景點，或是在冬季收穫極光和藍冰洞帶給自己的震撼和感動。",
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
      tourCode: "SLMMD-041",
      durationLabel: "4 天／3 夜",
      description:
        "藍冰洞探險與南岸精華，適合時間有限的夏季旅客。",
    },
    {
      tripKey: "iceland/group/summer/6",
      title: "6 天 5 夜冰島夏季跟團遊",
      tourCode: "SLMMD-061",
      durationLabel: "6 天／5 夜",
      description:
        "更完整的夏季跟團路線，涵蓋更多冰島精華景點。",
    },
  ],
};
