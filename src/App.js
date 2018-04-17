/**
 * 
 */
import React from 'react';
import styled from 'styled-components';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
// components
import {
  Button,
  Icon,
  Image,
  Menu,
  Sidebar, 
} from 'semantic-ui-react';

import routes from 'routes';

import profilePicture from 'assets/images/9be7ce97-9693-42e9-a337-9c8f5debdce2.jpg';

const AppContainer = styled.div`
  height: 100vh;
`;

const MainView = styled(Sidebar.Pusher)`
  flex: 1;
  border: 1px solid #d3d3d3;
  display: flex;
  height: 100%;
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

const NavItem = styled(NavLink)`
  display: flex;
  padding: 1em;
  text-decoration: none;
  color: black;
  border-left: 5px solid transparent;
  transform: all 0.1s ease;

  &:active {
    background: rgba(200, 0, 200, 0.1);
  }

  &.active {
    border-color: rgba(160, 0, 160, 1);
    color: rgba(160, 0, 160, 1);
  }
`;

const SidebarToggle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const TabletNav = styled(Menu)`
  padding: 1em;
  > a {
    padding: 1em;
  }
`;

function getWindowDimensions() {
  const dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  console.log('dimensions', dimensions)
  return dimensions;
}

export default class App extends React.Component {
  state = { 
    visible: true,
    window: getWindowDimensions()
  };

  componentWillMount() {
    window.addEventListener('resize', () => this.setState({ 
      window: getWindowDimensions() 
    }));
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  renderSidebarNavItem = (route, index) => (
    <NavItem key={index} exact to={route.path} activeClassName="active">
      <span>{route.name}</span>
    </NavItem>
  );

  renderSmallNav = (route, index) => (
    <Menu.Item key={index}>
      <Link exact to={route.path} activeClassName="active">{route.name}</Link>
    </Menu.Item>
  );

  renderRoute = (route, index) => (
    <Route key={index} {...route} />
  );

  render() {
    const { visible, window } = this.state;
    const largeDevice = window.width > 960;
    console.log(this.props)
    return (
      <AppContainer>
        <Sidebar.Pushable>
          <Sidebar animation="push" visible={visible && largeDevice}>
            <NavHeader>
              <Link to="/">
                <Image circular src={profilePicture} />
                <h2>David Young</h2>
              </Link>
            </NavHeader>
            {routes.map(this.renderSidebarNavItem)}
          </Sidebar>
          <MainView>
            <div>
              {largeDevice && (
                <SidebarToggle>
                  <Button icon secondary attached="right" onClick={this.toggleVisibility}>
                    <Icon name={`chevron ${visible ? 'left' : 'right'}`} />
                  </Button>
                </SidebarToggle>
              )}
              {largeDevice || (
                <TabletNav secondary pointing>
                  {routes.map(this.renderSmallNav)}
                </TabletNav>
              )}
              <Switch>
                {routes.map(this.renderRoute)}
              </Switch>
            </div>
          </MainView>
        </Sidebar.Pushable>
      </AppContainer>
    );
  }
}
