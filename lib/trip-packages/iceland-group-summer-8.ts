import type { TripPackage } from "./types";
import {
  icelandGroupSummer8Day1Highlights,
  icelandGroupSummer8Day1OptionalActivities,
} from "./iceland-group-summer-8-day1-cards";
import {
  icelandGroupSummer8Day2Highlights,
  icelandGroupSummer8Day2OptionalActivities,
  icelandGroupSummer8Day3Highlights,
  icelandGroupSummer8Day3OptionalActivities,
  icelandGroupSummer8Day4Highlights,
  icelandGroupSummer8Day4OptionalActivities,
  icelandGroupSummer8Day5Highlights,
  icelandGroupSummer8Day5OptionalActivities,
  icelandGroupSummer8Day6Highlights,
  icelandGroupSummer8Day6OptionalActivities,
  icelandGroupSummer8Day7Highlights,
  icelandGroupSummer8Day7OptionalActivities,
  icelandGroupSummer8Day8Highlights,
  icelandGroupSummer8Day8OptionalActivities,
} from "./iceland-group-summer-8-days2-8-cards";

export const icelandGroupSummer8: TripPackage = {
  id: "iceland-group-summer-8",
  tripKey: "iceland/group/summer/8",
  slug: "iceland-summer-8-day-fire-and-ice-tour-package-snaefellsnes-volcano-jokulsarlon",
  tourCode: "SLMMD-083",
  title: "8 天 7 夜冰島夏季冰與火跟團遊",
  subtitle: "斯奈山半島&火山&冰河湖",
  duration: { days: 8, nights: 7 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅未克",
    transport: "跟團",
    tourCode: "SLMMD-083",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/adventurer_in_iceland_2ebebe9ba0.jpg",
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
      "如果您想利用8天時間深度體驗冰島的精華區域和遊玩項目，那麼這套8日冰與火套餐絕對是您的首選。",
    full: `如果您想利用8天時間深度體驗冰島的精華區域和遊玩項目，那麼這套8日冰與火套餐絕對是您的首選。

您將在冰島的南岸集中活動，遊覽黃金圈（Golden Circle）、南岸（South Coast）、斯奈山半島（Snæfellsnes）等黃金景點， 這裡不僅有氣勢磅礴的瀑布，還有獨特的黑沙灘和令人驚豔的冰河湖，讓您的冰島旅程充滿焦點，同時有機會踏足斯奈山半島領略絕世風光。

此外，您將跟隨專業嚮導開啟多個探險之旅，將此次行程的飽和度和體驗感拉到最頂！除此之外，冰島以其豐富的地熱資源而聞名，舒緩身心的冰島溫泉體驗也是必不可少。行程還有刺激的火山內部探險、出海觀鯨，您還可以開啟冰島難以抵達的內陸高地一日徒步之旅。

如果您仍在思考如何利用這8天時間度過您的旅途，不妨也將我們的8日環島套餐納入您的考慮。專業嚮導將以友好負責的態度，給您講述冰島的歷史文化，帶您去體驗冰島獨有的探險活動。您將擁有一次全方位的冰島體驗，從自然景觀到文化體驗，快來加入我們，一起探索這個神秘而迷人的北歐島國吧！`,
  },
  gallery: [
    {
      id: "adventurer_in_iceland_2e",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/adventurer_in_iceland_2ebebe9ba0.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "jokulsarlon_icebergs_and",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jokulsarlon_icebergs_and_zodiac_boats_a5aba51c43.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "seljalandsfoss_with_suns",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/seljalandsfoss_with_sunshine_49cd84bda9.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "todd_cravens_Qn_Brj_Y_n_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/todd_cravens_Qn_Brj_Y_n_F_Us_unsplash_3ab688c433.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "徜徉於迤邐的冰島南岸風光",
    "漫步黑白相映的絕美冰島黑沙灘",
    "流連於傑古沙龍冰河湖的古老冰山",
    "沐浴精緻舒適的冰島溫泉",
    "探索神秘而多樣化的斯奈山半島",
    "深入探索火山內部景觀",
    "揚帆出海追尋座頭鯨身影",
    "漫步迷你首都感受北歐風情",
  ],
  attractions: [
    {
      name: "黃金圈",
      nameEn: "Golden Circle",
      region: "冰島南部",
      subtitle: "在冰島的這條標誌性路線上體驗令人驚歎的自然奇觀",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/golden_circle1_b2e6f91bdb.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/golden_circle1_b2e6f91bdb.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/z3rd_03dd6ce7bf.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/geysir_unsplash3_82d9f4f9ea.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jan_brennenstuhl_i_Jyw_d_Mcs_VE_unsplash_950b4250f1.jpg",
      ],
      paragraphs: [
        "黃金圈可謂是冰島最熱門的線路之一。也是冰島本地人心中的冰島旅遊線路鼻祖。它不僅結合了冰島的獨特風光，還有豐富的歷史背景做支撐。從雷克雅未克出發，您將繞冰島南部行駛約 250 公里。沿途，您將參觀黃金圈上 3 個最佳景點：辛格維利爾國家公園、間歇泉和黃金瀑布。",
        "前往聯合國教科文組織世界遺產辛格維利爾國家公園（Þingvellir National Park），這裡是冰島維京時代議會 Alþingi 的所在地。從十世紀開始，辛格維利爾就被用作冰島人的政治聚集地。",
        "在您的訪問期間，您還會對實際的地質現象感到驚歎。該公園坐落在北美和歐亞板塊分離所形成的裂谷上。在 Almannagjá 峽谷，您甚至可以沿著一條小徑穿過山谷。",
        "或者您可以前往絲浮拉裂縫（Silfra Fissure），這是峽谷中充滿天然泉水的一段區域。水晶般清澈的能見度使其成為水肺潛水者的著名地點。何不參加由嚮導帶領的絲浮拉大裂縫浮潛之旅，享受驚險刺激的體驗呢？",
        "沿著黃金圈繼續前行，在 Haukadalur 山谷，您會近距離看到著名的間歇泉（The Great Geysir and Strokkur）。儘管聲名遠揚的蓋歇爾間歇泉本身現在處於休眠狀態，但是它旁邊的史托克間歇泉仍然處於活躍期。",
        "史托克間歇泉通常約 10 分鐘噴發一次沸騰的水柱和蒸汽。因此，您無需等待很長時間就能親眼目睹這一壯觀的景象。",
        "距離雷克雅未克最遠的是黃金瀑布（Gullfoss），它也是黃金圈路線上的三大景點之一，甚至這條線路的名稱也是以該瀑布的名字來命名的。",
        "如果天氣足夠好，天氣晴朗，金色的水流就可以清楚地看出瀑布的名字是如何得名的。您甚至可能會在瀑布的水花中看到彩虹。但黃金瀑布擁有兩層落入 70 米深的峽谷，無論天氣如何，它都令人驚歎不已。",
        "探索黃金圈的最佳方式之一是租車",
        "如果您不想開車，可以參加從首都出發的一日遊",
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
  routeOverviewSubtitle: "黃金圈、南岸、冰河湖、斯奈山半島與火山體驗夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅未克（入境、機場接送）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾 → 間歇泉 → 黃金瀑布 → 火山口）" },
    { label: "第 3 天", detail: "南岸瀑布 → 冰川徒步 → 黑沙灘" },
    { label: "第 4 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "斯奈山半島（教會山 → 布迪爾黑教堂）" },
    { label: "第 6 天", detail: "火山內部探秘 & 出海觀鯨" },
    { label: "第 7 天", detail: "雷克雅未克（自由活動日）" },
    { label: "第 8 天", detail: "雷克雅未克 → 機場離境" }
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
        detail: "斯奈山半島（教會山 → 布迪爾黑教堂）",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 6 天",
        detail: "火山內部探秘 & 出海觀鯨",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 7 天",
        detail: "雷克雅未克（自由活動日）",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 8 天",
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
        "今日，您將抵達冰島凱夫拉維克國際機場，我們為您提前預定的接機巴士將會根據您的航班時間等候您上車。到達冰島首都後，您可以利用時間探索雷克雅未克。這座世界上最北的首都坐落在北大西洋沿岸，博物館、咖啡館、餐館和精品店林立，散發著獨有的北歐小城的魅力。漫步在市中心熙熙攘攘的街道上，兩旁是五顏六色的建築和充滿活力的店面，讓您沉浸在這座城市悠閒而又熱鬧的氛圍中。您不妨可以自行前往感興趣的餐廳一品冰島美食，讓味蕾留下冰島初印象，在結束後，早早回到飯店休憩，調整身心，為後面幾天的旅程做好充足準備。",
      highlights: icelandGroupSummer8Day1Highlights,
      optionalActivities: icelandGroupSummer8Day1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈3+1：國家公園 & 間歇泉 & 黃金瀑布 & 火山口",
      accommodation: "雷克雅未克",
      description:
        "今日，您將踏上黃金圈一日之旅，這是冰島旅行不容錯過的一條最經典線路。您將遊覽辛格維利爾國家公園——間歇泉——黃金瀑布線路，見證冰島歷史與自然的最完美代表，體驗地球力量的洶湧與偉大，感受維京時代與神話的魅力。辛格維利爾國家公園（Þingvellir National Park）是冰島乃至世界歷史上的重要一頁。作為冰島議會的誕生地，它見證了維京時代的榮光。站在歐亞板塊與北美板塊的裂谷之上，您將親身感受到地球板塊的雄偉力量，彷彿能聽到大地的心跳。隨後，您將前往間歇泉，這裡是間歇泉現象的發源地。在這裡，您將目睹史托克間歇泉（Strokkur）的壯觀噴發，水柱沖天而起，展示著地球內部的澎湃熱情。此外，黃金瀑布（Gullfoss）將以其雷霆萬鈞之勢迎接您的到來。瀑布如絲綢般傾瀉而下，濺起的水霧在陽光下形成絢麗的彩虹，讓人心醉。此外，還能夠跟隨專業嚮導前往黃金圈沿線的小眾火山口景點，探索凱瑞斯火山口（Kerið Crater）神奇的繽紛地質，火山口的湖水呈現出深邃的藍色，火山壁則呈現出紅、橙、綠等斑斕色彩，為您的黃金圈旅程增添一抹獨特的記憶。今日的旅程不僅是自然觀光，更是一次穿越時空的探險，讓您在冰島的心臟地帶，留下難忘的足跡。",
      highlights: icelandGroupSummer8Day2Highlights,
      optionalActivities: icelandGroupSummer8Day2OptionalActivities,
    },
    {
      day: 3,
      title: "南岸風光：瀑布 & 冰川徒步 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今天您將首先遊覽冰島南部風格迥異的瀑布，接著前往冰川徒步體驗，最後抵達行程的亮點——冰島黑沙灘。塞里雅蘭瀑布（Seljalandsfoss）是冰島最著名的瀑布之一。落差高達60多米，更為獨特的是，在夏季，您可以穿越到水流柱的後方，以全新的視角欣賞瀑布和瀑布後的美妙景色。斯科加瀑布（Skógafoss）則是冰島最大、最宏偉的瀑布之一，落差達 60 米，寬 25 米。它位於斯科加河上，氣勢磅礴，巨大的水簾常常能在陽光下映射出彩虹，吸引著世界各地的旅客。索爾黑馬冰川（Sólheimajökull Glacier）是冰島最適合冰川徒步的冰川之一，您將跟隨專業的冰川嚮導，一同踏上這片壯闊雄偉的白色冰川，一覽沿途絕美風景，體驗在冰川行走的獨特經歷。（注：冰川徒步體驗僅限10月前，10月開始將替換為藍冰洞體驗）。最後，您將在冰島黑沙灘（Reynisfjara）抵達今日旅程的高潮，這是世界上最著名的黑沙灘之一，異世界的海岸景觀與千年的玄武岩地質造物在此融合，大西洋的洶湧力量與冰島崎嶇的海岸線在此奏響維京神話的交響樂。藍天、黑沙、咆哮的海浪和佇立在海中央的雷尼斯岩的對比色調，使這裡成為了全球旅行者的最愛。",
      highlights: icelandGroupSummer8Day3Highlights,
      optionalActivities: icelandGroupSummer8Day3OptionalActivities,
    },
    {
      day: 4,
      title: "冰河湖之旅：傑古沙龍冰河湖 & 鑽石沙灘",
      accommodation: "雷克雅未克",
      description:
        "<p>今天，您將揭開冰島南部奇觀的神秘面紗，從<strong>傑古沙龍冰河湖（Jökulsárlón）</strong>的冰川湖泊到<strong>鑽石沙灘（Diamond Beach）</strong>的黑沙冰山，漫步於大自然雕刻了數千年的蛇形<strong>羽毛峽谷（Fjaðrárgljúfur）</strong>，穿越廣袤的<strong>埃爾德熔岩原（Eldhraun）</strong>，在<strong>維克鎮（Vík）</strong>完成您的旅程，最後返回雷克雅未克。</p><p>今天的亮點無疑是被譽為\\\\",
      highlights: icelandGroupSummer8Day4Highlights,
      optionalActivities: icelandGroupSummer8Day4OptionalActivities,
    },
    {
      day: 5,
      title: "斯奈山半島：教會山 & 黑教堂",
      accommodation: "雷克雅未克",
      description:
        "今天，您將啟程前往冰島西部的瑰寶斯奈山半島地區，斯奈山半島，被譽為“冰島縮影”，因其地貌的多樣性和獨特性而聞名。在這裡，您將體驗到冰島自然景觀的精華。這裡是儒勒·凡爾納筆下《地心遊記》中通往地球中心的神秘入口所在地，斯奈菲爾火山（Snæfellsjökull）的陰影下，始終讓人覺得充滿神秘和靈性。斯奈山半島上景點密佈，不僅有酷似草帽而引人注目的“出片率第一”的教會山（Kirkjufell），與之相伴的教會山瀑布（Kirkjufellsfoss）如絲帶般從山間飄落，。這裡同樣也是著名劇集《權力的遊戲》的取景地。在斯奈山半島，布迪爾黑教堂（Búðakirkja）在荒野中靜靜述說著古老的故事，現如今它也已經成為諸多情侶的打卡地。在半島上也有名為Djúpalónssandur的黑沙灘，漫步在這片黑色的沙灘上，您的腳下是柔軟的火山沙，四周被陡峭的熔岩巖壁和翠綠的苔蘚覆蓋的山坡環繞，構成了一幅獨特的自然畫卷。除此之外，斯奈山半島上的阿爾納斯塔皮小漁村（Arnarstapi）、海豹沙灘（Ytri-Tunga）等諸多自然景點待您一一解鎖。在阿爾納斯塔皮，您可以漫步海邊，欣賞怪石嶙峋的海岸線，感受漁村的風貌。而在罕見的白色海豹沙灘，您或許會隨機遇見小海豹們懶洋洋躺在岸邊的礁石，享受一份悠然自得和安靜美好。",
      highlights: icelandGroupSummer8Day5Highlights,
      optionalActivities: icelandGroupSummer8Day5OptionalActivities,
    },
    {
      day: 6,
      title: "活動日1：火山內部 & 出海觀鯨",
      accommodation: "雷克雅未克",
      description:
        "今天，您將率先踏上一趟火山主題的旅程，進入Thrihnukagigur 火山深處，探索冰島地質奇觀的非凡魅力。在這個地底世界裡，鮮豔的色彩在巖洞壁上盡顯魅力，展現出冰島火山中心原始、純淨的美。這將是一次身臨其境的探索之旅，您將乘坐開放式纜索電梯下到火山內部，驚歎於火山口的巨大規模，地質歷史的聲響在這裡迴盪，周圍環繞著昔日熾熱噴發的痕跡，您將深刻體會到地球不可思議的力量和韌性。這是一次超越普通旅遊體驗的旅程，讓您一窺地球的內部構造。接下來，您將從雷克雅未克的港口出發，揚帆起航，開啟另一段冒險之旅——出海觀鯨，體驗到冰島豐富而繁榮的自然生物資源。在這趟觀鯨的航程中，您將有機會小鬚鯨、座頭鯨、港灣鼠海豚和白喙海豚等鯨魚類別，專業嚮導和友好的船員將歡迎您的到來，與您分享在遊覽中可能看到的各種鯨魚和海鳥的有趣資訊，並教您如何在海灣中發現鯨魚。(套餐內包含的天空之境溫泉(SkyLagoon)舒適體驗如果第一天沒有時間前往，也可調整至今天)",
      highlights: icelandGroupSummer8Day6Highlights,
      optionalActivities: icelandGroupSummer8Day6OptionalActivities,
    },
    {
      day: 7,
      title: "活動日2：自由活動日",
      accommodation: "雷克雅未克",
      description:
        "今天是您的自由活動日，您擁有絕對的自由度，可以在一眾一日遊活動中進行選擇，或是單純在雷克雅未克閒逛、放鬆。我們建議您前往神秘多彩的蘭德曼納勞卡（Landmannalaugar）進行高地徒步探險，大自然的藝術魅力在這裡得到了充分展現。更重要的是，這裡僅在夏季時節向旅客開放，一旦錯過又需要等待一整年。您將徒步穿越色彩斑斕的山脈、汩汩流淌的溫泉和廣闊的熔岩區。在探索這片偏遠荒野的崎嶇美景時，感受腳下火山碎石的清脆響聲。蘭德曼納勞卡是一趟絕對獨特的徒步旅行體驗，只在夏季開放的它，能讓您領略到不同尋常的美景和桀驁不馴的自由感。您的徒步探險將從主營地出發，然後，您將徒步大約4個小時，欣賞熔岩、峽谷、火山等最壯麗的風景，總徒步距離約為8-10公里。請注意：冰島內陸高地一般在夏季6月至9月上旬開放，如果您計劃選擇高地徒步團，需要確保您的出行時間包括在此時間段內。關於具體的開放時間，由於天氣等因素，每年的開放時間還會有些許差異，諮詢具體開放日期請至首頁最下方二維碼處添加客服。",
      highlights: icelandGroupSummer8Day7Highlights,
      optionalActivities: icelandGroupSummer8Day7OptionalActivities,
    },
    {
      day: 8,
      title: "離境日",
      accommodation: "—",
      description:
        "今日，您將搭乘我們為您提供的送機巴士前往凱夫拉維克國際機場離境冰島，機場大廳設有退稅櫃檯，並且有Blue Lagoon以及66North等眾多冰島優秀本土品牌免稅商店。如果您的航班允許，您也完全可以利用今天的時間探索雷克雅未克中您尚未踏足的街道或景點。哈爾格林姆斯大教堂、哈帕音樂廳、飛躍冰島4D秀，以及各種各樣新奇的博物館，無論是戶外或室內，相信他們一定能用美好愉悅填充您在冰島的最後一段記憶。",
      highlights: icelandGroupSummer8Day8Highlights,
      optionalActivities: icelandGroupSummer8Day8OptionalActivities,
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
          question: "預定後多久能收到相關的參團資料？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在您付完定金後的5-7個工作日內（且在參團前），我們會提供行程相關的訂單資訊清單（包含預定飯店資訊等）及簽證輔助材料；在付完全款並提供航班資訊等所有有效資訊後的5-7個工作日內（且在參團前），我們會提供完整的行程路書等。路書包含中文行程單、接送地址、各類景點、歷史、文化、自然等資訊描述。\"]",
        },
        {
          question: "什麼是自選報名活動？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"大樂旅行社旅行在每一天的行程下方增加了對應的自選報名活動，您可以根據自己的需求選擇是否自費參加這些額外的活動。\"]",
        },
        {
          question: "為什麼我只能選擇首都雷克雅未克地區的飯店等級？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為首都雷克雅未克的飯店選擇更多，且行程相對更靈活。而套餐內冰島其他地區的行程中，參團的顧客都是統一行動的，有固定的行程路線和固定的飯店。因此為保障行程的統一性與合理性，並不浪費顧客的遊覽時間，其他地區暫時無法選擇飯店等級，請您體諒。\"]",
        },
        {
          question: "為什麼不是所有飯店都能到飯店門口接團？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"為了維持雷克雅未克市中心舒適安全的城市環境，冰島政府規定旅遊巴士不可隨意進入市中心區域，而必須在附近指定的接車地點接送旅客。\"]",
        },
        {
          question: "套餐單人間為什麼需要補差價？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為冰島的單人間房價要高於雙人間房價的一半，而預定時的默認房價是按雙人間均攤至每人的價格來計算的。因此套餐內的單人間需要補交一筆差價。由於旅行團套餐系統設定在預定環節僅可以選首都雷克雅未克地區的房間數量，如果需要將套餐中包含的旅行團增加單人間，那麼需要在初始頁面選中1人來查看全程單人間價格，具體細節可諮詢客服。\"]",
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
      tripKey: "iceland/group/summer/7",
      title: "7 天 6 夜冰島夏季經典跟團遊",
      tourCode: "SLMMD-071",
      durationLabel: "7 天／6 夜",
      description:
        "黃金圈、南岸、斯奈山半島與自由活動日，適合時間較緊的夏季旅客。",
    },
    {
      tripKey: "iceland/group/summer/9",
      title: "9 天 8 夜冰島夏季跟團遊",
      tourCode: "SLMMD-093",
      durationLabel: "9 天／8 夜",
      description:
        "更完整的夏季跟團路線，涵蓋更多冰島精華景點。",
    },
  ],
};
