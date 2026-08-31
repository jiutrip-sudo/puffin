import { SiteHeader } from "./SiteHeader";

type SiteHeaderShellProps = {
  activeLabel?: string;
  rightSlot?: React.ReactNode;
  /** 離開 Hero、疊在淺色內容區時提高字色對比 */
  onSurface?: boolean;
  /** overlay：固定疊在 Hero 上；sticky：內容頁頂部黏附列 */
  variant?: "overlay" | "sticky";
  className?: string;
  children?: React.ReactNode;
};

export function SiteHeaderShell({
  activeLabel,
  rightSlot,
  onSurface = false,
  variant = "sticky",
  className = "",
  children,
}: SiteHeaderShellProps) {
  const headerContent =
    children ?? (
      <SiteHeader
        activeLabel={activeLabel}
        rightSlot={rightSlot}
        onSurface={variant === "sticky" ? true : onSurface}
      />
    );

  if (variant === "overlay") {
    return (
      <div
        className={`site-header-shell pointer-events-none fixed inset-x-0 top-0 z-[90] ${className}`}
      >
        <div className="pointer-events-auto">{headerContent}</div>
      </div>
    );
  }

  return (
    <div
      className={`site-header-bar sticky top-0 z-[90] border-b border-foreground/10 glass-white site-header--on-surface ${className}`}
    >
      {headerContent}
    </div>
  );
}
