import "../styles/globals.css";
import type { AppProps } from "next/app";
import Chakra from "../components/chakra";
import Fonts from "../components/fonts";
import Layout from "../components/layout/main";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}
