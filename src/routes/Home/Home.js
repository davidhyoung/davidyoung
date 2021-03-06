/**
 * 
 */
import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import Page from 'components/Page';

export default class Home extends React.Component {

  render() {
    const { history } = this.props;
    return (
      <Page>
        <h1>Welcome</h1>
        <p>This website uses the following libraries:</p>
        <Table basic="very">
          <Table.Body>
            <Table.Row>
              <Table.Cell>React</Table.Cell>
              <Table.Cell>For a sweet UX</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Semantic UI</Table.Cell>
              <Table.Cell>To make it pretty, easily</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Mobx</Table.Cell>
              <Table.Cell>To track user interactions</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <p>
          Spicy jalapeno bacon ipsum dolor amet pastrami deserunt anim jerky dolore swine bresaola ut. Dolor doner rump turducken kevin ut magna. Dolore salami kevin dolore do fatback excepteur ullamco nostrud. Ipsum nostrud ham ad duis reprehenderit est chicken pastrami ground round shank. Flank kevin beef short loin, aute ham shankle bresaola frankfurter. Ea turducken lorem, quis cupim boudin tongue labore pork loin reprehenderit nostrud est fatback pork sunt.
        </p>
        <p>
          Swine andouille pork, do cupim commodo drumstick. Fatback excepteur reprehenderit qui tenderloin consectetur pastrami irure mollit chicken laboris pork. Id magna culpa dolore cupim quis in non meatball salami sunt jowl. Rump drumstick labore magna occaecat nostrud. Anim laboris venison pastrami. Sint hamburger nulla duis rump sunt, officia et cillum eu. Veniam mollit spare ribs eu, filet mignon commodo prosciutto in swine.
        </p>
        <div>
          <Button color="purple" onClick={() => history.push('/about')}>
            Learn more about me
          </Button>
        </div>
      </Page>
    ); 
  }
}