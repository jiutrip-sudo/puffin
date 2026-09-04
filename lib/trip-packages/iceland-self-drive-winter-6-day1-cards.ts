import type { TripAttraction } from "./types";
import { reykjavikSeaAnglingSpot } from "./spots/reykjavik-sea-angling";
import { reykjavikWhaleWatchingSpot } from "./spots/reykjavik-whale-watching";
import { skyLagoonTicketSpot } from "./spots/sky-lagoon-ticket";
import { blueLagoonComfortSpot } from "./spots/blue-lagoon-comfort";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { baejarinsBeztuSpot } from "./spots/baejarins-beztu";
import { rainbowStreetSpot } from "./spots/rainbow-street";
import { phallologicalMuseumSpot } from "./spots/phallological-museum";
import { laugavegurSpot } from "./spots/laugavegur";
import { sunVoyagerSpot } from "./spots/sun-voyager";
import { harpaSpot } from "./spots/harpa";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandSelfDriveWinter6Day1Highlights: TripAttraction[] = [
    reykjavikSpot,
    hallgrimskirkjaSpot,
    laugavegurSpot,
    rainbowStreetSpot,harpaSpot,
    sunVoyagerSpot,
    baejarinsBeztuSpot,phallologicalMuseumSpot,
];

export const icelandSelfDriveWinter6Day1OptionalActivities: TripAttraction[] = [
    skyLagoonTicketSpot,blueLagoonComfortSpot,
    reykjavikWhaleWatchingSpot,
    reykjavikSeaAnglingSpot,flyoverIcelandSpot,
    reykjavikLavaShowSpot,
    perlanMuseumSpot,
];
