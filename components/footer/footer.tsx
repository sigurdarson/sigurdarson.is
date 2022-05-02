import styled from "styled-components";

//Styled Components
const FooterWrapper = styled.footer`
  width: 100%;
  padding: 0 0 48px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Copyright = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.paragraph};
`;

export default function FooterComponent() {
  return (
    <FooterWrapper>
      <div>
        <Copyright>{new Date().getFullYear()} © Gunnar Sigurðarson</Copyright>
      </div>
    </FooterWrapper>
  );
}
