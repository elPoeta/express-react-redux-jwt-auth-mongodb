import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Secret from './Secret';
import Signup from './auth/Signup';
import Signout from './auth/Signout';
import Signin from './auth/Signin';

const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/signout' component={Signout} />
            <Route path='/signin' component={Signin} />
            <Route path='/secret' component={Secret} />
        </Switch>
    </div>

);

export default Main;