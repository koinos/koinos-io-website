import Link from "next/link"
import { useRouter } from "next/router"
import LocalizedLink from "@/components/i18n/LocalizedLink"
import { getSiteCopy } from "@/i18n/site"
import LocaleSwitcher from "@/components/i18n/LocaleSwitcher"
import localeStyles from "@/components/i18n/LocaleSwitcher.module.css"

export default function Menu() {
  const router = useRouter();
  const text = getSiteCopy(router.locale);

  return (
    <>

      <ul className="wsmenu-list nav-theme">

        <li aria-haspopup="true">
          <Link href="#" className="h-link">{text.learn}<span className="wsarrow" /></Link>
          <ul className="sub-menu">
            <li aria-haspopup="true"><LocalizedLink href="/get-koin">{text.getKoin}</LocalizedLink></li>
            <li aria-haspopup="true"><LocalizedLink href="/whitepaper">{text.whitepaper}</LocalizedLink></li>
            <li aria-haspopup="true"><LocalizedLink href="/#features">{text.features}</LocalizedLink></li>
            <li aria-haspopup="true"><LocalizedLink href="/faqs">{text.faqs}</LocalizedLink></li>
          </ul>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="https://docs.koinos.io" className="h-link">{text.documentation}</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <LocalizedLink href="/ecosystem" className="h-link">{text.ecosystem}</LocalizedLink>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <LocalizedLink href="/#roadmap" className="h-link">{text.roadmap}</LocalizedLink>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <LocalizedLink href="/team" className="h-link">{text.team}</LocalizedLink>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <LocalizedLink href="/history" className="h-link">{text.history}</LocalizedLink>
        </li>

        <li className={`${localeStyles.headerActions} nl-simple`}>
          <LocaleSwitcher label={text.language} />
          <Link legacyBehavior href="https://github.com/koinos" target="_blank" passHref>
            <a className={`${localeStyles.githubLink} h-link`} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img className="light-theme-img" src="/images/menu/github-mark.svg" alt="GitHub" style={{ width: '30px', height: '30px' }} />
              <img className="dark-theme-img" src="/images/menu/github-mark-white.svg" alt="GitHub" style={{ width: '30px', height: '30px' }} />
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}
