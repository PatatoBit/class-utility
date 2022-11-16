import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "../lib/theme";

function Chakra({ children }: React.PropsWithChildren) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default Chakra;
