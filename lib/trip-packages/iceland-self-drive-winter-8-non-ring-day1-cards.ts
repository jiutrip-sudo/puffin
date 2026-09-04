import type { TripAttraction } from "./types";
import { auroraMiniBusSpot } from "./spots/aurora-mini-bus";
import { auroraBoatTourSpot } from "./spots/aurora-boat-tour";
import { skyLagoonTicketSpot } from "./spots/sky-lagoon-ticket";
import { blueLagoonComfortSpot } from "./spots/blue-lagoon-comfort";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { SPOTS } from "./spots";
import { IMG } from "./spots/_img";

export const icelandSelfDriveWinter8NonRingDay1Highlights: TripAttraction[] = [
  SPOTS.reykjavik,
  SPOTS.hallgrimskirkja,
  SPOTS.sunVoyager,
  SPOTS.harpa,
  SPOTS.phallologicalMuseum,
  SPOTS.laugavegur,
];

export const icelandSelfDriveWinter8NonRingDay1OptionalActivities: TripAttraction[] = [
    auroraBoatTourSpot,skyLagoonTicketSpot,reykjavikLavaShowSpot,flyoverIcelandSpot,
    perlanMuseumSpot,
    auroraMiniBusSpot,blueLagoonComfortSpot,
];
