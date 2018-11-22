import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";

import NavBarComponent from "./components/NavBarComponent";
import Home from "./components/Home";
import Auth from './components/utils/auth';
import history from './components/utils/history';
import Callback from "./components/Callback";

const auth = new Auth();

// noinspection JSUnusedLocalSymbols
const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  render() {
    return (
      <Router history={history} component={Home}>
        <div className="App">
          <NavBarComponent auth={auth}/>
          <Route path="/" exact render={(props) => <Home auth={auth} {...props}/>} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
    );
  }
}

export default App;
