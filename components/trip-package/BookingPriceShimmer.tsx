type BookingShimmerVariant =
  | "start"
  | "total"
  | "mobile"
  | "field"
  | "field-wide"
  | "badge";

type BookingShimmerProps = {
  variant: BookingShimmerVariant;
  className?: string;
};

export function BookingShimmer({
  variant,
  className = "",
}: BookingShimmerProps) {
  return (
    <span
      className={`booking-shimmer booking-shimmer--${variant} ${className}`.trim()}
      role="status"
      aria-label="計算中"
    />
  );
}

/** @deprecated Use BookingShimmer */
export function BookingPriceShimmer({
  variant,
}: {
  variant: "start" | "total" | "mobile";
}) {
  return <BookingShimmer variant={variant} />;
}
