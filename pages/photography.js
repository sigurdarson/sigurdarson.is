import Head from 'next/head';

import styled from 'styled-components';
import { NextSeo } from 'next-seo';

//Components
import Photography from '../components/photography/photography';
import PageTitle from '../components/pagetitle/pagetitle';

//Styled Components
const Wrapper = styled.main`
  padding: 0 24px;
`;

const SEO = {
  title: 'Photography - Sigurdarson — Brand & Product Designer (UI/UX)',
  canonical: 'https://sigurdarson.is/photography',

  openGraph: {
    url: 'https://sigurdarson.is/photography',
    title: 'Photography - Sigurdarson — Brand & Product Designer (UI/UX)',
  },
};

const PhotographyPage = () => (
  <>
    <NextSeo {...SEO} />
    <Wrapper>
      <PageTitle
        title='Darkroom'
        extra='(Photography)'
        description='In my free time I like to take photographs that includes everything from nature, people or tech. All images are free to download from Unsplash.'
      />
      <Photography />
    </Wrapper>
  </>
);

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  return {
    props: {},
  };
}

export default PhotographyPage;
