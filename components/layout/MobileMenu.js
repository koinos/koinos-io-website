import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { getSiteCopy } from "@/i18n/site";
import LocaleSwitcher from "@/components/i18n/LocaleSwitcher";
import localeStyles from "@/components/i18n/LocaleSwitcher.module.css";
export default function MobileMenu({ handleMobileMenu }) {
  const router = useRouter();
  const text = getSiteCopy(router.locale);
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

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
          <Link href="#" className="h-link">
            {text.learn}
            <span className="wsarrow" />
          </Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
            <li aria-haspopup="true">
              <LocalizedLink href="/get-koin" onClick={handleMobileMenu}>
                {text.getKoin}
              </LocalizedLink>
            </li>
            <li aria-haspopup="true">
              <LocalizedLink href="/add-liquidity" onClick={handleMobileMenu}>
                {text.addLiquidity}
              </LocalizedLink>
            </li>
            <li aria-haspopup="true">
              <LocalizedLink href="/whitepaper" onClick={handleMobileMenu}>
                {text.whitepaper}
              </LocalizedLink>
            </li>
            <li aria-haspopup="true">
              <LocalizedLink href="/#features" onClick={handleMobileMenu}>
                {text.features}
              </LocalizedLink>
            </li>
            {/*<li aria-haspopup="true"><Link href="/framework">Framework</Link></li>*/}
            <li aria-haspopup="true">
              <LocalizedLink href="/faqs" onClick={handleMobileMenu}>
                {text.faqs}
              </LocalizedLink>
            </li>
          </ul>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link
            href="https://docs.koinos.io"
            onClick={handleMobileMenu}
            className="h-link"
          >
            {text.documentation}
          </Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <LocalizedLink
            href="/ecosystem"
            onClick={handleMobileMenu}
            className="h-link"
          >
            {text.ecosystem}
          </LocalizedLink>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <LocalizedLink href="/#roadmap" onClick={handleMobileMenu} className="h-link">
            {text.roadmap}
          </LocalizedLink>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <LocalizedLink href="/team" onClick={handleMobileMenu} className="h-link">
            {text.team}
          </LocalizedLink>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <LocalizedLink href="/history" onClick={handleMobileMenu} className="h-link">
            {text.history}
          </LocalizedLink>
        </li>

        <li className={`${localeStyles.mobileLanguageItem} nl-simple`}>
          <span className={localeStyles.mobileLanguageLabel}>{text.languageMenu}</span>
          <LocaleSwitcher label={text.language} onNavigate={handleMobileMenu} />
        </li>

        <li className="nl-simple">
          <Link
            legacyBehavior
            href="https://github.com/koinos"
            onClick={handleMobileMenu}
            target="_blank"
            passHref
          >
            <a className={`${localeStyles.mobileGithubLink} h-link`} target="_blank" rel="noopener noreferrer">
              <span>GitHub</span>
              <img
                src="/images/menu/github-mark.svg"
                alt=""
                style={{ width: "30px", height: "30px" }}
                className="light-theme-img"
              />
              <img
                src="/images/menu/github-mark-white.svg"
                alt=""
                style={{ width: "30px", height: "30px" }}
                className="dark-theme-img"
              />
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}
