import Layout from "@/components/layout/Layout"
import Banner3_3 from "@/components/sections/Banner3_3"
import Blog1_3 from "@/components/sections/Blog1_3"
import Brands1_9 from "@/components/sections/Brands1_9"
import Ct01_13 from "@/components/sections/Ct01_13"
import Ct02_23 from "@/components/sections/Ct02_23"
import Ct02_24 from "@/components/sections/Ct02_24"
import Ct03_5 from "@/components/sections/Ct03_5"
import Ct04_6 from "@/components/sections/Ct04_6"
import Features13_4 from "@/components/sections/Features13_4"
import Features2_10 from "@/components/sections/Features2_10"
import Features7_1 from "@/components/sections/Features7_1"
import Hero11 from "@/components/sections/Hero11"
import Lnk1_11 from "@/components/sections/Lnk1_11"
import Lnk2_11 from "@/components/sections/Lnk2_11"
import Lnk3_9 from "@/components/sections/Lnk3_9"
import Newsletter1_3 from "@/components/sections/Newsletter1_3"
import Projects1_1 from "@/components/sections/Projects1_1"
import Rating1_3 from "@/components/sections/Rating1_3"
import Reviews1_7 from "@/components/sections/Reviews1_7"
import Statistic5_1 from "@/components/sections/Statistic5_1"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark white-menu">
                <Hero11 />
                <Brands1_9 />
                <hr className="divider" />
                <Features13_4 />
                <Statistic5_1 />
                <Lnk1_11 />
                <Ct02_23 />
                <Lnk2_11 />
                <Features2_10 />
                <Lnk3_9 />
                <Ct02_24 />
                <Ct04_6 />
                <Features7_1 />
                <Ct03_5 />
                <Ct01_13 />
                <Projects1_1 />
                <Reviews1_7 />
                <Rating1_3 />
                <Banner3_3 />
                <Blog1_3 />
                <Newsletter1_3 />
            </Layout>
        </>
    )
}