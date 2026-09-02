import Image from "next/image";
import type { SiteLocale } from "@/lib/site-locale";
import { COMPANY_LOGO } from "@/lib/company-info";
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
  const registrationLine = companyInfo.registration
    .map((item) => item.value)
    .join(" · ");
  const [chairman, contact, phone, fax, email, address] = companyInfo.contact;

  const peopleLine = [chairman?.value, contact?.value].filter(Boolean).join(" / ");

  return (
    <section className="site-footer-panel rounded-xl px-3 py-2.5 md:hidden">
      <p className="text-[11px] leading-relaxed text-white/85">{registrationLine}</p>
      <p className="mt-1.5 text-[11px] leading-relaxed text-white/85">
        {peopleLine}
        {phone && (
          <>
            {" · "}
            <a
              href={phone.href}
              className="transition-colors hover:text-primary-light"
            >
              {phone.value}
            </a>
          </>
        )}
        {fax && <> / {fax.value}</>}
      </p>
      {email && (
        <p className="mt-1.5 text-[11px] leading-relaxed">
          <a
            href={email.href}
            className="break-all text-white/85 transition-colors hover:text-primary-light"
          >
            {email.value}
          </a>
        </p>
      )}
      {address && (
        <p className="mt-1.5 text-[11px] leading-relaxed text-white/85">
          {address.value}
        </p>
      )}
    </section>
  );
}

function InfoColumn({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<InfoItem>;
}) {
  return (
    <div className="min-w-0">
      <h3 className="font-display mb-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/50">
        {title}
      </h3>
      <dl className="grid grid-cols-2 gap-x-3 gap-y-0.5">
        {items.map((item) => {
          const isWide = WIDE_FIELD_LABELS.has(item.label) || item.label === "邮箱";

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
        <div className="flex items-center justify-center gap-2 border-b border-white/12 pb-2 sm:gap-3 sm:pb-5 md:justify-start md:pb-2">
          <Image
            src={COMPANY_LOGO.src}
            alt=""
            width={COMPANY_LOGO.width}
            height={COMPANY_LOGO.height}
            aria-hidden="true"
            className="h-7 w-auto shrink-0 object-contain sm:h-8 md:h-7"
          />
          <div className="min-w-0 text-left">
            <p className="font-display hidden text-[8px] font-medium uppercase tracking-[0.2em] text-white/50 sm:block">
              Dollar Travel Service Ltd., Co.
            </p>
            <p className="text-sm font-semibold leading-none text-white sm:text-base md:text-sm">
              {companyInfo.name}
            </p>
          </div>
        </div>

        <CompactFooterInfo locale={locale} />

        <section className="site-footer-panel mt-2 hidden rounded-lg px-3 py-2 md:block">
          <div className="grid grid-cols-2 gap-x-5 gap-y-0">
            <InfoColumn
              title={t("footer.registration", locale)}
              items={companyInfo.registration}
            />
            <InfoColumn
              title={t("footer.contact", locale)}
              items={companyInfo.contact}
            />
          </div>
        </section>

        <p className="mt-2 text-center text-[8px] tracking-wide text-white/35 sm:mt-5 sm:text-[10px] md:mt-1.5">
          © {new Date().getFullYear()} {companyInfo.name}
        </p>
      </div>
    </footer>
  );
}
