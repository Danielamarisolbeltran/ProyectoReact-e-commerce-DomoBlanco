import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems" >
                <h1 className="navbar-logo">Domo Blanco</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Tienda</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        )
    }
};

export default Navbar;


