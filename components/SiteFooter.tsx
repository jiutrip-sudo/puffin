import { LocaleLink } from "@/components/LocaleLink";
import { SiteSocialLinks } from "@/components/SiteSocialLinks";
import type { SiteLocale } from "@/lib/site-locale";
import { getLocalizedBrandName, getLocalizedCompanyInfo } from "@/lib/i18n/company";
import { PRIVACY_POLICY_URL } from "@/lib/legal/privacy-policy-content";
import { t } from "@/lib/i18n/messages";

/** 暫時隱藏 footer 公司登記／聯絡資訊面板 */
const SHOW_FOOTER_COMPANY_INFO = false;

type InfoItem = {
  label: string;
  value: string;
  href?: string;
};

function FooterFieldList({ items }: { items: ReadonlyArray<InfoItem> }) {
  return (
    <dl className="space-y-1">
      {items.map((item) => (
        <div
          key={item.label}
          className="grid grid-cols-[max-content_minmax(0,1fr)] items-baseline gap-x-2.5"
        >
          <dt className="text-[10px] font-medium text-white/50">{item.label}</dt>
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
      ))}
    </dl>
  );
}

function FooterInfoSection({
  title,
  items,
}: {
  title?: string;
  items: ReadonlyArray<InfoItem>;
}) {
  return (
    <section className="min-w-0">
      {title ? (
        <h3 className="font-display mb-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/50">
          {title}
        </h3>
      ) : null}
      <FooterFieldList items={items} />
    </section>
  );
}

export function SiteFooter({ locale }: { locale: SiteLocale }) {
  const companyInfo = SHOW_FOOTER_COMPANY_INFO
    ? getLocalizedCompanyInfo(locale)
    : null;
  const brandName = SHOW_FOOTER_COMPANY_INFO
    ? getLocalizedBrandName(locale)
    : null;

  return (
    <footer className="site-footer w-full px-4 py-4 sm:px-5 sm:py-8 md:px-8 md:py-2.5">
      <div className="mx-auto max-w-7xl">
        {SHOW_FOOTER_COMPANY_INFO && companyInfo && brandName ? (
          <section className="site-footer-panel rounded-xl px-3 py-2.5 md:rounded-lg md:px-3 md:py-2">
            <div className="mb-3 border-b border-white/12 pb-2.5">
              <p className="text-sm font-semibold leading-tight text-white">
                {companyInfo.name}
              </p>
              <p className="font-display mt-0.5 text-[8px] font-medium uppercase tracking-[0.2em] text-white/50">
                {brandName}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              <FooterInfoSection items={companyInfo.registration} />
              <FooterInfoSection
                title={t("footer.contact", locale)}
                items={companyInfo.contact}
              />
            </div>
          </section>
        ) : null}

        <SiteSocialLinks
          locale={locale}
          className={SHOW_FOOTER_COMPANY_INFO ? "mt-3" : ""}
        />

        <div
          className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-white/45 ${SHOW_FOOTER_COMPANY_INFO ? "mt-3" : "mt-2"}`}
        >
          <LocaleLink
            href="/booking/lookup"
            locale={locale}
            className="transition-colors hover:text-primary-light"
          >
            {t("nav.lookupBooking", locale)}
          </LocaleLink>
          <span aria-hidden="true">·</span>
          <LocaleLink
            href="/terms-and-conditions"
            locale={locale}
            className="transition-colors hover:text-primary-light"
          >
            服務條款
          </LocaleLink>
          <span aria-hidden="true">·</span>
          <LocaleLink
            href={PRIVACY_POLICY_URL}
            locale={locale}
            className="transition-colors hover:text-primary-light"
          >
            隱私權政策
          </LocaleLink>
        </div>

        <p className="mt-2 text-center text-[8px] tracking-wide text-white/35 sm:mt-5 sm:text-[10px] md:mt-1.5">
          © {new Date().getFullYear()} Puffin Holiday｜帕芬假期
        </p>
      </div>
    </footer>
  );
}
