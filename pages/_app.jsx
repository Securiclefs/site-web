import "@/styles/globals.css";
import "@/styles/mlStyle.css";
// import type { AppProps } from "next/app";

import Head from "next/head";
import Link from "next/link";
import LayoutComponent from "@/layout";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Link rel="icon" href="favicon.ico" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com"/>
        <Link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
};

export default App;
