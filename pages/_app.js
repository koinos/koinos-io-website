import { useEffect } from "react"
import { initGTM } from '../lib/gtm';
import Head from 'next/head'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import "/public/css/bootstrap.min.css"
import "/public/css/flaticon.css"
import "/public/css/menu.css"
import "/public/css/dropdown-effects/fade-down.css"
// import "/public/css/lunar.css"
// import "/public/css/animate.css"
import "/public/css/koinos.css"
import "/public/css/responsive.css"
// import "/public/css/modal-video.css"

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

