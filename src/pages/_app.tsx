import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="beforeInteractive" src="https://cdn.tailwindcss.com" />
      <Component {...pageProps} />
    </>
  );
}
