import styled, { keyframes } from "styled-components";

//Styled Components
const CardContainer = styled.div`
  padding: 24px;
  width: 100%;
  color: #fff;
  background: ${({ theme }) => theme.colors.panel};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  h3 {
    font-size: 32px;
    font-weight: 500;
  }
`;

const ExternalLink = styled.a`
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  transition: 0.2s ease;
  -webkit-transition: 0.2s ease;
  -moz-transition: 0.2s ease;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.paragraph};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    margin-left: 4px;
    margin-top: -4px;
    transform: translateX(0);
    transition: transform 0.2s ease;
    -webkit-transition: transform 0.2s ease;
    -moz-transition: transform 0.2s ease;

    path {
      stroke: #ffffff;
    }
  }

  &:hover {
    svg {
      transform: translateX(4px) translateY(-2px);

      path {
        stroke: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export default function MetricCard({ header, link, metric }) {
  return (
    <CardContainer>
      <ExternalLink
        href={link}
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
      >
        {header}
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0003 11.3333V5C12.0003 4.44772 11.5526 4 11.0003 4H4.66699"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 12.0003L11.3333 4.66699"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ExternalLink>

      <h3>{metric > 0 ? metric.toLocaleString() : "-"}</h3>
    </CardContainer>
  );
}
