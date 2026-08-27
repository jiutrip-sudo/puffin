import Link from "next/link";
import { SiteLogo } from "./SiteLogo";

const NAV_LINKS = [
  { label: "關於", href: "#" },
  { label: "行程", href: "#" },
  { label: "服務", href: "#" },
  { label: "聯絡", href: "#" },
];

type SiteHeaderProps = {
  activeLabel?: string;
  rightSlot?: React.ReactNode;
};

export function SiteHeader({ activeLabel, rightSlot }: SiteHeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-5 py-4 md:px-8">
      <div
        className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 md:grid-cols-[1fr_auto_1fr]"
      >
        <div className="justify-self-start">
          <SiteLogo />
        </div>

        <nav
          className="glass-hero hidden items-center justify-self-center gap-1 rounded-full px-2 py-1.5 md:flex"
          aria-label="主導覽"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
                activeLabel === link.label
                  ? "bg-white text-primary-dark shadow-sm"
                  : "text-hero-text/90 hover:bg-white/15 hover:text-hero-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 justify-self-end">
          {rightSlot ?? (
            <>
              <Link
                href="#"
                className="hidden text-xs font-medium text-hero-text/85 transition-colors hover:text-hero-text sm:block"
              >
                登入
              </Link>
              <Link
                href="#"
                className="glass-hero rounded-full px-5 py-2 text-xs font-semibold text-hero-text transition-all hover:bg-white/25"
              >
                註冊
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
