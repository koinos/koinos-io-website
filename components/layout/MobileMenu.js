import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="wsmenu-list nav-theme">
                {/* DROPDOWN SUB MENU */}
                <li aria-haspopup="true">
                    <span className={isActive.key == 1 ? "wsmenu-click ws-activearrow" : "wsmenu-click"} onClick={() => handleToggle(1)}><i className="wsmenu-arrow" /></span>
                    <Link href="#" className="h-link">Learn<span className="wsarrow" /></Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li aria-haspopup="true"><Link href="/whitepaper">Whitepaper</Link></li>
                        <li aria-haspopup="true"><Link href="/#features">Features</Link></li>
                        {/*<li aria-haspopup="true"><Link href="/framework">Framework</Link></li>*/}
                        <li aria-haspopup="true"><Link href="/faqs">FAQs</Link></li>
                    </ul>
                </li>
                <li aria-haspopup="true">
                    <span className={isActive.key == 2 ? "wsmenu-click ws-activearrow" : "wsmenu-click"} onClick={() => handleToggle(2)}><i className="wsmenu-arrow" /></span>
                    <Link href="#" className="h-link">Build<span className="wsarrow" /></Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li aria-haspopup="true" target="_blank"><Link href="https://docs.koinos.io">Documentation</Link></li>
                        <li aria-haspopup="true" target="_blank"><Link href="https://learnkoinos.xyz/docs">Learn Koinos</Link></li>
                    </ul>
                </li>

                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/#community" className="h-link">Community</Link>
                </li>

                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/#roadmap" className="h-link">Roadmap</Link>
                </li>

                <li className="nl-simple" aria-haspopup="true">
                    <Link href="/#team" className="h-link">Team</Link>
                </li>

                <li className="nl-simple" aria-haspopup="true">
                    <Link legacyBehavior href="https://github.com/koinos" target="_blank" passHref>
                        <a className="h-link" target="_blank" rel="noopener noreferrer">
                            <img src="/images/icons/github-mark.svg" alt="GitHub" style={{ width: '30px', height: '30px' }} />
                        </a>
                    </Link>
                </li>
            </ul>
        </>
    )
}
