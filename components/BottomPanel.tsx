type BottomPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function BottomPanel({ children, className = "" }: BottomPanelProps) {
  return (
    <section
      className={`relative z-10 -mt-2 rounded-t-[2.5rem] bg-white px-5 py-10 md:rounded-t-[4rem] md:px-8 md:py-14 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
