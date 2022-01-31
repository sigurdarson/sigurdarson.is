import React, { Component } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

//Components
import Overlay from "./menu";

//Animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

//Styled Components
const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: rgba(9, 9, 11, 0.76);
  backdrop-filter: saturate(180%) blur(48px);
  -webkit-backdrop-filter: saturate(180%) blur(48px);
  z-index: 99;
  position: sticky;
  top: 2px;
  left: 0;
  right: 0;
  padding: 0 24px;
`;

const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: ${rotate} 12s linear infinite;
  }

  p {
    margin-left: 4px;
    height: 40px;
    color: ${({ theme }) => theme.colors.white};
    line-height: 20px;
    display: flex;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    -webkit-transition: opacity 0.3s ease;
    -moz-transition: opacity 0.3s ease;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.paragraph};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    transition: opacity 0.2s ease;
    -webkit-transition: opacity 0.2s ease;
    -moz-transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.72;
    }
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const StuckListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.paragraph};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    transition: opacity 0.2s ease;
    -webkit-transition: opacity 0.2s ease;
    -moz-transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.72;
    }
  }
`;

const MobileContact = styled.li`
  display: none;

  a {
    color: ${({ theme }) => theme.colors.paragraph};
    transition: opacity 0.2s ease;
    -webkit-transition: opacity 0.2s ease;
    -moz-transition: opacity 0.2s ease;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.72;
    }
  }

  @media (max-width: 992px) {
    display: block;
  }
`;

const TopLine = styled.div`
  height: 2px;
  width: 100%;
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.primary}; ;
`;

const Menubutton = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1515150;
  border-radius: 8px;
  margin-left: 48px;
  cursor: pointer;
  transition: background 0.2s ease;
  -webkit-transition: background 0.2s ease;
  -moz-transition: background 0.2s ease;

  &:hover {
    background: #15151592;
  }

  @media (max-width: 992px) {
    margin-left: 24px;
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
        <TopLine />
        <HeaderWrapper>
          <HeaderContainer>
            <Link href="/">
              <Logo>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5001 20.9996L10.5001 15.6209L6.69673 19.4243L4.57523 17.3029L8.37857 13.4995H3L3 10.4996H8.3785L4.57503 6.6962L6.69666 4.57527L10.5003 8.37891L10.5003 3H13.5003L13.5003 8.37905L17.3036 4.57576L19.425 6.69669L15.6216 10.5H21L21 13.5H15.6207L19.424 17.3034L17.3029 19.4248L13.4997 15.6218L13.4997 21L10.5001 20.9996Z"
                    fill="#BCFD2E"
                  />
                </svg>
                <p>Sigurðarson</p>
              </Logo>
            </Link>
            <MenuList>
              <ListItem>
                <p>
                  Let's talk —{" "}
                  <a href="mailto:hello@sigurdarson.is">hello@sigurdarson.is</a>
                </p>
              </ListItem>

              <MobileContact>
                <a href="mailto:hello@sigurdarson.is">Let's talk</a>
              </MobileContact>

              <StuckListItem>
                {overlay}
                <Menubutton onClick={this.overlayToggleClickHandler}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12H21"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 6H21"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 18H21"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Menubutton>
              </StuckListItem>
            </MenuList>
          </HeaderContainer>
        </HeaderWrapper>
      </>
    );
  }
}

export default Header;
