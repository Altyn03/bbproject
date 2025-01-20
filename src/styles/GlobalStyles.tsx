import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
   ${normalize}

@font-face {
  font-family: 'Gilroy-Bold';
  src: local('Gilroy-Bold'), url(./fonts/Gilroy-Bold.ttf) format('truetype');
}

@font-face {
  font-family: 'Gilroy-Medium';
  src: local('Gilroy-Medium'), url(./fonts/Gilroy-Medium.ttf) format('truetype');
}

@font-face {
  font-family: 'Gilroy-Light';
  src: local('Gilroy-Light'), url(./fonts/Gilroy-Light.ttf) format('truetype');
}

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    background-color: #100E10;
    font-family: 'Roboto', 'Lato', 'Open Sans', 'Gilroy-Bold', sans-serif;
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

  &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-track {
    background: transparent; 
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color:#27282EE5; 
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a3a3a3;
  }
`;

export default GlobalStyle;
