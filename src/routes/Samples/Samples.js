/**
 * 
 */
import React from 'react';
import Page from 'components/Page';

import { Card } from 'semantic-ui-react';

const src = require('assets/images/white-image.png');

export default class Samples extends React.Component {

  render() {
    return (
      <Page>
        <Card.Group>
          {[0,1,2,3,4,5,6,7,8].map(number => (
            <Card key={number} color="purple" image={src} />
          ))}
        </Card.Group>
      </Page>
    ); 
  }
}