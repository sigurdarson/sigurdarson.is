import styled from 'styled-components';
import Link from 'next/link';

//Components
import Hero from '../components/hero/hero';
import Projects from '../components/projects/projects';

//Styled Compoenents
const Wrapper = styled.main`
  padding: 0 24px;
`;

const About = styled.div`
  position: relative;
  padding: 48px;
  max-width: 1200px;
  margin: 48px auto 48px auto;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};

  img {
    width: 100%;
    border-radius: 6px;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin: 0 auto 24px auto;
    padding: 24px;
    grid-gap: 24px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 12px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.paragraph};
  }

  a {
    font-size: 18px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.white};
    transition: opacity 0.2s ease;
    -webkit-transition: opacity 0.3s ease;
    -moz-transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.76;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <Hero />

        <Projects />
        <About>
          <AboutContent>
            <h3>About me</h3>
            <p>
              I studied Multimedia Design but I consider myself a self-taught
              designer and aspiring front-end developer.
              <br />
              <br />
              I’m constantly learning and looking for new experiences to grow
              both as a professional and as a human being.
            </p>
            <Link href='/about'>find out more about me &rarr;</Link>
          </AboutContent>
          <img src='/img/portrait.jpeg' />
        </About>
      </Wrapper>
    </>
  );
}
