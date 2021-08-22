import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="Navbar">
    <div><h1 className="bg-green-500">Header</h1></div>
    <div><a href="/main"><p className="bg-blue-800">Main</p></a></div>
    <div><a href="/tools"><p className="bg-green-200">Tools</p></a></div>
  </nav>
);

export default Navbar;
