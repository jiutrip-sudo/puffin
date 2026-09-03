import type { LegalIntro, LegalSection } from "@/lib/legal/types";

type LegalDocumentContentProps = {
  intro: LegalIntro;
  sections: LegalSection[];
};

export function LegalDocumentContent({
  intro,
  sections,
}: LegalDocumentContentProps) {
  return (
    <article className="legal-terms">
      <header id="intro" className="legal-terms__header">
        <h1 className="legal-terms__title">{intro.title}</h1>
        <p className="legal-terms__meta">{intro.effectiveLabel}</p>
        <p className="legal-terms__intro">{intro.companyParagraph}</p>
      </header>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="legal-terms__section"
        >
          <h2 className="legal-terms__section-title">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="legal-terms__paragraph">
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className="legal-terms__list">
              {section.bullets.map((item) => (
                <li key={item.slice(0, 40)}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </article>
  );
}
