import React from 'react';
import {Link} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.css"


export default function Navbar(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light display-6">
        <span class=" h2 mr-3" to="#">Navbar</span>
        

        <div class="" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/Contact">Contact</Link>
            </li>
            
          </ul>
          </div>
      
      </nav>
    );
}