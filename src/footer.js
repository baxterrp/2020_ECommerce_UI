import React from 'react';

class Footer extends React.Component {
    render(){
        var year = new Date().getFullYear();
        return <p class="text-center text-muted">Shopping Cart | &copy; Copyright {year}, All Rights Reserved</p>
    }
}

export default Footer;