import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router"
import { useTranslations } from 'next-intl'

export default function MobileMenu({ handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });
  const router = useRouter()
  const t = useTranslations('Menu')
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <ul
        //   Inline style added for navbar list.
        className="wsmenu-list nav-theme"
        style={{
          paddingTop: "22px",
          textAlign: "left"
        }}
      >
        {/* DROPDOWN SUB MENU */}
        <li aria-haspopup="true">
          <span
            className={
              isActive.key == 1 ? "wsmenu-click ws-activearrow" : "wsmenu-click"
            }
            onClick={() => handleToggle(1)}
          >
            <i className="wsmenu-arrow" />
          </span>
          <Link href="#" className="h-link text-start" locale={router.locale} style={{ textAlign: "left" }}>
            {t('learn')}
            <span className="wsarrow" />
          </Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
            <li aria-haspopup="true">
              <Link href="/whitepaper" locale={router.locale} onClick={handleMobileMenu}>
                {t('whitepaper')}
              </Link>
            </li>
            <li aria-haspopup="true">
              <Link href="/#features" locale={router.locale} onClick={handleMobileMenu}>
                {t('features')}
              </Link>
            </li>
            <li aria-haspopup="true">
              <Link href="/faqs" locale={router.locale} onClick={handleMobileMenu}>
                {t('faqs')}
              </Link>
            </li>
          </ul>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link
            href="https://docs.koinos.io"
            onClick={handleMobileMenu}
            className="h-link text-start"
            locale={router.locale}
            style={{ textAlign: "left" }}
          >
            {t('documentation')}
          </Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link
            href="/ecosystem"
            onClick={handleMobileMenu}
            className="h-link text-start"
            locale={router.locale}
            style={{ textAlign: "left" }}
          >
            {t('ecosystem')}
          </Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/#roadmap" onClick={handleMobileMenu} locale={router.locale} className="h-link text-start" style={{ textAlign: "left" }}>
            {t('roadmap')}
          </Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/team" onClick={handleMobileMenu} locale={router.locale} className="h-link text-start" style={{ textAlign: "left" }}>
            {t('team')}
          </Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link
            href="https://github.com/koinos"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMobileMenu}
          >
            <img
              src="/images/menu/github-mark.svg"
              alt="GitHub"
              style={{ width: "30px", height: "30px" }}
              className="light-theme-img"
            />
            <img
              src="/images/menu/github-mark-white.svg"
              alt="GitHub"
              style={{ width: "30px", height: "30px" }}
              className="dark-theme-img"
            />
          </Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <div className="language-switcher py-2 px-3 text-start">
            <div className="d-flex align-items-center" onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}>
              <i className="fa-solid fa-globe me-2"></i>
              <span>{router.locale === 'en' ? 'English' : 'Español'}</span>
            </div>
            
            {isLangDropdownOpen && (
              <div className="ms-4 mt-2">
                <div>
                  <Link 
                    href={router.asPath} 
                    locale="en" 
                    className={`d-block py-1 text-decoration-none ${router.locale === 'en' ? 'active' : ''}`}
                    onClick={() => {
                      setIsLangDropdownOpen(false)
                      handleMobileMenu()
                    }}
                  >
                    English
                  </Link>
                </div>
                <div>
                  <Link 
                    href={router.asPath} 
                    locale="es" 
                    className={`d-block py-1 text-decoration-none ${router.locale === 'es' ? 'active' : ''}`}
                    onClick={() => {
                      setIsLangDropdownOpen(false)
                      handleMobileMenu()
                    }}
                  >
                    Español
                  </Link>
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
    </>
  );
}
