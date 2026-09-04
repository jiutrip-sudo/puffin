import type { TripPackage } from "./types";
import { borgarnesSpot } from "./spots/borgarnes";
import { dettifossSpot } from "./spots/dettifoss";
import { husavikSpot } from "./spots/husavik";
import { egilsstadirSpot } from "./spots/egilsstadir";
import { akureyriSpot } from "./spots/akureyri";
import { myvatnSpot } from "./spots/myvatn";
import { godafossSpot } from "./spots/godafoss";
import { geysirSpot } from "./spots/geysir";
import { thingvellirSpot } from "./spots/thingvellir";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import { reykjavikSpot } from "./spots/reykjavik";
import {
  icelandSelfDriveSummer9Day1Highlights,
  icelandSelfDriveSummer9Day1OptionalActivities,
} from "./iceland-self-drive-summer-9-day1-cards";
import {
  icelandSelfDriveSummer9Day2Highlights,
  icelandSelfDriveSummer9Day2OptionalActivities,
  icelandSelfDriveSummer9Day3Highlights,
  icelandSelfDriveSummer9Day3OptionalActivities,
  icelandSelfDriveSummer9Day4Highlights,
  icelandSelfDriveSummer9Day4OptionalActivities,
  icelandSelfDriveSummer9Day5Highlights,
  icelandSelfDriveSummer9Day5OptionalActivities,
  icelandSelfDriveSummer9Day6Highlights,
  icelandSelfDriveSummer9Day6OptionalActivities,
  icelandSelfDriveSummer9Day7Highlights,
  icelandSelfDriveSummer9Day7OptionalActivities,
  icelandSelfDriveSummer9Day8Highlights,
  icelandSelfDriveSummer9Day8OptionalActivities,
  icelandSelfDriveSummer9Day9Highlights,
  icelandSelfDriveSummer9Day9OptionalActivities,
} from "./iceland-self-drive-summer-9-days2-9-cards";

export const icelandSelfDriveSummer9: TripPackage = {
  id: "iceland-self-drive-summer-9",
  tripKey: "iceland/self-drive/summer/9",
  slug: "self-drive-around-iceland-in-summer-for-9-days",
  tourCode: "SSD-091",
  title: "9 天 8 夜冰島夏季環島自駕",
  subtitle: "鑽石沙灘 & 黃金圈",
  duration: { days: 9, nights: 8 },
  season: { label: "夏季", months: "4 月–10 月" },
  meta: {
    departure: "雷克雅維克",
    transport: "自駕",
    tourCode: "SSD-091",
  },
  eyebrow: "冰島集合 · 自駕 · 夏季",
  backHref: "/trips/iceland/self-drive/summer",
  backLabel: "返回夏季自駕",
  heroImage: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1920,q_auto:good/Stykkisholmur_0dd037c4f6.jpg",
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
      "這個 9 天 8 夜冰島夏季一號公路深度環島自駕，沿著冰島最著名的環島公路，盡覽黃金圈、南岸、東部峽灣、米湖、眾神瀑布、阿克雷里與西部風光等夏日精華。夏季日照充裕，可充分把握長白晝與午夜陽光下的風景。行程節奏適中、安排務實。",
    full: `這個 9 天 8 夜冰島夏季一號公路深度環島自駕，沿著冰島最著名的環島公路，盡覽黃金圈、南岸、東部峽灣、米湖、眾神瀑布、阿克雷里與西部風光等夏日精華。夏季日照時數長，可從容安排景點停留，並在午夜陽光下感受冰島獨特天色。

您將造訪黃金圈三大景點——辛格維利爾國家公園（Þingvellir National Park）、蓋錫爾間歇泉地帶（Geysir）與黃金瀑布（Gullfoss）；沿南岸探索壯麗瀑布、冰川與黑沙灘（Reynisfjara），亦可另行加購冰川健行或冰河湖水陸兩棲船遊。

往東則穿越寧靜的東部峽灣海岸；北上探索黛提瀑布（Dettifoss）與東北部風光，並造訪米湖（Lake Mývatn）地區的火山地質奇景，以及眾神瀑布（Goðafoss）與「北方之都」阿克雷里（Akureyri）。回程則遊覽西部熔岩瀑布等風光，為環島旅程劃下句點。

途中亦可另行加購觀鯨、溫泉體驗或絲浮拉裂谷（Silfra）浮潛等夏季活動。完成預訂後，您將收到行程策劃師為您客製的中文行程手冊，讓您輕鬆盡享冰島環島精華。`,
  },
  gallery: [
    {
      id: "Stykkisholmur_0dd037c4f6",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/Stykkisholmur_0dd037c4f6.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "dettifoss_02b97e641b",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/dettifoss_02b97e641b.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    },
    {
      id: "jorge_fernandez_salas_WY",
      url: "https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_1200,q_auto:good/jorge_fernandez_salas_WY_15vil_CK_Dg_unsplash_06deb87863.jpg",
      alt: "冰島夏季自駕",
      caption: "冰島夏季風光",
    }
  ],
  highlights: [
    "全程由您掌控方向盤並設定自己的旅行節奏",
    "自駕深度體驗冰島環島路線1號公路",
    "造訪冰島熱門黃金圈路線景點",
    "探索冰島南岸瀑布和黑沙灘的神奇壯麗",
    "船遊傑古沙龍冰河湖，欣賞鑽石沙灘之美",
    "感受冰島迷人的東部峽灣風光",
    "見證《普羅米修斯》取景地黛提瀑布",
    "探索冰島北部米湖地區美景",
    "途徑北部之都阿克雷里，探訪鯨魚小鎮胡薩維克",
    "尋覓獨特的冰島西部白銀圈風光",
  ],
  attractions: [
        reykjavikSpot,
    thingvellirSpot,
    geysirSpot,seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    diamondBeachSpot,
    egilsstadirSpot,
    dettifossSpot,myvatnSpot,
    husavikSpot,godafossSpot,
    akureyriSpot,
    borgarnesSpot,],
  routeOverviewSubtitle: "一號公路環島夏季自駕動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、取車、可選 Sky Lagoon）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布）→ 南岸" },
    { label: "第 3 天", detail: "南岸瀑布群 → 黑沙灘 → 維克 → 南岸住宿" },
    { label: "第 4 天", detail: "瓦特納冰川 → 傑古沙龍冰河湖 → 鑽石沙灘" },
    { label: "第 5 天", detail: "東部峽灣海岸公路 → 埃伊爾斯塔濟" },
    { label: "第 6 天", detail: "黛提瀑布 → 東北部風光 → 北部方向" },
    { label: "第 7 天", detail: "米湖地熱區及周邊（胡薩維克可選）→ 北部住宿" },
    { label: "第 8 天", detail: "眾神瀑布 → 阿克雷里 → 西部白銀圈 → 雷克雅維克" },
    { label: "第 9 天", detail: "雷克雅維克市區（可選）→ 機場離境" }
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
        lng: -20.5322,
        lat: 64.3271,
        label: "第 2 天",
        detail: "黃金圈 → 南岸",
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
        lng: -14.4,
        lat: 65.26,
        label: "第 5 天",
        detail: "東部峽灣",
      },
      {
        lng: -16.2,
        lat: 65.82,
        label: "第 6 天",
        detail: "黛提瀑布 → 東北部",
      },
      {
        lng: -17.0,
        lat: 65.6,
        label: "第 7 天",
        detail: "米湖地熱區",
      },
      {
        lng: -17.55,
        lat: 65.68,
        label: "第 8 天",
        detail: "眾神瀑布 → 阿克雷里 → 西部",
      },
      {
        lng: -21.9426,
        lat: 64.1466,
        label: "第 9 天",
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
        "今天是您入境冰島的第一天。抵達後請先至租車櫃檯取車，工作人員會協助檢查車輛，並說明冰島夏季環島安全駕駛須知。之後即可前往雷克雅維克精選飯店入住安頓。\n\n若時間充裕，可另行加購藍湖溫泉或 Sky Lagoon 天空之境溫泉放鬆身心，為接下來的環島自駕儲備體力。",
      highlights: icelandSelfDriveSummer9Day1Highlights,
      optionalActivities: icelandSelfDriveSummer9Day1OptionalActivities,
    },
    {
      day: 2,
      title: "黃金圈之旅",
      accommodation: "黃金圈地區",
      description:
        "今日造訪冰島最著名的黃金圈路線，依序遊覽辛格維利爾國家公園、蓋錫爾間歇泉地帶與黃金瀑布（Gullfoss）三大景點。於辛格維利爾國家公園漫步時，亦可另行加購絲浮拉裂谷（Silfra）浮潛或溫泉體驗。結束後繼續南下，今晚入住南岸。",
      highlights: icelandSelfDriveSummer9Day2Highlights,
      optionalActivities: icelandSelfDriveSummer9Day2OptionalActivities,
    },
    {
      day: 3,
      title: "南岸絕贊風光",
      accommodation: "南岸地區",
      description:
        "今天請一早出發，沿冰島南岸一號公路南下。夏季南岸綠意盎然，瀑布與海岸在長白晝下格外清晰。\n\n造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；夏季可繞行塞里雅蘭瀑布後方小徑。繼續南下造訪黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中；沿途亦可安排 DC-3 飛機殘骸，或另行加購冰川健行等戶外體驗。今晚繼續入住南岸。",
      highlights: icelandSelfDriveSummer9Day3Highlights,
      optionalActivities: icelandSelfDriveSummer9Day3OptionalActivities,
    },
    {
      day: 4,
      title: "冰河湖風光",
      accommodation: "東南部地區",
      description:
        "今日繼續往東南前進，進入瓦特納冰川國家公園，造訪傑古沙龍冰河湖（Jökulsárlón）與鑽石沙灘（Diamond Beach）。夏季陽光下，浮冰在黑色沙灘上晶瑩閃耀，黑白對比格外震撼，海豹偶爾在冰塊上休憩。\n\n若時間充裕，亦可另行加購冰河湖水陸兩棲船遊或斯卡夫塔山冰川健行。今晚入住東南部。",
      highlights: icelandSelfDriveSummer9Day4Highlights,
      optionalActivities: icelandSelfDriveSummer9Day4OptionalActivities,
    },
    {
      day: 5,
      title: "東部峽灣風光",
      accommodation: "東部峽灣",
      description:
        "今日沿東部峽灣海岸公路北上，穿越幽靜峽灣與漁村，感受冰島東部壯闊而寧靜的夏日海岸風光。夏季東部常有馴鹿出沒，海鳥亦於沿岸崖壁築巢；亦可另行加購 Vök Baths 湖上溫泉體驗。今晚入住東部。",
      highlights: icelandSelfDriveSummer9Day5Highlights,
      optionalActivities: icelandSelfDriveSummer9Day5OptionalActivities,
    },
    {
      day: 6,
      title: "東北部風光",
      accommodation: "米湖周邊",
      description:
        "今日繼續北上，探索冰島東北部風光。可造訪 Stuðlagil 峽谷的玄武岩石柱，以及歐洲水流量最大的黛提瀑布（Dettifoss）。夏季長白晝下，峽谷河水與瀑布水霧色彩鮮明。\n\n途經胡薩維克（Húsavík）時，亦可另行加購觀鯨體驗；夏季海鳥於周邊海島繁殖，是觀鳥的佳季。今晚入住米湖周邊。",
      highlights: icelandSelfDriveSummer9Day6Highlights,
      optionalActivities: icelandSelfDriveSummer9Day6OptionalActivities,
    },
    {
      day: 7,
      title: "米湖熱能區及周邊",
      accommodation: "北部",
      description:
        "今日深入米湖（Lake Mývatn）地區，探索偽火山、熔岩地貌與地熱奇景等獨特火山地質景觀。夏季米湖鳥類豐富，是北半球少見的多種鴨類築巢地；亦可造訪眾神瀑布（Goðafoss）與阿克雷里（Akureyri），感受北部夏日風情。亦可另行加購米湖溫泉體驗。今晚入住北部。",
      highlights: icelandSelfDriveSummer9Day7Highlights,
      optionalActivities: icelandSelfDriveSummer9Day7OptionalActivities,
    },
    {
      day: 8,
      title: "西部風光",
      accommodation: "雷克雅維克",
      description:
        "今日開始返回首都，沿途遊覽西部風光：博爾加峽灣（Borgarfjörður）沿線的熔岩瀑布（Hraunfossar）、兒童瀑布（Barnafoss）等西部特色景觀；亦可造訪德爾達圖赫菲溫泉（Deildartunguhver）或另行加購 Krauma 溫泉體驗。傍晚回到雷克雅維克住宿。",
      highlights: icelandSelfDriveSummer9Day8Highlights,
      optionalActivities: icelandSelfDriveSummer9Day8OptionalActivities,
    },
    {
      day: 9,
      title: "離境日",
      accommodation: "—",
      description:
        "今天是離境日，請預留時間前往凱夫拉維克國際機場辦理還車與退稅。若班機時間較晚，可在雷克雅維克市區多留片刻；亦可另行加購藍湖溫泉，為旅程收尾。",
      highlights: icelandSelfDriveSummer9Day9Highlights,
      optionalActivities: icelandSelfDriveSummer9Day9OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含冰島駕駛實用資訊，以及各類景點、歷史、文化和自然等資訊描述）",
      "8整天租車（多種車型可選，包含CDW碰撞險）",
      "冰島行程期間8晚住宿",
      "每日住宿提供早餐",
      "簽證輔助行程單材料提供",
      "台灣冰島雙時區服務",
      "VAT增值稅",
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
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在帕芬假期旅行租車，SUV、越野車、商務旅行等車型的最低年齡限制為\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"23\"]",
        },
        {
          question: "在冰島租車需要什麼證件？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"通過帕芬假期旅行租車，在取車時需要駕駛員攜帶以下3種證件：\"]",
        },
        {
          question: "租車包含什麼保險？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"我們提供的租車服務均包含基本責任保險和防撞險。需要注意的是，防撞險有一個自付額（免賠額），在發生事故時需要您來支付。這一金額因租車類型和供應商而異。在取車時，你也可以選擇支付額外的費用以降低自付額。\"]",
        },
        {
          question: "在冰島自駕租車保險主要包括哪幾種？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島租車保險主要包括如下：\"]",
        }
      ],
    },
    {
      id: "insurance",
      title: "保險相關",
      items: [
        {
          question: "為什麼必須通過冰島本地車行購買保險？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這樣做的目的是避開第三方平台“全險”陷阱，保障您的權益。\"]",
        },
        {
          question: "為什麼說來冰島自駕建議您買全險或零賠付保險套餐？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島自駕是探索壯麗景觀的最佳方式，但獨特的路況和氣候也潛藏風險。冰島地理環境、天氣路況特殊，遇到大風或者暴風雪、沙塵暴等極端不可抗天氣。為避免高價賠付，強烈建議您升級全險套餐（或稱零賠付保險），最大程度消除您的後顧之憂，讓旅程專注享受而非擔憂賠償。\"]",
        },
        {
          question: "冰島自駕過程中什麼情況即便您購買全險也不賠付？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島自駕租車雖說全險和0賠付保險基本涵蓋所有保險類型，但以下情況任何保險均不覆蓋，租車人需承擔全額維修及罰金（主要為主觀故意或重大過失造成的損失）\"]",
        }
      ],
    },
    {
      id: "trip",
      title: "行程與自駕",
      items: [
        {
          question: "冰島環島總共需要多少天？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在冰島的自駕遊時長需要根據您想參觀的景點以及其他的具體因素來進行調整。實際上，繞著 1 號環島公路駕駛一圈只需要 2 天時間，但這樣的話，您就完全得不到遊玩的體驗感了。\"]",
        },
        {
          question: "冰島哪個季節最適合自駕遊？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"夏季是冰島最受歡迎的自駕遊季節。6月到8月的天氣最好，日照時間最長，陽光最為充足，這意味著您每天可以有更多的時間來遊玩，開車也會更加安心。另外，有些景區會在夏季開放更多的體驗遊玩項目，例如傑古沙龍冰河湖的船遊服務在夏季的開放時間最長，且在11月中旬至次年五月期間暫停運營。\"]",
        },
        {
          question: "在冰島自駕可以玩些什麼？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"自駕讓您可以靈活地按照自己的節奏，在合適的時間前往自己喜歡的地方。超高的靈活度代表著超高的可能性，百分百親身體驗和經歷在這個國度的美妙旅程。\"]",
        },
        {
          question: "去冰島自駕需要準備什麼行李？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"無論您在哪個季節前往冰島，都可能會遇到各種天氣情況。有鑑於此，參加冰島自駕套餐時，您最好確保帶上能夠適應不同天氣所需的衣物：\"]",
        },
        {
          question: "冰島值得去嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"這個問題可能不同的人有不同的答案。但是作為一個專注於冰島旅行的團隊，以及作為一群熱愛自然、熱愛美好的個體來說：\"]},{\"tag\":\"STRONG\",\"content\":[{\"tag\":null,\"content\":[\"是的！冰島太值得了！\"]",
        },
        {
          question: "我可以自由安排旅行時間嗎？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行提供各類出行方式。對於任意旅行方式，您都可以自由選擇適合您的開始日期。\"]",
        },
        {
          question: "套餐單人間為什麼需要補差價？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為冰島的單人間房價要高於雙人間房價的一半，而預訂時的預設房價是按雙人間均攤至每人的價格來計算的。因此套餐內的單人間需要補交一筆差價。由於旅行團套餐系統設定在預訂環節僅可以選首都雷克雅維克地區的房間數量，如果需要將套餐中包含的旅行團增加單人間，那麼需要在初始頁面選中1人來查看全程單人間價格，具體細節可諮詢客服。\"]",
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
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島作為旅遊業國家，所有飯店不論是首都還是郊外的雙人間或雙床間幾乎都是同樣的房型和床型。飯店為了保證入住率，大床由兩張床拼接而成，飯店櫃檯會根據預訂的要求將床鋪合併或拆分。\"]",
        }
      ],
    }
  ],
  similarTrips: [
    {
      tripKey: "iceland/self-drive/summer/6",
      title: "6 天 5 夜冰島夏季精選自駕遊",
      tourCode: "SSD-061",
      durationLabel: "6 天／5 夜",
      description:
        "南岸、冰河湖與黃金圈，並造訪斯奈山半島精華景點。",
    },
    {
      tripKey: "iceland/self-drive/summer/7",
      title: "7 天 6 夜冰島夏季暢享自駕遊",
      tourCode: "SSD-071",
      durationLabel: "7 天／6 夜",
      description:
        "黃金圈、南岸與斯奈山半島盡收囊中，更從容探索冰島西南部。",
    },
    {
      tripKey: "iceland/self-drive/summer/8",
      title: "8 天 7 夜冰島夏季環島自駕",
      tourCode: "SSD-081",
      durationLabel: "8 天／7 夜",
      description:
        "夏季版一號公路環島，涵蓋黃金圈、南岸、冰河湖、東部峽灣、米湖與西部白銀圈。",
    },
    {
      tripKey: "iceland/self-drive/summer/10",
      title: "10 天 9 夜冰島夏季環島自駕",
      tourCode: "SSD-102",
      durationLabel: "10 天／9 夜",
      description:
        "更充裕的夏季環島天數，深度探索冰島全島精華。",
    },
  ],
};
