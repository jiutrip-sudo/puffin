import type { TripAttraction } from "./types";
import { blueLagoonComfortTransferSpot } from "./spots/blue-lagoon-comfort-transfer";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { solheimajokullGlacierHikingSpot } from "./spots/solheimajokull-glacier-hiking";
import { keflavikAirportSpot } from "./spots/keflavik-airport";
import { eldhraunSpot } from "./spots/eldhraun";
import { keridSpot } from "./spots/kerid";
import { tjorninSpot } from "./spots/tjornin";
import { dyrholaeySpot } from "./spots/dyrholaey";
import { gljufrabuiSpot } from "./spots/gljufabui";
import { vikSpot } from "./spots/vik";
import { harpaSpot } from "./spots/harpa";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisdrangarSpot } from "./spots/reynisdrangar";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import { SPOTS } from "./spots";
import { IMG } from "./spots/_img";

export const icelandGroupSummer5GoldenCircleDay2Highlights: TripAttraction[] = [
  SPOTS.thingvellir,
  SPOTS.geysir,
  SPOTS.gullfoss,
    keridSpot,
];

export const icelandGroupSummer5GoldenCircleDay2OptionalActivities: TripAttraction[] = [

];

export const icelandGroupSummer5GoldenCircleDay3Highlights: TripAttraction[] = [
    seljalandsfossSpot,
    gljufrabuiSpot,skogafossSpot,
    solheimajokullGlacierHikingSpot,reynisfjaraSpot,
    dyrholaeySpot,reynisdrangarSpot,
];

export const icelandGroupSummer5GoldenCircleDay3OptionalActivities: TripAttraction[] = [

];

export const icelandGroupSummer5GoldenCircleDay4Highlights: TripAttraction[] = [
    jokulsarlonSpot,
    diamondBeachSpot,
    eldhraunSpot,vikSpot,
];

export const icelandGroupSummer5GoldenCircleDay4OptionalActivities: TripAttraction[] = [

];

export const icelandGroupSummer5GoldenCircleDay5Highlights: TripAttraction[] = [
    hallgrimskirkjaSpot,
    harpaSpot,
    tjorninSpot,
    keflavikAirportSpot,
];

export const icelandGroupSummer5GoldenCircleDay5OptionalActivities: TripAttraction[] = [
    perlanMuseumSpot,flyoverIcelandSpot,
    reykjavikLavaShowSpot,
    blueLagoonComfortTransferSpot,
];
