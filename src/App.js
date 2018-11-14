import React, { Component } from 'react';
import './App.css';

import NavBarComponent from './components/NavBarComponent'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarComponent/>
        <Home/>
      </div>
    );
  }
}

export default App;
