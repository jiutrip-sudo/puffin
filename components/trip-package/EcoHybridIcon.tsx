type EcoHybridIconProps = {
  className?: string;
  size?: number;
};

/**
 * 線條葉子 + 葉脈（環保／油電標示）
 * Tabler Icons「leaf」造型
 */
export function EcoHybridIcon({
  className = "shrink-0 text-emerald-600 dark:text-emerald-400",
  size = 18,
}: EcoHybridIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 21c0.5 -4.5 2.5 -8 7 -10" />
      <path d="M9 3c6 0 12 4.5 12 12" />
    </svg>
  );
}
