import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

//Styled Components
const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: rgba(9, 9, 11, 0.76);
  backdrop-filter: saturate(100%) blur(48px);
  -webkit-backdrop-filter: saturate(100%) blur(48px);
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
  position: relative;
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

  p {
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

const MobileContact = styled.li`
  display: none;

  a {
    color: ${({ theme }) => theme.colors.paragraph};
    transition: opacity 0.2s ease;
    -webkit-transition: opacity 0.2s ease;
    -moz-transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.72;
    }
  }

  @media (max-width: 992px) {
    display: block;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link href="/">
          <Logo>
            <p>Gunnar Sigurðarson</p>
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
        </MenuList>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
