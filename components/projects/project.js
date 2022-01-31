import styled, { keyframes } from "styled-components";
import Link from "next/link";

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
const Project = styled.div`
  transform: translateY(24px);
  opacity: 0;
  animation: ${appear} 0.4s 0.2s ease forwards;
  cursor: pointer;
  max-width: 1200px;
  background: ${({ theme }) => theme.colors.panel};
  padding: 48px 96px 0 96px;
  border-radius: 16px;
  margin-bottom: 48px;
  transition: background 0.2s ease;
  -webkit-transition: background 0.2s ease;
  -moz-transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.border};
  }

  img {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 992px) {
    padding: 24px 24px 0 24px;
    margin-bottom: 24px;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;

  h3 {
    font-size: 24px;
    font-weight: 400;
    font-family: "iA Writer Quattro", sans-serif;
    color: ${({ theme }) => theme.colors.white};
    margin: 0 16px 0 0;
  }

  span {
    font-size: 14px;
    padding: 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary12};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 992px) {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 24px;

    h3 {
      font-size: 14px;
    }
  }
`;

export default function ProjectComponent(props) {
  return (
    <Link href={props.link} target="_blank">
      <Project>
        <ProjectInfo>
          <h3>{props.company}</h3>
          <span>{props.status}</span>
        </ProjectInfo>
        <img src={props.image} />
      </Project>
    </Link>
  );
}
