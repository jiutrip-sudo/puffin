import type { TripAttraction } from "./types";
import { auroraBoatTourSpot } from "./spots/aurora-boat-tour";
import { reykjavikWhaleWatchingSpot } from "./spots/reykjavik-whale-watching";
import { skyLagoonTicketSpot } from "./spots/sky-lagoon-ticket";
import { blueLagoonComfortSpot } from "./spots/blue-lagoon-comfort";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { oldHarbourSpot } from "./spots/old-harbour";
import { rainbowStreetSpot } from "./spots/rainbow-street";
import { tjorninSpot } from "./spots/tjornin";
import { SPOTS } from "./spots";
import { IMG } from "./spots/_img";

export const icelandSelfDriveWinter8Day1Highlights: TripAttraction[] = [
  SPOTS.reykjavik,
  SPOTS.hallgrimskirkja,
  SPOTS.sunVoyager,
  SPOTS.harpa,
    oldHarbourSpot,rainbowStreetSpot,tjorninSpot,
];

export const icelandSelfDriveWinter8Day1OptionalActivities: TripAttraction[] = [
    blueLagoonComfortSpot,
    skyLagoonTicketSpot,
    reykjavikWhaleWatchingSpot,
    auroraBoatTourSpot,perlanMuseumSpot,flyoverIcelandSpot,
    reykjavikLavaShowSpot,
];
