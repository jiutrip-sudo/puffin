"use client";

import { useCallback, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { TripPackageCard } from "@/components/trip-package/TripPackageCard";
import { useSiteLocale } from "@/components/SiteLocaleProvider";
import { localizeText } from "@/lib/i18n/localize";
import { useFormatMoney } from "@/lib/i18n/use-format-money";
import { localePath } from "@/lib/i18n/paths";
import {
  matchesDaysRange,
  type TripCatalogItem,
  type TripDaysRange,
  type TripRouteType,
  type TripSeason,
  type TripTransport,
} from "@/lib/trip-packages/catalog";

type TripCatalogGridProps = {
  items: TripCatalogItem[];
  layout?: "default" | "sidebar";
};

type TransportFilter = "all" | TripTransport;
type SeasonFilter = "all" | TripSeason;
type DaysFilter = "all" | TripDaysRange;
type RouteFilter = "all" | TripRouteType;
type SortOrder = "days-asc" | "days-desc" | "price-asc" | "price-desc";

function getSortOptions(locale: ReturnType<typeof useSiteLocale>): FilterChipOption<SortOrder>[] {
  return [
    { value: "days-asc", label: localizeText("天數由短到長", locale) },
    { value: "days-desc", label: localizeText("天數由長到短", locale) },
    { value: "price-asc", label: localizeText("價格由低到高", locale) },
    { value: "price-desc", label: localizeText("價格由高到低", locale) },
  ];
}

function compareCatalogItems(
  a: TripCatalogItem,
  b: TripCatalogItem,
  sort: SortOrder,
): number {
  if (sort === "price-asc" || sort === "price-desc") {
    const aPrice = a.fromPrice?.perPersonDoubleIsk ?? null;
    const bPrice = b.fromPrice?.perPersonDoubleIsk ?? null;

    if (aPrice === null && bPrice === null) {
      return a.days - b.days;
    }
    if (aPrice === null) return 1;
    if (bPrice === null) return -1;

    const diff = aPrice - bPrice;
    return sort === "price-desc" ? -diff : diff;
  }

  return sort === "days-desc" ? b.days - a.days : a.days - b.days;
}

type FilterChipOption<T extends string> = {
  value: T;
  label: string;
};

type FilterChipGroupProps<T extends string> = {
  label: string;
  options: FilterChipOption<T>[];
  value: T;
  onChange: (next: T) => void;
  layout?: "inline" | "stack";
};

function FilterChipGroup<T extends string>({
  label,
  options,
  value,
  onChange,
  layout = "inline",
}: FilterChipGroupProps<T>) {
  const isStack = layout === "stack";

  return (
    <div className="min-w-0">
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/45">
        {label}
      </p>
      <div className={isStack ? "flex flex-col gap-1" : "flex flex-wrap gap-1.5"}>
        {options.map((option) => {
          const active = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={active}
              className={
                isStack
                  ? `rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                      active
                        ? "bg-primary-dark text-white"
                        : "text-foreground/75 hover:bg-foreground/5"
                    }`
                  : `rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      active
                        ? "bg-primary-dark text-white shadow-sm"
                        : "border border-foreground/12 bg-background/80 text-foreground/75 hover:border-foreground/25 hover:bg-foreground/5"
                    }`
              }
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

type TripCatalogFiltersProps = {
  locale: ReturnType<typeof useSiteLocale>;
  layout: "inline" | "stack";
  transport: TransportFilter;
  season: SeasonFilter;
  days: DaysFilter;
  route: RouteFilter;
  sort: SortOrder;
  showSort?: boolean;
  onUpdateParam: (key: string, value: string) => void;
  onClear: () => void;
};

function TripCatalogFilters({
  locale,
  layout,
  transport,
  season,
  days,
  route,
  sort,
  showSort = true,
  onUpdateParam,
  onClear,
}: TripCatalogFiltersProps) {
  const transportOptions: FilterChipOption<TransportFilter>[] = [
    { value: "all", label: localizeText("全部", locale) },
    { value: "self-drive", label: localizeText("自駕", locale) },
    { value: "group", label: localizeText("跟團", locale) },
  ];

  const seasonOptions: FilterChipOption<SeasonFilter>[] = [
    { value: "all", label: localizeText("全部", locale) },
    { value: "summer", label: localizeText("夏季", locale) },
    { value: "winter", label: localizeText("冬季", locale) },
  ];

  const daysOptions: FilterChipOption<DaysFilter>[] = [
    { value: "all", label: localizeText("全部", locale) },
    { value: "4-6", label: "4–6 日" },
    { value: "7-9", label: "7–9 日" },
    { value: "10-14", label: "10–14 日" },
  ];

  const routeOptions: FilterChipOption<RouteFilter>[] = [
    { value: "all", label: localizeText("全部", locale) },
    { value: "ring", label: localizeText("環島", locale) },
    { value: "non-ring", label: localizeText("非環島", locale) },
    { value: "south", label: localizeText("南岸專線", locale) },
  ];

  const sortOptions = getSortOptions(locale);

  const hasActiveFilters =
    transport !== "all" ||
    season !== "all" ||
    days !== "all" ||
    route !== "all";

  return (
    <div className={layout === "stack" ? "space-y-5" : "grid gap-4 md:grid-cols-2 xl:grid-cols-3"}>
      <FilterChipGroup
        label={localizeText("類型", locale)}
        options={transportOptions}
        value={transport}
        layout={layout}
        onChange={(value) => onUpdateParam("type", value)}
      />
      <FilterChipGroup
        label={localizeText("季節", locale)}
        options={seasonOptions}
        value={season}
        layout={layout}
        onChange={(value) => onUpdateParam("season", value)}
      />
      <FilterChipGroup
        label={localizeText("天數", locale)}
        options={daysOptions}
        value={days}
        layout={layout}
        onChange={(value) => onUpdateParam("days", value)}
      />
      <FilterChipGroup
        label={localizeText("路線", locale)}
        options={routeOptions}
        value={route}
        layout={layout}
        onChange={(value) => onUpdateParam("route", value)}
      />
      {showSort ? (
        <FilterChipGroup
          label={localizeText("排序", locale)}
          options={sortOptions}
          value={sort}
          layout={layout}
          onChange={(value) => onUpdateParam("sort", value)}
        />
      ) : null}

      {layout === "stack" ? (
        <div className="space-y-3 border-t border-foreground/10 pt-4">
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={onClear}
              className="w-full rounded-lg border border-foreground/15 px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-foreground/5"
            >
              {localizeText("清除篩選", locale)}
            </button>
          ) : null}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-foreground/50">
              {localizeText("逐步選擇", locale)}
            </p>
            <Link
              href={localePath("/trips/iceland/self-drive", locale)}
              className="block text-sm font-semibold text-primary-dark hover:underline"
            >
              {localizeText("自駕行程 →", locale)}
            </Link>
            <Link
              href={localePath("/trips/iceland/group", locale)}
              className="block text-sm font-semibold text-primary-dark hover:underline"
            >
              {localizeText("跟團行程 →", locale)}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function countActiveFilters(
  transport: TransportFilter,
  season: SeasonFilter,
  days: DaysFilter,
  route: RouteFilter,
): number {
  return [transport, season, days, route].filter((value) => value !== "all").length;
}

export function TripCatalogGrid({
  items,
  layout = "default",
}: TripCatalogGridProps) {
  const locale = useSiteLocale();
  const { fxDisclaimer } = useFormatMoney();
  const catalogPriceNote = localizeText(
    "參考價以 2 位成人計算，實際金額依出發日、房型與車型調整。",
    locale,
  );
  const priceFootnote = `${catalogPriceNote}${fxDisclaimer}`;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filterSheetOpen, setFilterSheetOpen] = useState(false);

  const transport = (searchParams.get("type") as TransportFilter) || "all";
  const season = (searchParams.get("season") as SeasonFilter) || "all";
  const days = (searchParams.get("days") as DaysFilter) || "all";
  const route = (searchParams.get("route") as RouteFilter) || "all";
  const sort = (searchParams.get("sort") as SortOrder) || "days-asc";
  const isValidSort = getSortOptions(locale).some((option) => option.value === sort);
  const activeSort: SortOrder = isValidSort ? sort : "days-asc";

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "all" && key !== "sort") {
        params.delete(key);
      } else if (value === "days-asc" && key === "sort") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const clearFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("type");
    params.delete("season");
    params.delete("days");
    params.delete("route");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [pathname, router, searchParams]);

  const filteredItems = useMemo(() => {
    let result = items.filter((item) => {
      if (transport !== "all" && item.transport !== transport) return false;
      if (season !== "all" && item.season !== season) return false;
      if (days !== "all" && !matchesDaysRange(item.days, days)) return false;
      if (route !== "all" && item.routeType !== route) return false;
      return true;
    });

    result = [...result].sort((a, b) => compareCatalogItems(a, b, activeSort));

    return result;
  }, [items, transport, season, days, route, activeSort]);

  const bookableItems = filteredItems.filter((item) => !item.comingSoon);
  const comingSoonItems = filteredItems.filter((item) => item.comingSoon);
  const activeFilterCount = countActiveFilters(transport, season, days, route);

  const sortOptions = getSortOptions(locale);

  const resultsSummary = localizeText(
    `顯示 ${filteredItems.length} / ${items.length} 個行程`,
    locale,
  );

  const cardGrid = (
    <>
      {filteredItems.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-foreground/15 bg-primary-surface/10 px-6 py-12 text-center">
          <p className="text-base font-semibold text-foreground/80">
            {localizeText("沒有符合條件的行程", locale)}
          </p>
          <p className="mt-2 text-sm text-foreground/60">
            {localizeText("請放寬篩選條件，或改用步驟式選擇。", locale)}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-foreground/5"
            >
              {localizeText("清除篩選", locale)}
            </button>
            <Link
              href={localePath("/trips/iceland/self-drive", locale)}
              className="inline-flex rounded-full bg-primary-dark px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {localizeText("自駕逐步選擇", locale)}
            </Link>
            <Link
              href={localePath("/trips/iceland/group", locale)}
              className="inline-flex rounded-full bg-primary-dark px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {localizeText("跟團逐步選擇", locale)}
            </Link>
          </div>
        </div>
      ) : (
        <>
          {bookableItems.length > 0 && (
            <div
              className={
                layout === "sidebar"
                  ? "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
                  : "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              }
            >
              {bookableItems.map((item) => (
                <TripPackageCard
                  key={item.tripKey}
                  locale={locale}
                  trip={{
                    tripKey: item.tripKey,
                    title: item.title,
                    subtitle: item.subtitle,
                    description: item.description,
                    durationLabel: item.durationLabel,
                    heroImage: item.heroImage,
                    tags: item.tags,
                    fromPrice: item.fromPrice,
                  }}
                />
              ))}
            </div>
          )}

          {comingSoonItems.length > 0 && (
            <div className="space-y-4 pt-4">
              <p className="text-sm font-semibold text-foreground/60">
                {localizeText("即將推出", locale)}
              </p>
              <div
                className={
                  layout === "sidebar"
                    ? "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
                    : "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }
              >
                {comingSoonItems.map((item) => (
                  <TripPackageCard
                    key={item.tripKey}
                    locale={locale}
                    comingSoon
                    trip={{
                      tripKey: item.tripKey,
                      title: item.title,
                      subtitle: item.subtitle,
                      description: item.description,
                      durationLabel: item.durationLabel,
                      heroImage: item.heroImage,
                      tags: item.tags,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );

  if (layout === "sidebar") {
    return (
      <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-8">
        <aside className="iceland-catalog__sidebar hidden lg:block">
          <TripCatalogFilters
            locale={locale}
            layout="stack"
            transport={transport}
            season={season}
            days={days}
            route={route}
            sort={activeSort}
            showSort={false}
            onUpdateParam={updateParam}
            onClear={clearFilters}
          />
        </aside>

        <div className="min-w-0 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-foreground/60">{resultsSummary}</p>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="text-xs font-medium text-foreground/50">
                {localizeText("排序", locale)}
              </span>
              <select
                value={activeSort}
                onChange={(event) => updateParam("sort", event.target.value)}
                className="rounded-lg border border-foreground/12 bg-background px-3 py-1.5 text-sm font-medium text-foreground/80"
                aria-label={localizeText("排序", locale)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setFilterSheetOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-4 py-2 text-sm font-semibold text-foreground/80"
            >
              {localizeText("篩選", locale)}
              {activeFilterCount > 0 ? (
                <span className="rounded-full bg-primary-dark px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {activeFilterCount}
                </span>
              ) : null}
            </button>
            <select
              value={activeSort}
              onChange={(event) => updateParam("sort", event.target.value)}
              className="flex-1 rounded-full border border-foreground/12 bg-background px-3 py-2 text-sm font-medium text-foreground/80 sm:hidden"
              aria-label={localizeText("排序", locale)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {cardGrid}

          {bookableItems.some((item) => item.fromPrice) ? (
            <p className="text-xs leading-relaxed text-foreground/45">{priceFootnote}</p>
          ) : null}
        </div>

        {filterSheetOpen ? (
          <div
            className="iceland-catalog__filter-sheet lg:hidden"
            role="presentation"
            onClick={() => setFilterSheetOpen(false)}
          >
            <div
              className="iceland-catalog__filter-sheet-panel"
              role="dialog"
              aria-modal="true"
              aria-label={localizeText("篩選行程", locale)}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-base font-bold text-foreground">
                  {localizeText("篩選行程", locale)}
                </h2>
                <button
                  type="button"
                  onClick={() => setFilterSheetOpen(false)}
                  className="rounded-full px-2 py-1 text-sm font-semibold text-foreground/60 hover:bg-foreground/5"
                >
                  {localizeText("關閉", locale)}
                </button>
              </div>
              <TripCatalogFilters
                locale={locale}
                layout="stack"
                transport={transport}
                season={season}
                days={days}
                route={route}
                sort={activeSort}
                showSort={false}
                onUpdateParam={updateParam}
                onClear={clearFilters}
              />
              <button
                type="button"
                onClick={() => setFilterSheetOpen(false)}
                className="mt-5 w-full rounded-full bg-primary-dark px-4 py-3 text-sm font-semibold text-white"
              >
                {localizeText("套用", locale)}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="sticky top-[var(--site-header-mobile-offset)] z-20 -mx-1 rounded-2xl border border-foreground/10 bg-background/92 p-4 shadow-sm backdrop-blur-md md:top-[var(--site-header-sticky-top-desktop)]">
        <TripCatalogFilters
          locale={locale}
          layout="inline"
          transport={transport}
          season={season}
          days={days}
          route={route}
          sort={activeSort}
          onUpdateParam={updateParam}
          onClear={clearFilters}
        />
      </div>

      <p className="text-sm text-foreground/60">{resultsSummary}</p>
      {cardGrid}
      {bookableItems.some((item) => item.fromPrice) ? (
        <p className="text-xs leading-relaxed text-foreground/45">{priceFootnote}</p>
      ) : null}
    </div>
  );
}
