import type { TripAttraction } from "./types";
import { skyLagoonTransferSpot } from "./spots/sky-lagoon-transfer";
import { auroraBoatTourSpot } from "./spots/aurora-boat-tour";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { skyLagoonSpot } from "./spots/sky-lagoon";
import { tjorninSpot } from "./spots/tjornin";
import { laugavegurSpot } from "./spots/laugavegur";
import { sunVoyagerSpot } from "./spots/sun-voyager";
import { harpaSpot } from "./spots/harpa";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandGroupWinter8Day1Highlights: TripAttraction[] = [
    reykjavikSpot,
    skyLagoonSpot,hallgrimskirkjaSpot,
    laugavegurSpot,harpaSpot,
    sunVoyagerSpot,
    tjorninSpot,
];

export const icelandGroupWinter8Day1OptionalActivities: TripAttraction[] = [
    reykjavikLavaShowSpot,flyoverIcelandSpot,
    auroraBoatTourSpot,
    skyLagoonTransferSpot,
];
