import type { TripAttraction } from "./types";
import { geothermalHorseRidingSpot } from "./spots/geothermal-horse-riding";
import { reykjavikSeaAnglingSpot } from "./spots/reykjavik-sea-angling";
import { fjallsarlonBoatSpot } from "./spots/fjallsarlon-boat";
import { jokulsarlonZodiacBoatSpot } from "./spots/jokulsarlon-zodiac-boat";
import { jokulsarlonKayakSpot } from "./spots/jokulsarlon-kayak";
import { jokulsarlonAmphibianBoatSpot } from "./spots/jokulsarlon-amphibian-boat";
import { reynisfjaraAtvSpot } from "./spots/reynisfjara-atv";
import { hvammsvikTicketSpot } from "./spots/hvammsvik-ticket";
import { laugarasLagoonSpot } from "./spots/laugaras-lagoon";
import { vikHorseRidingSpot } from "./spots/vik-horse-riding";
import { planeWreckShuttleSpot } from "./spots/plane-wreck-shuttle";
import { skaftafellGlacierHikingSpot } from "./spots/skaftafell-glacier-hiking";
import { reykjavikWhaleWatchingSpot } from "./spots/reykjavik-whale-watching";
import { solheimajokullGlacierHikingSpot } from "./spots/solheimajokull-glacier-hiking";
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
import { langjokullIceTunnelSpot } from "./spots/langjokull-ice-tunnel";
import { silfraSnorkelingSelfDriveSpot } from "./spots/silfra-snorkeling-self-drive";
import { goldenCircleSpot } from "./spots/golden-circle";
import { fjadrargljufurSpot } from "./spots/fjadrargljufur";
import { fridheimarSpot } from "./spots/fridheimar";
import { stykkisholmurSpot } from "./spots/stykkisholmur";
import { kirkjufellsfossSpot } from "./spots/kirkjufellsfoss";
import { keflavikAirportSpot } from "./spots/keflavik-airport";
import { fossASiduSpot } from "./spots/foss-a-sidu";
import { djupalonssandurSpot } from "./spots/djupalonssandur";
import { eldhraunSpot } from "./spots/eldhraun";
import { ytriTungaSpot } from "./spots/ytri-tunga";
import { keridSpot } from "./spots/kerid";
import { vatnajokullSpot } from "./spots/vatnajokull";
import { arnarstapiSpot } from "./spots/arnarstapi";
import { dyrholaeySpot } from "./spots/dyrholaey";
import { budakirkjaSpot } from "./spots/budakirkja";
import { planeWreckSpot } from "./spots/plane-wreck";
import { vikSpot } from "./spots/vik";
import { kirkjufellSpot } from "./spots/kirkjufell";
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


export const icelandSelfDriveSummer6Day2Highlights: TripAttraction[] = [
    seljalandsfossSpot,
    skogafossSpot,
    planeWreckSpot,
    dyrholaeySpot,reynisfjaraSpot,
    reynisdrangarSpot,
    vikSpot,
];

export const icelandSelfDriveSummer6Day2OptionalActivities: TripAttraction[] = [
    solheimajokullGlacierHikingSpot,
    planeWreckShuttleSpot,
    reynisfjaraAtvSpot,katlaIceCaveSpot,vikLavaShowSpot,
    vikHorseRidingSpot,
];

export const icelandSelfDriveSummer6Day3Highlights: TripAttraction[] = [
    vatnajokullSpot,jokulsarlonSpot,
    diamondBeachSpot,
    eldhraunSpot,
    fjadrargljufurSpot,fossASiduSpot,
];

export const icelandSelfDriveSummer6Day3OptionalActivities: TripAttraction[] = [
    fjallsarlonBoatSpot,jokulsarlonAmphibianBoatSpot,
    jokulsarlonKayakSpot,
    jokulsarlonZodiacBoatSpot,skaftafellGlacierHikingSpot,
];

export const icelandSelfDriveSummer6Day4Highlights: TripAttraction[] = [
    goldenCircleSpot,thingvellirSpot,
    geysirSpot,
    gullfossSpot,
    keridSpot,
    fridheimarSpot,
];

export const icelandSelfDriveSummer6Day4OptionalActivities: TripAttraction[] = [
    snowmobileLangjokullSpot,silfraSnorkelingSelfDriveSpot,
    geothermalHorseRidingSpot,fontanaSpot,
    laugarasLagoonSpot,
];

export const icelandSelfDriveSummer6Day5Highlights: TripAttraction[] = [
    ytriTungaSpot,budakirkjaSpot,
    arnarstapiSpot,
    djupalonssandurSpot,kirkjufellSpot,
    kirkjufellsfossSpot,
    stykkisholmurSpot,
];

export const icelandSelfDriveSummer6Day5OptionalActivities: TripAttraction[] = [
    hvammsvikTicketSpot,vatnshellirCaveSpot,langjokullIceTunnelSpot,
];

export const icelandSelfDriveSummer6Day6Highlights: TripAttraction[] = [
    reykjavikSpot,
    keflavikAirportSpot,
];

export const icelandSelfDriveSummer6Day6OptionalActivities: TripAttraction[] = [
    reykjavikLavaShowSpot,flyoverIcelandSpot,
    perlanMuseumSpot,
    blueLagoonComfortSpot,
    skyLagoonTicketSpot,
    reykjavikSeaAnglingSpot,reykjavikWhaleWatchingSpot,
];
