import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Category</a></li>
            <li><a class="dropdown-item" href="#">Items</a></li>
           
            <Link to="/cart"><li><a class="dropdown-item" href="#">Cart</a></li></Link>
          </ul>
        </li>
        <Link to="/home"> <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li></Link>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
<div className="home1">
  <h1>Welcome to the world of Technologies</h1>
<img src="https://cdn.pixabay.com/photo/2022/07/08/05/38/freelance-work-7308505_640.png"/>
</div>
</div>
    ) 
}

export default NavBar;