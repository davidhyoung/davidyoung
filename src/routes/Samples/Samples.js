/**
 * 
 */
import React from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

import { Button, Image, Segment } from 'semantic-ui-react';

import Page from 'components/Page';

import Cards from './Cards';

const src = require('assets/images/fed3bdb2-277a-47d0-bb02-af536a400130.jpg');

export default class Samples extends React.Component {
  state = {
    index: 0,
  }

  render() {
    return (
      <Swipeable 
        index={this.state.index} 
        enableMouseEvents
        disabled={this.state.index === 0}
        onChangeIndex={index => this.setState({ index })}
      >
        <Page>
          <Cards onCardClick={() => this.setState({ index: 1 })} />
        </Page>
        <Page noNav>
          <div>
            <Button 
              color="purple" 
              onClick={() => this.setState({ index: 0 })}
            >
              Back
            </Button>
          </div>
          <Segment>
            <Image src={src} size="large" />
          </Segment>
        </Page>
      </Swipeable>
    ); 
  }
}

const Swipeable = styled(SwipeableViews)`
  width: 100%;
  flex: 1;

  > div:last-child {
    height: 100%;
  }
`;