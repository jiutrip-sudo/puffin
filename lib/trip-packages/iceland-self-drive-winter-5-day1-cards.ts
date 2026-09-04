import type { TripAttraction } from "./types";
import { auroraMiniBusSpot } from "./spots/aurora-mini-bus";
import { reykjavikWhaleWatchingSpot } from "./spots/reykjavik-whale-watching";
import { skyLagoonTicketSpot } from "./spots/sky-lagoon-ticket";
import { blueLagoonComfortSpot } from "./spots/blue-lagoon-comfort";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { rainbowStreetSpot } from "./spots/rainbow-street";
import { phallologicalMuseumSpot } from "./spots/phallological-museum";
import { sunVoyagerSpot } from "./spots/sun-voyager";
import { harpaSpot } from "./spots/harpa";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandSelfDriveWinter5Day1Highlights: TripAttraction[] = [
    reykjavikSpot,
    hallgrimskirkjaSpot,
    harpaSpot,
    sunVoyagerSpot,
    rainbowStreetSpot,phallologicalMuseumSpot,
];

export const icelandSelfDriveWinter5Day1OptionalActivities: TripAttraction[] = [
    skyLagoonTicketSpot,
    auroraMiniBusSpot,reykjavikWhaleWatchingSpot,blueLagoonComfortSpot,perlanMuseumSpot,flyoverIcelandSpot,
    reykjavikLavaShowSpot,
];
