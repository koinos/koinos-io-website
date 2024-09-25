import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
import { initGTM } from '../lib/gtm';
import Head from 'next/head'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

//import "/public/css/demo.css"
import "/public/css/bootstrap.min.css"
import "/public/css/flaticon.css"
import "/public/css/menu.css"
import "/public/css/dropdown-effects/fade-down.css"
import "/public/css/lunar.css"
// import "/public/css/magnific-popup.css"
// import "/public/css/owl.carousel.min.css"
// import "/public/css/owl.theme.default.min.css"
// import SmoothScroll from "@/components/elements/SmoothScroll"
import "/public/css/animate.css"
import "/public/css/purple-theme.css"
import "/public/css/responsive.css"
import "/public/css/modal-video.css"

/* Uncomment to use pre-loader with the loading animation
   WARNING: WITH THIS ENABLED, THE PAGE WILL NOT RENDER FOR BROWSERS THAT HAVE JAVASCRIPT DISABLED
   THIS IS AN SEO ISSUE AND ALSO FOR THOSE USING SCREEN READERS ETC OR WHATEVER ANCIENT TECHNOLOGY
   OR SECURITY IDEOLOGIES THEY MAY HAVE */
/*
function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])
    return (<>
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <Preloader />
        )}
    </>)
}*/

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        initGTM();
      }, []);

    return (<>
            <Head>
                <title>Web3 for Everyone | Koinos</title>
            </Head>
            <Component {...pageProps} />
    </>);
}

export default MyApp
