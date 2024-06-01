
import Link from "next/link"
export default function Footer3() {
    return (
        <>
            <footer id="footer-3" className="pt-100 footer ft-3-ntr">
                <div className="container">
                    {/* FOOTER CONTENT */}
                    <div className="row">
                        {/* FOOTER LOGO */}
                        <div className="col-sm-3">
                            <div className="footer-info">
                                <img className="footer-logo" src="/images/logo-purple.png" alt="footer-logo" />
                                <img className="footer-logo-dark" src="/images/logo-purple-white.png" alt="footer-logo" />
                            </div>
                            <div className="footer-info">
                            <ul className="foo-links clearfix">
                                    <li>
                                        <p><Link href="/faqs">Documentation</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="https://twitter.com/koinosnetwork">Learn Koinos</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="https://twitter.com/koinosnetwork">Block Explorer</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* FOOTER LINKS */}
                        <div className="col-sm-3">
                            <div className="footer-links fl-1">
                                {/* Title */}
                                <h6 className="s-17 w-700">Communities</h6>
                                {/* Links */}
                                <ul className="foo-links clearfix">
                                    <li>
                                        <p><Link href="https://twitter.com/koinosarmy">Koinos Army</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="https://planetkoinos.com/">Planet Koinos</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="https://thekoinpress.com/">The Koin Press</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="https://koincast.io/">Koincast</Link></p>
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
                                <h6 className="s-17 w-700">Socials</h6>
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
                                <h6 className="s-17 w-700">Insides</h6>
                                {/* Links */}
                                <ul className="foo-links clearfix">
                                    <li>
                                        <p><Link href="https://koinos.group/story" target="_blank">Our Story</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="https://medium.com/koinosnetwork" target="_blank">Blog</Link></p>
                                    </li>
                                    <li>
                                        <p><Link href="https://claim.koinos.io" target="_blank">Claim Pre-Mainnet KOIN</Link></p>
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
                    <hr /> {/* FOOTER DIVIDER LINE */}
                    {/* BOTTOM FOOTER */}
                    <div className="bottom-footer">
                        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
                            {/* FOOTER COPYRIGHT */}
                            <div className="col">
                                <div className="footer-copyright">
                                    <p className="p-sm">© 2023 Koinos. <span>All Rights Reserved</span></p>
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
