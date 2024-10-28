import Layout from "@/components/layout/Layout"
import Banner13_6 from "@/components/sections/Banner13_6"
import Blog1_5 from "@/components/sections/Blog1_5"
import Brands1_14 from "@/components/sections/Brands1_14"
import Ct02_32 from "@/components/sections/Ct02_32"
import Ct02_33 from "@/components/sections/Ct02_33"
import Ct04_10 from "@/components/sections/Ct04_10"
import Features11_4 from "@/components/sections/Features11_4"
import Features12_7 from "@/components/sections/Features12_7"
import Features2_14 from "@/components/sections/Features2_14"
import Hero16 from "@/components/sections/Hero16"
import Lnk1_16 from "@/components/sections/Lnk1_16"
import Lnk2_16 from "@/components/sections/Lnk2_16"
import Lnk3_12 from "@/components/sections/Lnk3_12"
import Lnk4_3 from "@/components/sections/Lnk4_3"
import Newsletter1_5 from "@/components/sections/Newsletter1_5"
import Rating1_5 from "@/components/sections/Rating1_5"
import Reviews2_6 from "@/components/sections/Reviews2_6"
import Statistic1_13 from "@/components/sections/Statistic1_13"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero16 />
                <Rating1_5 />
                <hr className="divider" />
                <Features11_4 />
                <Lnk1_16 />
                <Statistic1_13 />
                <hr className="divider" />
                <Ct02_32 />
                <Ct04_10 />
                <Features2_14 />
                <Lnk2_16 />
                <Ct02_33 />
                <Features12_7 />
                <Lnk3_12 />
                <Brands1_14 />
                <Lnk4_3 />
                <Reviews2_6 />
                <Banner13_6 />
                <Blog1_5 />
                <hr className="divider" />
                <Newsletter1_5 />
                <hr className="divider" />
            </Layout>
        </>
    )
}