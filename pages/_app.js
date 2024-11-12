import "@/styles/globals.css";
import { Provider } from "../components/ui/provider"
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}