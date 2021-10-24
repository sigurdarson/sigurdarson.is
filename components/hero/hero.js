import styled from "styled-components";
import Link from "next/link";

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

const HeroContent = styled.div``;

const HeroContentHigh = styled.div`
  height: calc(100vh - 228px);
  width: 1200px;
  position: fixed;

  pointer-events: none;

  @media (max-width: 992px) {
    position: relative;
    width: auto;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
  margin-bottom: 16px;

  @media (max-width: 992px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
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
  font-weight: 300;
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

const ExternalLink = styled.a`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;

  img {
    margin-left: 4px;
    transition: transform 0.2s ease;
    -webkit-transition: transform 0.2s ease;
    -moz-transition: transform 0.2s ease;
  }

  &:hover {
    img {
      transform: translateX(4px) translateY(-4px);
    }
  }
`;

const Nav = styled.ul`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 48px;
  list-style: none;

  @media (max-width: 992px) {
    position: relative;
    flex-direction: column;
    bottom: 0;
  }
`;

const NavItem = styled.li`
  margin-left: 24px;

  @media (max-width: 992px) {
    margin-left: 0px;
    margin-bottom: 16px;
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
              Hey!‏‏‎ ‎I’m Gunnar, a product & brand designer, and a front-end
              developer, currently located in Copenhagen, Denmark.
            </Description>
            <Link href="/about">
              <SiteLink>
                More about me
                <img src="/img/arrow-right.svg" alt="Arrow right" />
              </SiteLink>
            </Link>
          </HeroContent>
          <HeroContentHigh>
            <Nav>
              <NavItem>
                <Link href="/notes">
                  <SiteLink>
                    Notes
                    <img src="/img/arrow-right.svg" alt="Arrow right" />
                  </SiteLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/photography">
                  <SiteLink>
                    Darkroom
                    <img src="/img/arrow-right.svg" alt="Arrow right" />
                  </SiteLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/twitter">
                  <ExternalLink target="_blank">
                    Twitter
                    <img src="/img/arrow-up-right.svg" alt="Arrow up right" />
                  </ExternalLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/linkedin">
                  <ExternalLink target="_blank">
                    LinkedIn
                    <img src="/img/arrow-up-right.svg" alt="Arrow up right" />
                  </ExternalLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/dribbble">
                  <ExternalLink target="_blank">
                    Dribbble
                    <img src="/img/arrow-up-right.svg" alt="Arrow up right" />
                  </ExternalLink>
                </Link>
              </NavItem>
            </Nav>
          </HeroContentHigh>
        </HeroContainer>
      </Hero>
    </>
  );
}
