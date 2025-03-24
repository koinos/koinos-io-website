import Layout from "@/components/layout/Layout"
import { useTranslations } from 'next-intl'

export default function WhitepaperPage() {
  const t = useTranslations('Whitepaper')

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-dark inner-page-header"
        headTitle={`${t('title')} | Koinos`}
      >
        <section id="terms-page" className="pb-80 inner-page-hero division">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="inner-page-title">
                  <h2 className="s-52 w-700">{t('title')}</h2>
                </div>
                <div className="txt-block legal-info">
                  {/* Abstract */}
                  <h4 className="s-30 w-700">{t('abstract.title')}</h4>
                  <p>{t('abstract.p1')}</p>
                  <p>{t('abstract.p2')}</p>
                  <p>{t('abstract.p3')}</p>

                  {/* Previous Work */}
                  <h4 className="s-30 w-700">{t('previousWork.title')}</h4>
                  <p>{t('previousWork.p1')}</p>
                  <p>{t('previousWork.p2')}</p>
                  <p>{t('previousWork.p3')}</p>

                  {/* KOIN */}
                  <h4 className="s-30 w-700">{t('koin.title')}</h4>
                  <p>{t('koin.p1')}</p>

                  <h5 className="s-24 w-700">{t('koin.supply.title')}</h5>
                  <p>{t('koin.supply.p1')}</p>
                  <p>{t('koin.supply.p2')}</p>

                  <h4 className="s-24 w-700">{t('koin.inflationDeflation.title')}</h4>
                  <p>{t('koin.inflationDeflation.p1')}</p>

                  <h5 className="s-24 w-700">{t('koin.fastFree.title')}</h5>
                  <p>{t('koin.fastFree.p1')}</p>

                  {/* Fork-Less Upgradeability */}
                  <h5 className="s-30 w-700">{t('forkless.title')}</h5>
                  <p>{t('forkless.p1')}</p>
                  <p>{t('forkless.p2')}</p>

                  {/* Universal Language Support */}
                  <h5 className="s-30 w-700">{t('universalLanguage.title')}</h5>
                  <p>{t('universalLanguage.p1')}</p>
                  <p>{t('universalLanguage.p2')}</p>

                  {/* Mana */}
                  <h5 className="s-30 w-700">{t('mana.title')}</h5>
                  <p>{t('mana.p1')}</p>
                  <p>{t('mana.p2')}</p>

                  {/* Implementation Details */}
                  <h5 className="s-30 w-700">{t('implementation.title')}</h5>
                  <p>{t('implementation.p1')}</p>

                  <h5 className="s-24 w-700">{t('implementation.payingTime.title')}</h5>
                  <p>{t('implementation.payingTime.p1')}</p>
                  <p>{t('implementation.payingTime.p2')}</p>

                  {/* Free-to-Use */}
                  <h4 className="s-30 w-700">{t('freeToUse.title')}</h4>
                  <p>{t('freeToUse.p1')}</p>
                  <p>{t('freeToUse.p2')}</p>

                  {/* Multi-Dimensionality */}
                  <h4 className="s-24 w-700">{t('multiDimensionality.title')}</h4>
                  <p>
                    {t.rich('multiDimensionality.p1', {
                      link: (chunks) => (
                        <a href="https://ethresear.ch/t/multidimensional-eip-1559/11651">
                          {chunks}
                        </a>
                      )
                    })}
                  </p>
                  <p>{t('multiDimensionality.p2')}</p>

                  {/* Proof-of-Burn */}
                  <h4 className="s-30 w-700">{t('proofOfBurn.title')}</h4>
                  <p>
                    {t.rich('proofOfBurn.p1', {
                      link1: (chunks) => (
                        <a href="https://bitcoin.org/bitcoin.pdf">{chunks}</a>
                      ),
                      link2: (chunks) => (
                        <a href="https://en.bitcoin.it/wiki/Proof_of_burn">{chunks}</a>
                      )
                    })}
                  </p>

                  {/* Exchange Attack */}
                  <h4 className="s-24 w-700">{t('exchangeAttack.title')}</h4>
                  <p>
                    {t.rich('exchangeAttack.p1', {
                      link: (chunks) => (
                        <a href="https://decrypt.co/38050/steem-steemit-tron-justin-sun-cryptocurrency-war">
                          {chunks}
                        </a>
                      )
                    })}
                  </p>

                  {/* Remaining sections... */}
                  <h4 className="s-30 w-700">{t('virtualMining.title')}</h4>
                  <p>{t('virtualMining.p1')}</p>

                  <h4 className="s-24 w-700">{t('inflation.title')}</h4>
                  <p>{t('inflation.p1')}</p>

                  <h4 className="s-24 w-700">{t('deflation.title')}</h4>
                  <p>{t('deflation.p1')}</p>

                  <h4 className="s-24 w-700">{t('randomness.title')}</h4>
                  <p>
                    {t.rich('randomness.p1', {
                      link: (chunks) => (
                        <a href="https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Pseudo%20Randomness/Verifiable_Random_Functions.pdf">
                          {chunks}
                        </a>
                      )
                    })}
                  </p>

                  <h4 className="s-24 w-700">{t('efficiency.title')}</h4>
                  <p>{t('efficiency.p1')}</p>

                  <h4 className="s-24 w-700">{t('miningPools.title')}</h4>
                  <p>{t('miningPools.p1')}</p>

                  <h4 className="s-24 w-700">{t('liquidity.title')}</h4>
                  <p>{t('liquidity.p1')}</p>

                  <h4 className="s-24 w-700">{t('centralization.title')}</h4>
                  <p>{t('centralization.p1')}</p>

                  {/* Governance */}
                  <h4 className="s-30 w-700">{t('governance.title')}</h4>
                  <p>{t('governance.p1')}</p>
                  <p>{t('governance.p2')}</p>

                  {/* Upgrading Governance */}
                  <h4 className="s-30 w-700">{t('upgradingGovernance.title')}</h4>
                  <p>{t('upgradingGovernance.p1')}</p>

                  {/* Conclusion */}
                  <h4 className="s-30 w-700">{t('conclusion.title')}</h4>
                  <p>{t('conclusion.p1')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  }
}