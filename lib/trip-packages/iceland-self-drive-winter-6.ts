import type { TripPackage } from "./types";
import { planeWreckSpot } from "./spots/plane-wreck";
import { gullfossSpot } from "./spots/gullfoss";
import { geysirSpot } from "./spots/geysir";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import {
  icelandSelfDriveWinter6Day1Highlights,
  icelandSelfDriveWinter6Day1OptionalActivities,
} from "./iceland-self-drive-winter-6-day1-cards";
import {
  icelandSelfDriveWinter6Day2Highlights,
  icelandSelfDriveWinter6Day2OptionalActivities,
  icelandSelfDriveWinter6Day3Highlights,
  icelandSelfDriveWinter6Day3OptionalActivities,
  icelandSelfDriveWinter6Day4Highlights,
  icelandSelfDriveWinter6Day4OptionalActivities,
  icelandSelfDriveWinter6Day5Highlights,
  icelandSelfDriveWinter6Day5OptionalActivities,
  icelandSelfDriveWinter6Day6Highlights,
  icelandSelfDriveWinter6Day6OptionalActivities,
} from "./iceland-self-drive-winter-6-days2-6-cards";

export const icelandSelfDriveWinter6: TripPackage = {
  id: "iceland-self-drive-winter-6",
  tripKey: "iceland/self-drive/winter/6",
  slug: "6-days-5-nights-winter-self-drive-tour-south-coast-ice-cave",
  tourCode: "SSD-062",
  title: "6 天 5 夜冰島冬季經典自駕遊",
  subtitle: "維克 & 冰河湖 & 藍冰洞",
  duration: { days: 6, nights: 5 },
  season: { label: "冬季", months: "11 月–3 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "自駕",
    tourCode: "SSD-062",
  },
  eyebrow: "冰島集合 · 自駕 · 冬季",
  backHref: "/trips/iceland/self-drive/winter",
  backLabel: "返回冬季自駕",
  heroImage:
    "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/3_H6_A4177_2f23f858c9.jpg",
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
      "這個 6 天 5 夜冰島冬季經典自駕遊涵蓋南岸精華、藍冰洞與黃金圈，並保留一天探索南岸小眾景點。行程充分顧及冬季日照與路況，節奏適中，並有多次機會追尋北極光。",
    full: `這個 6 天 5 夜冰島冬季經典自駕遊涵蓋南岸精華、藍冰洞與黃金圈，並保留一天從容探索羽毛峽谷、迪霍拉里等小眾景點。套餐充分顧及冬季日照時數與路況，行程安排合理、節奏適中，讓您既能盡覽經典，也能細細感受冬日風光。

行程涵蓋黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）；南岸則有黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）等代表性風景。冬季更有機會進入藍冰洞（Blue Ice Cave），在冰川內欣賞奇幻冰藍世界；亦可另行加購冰川健行、冰河湖船遊或地熱溫泉體驗。

完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，沿途景點、人文、歷史與自然皆有詳盡說明，讓您輕鬆盡享冰島冬季精華。`,
  },
  gallery: [
    {
      id: "vik-aurora",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/3_H6_A4177_2f23f858c9.jpg",
      alt: "冰島冬季南岸",
      caption: "南岸冬季風光",
    },
    {
      id: "ice-cave",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/5_4e202e96f5.jpg",
      alt: "藍冰洞",
      caption: "藍冰洞探險",
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
      id: "plane-wreck",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/plane_wreck_unsplash2_34bf5e223d.jpg",
      alt: "飛機殘骸",
      caption: "飛機殘骸",
    },
    {
      id: "diamond-beach",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/diamond_beach_unsplash_11020ebd2f.jpg",
      alt: "鑽石沙灘",
      caption: "鑽石沙灘",
    },
    {
      id: "fjallsarlon",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/1_Fjallsarlon_Iceberg_Boat_Tours_glacier_lagoon_1_435265ceb2.jpg",
      alt: "小冰河湖",
      caption: "小冰河湖",
    },
    {
      id: "fjaðrárgljúfur",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Fjadrargljufur1_1391949e75.jpg",
      alt: "羽毛峽谷",
      caption: "羽毛峽谷",
    },
    {
      id: "gullfoss",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gullfoss1_9c5319c04c.jpg",
      alt: "黃金瀑布",
      caption: "黃金瀑布",
    },
  ],
  highlights: [
    "全程由您掌控方向盤，自主設定行程節奏",
    "雙腳立足於歐洲最大冰川",
    "自駕體驗冰島最熱門一號公路",
    "藍冰洞探險與冰川健行",
    "南岸小眾景點與黃金圈一次收齊",
    "多次機會追尋北極光",
  ],
  attractions: [
        seljalandsfossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    planeWreckSpot,diamondBeachSpot,
    gullfossSpot,geysirSpot,],
  routeOverviewSubtitle: "南岸、冰河湖與黃金圈冬季自駕動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、取車、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "南岸瀑布群 → 黑沙灘 → 飛機殘骸 → 南岸住宿" },
    { label: "第 3 天", detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 藍冰洞（可選）→ 南部住宿" },
    { label: "第 4 天", detail: "羽毛峽谷 → 維克 → 小冰河湖 → 南岸小眾景點" },
    { label: "第 5 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）→ 雷克雅維克" },
    { label: "第 6 天", detail: "雷克雅維克市區（可選）→ 機場離境" },
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
        lng: -18.057,
        lat: 63.794,
        label: "第 2 天",
        detail: "南岸一號公路 → 瀑布 → 黑沙灘",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 3 天",
        detail: "傑古沙龍冰河湖 → 鑽石沙灘",
      },
      {
        lng: -17.8,
        lat: 63.75,
        label: "第 4 天",
        detail: "羽毛峽谷 → 維克 → 小冰河湖",
      },
      {
        lng: -20.5322,
        lat: 64.3271,
        label: "第 5 天",
        detail: "黃金圈 → 雷克雅維克",
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
      title: "入境日",
      accommodation: "雷克雅維克",
      description:
        "今天是您入境冰島的第一天。抵達後請先至租車櫃檯取車，工作人員會協助檢查車輛，並說明冰島安全駕駛須知。之後即可前往雷克雅維克精選飯店入住安頓。\n\n若時間充裕，可造訪哈爾格林姆斯大教堂、哈帕音樂廳與彩虹街，或另行加購 Sky Lagoon 天空之境溫泉放鬆身心，為接下來的南岸自駕儲備體力。",
      highlights: icelandSelfDriveWinter6Day1Highlights,
      optionalActivities: icelandSelfDriveWinter6Day1OptionalActivities,
    },
    {
      day: 2,
      title: "冰島南岸風光",
      accommodation: "南岸",
      description:
        "今天請一早出發，沿冰島南岸一號公路南下。冬季南岸色調獨特：白雪覆蓋大地、天際染上一抹粉霞，為旅程增添溫暖氣息。\n\n首先來到塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；冬季基於安全考量，塞里雅蘭瀑布後方小徑通常封閉。繼續南下造訪黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中；沿途亦可安排 DC-3 飛機殘骸（Solheimasandur Plane Wreck）。今晚入住南岸附近飯店，天候許可時可遠離光源追尋極光。",
      highlights: icelandSelfDriveWinter6Day2Highlights,
      optionalActivities: icelandSelfDriveWinter6Day2OptionalActivities,
    },
    {
      day: 3,
      title: "冰河湖風光",
      accommodation: "南部",
      description:
        "今日繼續往東南前進，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外震撼。\n\n若時間充裕，亦可另行加購瓦特納冰川藍冰洞探險或斯卡夫塔山冰川健行，深入認識歐洲最大冰川的冬日奇景。結束後前往南部住宿。",
      highlights: icelandSelfDriveWinter6Day3Highlights,
      optionalActivities: icelandSelfDriveWinter6Day3OptionalActivities,
    },
    {
      day: 4,
      title: "南岸小眾景點",
      accommodation: "南岸",
      description:
        "今日節奏較從容，探索南岸小眾路線：羽毛峽谷（Fjaðrárgljúfur）的曲折岩壁、維克（Vík）的寧靜氛圍、迪霍拉里（Dyrhólaey）的海岸拱門、埃爾德熔岩原（Eldhraun）的蒼翠苔蘚，以及小冰河湖（Fjallsárlón）的靜謐景致。適合細細感受南岸冬日風光，不必趕路。今晚繼續入住南岸。",
      highlights: icelandSelfDriveWinter6Day4Highlights,
      optionalActivities: icelandSelfDriveWinter6Day4OptionalActivities,
    },
    {
      day: 5,
      title: "黃金圈之旅",
      accommodation: "雷克雅維克",
      description:
        "今日造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。走近黃金瀑布時，您將被巨大的水流所震撼；陽光下水珠有時散發金色光芒。於辛格維利爾國家公園漫步時，亦可另行加購絲浮拉裂谷（Silfra）浮潛、雪地摩托或溫泉體驗。傍晚返回雷克雅維克住宿。",
      highlights: icelandSelfDriveWinter6Day5Highlights,
      optionalActivities: icelandSelfDriveWinter6Day5OptionalActivities,
    },
    {
      day: 6,
      title: "離境日",
      accommodation: "—",
      description:
        "歡樂時光總是過得特別快。今天是離境日，請預留時間前往機場辦理退稅與還車。若班機時間較晚，可在雷克雅維克市區多留片刻，最後感受這座北歐首都的獨特氛圍。期待您下次再來冰島！",
      highlights: icelandSelfDriveWinter6Day6Highlights,
      optionalActivities: icelandSelfDriveWinter6Day6OptionalActivities,
    },
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含冰島駕駛實用資訊，以及各類景點、歷史、文化和自然等資訊描述）",
      "5 整天租車（多種車型可選，包含 CDW 碰撞險）",
      "冰島行程期間 5 晚住宿",
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
            "透過帕芬假期租車，SUV、越野車、商務旅行等車型的最低年齡限制為 23 歲，其他小型轎車最低年齡限制為 20 歲。租車時，您必須持有合法且有效的駕照至少一年。台灣旅客需在來冰島之前申請國際駕照。取車時，需出示本國駕照正本與國際駕照。注意：您需要準備一張主駕駛人名下的信用卡，並在租車時出示，用於處理車輛出現任何損壞或其他額外費用時的押金。我們接受美國運通卡、萬事達卡和 VISA 卡。",
        },
        {
          question: "在冰島租車需要什麼證件？",
          answer:
            "取車時需要駕駛人攜帶以下證件：本國駕照正本、國際駕照，以及主駕駛人本人名下的信用卡（用於支付汽車出現任何損壞或其他額外費用的押金）。我們接受萬事達卡、VISA 卡以及美國運通卡。",
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
            "目的是避開第三方平台「全險」陷阱，保障您的權益。部分租車比價或代訂平台加購的「全險」，常非冰島本地車行承保，與冰島車行保險體系脫鉤；條款往往未涵蓋冰島常見風險（如 SAAP 沙塵險），理賠流程繁瑣且易遭拒賠。冰島本地車行保險專為冰島環境設計，提供 SAAP 沙塵與火山灰保險、GP 碎石險等；出險由車行直接處理，還車驗車透明。建議勿在第三方平台額外加購保險，透過帕芬假期直連本地合規車行預訂，取車時核對保單並拍攝驗車影片。",
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
            "自駕讓您依自己的節奏前往喜歡的地方。可沿南岸觀賞瀑布、前往瓦特納冰川國家公園、體驗藍冰洞、參觀黃金圈、冬季追逐北極光、探索斯奈山半島、在藍湖溫泉放鬆、品嚐當地美食、乘船賞鯨等。選擇取決於天數與興趣，選擇權在您手中。",
        },
        {
          question: "去冰島自駕需要準備什麼行李？",
          answer:
            "無論哪個季節都可能遇到各種天氣，建議攜帶：防水防風外套與長褲、防水健行鞋、透氣運動鞋、墨鏡、手套毛線帽圍巾、泳衣、羊毛衫或毛衣、羽絨衣、保濕霜與潤唇膏、手機支架，以及國際駕照。",
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
      tripKey: "iceland/self-drive/winter/7",
      title: "冰島西南岸 7 天 6 夜冬季自駕遊",
      tourCode: "SSD-072",
      durationLabel: "7 天／6 夜",
      description:
        "黃金圈、南岸與斯奈山半島盡收囊中，途中還有機會看見舞動的北極光。",
    },
    {
      tripKey: "iceland/self-drive/winter/8",
      title: "8 天 7 夜冰島冬季精選自駕",
      tourCode: "SSD-082",
      durationLabel: "8 天／7 夜",
      description:
        "沿一號公路環島，遊覽黃金圈、南岸、冰河湖、東部峽灣、米湖與西部白銀圈。",
    },
  ],
};
