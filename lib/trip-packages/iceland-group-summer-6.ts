import type { TripPackage } from "./types";
import {
  icelandGroupSummer6Day1Highlights,
  icelandGroupSummer6Day1OptionalActivities,
} from "./iceland-group-summer-6-day1-cards";
import {
  icelandGroupSummer6Day2Highlights,
  icelandGroupSummer6Day2OptionalActivities,
  icelandGroupSummer6Day3Highlights,
  icelandGroupSummer6Day3OptionalActivities,
  icelandGroupSummer6Day4Highlights,
  icelandGroupSummer6Day4OptionalActivities,
  icelandGroupSummer6Day5Highlights,
  icelandGroupSummer6Day5OptionalActivities,
  icelandGroupSummer6Day6Highlights,
  icelandGroupSummer6Day6OptionalActivities,
} from "./iceland-group-summer-6-days2-6-cards";

export const icelandGroupSummer6: TripPackage = {
  id: "iceland-group-summer-6",
  tripKey: "iceland/group/summer/6",
  slug: "iceland-summer-6-day-relaxed-tour-package-golden-circle-south-coast-snaefellsnes",
  tourCode: "SMD-061",
  title: "6 天 5 夜冰島夏季樂享跟團遊",
  subtitle: "黃金圈&南岸風光&斯奈山半島",
  duration: { days: 6, nights: 5 },
  season: { label: "夏季", months: "5 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-061",
  },
  eyebrow: "冰島集合 · 跟團 · 夏季",
  backHref: "/trips/iceland/group/summer",
  backLabel: "返回夏季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/Hallgrimskirkja_and_statue_7708039358.jpg",
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
      "這個 6 天 5 夜夏季跟團套餐涵蓋黃金圈、南岸、冰河湖與斯奈山半島，由品質小巴團與專業嚮導帶領。夏季日照長，沿途可欣賞海鸚與午夜陽光下的冰島風光。",
    full: `這個 6 天 5 夜夏季跟團套餐涵蓋黃金圈、南岸、傑古沙龍冰河湖與斯奈山半島（Snæfellsnes），由品質小巴團與專業嚮導帶領。套餐含凱夫拉維克機場至市區大巴接送，充分運用夏季日照長的優勢，行程安排務實。

行程涵蓋黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss），並參觀凱瑞斯火山口（Kerið）；南岸則有塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、索爾黑馬冰川健行、黑沙灘（Reynisfjara）與雷尼斯岩（Reynisdrangar）。第四日造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）；第五日前往斯奈山半島，遊覽教會山（Kirkjufell）、海豹沙灘（Ytri-Tunga）與布迪爾黑教堂（Búðakirkja）。

入境日可前往 Sky Lagoon 天空之境溫泉放鬆身心。夏季迪霍拉里（Dyrhólaey）等地常有海鸚棲息，實際停留時間將由嚮導依天候與路況調整。`,
  },
  gallery: [
    {
      id: "Hallgrimskirkja_and_stat",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Hallgrimskirkja_and_statue_7708039358.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "skogafoss2_67abee5632",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/skogafoss2_67abee5632.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "Kirkjufell_2_2b1bc695aa",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Kirkjufell_2_2b1bc695aa.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "diamond_beach_unsplash_1",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/diamond_beach_unsplash_11020ebd2f.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    },
    {
      id: "View_over_Reynisdrangar_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/View_over_Reynisdrangar_97bb3d41fd.jpg",
      alt: "冰島夏季跟團",
      caption: "冰島夏季南岸",
    }
  ],
  highlights: [
    "沐浴在冰島夏季午夜陽光之下",
    "感受新潮舒適的溫泉文化",
    "遊覽黃金圈三大景點",
    "沿著一號公路在南海岸馳騁",
    "觀賞冰島多處絕美瀑布",
    "參觀微觀冰島斯奈山半島",
    "造訪人氣黑沙灘",
    "前往傑古沙龍冰河湖感受冰晶世界",
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
        "黃金圈可謂是冰島最熱門的線路之一。也是冰島本地人心中的冰島旅遊線路鼻祖。它不僅結合了冰島的獨特風光，還有豐富的歷史背景做支撐。從雷克雅維克出發，您將繞冰島南部行駛約 250 公里。沿途，您將參觀黃金圈上 3 個最佳景點：辛格維利爾國家公園、間歇泉和黃金瀑布。",
        "前往聯合國教科文組織世界遺產辛格維利爾國家公園（Þingvellir National Park），這裡是冰島維京時代議會 Alþingi 的所在地。從十世紀開始，辛格維利爾就被用作冰島人的政治聚集地。",
        "在您的訪問期間，您還會對實際的地質現象感到驚歎。該公園坐落在北美和歐亞板塊分離所形成的裂谷上。在 Almannagjá 峽谷，您甚至可以沿著一條小徑穿過山谷。",
        "或者您可以前往絲浮拉裂縫（Silfra Fissure），這是峽谷中充滿天然泉水的一段區域。水晶般清澈的能見度使其成為水肺潛水者的著名地點。何不參加由嚮導帶領的絲浮拉大裂縫浮潛之旅，享受驚險刺激的體驗呢？",
        "沿著黃金圈繼續前行，在 Haukadalur 山谷，您會近距離看到著名的蓋錫爾間歇泉地帶（The Great Geysir and Strokkur）。儘管聲名遠揚的蓋錫爾大間歇泉本身現在處於休眠狀態，但是它旁邊的史托克間歇泉仍然處於活躍期。",
        "史托克間歇泉通常約 10 分鐘噴發一次沸騰的水柱和蒸汽。因此，您無需等待很長時間就能親眼目睹這一壯觀的景象。",
        "距離雷克雅維克最遠的是黃金瀑布（Gullfoss），它也是黃金圈路線上的三大景點之一，甚至這條線路的名稱也是以該瀑布的名字來命名的。",
        "如果天氣足夠好，天氣晴朗，金色的水流就可以清楚地看出瀑布的名字是如何得名的。您甚至可能會在瀑布的水花中看到彩虹。但黃金瀑布擁有兩層落入 70 米深的峽谷，無論天氣如何，它都令人驚歎不已。",
        "探索黃金圈的最佳方式之一是租車",
        "如果您不想開車，可以參加從首都出發的一日遊",
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
  routeOverviewSubtitle: "黃金圈、南岸與斯奈山半島夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、Sky Lagoon 溫泉）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾 → 蓋錫爾 → 黃金瀑布 → 凱瑞斯火山口）" },
    { label: "第 3 天", detail: "南岸瀑布 → 冰川健行 → 黑沙灘" },
    { label: "第 4 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "斯奈山半島（教會山 → 海豹沙灘 → 布迪爾黑教堂）" },
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
        detail: "斯奈山半島",
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
      title: "入境日：雷克雅維克 & Sky Lagoon溫泉",
      accommodation: "雷克雅維克",
      description:
        "抵達凱夫拉維克機場後，搭乘套餐安排的機場大巴前往雷克雅維克市區飯店辦理入住。\n\n若班機抵達時間較早，可前往 Sky Lagoon 天空之境溫泉體驗七步療法，或在市區漫步感受極北首都的風貌。夏季日照長，晚間亦可沿著海岸線散步。",
      highlights: icelandGroupSummer6Day1Highlights,
      optionalActivities: icelandGroupSummer6Day1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈3+1：辛格維利爾國家公園 & 蓋錫爾間歇泉地帶 & 黃金瀑布 & 凱瑞斯火山口",
      accommodation: "雷克雅維克",
      description:
        "今日搭乘品質小巴團造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。辛格維利爾位於歐亞與北美板塊交界的大裂谷，是冰島最早議會所在地；蓋錫爾間歇泉地帶可目睹史托克間歇泉（Strokkur）每隔數分鐘噴發的熱水柱。\n\n走近黃金瀑布時，巨大的水流令人屏息；陽光下水珠有時散發金色光芒。嚮導亦將帶您參觀凱瑞斯火山口（Kerið Crater）。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupSummer6Day2Highlights,
      optionalActivities: icelandGroupSummer6Day2OptionalActivities,
    },
    {
      day: 3,
      title: "塞里雅蘭瀑布 & 斯科加瀑布 & 索爾黑馬冰川 & 黑沙灘",
      accommodation: "南岸",
      description:
        "今日品質小巴團沿南岸一號公路南下。夏季日照長，沿途綠意盎然。\n\n首先造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；天候許可時可繞行至塞里雅蘭瀑布後方小徑。接著在專業嚮導帶領下進行索爾黑馬冰川（Sólheimajökull）徒步，穿戴安全裝備踏上夾雜火山灰紋路的藍白冰川。（注：冰川健行體驗僅限 10 月前，10 月開始將替換為藍冰洞體驗。）\n\n最後前往黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中。夏季迪霍拉里（Dyrhólaey）常有海鸚棲息。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店。",
      highlights: icelandGroupSummer6Day3Highlights,
      optionalActivities: icelandGroupSummer6Day3OptionalActivities,
    },
    {
      day: 4,
      title: "傑古沙龍冰河湖 & 鑽石沙灘",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團繼續往東南，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。浮冰在湖面緩緩漂移，夏季陽光下冰塊晶瑩閃耀，與黑色沙灘形成鮮明對比。\n\n返程途中將經過埃爾德熔岩原（Eldhraun），夏季綠色苔蘚覆蓋的熔岩地貌別具風情。結束後返回雷克雅維克住宿。",
      highlights: icelandGroupSummer6Day4Highlights,
      optionalActivities: icelandGroupSummer6Day4OptionalActivities,
    },
    {
      day: 5,
      title: "斯奈山半島：教會山 & 海豹沙灘 & 布迪爾黑教堂",
      accommodation: "雷克雅維克",
      description:
        "今日品質小巴團前往斯奈山半島（Snæfellsnes），這片被稱為「冰島縮影」的半島匯集冰川、火山、海岸峭壁與漁村風光。途中經過博爾加內斯（Borgarnes），亦可造訪海豹沙灘（Ytri-Tunga）觀察海豹。\n\n行程將造訪布迪爾黑教堂（Búðakirkja）、阿爾納斯塔皮（Arnarstapi）海岸峭壁與 Djúpalónssandur 黑沙灘，以及教會山（Kirkjufell）與教會山瀑布（Kirkjufellsfoss）。夏季午夜陽光下，教會山輪廓格外分明。傍晚返回雷克雅維克住宿。",
      highlights: icelandGroupSummer6Day5Highlights,
      optionalActivities: icelandGroupSummer6Day5OptionalActivities,
    },
    {
      day: 6,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依航班時間搭乘機場大巴前往凱夫拉維克機場，建議提前兩小時抵達辦理登機手續，並提前確認接機大巴時間。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻，漫步洛加維格大街（Laugavegur）或造訪哈爾格林姆斯大教堂。入境日未造訪溫泉者，亦可選擇 Sky Lagoon 或藍湖溫泉（Blue Lagoon）結束旅程。",
      highlights: icelandGroupSummer6Day6Highlights,
      optionalActivities: icelandGroupSummer6Day6OptionalActivities,
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
          question: "在冰島旅遊需要嚮導嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島固然以其神奇且的自然景觀而聞名於世，但是同樣不可忽視的是冰島的歷史、文化以及地理資訊。\"]",
        },
        {
          question: "去冰島旅遊需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"雖然比世界上緯度相近的許多地方都要溫暖，但冰島總體上還是一個寒冷的國家，特別是在冬季，平均氣溫在0攝氏度左右，而夏季的平均氣溫約在10-15度。\"]",
        },
        {
          question: "冰島值得去嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這個問題可能不同的人有不同的答案。但是作為一個專注於冰島旅行的團隊，以及作為一群熱愛自然、熱愛美好的個體來說：\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"是的！冰島太值得了！\"]",
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
      tripKey: "iceland/group/summer/5",
      title: "5 天 4 夜冰島夏季夢幻跟團遊",
      tourCode: "SMD-051",
      durationLabel: "5 天／4 夜",
      description:
        "斯奈山半島、黑沙灘與冰河湖，適合時間較緊的夏季旅客。",
    },
    {
      tripKey: "iceland/group/summer/7",
      title: "7 天 6 夜冰島夏季跟團遊",
      tourCode: "SMD-071",
      durationLabel: "7 天／6 夜",
      description:
        "更完整的夏季跟團路線，涵蓋更多冰島精華景點。",
    },
  ],
};
