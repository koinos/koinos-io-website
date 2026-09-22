import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import LocalizedHead from "@/components/i18n/LocalizedHead"
import { FAQ_COPY } from "@/data/faqs"

export default function FaqPage() {
  const router = useRouter();
  const content = FAQ_COPY[router.locale === "es" ? "es" : "en"];
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

  return (
    <>
      <Layout 
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-dark inner-page-header"
        headTitle={content.headTitle}
      >
        <LocalizedHead
          pathname="/faqs"
          title={content.headTitle}
          description={content.description}
        />
        <section id="faqs-2" className="pb-30 inner-page-hero faqs-section division">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-xl-10">
                {/* INNER PAGE TITLE */}
                <div className="inner-page-title">
                  <h2 className="s-52 w-700">{content.title}</h2>
                </div>
                {/* QUESTIONS ACCORDION */}
                <div className="accordion-wrapper">
                  <ul className="accordion">

                    {
                      content.items.map((faq, index) =>
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
                    <p className="p-lg">{content.contactLead} <Link href="https://telegram.koinos.io" className="color--theme">{content.contactLink}</Link></p>
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
