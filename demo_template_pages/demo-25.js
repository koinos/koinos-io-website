import Layout from "@/components/layout/Layout"
import Banner3_5 from "@/components/sections/Banner3_5"
import Brands1_20 from "@/components/sections/Brands1_20"
import Ct01_31 from "@/components/sections/Ct01_31"
import Ct01_32 from "@/components/sections/Ct01_32"
import Ct01_33 from "@/components/sections/Ct01_33"
import Ct03_11 from "@/components/sections/Ct03_11"
import Ct04_18 from "@/components/sections/Ct04_18"
import Faqs3_15 from "@/components/sections/Faqs3_15"
import Features13_9 from "@/components/sections/Features13_9"
import Features2_23 from "@/components/sections/Features2_23"
import Features5_13 from "@/components/sections/Features5_13"
import Hero25 from "@/components/sections/Hero25"
import Integrations2_11 from "@/components/sections/Integrations2_11"
import Lnk1_25 from "@/components/sections/Lnk1_25"
import Lnk2_24 from "@/components/sections/Lnk2_24"
import Lnk3_17 from "@/components/sections/Lnk3_17"
import Rating1_9 from "@/components/sections/Rating1_9"
import Reviews2_10 from "@/components/sections/Reviews2_10"
import Statistic1_21 from "@/components/sections/Statistic1_21"
import Wswrapper_11 from "@/components/sections/Wswrapper_11"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero25 />
                <Brands1_20 />
                <hr className="divider" />
                <Lnk1_25 />
                <Ct01_31 />
                <Lnk2_24 />
                <Statistic1_21 />
                <hr className="divider" />
                <Ct01_32 />
                <Features13_9 />
                <Ct04_18 />
                <Wswrapper_11 />
                <Features2_23 />
                <hr className="divider" />
                <Lnk3_17 />
                <hr className="divider" />
                <Features5_13 />
                <Reviews2_10 />
                <Rating1_9 />
                <hr className="divider" />
                <Ct03_11 />
                <Integrations2_11 />
                <Ct01_33 />
                <Faqs3_15 />
                <Banner3_5 />
            </Layout>
        </>
    )
}