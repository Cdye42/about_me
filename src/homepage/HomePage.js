import React, { Component } from "react";

class HomePage extends Component {
    render{
        <div>
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
          <NavSite></NavSite>
        </header>
        <div className="Main">
          <div id="Part1">
            <h1>My name is Chantelle Dye.</h1>
            <span>I am learning web development.</span>
            <h3>I love learning.</h3>
          </div>
          <div id="Part2">
            <h1>3 reasons for attending Helio</h1>
            <ol>
              <li>Learning is fun</li>

              <li>Change career path</li>

              <li>Endless opportunities</li>
            </ol>
          </div>
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
        return()
    }
}