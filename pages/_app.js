/* import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
 */

import { ChakraProvider } from "@chakra-ui/react";
/* import NavBar from "../components/NavBar";
 */
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
     {/*  <NavBar /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
