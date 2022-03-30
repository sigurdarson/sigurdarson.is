import React from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

//Animation
const appear = keyframes`
  from {
    transform: translateY(-24px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

//Styled Components
const MobileMenuWrapper = styled.div`
  transform: translateY(-24px);
  opacity: 0;
  animation: ${appear} 0.4s ease forwards;
  position: absolute;
  z-index: 99;
  top: 76px;
  right: -16px;
  min-width: 228px;
  background-color: rgb(16, 16, 16, 0.72);
  padding: 16px 16px 8px 16px;
  border-radius: 16px;
  border: 1px solid #222222;
  backdrop-filter: saturate(180%) blur(16px);
  -webkit-backdrop-filter: saturate(180%) blur(16px);
`;

const MenuList = styled.ul`
  list-style: none;
  width: 100%;
`;

const MenuItem = styled.li`
  cursor: pointer;
`;
const MenuSplitter = styled.li`
  width: 100%;
  display: flex;
  padding: 0 8px;
  font-family: "iA Writer Quattro", sans-serif;
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.paragraph};
`;

const MenuLink = styled.a`
  font-family: "iA Writer Quattro", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  height: 40px;
  margin-bottom: 8px;
  width: 100%;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 0 16px 0 8px;
  transition: 0.2s ease;
  -webkit-transition: 0.2s ease;
  -moz-transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 1 !important;
    background: ${({ theme }) => theme.colors.primary12};
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
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
      transform: translateX(4px);

      path {
        stroke: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
const MenuExternalLink = styled.a`
  font-family: "iA Writer Quattro", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  height: 40px;
  margin-bottom: 8px;
  width: 100%;
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 0 16px 0 8px;
  transition: 0.2s ease;
  -webkit-transition: 0.2s ease;
  -moz-transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 1 !important;
    background: ${({ theme }) => theme.colors.primary12};
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
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

export default function MobileMenu(props) {
  return (
    <MobileMenuWrapper>
      <MenuList>
        <MenuItem onClick={props.click}>
          <Link href="/">
            <MenuLink>
              Home
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 13.3337L13.1592 8.74773C13.6067 8.34994 13.6067 7.65071 13.1592 7.25292L8 2.66699"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 8H12.6667"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <Link href="/about">
            <MenuLink>
              About
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 13.3337L13.1592 8.74773C13.6067 8.34994 13.6067 7.65071 13.1592 7.25292L8 2.66699"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 8H12.6667"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <Link href="/notes">
            <MenuLink>
              Notes
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 13.3337L13.1592 8.74773C13.6067 8.34994 13.6067 7.65071 13.1592 7.25292L8 2.66699"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 8H12.6667"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </MenuLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <Link href="/photography">
            <MenuLink>
              Photography
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 13.3337L13.1592 8.74773C13.6067 8.34994 13.6067 7.65071 13.1592 7.25292L8 2.66699"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 8H12.6667"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </MenuLink>
          </Link>
        </MenuItem>
        <MenuSplitter>Socials</MenuSplitter>
        <MenuItem onClick={props.click}>
          <MenuExternalLink href="/twitter" target="_blank">
            Twitter
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
          </MenuExternalLink>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <MenuExternalLink href="/linkedin" target="_blank">
            LinkedIn
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
          </MenuExternalLink>
        </MenuItem>
        <MenuItem onClick={props.click}>
          <MenuExternalLink href="/dribbble" target="_blank">
            Dribbble
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
          </MenuExternalLink>
        </MenuItem>
      </MenuList>
    </MobileMenuWrapper>
  );
}
