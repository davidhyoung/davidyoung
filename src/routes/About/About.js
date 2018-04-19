/**
 * 
 */
import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import Page from 'components/Page';

export default class About extends React.Component {

  render() {
    const { history } = this.props;
    return (
      <Page>
        <h1>About me</h1>
        <p>
          My name is Dave, and I'm a programmer from Boston.  
        </p>
        <p>
          My core skills are as a front end web developer, with a focus on developing 
          mobile and cross-platform applications.
        </p>

        <h3>Programming Skills</h3>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width="3">Skill</Table.HeaderCell>
              <Table.HeaderCell>Proficiency</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>HTML</Table.Cell>
              <Table.Cell>For a sweet UX</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell rowSpan="3">CSS</Table.Cell>
              <Table.Cell>Less</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sass</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>PostCSS</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell rowSpan="3">Javascript</Table.Cell>
              <Table.Cell>jQuery</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>React</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Angular</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <h3>Additional Skills</h3>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width="3">Skill</Table.HeaderCell>
              <Table.HeaderCell>Proficiency</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>HTML</Table.Cell>
              <Table.Cell>For a sweet UX</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell rowSpan="3">CSS</Table.Cell>
              <Table.Cell>Less</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sass</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>PostCSS</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div>
          <Button color="purple" onClick={() => history.push('/samples')}>
            See some samples of my work
          </Button>
        </div>
      </Page>
    ); 
  }
}