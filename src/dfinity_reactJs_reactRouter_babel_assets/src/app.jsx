import React from "react";
import Organisation from "./components/organisation";
import Greeting from "./components/greeting";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Organisation name="Base Organisation" />
        </Route>
        <Route path="/greeting">
          <Greeting />
        </Route>
      </Switch>
    </Router>
    );
}

export default App;