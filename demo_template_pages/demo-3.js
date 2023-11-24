import Layout from "@/components/layout/Layout"
import Banner13_13 from "@/components/sections/Banner13_13"
import Brands1_23 from "@/components/sections/Brands1_23"
import Ct01_4 from "@/components/sections/Ct01_4"
import Ct02_5 from "@/components/sections/Ct02_5"
import Ct02_6 from "@/components/sections/Ct02_6"
import Ct02_7 from "@/components/sections/Ct02_7"
import Ct04_1 from "@/components/sections/Ct04_1"
import Faqs3_3 from "@/components/sections/Faqs3_3"
import Features11_13 from "@/components/sections/Features11_13"
import Features12_3 from "@/components/sections/Features12_3"
import Features2_3 from "@/components/sections/Features2_3"
import Features5_3 from "@/components/sections/Features5_3"
import Hero3 from "@/components/sections/Hero3"
import Integrations2_2 from "@/components/sections/Integrations2_2"
import Lnk1_3 from "@/components/sections/Lnk1_3"
import Lnk2_3 from "@/components/sections/Lnk2_3"
import Lnk3_3 from "@/components/sections/Lnk3_3"
import Reviews2_1 from "@/components/sections/Reviews2_1"
import Statistic1_3 from "@/components/sections/Statistic1_3"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="navbar-light">
                <Hero3 />
                <Features11_13 />
                <Lnk1_3 />
                <Ct02_5 />
                <Features2_3 />
                <Lnk2_3 />
                <Statistic1_3 />
                <hr className="divider" />
                <Features12_3 />
                <Ct02_6 />
                <Ct04_1 />
                <Lnk3_3 />
                <Features5_3 />
                <Reviews2_1 />
                <Brands1_23 />
                <Integrations2_2 />
                <Ct01_4 />
                <Ct02_7 />
                <Faqs3_3 />
                <Banner13_13 />
            </Layout>
        </>
    )
}