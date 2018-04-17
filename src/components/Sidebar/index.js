/**
 * 
 */
import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const sidebarWidth = '240px';
const padding = '16px';

const SidebarContainer = styled.nav`
  width: ${sidebarWidth};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

export const SidebarLink = styled(NavLink)`
  padding: ${padding};
  text-decoration: none;
  border-left: 5px solid transparent;
  color: black;

  &:active {
    border-color: purple;
  }

  &:focus {
    color: inherit;
  }
`;

export const SidebarHeader = styled(SidebarLink)`
  font-size: 1.5em;
  
  &:active {
    border-color: transparent;
  }
`;

export default () => (
  <SidebarContainer>
    <SidebarHeader to="/">David Young</SidebarHeader>
    <SidebarLink to="/about">About</SidebarLink>
    <SidebarLink to="/about">Work</SidebarLink>
  </SidebarContainer>
);