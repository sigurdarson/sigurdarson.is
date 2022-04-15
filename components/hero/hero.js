import Link from "next/link";
import styled, { keyframes } from "styled-components";

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

//Styled Compoenents
const Hero = styled.section`
  padding: 148px 0 148px 0;
  width: 100%;

  @media (max-width: 992px) {
    padding: 96px 0 96px 0;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 96px;
  position: relative;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

const HeroContent = styled.div`
  animation: ${appear} 0.4s ease forwards;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
  margin-bottom: 16px;

  @media (max-width: 992px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.paragraph};
  margin-bottom: 16px;
  max-width: 448px;

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

const SiteLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;

  img {
    margin-left: 4px;
    transform: translateX(0);
    transition: transform 0.2s ease;
    -webkit-transition: transform 0.2s ease;
    -moz-transition: transform 0.2s ease;
  }

  &:hover {
    img {
      transform: translateX(4px);
    }
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
              Hey! I’m Gunnar, a product & brand designer, and a front-end
              developer, currently located in Copenhagen, Denmark.
            </Description>
            <Link href="/about">
              <SiteLink>
                More about me
                <img src="/img/arrow-right.svg" alt="Arrow right" />
              </SiteLink>
            </Link>
          </HeroContent>
        </HeroContainer>
      </Hero>
    </>
  );
}
