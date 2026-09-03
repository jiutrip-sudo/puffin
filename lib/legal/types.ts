export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalIntro = {
  title: string;
  effectiveLabel: string;
  companyParagraph: string;
};
