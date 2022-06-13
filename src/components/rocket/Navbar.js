import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/solar-logo.png';
import '../../scss/Navbar.scss'

function Navbar() {
    return (
      <header>
        <div className='navbar d-flex'>
          <div className="navTitle d-flex">
            <img src ={logo} alt="logo" className="logo" />
            <h1>Space Travelers' Hub</h1>
          </div>

          <div className="navMenu d-flex">
            <NavLink to="/" className="rocket">
              <span>Rockets</span>
            </NavLink>

            <NavLink to="mission" className="rocket">
              <span>Mission</span>
            </NavLink>
            {' '}
            |
            <NavLink to="profile" className="rocket">
              <span>My Profile</span>
            </NavLink>
          </div>
        </div>
      </header>
    );
}
  
export default Navbar;