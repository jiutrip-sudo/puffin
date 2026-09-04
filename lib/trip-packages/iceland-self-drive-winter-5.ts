import type { TripPackage } from "./types";
import { planeWreckSpot } from "./spots/plane-wreck";
import { gullfossSpot } from "./spots/gullfoss";
import { geysirSpot } from "./spots/geysir";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import {
  icelandSelfDriveWinter5Day1Highlights,
  icelandSelfDriveWinter5Day1OptionalActivities,
} from "./iceland-self-drive-winter-5-day1-cards";
import {
  icelandSelfDriveWinter5Day2Highlights,
  icelandSelfDriveWinter5Day2OptionalActivities,
  icelandSelfDriveWinter5Day3Highlights,
  icelandSelfDriveWinter5Day3OptionalActivities,
  icelandSelfDriveWinter5Day4Highlights,
  icelandSelfDriveWinter5Day4OptionalActivities,
  icelandSelfDriveWinter5Day5Highlights,
  icelandSelfDriveWinter5Day5OptionalActivities,
} from "./iceland-self-drive-winter-5-days2-5-cards";

export const icelandSelfDriveWinter5: TripPackage = {
  id: "iceland-self-drive-winter-5",
  tripKey: "iceland/self-drive/winter/5",
  slug: "5-day-winter-self-drive-blue-lagoon-golden-circle-south-coast-and-northern-lights",
  tourCode: "SSD-052",
  title: "5 天 4 夜冰島冬季精簡自駕套餐",
  subtitle: "南岸風光 & 追尋極光",
  duration: { days: 5, nights: 4 },
  season: { label: "冬季", months: "11 月–3 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "自駕",
    tourCode: "SSD-052",
  },
  eyebrow: "冰島集合 · 自駕 · 冬季",
  backHref: "/trips/iceland/self-drive/winter",
  backLabel: "返回冬季自駕",
  heroImage:
    "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/skaftafell_49295564f1.jpg",
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
      "這個 5 天 4 夜冰島冬季精簡自駕套餐涵蓋南岸與黃金圈雙動線，串聯瀑布、黑沙灘、冰河湖、鑽石沙灘與蓋錫爾間歇泉地帶等代表性景點，並有機會追尋北極光。行程充分顧及冬季日照與路況，節奏適中、安排務實。",
    full: `這個 5 天 4 夜冰島冬季精簡自駕套餐是入門自駕的實用選擇，一次走訪南岸精華與黃金圈經典路線。套餐充分顧及冬季日照時數與路況，行程安排合理、節奏適中。

南岸動線涵蓋塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）；黃金圈則造訪辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）。冬季更有機會進入藍冰洞（Blue Ice Cave），在冰川內欣賞奇幻冰藍世界。

途中亦可另行加購冰川健行、藍冰洞探險或地熱溫泉體驗，並可靈活掌握停留時間，依自己的步調安排每一天。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，沿途景點、人文、歷史與自然皆有詳盡說明，讓您輕鬆盡享南岸與黃金圈冬日精華。`,
  },
  gallery: [
    {
      id: "skaftafell",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/skaftafell_49295564f1.jpg",
      alt: "斯卡夫塔山雪景",
      caption: "斯卡夫塔山",
    },
    {
      id: "skogafoss",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Skogafoss_57ba8bb1ec.jpg",
      alt: "斯科加瀑布",
      caption: "斯科加瀑布",
    },
    {
      id: "black-beach",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Ice_black_beach_7b7cb49ea0.jpg",
      alt: "黑沙灘雪景",
      caption: "黑沙灘",
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
      id: "glacier-lagoon",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/DSC_00389_4_cadb104463.jpg",
      alt: "傑古沙龍冰河湖",
      caption: "傑古沙龍冰河湖",
    },
    {
      id: "gullfoss",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/gullfoss1_9c5319c04c.jpg",
      alt: "黃金瀑布",
      caption: "黃金瀑布",
    },
    {
      id: "geysir",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/geysir_unsplash_83e7e7b45e.jpg",
      alt: "蓋錫爾間歇泉地帶",
      caption: "蓋錫爾間歇泉地帶",
    },
  ],
  highlights: [
    "全程由您掌控方向盤，自主設定行程節奏",
    "雙腳立足於歐洲最大冰川",
    "自駕體驗冰島最熱門一號公路",
    "來一場獨一無二的藍冰洞探險",
    "有機會體驗冰島天然的地熱溫泉",
    "行程中多次機會追尋北極光",
  ],
  attractions: [
        seljalandsfossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    planeWreckSpot,diamondBeachSpot,
    gullfossSpot,geysirSpot,],
  routeOverviewSubtitle: "南岸與黃金圈冬季自駕動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、取車、市區初探）" },
    { label: "第 2 天", detail: "南岸一號公路 → 瀑布群 → 黑沙灘 → 南岸住宿" },
    { label: "第 3 天", detail: "瓦特納冰川 → 傑古沙龍冰河湖 → 鑽石沙灘 → 南部住宿" },
    { label: "第 4 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）→ 雷克雅維克" },
    { label: "第 5 天", detail: "雷克雅維克市區（可選）→ 機場離境" },
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
        detail: "傑古沙龍冰河湖 → 鑽石沙灘 → 南部住宿",
      },
      {
        lng: -20.5322,
        lat: 64.3271,
        label: "第 4 天",
        detail: "黃金圈 → 黃金瀑布 → 雷克雅維克",
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
      title: "入境日",
      accommodation: "雷克雅維克",
      description:
        "今天是您入境冰島的第一天。抵達後請先至租車櫃檯取車，工作人員會協助檢查車輛，並說明冰島安全駕駛須知。之後即可前往雷克雅維克精選飯店入住安頓。\n\n首都雷克雅維克值得細細走走：市中心一棟棟五彩小屋，讓這座世界最北的首都充滿童話感。不妨登上哈爾格林姆斯大教堂（Hallgrímskirkja）俯瞰市景，造訪舊港旁的哈帕音樂廳（Harpa），在彩虹街隨意逛逛，留下對冰島的初印象，然後回飯店好好休息，為接下來的旅程儲備體力。",
      highlights: icelandSelfDriveWinter5Day1Highlights,
      optionalActivities: icelandSelfDriveWinter5Day1OptionalActivities,
    },
    {
      day: 2,
      title: "冰島南岸風光",
      accommodation: "南岸",
      description:
        "今天請一早出發，沿冰島南岸一號公路南下。冬季南岸色調獨特：白雪覆蓋大地、天際染上一抹粉霞，為旅程增添溫暖氣息。\n\n首先來到塞里雅蘭瀑布（Seljalandsfoss），遠眺即可見巨大水柱自峭壁垂直落下；冬季基於安全考量，瀑布後方小徑通常封閉。接著前往斯科加瀑布（Skógafoss），晴朗時常可見彩虹。沿途亦可造訪著名的 DC-3 飛機殘骸（Solheimasandur Plane Wreck）。繼續南下則來到黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，極具冰島特色；遠處可見雷尼斯岩（Reynisdrangar）矗立海中。大西洋拍打岸邊，景色壯麗而神秘。今晚入住南岸附近飯店。",
      highlights: icelandSelfDriveWinter5Day2Highlights,
      optionalActivities: icelandSelfDriveWinter5Day2OptionalActivities,
    },
    {
      day: 3,
      title: "冰河湖風光",
      accommodation: "南部",
      description:
        "今日繼續往東南前進，來到瓦特納冰川（Vatnajökull）腳下——全歐洲最大的冰川，夢寐以求的藍冰洞（Crystal Ice Cave）便藏於其間。您將經過斯卡夫塔自然保護區（Skaftafell），進入瓦特納冰川國家公園，造訪最著名的傑古沙龍冰河湖（Jökulsárlón）；與冰河湖相鄰的鑽石沙灘（Diamond Beach）更是南岸珍寶。\n\n若時間充裕，亦可另行加購斯卡夫塔山冰川健行或藍冰洞探險，深入認識冰川的奧妙。結束後前往南部住宿。",
      highlights: icelandSelfDriveWinter5Day3Highlights,
      optionalActivities: icelandSelfDriveWinter5Day3OptionalActivities,
    },
    {
      day: 4,
      title: "黃金圈",
      accommodation: "雷克雅維克",
      description:
        "今日造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。走近黃金瀑布時，您將被巨大的水流所震撼；陽光下水珠有時散發金色光芒。在蓋錫爾間歇泉地帶，可目睹史托克間歇泉（Strokkur）每隔數分鐘噴發的熱水柱。於辛格維利爾國家公園（Þingvellir National Park）漫步時，亦可另行加購絲浮拉裂谷（Silfra）浮潛體驗。傍晚返回雷克雅維克住宿。",
      highlights: icelandSelfDriveWinter5Day4Highlights,
      optionalActivities: icelandSelfDriveWinter5Day4OptionalActivities,
    },
    {
      day: 5,
      title: "離境日",
      accommodation: "—",
      description:
        "歡樂時光總是過得特別快。今天是離境日，請預留時間前往機場辦理退稅。若班機時間較晚，可在雷克雅維克市區多留片刻：登上哈爾格林姆斯大教堂、到托寧湖（Tjörnin）與天鵝親近、在舊港品嚐人氣熱狗、到 Laugavegur 購物街逛逛精品小店。若希望延長旅程，歡迎聯絡行程策劃師協助調整。期待您下次再來冰島！",
      highlights: icelandSelfDriveWinter5Day5Highlights,
      optionalActivities: icelandSelfDriveWinter5Day5OptionalActivities,
    },
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含冰島駕駛實用資訊，以及各類景點、歷史、文化和自然等資訊描述）",
      "4 整天租車（多種車型可選，包含 CDW 碰撞險）",
      "冰島行程期間 4 晚住宿",
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
            "無論哪個季節都可能遇到各種天氣，建議攜帶：防水防風外套與長褲、防水健行鞋、透氣運動鞋、墨鏡、手套毛線帽圍巾、泳衣、羊毛衫或毛衣、羽絨衣、保濕霜與潤唇膏、手機支架，以及駕照翻譯公證文件。",
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
