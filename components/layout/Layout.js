import { useEffect, useState } from "react";
import PageHead from "./PageHead";
import Footer1 from "./footer/Footer1";
import Header1 from "./header/Header1";

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  children,
  headerCls,
}) {
  const [scroll, setScroll] = useState(0);
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("wsactive")
      : document.body.classList.remove("wsactive");
  };

  return (
    <>
      <PageHead headTitle={headTitle} />
      <div id="page" className="page font--jakarta">
        {!headerStyle && (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            headerCls={headerCls}
          />
        )}
        {headerStyle == 1 ? (
          <Header1
            scroll={scroll}
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
            headerCls={headerCls}
          />
        ) : null}

        <main className="main">
          {children}
        </main>

        {!footerStyle && <Footer1 />}
        {footerStyle == 1 ? <Footer1 /> : null}
      </div>
    </>
  );
}
