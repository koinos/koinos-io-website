import Layout from "@/components/layout/Layout"
import Banner13_3 from "@/components/sections/Banner13_3"
import Blog1_2 from "@/components/sections/Blog1_2"
import Brands1_8 from "@/components/sections/Brands1_8"
import Ct01_12 from "@/components/sections/Ct01_12"
import Ct02_19 from "@/components/sections/Ct02_19"
import Ct02_20 from "@/components/sections/Ct02_20"
import Ct02_21 from "@/components/sections/Ct02_21"
import Ct02_22 from "@/components/sections/Ct02_22"
import Ct03_4 from "@/components/sections/Ct03_4"
import Features11_15 from "@/components/sections/Features11_15"
import Features12_5 from "@/components/sections/Features12_5"
import Features2_9 from "@/components/sections/Features2_9"
import Hero10 from "@/components/sections/Hero10"
import Lnk1_10 from "@/components/sections/Lnk1_10"
import Lnk2_10 from "@/components/sections/Lnk2_10"
import Lnk3_8 from "@/components/sections/Lnk3_8"
import Newsletter1_2 from "@/components/sections/Newsletter1_2"
import Reviews1_6 from "@/components/sections/Reviews1_6"
import Statistic1_10 from "@/components/sections/Statistic1_10"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header white-menu">
                <Hero10 />
                <Features11_15 />
                <Lnk1_10 />
                <Ct02_19 />
                <Statistic1_10 />
                <hr className="divider" />
                <Features2_9 />
                <Ct02_20 />
                {/* <Wswrapper_4 /> */}
                <Lnk2_10 />
                <Ct02_21 />
                <Features12_5 />
                <Ct02_22 />
                <Lnk3_8 />
                <Brands1_8 />
                <hr className="divider" />
                <Ct01_12 />
                <Ct03_4 />
                <Reviews1_6 />
                <Banner13_3 />
                <Blog1_2 />
                <hr className="divider" />
                <Newsletter1_2 />
                <hr className="divider" />
            </Layout>
        </>
    )
}