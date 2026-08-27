export const SITE_THEME_COOKIE = "puffin-theme";

export type SiteThemePreference = "light" | "dark" | "system";
export type SiteTheme = "light" | "dark";

const PREFERENCES = new Set<SiteThemePreference>(["light", "dark", "system"]);

export function parseSiteThemePreference(
  value: string | null | undefined,
): SiteThemePreference {
  if (value && PREFERENCES.has(value as SiteThemePreference)) {
    return value as SiteThemePreference;
  }
  return "system";
}

export function resolveSiteTheme(
  preference: SiteThemePreference,
  prefersDark: boolean,
): SiteTheme {
  if (preference === "system") {
    return prefersDark ? "dark" : "light";
  }
  return preference;
}
