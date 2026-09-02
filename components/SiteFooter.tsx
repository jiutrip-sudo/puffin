import type { SiteLocale } from "@/lib/site-locale";
import { getLocalizedCompanyInfo } from "@/lib/i18n/company";
import { t } from "@/lib/i18n/messages";

type InfoItem = {
  label: string;
  value: string;
  href?: string;
};

const WIDE_FIELD_LABELS = new Set(["地址", "信箱"]);

function CompactFooterInfo({ locale }: { locale: SiteLocale }) {
  const companyInfo = getLocalizedCompanyInfo(locale);
  const [contact, phone, fax, email, address] = companyInfo.contact;

  return (
    <section className="site-footer-panel rounded-xl px-3 py-2.5 md:hidden">
      <dl className="grid grid-cols-2 gap-x-3 gap-y-1">
        {companyInfo.registration.map((item) => (
          <div key={item.label} className="flex min-w-0 items-baseline gap-1">
            <dt className="shrink-0 text-[10px] font-medium text-white/50">
              {item.label}
            </dt>
            <dd className="min-w-0 text-[10px] leading-tight text-white/88">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
      <h3 className="font-display mt-2.5 mb-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/50">
        {t("footer.contact", locale)}
      </h3>
      <dl className="grid grid-cols-2 gap-x-3 gap-y-1">
        {[contact, phone, fax, email, address].filter(Boolean).map((item) => {
          const isWide = WIDE_FIELD_LABELS.has(item!.label);

          return (
            <div
              key={item!.label}
              className={`flex min-w-0 items-baseline gap-1 ${isWide ? "col-span-2" : ""}`}
            >
              <dt className="shrink-0 text-[10px] font-medium text-white/50">
                {item!.label}
              </dt>
              <dd className="min-w-0 text-[10px] leading-tight text-white/88">
                {item!.href ? (
                  <a
                    href={item!.href}
                    className="break-all transition-colors hover:text-primary-light"
                  >
                    {item!.value}
                  </a>
                ) : (
                  <span className="break-words">{item!.value}</span>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}

function InfoColumn({
  title,
  items,
}: {
  title?: string;
  items: ReadonlyArray<InfoItem>;
}) {
  return (
    <div className="min-w-0">
      {title ? (
        <h3 className="font-display mb-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/50">
          {title}
        </h3>
      ) : null}
      <dl className="grid grid-cols-2 gap-x-3 gap-y-0.5">
        {items.map((item) => {
          const isWide = WIDE_FIELD_LABELS.has(item.label) || item.label === "信箱";

          return (
            <div
              key={item.label}
              className={`flex min-w-0 items-baseline gap-1 ${isWide ? "col-span-2" : ""}`}
            >
              <dt className="shrink-0 text-[10px] font-medium text-white/50">
                {item.label}
              </dt>
              <dd className="min-w-0 text-[10px] leading-tight text-white/88">
                {item.href ? (
                  <a
                    href={item.href}
                    className="break-all transition-colors hover:text-primary-light"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="break-words">{item.value}</span>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

export function SiteFooter({ locale }: { locale: SiteLocale }) {
  const companyInfo = getLocalizedCompanyInfo(locale);

  return (
    <footer className="site-footer w-full px-4 py-4 sm:px-5 sm:py-8 md:px-8 md:py-2.5">
      <div className="mx-auto max-w-7xl">
        <CompactFooterInfo locale={locale} />

        <section className="site-footer-panel hidden rounded-lg px-3 py-2 md:block">
          <div className="grid grid-cols-2 gap-x-5 gap-y-0">
            <InfoColumn items={companyInfo.registration} />
            <InfoColumn
              title={t("footer.contact", locale)}
              items={companyInfo.contact}
            />
          </div>
        </section>

        <p className="mt-2 text-center text-[8px] tracking-wide text-white/35 sm:mt-5 sm:text-[10px] md:mt-1.5">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
