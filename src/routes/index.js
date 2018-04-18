/**
 * 
 */
import Home from './Home';
import About from './About';
import Samples from './Samples';

export default [
  {
    path: `/`,
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: `/about`,
    name: 'About me',
    component: About,
  },
  {
    path: `/samples`,
    name: 'Samples of my work',
    component: Samples,
  }
];