import Link from "next/link"

export default function Footer1() {
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
                <h6 className="s-17 w-700">Help</h6>
                {/* Links */}
                <ul className="foo-links clearfix">
                  <li>
                    <p><Link href="/faqs">FAQs</Link></p>
                  </li>
                  <li>
                    <p><Link href="/media">Media Kit</Link></p>
                  </li>
                  <li>
                    <p><Link href="https://telegram.koinos.io">Contact us</Link></p>
                  </li>
                </ul>
              </div>
            </div> {/* END FOOTER LINKS */}

            {/*
                        <div className="col-sm-3 col-lg-3 col-xl-2">
                            <div className="footer-links fl-3">

                                <h6 className="s-17 w-700">Legal</h6>

                                <ul className="foo-links clearfix">
                                    <li>
                                        <p><Link href="/terms">Terms of Use</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="/privacy">Privacy Policy</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="/cookies">Cookie Policy</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="#">Site Map</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        */}

            {/* FOOTER LINKS */}
            <div className="col-sm-3">
              <div className="footer-links fl-2">
                {/* Title */}
                <h6 className="s-17 w-700">Social</h6>
                {/* Links */}
                <ul className="foo-links clearfix">
                  <li>
                    <p><Link href="https://telegram.koinos.io" target="_blank">Telegram</Link></p>
                  </li>
                  <li>
                    <p><Link href="https://discord.koinos.io" target="_blank">Discord</Link></p>
                  </li>
                  <li>
                    <p><Link href="https://twitter.com/koinosnetwork" target="_blank">Twitter</Link></p>
                  </li>
                  <li>
                    <p><Link href="https://www.youtube.com/channel/UCamXqlj7q14TllcrCM0ikkw" target="_blank">Youtube</Link></p>
                  </li>
                </ul>
              </div>
            </div> {/* END FOOTER LINKS */}

            {/* FOOTER LINKS */}
            <div className="col-sm-3">
              <div className="footer-links fl-2">
                {/* Title */}
                <h6 className="s-17 w-700">Other</h6>
                {/* Links */}
                <ul className="foo-links clearfix">
                  <li>
                    <p><Link href="https://claim.koinos.io" target="_blank">Claim Pre-Mainnet KOIN</Link></p>
                  </li>
                  <li>
                    <p><Link href="https://medium.com/koinosnetwork" target="_blank">Blog</Link></p>
                  </li>
                </ul>
              </div>
            </div> {/* END FOOTER LINKS */}

            {/* FOOTER NEWSLETTER FORM
                        <div className="col-sm-10 col-md-8 col-lg-4 col-xl-3">
                            <div className="footer-form">

                                <h6 className="s-17 w-700">Follow the Best</h6>

                                <form className="newsletter-form">
                                    <div className="input-group r-06">
                                        <input type="email" className="form-control" placeholder="Email Address" required id="s-email" />
                                        <span className="input-group-btn ico-15">
                                            <button type="submit" className="btn color--theme">
                                                <span className="flaticon-right-arrow-1" />
                                            </button>
                                        </span>
                                    </div>

                                    <label htmlFor="s-email" className="form-notification" />
                                </form>
                            </div>
                        </div>
                        */}
          </div> {/* END FOOTER CONTENT */}
          
          {/* SECURITY NOTICE */}
          <div className="row mt-50 mb-30">
            <div className="col-12">
              <div className="security-notice p-4 bg-dark rounded">
                <h6 className="s-17 w-700 text-danger mb-3">⚠️ Security Notice</h6>
                <p className="p-sm text-white mb-2">
                  <strong>Official Koinos domains only:</strong> koinos.io, claim.koinos.io, docs.koinos.io
                </p>
                <p className="p-sm text-warning">
                  <strong>Warning:</strong> Koinos is NOT currently hiring. Any job offers claiming to be from Koinos are scams. Do not provide personal information or send money.
                </p>
              </div>
            </div>
          </div>
          
          <hr /> {/* FOOTER DIVIDER LINE */}
          {/* BOTTOM FOOTER */}
          <div className="bottom-footer">
            <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
              {/* FOOTER COPYRIGHT */}
              <div className="col">
                <div className="footer-copyright">
                  <p className="p-sm">© 2025 Koinos. <span>All Rights Reserved</span></p>
                </div>
              </div>
              {/* FOOTER SOCIALS
                            <div className="col">
                                <ul className="bottom-footer-socials ico-20 text-end">
                                    <li><Link href="https://discord.com/invite/GErGNsu"><span className="flaticon-facebook" /></Link></li>
                                    <li><Link href="https://twitter.com/koinosnetwork"><span className="flaticon-twitter" /></Link></li>
                                    <li><Link href="https://t.me/joinchat/SXe6mLnb8Ssywlq9"><span className="flaticon-instagram" /></Link></li>
                                    <li><Link href="https://www.youtube.com/channel/UCamXqlj7q14TllcrCM0ikkw"><span className="flaticon-youtube" /></Link></li>
                                </ul>
                            </div>
                            */}
            </div> {/* End row */}
          </div> {/* END BOTTOM FOOTER */}
        </div> {/* End container */}
      </footer>

    </>
  )
}
