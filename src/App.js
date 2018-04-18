/**
 * 
 */
import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
// components
import {
  Menu,
  Sidebar as UiSidebar, 
} from 'semantic-ui-react';

import Sidebar, { SidebarToggle } from 'components/Sidebar';

import routes from 'routes';
import viewStore from 'stores/viewStore';

@withRouter
@observer
export default class App extends React.Component {
  state = { 
    visible: true,
  };

  componentWillMount() {
    window.addEventListener('resize', viewStore.update);
  }

  renderSmallNav = (route, index) => (
    <Menu.Item key={index}>
      <Link key={index} to={route.path}>
        {route.name}
      </Link>
    </Menu.Item>
  );

  renderRoute = (route, index) => (
    <Route key={index} {...route} />
  );

  render() {
    const { device } = viewStore;
    return (
      <AppContainer>
        <UiSidebar.Pushable>
          <Sidebar />
          <MainView>
            <div>
              <SidebarToggle />
              {(device === 'medium' || device === 'small') && (
                <TabletNav secondary pointing>
                  {routes.map(this.renderSmallNav)}
                </TabletNav>
              )}
              <Switch>
                {routes.map(this.renderRoute)}
              </Switch>
            </div>
          </MainView>
        </UiSidebar.Pushable>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  height: 100vh;
`;

const MainView = styled(UiSidebar.Pusher)`
  flex: 1;
  border: 1px solid #d3d3d3;
  display: flex;
  height: 100%;
`;

const TabletNav = styled(Menu)`
  padding: 1em;
  > a {
    padding: 1em;
  }
`;