import { useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Wallets() {
  const t = useTranslations('Wallets');

  const wallets = [
    {
      name: "Kondor",
      descriptionKey: "kondor.description",
      icon: "/images/sections/wallets/kondor.png",
      chrome: true,
      android: false,
      ios: false,
      url: "https://chromewebstore.google.com/detail/kondor/ghipkefkpgkladckmlmdnadmcchefhjl"
    },
    {
      name: "Konio",
      descriptionKey: "konio.description",
      icon: "/images/sections/wallets/konio.png",
      chrome: false,
      android: true,
      ios: true,
      url: "https://konio.io"
    }
  ]

  return (
    <>
      <section id="wallets" className="py-100 features-section division">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-70">
                <h2 className="s-50 w-700">{t('title')}</h2>
                <p className="s-21 color--grey">{t('subtitle')}</p>
              </div>
            </div>
          </div>
          <div className="fbox-wrapper text-center">
            <div className="row row-cols-1 row-cols-md-2">
              {
                wallets.map(wallet =>
                  <div key={wallet.name} className="col">
                    <div className="fbox-2 fb-1 wow" data-aos='fade-up'>
                      <div className="fbox-img gr--whitesmoke h-175">
                        <Link href={wallet.url} target="_blank">
                          <img className="img-fluid light-theme-img" src={wallet.icon} alt="feature-image" />
                          <img className="img-fluid dark-theme-img" src={wallet.icon} alt="feature-image" />
                        </Link>
                      </div>
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">{wallet.name}</h6>
                        <p>{t(wallet.descriptionKey)}</p>
                        <ul className="d-flex justify-content-center gap-2">
                          {wallet.chrome && (
                            <li><Link href={wallet.url} target="_blank"><i className="fa-brands fa-chrome fa-lg"></i></Link></li>
                          )}
                          {wallet.ios && (
                            <li><Link href={wallet.url} target="_blank"><i className="fa-brands fa-apple fa-lg"></i></Link></li>
                          )}
                          {wallet.android && (
                            <li><Link href={wallet.url} target="_blank"><i className="fa-brands fa-android fa-lg"></i></Link></li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
