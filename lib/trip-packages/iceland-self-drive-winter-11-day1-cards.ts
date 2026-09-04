import type { TripAttraction } from "./types";
import { auroraBoatTourSpot } from "./spots/aurora-boat-tour";
import { skyLagoonTicketSpot } from "./spots/sky-lagoon-ticket";
import { blueLagoonComfortSpot } from "./spots/blue-lagoon-comfort";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { skyLagoonSpot } from "./spots/sky-lagoon";
import { rainbowStreetSpot } from "./spots/rainbow-street";
import { tjorninSpot } from "./spots/tjornin";
import { sunVoyagerSpot } from "./spots/sun-voyager";
import { harpaSpot } from "./spots/harpa";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandSelfDriveWinter11Day1Highlights: TripAttraction[] = [
    reykjavikSpot,
    skyLagoonSpot,hallgrimskirkjaSpot,
    rainbowStreetSpot,harpaSpot,
    tjorninSpot,sunVoyagerSpot,
];

export const icelandSelfDriveWinter11Day1OptionalActivities: TripAttraction[] = [
    skyLagoonTicketSpot,
    auroraBoatTourSpot,blueLagoonComfortSpot,flyoverIcelandSpot,
    reykjavikLavaShowSpot,
    perlanMuseumSpot,
];
