type TransitionBarProps = {
  tags?: string[];
};

const DEFAULT_TAGS = ["#冰島之旅", "#Dollar_Travel", "#極光", "#環島"];

export function TransitionBar({ tags = DEFAULT_TAGS }: TransitionBarProps) {
  return (
    <div className="flex justify-center px-5 md:px-8">
      <div
        className="glass-hero flex w-full max-w-3xl flex-col items-center gap-3 rounded-full px-5 py-3 sm:flex-row sm:justify-between sm:gap-4 md:px-6"
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium tracking-wide text-hero-text/90 md:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          {["instagram", "twitter", "youtube"].map((social) => (
            <span
              key={social}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-[10px] text-hero-text/80"
              aria-hidden="true"
            >
              {social === "instagram" && "◎"}
              {social === "twitter" && "✕"}
              {social === "youtube" && "▶"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
