import type { ServiceTermsSection } from "@/lib/legal/service-terms-content";

function CancellationTable({
  rows,
  headers,
}: {
  rows: Array<{ period: string; refund: string }>;
  headers: [string, string];
}) {
  return (
    <div className="legal-terms__table-wrap">
      <table className="legal-terms__table">
        <thead>
          <tr>
            <th>{headers[0]}</th>
            <th>{headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.period}>
              <td>{row.period}</td>
              <td>{row.refund}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type ServiceTermsContentProps = {
  intro: {
    title: string;
    effectiveLabel: string;
    companyParagraph: string;
  };
  sections: ServiceTermsSection[];
  selfDriveCancellationRows: Array<{ period: string; refund: string }>;
  dayTourCancellationRows: Array<{ period: string; refund: string }>;
  tableHeaders: [string, string];
};

export function ServiceTermsContent({
  intro,
  sections,
  selfDriveCancellationRows,
  dayTourCancellationRows,
  tableHeaders,
}: ServiceTermsContentProps) {
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
          {section.id === "refund-self-drive" && (
            <CancellationTable
              rows={selfDriveCancellationRows}
              headers={tableHeaders}
            />
          )}
          {section.id === "refund-day-tour" && (
            <CancellationTable
              rows={dayTourCancellationRows}
              headers={tableHeaders}
            />
          )}
        </section>
      ))}
    </article>
  );
}
