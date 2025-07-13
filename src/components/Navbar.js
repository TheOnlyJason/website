import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/experiences">Dashboard</NavLink></li>
        <li><NavLink to="/fun">Fun</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
