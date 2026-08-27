import Image from "next/image";
import { BRAND_NAME, COMPANY_INFO, COMPANY_LOGO } from "@/lib/company-info";

type InfoItem = {
  label: string;
  value: string;
  href?: string;
};

const WIDE_FIELD_LABELS = new Set(["地址", "信箱"]);

function findItem(items: ReadonlyArray<InfoItem>, label: string) {
  return items.find((item) => item.label === label);
}

function CompactFooterInfo() {
  const registrationLine = COMPANY_INFO.registration.map((item) => item.value).join(" · ");
  const chairman = findItem(COMPANY_INFO.contact, "執行董事長");
  const contact = findItem(COMPANY_INFO.contact, "聯絡人");
  const phone = findItem(COMPANY_INFO.contact, "電話");
  const fax = findItem(COMPANY_INFO.contact, "傳真");
  const email = findItem(COMPANY_INFO.contact, "信箱");
  const address = findItem(COMPANY_INFO.contact, "地址");

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

function InfoSection({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<InfoItem>;
}) {
  return (
    <section className="site-footer-panel rounded-xl px-3.5 py-3 sm:rounded-2xl sm:px-5 sm:py-4 md:px-6 md:py-5">
      <h3 className="mb-2.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:mb-4 sm:text-[10px]">
        {title}
      </h3>
      <dl className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-6 sm:gap-y-3">
        {items.map((item) => {
          const isWide = WIDE_FIELD_LABELS.has(item.label);

          return (
            <div
              key={item.label}
              className={`min-w-0 ${isWide ? "col-span-2" : ""}`}
            >
              <div className="flex min-w-0 items-baseline gap-1 sm:block">
                <dt className="shrink-0 text-[10px] font-medium text-white/50 sm:text-[11px]">
                  {item.label}
                  <span className="sm:hidden">：</span>
                </dt>
                <dd className="min-w-0 text-xs leading-snug text-white/92 sm:mt-0.5 sm:text-sm">
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
            </div>
          );
        })}
      </dl>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer w-full px-4 py-4 sm:px-5 sm:py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-2.5 border-b border-white/12 pb-3 sm:gap-4 sm:pb-6 md:justify-start">
          <Image
            src={COMPANY_LOGO.src}
            alt=""
            width={COMPANY_LOGO.width}
            height={COMPANY_LOGO.height}
            aria-hidden="true"
            className="h-8 w-auto shrink-0 object-contain sm:h-11"
          />
          <div className="min-w-0 text-left">
            <p className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-white/55 sm:block">
              {BRAND_NAME}
            </p>
            <p className="text-sm font-semibold leading-tight text-white sm:mt-0.5 sm:text-lg md:text-xl">
              {COMPANY_INFO.name}
            </p>
          </div>
        </div>

        <CompactFooterInfo />

        <div className="mt-3 hidden gap-4 md:mt-6 md:grid md:grid-cols-2 md:gap-5">
          <InfoSection title="登記資訊" items={COMPANY_INFO.registration} />
          <InfoSection title="聯絡方式" items={COMPANY_INFO.contact} />
        </div>

        <p className="mt-3 text-center text-[9px] tracking-wide text-white/35 sm:mt-6 sm:text-[10px]">
          © {new Date().getFullYear()} {COMPANY_INFO.name}
        </p>
      </div>
    </footer>
  );
}
