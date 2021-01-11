import React from 'react';
import '../assets/dist/Nav.css'
import logo from '../assets/img/logo.png'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container d-inline">
        <div className="row d-inline">
          <img src={logo} alt="web-icon"></img>
          <h3 className="navbar-brand mx-2 font-weight-bold">PSD<span>2</span>CSS</h3>
        </div>
      </div>
    </nav>
  );
}

export default Nav;