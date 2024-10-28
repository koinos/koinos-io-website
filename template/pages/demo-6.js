import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Brands1_4 from "@/components/sections/Brands1_4"
import Ct01_9 from "@/components/sections/Ct01_9"
import Ct02_12 from "@/components/sections/Ct02_12"
import Ct02_13 from "@/components/sections/Ct02_13"
import Ct04_2 from "@/components/sections/Ct04_2"
import Faqs3_5 from "@/components/sections/Faqs3_5"
import Features13_2 from "@/components/sections/Features13_2"
import Features2_6 from "@/components/sections/Features2_6"
import Features5_5 from "@/components/sections/Features5_5"
import Hero6 from "@/components/sections/Hero6"
import Integrations1_2 from "@/components/sections/Integrations1_2"
import Lnk1_6 from "@/components/sections/Lnk1_6"
import Lnk2_6 from "@/components/sections/Lnk2_6"
import Lnk3_4 from "@/components/sections/Lnk3_4"
import Reviews1_4 from "@/components/sections/Reviews1_4"
import Statistic1_6 from "@/components/sections/Statistic1_6"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero6 />
                <Statistic1_6 />
                <hr className="divider" />
                <Lnk1_6 />
                <Ct04_2 />
                <Ct02_12 />
                <Features2_6 />
                <Lnk2_6 />
                <Brands1_4 />
                <hr className="divider" />
                <Lnk3_4 />
                <Features13_2 />
                <Features5_5 />
                <Ct02_13 />
                <Ct01_9 />
                <Integrations1_2 />
                <Reviews1_4 />
                <Faqs3_5 />
                <Banner1 />
            </Layout>
        </>
    )
}