import type { TripAttraction } from "./types";
import { auroraSuperJeepSpot } from "./spots/aurora-super-jeep";
import { auroraMiniBusSpot } from "./spots/aurora-mini-bus";
import { auroraBoatTourSpot } from "./spots/aurora-boat-tour";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { skyLagoonSpot } from "./spots/sky-lagoon";
import { rainbowStreetSpot } from "./spots/rainbow-street";
import { tjorninSpot } from "./spots/tjornin";
import { harpaSpot } from "./spots/harpa";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandGroupWinter9NonRingDay1Highlights: TripAttraction[] = [
    reykjavikSpot,
    skyLagoonSpot,hallgrimskirkjaSpot,
    rainbowStreetSpot,harpaSpot,
    tjorninSpot,
];

export const icelandGroupWinter9NonRingDay1OptionalActivities: TripAttraction[] = [
    auroraMiniBusSpot,auroraBoatTourSpot,
    auroraSuperJeepSpot,flyoverIcelandSpot,
    reykjavikLavaShowSpot,
    perlanMuseumSpot,
];
