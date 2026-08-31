type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/** 輕量轉換事件，相容 GTM dataLayer */
export function trackEvent(event: string, payload?: AnalyticsPayload): void {
  if (typeof window === "undefined") return;

  const body = {
    event,
    ...payload,
    timestamp: Date.now(),
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(body);

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", body);
  }
}

export function trackTripBookClick(packageId: string, source: string): void {
  trackEvent("trip_book_click", { package_id: packageId, source });
}

export function trackCheckoutStart(packageId: string): void {
  trackEvent("checkout_start", { package_id: packageId });
}

export function trackCheckoutStep(step: number, packageId?: string): void {
  trackEvent("checkout_step", { step, package_id: packageId });
}

export function trackCheckoutComplete(
  packageId: string,
  confirmationCode: string | null,
): void {
  trackEvent("checkout_complete", {
    package_id: packageId,
    confirmation_code: confirmationCode ?? undefined,
  });
}
