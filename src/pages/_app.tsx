import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { LoginContextProvider } from "@/context/loginContext";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  return (
    <CookiesProvider>
      <LoginContextProvider>
        <Component {...pageProps} />
      </LoginContextProvider>
    </CookiesProvider>
  );
}
