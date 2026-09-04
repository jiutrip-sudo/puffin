import type { TripAttraction } from "./types";
import { skyLagoonTransferSpot } from "./spots/sky-lagoon-transfer";
import { auroraBoatTourSpot } from "./spots/aurora-boat-tour";
import { reykjavikWhaleWatchingSpot } from "./spots/reykjavik-whale-watching";
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


export const icelandSelfDriveWinter7Day1Highlights: TripAttraction[] = [
    reykjavikSpot,
    hallgrimskirkjaSpot,
    rainbowStreetSpot,harpaSpot,
    sunVoyagerSpot,
    phallologicalMuseumSpot,
];

export const icelandSelfDriveWinter7Day1OptionalActivities: TripAttraction[] = [
    skyLagoonTransferSpot,blueLagoonComfortSpot,
    auroraBoatTourSpot,reykjavikLavaShowSpot,flyoverIcelandSpot,
    perlanMuseumSpot,
    reykjavikWhaleWatchingSpot,
];
