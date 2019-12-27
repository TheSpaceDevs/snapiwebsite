import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {News, Apps, Blogs, Reports, Info, Home} from "./screens";
import { HeaderComponent } from "./components";

export default function App() {
  return (
    <Router>
      <HeaderComponent />
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
        <Route path="/news">
          <News />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
