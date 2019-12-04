import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {News, Apps, Blogs, Reports, Info} from "./screens";
import { Header } from "./components";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/reports">
          <Reports />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/apps">
          <Apps />
        </Route>
        <Route path="/">
          <News />
        </Route>
      </Switch>
    </Router>
  );
}
