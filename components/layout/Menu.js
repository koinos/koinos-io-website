import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslations } from 'next-intl'

export default function Menu() {
  const router = useRouter()
  const t = useTranslations('Menu')
  return (
    <>
      <ul className="wsmenu-list nav-theme">
        <li aria-haspopup="true">
          <Link href="#" className="h-link">{t('learn')}<span className="wsarrow" /></Link>
          <ul className="sub-menu">
            <li aria-haspopup="true"><Link href="/whitepaper">{t('whitepaper')}</Link></li>
            <li aria-haspopup="true"><Link href="/#features">{t('features')}</Link></li>
            <li aria-haspopup="true"><Link href="/faqs">{t('faqs')}</Link></li>
          </ul>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="https://docs.koinos.io" className="h-link">{t('documentation')}</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/ecosystem" className="h-link">{t('ecosystem')}</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/#roadmap" className="h-link">{t('roadmap')}</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/team" className="h-link">{t('team')}</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link legacyBehavior href="https://github.com/koinos" target="_blank" passHref>
            <a className="h-link" target="_blank" rel="noopener noreferrer">
              <img className="light-theme-img" src="/images/menu/github-mark.svg" alt="GitHub" style={{ width: '30px', height: '30px' }} />
              <img className="dark-theme-img" src="/images/menu/github-mark-white.svg" alt="GitHub" style={{ width: '30px', height: '30px' }} />
            </a>
          </Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <div className="language-switcher mt-3">
            <Link href={router.asPath} locale="en" className={router.locale === 'en' ? 'active' : ''}>
              EN
            </Link>
            {' | '}
            <Link href={router.asPath} locale="es" className={router.locale === 'es' ? 'active' : ''}>
              ES
            </Link>
          </div>
        </li>
      </ul>
    </>
  )
}
