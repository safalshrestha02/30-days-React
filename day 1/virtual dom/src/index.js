// index.js
import React from "react";
import ReactDOM from "react-dom";
// To get the root element from the HTML document

// JSX element, header
const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";

const date = "Oct 2, 2020";

// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <small>Date: {date}</small>
    </div>
  </header>
);

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <div className="subscribeForm">
        <h2>SUBSCRIBE</h2>
        <br></br>
        <p>Signup with your email to get updates.</p>
        <br></br>
        <form className="form">
          <input placeholder="first name"></input>
          <input placeholder="last name"></input>
          <input placeholder="email"></input>
        </form>
        <button id="button">Subscribe</button>
      </div>
    </div>
  </main>
);

const copyRight = "Copyright 2020";

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);
