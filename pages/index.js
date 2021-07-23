import styled from 'styled-components';

//Components

//Styled Compoenents
const Wrapper = styled.main`
  padding: 0 24px;
`;

const Hero = styled.section`
  padding: 148px 0 0 0;
  width: 100%;
`;

const HeroContainer = styled.div`
  padding: 0 0 148px 0;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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
      </Wrapper>
    </>
  );
}
