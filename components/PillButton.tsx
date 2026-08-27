import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PillButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "dark" | "ghost";
  showArrow?: boolean;
  className?: string;
};

const variantStyles = {
  solid: "bg-white text-foreground hover:bg-white/95 shadow-lg shadow-black/8",
  outline:
    "glass-pill text-hero-text hover:bg-white/20 border-white/30",
  dark: "bg-foreground text-white hover:bg-foreground/90 shadow-lg",
  ghost:
    "border border-foreground/15 text-foreground hover:border-foreground/30 hover:bg-foreground/5 bg-white",
};

export function PillButton({
  href,
  children,
  variant = "solid",
  showArrow = true,
  className = "",
}: PillButtonProps) {
  if (variant === "solid" && showArrow) {
    return (
      <Link href={href} className={`group inline-flex items-center ${className}`}>
        <span
          className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-foreground shadow-lg shadow-black/8 transition-all group-hover:bg-white/95 md:px-8 md:text-base"
        >
          {children}
        </span>
        <span
          className="ml-1 flex h-11 w-11 items-center justify-center rounded-full bg-white/25 text-hero-text backdrop-blur-sm transition-all group-hover:bg-white/35"
        >
          <ArrowIcon />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 md:px-8 md:text-base ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
