import type { TripAttraction } from "./types";
import { auroraBoatTourSpot } from "./spots/aurora-boat-tour";
import { skyLagoonTicketSpot } from "./spots/sky-lagoon-ticket";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { oldHarbourSpot } from "./spots/old-harbour";
import { sunVoyagerSpot } from "./spots/sun-voyager";
import { harpaSpot } from "./spots/harpa";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandSelfDriveWinter10NonRingDay1Highlights: TripAttraction[] = [
    reykjavikSpot,
    oldHarbourSpot,hallgrimskirkjaSpot,
    sunVoyagerSpot,harpaSpot,
];

export const icelandSelfDriveWinter10NonRingDay1OptionalActivities: TripAttraction[] = [
    skyLagoonTicketSpot,
    auroraBoatTourSpot,reykjavikLavaShowSpot,
    perlanMuseumSpot,flyoverIcelandSpot,
];
