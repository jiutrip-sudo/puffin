import Link from "next/link";
import type { SiteLocale } from "@/lib/site-locale";
import { localizeHref } from "@/lib/i18n/paths";

type LocaleLinkProps = React.ComponentProps<typeof Link> & {
  locale: SiteLocale;
  href: string;
};

export function LocaleLink({ locale, href, ...props }: LocaleLinkProps) {
  return <Link href={localizeHref(href, locale)} {...props} />;
}
