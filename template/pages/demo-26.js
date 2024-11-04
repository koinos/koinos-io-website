import Layout from "@/components/layout/Layout"
import Banner13_12 from "@/components/sections/Banner13_12"
import Blog1_9 from "@/components/sections/Blog1_9"
import Brands1_21 from "@/components/sections/Brands1_21"
import Ct01_34 from "@/components/sections/Ct01_34"
import Ct01_35 from "@/components/sections/Ct01_35"
import Ct02_49 from "@/components/sections/Ct02_49"
import Ct03_12 from "@/components/sections/Ct03_12"
import Features11_12 from "@/components/sections/Features11_12"
import Features2_24 from "@/components/sections/Features2_24"
import Features7_4 from "@/components/sections/Features7_4"
import Hero26 from "@/components/sections/Hero26"
import Lnk1_26 from "@/components/sections/Lnk1_26"
import Lnk2_25 from "@/components/sections/Lnk2_25"
import Lnk3_18 from "@/components/sections/Lnk3_18"
import Newsletter1_8 from "@/components/sections/Newsletter1_8"
import Projects1_4 from "@/components/sections/Projects1_4"
import Rating1_10 from "@/components/sections/Rating1_10"
import Reviews2_11 from "@/components/sections/Reviews2_11"
import Statistic5_6 from "@/components/sections/Statistic5_6"
import Wswrapper_12 from "@/components/sections/Wswrapper_12"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="navbar-light">
                <Hero26 />
                <Features11_12 />
                <Lnk1_26 />
                <Ct01_34 />
                <Statistic5_6 />
                <Features2_24 />
                <Lnk2_25 />
                <Rating1_10 />
                <hr className="divider" />
                <Lnk3_18 />
                <Features7_4 />
                <Ct03_12 />
                <Ct01_35 />
                <Ct02_49 />
                <Projects1_4 />
                <Wswrapper_12 />
                <Reviews2_11 />
                <hr className="divider" />
                <Brands1_21 />
                <hr className="divider" />
                <Banner13_12 />
                <Blog1_9 />
                <hr className="divider" />
                <Newsletter1_8 />
                <hr className="divider" />
            </Layout>
        </>
    )
}