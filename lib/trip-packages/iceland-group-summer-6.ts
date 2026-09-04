import type { TripPackage } from "./types";
import { skyLagoonSpot } from "./spots/sky-lagoon";
import { goldenCircleSpot } from "./spots/golden-circle";
import { kirkjufellSpot } from "./spots/kirkjufell";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
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
        skyLagoonSpot,goldenCircleSpot,reynisfjaraSpot,
    jokulsarlonSpot,
    diamondBeachSpot,
    kirkjufellSpot,],
  routeOverviewSubtitle: "黃金圈、南岸與斯奈山半島夏季跟團動線",
  routeStops: [
    { label: "第 1 天", detail: "雷克雅維克（入境、機場接送、Sky Lagoon 溫泉）" },
    { label: "第 2 天", detail: "黃金圈（辛格維利爾國家公園 → 蓋錫爾 → 黃金瀑布 → 凱瑞斯火山口）" },
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
        "今日品質小巴團沿南岸一號公路南下。夏季日照長，沿途綠意盎然。\n\n首先造訪塞里雅蘭瀑布（Seljalandsfoss）與斯科加瀑布（Skógafoss）；天候許可時可繞行至塞里雅蘭瀑布後方小徑。接著在專業嚮導帶領下進行索爾黑馬冰川（Sólheimajökull）健行，穿戴安全裝備踏上夾雜火山灰紋路的藍白冰川。（注意：冰川健行體驗僅限 10 月前，10 月開始將替換為藍冰洞體驗。）\n\n最後前往黑沙灘（Reynisfjara），沿岸玄武岩石柱層層疊疊，遠處可見雷尼斯岩（Reynisdrangar）矗立海中。夏季迪霍拉里（Dyrhólaey）常有海鸚棲息。請務必在嚮導指示的安全區域內活動，遠離洶湧海浪。今晚入住南岸附近飯店。",
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
            "[{\"tag\":\"PARAGRAPH\",\"content\":[{\"tag\":null,\"content\":[\"冰島作為旅遊業國家，所有飯店不論是首都還是郊外的雙人間或雙床間幾乎都是同樣的房型和床型。飯店為了保證入住率，大床由兩張床拼接而成，飯店櫃檯會根據預訂的要求將床鋪合併或拆分。\"]",
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
