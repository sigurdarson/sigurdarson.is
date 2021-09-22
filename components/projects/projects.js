import styled from 'styled-components';
import Link from 'next/link';

//Components
import Project from './project';

//Styled Compoenents
const Projects = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;

export default function ProjectsComponent() {
  return (
    <Projects>
      <Link href='#'>
        <Project
          company='Bedoo (Coming Soon)'
          title='A better way to manage everyday tasks.'
          image='/img/projects/bedoo/bedoo_cover.png'
        />
      </Link>
      <Link href='#'>
        <Project
          company='Copyright Agent (Coming Soon)'
          title='Protecting the ecosystem of originality.'
          image='/img/projects/ca/ca_cover.png'
        />
      </Link>
      <Link href='#'>
        <Project
          company='Orkusýn (Coming Soon)'
          title='Service and consultation related to the energy industry.'
          image='/img/projects/orkusyn/orkusyn_cover.png'
        />
      </Link>
      <Link href='#'>
        <Project
          company='Alessa (Coming Soon)'
          title='Leading debt collection company when it comes to copyright.'
          image='/img/projects/alessa/alessa_cover.png'
        />
      </Link>
    </Projects>
  );
}
