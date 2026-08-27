export function AuroraOverlay() {
  return (
    <div
      className="aurora-overlay pointer-events-none absolute inset-0 z-[1] max-md:hidden"
      aria-hidden="true"
    >
      <div className="aurora-layer aurora-layer--green" />
      <div className="aurora-layer aurora-layer--cyan" />
      <div className="aurora-layer aurora-layer--violet" />
      <div className="aurora-layer aurora-layer--shimmer" />
    </div>
  );
}
