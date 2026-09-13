import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DEFAULT_LOCALE, LOCALES, LOCALE_NAMES, isRouteTranslated, normaliseLocale } from "@/i18n";
import styles from "./LocaleSwitcher.module.css";

function browserRoute() {
  const localizedPrefixes = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE)
    .map((locale) => locale.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const pathname = localizedPrefixes
    ? window.location.pathname.replace(new RegExp(`^/(?:${localizedPrefixes})(?=/|$)`), "") || "/"
    : window.location.pathname;
  return `${pathname}${window.location.search}${window.location.hash}`;
}

export default function LocaleSwitcher({ label, route, onNavigate }) {
  const router = useRouter();
  const activeLocale = normaliseLocale(router.locale);
  const [liveHref, setLiveHref] = useState(route || router.pathname);
  // asPath retains the query string and, in the browser, the fragment too.
  // Locale prefixes are added by Link, so the same configured guide can move
  // between /get-koin and /es/get-koin without losing its state.
  const routeKey = route || router.pathname;
  const href = route || liveHref;

  useEffect(() => {
    if (route) {
      setLiveHref(route);
      return undefined;
    }
    const syncLocation = () => setLiveHref(browserRoute());
    syncLocation();
    window.addEventListener("popstate", syncLocation);
    window.addEventListener("koinos:locationchange", syncLocation);
    return () => {
      window.removeEventListener("popstate", syncLocation);
      window.removeEventListener("koinos:locationchange", syncLocation);
    };
  }, [route, router.asPath]);

  return (
    <nav className={styles.switcher} aria-label={label}>
      <span className={styles.icon} aria-hidden="true">
        <i className="fa-solid fa-globe" />
      </span>
      <span className={styles.options}>
        {LOCALES.map((locale) => {
          const isAvailable = isRouteTranslated(routeKey, locale);
          const isActive = locale === activeLocale;
          const className = `${styles.link} ${isActive ? styles.active : ""}`;

          return isAvailable ? (
            <Link
              key={locale}
              href={href}
              locale={locale}
              className={className}
              aria-current={isActive ? "page" : undefined}
              aria-label={LOCALE_NAMES[locale]}
              hrefLang={locale}
              onClick={onNavigate}
            >
              {locale.toUpperCase()}
            </Link>
          ) : (
            <span
              key={locale}
              className={`${className} ${styles.disabled}`}
              aria-disabled="true"
              aria-label={`${LOCALE_NAMES[locale]} — ${activeLocale === "es" ? "traducción no disponible" : "translation unavailable"}`}
              title={activeLocale === "es" ? "Historia todavía no está disponible en español" : "History is not available in Spanish yet"}
            >
              {locale.toUpperCase()}
            </span>
          );
        })}
      </span>
    </nav>
  );
}
