import React from 'react';
import { Link } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="row">
          <nav className = "col-lg-12 navbar navbar-expand-lg bg-light">
             <ul className="navbar-nav nav">
               <li>
                  <Link to="/">Home</Link>
               </li>
             </ul>
          </nav>
       </div>
    );
}
 
export default Navigation;