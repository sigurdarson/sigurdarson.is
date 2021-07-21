import '../styles/globals.css';

import { usePanelbear } from './../hooks/panelbear';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  // Load Panelbear only once during the app lifecycle
  usePanelbear(process.env.YOUR_SITE_ID, {
    // Uncomment to allow sending events on localhost, and log to console too.
    // debug: true
  });

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
