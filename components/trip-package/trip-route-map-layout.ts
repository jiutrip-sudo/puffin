/** 路線概覽地圖容器尺寸（主欄全寬；桌面以固定高度為主，避免 aspect 壓扁） */
export const ROUTE_MAP_CONTAINER_CLASS =
  "relative w-full overflow-hidden rounded-2xl border border-foreground/10 aspect-[3/2] min-h-[320px] max-h-[min(62vh,520px)] sm:min-h-[340px] lg:aspect-auto lg:h-[min(56vh,540px)] lg:min-h-[500px]";

export const ROUTE_MAP_SKELETON_CLASS =
  `${ROUTE_MAP_CONTAINER_CLASS} bg-foreground/5`;

/** 桌面版預訂側欄 380px + grid gap 2.5rem（約 40px） */
export const ROUTE_MAP_SIDEBAR_OVERLAP = 420;

export const ROUTE_MAP_BREAKOUT_CLASS =
  "lg:mr-[calc(-420px)] lg:max-w-none";
