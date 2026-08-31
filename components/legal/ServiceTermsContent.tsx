import {
  DAY_TOUR_CANCELLATION_ROWS,
  SELF_DRIVE_CANCELLATION_ROWS,
  SERVICE_TERMS_INTRO,
  SERVICE_TERMS_SECTIONS,
} from "@/lib/legal/service-terms-content";

function CancellationTable({
  rows,
}: {
  rows: Array<{ period: string; refund: string }>;
}) {
  return (
    <div className="legal-terms__table-wrap">
      <table className="legal-terms__table">
        <thead>
          <tr>
            <th>申請取消日期</th>
            <th>退款金額</th>
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

export function ServiceTermsContent() {
  return (
    <article className="legal-terms">
      <header id="intro" className="legal-terms__header">
        <h1 className="legal-terms__title">{SERVICE_TERMS_INTRO.title}</h1>
        <p className="legal-terms__meta">{SERVICE_TERMS_INTRO.effectiveLabel}</p>
        <p className="legal-terms__intro">{SERVICE_TERMS_INTRO.companyParagraph}</p>
      </header>

      {SERVICE_TERMS_SECTIONS.map((section) => (
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
            <CancellationTable rows={SELF_DRIVE_CANCELLATION_ROWS} />
          )}
          {section.id === "refund-day-tour" && (
            <CancellationTable rows={DAY_TOUR_CANCELLATION_ROWS} />
          )}
        </section>
      ))}
    </article>
  );
}
