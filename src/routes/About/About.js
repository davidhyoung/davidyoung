/**
 * 
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Page from 'components/Page';

export default class About extends React.Component {

  render() {
    return (
      <Page>
        <h1>About me</h1>
        <p>
          Spicy jalapeno bacon ipsum dolor amet pastrami deserunt anim jerky dolore swine bresaola ut. Dolor doner rump turducken kevin ut magna. Dolore salami kevin dolore do fatback excepteur ullamco nostrud. Ipsum nostrud ham ad duis reprehenderit est chicken pastrami ground round shank. Flank kevin beef short loin, aute ham shankle bresaola frankfurter. Ea turducken lorem, quis cupim boudin tongue labore pork loin reprehenderit nostrud est fatback pork sunt.
        </p>
        <p>
          Swine andouille pork, do cupim commodo drumstick. Fatback excepteur reprehenderit qui tenderloin consectetur pastrami irure mollit chicken laboris pork. Id magna culpa dolore cupim quis in non meatball salami sunt jowl. Rump drumstick labore magna occaecat nostrud. Anim laboris venison pastrami. Sint hamburger nulla duis rump sunt, officia et cillum eu. Veniam mollit spare ribs eu, filet mignon commodo prosciutto in swine.
        </p>
        <p>
          Reprehenderit lorem consectetur adipisicing, magna exercitation sint bresaola t-bone laborum tempor capicola. Velit ham laboris minim irure fatback commodo turkey kielbasa ex. Do occaecat pastrami aliquip. Veniam sirloin commodo, pariatur beef chuck in id mollit jerky do officia brisket ut enim. Chuck filet mignon veniam consequat ut. Boudin filet mignon consequat qui. In short ribs shank, ut burgdoggen tempor consequat sunt.
        </p>
        <Link to="/samples">
          See some samples of my work
        </Link>
      </Page>
    ); 
  }
}