import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <script src="./static/scripts/theme-change.js" async />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
