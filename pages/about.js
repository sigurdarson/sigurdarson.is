import styled, { keyframes } from "styled-components";
import { NextSeo } from "next-seo";

//Components
import PageTitle from "../components/pagetitle/pagetitle";

const appear = keyframes`
  from {
    transform: translateY(24px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

//Styled Components
const Wrapper = styled.main`
  padding: 0 24px;
`;

const AboutSection = styled.section`
  transform: translateY(24px);
  opacity: 0;
  animation: ${appear} 0.4s 0.2s ease forwards;
  max-width: 1064px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.paragraph};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    transition: opacity 0.2s ease;
    -webkit-transition: opacity 0.2s ease;
    -moz-transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.72;
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
  background: url("/img/portrait.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SEO = {
  title: "About me - Sigurdarson — Brand & Product Designer (UI/UX)",
  canonical: "https://sigurdarson.is/about",

  openGraph: {
    url: "https://sigurdarson.is/about",
    title: "About me - Sigurdarson — Brand & Product Designer (UI/UX)",
  },
};

export default function AboutPage() {
  return (
    <>
      <NextSeo {...SEO} />
      <Wrapper>
        <PageTitle
          title="About me"
          description="Hey! I’m Gunnar, a product & brand designer, and a front-end developer, currently located in Copenhagen, Denmark."
        />
        <AboutSection>
          <AboutImage />
          <p>
            Currently I'm the design lead at{" "}
            <a href="https://copyrightagent.com" target="_blank">
              Copyright Agent
            </a>{" "}
            where we work towards a cleaner internet where copyrighted material
            both in image and text, truly lies in the hand of the original
            creator. At Copyright Agent we work with a few of the largest image
            providers in the world like Reuters, Ritzau Scanpix, AFP, and NTB.
            <br />
            <br />
            Before Copyright Agent I was working at{" "}
            <a href="https://getachoo.com" target="_blank">
              Achoo
            </a>{" "}
            building a new way for businesses to connect with, and invite
            influencers to join marketing campaigns.
            <br />
            <br />I sometimes take on freelance projects through{" "}
            <a href="https://brandy.is" target="_blank">
              Brandy
            </a>{" "}
            which is an independent single man “studio” that I founded and run
            all by myself. Last but not least, I spend some of my free time
            adding to{" "}
            <a href="https://myprivacy.is" target="_blank">
              MyPrivacy
            </a>
            , a place where you can take control of your data and your privacy!
            <br />
            <br />
            You can find me on{" "}
            <a href="/twitter" target="_blank">
              Twitter
            </a>{" "}
            where I mostly repost interesting things about design, blockchain,
            and cats.
          </p>
        </AboutSection>
      </Wrapper>
    </>
  );
}
