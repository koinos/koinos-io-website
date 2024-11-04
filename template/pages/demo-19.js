import Layout from "@/components/layout/Layout"
import Banner7_6 from "@/components/sections/Banner7_6"
import Ct01_24 from "@/components/sections/Ct01_24"
import Ct02_36 from "@/components/sections/Ct02_36"
import Ct04_13 from "@/components/sections/Ct04_13"
import Ct08_5 from "@/components/sections/Ct08_5"
import Features11_7 from "@/components/sections/Features11_7"
import Features2_17 from "@/components/sections/Features2_17"
import Features5_9 from "@/components/sections/Features5_9"
import Hero19 from "@/components/sections/Hero19"
import Integrations1_7 from "@/components/sections/Integrations1_7"
import Lnk1_19 from "@/components/sections/Lnk1_19"
import Lnk2_19 from "@/components/sections/Lnk2_19"
import Rating1_7 from "@/components/sections/Rating1_7"
import Reviews1_9 from "@/components/sections/Reviews1_9"
import Statistic1_15 from "@/components/sections/Statistic1_15"
import Wswrapper_8 from "@/components/sections/Wswrapper_8"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero19 />
                <Rating1_7 />
                <hr className="divider" />
                <Lnk1_19 />
                <Wswrapper_8 />
                <Features11_7 />
                <hr className="divider" />
                <Lnk2_19 />
                <Ct02_36 />
                <Ct01_24 />
                <Features2_17 />
                <hr className="divider" />
                <Ct04_13 />
                <Features5_9 />
                <Statistic1_15 />
                <hr className="divider" />
                <Ct08_5 />
                <Integrations1_7 />
                <Reviews1_9 />
                <hr className="divider" />
                <Banner7_6 />
                <hr className="divider" />
            </Layout>
        </>
    )
}