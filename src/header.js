import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './navigation';

class Header extends React.Component {
    render(){
        return ( 
            <div>
                <Navigation />
            </div>
        );
    }
}

export default Header;
