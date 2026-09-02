import { akureyriSpot } from "./akureyri";
import { diamondBeachSpot } from "./diamond-beach";
import { geysirSpot } from "./geysir";
import { godafossSpot } from "./godafoss";
import { gullfossSpot } from "./gullfoss";
import { hallgrimskirkjaSpot } from "./hallgrimskirkja";
import { harpaSpot } from "./harpa";
import { jokulsarlonSpot } from "./jokulsarlon";
import { kirkjufellSpot } from "./kirkjufell";
import { laugavegurSpot } from "./laugavegur";
import { myvatnSpot } from "./myvatn";
import { phallologicalMuseumSpot } from "./phallological-museum";
import { reynisdrangarSpot } from "./reynisdrangar";
import { reynisfjaraSpot } from "./reynisfjara";
import { reykjavikSpot } from "./reykjavik";
import { seljalandsfossSpot } from "./seljalandsfoss";
import { skogafossSpot } from "./skogafoss";
import { sunVoyagerSpot } from "./sun-voyager";
import { thingvellirSpot } from "./thingvellir";

/** 高頻冰島景點卡片單一來源 */
export const SPOTS = {
  reykjavik: reykjavikSpot,
  hallgrimskirkja: hallgrimskirkjaSpot,
  sunVoyager: sunVoyagerSpot,
  harpa: harpaSpot,
  phallologicalMuseum: phallologicalMuseumSpot,
  laugavegur: laugavegurSpot,
  thingvellir: thingvellirSpot,
  geysir: geysirSpot,
  gullfoss: gullfossSpot,
  seljalandsfoss: seljalandsfossSpot,
  skogafoss: skogafossSpot,
  reynisfjara: reynisfjaraSpot,
  reynisdrangar: reynisdrangarSpot,
  jokulsarlon: jokulsarlonSpot,
  diamondBeach: diamondBeachSpot,
  godafoss: godafossSpot,
  kirkjufell: kirkjufellSpot,
  akureyri: akureyriSpot,
  myvatn: myvatnSpot,
} as const;

export type SpotId = keyof typeof SPOTS;
