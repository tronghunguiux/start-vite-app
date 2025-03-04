import type { AppProps } from "next/app";
// import '../assets/styles/template.scss'
// import '@scss/template.scss'
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
