import styled from 'styled-components';
import {
  Instagram,
  Twitter,
  Dribbble,
  GitHub,
  Linkedin,
  Youtube,
} from 'react-feather';

//Styled Components
const FooterWrapper = styled.footer`
  width: 100%;
  padding: 0 0 48px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FooterContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.a`
  height: 40px;
  width: 40px;
  margin: 0 6px;
  border-radius: 6px;
  background: #9fa2af12;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid transparent;
  cursor: pointer;
  transition: 0.3s ease;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;

  &:hover {
    background: #9fa2af24;
    border: 0.5px solid ${({ theme }) => theme.colors.border};
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.paragraph};
`;

export default function FooterComponent() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Icons href='/instagram' target='_blank' rel='noreferrer'>
          <Instagram size='20' color='#9FA2AF' />
        </Icons>

        <Icons href='/twitter' target='_blank' rel='noreferrer'>
          <Twitter size='20' color='#9FA2AF' />
        </Icons>

        <Icons href='/dribbble' target='_blank' rel='noreferrer'>
          <Dribbble size='20' color='#9FA2AF' />
        </Icons>

        <Icons href='/github' target='_blank' rel='noreferrer'>
          <GitHub size='20' color='#9FA2AF' />
        </Icons>

        <Icons href='/linkedin' target='_blank' rel='noreferrer'>
          <Linkedin size='20' color='#9FA2AF' />
        </Icons>
      </FooterContainer>
      <div>
        <Copyright>{new Date().getFullYear()} © Gunnar Sigurðarson</Copyright>
      </div>
    </FooterWrapper>
  );
}
