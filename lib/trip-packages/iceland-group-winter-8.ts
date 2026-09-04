import type { TripPackage } from "./types";
import { myvatnGeothermalSpot } from "./spots/myvatn-geothermal";
import { egilsstadirSpot } from "./spots/egilsstadir";
import { akureyriSpot } from "./spots/akureyri";
import { myvatnSpot } from "./spots/myvatn";
import { godafossSpot } from "./spots/godafoss";
import { gullfossSpot } from "./spots/gullfoss";
import { geysirSpot } from "./spots/geysir";
import { thingvellirSpot } from "./spots/thingvellir";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
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
        thingvellirSpot,
    geysirSpot,
    gullfossSpot,seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
    jokulsarlonSpot,
    diamondBeachSpot,
    egilsstadirSpot,myvatnSpot,
    myvatnGeothermalSpot,godafossSpot,
    akureyriSpot,],
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
        "今日沿南岸一號公路南下，造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；冬季基於安全考量，塞里雅蘭瀑布後方小徑通常封閉。\n\n下午參加索爾黑馬冰川（Sólheimajökull）健行，專業嚮導將提供安全裝備並講解冰川知識。繼續南下至黑沙灘（Reynisfjara），遠眺雷尼斯岩（Reynisdrangar）矗立海中。請務必遵守安全警示，遠離海浪。今晚繼續入住南岸。",
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
        "今天是離境日。請依預訂時間搭乘機場巴士前往凱夫拉維克國際機場。\n\n若班機時間較晚，可在雷克雅維克市區多留片刻，造訪哈爾格林姆斯大教堂、托寧湖（Tjörnin）等景點。",
      highlights: icelandGroupWinter8Day8Highlights,
      optionalActivities: icelandGroupWinter8Day8OptionalActivities,
    }
  ],
  inclusions: {
    included: [
      "專業行程策劃師為您獨家客製的中文行程手冊（包含各類景點、歷史、文化、自然等資訊描述）",
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
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"帕芬假期旅行的旅行團套餐是我們最熱門的產品。在旅行團套餐中，我們將為您提供路線合理、景點全面的觀光套餐，均包含機場往返首都接送、首都參團接送、冰島本地優選供應商的一日遊與多日遊（含司機兼嚮導）、住宿（含早餐）、獨家客製的中文行程手冊（含各類景點、歷史、文化、自然等資訊描述）、台灣冰島雙時區的中文客服等服務，並提供行程客製服務。\"]",
        },
        {
          question: "預訂後多久能收到相關的參團資料？",
          answer:
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"在您付完訂金後的5-7個工作日內（且在參團前），我們會提供行程相關的訂單資訊清單（包含預訂飯店資訊等）及簽證輔助材料；在付完全款並提供航班資訊等所有有效資訊後的5-7個工作日內（且在參團前），我們會提供完整的行程手冊等。行程手冊包含中文行程單、接送地址、各類景點、歷史、文化、自然等資訊描述。\"]",
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
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"因為冰島的單人間房價要高於雙人間房價的一半，而預訂時的預設房價是按雙人間均攤至每人的價格來計算的。因此套餐內的單人間需要補交一筆差價。由於旅行團套餐系統設定在預訂環節僅可以選首都雷克雅維克地區的房間數量，如果需要將套餐中包含的旅行團增加單人間，那麼需要在初始頁面選中1人來查看全程單人間價格，具體細節可諮詢客服。\"]",
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
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島作為旅遊業國家，所有飯店不論是首都還是郊外的雙人間或雙床間幾乎都是同樣的房型和床型。飯店為了保證入住率，大床由兩張床拼接而成，飯店櫃檯會根據預訂的要求將床鋪合併或拆分。\"]",
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
