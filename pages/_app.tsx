import "@/styles/globals.css";
import "@/styles/mlStyle.css";
import type { AppProps } from "next/app";

import Head from "next/head";
// import Link from "next/link";
import LayoutComponent from "@/layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="favicon.ico" /> */}
        <link rel="icon" href="/favicon_securiclefs.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
};

export default App;
