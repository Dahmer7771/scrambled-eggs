import React from 'react';
import {
    Route,
    Router,
    Switch,
} from 'react-router-dom';
import history from "../helpers/history";
import HomePage from "./HomePage/HomePage";
import Login from "./Login/Login";
import PersonalAccount from "./PersonalAccount/PersonalAccount";
import RecipePage from "./RecipePage/RecipePage";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/personalAccount" component={PersonalAccount}/>
                    <Route path="/recipes/:id" component={RecipePage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
