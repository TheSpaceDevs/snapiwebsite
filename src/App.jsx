import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Route exact path="/" component={Home} />
                <Footer/>
            </div>
        </Router>
  );
  }
}

export default App;
