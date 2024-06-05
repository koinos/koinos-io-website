import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { useEffect, useState } from 'react';

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, headerCls }) {

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const menu = document.querySelector('.wsmainwp');
            const body = document.body;

            if (offset > 100) {
                if (body.classList.contains('theme--dark')) {
                    menu.classList.add('theme--dark');
                }
                menu.classList.add('menuOnceScrolled');
            } else {
                if (body.classList.contains('theme--dark')) {
                    menu.classList.remove('theme--dark');
                }
                menu.classList.remove('menuOnceScrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header id="header" className={`tra-menu white-scroll ${headerCls ? headerCls : ""}`}>
                <div className="header-wrapper">
                    {/* MOBILE HEADER */}
                    <div className="wsmobileheader clearfix">
                        <span className="smllogo">
                            <Link href="/">
                                <>
                                <img className="dark-theme-img" src="/images/logo-white-white.png" alt="mobile-logo" />
                                <img className="light-theme-img" src="/images/logo-purple.png" alt="mobile-logo" />
                                </>
                            </Link>
                        </span>
                        <a id="wsnavtoggle" className="wsanimated-arrow" onClick={handleMobileMenu}><span /></a>
                    </div>
                    {/* NAVIGATION MENU */}
                    <div className={`wsmainfull menu clearfix ${scroll ? "scroll" : ""}`}>
                        <div className="wsmainwp clearfix">
                            {/* HEADER BLACK LOGO */}
                            <div className="desktoplogo">
                                <Link href="/" className="logo-black">
                                    <>
                                    <img className="light-theme-img" src="/images/logo-purple.png" alt="logo" />
                                    <img className="dark-theme-img" src="/images/logo-white-white.png" alt="logo" />
                                    </>
                                </Link>
                            </div>
                            {/* HEADER WHITE LOGO */}
                            <div className="desktoplogo">
                                <Link href="/" className="logo-white"><img src="/images/logo-white.png" alt="logo" /></Link>
                            </div>
                            {/* MAIN MENU */}
                            <nav className="wsmenu clearfix" style={{ height: `${isMobileMenu ? "100vh" : ""}` }}>
                                {isMobileMenu ? <MobileMenu handleMobileMenu={handleMobileMenu}/> : <Menu />}
                            </nav> {/* END MAIN MENU */}
                        </div>
                    </div> {/* END NAVIGATION MENU */}
                </div> {/* End header-wrapper */}
            </header>

        </>
    )
}
