import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="Navbar">
        <img className="Navbar-logo" alt="logo">{}</img>
        <ul className=" NavbarItems">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    );
 }

export default Navbar;


