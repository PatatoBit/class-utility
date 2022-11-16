import Head from "next/head";
import React from "react";
import Nav from "../Nav";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />

        <meta name="twitter:title" content="Ohaiyo!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Patato" />
        <meta name="author" content="patato" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Patatotota" />
        <meta name="twitter:creator" content="@Patatotota" />
        <meta
          name="twitter:image"
          content="https://class.patato.live/vaderfight.png"
        />
        <meta property="og:site_name" content="Ohaiyo!" />
        <meta name="og:title" content="Ohaiyo!" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://class.patato.live/vaderfight.png"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Nav />

      {children}
    </>
  );
}

export default Layout;
