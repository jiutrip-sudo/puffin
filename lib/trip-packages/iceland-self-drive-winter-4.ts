import type { TripPackage } from "./types";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import { reykjavikSpot } from "./spots/reykjavik";
import {
  icelandSelfDriveWinter4Day1Highlights,
  icelandSelfDriveWinter4Day1OptionalActivities,
} from "./iceland-self-drive-winter-4-day1-cards";
import {
  icelandSelfDriveWinter4Day2Highlights,
  icelandSelfDriveWinter4Day2OptionalActivities,
  icelandSelfDriveWinter4Day3Highlights,
  icelandSelfDriveWinter4Day3OptionalActivities,
  icelandSelfDriveWinter4Day4Highlights,
  icelandSelfDriveWinter4Day4OptionalActivities,
} from "./iceland-self-drive-winter-4-days2-4-cards";

export const icelandSelfDriveWinter4: TripPackage = {
  id: "iceland-self-drive-winter-4",
  tripKey: "iceland/self-drive/winter/4",
  slug: "4-days-winter-self-drive-south-coast-express",
  tourCode: "SSD-042",
  title: "4 天 3 夜冰島南岸冬季自駕遊",
  subtitle: "冰川健行 & 鑽石沙灘",
  duration: { days: 4, nights: 3 },
  season: { label: "冬季", months: "11 月–3 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "自駕",
    tourCode: "SSD-042",
  },
  eyebrow: "冰島集合 · 自駕 · 冬季",
  backHref: "/trips/iceland/self-drive/winter",
  backLabel: "返回冬季自駕",
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
      "這個 4 天 3 夜冰島冬季南岸自駕套餐適合時間有限的旅客，濃縮塞里雅蘭瀑布、斯科加瀑布、黑沙灘、冰河湖與鑽石沙灘等冬日精華，並有機會追尋北極光。行程充分顧及冬季日照短與路況，節奏緊湊、安排務實。",
    full: `這個 4 天 3 夜冰島冬季南岸自駕套餐適合時間有限的旅客，在有限的日照時數內盡覽南岸經典風光。套餐充分顧及冬季路況與天黑較早的特性，行程安排合理、節奏緊湊。南岸一號公路串聯塞里雅蘭瀑布（Seljalandsfoss）、斯科加瀑布（Skógafoss）、黑沙灘（Reynisfjara）、傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）；白雪覆蓋的瀑布與海岸線，呈現與夏季截然不同的冬日風貌。

途中亦可另行加購藍湖溫泉、斯卡夫塔山冰川健行或藍冰洞探險等體驗，並可靈活掌握停留時間，依自己的步調安排每一天。天候許可時，南岸遠離光源處有機會看見北極光。

完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，沿途景點、人文、歷史與自然皆有詳盡說明，讓您輕鬆盡享南岸冬日精華。`,
  },
  gallery: [
    {
      id: "aurora",
      url: "https://images.unsplash.com/photo-1504829857797-ddff29c27927",
      alt: "冰島冬季極光",
      caption: "冬季極光",
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
    "自駕探索冰島南岸冬日奇景",
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
        "今天是您入境冰島的第一天。抵達後請先至租車櫃檯取車，工作人員會協助檢查車輛，並說明冰島安全駕駛須知。之後即可前往雷克雅維克精選飯店入住安頓。\n\n若班機抵達時間較早，不妨直接駕車前往藍湖溫泉（Blue Lagoon）。天然地熱泉水呈現淡淡乳藍色，質地如絲般滑順；敷上矽泥面膜、浸泡在溫泉中，四周黑色火山岩覆著白雪，別有一番冬日風情。結束後回飯店好好休息，為接下來的旅程儲備體力。",
      highlights: icelandSelfDriveWinter4Day1Highlights,
      optionalActivities: icelandSelfDriveWinter4Day1OptionalActivities,
    },
    {
      day: 2,
      title: "冰島南岸風光",
      accommodation: "南岸",
      description:
        "今天請一早出發，沿冰島南岸一號公路南下。冬季南岸色調獨特：白雪覆蓋大地、天際染上一抹粉霞，為旅程增添溫暖氣息。\n\n首先來到塞里雅蘭瀑布（Seljalandsfoss），雖水量不大，卻能以瀑布後方步道穿梭而聞名；冬季基於安全考量，後方小徑通常封閉。接著前往斯科加瀑布（Skógafoss），晴朗時常可見彩虹，因而有「彩虹瀑布」之稱；美劇《權力遊戲》第八季亦在此取景。\n\n繼續南下則來到著名的黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，極具冰島特色；遠處可見雷尼斯岩（Reynisdrangar）矗立海中，當地流傳著許多精靈與巨人的傳說。不遠處即是南岸小鎮維克（Vík）。今晚入住教堂鎮（Kirkjubæjarklaustur）附近飯店，雪山與大海環抱；若天候許可，可遠離光源，有機會看見極光。",
      highlights: icelandSelfDriveWinter4Day2Highlights,
      optionalActivities: icelandSelfDriveWinter4Day2OptionalActivities,
    },
    {
      day: 3,
      title: "冰河湖風光",
      accommodation: "雷克雅維克",
      description:
        "今日繼續往東南前進。踏入瓦特納冰川國家公園後，傑古沙龍冰河湖（Jökulsárlón）的壯闊景致將令人屏息——浮冰來自瓦特納冰川（Vatnajökull）的 Breiðamerkurjökull 冰舌，景致日日不同，靜謐中彷彿能聽見海鳥振翅的聲響。\n\n冰河湖以南即是鑽石沙灘（Diamond Beach）：「鑽石」其實是漂流上岸的浮冰，小至數公斤、大至數公噸，在黑色沙灘上晶瑩閃耀，黑白對比格外震撼。您亦可另行加購斯卡夫塔山冰川健行或藍冰洞探險，深入認識冰川的奧妙。結束後返回雷克雅維克住宿。",
      highlights: icelandSelfDriveWinter4Day3Highlights,
      optionalActivities: icelandSelfDriveWinter4Day3OptionalActivities,
    },
    {
      day: 4,
      title: "離境日",
      accommodation: "—",
      description:
        "歡樂時光總是過得特別快。今天是離境日，請預留時間前往機場辦理退稅。若還有餘裕，可在雷克雅維克市區走走，參觀博物館、藝廊、咖啡館或選購紀念品，感受這座北歐首都的獨特氛圍。期待您下次再來冰島！",
      highlights: icelandSelfDriveWinter4Day4Highlights,
      optionalActivities: icelandSelfDriveWinter4Day4OptionalActivities,
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
      tripKey: "iceland/self-drive/winter/5",
      title: "5 天 4 夜冰島冬季精簡自駕套餐",
      tourCode: "SSD-052",
      durationLabel: "5 天／4 夜",
      description:
        "將冰島南部精華收入囊中，搭配戶外體驗，並有機會看見舞動的北極光！",
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
