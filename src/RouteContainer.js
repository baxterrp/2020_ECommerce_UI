import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Registration from './registration';
import Login from './login';

function Container(){
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Registration}/>
            </Switch>
        </div>
    );
}

export default Container;