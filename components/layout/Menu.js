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

        <li aria-haspopup="true" className="nl-simple">
          <div className="language-switcher position-relative" style={{paddingTop: '1.2em'}}>
            <button 
              onClick={toggleLangDropdown}
              className="bg-transparent border-0 text-inherit"
              aria-label="Toggle language"
            >
              <i className="fa-solid fa-globe text-white"></i>
            </button>
            
            {isLangDropdownOpen && (
              <div className="lang-dropdown position-absolute shadow-sm rounded py-2" style={{
                right: 0,
                top: '100%',
                minWidth: '100px',
                zIndex: 1000
              }}>
                <Link 
                  href={router.asPath} 
                  locale="en" 
                  className={`d-block px-3 py-1 text-decoration-none text-left ${router.locale === 'en' ? 'active' : ''}`}
                  onClick={() => setIsLangDropdownOpen(false)}
                >
                  English
                </Link>
                <Link 
                  href={router.asPath} 
                  locale="es" 
                  className={`d-block px-3 py-1 text-decoration-none text-left ${router.locale === 'es' ? 'active' : ''}`}
                  onClick={() => setIsLangDropdownOpen(false)}
                >
                  Español
                </Link>
                <Link 
                  href={router.asPath} 
                  locale="it" 
                  className={`d-block px-3 py-1 text-decoration-none text-left ${router.locale === 'es' ? 'active' : ''}`}
                  onClick={() => setIsLangDropdownOpen(false)}
                >
                  Italiano
                </Link>
                <Link 
                  href={router.asPath} 
                  locale="fa" 
                  className={`d-block px-3 py-1 text-decoration-none text-left ${router.locale === 'es' ? 'active' : ''}`}
                  onClick={() => setIsLangDropdownOpen(false)}
                >
                  فارسی
                </Link>
              </div>
            )}
          </div>
        </li>
      </ul>
    </>
  )
}
