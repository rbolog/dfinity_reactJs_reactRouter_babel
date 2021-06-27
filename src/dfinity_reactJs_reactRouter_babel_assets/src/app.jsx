import React from "react";
import Home from "./components/home";
import Greeting from "./components/greeting";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home name="Base Dfinity + ReactJs: " />
        </Route>
        <Route path="/greeting">
          <Greeting />
        </Route>
      </Switch>
    </Router>
    );
}

export default App;