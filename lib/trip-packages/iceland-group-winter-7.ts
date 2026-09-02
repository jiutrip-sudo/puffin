import type { TripPackage } from "./types";
import {
  icelandGroupWinter7Day1Highlights,
  icelandGroupWinter7Day1OptionalActivities,
} from "./iceland-group-winter-7-day1-cards";
import {
  icelandGroupWinter7Day2Highlights,
  icelandGroupWinter7Day2OptionalActivities,
  icelandGroupWinter7Day3Highlights,
  icelandGroupWinter7Day3OptionalActivities,
  icelandGroupWinter7Day4Highlights,
  icelandGroupWinter7Day4OptionalActivities,
  icelandGroupWinter7Day5Highlights,
  icelandGroupWinter7Day5OptionalActivities,
  icelandGroupWinter7Day6Highlights,
  icelandGroupWinter7Day6OptionalActivities,
  icelandGroupWinter7Day7Highlights,
  icelandGroupWinter7Day7OptionalActivities,
} from "./iceland-group-winter-7-days2-7-cards";

export const icelandGroupWinter7: TripPackage = {
  id: "iceland-group-winter-7",
  tripKey: "iceland/group/winter/7",
  slug: "iceland-winter-package-7-days-south-coast-and-snaefellsnes",
  tourCode: "SLMMD-072",
  title: "7 天 6 夜冰島冬季跟團遊",
  subtitle: "藍冰洞探險 & 斯奈山半島",
  duration: { days: 7, nights: 6 },
  season: { label: "冬季", months: "11 月–4 月" },
  meta: {
    departure: "雷克雅未克",
    transport: "跟團",
    tourCode: "SLMMD-072",
  },
  eyebrow: "冰島集合 · 跟團 · 冬季",
  backHref: "/trips/iceland/group/winter",
  backLabel: "返回冬季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/blue_ice_cave_discovery_LG_5c9f8a2ebf.jpg",
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
      "冰島冬日風光令人心醉神迷，當大地被白雪覆蓋，山峰和平原被冰雪裝點，整個景象宛如一個純淨而寂靜的童話世界。",
    full: `冰島冬日風光令人心醉神迷，當大地被白雪覆蓋，山峰和平原被冰雪裝點，整個景象宛如一個純淨而寂靜的童話世界。

冰島冬季精選7日遊將會帶領您去欣賞冰島最具特色的景觀：探索冰島黃金圈（Golden Circle）三大景點，欣賞壯觀的南岸瀑布；近距離接觸歐洲最大冰川瓦特納冰川，探險冰之奇蹟藍冰洞（Blue Ice Cave），感受傑古沙龍冰河湖和鑽石沙灘的神秘浪漫。您也會前往冰島西部白銀圈，欣賞秀美的熔岩瀑布（Hraunfoss）和兒童瀑布（Barnafoss），打卡冰島歷史遺址，尋訪堪稱世外桃源的斯奈山半島（Snæfellsnes），沿著海岸線漫步，欣賞壯觀的海岸峭壁，聽著海浪拍打在岩石上的聲音。

在冰島的冬夜裡，如果幸運的話，您還有機會欣賞到令人歎為觀止的極光。我們還會帶您在途中選擇最佳觀賞點停車或者在入住飯店附近，由我們嚮導將陪伴您一起欣賞極光。當絢麗多彩的光芒在黑夜的蒼穹中跳躍舞動，創造出奇幻的光影效果，您會被這壯觀而神秘的自然奇觀所震撼。

請注意：南岸兩日遊、黃金圈一日遊行程安排和斯奈山半島兩日遊行程會根據您的入境時間和可選餘位進行先後參團順序調整。`,
  },
  gallery: [
    {
      id: "blue_ice_cave_discovery_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/blue_ice_cave_discovery_LG_5c9f8a2ebf.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "Budakirkja2_9a606719cd",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Budakirkja2_9a606719cd.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "joshua_earle_Hn8_N4_I4e_",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/joshua_earle_Hn8_N4_I4e_HA_0_unsplash_b39b127f50.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    }
  ],
  highlights: [
    "體驗冰島網紅溫泉天空之境溫泉（Sky Lagoon）",
    "暢遊冰島最經典的黃金圈線路",
    "體驗藍冰洞探險，觸摸千年的冰川",
    "打卡冰島斯奈山半島攝影聖地草帽山",
    "體驗獨特的Víðgelmir火山熔岩洞穴探險",
    "感受冰島塞里雅蘭瀑布和斯科加瀑布的壯麗",
    "遊覽夢幻浪漫的冰河湖和鑽石沙灘",
    "探索冰島西部白銀圈的迷人風光",
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
        "辛格維利爾國家公園（Þingvellir National Park，又譯為辛格維勒國家公園）位於冰島西南部，距離冰島首都雷克雅未克東北約40公里，是冰島著名黃金圈路線的三大景點之一。辛格維利爾國家公園地處北美板塊和歐亞板塊分離所產生的巨大裂谷邊緣，也是冰島最早議會所在地，是一個具有重要歷史、文化和自然意義的地方，也是冰島最受歡迎的旅遊目的地之一。",
        "公元930年，議會在辛格維利爾的平原上成立，標誌著冰島作為一個獨立國家的存在。園內地標法律石（Lögberg ）據說是世界上第一個議會聚集的地方，自930年以來，這裡見證了無數法律的裁決與正義的伸張。1928年，冰島通過立法保護議會遺址，兩年後，辛格維利爾國家公園正式建成，成為了冰島全國第一個國家公園。",
        "Öxarárfoss是園內最受歡迎的景點之一，這條高13米、寬20米的瀑布在冬季會完全凍結，是攀冰愛好者的最愛。旅客除了通過步行路線遊覽公園，還可以體驗例如垂釣和浮潛等多種多樣的活動。公園南側的辛格瓦德拉湖是冰島境內最大的天然湖泊，湖中有褐鱒魚和各式的北極鮭魚，是全國數一數二的垂釣地點。另外，因驚人的能見度而世界聞名的絲浮拉大裂縫（Silfra）也位於國家公園範圍內。如果滿足有關潛水資格和規定，則能夠潛入清澈冰冷的地下水一探究竟。如果沒有潛水證，那麼參加大樂旅行社旅行的浮潛團則是一個更好的選擇，潛水小白也能夠自在地領略絲浮拉的美麗。",
        "在冰島，或許沒有任何一個地方比辛格維利爾國家公園在歷史、文化和自然方面更加重要。由於其獨特的地位和對世界以及冰島本國的重要價值，辛格維利爾國家公園在2004年被列為聯合國教科文組織世界遺產。",
      ],
    },
    {
      name: "間歇泉",
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
        "Geysir間歇泉被人們稱為大間歇泉（The Great Geysir），有時又譯為蓋歇爾間歇泉，是現代歐洲人所知的第一個間歇泉，甚至英文中表示“間歇泉”的單詞“Geyser”就是因它而得名。它坐落於冰島西南岸的Haukadalur山谷中，與辛格維利爾國家公園（Þingvellir National Park）和黃金瀑布（Gullfoss）共同組成了聞名遐邇的冰島黃金圈線路。",
        "研究表明，蓋歇爾間歇泉已經存在了約1萬年，它最高的一次噴發是在1845年，噴發高度約為170米。但由於地殼運動和人類行為，它目前處於沉寂狀態。上世紀，冰島人曾嘗試多種方法使其噴發，例如在噴口周圍開鑿通道以降低地下水位，或是向噴泉口丟入肥皂，但這些行為後來引發了關於環境保護的爭議，因此在上世紀90年代被叫停。",
        "不過旅客倒不必擔心無法看到間歇泉噴發，Geysir間歇泉向南50米的史托克間歇泉（Strokkur）是目前最為活躍的間歇泉，也是吸引旅客數量最多的間歇泉。 它每5-10分鐘噴發一次，高達約30米左右，噴發出的水柱溫度超過100攝氏度。",
        "需要注意的是，由於間歇泉的水溫極高，可能導致嚴重的人員傷亡，其周圍設有指定區域，出於安全考慮，一定要呆在這些區域內，確保與間歇泉保持一定的距離，也不要向間歇泉、地熱池和火山噴氣口扔東西。",
      ],
    },
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
        "黃金瀑布（Gullfoss）位於Haukadalur山谷的Hvítá河上，是冰島最受歡迎的旅遊景點之一，也和辛格維利爾國家公園（Þingvellir National Park）、間歇泉（Geysir）組成了著名的黃金圈線路。許多人認為這裡是冰島最美的瀑布，沒錯，即使冰島有數以千計的瀑布，但也許沒有一條像黃金瀑布一樣聞名於世。",
        "黃金瀑布的得名，是因為在陽光明媚的日子裡，瀑布的水會呈現出美妙夢幻的金褐色。從科學的角度解釋，是因為瀑布水是冰川水，攜帶著多年來大量冰川冰從陸地上鑿下的沉積物。",
        "黃金瀑布由兩段瀑布組合而成，一段高11米，另一段高21米，流入下方長達2.5公里寬約20米的裂縫中。在冰河時代末期，巨大的洪水造成了這條裂縫，而不斷的水流侵蝕使它每年延長25釐米。這裡平均水流速度為每秒109立方米，冬季平均流速為每秒80立方米，夏季的水流速度會提高至每秒130立方米。",
        "在冬季，黃金瀑布是最受風光攝影師們歡迎的地方之一，因為這裡是拍攝北極光的絕佳地點。不過，瀑布周圍狹窄的小路上可能會結冰，因此如果您在冬季遊覽黃金瀑布，我們強烈建議您不要離開主路。",
      ],
    },
    {
      name: "赫倫瀑布",
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
        "赫倫瀑布（Hraunfossar）又名熔岩瀑布，是一處位於冰島西部雷克霍特（Reykholt）附近的美麗而獨特的瀑布群，距離首都雷克雅未克約122公里，僅需1小時40分鐘的車程即可到達。",
        "就算在冰島這樣一個遍佈瀑布的國家，赫倫瀑布也憑藉其獨特的風景而成為了最有名的瀑布之一。赫倫瀑布並非像其他瀑布一樣，由一條河流流過懸崖而形成，而是上百條小溪流經這裡共同聚成了這一壯觀雄奇的水幕景觀。",
        "旅客們都說，瀑布的水似乎是從熔岩地底中生生冒出來的。然而實際上，赫倫瀑布與和它相鄰的兒童瀑布（Barnafossar）都是來自赫維塔河，這條冰川河發源自冰島西部的Hallmundarhraun熔岩原。",
        "在停車場旁的觀景臺上，旅客可以俯瞰赫倫瀑布、附近的兒童瀑布以及赫維塔河。當地人在1891年修建了一座橫跨河流的人行橋，並在整整一個世紀後對其進行了翻新。此外，還有一條徒步小徑可以從赫倫瀑布通往兒童瀑布。",
        "兒童瀑布相比於赫倫瀑布更加狹窄，也更加湍急，兒童瀑布名字的特殊是因為它過去一個帶有悲劇色彩的傳說故事。相傳附近的一戶人家的小孩在此溺水身亡，母親於是詛咒了瀑布上的石橋，隨後石橋就因為地震而被摧毀。",
        "兩條瀑布十分相近，一般來說，旅客會選擇一同遊玩。",
      ],
    },
    {
      name: "格蘭尼瀑布",
      nameEn: "Glanni Waterfall",
      region: "冰島西部",
      subtitle: "前來探索這個位於冰島西部的精緻瀑布",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Glanni_Waterfall2_7bcc1494c2.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Glanni_Waterfall2_7bcc1494c2.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Glanni_Waterfall1_ee86f804dd.jpg",
      ],
      paragraphs: [
        "精靈與惡魔的棲息地",
        "格蘭尼瀑布（Glanni Waterfall）位於冰島西部，位於雷克霍特（Reykholt）西北部35公里附近，是諾杜拉河（Nordura river）上的一個迷人的小巧瀑布。當地人認為它是精靈和巨魔的棲息地。通往瀑布的小路清晰明瞭，十分適合旅客觀賞。",
        "格蘭尼瀑布在冰島語中的本意是“光明”或“閃耀”。瀑布之所以叫這個名字，是因為水流衝擊下面的岩石時呈現出明亮的白色。",
        "瀑布雖小，但非常美麗，至少有三條並排的瀑布，並且每條瀑布都有許多層。瀑布所在的這條名為諾杜拉的河流是冰島最盛產鮭魚的河流之一，因此也成為了垂釣愛好者的寶地。",
        "瀑布的地理位置優異，距離格拉布羅克火山（Grabrok）、格拉布羅卡倫熔岩區（Grabrokarhraun lava field）和比弗羅斯特小村莊（Bifröst）不遠。在北歐神話中，Bifröst是連接神族與人族的彩虹橋，意為“搖晃的天國道路”。",
        "瀑布旁邊有一處將車高爾夫球場，從那裡可以沿著步行道前往瀑布，並在觀景臺上欣賞瀑布的美景。您可以在停車場旁的咖啡店購買食物，在瀑布旁或天堂空谷享受一頓美妙的野餐。",
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
  routeOverviewSubtitle: "南岸、黃金圈、西部與斯奈山冬季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅未克（入境、機場接送、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸 → 塞里雅蘭／斯科加瀑布 → 黑沙灘 → 維克" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞 → 返回雷克雅未克" },
    { label: "第 4 天", detail: "黃金圈（辛格維利爾 → 間歇泉 → 黃金瀑布 → 凱瑞斯火山口）" },
    { label: "第 5 天", detail: "冰島西部（格蘭尼瀑布 → 赫倫瀑布 → 熔岩洞穴）" },
    { label: "第 6 天", detail: "斯奈山半島（教會山 → 阿爾納斯塔皮 → 布迪爾黑教堂）" },
    { label: "第 7 天", detail: "雷克雅未克 → 機場離境" }
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
        detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞",
      },
      {
        lng: -20.5322,
        lat: 64.3271,
        label: "第 4 天",
        detail: "黃金圈",
      },
      {
        lng: -21.39,
        lat: 64.7,
        label: "第 5 天",
        detail: "冰島西部",
      },
      {
        lng: -23.8,
        lat: 64.8,
        label: "第 6 天",
        detail: "斯奈山半島",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 7 天",
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
        "今天是您入境冰島的第一天，歡迎您來到冰島！您將乘坐機場大巴前往冰島首都雷克雅未克市區，我們為您安排了冰島新晉網紅溫泉天空之境溫泉（Sky Lagoon），體驗其獨有的七步療法。您可以一邊品嚐小食，縱享無邊海景，感受身心的放鬆和療愈，一洗旅途的疲憊。在溫泉體驗結束後，您不妨早早回到飯店，做好休整，好好睡一覺，為接下來的旅程做好充足的精力準備。",
      highlights: icelandGroupWinter7Day1Highlights,
      optionalActivities: icelandGroupWinter7Day1OptionalActivities,
    },
    {
      day: 2,
      title: "南岸風光：塞里雅蘭瀑布、斯科加瀑布、維克黑沙灘",
      accommodation: "南岸",
      description:
        "這一天，您會來到南岸最美的兩大瀑布：塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）。塞里雅蘭瀑布是一個落差高達60m的瀑布，非常壯觀。歌迷影迷們可能會驚喜地發現，它也曾出現在《星際迷航》第三季和賈斯汀·比伯的《I'll Show You》MV中。在這裡，您可以繞道瀑布的背後，用不同視角觀賞冰島風光，如果偶遇晚霞，橙紅的光透過瀑布打在人身上，將是一張完美的剪影。離這不遠的另一個秘密瀑布（Gljúfrabúi），隱藏在冰島峽谷的秘境之中，以其獨特的位置和壯麗的景色成為自然愛好者的寶藏。瀑布從高處飛瀉而下，形成一道壯觀的水簾，底部的深潭清澈見底，同樣讓你感到別樣之美。您也可以在斯科加瀑布偶遇陽光下的絢麗彩虹。關於斯科加瀑布，還有一個美麗的古老傳說。據傳一位維京人將一箱財寶扔進了河裡，從此下落不明，直到有人爬進瀑布抓住了箱子側面的把手。但由於木頭腐朽，把手斷裂，寶物最終還是墜入了瀑布底部。今天我們也將來到著名的黑沙灘（Reynisfjara）。黑沙灘本身魔幻詭譎的顏色已讓人印象深刻，漫步於黑沙灘之上，眺望不遠處的雷尼斯德蘭格海蝕柱（Reynisdrangar）更是為旅程增添了別樣的樂趣。",
      highlights: icelandGroupWinter7Day2Highlights,
      optionalActivities: icelandGroupWinter7Day2OptionalActivities,
    },
    {
      day: 3,
      title: "東南岸景色：傑古沙龍冰河湖、鑽石沙灘、藍冰洞探險",
      accommodation: "雷克雅未克",
      description:
        "第三天，您將向東部出發，抵達冰島最浪漫的景點之一——傑古沙龍冰河湖（Jökulsárlón）。傑古沙龍冰河湖是冰島瓦特納冰川（Vatnajökull）東南部邊緣入海口處形成的天然瀉湖。瓦特納冰川國家公園是冰島最大、最知名的國家公園，佈滿了自然奇觀。在冰河湖的對岸，就是鬼斧神工的鑽石沙灘（Diamond Beach）。沙灘上晶瑩剔透的透明冰塊，像極了閃閃發光的巨大鑽石，但實際上，這些冰塊是傑古沙龍冰河湖上漂浮的碎冰沖刷上岸，擱淺在了黑色的沙灘上。今天的高光時刻是體驗藍冰洞探險。我們專業的嚮導會給您提供安全設備，並演示和講解安全知識。在萬事俱備後帶您近距離地接觸冰川深處夢幻神奇的藍冰洞。相信我，這將是一生難忘的體驗！您也會來到冰島傳統教堂：Hofskirkja草皮教堂，它覆蓋著厚厚的草皮屋頂，以其原始風貌靜默佇立，與周遭的大地融為一體，不僅是信仰的象徵，更是自然與人類智慧的和諧共存。穿越埃爾德熔岩原（Eldhraun）這片廣闊的黑色熔岩地帶，您將感受到大自然的原始力量。作為火山爆發的見證，堅硬的岩石鋪展至視野盡頭，綠色苔蘚鋪陳其上，冬季更給其撒上一層白色的銀霜，同樣美不勝收。行程中美麗的維克鎮（Vík）也是您的到訪之地，您可以在這裡悠閒地享受風景拍攝照片，眺望大西洋海岸，感受這個冰島最南端小鎮的獨特之處。當天您將回到首都住宿，再繼續下一旅程。",
      highlights: icelandGroupWinter7Day3Highlights,
      optionalActivities: icelandGroupWinter7Day3OptionalActivities,
    },
    {
      day: 4,
      title: "黃金圈：辛格維利爾國家公園、間歇泉、黃金瀑布、凱瑞斯火山口",
      accommodation: "雷克雅未克",
      description:
        "今天您將體驗冰島最經典也是最受歡迎的黃金圈線路，其中包括三大景點：辛格維利爾國家公園（Þingvellir National Park）、蓋歇爾間歇泉（Geysir）、黃金瀑布（Gullfoss）。辛格維利爾國家公園在地理位置上有重要意義，是冰島唯一一處被聯合國教科文組織認證為世界遺產的景點，同時這裡也是北美板塊和歐亞板塊的裂縫交界邊緣。間歇泉地熱區最出名的是大間歇泉（The Great Geysir），在它的不遠處是目前最為活躍的史托克間歇泉（Strokkur），大概每隔5-10分鐘噴發一次，非常壯觀震撼。黃金瀑布是黃金圈的著名景點，在這裡可以一窺冰島瀑布的壯麗。黃金瀑布之所以如此命名，則是因為在陽光的照射下，瀑布會呈現出夢幻璀璨的流動的金色，像不斷湧現翻滾的黃金一般迷人。在體驗過黃金圈景區的風光後，嚮導將會帶您去一處小眾但絕美的景點：凱瑞斯火山口（Kerið Crater）。這個火山口有著6000多年的歷史，是整個Tjarnarhólar火山群最大的一個火山口。整個火山口周圍全部被紅色火山岩覆蓋，火山口底部形成的湖水更是清澈無比。",
      highlights: icelandGroupWinter7Day4Highlights,
      optionalActivities: icelandGroupWinter7Day4OptionalActivities,
    },
    {
      day: 5,
      title: "冰島西部風光：格蘭尼瀑布、德爾達圖赫菲溫泉、赫倫瀑布、熔岩洞穴探險",
      accommodation: "西部",
      description:
        "今日西部行程滿滿，您會來到格蘭尼（Glanni）瀑布，多層瀑布橫跨Grabrokarhraun古老的熔岩區，瀑布雖小，但十分美麗。您還可以在這裡欣賞到 Grabrok 的火山口景色。德爾達圖赫菲溫泉（Deildartunguhver）是歐洲流速最快的地熱溫泉，給附近的村莊和居民提供了溫泉和熱能，是不可多得的天然資源。站在棧道上，氣霧氤氳，您將能安全地感受這來自大自然的兇猛力量！在Reykholt歷史遺址，您將可在此參觀冰島民間傳說中時常會提到的的古蹟。 它不僅是冰島最著名的歷史小鎮之一，也是 13 世紀作家、詩人和學者斯諾里·斯圖盧松（Snorri Sturluson）的故鄉。您可以在這裡感受冰島的歷史與文化氣息。西部也有秀美瀑布，我們會來到達知名的熔岩瀑布（Hraunfossar），看它在崎嶇的熔岩原上奔流近一公里。此外，在它附近還有另一個秘密的瀑布，稱為小孩瀑布Barnafoss，這裡因一個悲傷的故事而得名。Vidgelmir 熔岩洞穴探險則是今日亮點。 Vidgelmir Lava Cave 是一個色彩繽紛的地下世界，長 1585 米，高近 16 米，寬 16 米。 在當地嚮導的帶領下，您會在裡面看到一些令人難以置信的景象——精緻的熔岩結構、冰晶、鐘乳石和石筍。",
      highlights: icelandGroupWinter7Day5Highlights,
      optionalActivities: icelandGroupWinter7Day5OptionalActivities,
    },
    {
      day: 6,
      title: "斯奈山半島： 海豹沙灘、黑教堂、阿納斯塔皮、教會山",
      accommodation: "雷克雅未克",
      description:
        "第二天的冰島西部探險之旅將帶您前往斯奈山半島（Snæfellsnes），這個被稱為“雪山半島”的地方是名副其實的冰島縮影，展現了冰島各種地貌的壯麗景色。您將前往海豹沙灘（Ytri Tunga），這裡是小海豹的棲息地。您可以觀察到這些可愛的海洋生物，近距離欣賞它們在海灘上嬉戲和曬太陽的場景。此外，您將前往布迪爾黑教堂（Búðakirkja），這座被人稱為黑教堂的教堂因其黑色外觀而聞名。它坐落在一片美麗的田園景色中，給人一種神秘而浪漫的感覺。您還將探訪古老的漁村阿爾納斯塔皮（Arnastapi）。這個漁村位於海岸線上，有壯觀的峭壁和奇特的岩石地貌。您可以漫步在漁村欣賞大海的壯麗景色，感受寧靜和宜人的氛圍。而令人驚歎的Djúpalónssandur黑沙灘也是行程中的一站，您可以在此感受大自然的力量和寧靜。當然，您也不能錯過斯奈山半島最著名的山峰之一：教會山（Kirkjufell）。這座山峰以其獨特的形狀而聞名，它被形容為“草帽山”，是攝影師和旅客們喜愛的景點之一。站在教會山周圍的風景點上，您可以欣賞到宏偉的景色，包括山脈、瀑布等，帶給您無限的驚歎和美麗。",
      highlights: icelandGroupWinter7Day6Highlights,
      optionalActivities: icelandGroupWinter7Day6OptionalActivities,
    },
    {
      day: 7,
      title: "離境日",
      accommodation: "—",
      description:
        "不知不覺今天就是您離境冰島的日子，想必您一定還是對冰島的風光依依不捨。這一天，如果您是下午或者晚上的航班，不妨在雷克雅未克感受城市風景，逛一下博物館，看一下大教堂，或者再品嚐一下冰島的特色菜餚，在咖啡廳小酌閱讀。如果雪霽初晴，不如體驗一下出海觀鯨、雪地騎馬、到教堂頂樓俯瞰五彩斑斕的首都城市風光。我們為您預定了市區前往凱夫拉維克機場的機場巴士，請您根據接站時間提前在站點準備接站。如果您想再體驗更豐富的冰島遊玩，不妨看看我們推薦的本地特色體驗。",
      highlights: icelandGroupWinter7Day7Highlights,
      optionalActivities: icelandGroupWinter7Day7OptionalActivities,
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
          question: "這個行程的行李額是多少？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"您能夠攜帶上車的行李箱最大尺寸為56 x 45 x 25 cm（大約為22寸行李箱大小）。如果您有其他大件行李，也可以聯繫飯店寄存。\"]",
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
          question: "在冰島旅行安全嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"冰島是地球上最安全的國家之一。\"]",
        },
        {
          question: "去冰島旅遊需要辦理什麼簽證？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"中國大陸公民前往冰島旅行需要辦理旅遊簽證。冰島屬於申根國家，因此您需要辦理申根簽證。\"]",
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
      tripKey: "iceland/group/winter/6",
      title: "6 天 5 夜冰島冬季跟團遊",
      tourCode: "SLMMD-062",
      durationLabel: "6 天／5 夜",
      description:
        "南岸、黃金圈與斯奈山半島，冬季跟團精選路線。",
    },
    {
      tripKey: "iceland/group/winter/8",
      title: "8 天 7 夜冰島冬季跟團遊",
      tourCode: "SLMMD-082",
      durationLabel: "8 天／7 夜",
      description:
        "更充裕的冬季跟團天數，深度探索冰島環島精華。",
    },
  ],
};
