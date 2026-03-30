import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #02040a;
    color: #333;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;
