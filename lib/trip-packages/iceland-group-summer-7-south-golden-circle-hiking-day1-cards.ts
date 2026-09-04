import type { TripAttraction } from "./types";
import { skyLagoonTransferSpot } from "./spots/sky-lagoon-transfer";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { rainbowStreetSpot } from "./spots/rainbow-street";
import { tjorninSpot } from "./spots/tjornin";
import { laugavegurSpot } from "./spots/laugavegur";
import { harpaSpot } from "./spots/harpa";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandGroupSummer7SouthGoldenCircleHikingDay1Highlights: TripAttraction[] = [
    reykjavikSpot,
    hallgrimskirkjaSpot,
    laugavegurSpot,
    rainbowStreetSpot,tjorninSpot,harpaSpot,
];

export const icelandGroupSummer7SouthGoldenCircleHikingDay1OptionalActivities: TripAttraction[] = [
    flyoverIcelandSpot,
    reykjavikLavaShowSpot,
    perlanMuseumSpot,
    skyLagoonTransferSpot,
];
