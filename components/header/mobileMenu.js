import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Send } from 'react-feather';

import colors from '../../config/colors';

//Styled Components
const MobileMenuWrapper = styled.div`
  position: fixed;
  z-index: 99999999;
  top: 100px;
  left: 24px;
  right: 24px;
  display: flex;
  text-align: center;
  background: #fafafa;
  padding: 12px;
  border-radius: 4px;
  border: 0.5px solid ${colors.lightBlue};
  box-shadow: rgba(229, 232, 239) 5px 5px 40px -15px;
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
  color: ${colors.black};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: background 0.2s ease;
  -webkit-transition: background 0.2s ease;
  -moz-transition: background 0.2s ease;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background: ${colors.main10};
    color: ${colors.main};
  }
`;

const Contact = styled.a`
  height: 40px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.main10};
  color: ${colors.main};
  transition: background 0.2s ease;
  -webkit-transition: background 0.2s ease;
  -moz-transition: background 0.2s ease;
  &:hover {
    background: ${colors.main25};
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
          <Link href='/about'>
            <MenuLink>About me</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <Link href='/blog'>
            <MenuLink>Thoughts</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <Link href='/services'>
            <MenuLink>Services</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <Link href='/photography'>
            <MenuLink>Photography</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <Link href='mailto:hello@sigurdarson.is'>
            <Contact>
              Let's talk
              <span>
                <Send size='20' color={colors.main} />
              </span>
            </Contact>
          </Link>
        </MenuItem>
      </MenuList>
    </MobileMenuWrapper>
  );
}
