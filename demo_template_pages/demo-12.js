import Layout from "@/components/layout/Layout"
import Banner13_4 from "@/components/sections/Banner13_4"
import Blog1_4 from "@/components/sections/Blog1_4"
import Brands1_10 from "@/components/sections/Brands1_10"
import Ct01_14 from "@/components/sections/Ct01_14"
import Ct02_25 from "@/components/sections/Ct02_25"
import Ct02_26 from "@/components/sections/Ct02_26"
import Ct02_53 from "@/components/sections/Ct02_53"
import Features11_1 from "@/components/sections/Features11_1"
import Features12_6 from "@/components/sections/Features12_6"
import Features2_11 from "@/components/sections/Features2_11"
import Hero12 from "@/components/sections/Hero12"
import Lnk1_12 from "@/components/sections/Lnk1_12"
import Lnk2_12 from "@/components/sections/Lnk2_12"
import Newsletter1_4 from "@/components/sections/Newsletter1_4"
import Projects1_2 from "@/components/sections/Projects1_2"
import Rating1_4 from "@/components/sections/Rating1_4"
import Reviews3_2 from "@/components/sections/Reviews3_2"
import Statistic5_2 from "@/components/sections/Statistic5_2"
import Wswrapper_5 from "@/components/sections/Wswrapper_5"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="navbar-light">
                <Hero12 />
                <Features11_1 />
                <Lnk1_12 />
                <Ct02_25 />
                <Features2_11 />
                <hr className="divider" />
                <Ct02_53 />
                <Features12_6 />
                <Ct02_26 />
                <Lnk2_12 />
                <Statistic5_2 />
                <Ct01_14 />
                <Reviews3_2 />
                <Rating1_4 />
                <Wswrapper_5 />
                <Projects1_2 />
                <Brands1_10 />
                <Banner13_4 />
                <Blog1_4 />
                <Newsletter1_4 />
            </Layout>
        </>
    )
}