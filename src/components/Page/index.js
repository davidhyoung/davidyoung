/**
 * 
 */
import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { breakpoints } from 'App.style';

import { Menu } from 'semantic-ui-react';

import viewStore from 'stores/viewStore';

import routes from 'routes';


@withRouter
@observer
export default class Page extends React.Component {

  _renderNav = () => (
    <Menu pointing secondary stackable={true} color="purple">
      {routes.map(({ name, path }) => (
        <Menu.Item 
          key={path}
          name={name} 
          active={this.props.location.pathname === path} 
          onClick={() => this.props.history.push(path)} 
        />
      ))}
    </Menu>
  )

  render() {
    const { children, noNav, ...props } = this.props;
    const { useSidebar } = viewStore;
    return (
      <PageContainer {...props} useSidebar={useSidebar}>
        <div style={{ marginBottom: '1em' }}>
          {(!useSidebar && !noNav) && this._renderNav()}
        </div>
        {children}
        <Footer>
          DAVID-H-YOUNG™
        </Footer>
      </PageContainer>
    )
  }
};

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${props => props.useSidebar ? '3.5em' : '1em 1.5em'};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${breakpoints.small}) {
    padding: 0;
  }
`;

const Footer = styled.div`
  padding: 4em 0 2em;
`;