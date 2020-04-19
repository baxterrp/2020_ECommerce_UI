import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header';
import Footer from './footer';
import Body from './body';

class App extends React.Component{
  render(){
      return (
          <Router>
                <div class="container">
                    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
                    <div>
                        <Header />
                    </div>
                    <div>
                        <Body />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </Router>
    );
 }
}
   
ReactDOM.render(
  <App />,
  document.getElementById('root')
);