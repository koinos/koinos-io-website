import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
  const router = useRouter();

  return (
    <>

      <ul className="wsmenu-list nav-theme">

        <li aria-haspopup="true">
          <Link href="#" className="h-link">Learn<span className="wsarrow" /></Link>
          <ul className="sub-menu">
            <li aria-haspopup="true"><Link href="/whitepaper">Whitepaper</Link></li>
            <li aria-haspopup="true"><Link href="/#features">Features</Link></li>
            <li aria-haspopup="true"><Link href="/faqs">FAQs</Link></li>
          </ul>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="https://docs.koinos.io" className="h-link">Documentation</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/ecosystem" className="h-link">Ecosystem</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/#roadmap" className="h-link">Roadmap</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link href="/team" className="h-link">Team</Link>
        </li>

        <li className="nl-simple" aria-haspopup="true">
          <Link legacyBehavior href="https://github.com/koinos" target="_blank" passHref>
            <a className="h-link" target="_blank" rel="noopener noreferrer">
              <img className="light-theme-img" src="/images/menu/github-mark.svg" alt="GitHub" style={{ width: '30px', height: '30px' }} />
              <img className="dark-theme-img" src="/images/menu/github-mark-white.svg" alt="GitHub" style={{ width: '30px', height: '30px' }} />
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}
