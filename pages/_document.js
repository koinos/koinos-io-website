import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Koinos Network</title>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
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

        <meta property="og:url" content={"https://koinos.io"} key="ogurl" />
        <meta
          property="og:image"
          content={"https://koinos.io/images/koinos-open-graph.png"}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={"Koinos Network"}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={"Koinos Network - The Free-To-Use Blockchain"}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={
            "Koinos Network - The Free-To-Use Blockchain. Opensource, Free to Use, Modular, Scalable, and Fair Launched"
          }
          key="ogdesc"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
