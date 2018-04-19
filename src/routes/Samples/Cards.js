/**
 * 
 */
import React from 'react';
import { observer } from 'mobx-react';

import { Card, Image } from 'semantic-ui-react';

import viewStore from 'stores/viewStore'

const src = require('assets/images/fed3bdb2-277a-47d0-bb02-af536a400130.jpg');
const height = 160;
const width = 160;
const image = { src, height, width };

@observer
export default class Cards extends React.Component {
  render() {
    const images = [
      image, image, image, image, image, image, image,
      image, image, image, image, image, image, image,
    ];
    return (
      <Card.Group style={{ position: 'relative' }}>
        {images.map(({ src, width }, index) => (
          <Card 
            key={index} 
            color="purple" 
            image={src} 
            fluid={viewStore.device === 'small'}
            onClick={this.props.onCardClick}
          >
            <Image src={src} />
            <Card.Content>
              <Card.Header>
                {width}
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Joined in 2015
                </span>
              </Card.Meta>
              <Card.Description>
                Description
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    )
  }
}