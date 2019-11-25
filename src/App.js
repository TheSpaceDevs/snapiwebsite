import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Gallery } from "./screens";
import { Header } from "./components";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
