import type { TripAttraction } from "./types";
import { skyLagoonTransferSpot } from "./spots/sky-lagoon-transfer";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { skyLagoonSpot } from "./spots/sky-lagoon";
import { tjorninSpot } from "./spots/tjornin";
import { sunVoyagerSpot } from "./spots/sun-voyager";
import { harpaSpot } from "./spots/harpa";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandGroupSummer7Day1Highlights: TripAttraction[] = [
    reykjavikSpot,
    skyLagoonSpot,hallgrimskirkjaSpot,
    harpaSpot,
    sunVoyagerSpot,
    tjorninSpot,
];

export const icelandGroupSummer7Day1OptionalActivities: TripAttraction[] = [
    flyoverIcelandSpot,
    reykjavikLavaShowSpot,
    perlanMuseumSpot,
    skyLagoonTransferSpot,
];
