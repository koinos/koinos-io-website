import Layout from "@/components/layout/Layout"
import Banner7_1 from "@/components/sections/Banner7_1"
import Ct01_7 from "@/components/sections/Ct01_7"
import Ct01_8 from "@/components/sections/Ct01_8"
import Ct02_10 from "@/components/sections/Ct02_10"
import Ct02_11 from "@/components/sections/Ct02_11"
import Ct03_3 from "@/components/sections/Ct03_3"
import Ct08_2 from "@/components/sections/Ct08_2"
import Features11_14 from "@/components/sections/Features11_14"
import Features13_1 from "@/components/sections/Features13_1"
import Features2_5 from "@/components/sections/Features2_5"
import Features5_4 from "@/components/sections/Features5_4"
import Hero5 from "@/components/sections/Hero5"
import Integrations1_1 from "@/components/sections/Integrations1_1"
import Lnk1_5 from "@/components/sections/Lnk1_5"
import Lnk2_5 from "@/components/sections/Lnk2_5"
import Reviews1_3 from "@/components/sections/Reviews1_3"
import Statistic1_5 from "@/components/sections/Statistic1_5"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero5 />
                <Statistic1_5 />
                <hr className="divider" />
                <Features11_14 />
                <Lnk1_5 />
                <Features2_5 />
                <hr className="divider" />
                <Lnk2_5 />
                <Ct01_7 />
                <Ct02_10 />
                <Ct01_8 />
                <Features13_1 />
                <Features5_4 />
                <Ct02_11 />
                <Ct08_2 />
                <Ct03_3 />
                <Integrations1_1 />
                <Reviews1_3 />
                <hr className="divider" />
                <Banner7_1 />
                <hr className="divider" />
            </Layout>
        </>
    )
}