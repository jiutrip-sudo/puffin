import {
  parseSiteThemePreference,
  resolveSiteTheme,
  type SiteThemePreference,
} from "./site-theme";

function readStoredPreference(
  fallback: SiteThemePreference,
): SiteThemePreference {
  try {
    const stored = localStorage.getItem("puffin-theme");
    if (stored) {
      return parseSiteThemePreference(stored);
    }
  } catch {
    // Ignore storage failures in private mode.
  }
  return fallback;
}

export function applySiteThemePreference(
  preference: SiteThemePreference,
  options?: { syncServer?: boolean },
) {
  const parsed = parseSiteThemePreference(preference);
  const resolved = resolveSiteTheme(
    parsed,
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const root = document.documentElement;
  root.setAttribute("data-theme-preference", parsed);
  root.setAttribute("data-theme", resolved);
  root.style.colorScheme = resolved;

  try {
    localStorage.setItem("puffin-theme", parsed);
  } catch {
    // Ignore storage failures in private mode.
  }

  window.dispatchEvent(
    new CustomEvent("site-theme-change", { detail: { theme: resolved } }),
  );

  if (options?.syncServer) {
    try {
      fetch("/api/theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preference: parsed }),
        keepalive: true,
      });
    } catch {
      // Ignore network failures for theme sync.
    }
  }
}

export function setPuffinTheme(preference: SiteThemePreference) {
  applySiteThemePreference(preference, { syncServer: true });
}

export function runSiteThemeBootstrap() {
  const documentPreference = parseSiteThemePreference(
    document.documentElement.getAttribute("data-theme-preference"),
  );
  applySiteThemePreference(readStoredPreference(documentPreference), {
    syncServer: false,
  });
}

export function readSiteThemePreferenceFromDocument(): SiteThemePreference {
  return parseSiteThemePreference(
    document.documentElement.getAttribute("data-theme-preference"),
  );
}
