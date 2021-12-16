import styled from "styled-components";
import Link from "next/link";

//Components
import Project from "./project";
import ProjectTwo from "./projectTwo";

//Styled Compoenents
const Projects = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  h3 {
    font-size: 18px;
    font-weight: 400;
    font-family: "iA Writer Quattro", sans-serif;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 48px;
  }
`;

export default function ProjectsComponent() {
  return (
    <Projects>
      <h3>Projects</h3>
      <Project
        link="https://copyrightagent.com"
        company="Copyright Agent"
        description="Copyright Agent makes sure that copyrighted material can be published safely online and with peace of mind."
        personLink="https://www.linkedin.com/in/thomasbjerring/"
        personName="Thomas Bjerring"
      />
      <Project
        link="https://alessa.dk"
        company="Alessa ApS"
        description="Alessa's vision is to be the leading debt collection company when it comes to debt created as a result of online copyright infringement"
        personLink="https://www.linkedin.com/in/thomasbjerring/"
        personName="Thomas Bjerring"
      />
      <Project
        link="https://orkusyn.is"
        company="Orkusýn ehf."
        description="Orkusýn offers service and consultation related to machinery and the energy industry. With a great network of engineers and other contractors."
        personLink="https://is.linkedin.com/in/sigurdur-kristinsson-45112617"
        personName="Sigurður G. Kristinsson"
      />
      <ProjectTwo
        link="https://getachoo.com"
        company="Achoo"
        description="Reach your specific target audiences more effectively and authentically in less time and costs with Achoo’s powerful influencer platform."
        personLink="https://www.linkedin.com/in/rasmusdnielsen/"
        personName="Rasmus D. Nielsen"
        personTwoLink="#"
        personTwoName="Halldor Gunnarsson"
      />
    </Projects>
  );
}
