import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { useTranslations } from 'next-intl'

export default function FaqPage() {
  const t = useTranslations();
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
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

  const faqs = [
    {
      question: t('FAQs.q1'),
      answer: t('FAQs.a1')
    },
    {
      question: t('FAQs.q2'),
      answer: t('FAQs.a2')
    },
    {
      question: t('FAQs.q3'),
      answer: t('FAQs.a3')
    },
    {
      question: t('FAQs.q4'),
      answer: t('FAQs.a4')
    },
    {
      question: t('FAQs.q5'),
      answer: t('FAQs.a5')
    },
    {
      question: t('FAQs.q6'),
      answer: t('FAQs.a6')
    },
    {
      question: t('FAQs.q7'),
      answer: t('FAQs.a7')
    },
    {
      question: t('FAQs.q8'),
      answer: t('FAQs.a8')
    },
    {
      question: t('FAQs.q9'),
      answer: t('FAQs.a9')
    },
    {
      question: t('FAQs.q10'),
      answer: t('FAQs.a10')
    },
    {
      question: t('FAQs.q11'),
      answer: t('FAQs.a11')
    },
    {
      question: t('FAQs.q12'),
      answer: t('FAQs.a12')
    },
  ];

  return (
    <>
      <Layout 
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-dark inner-page-header"
        headTitle={t('FAQs.pageTitle')}
      >
        <section id="faqs-2" className="pb-30 inner-page-hero faqs-section division">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-xl-10">
                {/* INNER PAGE TITLE */}
                <div className="inner-page-title">
                  <h2 className="s-52 w-700">{t('FAQs.heading')}</h2>
                </div>
                {/* QUESTIONS ACCORDION */}
                <div className="accordion-wrapper">
                  <ul className="accordion">

                    {
                      faqs.map((faq, index) =>
                        <li key={index} className={isActive.key == index + 1 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(index + 1)}>
                          {/* CATEGORY HEADER */}
                          <div className="accordion-thumb">
                            <h4 className="s-18 w-600">{faq.question}</h4>
                          </div>
                          {/* CATEGORY ANSWERS */}
                          <div className="accordion-panel" style={{ display: `${isActive.key == index + 1 ? "block" : "none"}` }}>
                            {/* QUESTION #1 */}
                            <div className="accordion-panel-item mb-35">
                              {/* Answer */}
                              <div className="faqs-2-answer color--grey">
                                {/* Text */}
                                <p dangerouslySetInnerHTML={{ __html: faq.answer }}>
                                </p>
                              </div>
                            </div>	{/* END QUESTION #1 */}

                          </div>	{/* END CATEGORY ANSWERS */}
                        </li>
                      )
                    }

                  </ul>
                </div>	{/* END QUESTIONS ACCORDION */}
                {/* MORE QUESTIONS LINK */}
                <div className="more-questions">
                  <div className="more-questions-txt bg--white-400 r-100">
                    <p className="p-lg">{t('FAQs.haveQuestions')} <Link href="https://telegram.koinos.io" className="color--theme">{t('FAQs.getInTouch')}</Link></p>
                  </div>
                </div>
              </div>
            </div>    {/* End row */}
          </div>	   {/* End container */}
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