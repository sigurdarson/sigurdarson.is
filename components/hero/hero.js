import styled from 'styled-components';

//Components
import { Mail, FileText, Linkedin, Dribbble } from 'react-feather';

//Styled Compoenents
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
  grid-template-columns: 60% 40%;

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
  line-height: 1.4;
  margin-bottom: 12px;

  @media (max-width: 1092px) {
    font-size: 40px;
  }

  @media (max-width: 992px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.paragraph};
  margin-bottom: 24px;
  max-width: 450px;

  a {
    text-decoration: underline;
    transition: color 0.2s ease;
    -webkit-transition: color 0.2s ease;
    -moz-transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const HeroArt = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 992px) {
    display: none;
  }
`;

export default function HeroHome() {
  return (
    <>
      <Hero>
        <HeroContainer>
          <HeroContent>
            <Title>
              I focus on creating meaningful experiences through design.
            </Title>
            <Description>
              Currently moving pixels at{' '}
              <a href='https://copyrightagent.com' target='_blank'>
                Copyright Agent
              </a>{' '}
              & <br /> Founder at{' '}
              <a href='https://brandy.is' target='_blank'>
                Studio Brandy
              </a>{' '}
              a Webflow agency.
            </Description>
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
    </>
  );
}
