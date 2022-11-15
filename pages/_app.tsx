import "../styles/globals.css";
import type { AppProps } from "next/app";
import Chakra from "../components/chakra";
import Fonts from "../components/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Fonts />
      <Component {...pageProps} />
    </Chakra>
  );
}
