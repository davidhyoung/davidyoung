/**
 * 
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import Page from 'components/Page';

export default class About extends React.Component {

  render() {
    return (
      <Page>
        <h1>About me</h1>
        <p>
          I'm a front end web and mobile developer.  I focus on cross-platform development, 
          with an eye on maximizing the user experience for all devices.
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
        <Link to="/samples">
          See some samples of my work
        </Link>
      </Page>
    ); 
  }
}