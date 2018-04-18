/**
 * 
 */
import styled from 'styled-components';
import { breakpoints } from 'App.style';

export default styled.div`
  padding: 3.5em;
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${breakpoints.small}) {
    padding: 0;
  }
`;