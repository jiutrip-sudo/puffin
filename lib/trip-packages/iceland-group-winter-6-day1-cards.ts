import type { TripAttraction } from "./types";
import { auroraSuperJeepSpot } from "./spots/aurora-super-jeep";
import { auroraMiniBusSpot } from "./spots/aurora-mini-bus";
import { auroraBoatTourSpot } from "./spots/aurora-boat-tour";
import { reykjavikWhaleWatchingSpot } from "./spots/reykjavik-whale-watching";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { skyLagoonSpot } from "./spots/sky-lagoon";
import { tjorninSpot } from "./spots/tjornin";
import { sunVoyagerSpot } from "./spots/sun-voyager";
import { harpaSpot } from "./spots/harpa";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandGroupWinter6Day1Highlights: TripAttraction[] = [
    reykjavikSpot,
    skyLagoonSpot,hallgrimskirkjaSpot,
    harpaSpot,
    sunVoyagerSpot,
    tjorninSpot,
];

export const icelandGroupWinter6Day1OptionalActivities: TripAttraction[] = [
    auroraMiniBusSpot,auroraBoatTourSpot,
    auroraSuperJeepSpot,reykjavikWhaleWatchingSpot,reykjavikLavaShowSpot,flyoverIcelandSpot,
    perlanMuseumSpot,
];
