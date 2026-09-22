import Link from "next/link";
import { useRouter } from "next/router";
import { localeForPath } from "@/i18n";

export default function LocalizedLink({ href, locale, ...props }) {
  const router = useRouter();
  const pathname =
    typeof href === "string"
      ? href
      : `${href.pathname}${href.hash ? `#${href.hash}` : ""}`;
  const targetLocale =
    locale === undefined ? localeForPath(pathname, router.locale) : locale;

  return <Link href={href} locale={targetLocale} {...props} />;
}
