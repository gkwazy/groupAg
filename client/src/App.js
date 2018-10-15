import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homePage from "./pages/homePage"
import NoMatch from "./pages/NoMatch"
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>

            <Switch>
              <Route exact path="/" component={homePage} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
