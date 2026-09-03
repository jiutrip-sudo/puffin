import type { PricingConfig } from "./types";

const SLM_IMAGE = (file: string, width = 1200) =>
  `https://www.senlinmao.com/images/g_auto,f_auto,c_fill,w_${width},q_auto:good/${file}`;

const CORIVO_INSTANCE_ID =
  process.env.CORIVO_CLIENT_ID ?? "ae034790-70dd-4df5-93a0-957be2883176";

export const icelandGroupWinter9NonRingPricing: PricingConfig = {
  packageId: "iceland-group-winter-9-non-ring",
  currency: "ISK",
  depositRate: 0.2,
  occupancyBase: 2,
  minAdults: 1,
  maxTravelers: 9,
  maxInfants: 2,
  bookingDateRange: { min: "2026-11-01", max: "2027-04-10" },
  tripDurationDays: 9,
  accommodationIntro:
    "在帕芬假期的跟團套餐中，僅雷克雅維克地區住宿可選等級（經濟型、舒適型、品質型），各等級均含免費 WiFi 及每日早餐，其中經濟型為公共衛浴。",
  ageBands: {
    childMultiplier: 0.75,
    infantMultiplier: 0,
  },
  corivo: {
    instanceId: CORIVO_INSTANCE_ID,
    packageTourId: 88606,
    classifications: {
      budget: 9,
      comfort: 1,
      quality: 8,
    },
  },
  tiers: [
    {
      id: "budget",
      label: "經濟型",
      description: "民宿或同等級住宿標準（公共衛浴）",
      perPersonDouble: 0,
      singleSupplementPerNight: 0,
      nights: 8,
      imageUrl: SLM_IMAGE("guesthouse5_fb5c982add.jpg"),
      modalTitle: "關於經濟型房型",
      paragraphs: [
        "民宿或同等級住宿標準，僅含基礎的房間設施，包含公共衛浴，免費 WiFi，每日早餐。如果您的預算有限，經濟型將是一個不錯的選擇。",
        "注意：跟團套餐僅可選擇雷克雅維克地區的住宿等級。",
        "經濟型示例飯店：Guesthouse Aurora、Snorri Guesthouse、Skjaldarvík Guesthouse 等。",
      ],
      galleryImages: [
        SLM_IMAGE("_bf970f5aa3.png"),
        SLM_IMAGE("guesthouse6_2846348eba.jpg"),
        SLM_IMAGE("guesthouse1_86f555c0df.jpg"),
        SLM_IMAGE("guesthouse3_48d49f3f9a.jpg"),
        SLM_IMAGE("guesthouse4_d120be780e.jpg"),
        SLM_IMAGE("guesthouse2_4d91b851fb.jpg"),
      ],
    },
    {
      id: "comfort",
      label: "舒適型",
      description: "三星或同等級住宿標準（私人衛浴）",
      perPersonDouble: 0,
      singleSupplementPerNight: 0,
      nights: 8,
      imageUrl: SLM_IMAGE("hotelvarmaland1_66062887a3.jpg"),
      modalTitle: "關於舒適型房型",
      paragraphs: [
        "套餐內預設的住宿類型。三星級飯店或同等住宿標準，完善的飯店設施，包含獨立衛浴，免費 WiFi，每日早餐。舒適型住宿能夠滿足大多數旅客的住宿標準和需求，是我們推薦的住宿等級。",
        "注意：跟團套餐僅可選擇雷克雅維克地區的住宿等級。",
        "舒適型示例飯店：Hótel Klettur、Fosshótel Lind、Skuggi Hótel、Reykjavík Lights 等。",
      ],
      galleryImages: [
        SLM_IMAGE("lights1_99b9eac460.webp"),
        SLM_IMAGE("lights3_7699e613c2.webp"),
        SLM_IMAGE("hotelvarmaland4_8a9652a9b7.jpg"),
        SLM_IMAGE("fosshotel_baron_breakfast_room_2_0fea55b8be.webp"),
        SLM_IMAGE("hotelvarmaland2_3bcf4be056.jpg"),
        SLM_IMAGE("lights2_e40bf4f0bb.webp"),
      ],
    },
    {
      id: "quality",
      label: "品質型",
      description: "四星或同等級輕奢型住宿（私人衛浴）",
      perPersonDouble: 0,
      singleSupplementPerNight: 0,
      nights: 8,
      imageUrl: SLM_IMAGE("sand_hotel_86aa7b195d.webp"),
      modalTitle: "關於品質型房型",
      paragraphs: [
        "四星級飯店或該地區特色精品飯店：完善的飯店設施，包含獨立衛浴，免費 WiFi，早餐。品質型住宿適合預算充足、對住宿有較高要求的旅客。",
        "注意：跟團套餐僅可選擇雷克雅維克地區的住宿等級。",
        "品質型示例飯店：Alda Hótel、Fosshótel Reykjavík、Reykjavík Marina、Hótel Óðinsvé 等。",
      ],
      galleryImages: [
        SLM_IMAGE("skuggi_1_f16c0bb950.webp"),
        SLM_IMAGE("sand3_0adf8b1446.webp"),
        SLM_IMAGE("skuggi_2_3b94f9f39f.webp"),
        SLM_IMAGE("sand_4c6d84ccd9.webp"),
      ],
    },
  ],
  vehicleTiers: [],
};
