import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Apps } from "./screens";
import { Header } from "./components";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/apps">
          <Apps />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
