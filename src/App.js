import React, {Component} from "react";
import {Route, Router} from "react-router-dom";
import "./App.css";

import NavBarComponent from "./components/NavBarComponent";
import Home from "./components/Home";
import Tos from './components/Tos'
import Pp from './components/Pp'
import history from './components/utils/history';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router history={history} component={Home}>
        <div className="App">
          <NavBarComponent/>
          <Route path="/" exact component={Home}/>
          <Route path="/tos" exact component={Tos}/>
          <Route path="/pp" exact component={Pp}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
