import styled, { keyframes } from "styled-components";

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

//Styled Components
const PageTitle = styled.section`
  animation: ${appear} 0.4s ease forwards;
  padding: 148px 0 96px 0;
  max-width: 1064px;
  margin: 0 auto;

  h1 {
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.5;
    margin-bottom: 12px;
  }

  span {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.paragraph};
    line-height: 1.5;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.paragraph};
    max-width: 448px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    transition: opacity 0.2s ease;
    -webkit-transition: opacity 0.2s ease;
    -moz-transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.72;
    }
  }

  @media (max-width: 1092px) {
    padding: 96px 0;
  }

  @media (max-width: 992px) {
    padding: 96px 0;
  }
`;

export default function PageTitleComponent({ title, extra, description, link, linkText }) {

  return (
    <PageTitle>
      <h1>
        {title} <span>{extra}</span>
      </h1>

      {link ? (
      <p>
        {description} 
        <a 
          href={link}
          aria-label={linkText}
          target="_blank"
          rel="noopener noreferrer">
            {linkText}
          </a>
        </p>
        ) : 
        (
          <p>
            {description}
          </p>
        )
      }
    </PageTitle>
  );
}
