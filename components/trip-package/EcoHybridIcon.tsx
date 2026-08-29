type EcoHybridIconProps = {
  className?: string;
  size?: number;
};

/**
 * 線條葉子 + 葉脈（小尺寸可辨識的單一路徑葉形）
 */
export function EcoHybridIcon({
  className = "shrink-0 text-emerald-600 dark:text-emerald-400",
  size = 20,
}: EcoHybridIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* 單片葉輪廓（Lucide leaf） */}
      <path
        d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 17 4.5s-.5 2.5-1 6.5c2.5 0 5 2 5 5.5 0 4.5-4 7-7 7z"
      />
      {/* 葉脈 */}
      <path d="M9.5 17.5c2-4 4-7.5 6.5-11" />
    </svg>
  );
}
