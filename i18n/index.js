import config from "./config.json";

export const DEFAULT_LOCALE = config.defaultLocale;
export const LOCALES = config.locales;
export const LOCALE_NAMES = config.localeNames;

export function normaliseLocale(locale) {
  return LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
}

export function isRouteTranslated(pathname, locale) {
  const routes = config.translatedRoutes[normaliseLocale(locale)] || [];
  const hashIndex = pathname.indexOf("#");
  const hash = hashIndex >= 0 ? pathname.slice(hashIndex) : "";
  const path = pathname.split(/[?#]/)[0] || "/";
  return (
    routes.includes("*") ||
    routes.includes(`${path}${hash}`) ||
    routes.includes(path)
  );
}

// Use this on links in shared navigation while the site is translated in
// stages. An untranslated destination deliberately falls back to English
// instead of exposing an English page under a misleading /es URL.
export function localeForPath(pathname, locale) {
  return isRouteTranslated(pathname, locale) ? normaliseLocale(locale) : false;
}
