/**
 * 
 */
import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
// components
import {
  Image,
  Menu,
  Sidebar as UiSidebar, 
} from 'semantic-ui-react';

import routes from 'routes';
import viewStore from 'stores/viewStore';

import profilePicture from 'assets/images/9be7ce97-9693-42e9-a337-9c8f5debdce2.jpg';

@withRouter
@observer
export default class Sidebar extends React.Component {
  render() {
    const { useSidebar, showSidebar } = viewStore;
    const { location, history } = this.props;

    return (
      <AppSidebar animation="push" visible={useSidebar && showSidebar}>
        <NavHeader>
          <Link to="/">
            <Image circular src={profilePicture} />
            <h2>David Young</h2>
          </Link>
        </NavHeader>
        <Menu pointing secondary vertical fluid color="purple">
          {routes.map(({ name, path }) => (
            <Menu.Item 
              key={path}
              name={name} 
              active={location.pathname === path} 
              onClick={() => history.push(path)} 
            />
          ))}
        </Menu>
      </AppSidebar>
    );
  }
}

const AppSidebar = styled(UiSidebar)`
  background: #f3f3f3;
  border-right: 1px solid #d3d3d3;
  border-right: none;
`;

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
