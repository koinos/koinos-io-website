import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Menu() {
  const router = useRouter()
  const t = useTranslations('Menu')
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen)
  }

  return (
    <>
      <ul className="wsmenu-list nav-theme">
        <li aria-haspopup="true">
          <Link href="#" locale={router.locale} className="h-link">{t('learn')}<span className="wsarrow" /></Link>
          <ul className="sub-menu">
            <li aria-haspopup="true"><Link href="/whitepaper" locale={router.locale}>{t('whitepaper')}</Link></li>
            <li aria-haspopup="true"><Link href="/#features" locale={router.locale}>{t('features')}</Link></li>
            <li aria-haspopup="true"><Link href="/faqs" locale={router.locale}>{t('faqs')}</Link></li>
          </ul>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="https://docs.koinos.io" locale={router.locale} className="h-link">{t('documentation')}</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/ecosystem" locale={router.locale} className="h-link">{t('ecosystem')}</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/#roadmap" locale={router.locale} className="h-link">{t('roadmap')}</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/team" locale={router.locale} className="h-link">{t('team')}</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link legacyBehavior href="https://github.com/koinos" target="_blank" passHref>
            <a className="h-link" target="_blank" rel="noopener noreferrer">
              <img className="light-theme-img" src="/images/menu/github-mark.svg" alt="GitHub" style={{ width: '30px', height: '30px' }} />
              <img className="dark-theme-img" src="/images/menu/github-mark-white.svg" alt="GitHub" style={{ width: '30px', height: '30px' }} />
            </a>
          </Link>
        </li>

        <li aria-haspopup="true">
          <div className="h-link" style={{paddingTop: '1.2em', cursor: 'pointer'}}>
            <i className="fa-solid fa-globe text-white"></i>
            <span className="wsarrow" />
          </div>
          <ul className="sub-menu">
            <li aria-haspopup="true">
              <Link 
                href={router.asPath} 
                locale="en" 
                className={router.locale === 'en' ? 'active' : ''}
              >
                English
              </Link>
            </li>
            <li aria-haspopup="true">
              <Link 
                href={router.asPath} 
                locale="es" 
                className={router.locale === 'es' ? 'active' : ''}
              >
                Español
              </Link>
            </li>
            <li aria-haspopup="true">
              <Link 
                href={router.asPath} 
                locale="it" 
                className={router.locale === 'it' ? 'active' : ''}
              >
                Italiano
              </Link>
            </li>
            <li aria-haspopup="true">
              <Link 
                href={router.asPath} 
                locale="fa" 
                className={router.locale === 'fa' ? 'active' : ''}
              >
                فارسی
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}
