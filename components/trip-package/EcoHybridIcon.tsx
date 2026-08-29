type EcoHybridIconProps = {
  className?: string;
  size?: number;
};

/** 閃電圖示（插電式油電混合／電能標示） */
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
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 2L3 14h7.5l-1.2 8L21 10h-7.5L13 2z" />
    </svg>
  );
}
