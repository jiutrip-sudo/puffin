import type { TripAttraction } from "./types";
import { laugarasLagoonSpot } from "./spots/laugaras-lagoon";
import { vikHorseRidingSpot } from "./spots/vik-horse-riding";
import { planeWreckShuttleSpot } from "./spots/plane-wreck-shuttle";
import { skaftafellGlacierHikingSpot } from "./spots/skaftafell-glacier-hiking";
import { reykjavikWhaleWatchingSpot } from "./spots/reykjavik-whale-watching";
import { solheimajokullGlacierHikingSpot } from "./spots/solheimajokull-glacier-hiking";
import { vatnajokullCrystalPalaceSpot } from "./spots/vatnajokull-crystal-palace";
import { fontanaSpot } from "./spots/fontana";
import { snowmobileLangjokullSpot } from "./spots/snowmobile-langjokull";
import { katlaIceCaveSpot } from "./spots/katla-ice-cave";
import { vikLavaShowSpot } from "./spots/vik-lava-show";
import { skyLagoonTicketSpot } from "./spots/sky-lagoon-ticket";
import { blueLagoonComfortSpot } from "./spots/blue-lagoon-comfort";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { silfraSnorkelingSelfDriveSpot } from "./spots/silfra-snorkeling-self-drive";
import { fridheimarSpot } from "./spots/fridheimar";
import { keflavikAirportSpot } from "./spots/keflavik-airport";
import { kirkjubaejarklausturSpot } from "./spots/kirkjubaejarklaustur";
import { skaftafellSpot } from "./spots/skaftafell";
import { keridSpot } from "./spots/kerid";
import { vatnajokullSpot } from "./spots/vatnajokull";
import { vikSpot } from "./spots/vik";
import { gullfossSpot } from "./spots/gullfoss";
import { geysirSpot } from "./spots/geysir";
import { thingvellirSpot } from "./spots/thingvellir";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisdrangarSpot } from "./spots/reynisdrangar";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandSelfDriveSummer5Day2Highlights: TripAttraction[] = [
    seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
    reynisdrangarSpot,
    vikSpot,
];

export const icelandSelfDriveSummer5Day2OptionalActivities: TripAttraction[] = [
    planeWreckShuttleSpot,katlaIceCaveSpot,
    solheimajokullGlacierHikingSpot,vikLavaShowSpot,
    vikHorseRidingSpot,
];

export const icelandSelfDriveSummer5Day3Highlights: TripAttraction[] = [
    vatnajokullSpot,
    skaftafellSpot,jokulsarlonSpot,
    diamondBeachSpot,
    kirkjubaejarklausturSpot,
];

export const icelandSelfDriveSummer5Day3OptionalActivities: TripAttraction[] = [
    vatnajokullCrystalPalaceSpot,
    skaftafellGlacierHikingSpot,
];

export const icelandSelfDriveSummer5Day4Highlights: TripAttraction[] = [
    thingvellirSpot,
    geysirSpot,
    gullfossSpot,
    fridheimarSpot,keridSpot,
];

export const icelandSelfDriveSummer5Day4OptionalActivities: TripAttraction[] = [
    silfraSnorkelingSelfDriveSpot,
    snowmobileLangjokullSpot,
    fontanaSpot,
    laugarasLagoonSpot,
];

export const icelandSelfDriveSummer5Day5Highlights: TripAttraction[] = [
    reykjavikSpot,
    keflavikAirportSpot,
];

export const icelandSelfDriveSummer5Day5OptionalActivities: TripAttraction[] = [
    reykjavikLavaShowSpot,flyoverIcelandSpot,
    reykjavikWhaleWatchingSpot,perlanMuseumSpot,
    skyLagoonTicketSpot,blueLagoonComfortSpot,
];
