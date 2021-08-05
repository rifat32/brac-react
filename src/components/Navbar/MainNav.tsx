import React from 'react'
import {
 Link,
    NavLink
  } from 'react-router-dom';

const MainNav = () => {
    return (
      <div className="container bg-light">
  <nav className="navbar navbar-expand-lg navbar-light bg-white my-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="/assets/img/logo.svg"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/services' activeClassName="active" className="nav-link "  href="#">services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/products' activeClassName="active" className="nav-link "  href="#">products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/contact' activeClassName="active" className="nav-link "  href="#">contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about' activeClassName="active" className="nav-link "  href="#">about</NavLink>
        </li>
       
       
      
      </ul>
   
    </div>
  </div>
</nav>
</div>

        
    )
}

export default MainNav
