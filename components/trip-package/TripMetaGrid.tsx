import type { TripPackage } from "@/lib/trip-packages/types";

type TripMetaGridProps = {
  package: TripPackage;
};

export function TripMetaGrid({ package: pkg }: TripMetaGridProps) {
  const items = [
    { label: "出發地", value: pkg.meta.departure },
    { label: "交通", value: pkg.meta.transport },
    { label: "季節", value: `${pkg.season.label}（${pkg.season.months}）` },
    {
      label: "行程長度",
      value: `${pkg.duration.days} 天／${pkg.duration.nights} 夜`,
    },
    { label: "行程代碼", value: pkg.meta.tourCode },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-foreground/10 bg-primary-surface/25 p-4"
        >
          <p className="font-display text-xs font-medium uppercase tracking-wide text-foreground/50">
            {item.label}
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
