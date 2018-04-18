/**
 * 
 */
import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
// components
import {
  Image,
  Sidebar as UiSidebar, 
} from 'semantic-ui-react';

import routes from 'routes';
import viewStore from 'stores/viewStore';

import profilePicture from 'assets/images/9be7ce97-9693-42e9-a337-9c8f5debdce2.jpg';

@withRouter
@observer
export default class Sidebar extends React.Component {

  renderNavItem = (route, index) => (
    <NavItem 
      key={index} 
      to={route.path} 
      exact
      activeClassName="active">
      <span>{route.name}</span>
    </NavItem>
  );

  render() {
    const { useSidebar, showSidebar } = viewStore;

    return (
      <UiSidebar animation="push" visible={useSidebar && showSidebar}>
        <NavHeader>
          <Link to="/">
            <Image circular src={profilePicture} />
            <h2>David Young</h2>
          </Link>
        </NavHeader>
        {routes.map(this.renderNavItem)}
      </UiSidebar>
    );
  }
}

const NavHeader = styled.div`
  padding: 1em 3em;
  text-align: center;
  cursor: pointer;

  a {
    color: black;
    text-decoration: none;
  }

  &:active {
    background: rgba(200, 0, 200, 0.1);
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  padding: 1em;
  text-decoration: none;
  color: black;
  border-left: 5px solid transparent;
  transform: all 0.2s ease;

  &:active {
    background: rgba(200, 0, 200, 0.1);
  }

  &.active {
    border-color: rgba(160, 0, 160, 1);
    color: rgba(160, 0, 160, 1);
  }
`;
