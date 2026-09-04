import type { TripAttraction } from "./types";
import { blueLagoonComfortTransferSpot } from "./spots/blue-lagoon-comfort-transfer";
import { hvammsvikTransferSpot } from "./spots/hvammsvik-transfer";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { keflavikAirportSpot } from "./spots/keflavik-airport";
import { baejarinsBeztuSpot } from "./spots/baejarins-beztu";
import { oldHarbourSpot } from "./spots/old-harbour";
import { rainbowStreetSpot } from "./spots/rainbow-street";
import { vikSpot } from "./spots/vik";
import { laugavegurSpot } from "./spots/laugavegur";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandGroupWinter4Day2Highlights: TripAttraction[] = [
    seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
    vikSpot,
];

export const icelandGroupWinter4Day2OptionalActivities: TripAttraction[] = [

];

export const icelandGroupWinter4Day3Highlights: TripAttraction[] = [
    jokulsarlonSpot,
    diamondBeachSpot,
];

export const icelandGroupWinter4Day3OptionalActivities: TripAttraction[] = [

];

export const icelandGroupWinter4Day4Highlights: TripAttraction[] = [
    reykjavikSpot,
    rainbowStreetSpot,laugavegurSpot,
    oldHarbourSpot,
    baejarinsBeztuSpot,
    keflavikAirportSpot,
];

export const icelandGroupWinter4Day4OptionalActivities: TripAttraction[] = [
    blueLagoonComfortTransferSpot,hvammsvikTransferSpot,flyoverIcelandSpot,
    perlanMuseumSpot,reykjavikLavaShowSpot,
];
