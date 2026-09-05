import type { GuideArticle } from "./registry";
import { compareGuideJourneyStage } from "./journey-stages";

export function sortArticlesByJourneyStage(articles: GuideArticle[]): GuideArticle[] {
  return [...articles].sort((a, b) =>
    compareGuideJourneyStage(a.journeyStage, b.journeyStage),
  );
}
