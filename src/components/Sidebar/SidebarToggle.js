/**
 * 
 */
import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
//
import { Button, Icon } from 'semantic-ui-react';
import viewStore from 'stores/viewStore';

@observer
export default class Toggle extends React.Component {
  render() {
    const { useSidebar, showSidebar, toggleSidebar } = viewStore;
    return useSidebar && (
      <SidebarToggle>
        <Button icon secondary attached="right" onClick={() => toggleSidebar()}>
          <Icon name={`chevron ${showSidebar ? 'left' : 'right'}`} />
        </Button>
      </SidebarToggle>
    )
  }
}

const SidebarToggle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;