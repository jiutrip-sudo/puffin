import Link from "next/link";
import { SiteLogo } from "./SiteLogo";
import { ThemeControlsBar } from "./ThemeControls";

const NAV_LINKS = [
  { label: "關於", href: "#" },
  { label: "行程", href: "#" },
  { label: "服務", href: "#" },
  { label: "聯絡", href: "#" },
];

type SiteHeaderProps = {
  activeLabel?: string;
  rightSlot?: React.ReactNode;
  /** 離開 Hero、疊在淺色內容區時提高字色對比 */
  onSurface?: boolean;
};

function HeaderActions({ rightSlot }: { rightSlot?: React.ReactNode }) {
  return (
    rightSlot ?? (
      <>
        <Link
          href="#"
          className="hidden text-xs font-medium text-hero-text/85 transition-colors hover:text-hero-text sm:block"
        >
          登入
        </Link>
        <Link
          href="#"
          className="glass-hero rounded-full px-4 py-2 text-xs font-semibold text-hero-text transition-all hover:bg-white/25 sm:px-5"
        >
          註冊
        </Link>
      </>
    )
  );
}

export function SiteHeader({
  activeLabel,
  rightSlot,
  onSurface = false,
}: SiteHeaderProps) {
  return (
    <header
      className={`px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-8 md:py-4 ${
        onSurface ? "site-header--on-surface" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-2 md:hidden">
          <SiteLogo />
          <ThemeControlsBar />
          <div className="flex shrink-0 items-center justify-end gap-1.5">
            <HeaderActions rightSlot={rightSlot} />
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-3">
          <div className="justify-self-start">
            <SiteLogo />
          </div>

          <nav
            className="glass-hero flex items-center justify-self-center gap-1 rounded-full px-2 py-1.5"
            aria-label="主導覽"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
                  activeLabel === link.label
                    ? onSurface
                      ? "bg-primary-dark text-white shadow-sm"
                      : "bg-white text-primary-dark shadow-sm"
                    : onSurface
                      ? "text-hero-text/80 hover:bg-foreground/8 hover:text-hero-text"
                      : "text-hero-text/90 hover:bg-white/15 hover:text-hero-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-2 justify-self-end">
            <ThemeControlsBar />
            <HeaderActions rightSlot={rightSlot} />
          </div>
        </div>
      </div>
    </header>
  );
}
