import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {About, Apps, Blogs, Home, News, Reports} from "./src/screens";

export default (
  // Switch is added in v4 react-router
  <Router>
    <Switch>
      <Route path="/about">
        <About />
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