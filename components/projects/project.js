import styled from 'styled-components';

//Components

//Styled Components
const Project = styled.div`
  padding: 48px 0 0 48px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: background 0.2s ease;
  -webkit-transition: background 0.3s ease;
  -moz-transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.panelHover};
  }

  @media (max-width: 992px) {
    padding: 24px 0 0 24px;
  }
`;

const Company = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.paragraph};
`;

const Title = styled.h3`
  max-width: 396px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 48px;
`;

const Image = styled.img`
  max-width: 324px;
  margin-left: auto;
  display: block;
`;

export default function ProjectComponent(props) {
  return (
    <Project>
      <Company>{props.company}</Company>
      <Title>{props.title}</Title>
      <Image src={props.image} />
    </Project>
  );
}
