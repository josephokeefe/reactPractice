import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>HELLO WORLD!</h1>
          <Card style={{ width: "20rem" }}>
            <CardHeader>
              <h1>Card Header</h1>
            </CardHeader>
            <img
              style={{ height: "180px", width: "100%", display: "block" }}
              src="https://cdn0.wideopenpets.com/wp-content/uploads/2016/01/cow-cover-770x405.jpg"
              alt="Card-img-cap"
            />
            <CardBody>
              <h4> Card Body </h4>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </CardBody>
          </Card>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
