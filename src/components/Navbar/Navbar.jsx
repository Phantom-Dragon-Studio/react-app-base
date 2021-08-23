import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => (
  <nav className="Navbar">
    <h1 className="navbar-logo">
      React

      <FontAwesomeIcon icon="cog" />
    </h1>
  </nav>
);

export default Navbar;
