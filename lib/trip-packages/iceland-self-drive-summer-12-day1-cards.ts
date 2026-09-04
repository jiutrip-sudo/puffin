import type { TripAttraction } from "./types";
import { reykjavikSeaAnglingSpot } from "./spots/reykjavik-sea-angling";
import { reykjavikWhaleWatchingSpot } from "./spots/reykjavik-whale-watching";
import { skyLagoonTicketSpot } from "./spots/sky-lagoon-ticket";
import { blueLagoonComfortSpot } from "./spots/blue-lagoon-comfort";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { rainbowStreetSpot } from "./spots/rainbow-street";
import { tjorninSpot } from "./spots/tjornin";
import { laugavegurSpot } from "./spots/laugavegur";
import { harpaSpot } from "./spots/harpa";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandSelfDriveSummer12Day1Highlights: TripAttraction[] = [
    reykjavikSpot,
    hallgrimskirkjaSpot,
    laugavegurSpot,
    rainbowStreetSpot,tjorninSpot,harpaSpot,
];

export const icelandSelfDriveSummer12Day1OptionalActivities: TripAttraction[] = [
    skyLagoonTicketSpot,blueLagoonComfortSpot,
    reykjavikWhaleWatchingSpot,
    reykjavikSeaAnglingSpot,flyoverIcelandSpot,
    reykjavikLavaShowSpot,
    perlanMuseumSpot,
];
