import Head from "next/head";
import { useRouter } from "next/router";
import { normaliseLocale } from "@/i18n";

const SITE_URL = "https://koinos.io";

export default function LocalizedHead({ pathname, title, description }) {
  const router = useRouter();
  const locale = normaliseLocale(router.locale);
  const localizedPath = `${locale === "en" ? "" : `/${locale}`}${pathname}`;

  return (
    <Head>
      {description && <meta name="description" content={description} />}
      <meta property="language" content={locale} key="language" />
      <meta
        property="og:locale"
        content={locale === "es" ? "es_ES" : "en_US"}
        key="oglocale"
      />
      <meta property="og:title" content={title} key="ogtitle" />
      {description && (
        <meta property="og:description" content={description} key="ogdesc" />
      )}
      <meta
        property="og:url"
        content={`${SITE_URL}${localizedPath}`}
        key="ogurl"
      />
      <link rel="canonical" href={`${SITE_URL}${localizedPath}`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}${pathname}`} />
      <link
        rel="alternate"
        hrefLang="es"
        href={`${SITE_URL}/es${pathname}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_URL}${pathname}`}
      />
    </Head>
  );
}
