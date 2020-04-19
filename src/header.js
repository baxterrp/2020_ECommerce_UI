import React from 'react';

import Navigation from './navigation';

class Header extends React.Component {
    render(props){
        return ( 
		<div>
            <div class = "row drop-bottom">
                <div class="col-lg-11">
                    <h1 class = "text-primary clearfix"><strong>Shopping Cart - title goes here</strong></h1>
                </div>
                <div class="col-lg-1 h3 move-shopping-cart">
                    <span>0 <span class="glyphicon glyphicon-shopping-cart gly-flip-horizontal"></span></span>
                </div>
            </div>
            <Navigation />
        </div>
        );
    }
}

export default Header;
