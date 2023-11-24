import Layout from "@/components/layout/Layout"
import Banner3_2 from "@/components/sections/Banner3_2"
import Brands1_2 from "@/components/sections/Brands1_2"
import Ct01_3 from "@/components/sections/Ct01_3"
import Ct02_3 from "@/components/sections/Ct02_3"
import Ct02_4 from "@/components/sections/Ct02_4"
import Ct03_1 from "@/components/sections/Ct03_1"
import Faqs3_2 from "@/components/sections/Faqs3_2"
import Features12_2 from "@/components/sections/Features12_2"
import Features5_2 from "@/components/sections/Features5_2"
import Hero2 from "@/components/sections/Hero2"
import Integrations1_10 from "@/components/sections/Integrations1_10"
import Lnk1_2 from "@/components/sections/Lnk1_2"
import Lnk2_2 from "@/components/sections/Lnk2_2"
import Lnk3_2 from "@/components/sections/Lnk3_2"
import Lnk4_1 from "@/components/sections/Lnk4_1"
import Reviews1_2 from "@/components/sections/Reviews1_2"
import Statistic1_2 from "@/components/sections/Statistic1_2"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark">
                <Hero2 />
                <Brands1_2 />
                <hr className="divider" />
                <Features2_2 />
                <hr className="divider" />
                <Lnk1_2 />
                <Features12_2 />
                <Ct02_3 />
                <Lnk2_2 />
                <Ct02_4 />
                <Ct01_3 />
                <Lnk3_2 />
                <Statistic1_2 />
                <hr className="divider" />
                <Features5_2 />
                <Lnk4_1 />
                <Ct03_1 />
                <Integrations1_10 />
                <Reviews1_2 />
                <Faqs3_2 />
                <Banner3_2 />
            </Layout>
        </>
    )
}