import React from 'react';
import { Link } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div class="row">
          <nav class = "col-lg-12 navbar navbar-expand-lg bg-light">
             <ul class="navbar-nav nav">
               <li>
                  <Link to="/">Home</Link>
               </li>
             </ul>
          </nav>
       </div>
    );
}
 
export default Navigation;