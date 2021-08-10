import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Send } from 'react-feather';

//Styled Components
const MobileMenuWrapper = styled.div`
  position: absolute;
  z-index: 99999999;
  top: 68px;
  right: 0;
  width: 272px;
  display: flex;
  text-align: center;
  background: ${({ theme }) => theme.colors.panel};
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 992px) {
    position: fixed;
    top: 100px;
    left: 24px;
    right: 24px;
    max-width: 100%;
    width: calc(100% - 48px);
  }
`;

const MenuList = styled.ul`
  list-style: none;
  width: 100%;
`;

const MenuItem = styled.li`
  cursor: pointer;
`;

const MenuLink = styled.a`
  height: 40px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  transition: background 0.2s ease;
  -webkit-transition: background 0.2s ease;
  -moz-transition: background 0.2s ease;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.colors.panelHover};
  }
`;

const Contact = styled.a`
  height: 40px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary12};
  color: ${({ theme }) => theme.colors.primary};
  transition: background 0.2s ease;
  -webkit-transition: background 0.2s ease;
  -moz-transition: background 0.2s ease;
  border-radius: 6px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary24};
  }

  span {
    margin-left: 10px;
    margin-bottom: -3px;
  }
`;

export default function MobileMenu(props) {
  return (
    <MobileMenuWrapper>
      <MenuList>
        <MenuItem onClick={props.click}>
          <Link href='/'>
            <MenuLink>Home</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <Link href='/about'>
            <MenuLink>About me</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <Link href='/photography'>
            <MenuLink>Darkroom</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <Link href='/resume.pdf'>
            <MenuLink>Resume</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <Link href='mailto:hello@sigurdarson.is'>
            <Contact>Available for hire</Contact>
          </Link>
        </MenuItem>
      </MenuList>
    </MobileMenuWrapper>
  );
}
