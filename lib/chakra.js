import { ChakraProvider } from "@chakra-ui/react";

export function Chakra({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
