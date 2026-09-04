import type { TripPackage } from "./types";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import { reykjavikSpot } from "./spots/reykjavik";
import {
  icelandSelfDriveSummer4Day1Highlights,
  icelandSelfDriveSummer4Day1OptionalActivities,
} from "./iceland-self-drive-summer-4-day1-cards";
import {
  icelandSelfDriveSummer4Day2Highlights,
  icelandSelfDriveSummer4Day2OptionalActivities,
  icelandSelfDriveSummer4Day3Highlights,
  icelandSelfDriveSummer4Day3OptionalActivities,
  icelandSelfDriveSummer4Day4Highlights,
  icelandSelfDriveSummer4Day4OptionalActivities,
} from "./iceland-self-drive-summer-4-days2-4-cards";

export const icelandSelfDriveSummer4: TripPackage = {
  id: "iceland-self-drive-summer-4",
  tripKey: "iceland/self-drive/summer/4",
  slug: "4-days-summer-self-drive-south-coast-express",
  tourCode: "SSD-041",
  title: "4 天 3 夜冰島南岸夏季自駕遊",
  subtitle: "冰河湖 & 黑沙灘",
  duration: { days: 4, nights: 3 },
  season: { label: "夏季", months: "4 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "自駕",
    tourCode: "SSD-041",
  },
  eyebrow: "冰島集合 · 自駕 · 夏季",
  backHref: "/trips/iceland/self-drive/summer",
  backLabel: "返回夏季自駕",
  heroImage:
    "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1920&q=80",
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
      "這個 4 天 3 夜冰島夏季南岸自駕套餐適合時間有限的旅客，在充足日照下盡覽南岸經典景點。行程充分顧及夏季路況與長日照，節奏緊湊、安排務實。",
    full: `這個 4 天 3 夜冰島夏季南岸自駕套餐適合時間有限的旅客，在充足日照下盡覽南岸經典景點。套餐充分顧及夏季日照時數與路況，行程安排合理、節奏緊湊。南岸一號公路是冰島最熱門的路線之一；夏季的塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach），在長日照與翠綠植被的襯托下，呈現與冬季截然不同的風貌。

途中您亦可另行加購戶外體驗，例如在冰川上健行、搭乘冰河湖船遊，或浸泡地熱溫泉，為旅程增添不同樂趣；同時也能靈活掌握停留時間，依自己的步調安排每一天。盛夏時分，還有機會感受午夜太陽下綿長的暮色。

完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，沿途景點、人文、歷史與自然皆有詳盡說明，讓您輕鬆盡享南岸精華。不論是在藍湖溫泉中放鬆身心，或是在黑沙灘聆聽海浪聲，都將留下獨一無二的回憶。`,
  },
  gallery: [
    {
      id: "aurora",
      url: "https://images.unsplash.com/photo-1504829857797-ddff29c27927",
      alt: "冰島夏季南岸",
      caption: "南岸夏日風光",
    },
    {
      id: "glacier-lagoon",
      url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73",
      alt: "傑古沙龍冰河湖",
      caption: "傑古沙龍冰河湖",
    },
    {
      id: "south-coast",
      url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
      alt: "冰島南岸海岸",
      caption: "南岸一號公路",
    },
    {
      id: "waterfall",
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      alt: "冰島瀑布與雪景",
      caption: "斯科加瀑布",
    },
    {
      id: "highland",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      alt: "冰島高地風光",
      caption: "瓦特納冰川國家公園",
    },
    {
      id: "mountain-lake",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      alt: "冰島山湖雪景",
      caption: "鑽石沙灘沿岸",
    },
    {
      id: "reykjavik",
      url: "https://images.unsplash.com/photo-1494783367193-149034c05e8f",
      alt: "雷克雅維克天際線",
      caption: "雷克雅維克",
    },
    {
      id: "black-beach",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
      alt: "黑沙灘與海蝕柱",
      caption: "黑沙灘",
    },
    {
      id: "iceland-horses",
      url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
      alt: "冰島馬",
      caption: "冰島馬",
    },
  ],
  highlights: [
    "全程由您掌控方向盤，自主設定行程節奏",
    "自駕探索冰島南岸夏日風光",
    "欣賞冰島南岸瀑布的神奇壯麗",
    "駐足黑沙灘，體驗異星末世感",
    "欣賞鑽石沙灘的璀璨閃耀",
    "漫步雷克雅維克，感受北歐城市風情",
  ],
  attractions: [
        seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    diamondBeachSpot,reykjavikSpot,],
  routeOverviewSubtitle: "南岸夏季自駕主要動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、取車、可選藍湖）" },
    { label: "第 2 天", detail: "南岸一號公路 → 塞里雅蘭／斯科加瀑布 → 黑沙灘 → 維克 → 教堂鎮住宿" },
    { label: "第 3 天", detail: "瓦特納冰川國家公園 → 傑古沙龍冰河湖 → 鑽石沙灘 → 返回雷克雅維克" },
    { label: "第 4 天", detail: "雷克雅維克市區（可選）→ 機場離境" },
  ],
  routeMap: {
    waypoints: [
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 1 天",
        detail: "雷克雅維克（入境、取車、可選藍湖）",
      },
      {
        lng: -18.057,
        lat: 63.794,
        label: "第 2 天",
        detail: "南岸一號公路 → 塞里雅蘭／斯科加瀑布 → 黑沙灘 → 維克 → 教堂鎮住宿",
      },
      {
        lng: -16.179,
        lat: 64.0484,
        label: "第 3 天",
        detail: "瓦特納冰川國家公園 → 傑古沙龍冰河湖 → 鑽石沙灘 → 返回雷克雅維克",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 4 天",
        detail: "雷克雅維克市區（可選）→ 機場離境",
      },
    ],
    routeLineId: "iceland-self-drive-winter-4",
  },
  itinerary: [
    {
      day: 1,
      title: "入境日",
      accommodation: "雷克雅維克",
      description:
        "今天是您入境冰島的第一天。抵達後請先至租車櫃檯取車，工作人員會協助檢查車輛，並說明冰島安全駕駛須知。之後即可前往雷克雅維克精選飯店入住安頓。\n\n若班機抵達時間較早，不妨直接駕車前往藍湖溫泉（Blue Lagoon）。天然地熱泉水呈現淡淡乳藍色，浸泡其中可緩解長途飛行的疲勞。結束後回飯店好好休息，為接下來的旅程儲備體力。",
      highlights: icelandSelfDriveSummer4Day1Highlights,
      optionalActivities: icelandSelfDriveSummer4Day1OptionalActivities,
    },
    {
      day: 2,
      title: "冰島南岸風光",
      accommodation: "南岸",
      description:
        "今天請一早出發，沿冰島南岸一號公路南下。夏季南岸草木蒼翠，日照時間長，適合從容造訪沿途景點。\n\n首先來到塞里雅蘭瀑布（Seljalandsfoss），夏季瀑布後方小徑通常開放，可繞至水簾後方欣賞景色；小徑極其濕滑，請注意腳下。接著前往斯科加瀑布（Skógafoss），晴朗時常可見彩虹，因而有「彩虹瀑布」之稱。\n\n繼續南下則來到黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，極具冰島特色；遠處可見雷尼斯岩（Reynisdrangar）矗立海中。不遠處即是南岸小鎮維克（Vík）。亦可另行加購索爾黑馬冰川健行。今晚入住教堂鎮（Kirkjubæjarklaustur）附近飯店。",
      highlights: icelandSelfDriveSummer4Day2Highlights,
      optionalActivities: icelandSelfDriveSummer4Day2OptionalActivities,
    },
    {
      day: 3,
      title: "冰河湖風光",
      accommodation: "雷克雅維克",
      description:
        "今日繼續往東南前進。踏入瓦特納冰川國家公園後，傑古沙龍冰河湖（Jökulsárlón）的壯闊景致將令人屏息——浮冰來自瓦特納冰川（Vatnajökull）的 Breiðamerkurjökull 冰舌，在夏日陽光下呈現純白至藍綠的多種色調。\n\n冰河湖以南即是鑽石沙灘（Diamond Beach）：「鑽石」其實是漂流上岸的浮冰，在黑色沙灘上晶瑩閃耀，黑白對比格外震撼。夏季冰河湖船遊開放時間最長，亦可另行加購船遊或斯卡夫塔山冰川健行。結束後返回雷克雅維克住宿。",
      highlights: icelandSelfDriveSummer4Day3Highlights,
      optionalActivities: icelandSelfDriveSummer4Day3OptionalActivities,
    },
    {
      day: 4,
      title: "離境日",
      accommodation: "—",
      description:
        "歡樂時光總是過得特別快。今天是離境日，請預留時間前往機場辦理退稅。若還有餘裕，可在雷克雅維克市區走走，參觀博物館、藝廊、咖啡館或選購紀念品，感受這座北歐首都的獨特氛圍。期待您下次再來冰島！",
      highlights: icelandSelfDriveSummer4Day4Highlights,
      optionalActivities: icelandSelfDriveSummer4Day4OptionalActivities,
    },
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含冰島駕駛實用資訊，以及各類景點、歷史、文化和自然等資訊描述）",
      "3 整天租車（多種車型可選，包含 CDW 碰撞險）",
      "冰島行程期間 3 晚住宿",
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
          question: "夏季在冰島自駕有什麼特色？",
          answer:
            "夏季日照時間長、路況相對穩定，是冰島最受歡迎的自駕季節。傑古沙龍冰河湖船遊等體驗在夏季開放時間最長，您也可以靈活安排午夜日落等夏季限定風光。",
        },
        {
          question: "在冰島自駕可以玩些什麼？",
          answer:
            "自駕讓您依自己的節奏前往喜歡的地方。可沿南岸觀賞瀑布、前往瓦特納冰川國家公園、體驗冰川健行與冰河湖船遊、參觀黃金圈、探索斯奈山半島、在藍湖溫泉放鬆、品嚐當地美食、乘船觀鯨等。",
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
      tripKey: "iceland/self-drive/summer/5",
      title: "5 天 4 夜冰島夏季精簡自駕套餐",
      tourCode: "SSD-052",
      durationLabel: "5 天／4 夜",
      description:
        "將冰島南部精華收入囊中，搭配戶外體驗，並有機會看見舞動的北極光！",
    },
    {
      tripKey: "iceland/self-drive/summer/6",
      title: "6 天 5 夜冰島夏季經典自駕遊",
      tourCode: "SSD-062",
      durationLabel: "6 天／5 夜",
      description:
        "領略冰島冬日風光，造訪經典黃金圈與南岸小眾景點，體驗冰洞探險、追逐極光。",
    },
    {
      tripKey: "iceland/self-drive/summer/7",
      title: "冰島西南岸 7 天 6 夜夏季自駕遊",
      tourCode: "SSD-072",
      durationLabel: "7 天／6 夜",
      description:
        "黃金圈、南岸與斯奈山半島盡收囊中，途中還有機會看見舞動的北極光。",
    },
    {
      tripKey: "iceland/self-drive/summer/8",
      title: "8 天 7 夜冰島夏季精選自駕",
      tourCode: "SSD-082",
      durationLabel: "8 天／7 夜",
      description:
        "沿一號公路環島，遊覽黃金圈、南岸、冰河湖、東部峽灣、米湖與西部白銀圈。",
    },
  ],
};
