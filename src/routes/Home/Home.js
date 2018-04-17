/**
 * 
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'components/Page';

export default class Home extends React.Component {

  render() {
    return (
      <Page>
        <h1>My name is David Young</h1>
        <p>
          Spicy jalapeno bacon ipsum dolor amet pastrami deserunt anim jerky dolore swine bresaola ut. Dolor doner rump turducken kevin ut magna. Dolore salami kevin dolore do fatback excepteur ullamco nostrud. Ipsum nostrud ham ad duis reprehenderit est chicken pastrami ground round shank. Flank kevin beef short loin, aute ham shankle bresaola frankfurter. Ea turducken lorem, quis cupim boudin tongue labore pork loin reprehenderit nostrud est fatback pork sunt.
        </p>
        <p>
          Swine andouille pork, do cupim commodo drumstick. Fatback excepteur reprehenderit qui tenderloin consectetur pastrami irure mollit chicken laboris pork. Id magna culpa dolore cupim quis in non meatball salami sunt jowl. Rump drumstick labore magna occaecat nostrud. Anim laboris venison pastrami. Sint hamburger nulla duis rump sunt, officia et cillum eu. Veniam mollit spare ribs eu, filet mignon commodo prosciutto in swine.
        </p>
        <Link to="/about">
          Learn more about me
        </Link>
      </Page>
    ); 
  }
}