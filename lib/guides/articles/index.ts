import { guideArticle as groupTourVsSelfDrive } from "./group-tour-vs-self-drive";
import { guideArticle as howToBookAndPay } from "./how-to-book-and-pay";
import { guideArticle as icelandWinterDrivingPrep } from "./iceland-winter-driving-prep";
import { guideArticle as icelandWinterSelfDriveDays } from "./iceland-winter-self-drive-days";
import { guideArticle as northernLightsSeason } from "./northern-lights-season";
import { guideArticle as summerRingRoadDays } from "./summer-ring-road-days";

import type { GuideArticle } from "../types";

export const GUIDE_ARTICLE_SOURCES: GuideArticle[] = [
  groupTourVsSelfDrive,
  howToBookAndPay,
  icelandWinterDrivingPrep,
  icelandWinterSelfDriveDays,
  northernLightsSeason,
  summerRingRoadDays,
];
