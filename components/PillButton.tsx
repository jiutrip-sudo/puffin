import Link from "next/link";

type PillButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "dark" | "ghost" | "glass";
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
  className = "",
}: PillButtonProps) {
  if (variant === "glass") {
    return (
      <Link href={href} className={`glass-pill-button group ${className}`}>
        <span className="glass-pill-button-ring" aria-hidden="true" />
        <span className="glass-pill-button-face">{children}</span>
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
