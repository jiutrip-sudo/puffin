import type { TripPackage } from "./types";
import {
  icelandGroupWinter6Day1Highlights,
  icelandGroupWinter6Day1OptionalActivities,
} from "./iceland-group-winter-6-day1-cards";
import {
  icelandGroupWinter6Day2Highlights,
  icelandGroupWinter6Day2OptionalActivities,
  icelandGroupWinter6Day3Highlights,
  icelandGroupWinter6Day3OptionalActivities,
  icelandGroupWinter6Day4Highlights,
  icelandGroupWinter6Day4OptionalActivities,
  icelandGroupWinter6Day5Highlights,
  icelandGroupWinter6Day5OptionalActivities,
  icelandGroupWinter6Day6Highlights,
  icelandGroupWinter6Day6OptionalActivities,
} from "./iceland-group-winter-6-days2-6-cards";

export const icelandGroupWinter6: TripPackage = {
  id: "iceland-group-winter-6",
  tripKey: "iceland/group/winter/6",
  slug: "iceland-winter-package-6-days-south-coast-and-snaefellsnes",
  tourCode: "SLMMD-062",
  title: "6 天 5 夜冰島冬季跟團遊",
  subtitle: "Sky Lagoon溫泉 & 斯奈山",
  duration: { days: 6, nights: 5 },
  season: { label: "冬季", months: "11 月–4 月" },
  meta: {
    departure: "雷克雅未克",
    transport: "跟團",
    tourCode: "SLMMD-062",
  },
  eyebrow: "冰島集合 · 跟團 · 冬季",
  backHref: "/trips/iceland/group/winter",
  backLabel: "返回冬季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/66_5e073a69d6.jpg",
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
      "跟隨我們一起加入冰島冬季6日自由行，您將有機會在六天內遊覽冰島西南岸精華景點，尋訪冰島西部的斯奈山半島（Snæfellsnes），將冰島冬日勝景收入囊中！",
    full: `跟隨我們一起加入冰島冬季6日自由行，您將有機會在六天內遊覽冰島西南岸精華景點，尋訪冰島西部的斯奈山半島（Snæfellsnes），將冰島冬日勝景收入囊中！

您將開始探索黃金圈（Golden Circle）三大知名景點：前往黃金瀑布，欣賞到這座壯觀的雙層瀑布，水流從峽谷中咆哮而下，營造出令人驚歎的景象；觀賞史托克間歇泉（Strokkur）的噴發，每隔幾分鐘就會噴發高達30米的熱水柱；參觀具有重要的歷史和地質意義的辛格維利爾國家公園（Þingvellir National Park）。在繼續向東的行程中，您還將探訪壯闊的南岸瀑布，進入冰川的內部，探索到令人歎為觀止的藍色冰洞；參觀傑古沙龍冰河湖（Jökulsárlón），欣賞到漂浮的冰山和冰川碎片，在湖面上反射出壯觀的景象，並在鑽石沙灘（Diamond Beach）漫步，體驗冰島獨特的浪漫氛圍。

此外，在行程中，我們還將安排您前往斯奈山半島，這個半島被譽為“冰島縮影”，彙集了冰川、火山、瀑布和美麗的海岸線，讓您全面領略冰島的自然之美。

在整個行程中，我們將為您提供最佳的路線規劃，安排舒適的住宿，確保您在冰島南岸的旅程中勞逸結合。您可以完全放鬆心情，沿著我們的節奏，盡情感受冰島的魅力。

請注意：南岸兩日遊、黃金圈一日遊行程安排和斯奈山半島一日遊行程的先後順序將根據您的入境時間和可選的預訂情況來進行調整。`,
  },
  gallery: [
    {
      id: "66_5e073a69d6",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/66_5e073a69d6.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "6_fd33317eb1",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/6_fd33317eb1.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "666_c2a2241604",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/666_c2a2241604.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    }
  ],
  highlights: [
    "感受迷人的冰島溫泉文化",
    "體驗冰島最經典的黃金圈線路",
    "體驗藍冰洞探險，觸摸千年的冰川",
    "欣賞傑古沙龍冰河湖和鑽石沙灘的夢幻",
    "感受冰島南岸瀑布的冬日壯闊",
    "在冰島最南端小鎮維克感受避世之美",
    "在黑沙灘感受大西洋澎湃之力",
    "欣賞被各大攝影師爭相拍攝的草帽山",
    "打卡斯奈山半島熱門網紅黑教堂",
    "探索最美避世小漁村阿爾納斯塔皮",
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
      name: "阿爾納斯塔皮",
      nameEn: "Arnarstapi",
      region: "斯奈山半島",
      subtitle: "這裡是斯奈山半島的最美漁村，來此參觀壯觀的懸崖和棲息其上的成群海鳥。",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Arnarstapi1_d87729c2b9.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Arnarstapi1_d87729c2b9.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Arnarstapi3_1279cde8e4.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Arnarstapi2_45e11a63e9.jpg",
      ],
      paragraphs: [
        "斯奈山半島最壯觀的景點之一",
        "阿爾納斯塔皮（Arnarstapi）是位於冰島斯奈山半島南側斯塔帕山（Stapafell）腳下的一個小漁村，被譽為斯奈山半島的“最美漁村”。",
        "阿爾納斯塔皮在歷史上是一個重要的貿易站，人口比現在多得多。不過現在，村莊在夏季仍然相當受到歡迎，私人船隻停滿了碼頭。在這裡，人們可以看到海崖邊眾多奇特的玄武岩石柱、峽谷與洞穴。這些玄武岩石柱和洞穴也正是眾多海鳥的家園，其中包括三趾鷗和刀嘴海雀。在這片奇特的海崖中，最著名的景觀絕對要數Gatklettur岩石洞，每當暴風雨的天氣，海水都會通過這塊岩石的洞中噴湧而出。站在小鎮的港口上的觀景臺，向北望去，就是著名阿爾納斯塔皮山，眾多網紅打卡照也正是這個角度拍攝的。",
        "小鎮中心還有一座人物塑像，由冰島藝術家拉格納-雅坦松（Ragnar Kjartansson）設計，他就是斯奈山半島的守護戰神巴杜爾Bárður。巴杜爾一半是巨怪，一半是人類，具有極強的魔力，也是他將這片土地命名為斯奈山半島。傳說中，他住在斯奈菲爾冰川（Snaefellsjokull）之上，保護著斯奈山半島及其居民。因此，半島上許多地名都來自於他的故事。",
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
  routeOverviewSubtitle: "南岸、黃金圈與斯奈山冬季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅未克（入境、機場接送、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸 → 塞里雅蘭／斯科加瀑布 → 黑沙灘 → 維克" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞 → 返回雷克雅未克" },
    { label: "第 4 天", detail: "黃金圈（辛格維利爾 → 間歇泉 → 黃金瀑布）" },
    { label: "第 5 天", detail: "斯奈山半島（教會山 → 阿爾纳斯塔皮 → 布迪爾黑教堂）" },
    { label: "第 6 天", detail: "雷克雅未克 → 機場離境" }
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
        lng: -23.8,
        lat: 64.8,
        label: "第 5 天",
        detail: "斯奈山半島",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 6 天",
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
        "這是您抵達雷克雅未克的第一天，歡迎您入境冰島。如果時間足夠，您可以去冰島著名的天空之境溫泉（Sky Lagoon）一洗旅途疲憊，感受冰島的溫泉文化。如果您航班時間是下午或者晚上，不妨先去市區體驗一下這個極北首都的城市風貌，品嚐一下特色北歐美食，提前融入冰島本地人的生活，或是您也可以直接我們給您提前預定的飯店好好休息，為接下來的旅途養足精神。",
      highlights: icelandGroupWinter6Day1Highlights,
      optionalActivities: icelandGroupWinter6Day1OptionalActivities,
    },
    {
      day: 2,
      title: "塞里雅蘭瀑布、斯科加瀑布、黑沙灘",
      accommodation: "南岸",
      description:
        "這一天，您將前去欣賞冰島南岸的壯闊瀑布：塞里雅蘭瀑布（Seljalandsfoss）和斯科加瀑布（Skógafoss）。在冬季，塞里雅蘭瀑布被寒冷的氣溫和冰雪覆蓋，呈現出一幅神秘而迷人的冬日景象。在塞里雅蘭瀑布，您可以在瀑布後面的小徑上漫步，以一個完全不同的角度欣賞瀑布，看水流從高聳的懸崖上垂直落下的震撼景象，感受水簾的清涼和瀑布的壯麗。離塞里雅蘭瀑布不遠、隱藏在山脈裂縫中的神秘瀑布Glufrabúi，是一個不為世人廣知的隱秘之地。儘管它的名聲不及塞里雅蘭瀑布那般響亮，但其深邃寧靜的特質卻吸引了無數探險者前來探秘。在另一個頗具盛名的斯科加瀑布，這座高達60米、寬約25米的瀑布以其驚人的水勢和壯麗的景觀而聞名於世。您可以沿著附近的步道徒步探索至瀑布頂端，一覽瀑布全景和南岸風光，白雪覆蓋的山脈和周邊的冰川景觀將為您帶來無與倫比的視覺盛宴，更添冬日別樣感受。同樣，您也將來到冰島獨有的黑沙灘（Reynisfjara），欣賞如同管風琴一般的六邊形玄武岩柱，看大西洋海浪衝擊鋪滿黑色火山沙礫的海岸，盡享冰島之美。",
      highlights: icelandGroupWinter6Day2Highlights,
      optionalActivities: icelandGroupWinter6Day2OptionalActivities,
    },
    {
      day: 3,
      title: "傑古沙龍冰河湖、鑽石沙灘、藍冰洞探險、南岸沿途風光",
      accommodation: "雷克雅未克",
      description:
        "今天您將向東部出發，抵達傑古沙龍冰河湖（Jökulsárlón）。在這裡，您可以欣賞到神秘壯觀的冰河湖，上面漂浮著形狀各異的冰塊，有的高聳入雲，有的小到一隻手便能握住。冬日，遠處的山脈和冰川更是與冰河湖相互映襯，交織為更加夢幻的色彩，這樣的景色絕對世間難尋第二處。在冰河湖的對面是鑽石沙灘（Diamond Beach）。黑色沙灘上佈滿了冰塊，陽光下好似一顆顆熠熠閃光的鑽石，可以說，這樣的美景真的是得到了大自然的眷顧，才能美得如此不真實。今日行程的一個重頭戲是，我們會深入冰川內部，體驗令人激動的藍冰洞探險。您將穿上專業冰洞探險裝備，在嚮導的帶領下感受藍冰洞這一冰川奇蹟，途中我們嚮導還會給您介紹相關的知識背景和有趣傳說。此外，冰洞的形狀和大小因冰川而異，每年都會有新的冰洞形成，因此每個冰洞的體驗都是獨特的。您也將在沿途的Hofskirkja草皮教堂停留，這座古老的教堂是冰島傳統建築的代表。它的屋頂覆蓋著厚厚的草皮，與周圍的自然環境和諧地融為一體。教堂內部裝飾簡樸而神聖，講述著冰島人信仰的故事。隨後，在廣闊的埃爾德熔岩原（Eldhraun），黑色的熔岩鋪展開來，彷彿是大地的傷痕，記錄著火山爆發時的壯觀場景。冬日時分，有白雪覆蓋期間，您可以想像數百萬年前火山噴發的震撼力量，感受地球的脈動。今日行程最後將抵達風景如畫的維克鎮（Vík í Mýrdal），感受避世南岸小鎮獨特的風光。",
      highlights: icelandGroupWinter6Day3Highlights,
      optionalActivities: icelandGroupWinter6Day3OptionalActivities,
    },
    {
      day: 4,
      title: "黃金圈：間歇泉、黃金瀑布、辛格維利爾國家公園",
      accommodation: "雷克雅未克",
      description:
        "冰島黃金圈主要包括三大景點：辛格維利爾國家公園（Þingvellir National Park）、蓋歇爾間歇泉（Geysir）、黃金瀑布（Gullfoss）。辛格維利爾國家公園位於歐亞板塊和北美板塊之間的大裂谷，是冰島最早的議會（Alþingi）的所在地，始於公元930年，對冰島的民主發展產生了深遠的影響。來到間歇泉地區，最引人注目的是史托克（Strokkur）間歇泉，它每隔幾分鐘就會噴發一次，將高達30米的熱水噴射到空中，吸引眾多旅客觀賞拍照。黃金瀑布是冰島最著名和最壯麗的瀑布之一，也是黃金圈線路上的亮點之一。其水源來自於冰川河白河（Hvítá），分兩層奔流而下，給人以壯麗和震撼的感覺。凱瑞斯火山口（Kerið Crater）火山口像一顆鑲嵌在大地上的藍寶石，靜靜地躺在火山岩的懷抱中。火山口湖的湖水清澈見底，呈現出深邃的藍綠色，與天空相映成趣。湖水四周是陡峭的火山岩壁，它們的顏色從深紅到棕黑色不等，巖壁上佈滿了歲月的痕跡，見證了地球的變遷。當晚您會回到雷克雅未克入住。",
      highlights: icelandGroupWinter6Day4Highlights,
      optionalActivities: icelandGroupWinter6Day4OptionalActivities,
    },
    {
      day: 5,
      title: "斯奈山半島",
      accommodation: "雷克雅未克",
      description:
        "今日行程將前往斯奈山半島（Snæfellsnes），探索濃縮版的冰島自然風光。首先，您會抵達西部小鎮博爾加內斯（Borgarnes），這裡有著雪山和峽灣地貌，也是百年前挪威維京人首次登錄冰島的定居點之一。在斯奈山半島，您將前往著名的海豹沙灘（Ytri-Tunga），這裡的沙灘不同於黑沙灘，是罕見的白色。您可以海邊尋找一下在礁石上曬太陽的小海豹，又或者是在海里露出來的小腦袋。同樣，您也會來到斯奈山半島的最浪漫的打卡地，也是在明信片上最常見的取景地之一：布迪爾黑教堂（Búðakirkja）。除此之外，我們會驅車前往斯奈山半島的著名小漁村阿爾納斯塔皮（Arnarstapi），探尋前往斯奈山的黑沙灘：Djúpalónsandur黑海灘。斯奈山半島還擁有著一座最為標誌性的山脈，那便是曾經被用作權遊取景地的教會山（Kirkjufell）。冬日，這座酷似草帽的山脈被積雪覆蓋，是否讓您回憶起來了在權遊故事中眾人向著異鬼大軍進發的場景？",
      highlights: icelandGroupWinter6Day5Highlights,
      optionalActivities: icelandGroupWinter6Day5OptionalActivities,
    },
    {
      day: 6,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是您的離境日。如果您的航班較晚，您不妨再利用好時間，靜靜享受冰島本地人的生活。或是在咖啡廳品嚐醇厚的冰島咖啡，在博物館再次感受冰島文化，在酒吧暢快歡飲，或是到教堂頂樓俯瞰可愛斑斕的冰島首都風貌，去購物街為朋友家人挑選冰島特色禮品。當然，如果您在入境當天沒有時間體驗溫泉，不然選擇在離境時，用舒心暢意的溫泉體驗將行程畫上圓滿句號。最後，當您準備前往機場離境時，請您務必提前確認機場大巴接站時間，建議您提前兩個小時抵達機場辦理登記手續。祝您一路平安。",
      highlights: icelandGroupWinter6Day6Highlights,
      optionalActivities: icelandGroupWinter6Day6OptionalActivities,
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
          question: "如果天氣原因導致不發團該怎麼辦？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"針對以下三種情況，我們將分別處理您的退款事宜：\"]",
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
      tripKey: "iceland/group/winter/5",
      title: "5 天 4 夜冰島冬季超值跟團遊",
      tourCode: "SLMMD-052",
      durationLabel: "5 天／4 夜",
      description:
        "南岸、冰河湖與黃金圈，冬季跟團精選路線。",
    },
    {
      tripKey: "iceland/group/winter/7",
      title: "7 天 6 夜冰島冬季跟團遊",
      tourCode: "SLMMD-072",
      durationLabel: "7 天／6 夜",
      description:
        "更充裕的冬季跟團天數，深度探索冰島西部與南岸。",
    },
  ],
};
