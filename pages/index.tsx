import styled from "styled-components";

//Components
import Hero from "../components/hero/hero";
import Projects from "../components/projects/projects";

//Styled Compoenents
const Wrapper = styled.main`
  padding: 0 24px;
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <Hero />
        <Projects />
      </Wrapper>
    </>
  );
}
