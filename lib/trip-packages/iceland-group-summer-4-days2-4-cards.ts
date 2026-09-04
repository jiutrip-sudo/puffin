import type { TripAttraction } from "./types";
import { blueLagoonComfortTransferSpot } from "./spots/blue-lagoon-comfort-transfer";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { solheimajokullGlacierHikingSpot } from "./spots/solheimajokull-glacier-hiking";
import { keflavikAirportSpot } from "./spots/keflavik-airport";
import { eldhraunSpot } from "./spots/eldhraun";
import { vatnajokullSpot } from "./spots/vatnajokull";
import { dyrholaeySpot } from "./spots/dyrholaey";
import { gljufrabuiSpot } from "./spots/gljufabui";
import { vikSpot } from "./spots/vik";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisdrangarSpot } from "./spots/reynisdrangar";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";


export const icelandGroupSummer4Day2Highlights: TripAttraction[] = [
    seljalandsfossSpot,
    skogafossSpot,
    gljufrabuiSpot,
    solheimajokullGlacierHikingSpot,reynisfjaraSpot,
    dyrholaeySpot,reynisdrangarSpot,
];

export const icelandGroupSummer4Day2OptionalActivities: TripAttraction[] = [

];

export const icelandGroupSummer4Day3Highlights: TripAttraction[] = [
    vatnajokullSpot,jokulsarlonSpot,
    diamondBeachSpot,
    eldhraunSpot,vikSpot,
];

export const icelandGroupSummer4Day3OptionalActivities: TripAttraction[] = [

];

export const icelandGroupSummer4Day4Highlights: TripAttraction[] = [
    keflavikAirportSpot,
];

export const icelandGroupSummer4Day4OptionalActivities: TripAttraction[] = [
    flyoverIcelandSpot,
    blueLagoonComfortTransferSpot,reykjavikLavaShowSpot,
    perlanMuseumSpot,
];
