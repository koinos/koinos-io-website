import Layout from "@/components/layout/Layout"
import Banner13_7 from "@/components/sections/Banner13_7"
import Blog1_6 from "@/components/sections/Blog1_6"
import Ct01_20 from "@/components/sections/Ct01_20"
import Ct01_21 from "@/components/sections/Ct01_21"
import Ct02_34 from "@/components/sections/Ct02_34"
import Ct03_7 from "@/components/sections/Ct03_7"
import Ct04_11 from "@/components/sections/Ct04_11"
import Features11_5 from "@/components/sections/Features11_5"
import Features2_15 from "@/components/sections/Features2_15"
import Hero17 from "@/components/sections/Hero17"
import Integrations1_5 from "@/components/sections/Integrations1_5"
import Lnk1_17 from "@/components/sections/Lnk1_17"
import Lnk2_17 from "@/components/sections/Lnk2_17"
import Lnk3_13 from "@/components/sections/Lnk3_13"
import Newsletter1_6 from "@/components/sections/Newsletter1_6"
import Projects1_3 from "@/components/sections/Projects1_3"
import Rating1_6 from "@/components/sections/Rating1_6"
import Reviews2_7 from "@/components/sections/Reviews2_7"
import Statistic5_4 from "@/components/sections/Statistic5_4"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero17 />
                <Features2_15 />
                <Lnk1_17 />
                <Features11_5 />
                <Lnk2_17 />
                <Ct01_20 />
                <Statistic5_4 />
                <Ct02_34 />
                <Ct01_21 />
                <Lnk3_13 />
                <Ct04_11 />
                <Integrations1_5 />
                <Ct03_7 />
                <Projects1_3 />
                <Reviews2_7 />
                <Rating1_6 />
                <Banner13_7 />
                <Blog1_6 />
                <Newsletter1_6 />
                <hr className="divider" />
            </Layout>
        </>
    )
}