import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Signup from './auth/Signup';
const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup} />
        </Switch>
    </div>

);

export default Main;