import Head from 'next/head';

import styled from 'styled-components';
import { NextSeo } from 'next-seo';

//Components
import PageTitle from '../components/pagetitle/pagetitle';

//Styled Components
const Wrapper = styled.main`
  padding: 0 24px;
`;

const AboutSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.paragraph};
  }

  a {
    text-decoration: underline;
    transition: color 0.2s ease;
    -webkit-transition: color 0.3s ease;
    -moz-transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  padding-bottom: 80%;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: url('/img/portrait.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SEO = {
  title: 'About me - Sigurdarson — Brand & Product Designer (UI/UX)',
  canonical: 'https://sigurdarson.is/about',

  openGraph: {
    url: 'https://sigurdarson.is/about',
    title: 'About me - Sigurdarson — Brand & Product Designer (UI/UX)',
  },
};

export default function AboutPage() {
  return (
    <>
      <NextSeo {...SEO} />
      <Wrapper>
        <PageTitle
          title='About me'
          description='👋 ‏‏‎ ‎I’m Gunnar, a product designer, brand designer, and a front-end developer, currently located in Copenhagen, Denmark.'
        />
        <AboutSection>
          <AboutImage />
          <p>
            Currently I'm helping <a href='#'>Copyright Agent</a> work towards a
            cleaner internet where copyrighted material both in image and text,
            truly lies in the hand of the original creator. At Copyright Agent
            we work with a few of the largest image providers in the world like
            Ritzau Scanpix, AFP, and NTB.
            <br />
            <br />
            Before Copyright Agent I was working at <a href='#'>Achoo</a>{' '}
            building a new way for businesses to connect with, and invite
            influencers to join marketing campaigns.
            <br />
            <br />I sometimes take on freelance branding projects through{' '}
            <a href='#'>Brandy</a> which is an independent single man “studio”
            that I founded and run all by myself. Last but not least, I spend
            some of my free time slowly building Bedoo , a place where you take
            control of your everyday tasks.
            <br />
            <br />
            You can find me on <a href='#'>Twitter</a> where I mostly repost
            interesting things about design, blockchain, and cats, or on{' '}
            <a href='#'>Instagram</a> where I post random 💩 from my life.
          </p>
        </AboutSection>
      </Wrapper>
    </>
  );
}
