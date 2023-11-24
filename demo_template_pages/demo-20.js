import Layout from "@/components/layout/Layout"
import Banner3_4 from "@/components/sections/Banner3_4"
import Blog1_7 from "@/components/sections/Blog1_7"
import Brands1_16 from "@/components/sections/Brands1_16"
import Ct01_25 from "@/components/sections/Ct01_25"
import Ct01_26 from "@/components/sections/Ct01_26"
import Ct02_37 from "@/components/sections/Ct02_37"
import Ct03_8 from "@/components/sections/Ct03_8"
import Ct04_14 from "@/components/sections/Ct04_14"
import Features13_8 from "@/components/sections/Features13_8"
import Features2_18 from "@/components/sections/Features2_18"
import Features7_2 from "@/components/sections/Features7_2"
import Hero20 from "@/components/sections/Hero20"
import Integrations1_8 from "@/components/sections/Integrations1_8"
import Lnk1_20 from "@/components/sections/Lnk1_20"
import Lnk2_20 from "@/components/sections/Lnk2_20"
import Reviews1_10 from "@/components/sections/Reviews1_10"
import Statistic1_16 from "@/components/sections/Statistic1_16"
import Wswrapper_9 from "@/components/sections/Wswrapper_9"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="navbar-light">
                <Hero20 />
                <Statistic1_16 />
                <hr className="divider" />
                <Features13_8 />
                <Wswrapper_9 />
                <Lnk1_20 />
                <Ct01_25 />
                <Lnk2_20 />
                <Brands1_16 />
                <hr className="divider" />
                <Features2_18 />
                <Ct03_8 />
                <Ct01_26 />
                <Ct02_37 />
                <Features7_2 />
                <Ct04_14 />
                <Integrations1_8 />
                <Reviews1_10 />
                <Blog1_7 />
                <Banner3_4 />
            </Layout>
        </>
    )
}