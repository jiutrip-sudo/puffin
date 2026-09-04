import type { TripAttraction } from "./types";
import { skyLagoonTransferSpot } from "./spots/sky-lagoon-transfer";
import { reykjavikSeaAnglingSpot } from "./spots/reykjavik-sea-angling";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { skyLagoonSpot } from "./spots/sky-lagoon";
import { rainbowStreetSpot } from "./spots/rainbow-street";
import { tjorninSpot } from "./spots/tjornin";
import { laugavegurSpot } from "./spots/laugavegur";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandGroupSummer10Day1Highlights: TripAttraction[] = [
    reykjavikSpot,
    skyLagoonSpot,hallgrimskirkjaSpot,
    laugavegurSpot,
    rainbowStreetSpot,tjorninSpot,
];

export const icelandGroupSummer10Day1OptionalActivities: TripAttraction[] = [
    skyLagoonTransferSpot,reykjavikSeaAnglingSpot,reykjavikLavaShowSpot,flyoverIcelandSpot,
    perlanMuseumSpot,
];
