import styled from 'styled-components';

//Styled Components
const PageTitle = styled.section`
  padding: 148px 0;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 48px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.5;
    margin-bottom: 12px;

    @media (max-width: 1092px) {
      font-size: 40px;
    }

    @media (max-width: 992px) {
      font-size: 32px;
    }
  }

  span {
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.paragraph};
    line-height: 1.5;
    margin-bottom: 12px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.paragraph};
    max-width: 450px;
  }

  @media (max-width: 1092px) {
    padding: 96px 0;
  }

  @media (max-width: 992px) {
    padding: 96px 0;
  }
`;

export default function PageTitleComponent(props) {
  return (
    <PageTitle>
      <h1>
        {props.title} <span>{props.extra}</span>
      </h1>
      <p>{props.description}</p>
    </PageTitle>
  );
}
