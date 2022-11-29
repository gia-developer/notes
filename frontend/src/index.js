import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import logo from './assets/logo.svg';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding: 2em 5%;
    font-family: 'Nunito', sans-serif;
  }

  .text--grey {
    color: rgba(0, 0, 0, 0.5);
  }

  .text--orange {
    color: #F28A2E;
  }

  h1, h2, p, a, span {
    line-height: 150%;
  }

  h1, h2, h3 {
    font-style: normal;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.87);
  }

  h1 {
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 2em;
  }

  h1::before {
    content: "";
    width: 32px;
    height: 32px;
    display: flex;
    margin-right: .5em;
    background: url(${logo});
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 18px;
  }

  p, label {
    color: rgba(0, 0, 0, 0.87);
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, textarea {
    margin-top: .7em;
    background: #F6F6F6;
    border-radius: 8px;
    border: none;
    padding: 1em;
    font-size: 14px;
  }

  textarea {
    resize: none;
    font-family: 'Nunito', sans-serif;
  }

  .input--error {
    border: 1px solid #F26E22;
  }
  
  .button {
    font-family: 'Nunito',sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    height: 50px;
    width: max-content;
    border-radius: 8px;
    padding: 0 1.5em;
  }

  .button--float {
    background: #1F98A6;
    color: white;
    position: fixed;
    bottom: 2em;
    right: 5%;
    
    svg {
      margin-right: .3em;
    }
  }

  .button-solid--orange {
    background: #F28A2E;
    color: white;
  }

  .button-line--orange {
    background: none;
    border: 1px solid #F28A2E;
    color: #F28A2E;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
