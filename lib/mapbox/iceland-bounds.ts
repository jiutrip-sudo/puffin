/** 冰島地圖視野：西南角與東北角（lng, lat） */
export const ICELAND_MAX_BOUNDS: [[number, number], [number, number]] = [
  [-25.2, 63.0],
  [-12.8, 66.9],
];

/** 縮放下限，避免拉遠後露出過多周邊海域與陸地 */
export const ICELAND_MIN_ZOOM = 4.8;
