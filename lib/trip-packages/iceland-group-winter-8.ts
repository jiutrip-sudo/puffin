import type { TripPackage } from "./types";
import {
  icelandGroupWinter8Day1Highlights,
  icelandGroupWinter8Day1OptionalActivities,
} from "./iceland-group-winter-8-day1-cards";
import {
  icelandGroupWinter8Day2Highlights,
  icelandGroupWinter8Day2OptionalActivities,
  icelandGroupWinter8Day3Highlights,
  icelandGroupWinter8Day3OptionalActivities,
  icelandGroupWinter8Day4Highlights,
  icelandGroupWinter8Day4OptionalActivities,
  icelandGroupWinter8Day5Highlights,
  icelandGroupWinter8Day5OptionalActivities,
  icelandGroupWinter8Day6Highlights,
  icelandGroupWinter8Day6OptionalActivities,
  icelandGroupWinter8Day7Highlights,
  icelandGroupWinter8Day7OptionalActivities,
  icelandGroupWinter8Day8Highlights,
  icelandGroupWinter8Day8OptionalActivities,
} from "./iceland-group-winter-8-days2-8-cards";

export const icelandGroupWinter8: TripPackage = {
  id: "iceland-group-winter-8",
  tripKey: "iceland/group/winter/8",
  slug: "8-days-winter-package-circle-of-iceland-blue-ice-cave",
  tourCode: "SMD-082",
  title: "8 天 7 夜冰島冬季跟團遊",
  subtitle: "溫泉文化 & 黃金圈",
  duration: { days: 8, nights: 7 },
  season: { label: "冬季", months: "11 月–4 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "跟團",
    tourCode: "SMD-082",
  },
  eyebrow: "冰島集合 · 跟團 · 冬季",
  backHref: "/trips/iceland/group/winter",
  backLabel: "返回冬季跟團",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/be5ba64f349aa795f653231dac5e44a_fa8600600a.jpg",
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
      "這個 8 天 7 夜冰島冬季環島跟團遊，沿一號公路由品質小巴團與專業嚮導帶您走訪黃金圈、南岸、東部峽灣、米湖與阿克雷里等冬日風光。行程充分顧及冬季日照與路況，節奏適中、安排務實。",
    full: `這個 8 天 7 夜冰島冬季環島跟團遊，沿冰島一號公路，由品質小巴團與專業嚮導帶您走訪黃金圈、南岸、東部峽灣、米湖與北部精華。套餐充分顧及冬季日照時數與路況，行程安排合理、節奏適中。

您將造訪黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）；沿南岸探索塞里雅蘭瀑布、斯科加瀑布、黑沙灘（Reynisfjara）與雷尼斯岩（Reynisdrangar），並參加索爾黑馬冰川健行與藍冰洞探險。

往東穿越東部峽灣海岸，北上米湖（Lake Mývatn）地區，遊覽 Hverir 地熱區、黑暗城堡（Dimmuborgir）與眾神瀑布（Goðafoss）；回程前於豪加內斯（Hauganes）出海觀鯨。天候許可時，亦有機會在途中共賞北極光。

完成預訂後，您將收到行程策劃師為您客製的中文行程手冊。冬季環島團發團日期及團次位置有限，預訂前請確認出發日是否有餘位。`,
  },
  gallery: [
    {
      id: "be5ba64f349aa795f653231d",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/be5ba64f349aa795f653231dac5e44a_fa8600600a.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "godafoss_w_3martin_brech",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/godafoss_w_3martin_brechtl_w_Tca_Dhf3_M_Es_unsplash_229ac5f5b6.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    },
    {
      id: "1_6_873b6bde2b",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/1_6_873b6bde2b.jpg",
      alt: "冰島冬季跟團",
      caption: "冰島冬季南岸",
    }
  ],
  highlights: [
    "跟隨專業嚮導覽冰島環島熱門景點",
    "感受冰島人刻在骨子裡的溫泉文化",
    "造訪冰島黃金圈經典景點",
    "在冰河湖和鑽石沙灘感受浪漫夢幻",
    "雙腳立足於歐洲最大冰川",
    "在東部峽灣感受漁民生活日常",
    "在冰島北部感受維京人文歷史",
    "在冬日追逐絢麗的北極光",
  ],
  attractions: [
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
      name: "埃伊爾斯塔濟",
      nameEn: "Egilsstaðir",
      region: "冰島東部",
      subtitle: "冰島東部樞紐小鎮，野生馴鹿和健行是這裡的兩大黃金招牌。",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/egilsstadir1_4cef6ca33c.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/egilsstadir1_4cef6ca33c.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/egilsstadir_ito_11572a4a84.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Austurbru_Pall_Gudmundur_Egilsstadir_DJI_0142_2850a41506.jpg",
      ],
      paragraphs: [
        "拉加爾湖畔的東冰島核心小鎮",
        "埃伊爾斯塔濟（Egilsstaðir）是冰島東部最大的城鎮，隸屬於冰島面積最大的自治市穆拉湖市（Múlaþing）。埃伊爾斯塔濟位於拉加爾湖（Lagarfjlót）畔，毗鄰 1 號環島公路，是冰島東部的重要樞紐。從小鎮出發，前往塞濟斯菲厄澤（Seyðisfjörður）僅需 20 分鐘，前往近年備受矚目的 Stuðlagil 峽谷也只需 1 小時車程。",
        "無論夏季還是冬季，埃伊爾斯塔濟都是適宜的旅遊勝地，尤其以馴鹿觀賞、觀鳥、健行等戶外活動而出名。埃伊爾斯塔濟擁有富饒的綠色植被、迷人的山丘和瀑布，夏季陽光明媚，冬季白雪皚皚。遊覽埃伊爾斯塔濟絕對是獨一無二的體驗，因為冰島只有東部地區才會出現馴鹿這種野生動物。埃伊爾斯塔濟有著多樣的自然美景和宜人的氣候。 瀑布、峽谷、湖泊和河流讓這裡十分適合開展戶外活動，健行路線穿越森林和開闊地帶，全年開放。這裡還盛產漿果和蘑菇，湖泊和河流是垂釣愛好者的好去處，獵人們也公認這裡是冰島最令人興奮的狩獵地區。",
        "距離小鎮僅1小時車程的Stuðlagil峽谷是近些年來冰島正在“崛起”的精華小眾景點之一。峽谷是在約庫爾薩河（Jökulsá）之下形成的，幾年前河水水位下降，才顯露出這個大自然的奇蹟。這裡擁有冰島數量最多的玄武岩石柱，您可以俯瞰顏色深淺不一的嶙峋巖柱，它們與清澈蔚藍的河水形成鮮明對比。",
        "除了自然景觀以外，埃伊爾斯塔濟附近最著名的遊玩活動當屬Vök Baths溫泉，溫泉由兩個六邊形的無邊泳池組成，像寶石一樣漂浮在Urriðavatn湖上，距離埃伊爾斯塔濟僅約5公里，是冰島東部的必去之地之一。Vök Baths溫泉利用天然地熱能加熱泉水，顧客在溫泉水中放鬆休閒的同時還能欣賞到湖面和周圍地區的迷人景色，與大自然融為一體。與冰島其他地區相比，東部的溫泉較少，因此更加凸顯出Vök Baths溫泉的特別之處。",
      ],
    },
    {
      name: "米湖",
      nameEn: "Lake Mývatn",
      region: "冰島北部",
      subtitle: "領略冰島第四大湖的旖旎風光，記得提前準備好面罩！",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/myvatn2_c34ac89174.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/myvatn2_c34ac89174.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/myvatn3_409d3572c2.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/myvatn1_aeddb05db2.jpg",
      ],
      paragraphs: [
        "北部冰島的閃亮名片",
        "米湖（Lake Mývatn）位於冰島北部，是冰島的第四大湖泊，長9.5千米，寬6.5千米，面積覆蓋37平方公里。米湖周圍遍佈著大大小小的景點，汩汩冒泡的泥漿池、大小不一的火山口和新生的熔岩地是這裡最為迷人的景緻，使其成為了冰島北部鑽石圈線路的最大亮點之一。",
        "湖岸邊水灣靜靜地接受著湖水的拍打，湖面上點綴著約50個小島。湖中盛產蠓蟲，也正是這些無處不在的小飛蟲使該湖得名——米湖的冰島名稱直譯為飛蟲湖。米湖的景色對比之大，密度之高，讓人們不出十里路就能體驗到冰島北部最美的景色。",
        "大約一萬年前，整個米湖及周邊地區還是一片被冰川覆蓋的不毛之地。數千年來，該地區遭受了多次火山運動的破壞，火山爆發後，大部分的冰川迅速融化。大約2300年前一次巨大的火山噴發形成的巨大熔岩阻塞了河流，米湖也因此而形成。",
        "米湖的水不深，陽光可以照射到整個湖床表面。湖區的生態資源極為多樣，淡水海藻在湖中大量生長，湖床上也掛有大量的硅藻，而在靠近湖面的地方，米湖著名的北極鮭則穿梭於水生植物和長滿肥沃植被的島礁之間。",
        "米湖的鳥類種類繁多，是多種湖鳥和沼鳥的棲息地。最值得一提的是，夏季的米湖有14種鴨子在這裡築巢，這在北半球是絕無僅有的，其密度之高、種類之多在全世界都稱得上是獨一無二的。米湖也因其自然多樣性成為了法定的自然保護區，與從米湖流出的拉克薩河（Laxá）一起被列入了國際重要濕地名錄。",
      ],
    },
    {
      name: "米湖地熱區",
      nameEn: "Mývatn Geothermal Area",
      region: "冰島北部",
      subtitle: "在米湖旁的地熱區稍作停留，異世繽紛的景觀和硫磺的特殊氣味一定會讓你對這裡印象深刻。",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Myvatn_Geothermal_Area1_4b4bcb4149.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Myvatn_Geothermal_Area1_4b4bcb4149.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Myvatn_Geothermal_Area3_bd3aa3dbed.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Myvatn_Geothermal_Area2_5844278012.jpg",
      ],
      paragraphs: [
        "上帝在這裡打翻了調色盤",
        "米湖地熱區（Myvatn Geothermal Area）位於冰島北部，是著名的米湖旁一片異世景觀地。這裡以獨特的火山景觀、湛藍的湖泊、沸騰的泥漿坑和斑斕的地表色彩而聞名遐邇。米湖的冰島語原意為”飛蠓湖“，因夏季有大量飛蠓小蟲在此地上空飛舞而得名。",
        "米湖地熱區的地熱活動是緣於其地理區位，這裡位於克拉弗拉火山系統內，地殼下是一系列相互連接的裂縫和巖漿室。當巖漿上升到地表時，會加熱周圍的岩石和地下水，從而形成地熱儲層。這些儲層的熱量會加熱地下水，從而形成溫泉。當火山活動、地熱和富含礦物質的地下水相結合，就形成了米湖地熱區獨特的地熱景觀。",
        "米湖地熱區中最著名的區域當屬Hverir地熱區，這裡的大地色彩斑斕，泥漿池冒著騰騰熱氣，紅色、黃色和綠色的鮮豔色彩與貧瘠的岩石地形形成鮮明對比。",
        "米湖地熱區的另一個著名景點是米湖溫泉，這裡通常被旅客稱為“北邊的藍湖溫泉”。",
        "除了地熱特色，米湖地熱區還是一個熱門的觀鳥地點。米湖湖泊本身就吸引了多種多樣的鳥類，其中包括幾種稀有和受保護的鳥類。鳥類愛好者蜂擁而至，一睹各種水鳥、涉禽和候鳥的風採，使這裡成為了鳥類學愛好者的天堂。",
      ],
    },
    {
      name: "眾神瀑布",
      nameEn: "Goðafoss",
      region: "冰島北部",
      subtitle: "和黛提瀑布併成為“美女與野獸”的眾神瀑布，冰島鑽石圈上的絕美風光。",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/godafoss3_54ff933f33.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/godafoss3_54ff933f33.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/godafoss2_004851286a.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/godafoss1_423882b152.jpg",
      ],
      paragraphs: [
        "美妙絕倫的30",
        "眾神瀑布（Goðafoss）位於冰島北部鑽石圈線路內，位於米湖（Lake Mývatn）與阿克雷里（Akureyri）的中間，靠近胡薩維克（Húsavík）、米湖地熱區（Mývatn Geothermal Area）、黛提瀑布（Dettifoss）等北部著名景點。",
        "眾神瀑布是冰島最壯觀的瀑布之一，Skjálfandafljót河的冰川河水從12米的半弧形懸崖上面落下，寬度則是達到了30米之寬，河水落下，形成了一幅藍綠色的漩渦圖案。",
        "而眾神瀑布在冰島這個遍佈著瀑布的國家脫穎而出，成為旅客之中最出名的景點之一，不僅是憑藉其景色之磅礴壯美，有關瀑布的古老故事更是為其增添了不少神話色彩，讓這支白霧籠罩的美麗瀑布再蒙上了一層歷史厚重金色的面紗。",
        "根據冰島傳說，在公元1000年，由於冰島信仰的宗教與歐洲主流的基督教不同，因而產生了矛盾，尤其是來自以挪威人為首的其他歐洲國家的壓力越來越大。當時的法律演講人Thorgeir Thorkelsson是一個受到冰島基督教派和舊教派雙方尊敬和敬仰的人物，他被選為最終作出決定的人。",
        "在思考了三天之後，他宣佈冰島人應該信奉基督教，但同時不禁止或限制人們信仰北歐諸神的自由，仍然可以舉行異教節日。最後，他象徵性地將他的供奉的北歐神像們拋入了瀑布，標誌著該國正式接受基督教作為官方宗教，這支瀑布也因此得名為眾神瀑布。拋神像這一舉動據說惹惱了眾神，因此他們把瀑布一分為二。就如您所見，眾神瀑布中間由一塊巨大的黑色岩石分割開來。",
        "瀑布靠近1號環島公路，兩邊都有停車場，並有良好的步行道路通往瀑布。從兩邊都能欣賞到美景，步行距離最短的地方是河的西邊。瀑布旁還有紀念品商店和餐廳，旅客們可以一併參觀。",
      ],
    },
    {
      name: "阿克雷里",
      nameEn: "Akureyri",
      region: "冰島北部",
      subtitle: "這個冰島北部小城，連紅綠燈都是愛你的形狀",
      imageUrl: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/akureyri2_4315b5a769.jpg",
      galleryImages: [
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/akureyri2_4315b5a769.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/akureyri1_3578767475.jpg",
        "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/akureyri3_ee2c50a339.jpg",
      ],
      paragraphs: [
        "「北冰島之都」的無限魅力",
        "阿克雷里（Akureyri）是冰島第二大城市，冰島北部最大的城市，人口約為19000人，因此也被人們稱為“冰島北部的首都”。",
        "由於位於鑽石圈線路內，阿克雷里成為了旅行者遊覽冰島北部的駐地，從這裡出發前往米湖（Lake Myvatn）、Námafjall地熱區、胡薩維克（Húsavík）、眾神瀑布（Goðafoss）和黛提瀑布（Dettifoss）等令人神往的景點都非常便捷，一站式體驗漂流、健行、洞穴探險、觀鯨和騎馬等諸多令人腎上腺素直升的戶外娛樂活動。",
        "城市生活",
        "阿克雷里城市不大，坐落在冰島最北部的峽灣埃亞峽灣旁，民風淳樸，貼近自然，鎮上大部分的景點步行就可以到達，比如擁有7000多種植物的世界最北植物園、高大雄偉的阿克雷里大教堂（Akureyrarkirkja）、阿克雷里博物館等。",
        "城市的公交系統是完全免費的，旅客可以在城市中的精品咖啡、餐館、泳池和飯店自由穿梭。別忘了前去阿克雷里北部的啤酒SPA享受一番，啤酒浴、溫泉加上餐廳的配置堪稱一絕。當地的藝術和音樂氛圍也十分濃厚，該鎮還擁有冰島在雷克雅維克以外唯一的一所專業劇院。",
        "在阿克雷里的城市中游蕩，你很難不注意到遍佈全城的愛心紅綠燈。當紅燈亮起，所有人都趕忙合影一張，在這接近極圈的緯度中收集一絲城市的暖意。在2008年冰島的金融危機後，阿克雷里政府為了鼓舞民眾而將信號燈的形狀改成愛心，意在傳遞積極、開心的心態，這個暖心的舉動也一直延續到了今天。",
        "冬季的阿克雷里",
        "冬季的阿克雷里看起來更加純淨，粉雪覆蓋了整片大地。從這裡到全國最大的滑雪場之一Hlíðarfjall滑雪場只需十分鐘左右，備受旅客和當地滑雪愛好者的追捧和喜愛。在天黑後的晴朗冬日，北極光經常出現，在滑雪場上翩翩起舞，呈現出醒目的綠色、紫色甚至紅色，這也正是北部冰島吸引旅客的一大亮點。",
        "跳島觀鳥",
        "赫里斯島（Hrísey）和格里姆賽島（Grímsey）是冰島的兩大觀鳥天堂，分別於2004年和2009年被並入阿克雷里的管轄。從阿克雷里前往這兩個島嶼分別只需要1個小時和3個小時。",
      ],
    },
  ],
  routeOverviewSubtitle: "冬季環島跟團：黃金圈、南岸、東部峽灣與北部精華",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）" },
    { label: "第 3 天", detail: "南岸 → 塞里雅蘭／斯科加瀑布 → 索爾黑馬冰川 → 黑沙灘" },
    { label: "第 4 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞" },
    { label: "第 5 天", detail: "東部峽灣風光" },
    { label: "第 6 天", detail: "米湖 → Hverir 地熱區 → 黑暗城堡 → 眾神瀑布" },
    { label: "第 7 天", detail: "阿克雷里 → 北部觀鯨 → 返回雷克雅維克" },
    { label: "第 8 天", detail: "雷克雅維克 → 機場離境" }
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
        detail: "黃金圈",
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
        detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞",
      },
      {
        lng: -14.4,
        lat: 65.26,
        label: "第 5 天",
        detail: "東部峽灣",
      },
      {
        lng: -16.9,
        lat: 65.6,
        label: "第 6 天",
        detail: "米湖與北部地熱景觀",
      },
      {
        lng: -18.09,
        lat: 65.68,
        label: "第 7 天",
        detail: "阿克雷里 → 觀鯨",
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
        "今天是您入境冰島的第一天。我們安排機場巴士接送您至雷克雅維克市區飯店入住安頓。\n\n若抵達時間為上午或下午，可前往 Sky Lagoon 天空之境溫泉放鬆身心，為接下來的環島跟團儲備體力。",
      highlights: icelandGroupWinter8Day1Highlights,
      optionalActivities: icelandGroupWinter8Day1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈：辛格維利爾國家公園、蓋錫爾間歇泉地帶、黃金瀑布",
      accommodation: "南岸",
      description:
        "今日遊覽冰島最著名的黃金圈路線，依序造訪辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）。辛格維利爾位於板塊裂谷邊緣，冰島議會曾在此召開；史托克間歇泉約每五至十分鐘噴發一次。冬季黃金瀑布兩岸常覆有一層白雪，景致難得。結束後南下，今晚入住南岸。",
      highlights: icelandGroupWinter8Day2Highlights,
      optionalActivities: icelandGroupWinter8Day2OptionalActivities,
    },
    {
      day: 3,
      title: "塞里雅蘭瀑布、斯科加瀑布、索爾黑馬冰川健行、黑沙灘",
      accommodation: "南岸",
      description:
        "今日沿南岸一號公路南下，造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；冬季基於安全考量，塞里雅蘭瀑布後方小徑通常封閉。\n\n下午參加索爾黑馬冰川（Sólheimajökull）徒步，專業嚮導將提供安全裝備並講解冰川知識。繼續南下至黑沙灘（Reynisfjara），遠眺雷尼斯岩（Reynisdrangar）矗立海中。請務必遵守安全警示，遠離海浪。今晚繼續入住南岸。",
      highlights: icelandGroupWinter8Day3Highlights,
      optionalActivities: icelandGroupWinter8Day3OptionalActivities,
    },
    {
      day: 4,
      title: "傑古沙龍冰河湖、鑽石沙灘、藍冰洞探險",
      accommodation: "南部",
      description:
        "今日往東南前進，進入瓦特納冰川國家公園。造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach），浮冰在黑色沙灘上晶瑩閃耀。\n\n下午由專業嚮導帶領參加藍冰洞探險，深入冰川內部感受冬季冰藍奇景。若藍冰洞未開放，將改赴卡特拉冰洞（Katla Ice Cave）。今晚入住南部。",
      highlights: icelandGroupWinter8Day4Highlights,
      optionalActivities: icelandGroupWinter8Day4OptionalActivities,
    },
    {
      day: 5,
      title: "東部峽灣風光",
      accommodation: "南岸或東部峽灣",
      description:
        "今日沿東部峽灣海岸公路北上，穿越幽靜峽灣與漁村。途經埃伊爾斯塔濟（Egilsstaðir）與拉加爾湖（Lagarfljót）一帶，冬季偶有野生馴鹿出沒。東部日照時數較短，請留意行車節奏。今晚入住南岸或東部峽灣。",
      highlights: icelandGroupWinter8Day5Highlights,
      optionalActivities: icelandGroupWinter8Day5OptionalActivities,
    },
    {
      day: 6,
      title: "米湖、Hverir地熱泥漿池、黑暗城堡熔岩群、眾神瀑布",
      accommodation: "米湖地區",
      description:
        "今日北上米湖（Lake Mývatn）地區。米湖周邊火山地貌豐富，將遊覽 Hverir 地熱泥漿池、黑暗城堡（Dimmuborgir）熔岩群等景點，感受北部獨特的地質奇觀。\n\n途經眾神瀑布（Goðafoss），聆聽冰川河水從半弧形懸崖傾瀉而下的澎湃水聲。米湖地區是冬季追尋北極光的熱門區域之一。今晚入住米湖地區。",
      highlights: icelandGroupWinter8Day6Highlights,
      optionalActivities: icelandGroupWinter8Day6OptionalActivities,
    },
    {
      day: 7,
      title: "阿克雷里、北部觀鯨體驗",
      accommodation: "雷克雅維克",
      description:
        "今日從北部阿克雷里（Akureyri）返程。出發前於豪加內斯（Hauganes）出海觀鯨，專業船員帶領您在大西洋上尋找座頭鯨、海豚等海洋生物。\n\n觀鯨結束後沿一號公路返回雷克雅維克，途中視天候於精選景點短暫停留。今晚入住雷克雅維克。",
      highlights: icelandGroupWinter8Day7Highlights,
      optionalActivities: icelandGroupWinter8Day7OptionalActivities,
    },
    {
      day: 8,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日。請依預定時間搭乘機場巴士前往凱夫拉維克國際機場。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻，造訪哈爾格林姆斯大教堂、托寧湖（Tjörnin）等景點。",
      highlights: icelandGroupWinter8Day8Highlights,
      optionalActivities: icelandGroupWinter8Day8OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含各類景點、歷史、文化、自然等資訊描述）",
      "簽證輔助行程單材料提供",
      "機場往返市區飯店大巴接送",
      "雷克雅維克市區2晚住宿",
      "英文嚮導環島6日遊",
      "英文嚮導",
      "環島行程中5晚舒適級住宿",
      "每日住宿提供早餐",
      "Sky Lagoon 天空之境溫泉7步療法純享體驗門票",
      "Sky lagoon 往返接駁巴士",
      "冰川健行體驗及安全裝備",
      "藍冰洞探險體驗及安全裝備",
      "北部觀鯨體驗",
      "車載WiFi",
      "台灣冰島雙時區服務",
      "VAT增值稅",
    ],
    excluded: [
      "晚餐",
      "午餐",
      "防寒衣物",
      "登山鞋",
      "自選報名活動",
      "個人旅行保險",
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
          question: "去冰島旅遊需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"雖然比世界上緯度相近的許多地方都要溫暖，但冰島總體上還是一個寒冷的國家，特別是在冬季，平均氣溫在0攝氏度左右，而夏季的平均氣溫約在10-15度。\"]",
        },
        {
          question: "冰島哪個季節最適合旅遊？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這個問題要取決於您的旅行計劃和安排，對於想體驗不同景觀和項目的旅客來說，答案也會有所不同：\"]",
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
      tripKey: "iceland/group/winter/7",
      title: "7 天 6 夜冰島冬季跟團遊",
      tourCode: "SMD-072",
      durationLabel: "7 天／6 夜",
      description:
        "南岸、黃金圈、西部與斯奈山，冬季跟團精選路線。",
    },
    {
      tripKey: "iceland/group/winter/9",
      title: "9 天 8 夜冰島冬季跟團遊",
      tourCode: "SMD-092",
      durationLabel: "9 天／8 夜",
      description:
        "更充裕的冬季環島天數，深度探索冰島北部與西部。",
    },
  ],
};
