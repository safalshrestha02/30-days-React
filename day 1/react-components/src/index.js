import React from "react";
import ReactDOM from "react-dom";

const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";

const date = "Oct 2, 2020";

const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <small>Date: {date}</small>
    </div>
  </header>
);

const Main = () => (
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

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => <div>{hexaColor()}</div>;

const copyRight = "Copyright 2020";

const Footer = () => (
  // JSX element, footer
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

const App = () => (
  <div className="app">
    <Header />
    <Main />
    <HexaColor />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);
