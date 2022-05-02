import styled, { keyframes } from "styled-components";

//Components
import Project from "./project";

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
const Projects = styled.div`
  max-width: 1064px;
  margin: 0 auto;

  h2 {
    font-size: 18px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 48px;
    transform: translateY(24px);
    opacity: 0;
    animation: ${appear} 0.4s 0.2s ease forwards;
  }
`;

export default function ProjectsComponent() {
  return (
    <Projects>
      <Project
        link="https://copyrightagent.com"
        company="Copyright Agent"
        status="Design Lead"
        image="/img/projects/ca/ca_cover.png"
      />
      <Project
        link="https://alessa.dk"
        company="Alessa ApS"
        status="Brand & Web Design"
        image="/img/projects/alessa/alessa_cover.png"
      />
      <Project
        link="https://orkusyn.is"
        company="Orkusýn ehf"
        status="Brand & Web Design"
        image="/img/projects/orkusyn/orkusyn_cover.png"
      />
    </Projects>
  );
}
