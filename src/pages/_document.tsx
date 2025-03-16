// import HeadMeta from "@/views/template/HeadMeta";
import HeadMeta from "../views/template/HeadMeta";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" bs-theme-data="light">
      <Head>
        <HeadMeta />
        <link rel="manifest" href="/manifest.json"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
