import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import common from './common';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${common}
`;
