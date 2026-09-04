import type { TripAttraction } from "./types";
import { auroraBoatTourSpot } from "./spots/aurora-boat-tour";
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


export const icelandSelfDriveWinter4Day1Highlights: TripAttraction[] = [
    reykjavikSpot,
    hallgrimskirkjaSpot,
    harpaSpot,
    sunVoyagerSpot,
    phallologicalMuseumSpot,
    rainbowStreetSpot,
];

export const icelandSelfDriveWinter4Day1OptionalActivities: TripAttraction[] = [
    auroraBoatTourSpot,skyLagoonTicketSpot,blueLagoonComfortSpot,
    reykjavikWhaleWatchingSpot,reykjavikLavaShowSpot,
    perlanMuseumSpot,flyoverIcelandSpot,
];
