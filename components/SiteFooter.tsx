import Image from "next/image";
import { BRAND_NAME, COMPANY_INFO, COMPANY_LOGO } from "@/lib/company-info";

type InfoItem = {
  label: string;
  value: string;
  href?: string;
};

function InfoSection({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<InfoItem>;
}) {
  return (
    <section className="site-footer-panel rounded-2xl px-5 py-4 md:px-6 md:py-5">
      <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
        {title}
      </h3>
      <dl className="grid gap-3 sm:grid-cols-2 sm:gap-x-6">
        {items.map((item) => (
          <div key={item.label} className="min-w-0">
            <dt className="text-[11px] font-medium text-white/50">{item.label}</dt>
            <dd className="mt-0.5 text-sm leading-snug text-white/92">
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
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer w-full px-5 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-4 border-b border-white/12 pb-6 text-center sm:flex-row sm:items-center sm:text-left">
          <Image
            src={COMPANY_LOGO.src}
            alt=""
            width={COMPANY_LOGO.width}
            height={COMPANY_LOGO.height}
            aria-hidden="true"
            className="h-11 w-auto shrink-0 object-contain"
          />
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/55">
              {BRAND_NAME}
            </p>
            <p className="mt-1 text-lg font-semibold leading-tight text-white md:text-xl">
              {COMPANY_INFO.name}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5">
          <InfoSection title="登記資訊" items={COMPANY_INFO.registration} />
          <InfoSection title="聯絡方式" items={COMPANY_INFO.contact} />
        </div>

        <p className="mt-6 text-center text-[10px] tracking-wide text-white/35">
          © {new Date().getFullYear()} {COMPANY_INFO.name}
        </p>
      </div>
    </footer>
  );
}
