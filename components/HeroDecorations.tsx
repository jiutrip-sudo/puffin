export function HeroDecorations() {
  return (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {/* Mountain layers */}
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1440 400"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M0 400 L0 280 C200 200 300 320 480 240 C660 160 720 280 900 200 C1080 120 1200 240 1440 180 L1440 400 Z"
        fill="rgba(155,143,204,0.5)"
      />
      <path
        d="M0 400 L0 320 C180 260 360 340 540 280 C720 220 900 300 1080 240 C1260 180 1320 280 1440 260 L1440 400 Z"
        fill="rgba(140,128,190,0.6)"
      />
      <path
        d="M0 400 L0 360 C240 300 480 380 720 320 C960 260 1200 340 1440 300 L1440 400 Z"
        fill="rgba(125,113,175,0.7)"
      />
    </svg>

    {/* Draped fabric effect */}
    <div
      className="absolute right-[5%] top-[15%] h-64 w-48 rounded-[40%] bg-gradient-to-b from-white/20 to-white/5 opacity-60 blur-sm md:right-[15%] md:h-80 md:w-56"
      style={{ transform: "rotate(-8deg)" }}
    />

    {/* 3D geometric shapes cluster */}
    <div className="absolute right-[8%] top-[28%] md:right-[18%] md:top-[22%]">
      {/* Torus / ring */}
      <div
        className="animate-float-slow absolute h-28 w-28 rounded-full border-[14px] border-white/50 shadow-lg shadow-primary-dark/20 md:h-36 md:w-36 md:border-[18px]"
        style={{ left: "20px", top: "40px" }}
      />
      {/* Coral disc */}
      <div
        className="animate-float absolute h-16 w-16 rounded-full bg-gradient-to-br from-[#f0a898] to-[#e88878] shadow-lg md:h-20 md:w-20"
        style={{ left: "80px", top: "0px", animationDelay: "1s" }}
      />
      {/* Peach sphere */}
      <div
        className="animate-float-slow absolute h-12 w-12 rounded-full bg-gradient-to-br from-[#f5c4a8] to-[#e8a888] shadow-md md:h-14 md:w-14"
        style={{ left: "0px", top: "20px", animationDelay: "2s" }}
      />
      {/* Teal cylinder */}
      <div
        className="animate-float absolute h-20 w-10 rounded-full bg-gradient-to-b from-[#a8c8d8] to-[#88b0c8] shadow-md md:h-24 md:w-12"
        style={{ left: "100px", top: "60px", animationDelay: "0.5s" }}
      />
    </div>

    {/* Soft glow */}
    <div className="absolute right-[20%] top-[30%] h-48 w-48 rounded-full bg-white/10 blur-3xl" />
  </div>
  );
}
