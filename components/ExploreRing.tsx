export function ExploreRing() {
  return (
    <div
      className="absolute left-[45%] top-[45%] z-10 hidden md:block"
      aria-hidden="true"
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="animate-spin-slow absolute inset-0">
          <svg viewBox="0 0 80 80" className="h-full w-full">
            <defs>
              <path
                id="exploreCircle"
                d="M 40,40 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0"
              />
            </defs>
            <text
              fill="rgba(255,255,255,0.6)"
              fontSize="7"
              fontWeight="500"
              letterSpacing="2"
            >
              <textPath href="#exploreCircle" startOffset="0%">
                EXPLORE DETAILS · EXPLORE DETAILS ·
              </textPath>
            </text>
          </svg>
        </div>
        <div className="glass flex h-8 w-8 items-center justify-center rounded-full">
          <span className="text-sm font-light text-hero-text">+</span>
        </div>
      </div>
    </div>
  );
}
