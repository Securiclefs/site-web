import { FC } from "react";
import Head from "next/head";


const SeoComponent = ({ seo }) => (
  <Head>
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.description} />
  </Head>
);

export default SeoComponent;
