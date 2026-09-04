import type { TripAttraction } from "./types";
import { auroraPremiumMinibusSpot } from "./spots/aurora-premium-minibus";
import { reykjavikWhaleWatchingSpot } from "./spots/reykjavik-whale-watching";
import { skyLagoonTicketSpot } from "./spots/sky-lagoon-ticket";
import { blueLagoonComfortSpot } from "./spots/blue-lagoon-comfort";
import { perlanMuseumSpot } from "./spots/perlan-museum";
import { reykjavikLavaShowSpot } from "./spots/reykjavik-lava-show";
import { flyoverIcelandSpot } from "./spots/flyover-iceland";
import { rainbowStreetSpot } from "./spots/rainbow-street";
import { tjorninSpot } from "./spots/tjornin";
import { hallgrimskirkjaSpot } from "./spots/hallgrimskirkja";
import { reykjavikSpot } from "./spots/reykjavik";


export const icelandSelfDriveWinter9NonRingDay1Highlights: TripAttraction[] = [
    reykjavikSpot,
    rainbowStreetSpot,hallgrimskirkjaSpot,
    tjorninSpot,
];

export const icelandSelfDriveWinter9NonRingDay1OptionalActivities: TripAttraction[] = [
    skyLagoonTicketSpot,
    auroraPremiumMinibusSpot,reykjavikWhaleWatchingSpot,flyoverIcelandSpot,
    perlanMuseumSpot,reykjavikLavaShowSpot,
    blueLagoonComfortSpot,
];
