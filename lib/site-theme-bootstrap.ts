import { parseSiteThemePreference, resolveSiteTheme } from "./site-theme";

export function runSiteThemeBootstrap() {
  try {
    const root = document.documentElement;
    let preference = parseSiteThemePreference(
      root.getAttribute("data-theme-preference"),
    );

    try {
      const stored = localStorage.getItem("puffin-theme");
      if (stored) {
        preference = parseSiteThemePreference(stored);
      }
    } catch {
      // Ignore storage failures in private mode.
    }

    const resolved = resolveSiteTheme(
      preference,
      window.matchMedia("(prefers-color-scheme: dark)").matches,
    );
    root.setAttribute("data-theme-preference", preference);
    root.setAttribute("data-theme", resolved);
    root.style.colorScheme = resolved;
    window.dispatchEvent(
      new CustomEvent("site-theme-change", { detail: { theme: resolved } }),
    );
  } catch {
    // Ignore theme bootstrap failures on legacy browsers.
  }
}
