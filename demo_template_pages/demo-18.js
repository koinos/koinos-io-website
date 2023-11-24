import Layout from "@/components/layout/Layout"
import Banner13_8 from "@/components/sections/Banner13_8"
import Brands1_15 from "@/components/sections/Brands1_15"
import Ct01_22 from "@/components/sections/Ct01_22"
import Ct01_23 from "@/components/sections/Ct01_23"
import Ct02_35 from "@/components/sections/Ct02_35"
import Ct04_12 from "@/components/sections/Ct04_12"
import Ct08_4 from "@/components/sections/Ct08_4"
import Faqs3_12 from "@/components/sections/Faqs3_12"
import Features11_6 from "@/components/sections/Features11_6"
import Features13_7 from "@/components/sections/Features13_7"
import Features2_16 from "@/components/sections/Features2_16"
import Hero18 from "@/components/sections/Hero18"
import Integrations1_6 from "@/components/sections/Integrations1_6"
import Lnk1_18 from "@/components/sections/Lnk1_18"
import Lnk2_18 from "@/components/sections/Lnk2_18"
import Lnk3_14 from "@/components/sections/Lnk3_14"
import Reviews1_8 from "@/components/sections/Reviews1_8"
import Statistic1_14 from "@/components/sections/Statistic1_14"
import Wswrapper_7 from "@/components/sections/Wswrapper_7"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero18 />
                <Brands1_15 />
                <hr className="divider" />
                <Features2_16 />
                <Wswrapper_7 />
                <Features11_6 />
                <Lnk1_18 />
                <Ct01_22 />
                <Lnk2_18 />
                <Lnk3_14 />
                <Features13_7 />
                <Statistic1_14 />
                <hr className="divider" />
                <Ct01_23 />
                <Ct08_4 />
                <Ct02_35 />
                <Integrations1_6 />
                <Ct04_12 />
                <Reviews1_8 />
                <Faqs3_12 />
                <Banner13_8 />
            </Layout>
        </>
    )
}