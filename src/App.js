import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          About Chantelle
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
        <div className="Main">
          <div id="Part1">
            <h1>My name is Chantelle Dye.</h1>
            <span>I am learning web development.</span>
            <h3>I love learning.</h3>
          </div>
          <ol id="Part2">
            <h1>3 reasons for attending Helio</h1>

            <li>Learning is fun</li>

            <li>Change career path</li>

            <li>Endless opportunities</li>
          </ol>
          <div id="Part3">
            {" "}
            <h1>My interests are:</h1>
            <ul>
              <li>Family</li>

              <li>Outdoors</li>

              <li>Learning</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
