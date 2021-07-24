import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu } from 'react-feather';

import Overlay from './mobileMenu';

//Styled Components
const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: rgba(9, 9, 11, 0.76);
  backdrop-filter: saturate(100%) blur(48px);
  -webkit-backdrop-filter: saturate(100%) blur(48px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 99;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 24px;
`;

const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  cursor: pointer;
  transform: translateY(2px);
  --webkit-transform: translateY(2px);
  --moz-transform: translateY(2px);
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 992px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-left: 12px;
`;

const MenuLink = styled.a`
  height: 40px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 20px;
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  -webkit-transition: opacity 0.3s ease;
  -moz-transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.76;
  }
`;

const MenuContact = styled.a`
  height: 40px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary12};
  line-height: 20px;
  padding: 10px 20px;
  border-radius: 40px;
  cursor: pointer;
  transition: background 0.2s ease;
  -webkit-transition: background 0.3s ease;
  -moz-transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary24};
  }
`;

const MobileIcon = styled.div`
  cursor: pointer;
  border-radius: 4px;
  height: 40px;
  padding: 0 0 0 20px;
  display: none;

  p {
    font-size: 14px;
    margin-right: 6px;
    transform: translateY(-1px);
    --webkit-transform: translateY(-1px);
    --moz-transform: translateY(-1px);
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

class Header extends Component {
  state = {
    overlayOpen: false,
  };

  overlayToggleClickHandler = () => {
    this.setState((prevState) => {
      return { overlayOpen: !prevState.overlayOpen };
    });
  };

  overlayCloseHandler = () => {
    this.setState({ overlayOpen: false });
  };
  overlayCloseIconHandler = () => {
    this.setState({ overlayOpen: false });
  };

  render() {
    let overlay;

    if (this.state.overlayOpen) {
      overlay = <Overlay click={this.overlayCloseHandler} />;
    }

    return (
      <>
        {overlay}
        <HeaderWrapper>
          <HeaderContainer>
            <Link href='/'>
              <Logo>
                <svg
                  width='174'
                  height='30'
                  viewBox='0 0 174 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M8.70781 23.5205C13.4165 23.5205 16.7061 20.9935 16.7061 16.8467C16.7061 12.3853 13.0027 11.1991 9.29609 10.0119L9.19158 9.9784C5.90196 8.94169 4.64417 8.19655 4.64417 6.44709C4.64417 4.73002 6.03097 3.62851 8.19179 3.62851C10.7074 3.62851 12.1264 4.9892 12.9327 6.80346L16.0611 4.9892C14.642 1.97624 11.9007 0 8.19179 0C4.38616 0 0.935283 2.36501 0.935283 6.54428C0.935283 10.8207 4.35391 12.1166 7.86928 13.1857C11.2234 14.2225 12.9972 14.9028 12.9972 16.9114C12.9972 18.5637 11.7394 19.892 8.80457 19.892C5.74071 19.892 3.99914 18.3693 3.19286 16.0691L0 17.9482C1.19329 21.3175 4.25715 23.5205 8.70781 23.5205ZM21.4488 4.47084C22.6743 4.47084 23.6741 3.43413 23.6741 2.23542C23.6741 1.00432 22.6743 0 21.4488 0C20.2232 0 19.2234 1.00432 19.2234 2.23542C19.2234 3.43413 20.2232 4.47084 21.4488 4.47084ZM23.1903 23.0994V6.90065H19.7072V23.0994H23.1903ZM40.0705 9.29806V6.90065H43.4892V22.3542C43.4892 27.5702 39.4255 30 35.2006 30C31.653 30 28.9116 28.6717 27.5571 26.0799L30.5565 24.3305C31.266 25.7235 32.4593 26.8251 35.2651 26.8251C38.2645 26.8251 40.0705 25.1728 40.0705 22.3542V20.378C38.845 22.1274 36.9422 23.1965 34.4588 23.1965C29.9114 23.1965 26.3316 19.4708 26.3316 14.838C26.3316 10.2052 29.9114 6.47948 34.4588 6.47948C36.9422 6.47948 38.845 7.5486 40.0705 9.29806ZM29.8147 14.838C29.8147 17.7538 32.0078 19.9244 34.9426 19.9244C37.8775 19.9244 40.0705 17.7538 40.0705 14.838C40.0705 11.9222 37.8775 9.75162 34.9426 9.75162C32.0078 9.75162 29.8147 11.9222 29.8147 14.838ZM58.4177 6.90065V15.5832C58.4177 18.8877 56.6116 20.2484 54.3218 20.2484C52.1287 20.2484 50.7096 18.9525 50.7096 16.4903V6.90065H47.2265V16.8467C47.2265 21.0583 49.8066 23.5205 53.4187 23.5205C55.6118 23.5205 57.3534 22.7106 58.4177 21.0259V23.0994H61.9008V6.90065H58.4177ZM69.4569 6.90065V9.62203C70.4244 7.41901 72.3917 6.60907 74.4236 6.60907V10.3996C72.1337 10.2376 69.4569 11.3067 69.4569 14.9352V23.0994H65.9738V6.90065H69.4569ZM86.4311 6.06953L90.1737 11.1123C91.0767 12.311 91.6573 13.8661 91.6573 15.6479C91.6573 20.5076 87.8194 23.4881 83.4977 23.4881C79.1761 23.4881 75.3382 20.5076 75.3382 15.6479C75.3382 10.9827 79.4018 7.64579 83.9815 8.35853H84.0137L81.8852 5.41037L80.4984 3.53132L78.2408 0.421167H82.2399L83.401 2.00864L83.9203 2.7002H90.0345V6.06953H86.4311ZM83.4977 20.1836C80.9176 20.1836 78.8213 18.4989 78.8213 15.6479C78.8213 12.9266 80.8209 11.2419 83.53 11.2419C85.5295 11.2419 86.6906 12.0842 87.3679 12.9914L87.4001 13.0238C87.8839 13.6717 88.1741 14.5788 88.1741 15.6479C88.1741 18.4989 86.0778 20.1836 83.4977 20.1836ZM107.595 9.20087V6.90065H111.078V23.0994H107.595V20.7667C106.369 22.4838 104.467 23.5205 101.951 23.5205C97.5648 23.5205 93.9204 19.7948 93.9204 15C93.9204 10.1728 97.5648 6.47948 101.951 6.47948C104.467 6.47948 106.369 7.5162 107.595 9.20087ZM97.4035 15C97.4035 18.013 99.5966 20.1836 102.499 20.1836C105.402 20.1836 107.595 18.013 107.595 15C107.595 11.987 105.402 9.81642 102.499 9.81642C99.5966 9.81642 97.4035 11.987 97.4035 15ZM118.621 9.62203V6.90065H115.138V23.0994H118.621V14.9352C118.621 11.3067 121.298 10.2376 123.588 10.3996V6.60907C121.556 6.60907 119.589 7.41901 118.621 9.62203ZM131.077 9.65443C129.819 9.65443 128.723 10.2052 128.723 11.3715C128.723 12.5868 130.197 12.9983 131.93 13.4821C134.401 14.1719 137.398 15.0085 137.398 18.5313C137.398 21.7711 134.592 23.5205 131.109 23.5205C127.884 23.5205 125.562 22.0626 124.53 19.73L127.529 17.9806C128.045 19.4384 129.335 20.3132 131.109 20.3132C132.657 20.3132 133.851 19.7948 133.851 18.4989C133.851 17.3065 132.367 16.8843 130.627 16.389C128.159 15.6866 125.175 14.8373 125.175 11.4363C125.175 8.39093 127.787 6.47948 131.077 6.47948C133.722 6.47948 135.915 7.71058 137.043 9.84881L134.109 11.5011C133.528 10.2376 132.399 9.65443 131.077 9.65443ZM147.662 23.5205C152.403 23.5205 156.176 19.7948 156.176 15C156.176 10.1728 152.403 6.47948 147.662 6.47948C142.953 6.47948 139.148 10.1728 139.148 15C139.148 19.7948 142.953 23.5205 147.662 23.5205ZM147.662 20.1188C144.824 20.1188 142.631 17.9482 142.631 15C142.631 12.0518 144.824 9.88121 147.662 9.88121C150.5 9.88121 152.693 12.0518 152.693 15C152.693 17.9482 150.5 20.1188 147.662 20.1188ZM162.809 8.97408C163.873 7.28942 165.615 6.47948 167.808 6.47948C171.42 6.47948 174 8.94169 174 13.1533V23.0994H170.517V13.5097C170.517 11.0475 169.098 9.75162 166.905 9.75162C164.615 9.75162 162.809 11.1123 162.809 14.4169V23.0994H159.326V6.90065H162.809V8.97408Z'
                    fill='white'
                  />
                </svg>
              </Logo>
            </Link>
            <MobileIcon onClick={this.overlayToggleClickHandler}>
              <p>Menu</p> <Menu size='20' color='white' />
            </MobileIcon>
            <MenuList>
              <MenuItem>
                <Link href='/about'>
                  <MenuLink>About me</MenuLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href='/photography'>
                  <MenuLink>Darkroom</MenuLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <MenuContact href='mailto:hello@sigurdarson.is'>
                  Available for hire
                </MenuContact>
              </MenuItem>
            </MenuList>
          </HeaderContainer>
        </HeaderWrapper>
      </>
    );
  }
}

export default Header;
