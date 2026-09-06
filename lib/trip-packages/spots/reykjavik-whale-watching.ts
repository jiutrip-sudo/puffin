import { PLACE_TW } from "@/lib/i18n/iceland-place-names";
import type { TripAttraction } from "../types";
import { IMG } from "./_img";

export const reykjavikWhaleWatchingSpot: TripAttraction = {
  name: "雷克雅維克經典賞鯨",
  nameEn: "Reykjavík Whale Watching",
  region: "雷克雅維克",
  subtitle: "從舊港出海尋找鯨豚的輕鬆半日行程",
  imageUrl: IMG("_d88e089aea.jpg"),
  galleryImages: [
    IMG("_d88e089aea.jpg"),
    IMG("iceland_3851089_1280_601a5f7583.jpg"),
    IMG("todd_cravens_Qn_Brj_Y_n_F_Us_unsplash_3ab688c433.jpg"),
    IMG("_9b1504bf13.jpg"),
  ],
  paragraphs: [
    "首都最方便的賞鯨出發點",
    `${PLACE_TW.reykjavik}近海常見小鬚鯨、座頭鯨、白喙海豚與港灣鼠海豚，是無需北上胡薩維克也能安排的賞鯨選擇。集合地點多在舊港（Old Harbour），步行即可從市中心抵達。`,
    "航程約 3 小時，船上配有嚮導解說海洋生態；夏季（5–8 月）有機會看見海鸚。船班受天候與海況影響，可能改期或取消；未見鯨豚的補償政策依營運商條款為準。",
    "海上風大、溫度低，請穿防風防水外套；暈船者可事先服用暈船藥。",
  ],
};
