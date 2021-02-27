import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo-img" src={logo} alt=""/>
            <nav>
                <a href="#g">Shop</a>
                <a href="#f">Order Review</a>
                <a href="#g">Manage</a>
            </nav>
        </div>
    );
};

export default Header;