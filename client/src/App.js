import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homePage from "./pages/homePage"
import NoMatch from "./pages/NoMatch"
import activePage from "./pages/acitvePage"
import linkPage from "./pages/linkPage"
import featuresPage from "./pages/featuresPage"
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
              <Route exact path="/active" component={activePage} />
              <Route exact path="/link" component={linkPage} />
              <Route exact path="/features" component={featuresPage} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
