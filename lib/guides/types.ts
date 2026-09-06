import type { GuideJourneyStageId } from "./journey-stages";

export type GuideFeaturedTrip = {
  href: string;
  title: string;
  blurb: string;
};

export type GuideSectionImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type GuideArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  image?: GuideSectionImage;
};

export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  journeyStage: GuideJourneyStageId;
  coverImage: string;
  publishedAt: string;
  /** 攻略索引「入門必讀」區塊 */
  featured?: boolean;
  featuredTrip: GuideFeaturedTrip;
  sections: GuideArticleSection[];
};

/** ChatGPT 重寫時可修改的欄位（其餘由 import 腳本從現有文章保留） */
export type GuideRewritePayload = Pick<
  GuideArticle,
  "title" | "description" | "category" | "featuredTrip" | "sections"
>;
