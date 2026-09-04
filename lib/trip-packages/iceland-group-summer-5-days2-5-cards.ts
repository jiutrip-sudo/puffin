import type { TripAttraction } from "./types";
import { blueLagoonComfortTransferSpot } from "./spots/blue-lagoon-comfort-transfer";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { solheimajokullGlacierHikingSpot } from "./spots/solheimajokull-glacier-hiking";
import { borgarnesSpot } from "./spots/borgarnes";
import { keflavikAirportSpot } from "./spots/keflavik-airport";
import { djupalonssandurSpot } from "./spots/djupalonssandur";
import { eldhraunSpot } from "./spots/eldhraun";
import { ytriTungaSpot } from "./spots/ytri-tunga";
import { vatnajokullSpot } from "./spots/vatnajokull";
import { arnarstapiSpot } from "./spots/arnarstapi";
import { dyrholaeySpot } from "./spots/dyrholaey";
import { budakirkjaSpot } from "./spots/budakirkja";
import { gljufrabuiSpot } from "./spots/gljufabui";
import { vikSpot } from "./spots/vik";
import { kirkjufellSpot } from "./spots/kirkjufell";
import { diamondBeachSpot } from "./spots/diamond-beach";
import { jokulsarlonSpot } from "./spots/jokulsarlon";
import { reynisdrangarSpot } from "./spots/reynisdrangar";
import { reynisfjaraSpot } from "./spots/reynisfjara";
import { skogafossSpot } from "./spots/skogafoss";
import { seljalandsfossSpot } from "./spots/seljalandsfoss";


export const icelandGroupSummer5Day2Highlights: TripAttraction[] = [
    seljalandsfossSpot,
    skogafossSpot,
    gljufrabuiSpot,
    solheimajokullGlacierHikingSpot,reynisfjaraSpot,
    reynisdrangarSpot,
    dyrholaeySpot,
];

export const icelandGroupSummer5Day2OptionalActivities: TripAttraction[] = [

];

export const icelandGroupSummer5Day3Highlights: TripAttraction[] = [
    vatnajokullSpot,jokulsarlonSpot,
    diamondBeachSpot,
    eldhraunSpot,vikSpot,
];

export const icelandGroupSummer5Day3OptionalActivities: TripAttraction[] = [

];

export const icelandGroupSummer5Day4Highlights: TripAttraction[] = [
    kirkjufellSpot,
    djupalonssandurSpot,arnarstapiSpot,budakirkjaSpot,
    ytriTungaSpot,
    borgarnesSpot,
];

export const icelandGroupSummer5Day4OptionalActivities: TripAttraction[] = [

];

export const icelandGroupSummer5Day5Highlights: TripAttraction[] = [
    keflavikAirportSpot,
];

export const icelandGroupSummer5Day5OptionalActivities: TripAttraction[] = [
    flyoverIcelandSpot,
    reykjavikLavaShowSpot,
    perlanMuseumSpot,
    blueLagoonComfortTransferSpot,
];
