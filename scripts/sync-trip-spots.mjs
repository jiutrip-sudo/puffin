#!/usr/bin/env node
/**
 * 將各檔案中重複的景點物件，改為引用 lib/trip-packages/spots/ 單一來源。
 *
 *   node scripts/sync-trip-spots.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PACKAGES_DIR = path.join(ROOT, "lib/trip-packages");

const SPOT_CONFIGS = [
  {
    marker: /name: "塞里雅蘭瀑布",\s*nameEn: "Seljalandsfoss",/,
    importLine: 'import { seljalandsfossSpot } from "./spots/seljalandsfoss";',
    replacement: "seljalandsfossSpot",
    exclude: "spots/seljalandsfoss.ts",
  },
  {
    marker: /name: "斯科加瀑布",\s*nameEn: "Skógafoss",/,
    importLine: 'import { skogafossSpot } from "./spots/skogafoss";',
    replacement: "skogafossSpot",
    exclude: "spots/skogafoss.ts",
  },
  {
    marker: /name: "黑沙灘",\s*nameEn: "Reynisfjara Black Sand Beach",/,
    importLine: 'import { reynisfjaraSpot } from "./spots/reynisfjara";',
    replacement: "reynisfjaraSpot",
    exclude: "spots/reynisfjara.ts",
  },
  {
    marker: /name: "雷尼斯岩",\s*nameEn: "Reynisdrangar",/,
    importLine: 'import { reynisdrangarSpot } from "./spots/reynisdrangar";',
    replacement: "reynisdrangarSpot",
    exclude: "spots/reynisdrangar.ts",
  },
  {
    marker: /name: "傑古沙龍冰河湖",\s*nameEn: "Jökulsárlón",/,
    importLine: 'import { jokulsarlonSpot } from "./spots/jokulsarlon";',
    replacement: "jokulsarlonSpot",
    exclude: "spots/jokulsarlon.ts",
  },
  {
    marker: /name: "鑽石沙灘",\s*nameEn: "The Diamond Beach",/,
    importLine: 'import { diamondBeachSpot } from "./spots/diamond-beach";',
    replacement: "diamondBeachSpot",
    exclude: "spots/diamond-beach.ts",
  },
  {
    marker: /name: "辛格維利爾國家公園",\s*nameEn: "Þingvellir National Park",/,
    importLine: 'import { thingvellirSpot } from "./spots/thingvellir";',
    replacement: "thingvellirSpot",
    exclude: "spots/thingvellir.ts",
  },
  {
    marker: /name: "蓋錫爾間歇泉地帶",\s*nameEn: "The Great Geysir and Strokkur",/,
    importLine: 'import { geysirSpot } from "./spots/geysir";',
    replacement: "geysirSpot",
    exclude: "spots/geysir.ts",
  },
  {
    marker: /name: "黃金瀑布",\s*nameEn: "Gullfoss",/,
    importLine: 'import { gullfossSpot } from "./spots/gullfoss";',
    replacement: "gullfossSpot",
    exclude: "spots/gullfoss.ts",
  },
  {
    marker: /name: "教會山",\s*nameEn: "Kirkjufell",/,
    importLine: 'import { kirkjufellSpot } from "./spots/kirkjufell";',
    replacement: "kirkjufellSpot",
    exclude: "spots/kirkjufell.ts",
  },
  {
    marker: /name: "眾神瀑布",\s*nameEn: "Goðafoss",/,
    importLine: 'import { godafossSpot } from "./spots/godafoss";',
    replacement: "godafossSpot",
    exclude: "spots/godafoss.ts",
  },
  {
    marker: /name: "米湖",\s*nameEn: "Lake Mývatn",/,
    importLine: 'import { myvatnSpot } from "./spots/myvatn";',
    replacement: "myvatnSpot",
    exclude: "spots/myvatn.ts",
  },
  {
    marker: /name: "阿克雷里",\s*nameEn: "Akureyri",/,
    importLine: 'import { akureyriSpot } from "./spots/akureyri";',
    replacement: "akureyriSpot",
    exclude: "spots/akureyri.ts",
  },
  {
    marker: /name: "哈爾格林姆斯教堂",\s*nameEn: "Hallgrímskirkja",/,
    importLine:
      'import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";',
    replacement: "hallgrimskirkjaSpot",
    exclude: "spots/hallgrimskirkja.ts",
  },
  {
    marker: /name: "哈帕音樂廳",\s*nameEn: "Harpa",/,
    importLine: 'import { harpaSpot } from "./spots/harpa";',
    replacement: "harpaSpot",
    exclude: "spots/harpa.ts",
  },
  {
    marker: /name: "太陽航海者",\s*nameEn: "Sun Voyager",/,
    importLine: 'import { sunVoyagerSpot } from "./spots/sun-voyager";',
    replacement: "sunVoyagerSpot",
    exclude: "spots/sun-voyager.ts",
  },
  {
    marker: /name: "洛加維格大街",\s*nameEn: "Laugavegur Street",/,
    importLine: 'import { laugavegurSpot } from "./spots/laugavegur";',
    replacement: "laugavegurSpot",
    exclude: "spots/laugavegur.ts",
  },
  {
    marker: /name: "熔岩瀑布",\s*nameEn: "Hraunfossar",/,
    importLine: 'import { hraunfossarSpot } from "./spots/hraunfossar";',
    replacement: "hraunfossarSpot",
    exclude: "spots/hraunfossar.ts",
  },
  {
    marker: /name: "兒童瀑布",\s*nameEn: "Barnafossar",/,
    importLine: 'import { barnafossSpot } from "./spots/barnafoss";',
    replacement: "barnafossSpot",
    exclude: "spots/barnafoss.ts",
  },
  {
    marker: /name: "德爾達圖赫菲溫泉",\s*nameEn: "Deildartunguhver",/,
    importLine:
      'import { deildartunguhverSpot } from "./spots/deildartunguhver";',
    replacement: "deildartunguhverSpot",
    exclude: "spots/deildartunguhver.ts",
  },
  {
    marker:
      /name: "冰島陰莖博物館",\s*nameEn: "Icelandic Phallological Museum",/,
    importLine:
      'import { phallologicalMuseumSpot } from "./spots/phallological-museum";',
    replacement: "phallologicalMuseumSpot",
    exclude: "spots/phallological-museum.ts",
  },
  {
    marker: /name: "維克",\s*nameEn: "Vík í Mýrdal",/,
    importLine: 'import { vikSpot } from "./spots/vik";',
    replacement: "vikSpot",
    exclude: "spots/vik.ts",
  },
  {
    marker: /name: "秘密瀑布",\s*nameEn: "Gljúfrabúi",/,
    importLine: 'import { gljufrabuiSpot } from "./spots/gljufabui";',
    replacement: "gljufrabuiSpot",
    exclude: "spots/gljufabui.ts",
  },
  {
    marker:
      /name: "飛機殘骸",\s*nameEn: "Solheimasandur Plane Wreck",/,
    importLine: 'import { planeWreckSpot } from "./spots/plane-wreck";',
    replacement: "planeWreckSpot",
    exclude: "spots/plane-wreck.ts",
  },
  {
    marker: /name: "布迪爾黑教堂",\s*nameEn: "Búðakirkja",/,
    importLine: 'import { budakirkjaSpot } from "./spots/budakirkja";',
    replacement: "budakirkjaSpot",
    exclude: "spots/budakirkja.ts",
  },
  {
    marker: /name: "迪霍拉里",\s*nameEn: "Dyrhólaey",/,
    importLine: 'import { dyrholaeySpot } from "./spots/dyrholaey";',
    replacement: "dyrholaeySpot",
    exclude: "spots/dyrholaey.ts",
  },
  {
    marker: /name: "阿爾納斯塔皮",\s*nameEn: "Arnarstapi",/,
    importLine: 'import { arnarstapiSpot } from "./spots/arnarstapi";',
    replacement: "arnarstapiSpot",
    exclude: "spots/arnarstapi.ts",
  },
  {
    marker: /name: "托寧湖",\s*nameEn: "Tjörnin Pond",/,
    importLine: 'import { tjorninSpot } from "./spots/tjornin";',
    replacement: "tjorninSpot",
    exclude: "spots/tjornin.ts",
  },
  {
    marker: /name: "瓦特納冰川",\s*nameEn: "Vatnajökull",/,
    importLine: 'import { vatnajokullSpot } from "./spots/vatnajokull";',
    replacement: "vatnajokullSpot",
    exclude: "spots/vatnajokull.ts",
  },
  {
    marker: /name: "凱瑞斯火山口",\s*nameEn: "Kerið Crater",/,
    importLine: 'import { keridSpot } from "./spots/kerid";',
    replacement: "keridSpot",
    exclude: "spots/kerid.ts",
  },
  {
    marker: /name: "海豹沙灘",\s*nameEn: "Ytri Tunga",/,
    importLine: 'import { ytriTungaSpot } from "./spots/ytri-tunga";',
    replacement: "ytriTungaSpot",
    exclude: "spots/ytri-tunga.ts",
  },
  {
    marker:
      /name: "斯卡夫塔山國家公園",\s*nameEn: "Skaftafell National Park",/,
    importLine: 'import { skaftafellSpot } from "./spots/skaftafell";',
    replacement: "skaftafellSpot",
    exclude: "spots/skaftafell.ts",
  },
  {
    marker: /name: "斯瓦蒂瀑布",\s*nameEn: "Svartifoss",/,
    importLine: 'import { svartifossSpot } from "./spots/svartifoss";',
    replacement: "svartifossSpot",
    exclude: "spots/svartifoss.ts",
  },
  {
    marker: /name: "埃爾德熔岩原",\s*nameEn: "Eldhraun",/,
    importLine: 'import { eldhraunSpot } from "./spots/eldhraun";',
    replacement: "eldhraunSpot",
    exclude: "spots/eldhraun.ts",
  },
  {
    marker: /name: "Djúpalónssandur黑沙灘",/,
    importLine:
      'import { djupalonssandurSpot } from "./spots/djupalonssandur";',
    replacement: "djupalonssandurSpot",
    exclude: "spots/djupalonssandur.ts",
  },
  {
    marker: /name: "雷克雅維克彩虹街",\s*nameEn: "Rainbow Street",/,
    importLine: 'import { rainbowStreetSpot } from "./spots/rainbow-street";',
    replacement: "rainbowStreetSpot",
    exclude: "spots/rainbow-street.ts",
  },
  {
    marker:
      /name: "雷克雅維克舊港",\s*nameEn: "Reykjavík Old Harbour",/,
    importLine: 'import { oldHarbourSpot } from "./spots/old-harbour";',
    replacement: "oldHarbourSpot",
    exclude: "spots/old-harbour.ts",
  },
  {
    marker: /name: "雷克霍特",\s*nameEn: "Reykholt",/,
    importLine: 'import { reykholtSpot } from "./spots/reykholt";',
    replacement: "reykholtSpot",
    exclude: "spots/reykholt.ts",
  },
  {
    marker: /name: "絲雨瀑布",\s*nameEn: "Foss á Síðu",/,
    importLine: 'import { fossASiduSpot } from "./spots/foss-a-sidu";',
    replacement: "fossASiduSpot",
    exclude: "spots/foss-a-sidu.ts",
  },
  {
    marker:
      /name: "教堂鎮",\s*nameEn: "Kirkjubæjarklaustur",/,
    importLine:
      'import { kirkjubaejarklausturSpot } from "./spots/kirkjubaejarklaustur";',
    replacement: "kirkjubaejarklausturSpot",
    exclude: "spots/kirkjubaejarklaustur.ts",
  },
  {
    marker: /name: "Bæjarins Beztu Pylsur熱狗攤",/,
    importLine:
      'import { baejarinsBeztuSpot } from "./spots/baejarins-beztu";',
    replacement: "baejarinsBeztuSpot",
    exclude: "spots/baejarins-beztu.ts",
  },
  {
    marker: /name: "Laugavegur購物街",/,
    importLine: 'import { laugavegurSpot } from "./spots/laugavegur";',
    replacement: "laugavegurSpot",
    exclude: "spots/laugavegur.ts",
  },
  {
    marker: /name: "埃伊爾斯塔濟",\s*nameEn: "Egilsstaðir",/,
    importLine: 'import { egilsstadirSpot } from "./spots/egilsstadir";',
    replacement: "egilsstadirSpot",
    exclude: "spots/egilsstadir.ts",
  },
  {
    marker: /name: "米湖地熱區",\s*nameEn: "Mývatn Geothermal Area",/,
    importLine:
      'import { myvatnGeothermalSpot } from "./spots/myvatn-geothermal";',
    replacement: "myvatnGeothermalSpot",
    exclude: "spots/myvatn-geothermal.ts",
  },
  {
    marker: /name: "Námafjall地熱區",/,
    importLine: 'import { namafjallSpot } from "./spots/namafjall";',
    replacement: "namafjallSpot",
    exclude: "spots/namafjall.ts",
  },
  {
    marker:
      /name: "凱夫拉維克國際機場",\s*nameEn: "Keflavik International Airport",/,
    importLine:
      'import { keflavikAirportSpot } from "./spots/keflavik-airport";',
    replacement: "keflavikAirportSpot",
    exclude: "spots/keflavik-airport.ts",
  },
  {
    marker: /name: "塞濟斯菲厄澤",\s*nameEn: "Seyðisfjörður",/,
    importLine: 'import { seydisfjordurSpot } from "./spots/seydisfjordur";',
    replacement: "seydisfjordurSpot",
    exclude: "spots/seydisfjordur.ts",
  },
  {
    marker: /name: "Skútustaðagígar偽火山口",/,
    importLine:
      'import { skutustadagigarSpot } from "./spots/skutustadagigar";',
    replacement: "skutustadagigarSpot",
    exclude: "spots/skutustadagigar.ts",
  },
  {
    marker: /name: "西角山",\s*nameEn: "Vestrahorn",/,
    importLine: 'import { vestrahornSpot } from "./spots/vestrahorn";',
    replacement: "vestrahornSpot",
    exclude: "spots/vestrahorn.ts",
  },
  {
    marker: /name: "華姆斯唐吉",\s*nameEn: "Hvammstangi",/,
    importLine: 'import { hvammstangiSpot } from "./spots/hvammstangi";',
    replacement: "hvammstangiSpot",
    exclude: "spots/hvammstangi.ts",
  },
  {
    marker: /name: "黑暗城堡熔岩群",\s*nameEn: "Dimmuborgir",/,
    importLine: 'import { dimmuborgirSpot } from "./spots/dimmuborgir";',
    replacement: "dimmuborgirSpot",
    exclude: "spots/dimmuborgir.ts",
  },
  {
    marker: /name: "教會山瀑布",\s*nameEn: "Kirkjufellsfoss",/,
    importLine:
      'import { kirkjufellsfossSpot } from "./spots/kirkjufellsfoss";',
    replacement: "kirkjufellsfossSpot",
    exclude: "spots/kirkjufellsfoss.ts",
  },
  {
    marker: /name: "赫本",\s*nameEn: "Höfn",/,
    importLine: 'import { hofnSpot } from "./spots/hofn";',
    replacement: "hofnSpot",
    exclude: "spots/hofn.ts",
  },
  {
    marker: /name: "胡薩維克",\s*nameEn: "Húsavík",/,
    importLine: 'import { husavikSpot } from "./spots/husavik";',
    replacement: "husavikSpot",
    exclude: "spots/husavik.ts",
  },
  {
    marker: /name: "黛提瀑布",\s*nameEn: "Dettifoss",/,
    importLine: 'import { dettifossSpot } from "./spots/dettifoss";',
    replacement: "dettifossSpot",
    exclude: "spots/dettifoss.ts",
  },
  {
    marker: /name: "Grjótagjá洞穴",/,
    importLine: 'import { grjotagjaSpot } from "./spots/grjotagja";',
    replacement: "grjotagjaSpot",
    exclude: "spots/grjotagja.ts",
  },
  {
    marker: /name: "都皮沃古爾",\s*nameEn: "Djúpivogur",/,
    importLine: 'import { djupivogurSpot } from "./spots/djupivogur";',
    replacement: "djupivogurSpot",
    exclude: "spots/djupivogur.ts",
  },
  {
    marker: /name: "福斯克魯斯菲厄澤",\s*nameEn: "Fáskrúðsfjörður",/,
    importLine:
      'import { faskrudsfjordurSpot } from "./spots/faskrudsfjordur";',
    replacement: "faskrudsfjordurSpot",
    exclude: "spots/faskrudsfjordur.ts",
  },
  {
    marker: /name: "博爾加內斯",\s*nameEn: "Borgarnes",/,
    importLine: 'import { borgarnesSpot } from "./spots/borgarnes";',
    replacement: "borgarnesSpot",
    exclude: "spots/borgarnes.ts",
  },
  {
    marker: /name: "布倫迪歐斯",\s*nameEn: "Blönduós",/,
    importLine: 'import { blonduosSpot } from "./spots/blonduos";',
    replacement: "blonduosSpot",
    exclude: "spots/blonduos.ts",
  },
  {
    marker: /name: "斯蒂基斯霍爾米",\s*nameEn: "Stykkishólmur",/,
    importLine: 'import { stykkisholmurSpot } from "./spots/stykkisholmur";',
    replacement: "stykkisholmurSpot",
    exclude: "spots/stykkisholmur.ts",
  },
  {
    marker: /name: "怪物海岸",\s*nameEn: "Lóndrangar",/,
    importLine: 'import { londrangarSpot } from "./spots/londrangar";',
    replacement: "londrangarSpot",
    exclude: "spots/londrangar.ts",
  },
  {
    marker: /name: "番茄農場",\s*nameEn: "Friðheimar",/,
    importLine: 'import { fridheimarSpot } from "./spots/fridheimar";',
    replacement: "fridheimarSpot",
    exclude: "spots/fridheimar.ts",
  },
  {
    marker: /name: "阿克雷里大教堂",\s*nameEn: "Akureyrarkirkja",/,
    importLine:
      'import { akureyrarkirkjaSpot } from "./spots/akureyrarkirkja";',
    replacement: "akureyrarkirkjaSpot",
    exclude: "spots/akureyrarkirkja.ts",
  },
  {
    marker:
      /name: "阿克雷里植物園",\s*nameEn: "Akureyri Botanical Garden",/,
    importLine:
      'import { akureyriBotanicalGardenSpot } from "./spots/akureyri-botanical-garden";',
    replacement: "akureyriBotanicalGardenSpot",
    exclude: "spots/akureyri-botanical-garden.ts",
  },
  {
    marker: /name: "羽毛峽谷",\s*nameEn: "Fjaðrárgljúfur",/,
    importLine:
      'import { fjadrargljufurSpot } from "./spots/fjadrargljufur";',
    replacement: "fjadrargljufurSpot",
    exclude: "spots/fjadrargljufur.ts",
  },
  {
    marker: /name: "黃金圈",\s*nameEn: "Golden Circle",/,
    importLine:
      'import { goldenCircleSpot } from "./spots/golden-circle";',
    replacement: "goldenCircleSpot",
    exclude: "spots/golden-circle.ts",
  },
  {
    marker: /name: "冰島犀牛石",\s*nameEn: "Hvítserkur",/,
    importLine: 'import { hvitserkurSpot } from "./spots/hvitserkur";',
    replacement: "hvitserkurSpot",
    exclude: "spots/hvitserkur.ts",
  },
  {
    marker: /name: "格蘭尼瀑布",\s*nameEn: "Glanni Waterfall",/,
    importLine: 'import { glanniSpot } from "./spots/glanni";',
    replacement: "glanniSpot",
    exclude: "spots/glanni.ts",
  },
  {
    marker: /name: "海拉",\s*nameEn: "Hella",/,
    importLine: 'import { hellaSpot } from "./spots/hella";',
    replacement: "hellaSpot",
    exclude: "spots/hella.ts",
  },
  {
    marker: /name: "小冰河湖",\s*nameEn: "Fjallsárlón",/,
    importLine: 'import { fjallsarlonSpot } from "./spots/fjallsarlon";',
    replacement: "fjallsarlonSpot",
    exclude: "spots/fjallsarlon.ts",
  },
  {
    marker: /name: "雷克雅內斯半島",\s*nameEn: "Reykjanes",/,
    importLine: 'import { reykjanesSpot } from "./spots/reykjanes";',
    replacement: "reykjanesSpot",
    exclude: "spots/reykjanes.ts",
  },
  {
    marker: /name: "矮人岩石",\s*nameEn: "Dverghamrar",/,
    importLine: 'import { dverghamrarSpot } from "./spots/dverghamrar";',
    replacement: "dverghamrarSpot",
    exclude: "spots/dverghamrar.ts",
  },
  {
    marker: /name: "Stuðlagil峽谷",\s*region: "冰島東部",/,
    importLine: 'import { studlagilSpot } from "./spots/studlagil";',
    replacement: "studlagilSpot",
    exclude: "spots/studlagil.ts",
  },
  {
    marker: /name: "達爾維克",\s*nameEn: "Dalvík",/,
    importLine: 'import { dalvikSpot } from "./spots/dalvik";',
    replacement: "dalvikSpot",
    exclude: "spots/dalvik.ts",
  },
  {
    marker: /name: "錫格呂菲厄澤",\s*nameEn: "Siglufjörður",/,
    importLine:
      'import { siglufjordurSpot } from "./spots/siglufjordur";',
    replacement: "siglufjordurSpot",
    exclude: "spots/siglufjordur.ts",
  },
  {
    marker: /name: "豪加內斯",\s*nameEn: "Hauganes",/,
    importLine: 'import { hauganesSpot } from "./spots/hauganes";',
    replacement: "hauganesSpot",
    exclude: "spots/hauganes.ts",
  },
  {
    marker: /name: "伊薩菲厄澤",\s*nameEn: "Ísafjörður",/,
    importLine: 'import { isafjordurSpot } from "./spots/isafjordur";',
    replacement: "isafjordurSpot",
    exclude: "spots/isafjordur.ts",
  },
  {
    marker: /name: "勞特拉爾角",\s*nameEn: "Látrabjarg",/,
    importLine: 'import { latrabjargSpot } from "./spots/latrabjarg";',
    replacement: "latrabjargSpot",
    exclude: "spots/latrabjarg.ts",
  },
  {
    marker: /name: "凱夫拉維克",\s*nameEn: "Keflavík",/,
    importLine: 'import { keflavikSpot } from "./spots/keflavik";',
    replacement: "keflavikSpot",
    exclude: "spots/keflavik.ts",
  },
  {
    marker:
      /name: "瓦特納冰川藍冰洞探秘",\s*nameEn: "Crystal Ice Cave Adventure",/,
    importLine:
      'import { crystalIceCaveSpot } from "./spots/crystal-ice-cave";',
    replacement: "crystalIceCaveSpot",
    exclude: "spots/crystal-ice-cave.ts",
  },
  {
    marker:
      /name: "索爾黑馬冰川健行",\s*nameEn: "Sólheimajökull Glacier Hiking",/,
    importLine:
      'import { solheimajokullGlacierHikingSpot } from "./spots/solheimajokull-glacier-hiking";',
    replacement: "solheimajokullGlacierHikingSpot",
    exclude: "spots/solheimajokull-glacier-hiking.ts",
  },
  {
    marker: /name: "天空之境溫泉",\s*nameEn: "Sky Lagoon",/,
    importLine: 'import { skyLagoonSpot } from "./spots/sky-lagoon";',
    replacement: "skyLagoonSpot",
    exclude: "spots/sky-lagoon.ts",
  },
  {
    marker: /name: "藍湖溫泉",\s*nameEn: "Blue Lagoon",/,
    importLine: 'import { blueLagoonSpot } from "./spots/blue-lagoon";',
    replacement: "blueLagoonSpot",
    exclude: "spots/blue-lagoon.ts",
  },
  {
    marker: /name: "Víðgelmir火山岩洞探險",\s*region: "冰島西部",/,
    importLine: 'import { vidgelmirSpot } from "./spots/vidgelmir";',
    replacement: "vidgelmirSpot",
    exclude: "spots/vidgelmir.ts",
  },
  {
    marker: /name: "火山內部探險",\s*region: "冰島西部",/,
    importLine:
      'import { insideVolcanoSpot } from "./spots/inside-volcano";',
    replacement: "insideVolcanoSpot",
    exclude: "spots/inside-volcano.ts",
  },
  {
    marker: /name: "雷克雅維克經典觀鯨",\s*region: "雷克雅維克",/,
    importLine:
      'import { reykjavikWhaleWatchingSpot } from "./spots/reykjavik-whale-watching";',
    replacement: "reykjavikWhaleWatchingSpot",
    exclude: "spots/reykjavik-whale-watching.ts",
  },
  {
    marker: /name: "Hvammsvík溫泉",\s*region: "雷克雅維克",/,
    importLine: 'import { hvammsvikSpot } from "./spots/hvammsvik";',
    replacement: "hvammsvikSpot",
    exclude: "spots/hvammsvik.ts",
  },
  {
    marker:
      /name: "絲浮拉裂谷（Silfra）浮潛體驗（含首都接送）",\s*region: "冰島南部",/,
    importLine:
      'import { silfraSnorkelingGroupSpot } from "./spots/silfra-snorkeling-group";',
    replacement: "silfraSnorkelingGroupSpot",
    exclude: "spots/silfra-snorkeling-group.ts",
  },
  {
    marker: /name: "絲浮拉大裂谷Silfra浮潛體驗（自駕集合）",/,
    importLine:
      'import { silfraSnorkelingSelfDriveSpot } from "./spots/silfra-snorkeling-self-drive";',
    replacement: "silfraSnorkelingSelfDriveSpot",
    exclude: "spots/silfra-snorkeling-self-drive.ts",
  },
  {
    marker: /name: "朗格冰川隧道探險 \| Langjökull Ice Tunnel",/,
    importLine:
      'import { langjokullIceTunnelSpot } from "./spots/langjokull-ice-tunnel";',
    replacement: "langjokullIceTunnelSpot",
    exclude: "spots/langjokull-ice-tunnel.ts",
  },
  {
    marker: /name: "斯奈山半島Vatnshellir洞穴地心歷險體驗",/,
    importLine:
      'import { vatnshellirCaveSpot } from "./spots/vatnshellir-cave";',
    replacement: "vatnshellirCaveSpot",
    exclude: "spots/vatnshellir-cave.ts",
  },
  {
    marker: /name: "雷克雅維克市區Flyover Iceland飛越冰島4D電影",/,
    importLine:
      'import { flyoverIcelandSpot } from "./spots/flyover-iceland";',
    replacement: "flyoverIcelandSpot",
    exclude: "spots/flyover-iceland.ts",
  },
  {
    marker: /name: "雷克雅維克熔岩秀（Reykjavik Lava Show）",/,
    importLine:
      'import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";',
    replacement: "reykjavikLavaShowSpot",
    exclude: "spots/reykjavik-lava-show.ts",
  },
  {
    marker: /name: "珍珠樓博物館（Perlan Museum）入場票",/,
    importLine:
      'import { perlanMuseumSpot } from "./spots/perlan-museum";',
    replacement: "perlanMuseumSpot",
    exclude: "spots/perlan-museum.ts",
  },
  {
    marker: /name: "藍湖溫泉（Blue Lagoon）舒適體驗",/,
    importLine:
      'import { blueLagoonComfortSpot } from "./spots/blue-lagoon-comfort";',
    replacement: "blueLagoonComfortSpot",
    exclude: "spots/blue-lagoon-comfort.ts",
  },
  {
    marker: /name: "Sky Lagoon 天空之境溫泉7步療法純享體驗門票",/,
    importLine:
      'import { skyLagoonTicketSpot } from "./spots/sky-lagoon-ticket";',
    replacement: "skyLagoonTicketSpot",
    exclude: "spots/sky-lagoon-ticket.ts",
  },
  {
    marker: /name: "維克熔岩秀（ Vík Lava Show）",/,
    importLine: 'import { vikLavaShowSpot } from "./spots/vik-lava-show";',
    replacement: "vikLavaShowSpot",
    exclude: "spots/vik-lava-show.ts",
  },
  {
    marker: /name: "卡特拉冰洞探險（維克出發）",/,
    importLine: 'import { katlaIceCaveSpot } from "./spots/katla-ice-cave";',
    replacement: "katlaIceCaveSpot",
    exclude: "spots/katla-ice-cave.ts",
  },
  {
    marker: /name: "朗格冰川雪地摩托體驗",/,
    importLine:
      'import { snowmobileLangjokullSpot } from "./spots/snowmobile-langjokull";',
    replacement: "snowmobileLangjokullSpot",
    exclude: "spots/snowmobile-langjokull.ts",
  },
  {
    marker: /name: "Fontana豐塔納天然地熱溫泉入場票",/,
    importLine: 'import { fontanaSpot } from "./spots/fontana";',
    replacement: "fontanaSpot",
    exclude: "spots/fontana.ts",
  },
  {
    marker: /name: "雷克雅維克市郊冰島馬騎行體驗",/,
    importLine:
      'import { reykjavikHorseRidingSpot } from "./spots/reykjavik-horse-riding";',
    replacement: "reykjavikHorseRidingSpot",
    exclude: "spots/reykjavik-horse-riding.ts",
  },
  {
    marker: /name: "瓦特納冰川水晶宮藍冰洞探險",/,
    importLine:
      'import { vatnajokullCrystalPalaceSpot } from "./spots/vatnajokull-crystal-palace";',
    replacement: "vatnajokullCrystalPalaceSpot",
    exclude: "spots/vatnajokull-crystal-palace.ts",
  },
  {
    marker: /name: "索爾黑馬冰川健行",\s*imageUrl:/,
    importLine:
      'import { solheimajokullGlacierHikingSpot } from "./spots/solheimajokull-glacier-hiking";',
    replacement: "solheimajokullGlacierHikingSpot",
    exclude: "spots/solheimajokull-glacier-hiking.ts",
  },
  {
    marker: /name: "雷克雅維克經典觀鯨",\s*imageUrl:/,
    importLine:
      'import { reykjavikWhaleWatchingSpot } from "./spots/reykjavik-whale-watching";',
    replacement: "reykjavikWhaleWatchingSpot",
    exclude: "spots/reykjavik-whale-watching.ts",
  },
  {
    marker: /name: "Víðgelmir火山熔岩洞穴探險",/,
    importLine:
      'import { vidgelmirLavaCaveSpot } from "./spots/vidgelmir-lava-cave";',
    replacement: "vidgelmirLavaCaveSpot",
    exclude: "spots/vidgelmir-lava-cave.ts",
  },
  {
    marker: /name: "斯卡夫塔冰川健行",/,
    importLine:
      'import { skaftafellGlacierHikingSpot } from "./spots/skaftafell-glacier-hiking";',
    replacement: "skaftafellGlacierHikingSpot",
    exclude: "spots/skaftafell-glacier-hiking.ts",
  },
  {
    marker: /name: "Krauma地熱溫泉體驗入場票",/,
    importLine: 'import { kraumaSpot } from "./spots/krauma";',
    replacement: "kraumaSpot",
    exclude: "spots/krauma.ts",
  },
  {
    marker: /name: "米湖天然溫泉入場票",/,
    importLine:
      'import { myvatnNatureBathsSpot } from "./spots/myvatn-nature-baths";',
    replacement: "myvatnNatureBathsSpot",
    exclude: "spots/myvatn-nature-baths.ts",
  },
  {
    marker: /name: "絲浮拉 Silfra 浮潛體驗（含雷克雅維克接送）",/,
    importLine:
      'import { silfraSnorkelingReykjavikTransferSpot } from "./spots/silfra-snorkeling-reykjavik-transfer";',
    replacement: "silfraSnorkelingReykjavikTransferSpot",
    exclude: "spots/silfra-snorkeling-reykjavik-transfer.ts",
  },
  {
    marker: /name: "Hvammsvík溫泉體驗（含首都接送）",/,
    importLine:
      'import { hvammsvikTransferSpot } from "./spots/hvammsvik-transfer";',
    replacement: "hvammsvikTransferSpot",
    exclude: "spots/hvammsvik-transfer.ts",
  },
  {
    marker: /name: "胡薩維克Húsavík經典觀鯨",/,
    importLine:
      'import { husavikWhaleWatchingSpot } from "./spots/husavik-whale-watching";',
    replacement: "husavikWhaleWatchingSpot",
    exclude: "spots/husavik-whale-watching.ts",
  },
  {
    marker: /name: "火山內部探險",\s*imageUrl:/,
    importLine:
      'import { insideVolcanoSpot } from "./spots/inside-volcano";',
    replacement: "insideVolcanoSpot",
    exclude: "spots/inside-volcano.ts",
  },
  {
    marker: /name: "Plane Wreck DC-3飛機殘骸往返接送服務",/,
    importLine:
      'import { planeWreckShuttleSpot } from "./spots/plane-wreck-shuttle";',
    replacement: "planeWreckShuttleSpot",
    exclude: "spots/plane-wreck-shuttle.ts",
  },
  {
    marker: /name: "維克 \| 冰島馬騎行體驗",/,
    importLine: 'import { vikHorseRidingSpot } from "./spots/vik-horse-riding";',
    replacement: "vikHorseRidingSpot",
    exclude: "spots/vik-horse-riding.ts",
  },
  {
    marker:
      /name: "冰島黃金圈新晉Laugarás Lagoon溫泉Birki級別入場票",/,
    importLine:
      'import { laugarasLagoonSpot } from "./spots/laugaras-lagoon";',
    replacement: "laugarasLagoonSpot",
    exclude: "spots/laugaras-lagoon.ts",
  },
  {
    marker: /name: "Hvammsvík溫泉入場票",/,
    importLine:
      'import { hvammsvikTicketSpot } from "./spots/hvammsvik-ticket";',
    replacement: "hvammsvikTicketSpot",
    exclude: "spots/hvammsvik-ticket.ts",
  },
  {
    marker: /name: "冰島黑沙灘ATV全地形山地摩托車騎行體驗",/,
    importLine:
      'import { reynisfjaraAtvSpot } from "./spots/reynisfjara-atv";',
    replacement: "reynisfjaraAtvSpot",
    exclude: "spots/reynisfjara-atv.ts",
  },
  {
    marker: /name: "傑古沙龍冰河湖水陸兩棲船遊",/,
    importLine:
      'import { jokulsarlonAmphibianBoatSpot } from "./spots/jokulsarlon-amphibian-boat";',
    replacement: "jokulsarlonAmphibianBoatSpot",
    exclude: "spots/jokulsarlon-amphibian-boat.ts",
  },
  {
    marker: /name: "傑古沙龍冰河湖獨木舟體驗",/,
    importLine:
      'import { jokulsarlonKayakSpot } from "./spots/jokulsarlon-kayak";',
    replacement: "jokulsarlonKayakSpot",
    exclude: "spots/jokulsarlon-kayak.ts",
  },
  {
    marker: /name: "傑古沙龍冰河湖快艇（Zodiac Boat）船遊體驗",/,
    importLine:
      'import { jokulsarlonZodiacBoatSpot } from "./spots/jokulsarlon-zodiac-boat";',
    replacement: "jokulsarlonZodiacBoatSpot",
    exclude: "spots/jokulsarlon-zodiac-boat.ts",
  },
  {
    marker: /name: "Fjallsárlón小冰河湖夏季經典船遊",/,
    importLine: 'import { fjallsarlonBoatSpot } from "./spots/fjallsarlon-boat";',
    replacement: "fjallsarlonBoatSpot",
    exclude: "spots/fjallsarlon-boat.ts",
  },
  {
    marker: /name: "東部Vök Baths湖上溫泉入場票",/,
    importLine: 'import { vokBathsSpot } from "./spots/vok-baths";',
    replacement: "vokBathsSpot",
    exclude: "spots/vok-baths.ts",
  },
  {
    marker: /name: "冰島海釣體驗（雷克雅維克出發）",/,
    importLine:
      'import { reykjavikSeaAnglingSpot } from "./spots/reykjavik-sea-angling";',
    replacement: "reykjavikSeaAnglingSpot",
    exclude: "spots/reykjavik-sea-angling.ts",
  },
  {
    marker: /name: "冰島雷克雅維克經典海釣體驗",/,
    importLine:
      'import { reykjavikSeaAnglingClassicSpot } from "./spots/reykjavik-sea-angling-classic";',
    replacement: "reykjavikSeaAnglingClassicSpot",
    exclude: "spots/reykjavik-sea-angling-classic.ts",
  },
  {
    marker: /name: "雷克雅維克出發極光船遊",/,
    importLine:
      'import { auroraBoatTourSpot } from "./spots/aurora-boat-tour";',
    replacement: "auroraBoatTourSpot",
    exclude: "spots/aurora-boat-tour.ts",
  },
  {
    marker: /name: "雷克雅維克出發MINI巴士極光團",/,
    importLine: 'import { auroraMiniBusSpot } from "./spots/aurora-mini-bus";',
    replacement: "auroraMiniBusSpot",
    exclude: "spots/aurora-mini-bus.ts",
  },
  {
    marker: /name: "超級吉普獵尋北極光之旅",/,
    importLine:
      'import { auroraSuperJeepSpot } from "./spots/aurora-super-jeep";',
    replacement: "auroraSuperJeepSpot",
    exclude: "spots/aurora-super-jeep.ts",
  },
  {
    marker: /name: "藍湖溫泉舒適體驗套票（含雷克雅維克往返接送）",/,
    importLine:
      'import { blueLagoonComfortTransferSpot } from "./spots/blue-lagoon-comfort-transfer";',
    replacement: "blueLagoonComfortTransferSpot",
    exclude: "spots/blue-lagoon-comfort-transfer.ts",
  },
  {
    marker:
      /name: "Sky Lagoon 天空之境溫泉7步療法純享體驗含首都接送",/,
    importLine:
      'import { skyLagoonTransferSpot } from "./spots/sky-lagoon-transfer";',
    replacement: "skyLagoonTransferSpot",
    exclude: "spots/sky-lagoon-transfer.ts",
  },
  {
    marker: /name: "熔岩地騎馬體驗",/,
    importLine:
      'import { lavaFieldHorseRidingSpot } from "./spots/lava-field-horse-riding";',
    replacement: "lavaFieldHorseRidingSpot",
    exclude: "spots/lava-field-horse-riding.ts",
  },
  {
    marker: /name: "冰島地熱溫泉區騎馬體驗",/,
    importLine:
      'import { geothermalHorseRidingSpot } from "./spots/geothermal-horse-riding";',
    replacement: "geothermalHorseRidingSpot",
    exclude: "spots/geothermal-horse-riding.ts",
  },
  {
    marker: /name: "索爾黑馬冰川健行（含首都接送）",/,
    importLine:
      'import { solheimajokullGlacierHikingTransferSpot } from "./spots/solheimajokull-glacier-hiking-transfer";',
    replacement: "solheimajokullGlacierHikingTransferSpot",
    exclude: "spots/solheimajokull-glacier-hiking-transfer.ts",
  },
  {
    marker: /name: "Geosea天然海景溫泉入場票",/,
    importLine: 'import { geoseaSpot } from "./spots/geosea";',
    replacement: "geoseaSpot",
    exclude: "spots/geosea.ts",
  },
  {
    marker: /name: "Forest Lagoon森林溫泉入場票",/,
    importLine: 'import { forestLagoonSpot } from "./spots/forest-lagoon";',
    replacement: "forestLagoonSpot",
    exclude: "spots/forest-lagoon.ts",
  },
  {
    marker: /name: "朗格冰川隧道（Langjökull Ice Tunnel）探險含首都接送",/,
    importLine:
      'import { langjokullIceTunnelTransferSpot } from "./spots/langjokull-ice-tunnel-transfer";',
    replacement: "langjokullIceTunnelTransferSpot",
    exclude: "spots/langjokull-ice-tunnel-transfer.ts",
  },
  {
    marker: /name: "蘭德曼納勞卡高地Landmannalaugar一日遊",/,
    importLine:
      'import { landmannalaugarDayTourSpot } from "./spots/landmannalaugar-day-tour";',
    replacement: "landmannalaugarDayTourSpot",
    exclude: "spots/landmannalaugar-day-tour.ts",
  },
  {
    marker: /name: "卡特拉冰洞探險（含首都接送）",/,
    importLine:
      'import { katlaIceCaveTransferSpot } from "./spots/katla-ice-cave-transfer";',
    replacement: "katlaIceCaveTransferSpot",
    exclude: "spots/katla-ice-cave-transfer.ts",
  },
  {
    marker: /name: "西人島Vestmannaeyjar一日遊：火山健行、欣賞海岸線、觀海鸚",/,
    importLine:
      'import { vestmannaeyjarDayTourSpot } from "./spots/vestmannaeyjar-day-tour";',
    replacement: "vestmannaeyjarDayTourSpot",
    exclude: "spots/vestmannaeyjar-day-tour.ts",
  },
  {
    marker: /name: "豪加內斯（Hauganes）出海觀鯨 & 海釣體驗",/,
    importLine:
      'import { hauganesWhaleFishingSpot } from "./spots/hauganes-whale-fishing";',
    replacement: "hauganesWhaleFishingSpot",
    exclude: "spots/hauganes-whale-fishing.ts",
  },
  {
    marker: /name: "雷克雅維克出發精選極光小巴團",/,
    importLine:
      'import { auroraPremiumMinibusSpot } from "./spots/aurora-premium-minibus";',
    replacement: "auroraPremiumMinibusSpot",
    exclude: "spots/aurora-premium-minibus.ts",
  },
  {
    marker: /name: "溫泉鎮苔原熔岩地騎馬體驗",/,
    importLine:
      'import { hveragerdiHorseRidingSpot } from "./spots/hveragerdi-horse-riding";',
    replacement: "hveragerdiHorseRidingSpot",
    exclude: "spots/hveragerdi-horse-riding.ts",
  },
  {
    marker: /name: "北部甄選啤酒溫泉水療（Beer Spa）體驗",/,
    importLine: 'import { beerSpaSpot } from "./spots/beer-spa";',
    replacement: "beerSpaSpot",
    exclude: "spots/beer-spa.ts",
  },
  {
    marker: /name: "雷克雅維克半日寫真 \| 婚紗攝影",/,
    importLine:
      'import { reykjavikWeddingPhotographySpot } from "./spots/reykjavik-wedding-photography";',
    replacement: "reykjavikWeddingPhotographySpot",
    exclude: "spots/reykjavik-wedding-photography.ts",
  },
];

function findObjectBounds(content, startIndex) {
  let depth = 0;
  let inString = false;
  let escape = false;

  for (let i = startIndex; i < content.length; i++) {
    const ch = content[i];

    if (inString) {
      if (escape) {
        escape = false;
        continue;
      }
      if (ch === "\\") {
        escape = true;
        continue;
      }
      if (ch === '"') inString = false;
      continue;
    }

    if (ch === '"') {
      inString = true;
      continue;
    }

    if (ch === "{") depth += 1;
    if (ch === "}") {
      depth -= 1;
      if (depth === 0) {
        let end = i + 1;
        while (end < content.length && /[\s,]/.test(content[end])) end += 1;
        return { start: startIndex, end };
      }
    }
  }

  return null;
}

function ensureImport(content, importLine) {
  if (content.includes(importLine)) return content;

  const importMatch = content.match(/^import .+;\n/m);
  if (importMatch) {
    const insertAt = importMatch.index + importMatch[0].length;
    return (
      content.slice(0, insertAt) + importLine + "\n" + content.slice(insertAt)
    );
  }

  return importLine + "\n" + content;
}

function formatSpotReferences(content) {
  const spotNames = [
    ...SPOT_CONFIGS.map((c) => c.replacement),
    "reykjavikSpot",
  ];
  let out = content;

  for (const a of spotNames) {
    for (const b of spotNames) {
      if (a === b) continue;
      out = out.replace(
        new RegExp(`${a},\\s+${b},\\{`, "g"),
        `${a},\n    ${b},\n  {`,
      );
      out = out.replace(
        new RegExp(`${b},${a},\\{`, "g"),
        `${a},\n    ${b},\n  {`,
      );
    }
    out = out.replace(new RegExp(`${a},\\];`, "g"), `${a},\n];`);
    out = out.replace(new RegExp(`${a},\\{`, "g"), `${a},\n  {`);
  }

  return out;
}

function syncSpotInFile(filePath, config) {
  if (filePath.includes(config.exclude)) return 0;

  let content = fs.readFileSync(filePath, "utf8");
  let replacements = 0;

  while (true) {
    const markerMatch = content.match(config.marker);
    if (!markerMatch || markerMatch.index === undefined) break;

    const markerIndex = markerMatch.index;
    const objectStart = content.lastIndexOf("{", markerIndex);
    const bounds = findObjectBounds(content, objectStart);
    if (!bounds) break;

    const indentMatch = content.slice(0, objectStart).match(/(^|\n)([ \t]*)$/);
    const indent = indentMatch?.[2] ?? "  ";
    const replacement = `${indent}${config.replacement},`;

    content =
      content.slice(0, bounds.start) + replacement + content.slice(bounds.end);
    replacements += 1;
  }

  if (replacements === 0) return 0;

  content = ensureImport(content, config.importLine);
  content = formatSpotReferences(content);
  fs.writeFileSync(filePath, content, "utf8");
  return replacements;
}

const DEAD_IMG_HELPER =
  /\nconst IMG = \(file: string\) =>\n  `https:\/\/www\.senlinmao\.com\/images\/g_auto,f_auto,c_fill,w_1200,q_auto:good\/\$\{file\}`;\n?/g;

function removeDeadImgHelpers(filePath) {
  if (!filePath.endsWith("-cards.ts")) return false;

  let content = fs.readFileSync(filePath, "utf8");
  if (!content.includes("const IMG = (file: string) =>")) return false;
  if (/\bIMG\(/.test(content)) return false;

  const next = content.replace(DEAD_IMG_HELPER, "\n");
  if (next === content) return false;

  fs.writeFileSync(filePath, next, "utf8");
  return true;
}

let totalFiles = 0;
let totalReplacements = 0;

for (const name of fs.readdirSync(PACKAGES_DIR)) {
  if (!name.endsWith(".ts")) continue;
  const filePath = path.join(PACKAGES_DIR, name);
  let fileCount = 0;

  for (const config of SPOT_CONFIGS) {
    const count = syncSpotInFile(filePath, config);
    if (count > 0) {
      fileCount += count;
      console.log(
        `${path.relative(ROOT, filePath)}: ${count} × ${config.replacement}`,
      );
    }
  }

  if (fileCount > 0) {
    totalFiles += 1;
    totalReplacements += fileCount;
  }
}

console.log(
  `\nSynced trip spots in ${totalFiles} file(s), ${totalReplacements} replacement(s).`,
);

let cleanedImgHelpers = 0;

for (const name of fs.readdirSync(PACKAGES_DIR)) {
  if (!name.endsWith("-cards.ts")) continue;
  const filePath = path.join(PACKAGES_DIR, name);
  if (removeDeadImgHelpers(filePath)) {
    cleanedImgHelpers += 1;
    console.log(`${path.relative(ROOT, filePath)}: removed dead IMG helper`);
  }
}

if (cleanedImgHelpers > 0) {
  console.log(`\nRemoved dead IMG helper from ${cleanedImgHelpers} card file(s).`);
}
