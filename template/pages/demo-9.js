import Layout from "@/components/layout/Layout"
import Banner16_1 from "@/components/sections/Banner16_1"
import Banner7_3 from "@/components/sections/Banner7_3"
import Brands1_7 from "@/components/sections/Brands1_7"
import Ct01_11 from "@/components/sections/Ct01_11"
import Ct02_18 from "@/components/sections/Ct02_18"
import Ct04_5 from "@/components/sections/Ct04_5"
import Ct13 from "@/components/sections/Ct13"
import Faqs3_8 from "@/components/sections/Faqs3_8"
import Features1_1 from "@/components/sections/Features1_1"
import Features5_7 from "@/components/sections/Features5_7"
import Features6_5 from "@/components/sections/Features6_5"
import Features7_7 from "@/components/sections/Features7_7"
import Hero9 from "@/components/sections/Hero9"
import Integrations2_5 from "@/components/sections/Integrations2_5"
import Lnk1_9 from "@/components/sections/Lnk1_9"
import Lnk2_9 from "@/components/sections/Lnk2_9"
import Lnk3_7 from "@/components/sections/Lnk3_7"
import Pricing1 from "@/components/sections/Pricing1"
import Reviews3_1 from "@/components/sections/Reviews3_1"
import Statistic1_9 from "@/components/sections/Statistic1_9"
import Wswrapper_2 from "@/components/sections/Wswrapper_2"
import Wswrapper_3 from "@/components/sections/Wswrapper_3"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark">
                <Hero9 />
                <Features6_5 />
                <hr className="divider" />
                <Lnk1_9 />
                <Features1_1 />
                <Wswrapper_2 />
                <Lnk2_9 />
                <Ct01_11 />
                <Features5_7 />
                <Statistic1_9 />
                <hr className="divider" />
                <Ct02_18 />
                <Features7_7 />
                <Lnk3_7 />
                <Ct13 />
                <Integrations2_5 />
                <Reviews3_1 />
                <Ct04_5 />
                <Brands1_7 />
                <Pricing1 />
                <Banner16_1 />
                <Faqs3_8 />
                <Wswrapper_3 />
                <Banner7_3 />
            </Layout>
        </>
    )
}