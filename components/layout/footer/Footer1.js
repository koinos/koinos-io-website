import Link from "next/link"
import { useTranslations } from 'next-intl';

export default function Footer1() {
  const t = useTranslations('Footer');
  return (
    <>
      <footer id="footer-3" className="pt-100 footer ft-3-ntr">
        <div className="container">
          {/* FOOTER CONTENT */}
          <div className="row">
            {/* FOOTER LOGO */}
            <div className="col-sm-3">
              <div className="footer-info">
                <img className="footer-logo" src="/images/logo/png/koinos-logo-white.png" alt="footer-logo" />
                <img className="footer-logo-dark" src="/images/logo/png/koinos-logo-white.png" alt="footer-logo" />
              </div>
            </div>
            {/* FOOTER LINKS */}
            <div className="col-sm-3">
              <div className="footer-links fl-1">
                {/* Title */}
                <h6 className="s-17 w-700">{t('help.title')}</h6>
                {/* Links */}
                <ul className="foo-links clearfix">
                  <li>
                    <p><Link href="/faqs">{t('help.faqs')}</Link></p>
                  </li>
                  <li>
                    <p><Link href="/media">{t('help.media')}</Link></p>
                  </li>
                  <li>
                    <p><Link href="https://telegram.koinos.io">{t('help.contact')}</Link></p>
                  </li>
                </ul>
              </div>
            </div>

            {/* FOOTER LINKS */}
            <div className="col-sm-3">
              <div className="footer-links fl-2">
                {/* Title */}
                <h6 className="s-17 w-700">{t('social.title')}</h6>
                {/* Links */}
                <ul className="foo-links clearfix">
                  <li>
                    <p><Link href="https://telegram.koinos.io" target="_blank">{t('social.telegram')}</Link></p>
                  </li>
                  <li>
                    <p><Link href="https://discord.koinos.io" target="_blank">{t('social.discord')}</Link></p>
                  </li>
                  <li>
                    <p><Link href="https://twitter.com/koinosnetwork" target="_blank">{t('social.twitter')}</Link></p>
                  </li>
                  <li>
                    <p><Link href="https://www.youtube.com/channel/UCamXqlj7q14TllcrCM0ikkw" target="_blank">{t('social.youtube')}</Link></p>
                  </li>
                </ul>
              </div>
            </div>

            {/* FOOTER LINKS */}
            <div className="col-sm-3">
              <div className="footer-links fl-2">
                {/* Title */}
                <h6 className="s-17 w-700">{t('other.title')}</h6>
                {/* Links */}
                <ul className="foo-links clearfix">
                  <li>
                    <p><Link href="https://claim.koinos.io" target="_blank">{t('other.claim')}</Link></p>
                  </li>
                  <li>
                    <p><Link href="https://koinos.group/story" target="_blank">{t('other.story')}</Link></p>
                  </li>
                  <li>
                    <p><Link href="https://medium.com/koinosnetwork" target="_blank">{t('other.blog')}</Link></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          {/* BOTTOM FOOTER */}
          <div className="bottom-footer">
            <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
              {/* FOOTER COPYRIGHT */}
              <div className="col">
                <div className="footer-copyright">
                    <p className="p-sm">© 2024 Koinos. <span>{t('copyright')}</span></p>
                </div>
              </div>
              <div className="col">
                <ul className="bottom-footer-socials ico-20 text-end">
                  <li><Link href="https://discord.com/invite/GErGNsu"><i className="fa-brands fa-discord"></i></Link></li>
                  <li><Link href="https://twitter.com/koinosnetwork"><i className="fa-brands fa-square-x-twitter"></i></Link></li>
                  <li><Link href="https://t.me/joinchat/SXe6mLnb8Ssywlq9"><i className="fa-brands fa-telegram"></i></Link></li>
                  <li><Link href="https://www.youtube.com/channel/UCamXqlj7q14TllcrCM0ikkw"><i className="fa-brands fa-youtube"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
