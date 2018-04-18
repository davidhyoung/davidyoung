/**
 * 
 */
import Home from './Home';
import About from './About';
import Samples from './Samples';

export default [
  {
    path: `${process.env.PUBLIC_URL}/`,
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: `${process.env.PUBLIC_URL}/about`,
    name: 'About me',
    component: About,
  },
  {
    path: `${process.env.PUBLIC_URL}/samples`,
    name: 'Samples of my work',
    component: Samples,
  }
];