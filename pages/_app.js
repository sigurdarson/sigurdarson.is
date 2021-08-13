import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { usePanelbear } from './../hooks/panelbear';
import { DefaultSeo } from 'next-seo';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import SEO from '../next-seo.config';

//Components
import Header from '../components/header/header';
import Newsletter from '../components/newsletter/newsletter';
import Footer from '../components/footer/footer';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 500;
  src: url(/fonts/Epilogue-Medium.ttf);
  font-display: swap;
}

@font-face {
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 400;
  src: url(/fonts/Epilogue-Regular.ttf);
  font-display: swap;
}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Epilogue', sans-serif;
    background: #09090b;
  }

  p {
    font-family: 'Epilogue', sans-serif;
    font-weight: 300;
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
    background: rgb(71, 118, 255, 0.12);
    color: rgb(71, 118, 255);
  }
`;

const theme = {
  colors: {
    //Brand
    primary: 'rgb(71, 118, 255)',
    primary12: 'rgb(71, 118, 255, 0.12)',
    primary24: 'rgb(71, 118, 255, 0.24)',

    //UI
    background: '#09090b',
    panel: '#191920',
    panelHover: '#23232c',
    border: 'rgba(144, 144, 144, 0.12)',
    paragraph: '#9FA2AF',

    // General
    white: '#ffffff',
    black: '#141414',
  },
};

export default function App({ Component, pageProps }) {
  // Load Panelbear only once during the app lifecycle
  usePanelbear('4fViUKpIdpF', {
    // Uncomment to allow sending events on localhost, and log to console too.
    // debug: true
  });

  //Page loader
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  //Hide Components on 404 page
  const showComponent = router.pathname === '/404' ? false : true;

  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/Epilogue-Regular.ttf'
          as='font'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/Epilogue-Medium.ttf'
          as='font'
          crossOrigin='anonymous'
        />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛸</text></svg>'
        />
        <meta name='robots' content='follow, index' />
        {/* Import CSS for nprogress */}
        <link rel='stylesheet' type='text/css' href='/nprogress.css' />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <DefaultSeo {...SEO} />
        {showComponent && <Header />}
        <Component {...pageProps} />
        {showComponent && <Newsletter />}
        {showComponent && <Footer />}
      </ThemeProvider>
    </>
  );
}
