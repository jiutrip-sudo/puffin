type RoomTypeBedIconProps = {
  className?: string;
  /** 雙床房：兩個枕頭；預設為單一枕頭（大床／一般房型） */
  twin?: boolean;
};

/**
 * 線條風格床鋪圖示（對齊森林貓房型選擇 UI）
 */
export function RoomTypeBedIcon({ className, twin = false }: RoomTypeBedIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect
        x="5"
        y="3.5"
        width="14"
        height="6"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      {twin ? (
        <>
          <rect
            x="6"
            y="5.25"
            width="4.75"
            height="2.75"
            rx="1.1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="13.25"
            y="5.25"
            width="4.75"
            height="2.75"
            rx="1.1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </>
      ) : (
        <rect
          x="7.25"
          y="5.25"
          width="9.5"
          height="2.75"
          rx="1.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      )}
      <rect
        x="4"
        y="10"
        width="16"
        height="7.5"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M5.5 17.5v4M18.5 17.5v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
