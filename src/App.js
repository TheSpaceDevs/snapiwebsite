import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import NavBarComponent from "./components/NavBarComponent";
import Home from "./components/Home";
import Login from "./components/Login"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBarComponent/>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
