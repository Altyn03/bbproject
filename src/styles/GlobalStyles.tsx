import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
   ${normalize}

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background-color: #100E10;
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF;
    z-index: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, textarea {
    font: inherit;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
`;

export default GlobalStyle;
