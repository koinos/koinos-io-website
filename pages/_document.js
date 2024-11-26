import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          rel="stylesheet"
        />

        <meta
          property="language"
          content="en"
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <meta
          name="theme-color"
          content="#121212"
        />

        <meta
          property="og:url"
          content={"https://koinos.io"}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={"https://koinos.io/images/og-banner.png"}
          key="ogimage"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:site_name"
          content={"Koinos"}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={"Koinos"}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={
            "Feeless, Frictionless, Familiar. Koinos is the decentralized blockchain engineered to deliver Web3 for Everyone."
          }
          key="ogdesc"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twittercard"
        />
        <meta
          property="twitter:domain"
          content="koinos.io"
        />
        <meta
          property="twitter:url"
          content="https://koinos.io"
        />
        <meta
          name="twitter:title"
          content="Web3 for Everyone"
        />
        <meta
          name="twitter:description"
          content="Feeless, Frictionless, Familiar. Koinos is the decentralized blockchain engineered to deliver Web3 for Everyone."
        />
        <meta
          name="twitter:image"
          content={"https://koinos.io/images/og-banner.png"}
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5Z72Z9YG2G"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-348XXW1GR2');
              `,
          }}
        />
      </Head>

      <body className="theme--dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
