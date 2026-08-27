const THEME_SCRIPT = `
(function () {
  function parsePreference(value) {
    return value === "light" || value === "dark" || value === "system" ? value : "system";
  }

  function resolveTheme(preference) {
    if (preference === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return preference;
  }

  function setActive(preference) {
    document.querySelectorAll("[data-theme-option]").forEach(function (button) {
      var isActive = button.getAttribute("data-theme-option") === preference;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  window.__setPuffinTheme = function (preference) {
    preference = parsePreference(preference);
    var resolved = resolveTheme(preference);
    document.documentElement.setAttribute("data-theme-preference", preference);
    document.documentElement.setAttribute("data-theme", resolved);
    document.documentElement.style.colorScheme = resolved;
    try {
      localStorage.setItem("puffin-theme", preference);
    } catch (e) {}
    setActive(preference);
    window.dispatchEvent(new CustomEvent("site-theme-change", { detail: { theme: resolved } }));
    try {
      fetch("/api/theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preference: preference }),
        keepalive: true,
      });
    } catch (e) {}
  };

  function boot() {
    var preference = parsePreference(
      document.documentElement.getAttribute("data-theme-preference"),
    );
    try {
      var stored = localStorage.getItem("puffin-theme");
      if (stored) preference = parsePreference(stored);
    } catch (e) {}
    setActive(preference);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
`;

const THEME_BUTTONS_HTML = `
<button type="button" class="site-theme-toggle__btn" data-theme-option="light" aria-label="淺色" aria-pressed="false" onclick="window.__setPuffinTheme('light')">
  <svg viewBox="0 0 24 24" class="site-theme-toggle__icon" aria-hidden="true">
    <circle cx="12" cy="12" r="4" fill="currentColor"></circle>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
  </svg>
</button>
<button type="button" class="site-theme-toggle__btn" data-theme-option="dark" aria-label="暗色" aria-pressed="false" onclick="window.__setPuffinTheme('dark')">
  <svg viewBox="0 0 24 24" class="site-theme-toggle__icon" aria-hidden="true">
    <path fill="currentColor" d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
  </svg>
</button>
<button type="button" class="site-theme-toggle__btn" data-theme-option="system" aria-label="系統" aria-pressed="false" onclick="window.__setPuffinTheme('system')">
  <svg viewBox="0 0 24 24" class="site-theme-toggle__icon" aria-hidden="true">
    <path d="M12 2v2M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715M16 12a4 4 0 0 0-4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
  </svg>
</button>
`;

export function ThemeControlsScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}

type ThemeControlsBarProps = {
  className?: string;
};

export function ThemeControlsBar({ className = "" }: ThemeControlsBarProps) {
  return (
    <div
      className={`site-theme-toggle site-theme-toggle--compact shrink-0 ${className}`.trim()}
      role="group"
      aria-label="主題模式"
      dangerouslySetInnerHTML={{ __html: THEME_BUTTONS_HTML }}
    />
  );
}
