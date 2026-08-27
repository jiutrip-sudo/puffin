import Link from "next/link";

const NAV_LINKS = [
  { label: "關於", href: "#" },
  { label: "行程", href: "#" },
  { label: "服務", href: "#" },
  { label: "聯絡", href: "#" },
];

export function SiteHeader({ activeLabel }: { activeLabel?: string }) {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-5 py-5 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Logo pill */}
        <Link
          href="/"
          className="glass flex items-center gap-2.5 rounded-full px-5 py-2.5 transition-all hover:bg-white/25"
        >
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-hero-text">
            Puffin Iceland
          </span>
        </Link>

        {/* Center nav pill */}
        <nav
          className="glass hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex"
          aria-label="主導覽"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all ${
                activeLabel === link.label
                  ? "bg-white text-primary-dark shadow-sm"
                  : "text-hero-text/80 hover:bg-white/15 hover:text-hero-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth pills */}
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="hidden text-xs font-medium text-hero-text/80 transition-colors hover:text-hero-text sm:block"
          >
            登入
          </Link>
          <Link
            href="#"
            className="glass rounded-full px-5 py-2 text-xs font-semibold text-hero-text transition-all hover:bg-white/25"
          >
            註冊
          </Link>
        </div>
      </div>
    </header>
  );
}
