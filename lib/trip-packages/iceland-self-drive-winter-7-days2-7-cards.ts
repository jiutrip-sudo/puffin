import type { TripAttraction } from "./types";
import { hveragerdiHorseRidingSpot } from "./spots/hveragerdi-horse-riding";
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
import { vatnshellirCaveSpot } from "./spots/vatnshellir-cave";
import { silfraSnorkelingSelfDriveSpot } from "./spots/silfra-snorkeling-self-drive";
import { fjallsarlonSpot } from "./spots/fjallsarlon";
import { fridheimarSpot } from "./spots/fridheimar";
import { stykkisholmurSpot } from "./spots/stykkisholmur";
import { kirkjufellsfossSpot } from "./spots/kirkjufellsfoss";
import { keflavikAirportSpot } from "./spots/keflavik-airport";
import { eldhraunSpot } from "./spots/eldhraun";
import { ytriTungaSpot } from "./spots/ytri-tunga";
import { vatnajokullSpot } from "./spots/vatnajokull";
import { arnarstapiSpot } from "./spots/arnarstapi";
import { dyrholaeySpot } from "./spots/dyrholaey";
import { planeWreckSpot } from "./spots/plane-wreck";
import { kirkjufellSpot } from "./spots/kirkjufell";
import { gullfossSpot } from "./spots/gullfoss";
import { geysirSpot } from "./spots/geysir";
import { thingvellirSpot } from "./spots/thingvellir";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandSelfDriveWinter7Day2Highlights: TripAttraction[] = [
    seljalandsfossSpot,
    skogafossSpot,
    reynisfjaraSpot,
];

export const icelandSelfDriveWinter7Day2OptionalActivities: TripAttraction[] = [
    solheimajokullGlacierHikingSpot,
    hveragerdiHorseRidingSpot,katlaIceCaveSpot,vikLavaShowSpot,
    vikHorseRidingSpot,planeWreckShuttleSpot,
];

export const icelandSelfDriveWinter7Day3Highlights: TripAttraction[] = [
    jokulsarlonSpot,
    diamondBeachSpot,
    vatnajokullSpot,
];

export const icelandSelfDriveWinter7Day3OptionalActivities: TripAttraction[] = [
    vatnajokullCrystalPalaceSpot,
    skaftafellGlacierHikingSpot,
];

export const icelandSelfDriveWinter7Day4Highlights: TripAttraction[] = [
    eldhraunSpot,
    fjallsarlonSpot,dyrholaeySpot,planeWreckSpot,
];

export const icelandSelfDriveWinter7Day4OptionalActivities: TripAttraction[] = [
    katlaIceCaveSpot,
    planeWreckShuttleSpot,
    vikHorseRidingSpot,vikLavaShowSpot,
    solheimajokullGlacierHikingSpot,
];

export const icelandSelfDriveWinter7Day5Highlights: TripAttraction[] = [
    thingvellirSpot,
    geysirSpot,
    gullfossSpot,
    fridheimarSpot,
];

export const icelandSelfDriveWinter7Day5OptionalActivities: TripAttraction[] = [
    snowmobileLangjokullSpot,silfraSnorkelingSelfDriveSpot,
    fontanaSpot,
    laugarasLagoonSpot,
];

export const icelandSelfDriveWinter7Day6Highlights: TripAttraction[] = [
    stykkisholmurSpot,arnarstapiSpot,kirkjufellSpot,
    kirkjufellsfossSpot,ytriTungaSpot,
];

export const icelandSelfDriveWinter7Day6OptionalActivities: TripAttraction[] = [
    vatnshellirCaveSpot,
];

export const icelandSelfDriveWinter7Day7Highlights: TripAttraction[] = [
    reykjavikSpot,
    keflavikAirportSpot,
];

export const icelandSelfDriveWinter7Day7OptionalActivities: TripAttraction[] = [
    reykjavikLavaShowSpot,
    blueLagoonComfortSpot,perlanMuseumSpot,flyoverIcelandSpot,
    skyLagoonTicketSpot,
    reykjavikWhaleWatchingSpot,
];
