import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Apps from "./components/Apps";

const appHistory = createBrowserHistory();

function App() {
    return (
        <Router history={appHistory}>
            <NavBar/>
            <Switch>
                <Route path="/apps">
                    <Apps />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
