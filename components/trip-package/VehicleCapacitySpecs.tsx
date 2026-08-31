type VehicleCapacitySpecsProps = {
  seats: number;
  doors: number;
  luggage: number;
  compact?: boolean;
};

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="vehicle-capacity-specs__icon" aria-hidden="true">
      <circle cx="12" cy="7" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M6 20c0-3.5 2.7-6 6-6s6 2.5 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DoorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="vehicle-capacity-specs__icon" aria-hidden="true">
      <path
        d="M4.5 10L6.5 7h8v12H6.5L4.5 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M5.2 9.5L6.8 7.5h6.4v4.3H5.2V9.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 14.5h2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LuggageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="vehicle-capacity-specs__icon" aria-hidden="true">
      <rect
        x="6"
        y="8"
        width="12"
        height="11"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M9 8V6a3 3 0 0 1 6 0v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VehicleCapacitySpecs({
  seats,
  doors,
  luggage,
  compact = false,
}: VehicleCapacitySpecsProps) {
  return (
    <ul
      className={`vehicle-capacity-specs${compact ? " vehicle-capacity-specs--compact" : ""}`}
      aria-label="車型規格"
    >
      <li className="vehicle-capacity-specs__item">
        <PersonIcon />
        <span className="vehicle-capacity-specs__value">x{seats}</span>
      </li>
      <li className="vehicle-capacity-specs__item">
        <DoorIcon />
        <span className="vehicle-capacity-specs__value">x{doors}</span>
      </li>
      <li className="vehicle-capacity-specs__item">
        <LuggageIcon />
        <span className="vehicle-capacity-specs__value">x{luggage}</span>
      </li>
    </ul>
  );
}
