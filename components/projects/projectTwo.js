import styled from "styled-components";
import Link from "next/link";

//Styled Compoenents
const Project = styled.div`
  max-width: 552px;
  margin-bottom: 96px;
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
  margin-bottom: 16px;

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

const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.paragraph};
  margin-bottom: 16px;
  max-width: 448px;
`;

const TeamTitle = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
  max-width: 448px;
`;

const TeamMember = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  div {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background: #ffffff24;
    margin-right: 8px;
  }
`;

const TeamLink = styled.a`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  cursor: pointer;

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

export default function ProjectTwoComponent(props) {
  return (
    <Project>
      <Link href={props.link}>
        <ExternalLink target="_blank">
          {props.company}
          <img src="/img/arrow-up-right.svg" alt="Arrow up right" />
        </ExternalLink>
      </Link>
      <Description>{props.description}</Description>
      <TeamTitle>Team:</TeamTitle>
      <TeamMember>
        <div></div>
        <Link href={props.personLink}>
          <TeamLink target="_blank">
            {props.personName}
            <img src="/img/arrow-up-right-white.svg" alt="Arrow up right" />
          </TeamLink>
        </Link>
      </TeamMember>
      <TeamMember>
        <div></div>
        <Link href={props.personTwoLink}>
          <TeamLink target="_blank">{props.personTwoName}</TeamLink>
        </Link>
      </TeamMember>
    </Project>
  );
}
