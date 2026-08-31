export function CheckoutSuccessIcon() {
  return (
    <div className="checkout-success-icon" aria-hidden="true">
      <svg
        className="checkout-success-icon__svg"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="checkout-success-icon__circle"
          cx="26"
          cy="26"
          r="23"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          className="checkout-success-icon__check"
          d="M15 27.5L22.5 35L37 19.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
