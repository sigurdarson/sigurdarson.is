import styled from 'styled-components';

//Components
import { Mail, FileText, Linkedin, Dribbble } from 'react-feather';

//Styled Compoenents
const Wrapper = styled.main`
  padding: 0 24px;
`;

const Hero = styled.section`
  padding: 148px 0 0 0;
  width: 100%;

  @media (max-width: 992px) {
    padding: 96px 0 0 0;
  }
`;

const HeroContainer = styled.div`
  padding: 0 0 148px 0;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    padding: 0 0 96px 0;
  }
`;

const HeroContent = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
  margin-bottom: 12px;

  @media (max-width: 1092px) {
    font-size: 40px;
  }

  @media (max-width: 992px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.paragraph};
  margin-bottom: 24px;
  max-width: 450px;
`;

const StartProject = styled.a`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  text-decoration: none;
`;

const HeroArt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 992px) {
    display: none;
  }
`;

const HeroLinksContainer = styled.section`
  padding: 48px 0;
`;

const HeroLinks = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;
  margin: 0 auto;

  @media (max-width: 1092px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const HeroLinkItem = styled.a`
  padding: 20px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  transition: background 0.2s ease;
  -webkit-transition: background 0.3s ease;
  -moz-transition: background 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.panelHover};
  }

  div {
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <Hero>
          <HeroContainer>
            <HeroContent>
              <Title>
                I help businesses build growth-driven products, brands, and
                experiences.
              </Title>
              <Description>
                Currently Lead UI/UX Designer at Copyright Agent & Founder at
                Studio Brandy.
              </Description>
              <StartProject href='mailto:hello@sigurdarson.is'>
                Start a project ⟶
              </StartProject>
            </HeroContent>
            <HeroArt>
              <svg
                width='259'
                height='345'
                viewBox='0 0 259 345'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M86.167 86.1875C86.167 38.5875 124.745 8.66087e-05 172.334 0V86.1875L86.167 86.1875Z'
                  fill='#4776FF'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M7.54021e-06 172.375C3.37587e-06 219.975 38.5782 258.563 86.1668 258.563L86.1668 172.375L7.54021e-06 172.375Z'
                  fill='#191920'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M259 345L259 345L259 258.813L172.834 258.813C172.833 306.413 211.412 345 259 345Z'
                  fill='#191920'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M172.334 86.1875C172.334 133.787 133.756 172.375 86.1673 172.375L86.1673 86.1875L172.334 86.1875Z'
                  fill='#191920'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M0.000236511 86.1875H0L0 172.375L86.167 172.375C86.167 124.775 47.5888 86.1875 0.000236511 86.1875Z'
                  fill='#4776FF'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M258.5 258.562C258.5 210.962 219.922 172.375 172.334 172.375L172.334 258.562L258.5 258.562Z'
                  fill='#4776FF'
                />
                <ellipse
                  cx='129'
                  cy='215.968'
                  rx='43.0834'
                  ry='43.0938'
                  fill='white'
                />
                <ellipse
                  cx='215.417'
                  cy='43.0938'
                  rx='43.0834'
                  ry='43.0938'
                  fill='white'
                />
              </svg>
            </HeroArt>
          </HeroContainer>
        </Hero>
        <HeroLinksContainer>
          <HeroLinks>
            <HeroLinkItem
              href='https://sigurdarson.notion.site/Resume-Gunnar-Sigur-arson-a223fafa7f1140a99547780c03ac9700'
              target='_blank'>
              <div>
                <FileText size='20' color='#9FA2AF' />
              </div>
              <p>Resume</p>
            </HeroLinkItem>
            <HeroLinkItem href='mailto:hello@sigurdarson.is' target='_blank'>
              <div>
                <Mail size='20' color='#9FA2AF' />
              </div>
              <p>Email</p>
            </HeroLinkItem>
            <HeroLinkItem
              href='https://dribbble.com/Sigurdarson'
              target='_blank'>
              <div>
                <Dribbble size='20' color='#9FA2AF' />
              </div>
              <p>Dribbble</p>
            </HeroLinkItem>
            <HeroLinkItem
              href='https://www.linkedin.com/in/sigurdarson/'
              target='_blank'>
              <div>
                <Linkedin size='20' color='#9FA2AF' />
              </div>
              <p>LinkedIn</p>
            </HeroLinkItem>
          </HeroLinks>
        </HeroLinksContainer>
      </Wrapper>
    </>
  );
}
