import React from 'react';
import { FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import logo from '../assets/logoipsum.png'
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <button className="sidebar-button" aria-label="Sidebar menu">
        <FaBars />
      </button>
      <div className="logo-container">
        <img src={logo} alt="Aimaq Store Logo" />
        <h1>Aimaq Store</h1>
        </div>
      <nav className="nav-links">
        <a href="/profile" className="nav-icon" aria-label="Profile">
          <FaUser />
        </a>
        <a href="/cart" className="nav-icon" aria-label="Cart">
          <FaShoppingCart />
        </a>
      </nav>
    </header>
  );
};

export default Header;