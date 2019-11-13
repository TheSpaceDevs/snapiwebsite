import React from 'react';
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import About from "./screens/About";
import Apps from "./screens/Apps";

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
