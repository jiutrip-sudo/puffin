import type { TripAttraction } from "./types";
import { reynisfjaraAtvSpot } from "./spots/reynisfjara-atv";
import { vikHorseRidingSpot } from "./spots/vik-horse-riding";
import { planeWreckShuttleSpot } from "./spots/plane-wreck-shuttle";
import { skaftafellGlacierHikingSpot } from "./spots/skaftafell-glacier-hiking";
import { reykjavikWhaleWatchingSpot } from "./spots/reykjavik-whale-watching";
import { solheimajokullGlacierHikingSpot } from "./spots/solheimajokull-glacier-hiking";
import { vatnajokullCrystalPalaceSpot } from "./spots/vatnajokull-crystal-palace";
import { katlaIceCaveSpot } from "./spots/katla-ice-cave";
import { vikLavaShowSpot } from "./spots/vik-lava-show";
import { skyLagoonTicketSpot } from "./spots/sky-lagoon-ticket";
import { blueLagoonComfortSpot } from "./spots/blue-lagoon-comfort";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { keflavikAirportSpot } from "./spots/keflavik-airport";
import { baejarinsBeztuSpot } from "./spots/baejarins-beztu";
import { kirkjubaejarklausturSpot } from "./spots/kirkjubaejarklaustur";
import { oldHarbourSpot } from "./spots/old-harbour";
import { skaftafellSpot } from "./spots/skaftafell";
import { vatnajokullSpot } from "./spots/vatnajokull";
import { vikSpot } from "./spots/vik";
import { laugavegurSpot } from "./spots/laugavegur";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisdrangarSpot } from "./spots/reynisdrangar";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandSelfDriveSummer4Day2Highlights: TripAttraction[] = [
    seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
    reynisdrangarSpot,
    vikSpot,
];

export const icelandSelfDriveSummer4Day2OptionalActivities: TripAttraction[] = [
    planeWreckShuttleSpot,solheimajokullGlacierHikingSpot,
    vikHorseRidingSpot,
    reynisfjaraAtvSpot,katlaIceCaveSpot,vikLavaShowSpot,
];

export const icelandSelfDriveSummer4Day3Highlights: TripAttraction[] = [
    vatnajokullSpot,
    skaftafellSpot,jokulsarlonSpot,
    diamondBeachSpot,
    kirkjubaejarklausturSpot,
];

export const icelandSelfDriveSummer4Day3OptionalActivities: TripAttraction[] = [
    skaftafellGlacierHikingSpot,vatnajokullCrystalPalaceSpot,
];

export const icelandSelfDriveSummer4Day4Highlights: TripAttraction[] = [
    reykjavikSpot,
    keflavikAirportSpot,laugavegurSpot,
    baejarinsBeztuSpot,oldHarbourSpot,
];

export const icelandSelfDriveSummer4Day4OptionalActivities: TripAttraction[] = [
    perlanMuseumSpot,flyoverIcelandSpot,
    reykjavikLavaShowSpot,
    reykjavikWhaleWatchingSpot,skyLagoonTicketSpot,blueLagoonComfortSpot,
];
