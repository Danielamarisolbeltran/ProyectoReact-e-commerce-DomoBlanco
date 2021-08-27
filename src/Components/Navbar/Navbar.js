import React from 'react'
import './Navbar.css'
// import logo from './Img/Logodomoblanco.jpg'

const Navbar = () => {
    return (
        <nav className="NavbarItems" >
            <img className="navbar-logo">{}</img>
             <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Tienda</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    )
 }

export default Navbar;


