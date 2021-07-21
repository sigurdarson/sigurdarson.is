const title = 'Sigurdarson — Brand & Product Designer (UI/UX)';
const description =
  'Gunnar Sigurðarson a brand and product designer (UI/UX). I help businesses build growth-driven products, brands, and experiences. Currently located in Copenhagen, Denmark.';

const SEO = {
  title,
  description,
  canonical: 'https://sigurdarson.is',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://sigurdarson.is',
    title,
    description,
    images: [
      {
        url: 'https://sigurdarson.is/img/social.png',
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: '@gsigurdarson',
    site: '@gsigurdarson',
    cardType: 'summary_large_image',
  },
};

export default SEO;
