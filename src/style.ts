import { createGlobalStyle } from 'styled-components'

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

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: #00010d;
    color: #e4e9f2;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', 'Inter', sans-serif;
    font-weight: 600;
  }

  ::selection {
    background: rgba(10, 250, 235, 0.25);
    color: #ffffff;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #02040a;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(217, 222, 229, 0.15);
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(217, 222, 229, 0.3);
  }

  a {
    transition: color 0.3s ease, opacity 0.3s ease;
  }

  button {
    font-family: 'Inter', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
