import styled from 'styled-components';
import { NextSeo } from 'next-seo';

//Components
import Photography from '../components/photography/photography';

//Styled Components
const Wrapper = styled.main`
  padding: 0 24px;
`;

const SEO = {
  title: 'Sigurdarson – Photography',
  canonical: 'https://sigurdarson.is/photography',

  openGraph: {
    url: 'https://sigurdarson.is/photography',
    title: 'Sigurdarson – Photography',
  },
};

const AboutPage = () => (
  <>
    <NextSeo {...SEO} />
    <Wrapper>
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

export default AboutPage;
