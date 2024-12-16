import { useEffect } from "react"
import { NextIntlProvider } from 'next-intl';
import { useRouter } from 'next/router';
import { initGTM } from '../utils/gtm';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import "/public/css/bootstrap.min.css"
import "/public/css/flaticon.css"
import "/public/css/menu.css"
import "/public/css/dropdown-effects/fade-down.css"
import "/public/css/koinos.css"
import "/public/css/responsive.css"

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const messages = pageProps.messages || {};

  useEffect(() => {
    initGTM();
  }, []);

  return (
    <NextIntlProvider
      locale={router.locale || 'en'}
      messages={messages}
      timeZone="UTC"
    >
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp

