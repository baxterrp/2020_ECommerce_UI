import React from 'react';
import {Switch, Route} from 'react-router-dom';
import RegistrationForm from './registration';
import LoginForm from './login';
import Home from './home';

function Container(){
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={LoginForm}/>
                <Route path="/register" component={RegistrationForm}/>
            </Switch>
        </div>
    );
}

export default Container;