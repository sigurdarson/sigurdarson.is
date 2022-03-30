import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import * as Fathom from "fathom-client";
import { DefaultSeo } from "next-seo";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import SEO from "../next-seo.config";

//Components
import Header from "../components/header/header";
import Newsletter from "../components/newsletter/newsletter";
import Footer from "../components/footer/footer";

const theme = {
  colors: {
    //Brand
    primary: "rgb(188, 253, 46)",
    primary12: "rgb(188, 253, 46, 0.12)",
    primary24: "rgb(188, 253, 46, 0.24)",

    //UI
    background: "rgb(0, 0, 0)",
    panel: "#141414",
    panelHover: "#1C1C1C",
    border: "rgb(255, 255, 255, 0.04)",
    paragraph: "rgb(255, 255, 255, 0.64)",

    // General
    white: "#ffffff",
    black: "#141414",
  },
};

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'iA Writer Quattro';
  font-style: normal;
  font-weight: 500;
  src: url(/fonts/iAWriterQuattroS-Bold.woff);
  font-display: swap;
}

@font-face {
  font-family: 'iA Writer Quattro';
  font-style: normal;
  font-weight: 400;
  src: url(/fonts/iAWriterQuattroS-Regular.woff);
  font-display: swap;
}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'iA Writer Quattro', sans-serif;
    background: ${({ theme }) => theme.colors.background};
  }

  p {
    font-family: 'iA Writer Quattro', sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }

  ::selection {
    background: rgb(188, 253, 46, 0.12);
    color: rgb(188, 253, 46);
  }
`;

export default function App({ Component, pageProps }) {
  //Page loader
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load("XUSIOUXD", {
      includedDomains: ["sigurdarson.is"],
      url: "https://basilisk.Sigurdarson.is/script.js",
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  //Hide Components on 404 page
  const showComponent = router.pathname === "/404" ? false : true;

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/iAWriterQuattroS-Regular.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛸</text></svg>"
        />
        <meta name="robots" content="follow, index" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DefaultSeo {...SEO} />
        {showComponent && <Header />}
        <Component {...pageProps} />
        {showComponent && <Newsletter />}
        {showComponent && <Footer />}
      </ThemeProvider>
    </>
  );
}
