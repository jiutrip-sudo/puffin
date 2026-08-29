type EcoHybridIconProps = {
  className?: string;
  size?: number;
};

/** 插電式油電：充電插頭 + 閃電 */
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
      <path d="M6.5 12H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5" />
      <path d="M17.5 12H20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2.5" />
      <path d="M12 22v-6" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M13 11l-2 8" />
    </svg>
  );
}
