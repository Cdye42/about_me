import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route>
          <Switch>
            <Route exact="" path="/" Component="HomePage" />
            <Route path="/" Component="HomePage" />
          </Switch>
        </Route>
      </div>
    );
  }
}

export default App;
