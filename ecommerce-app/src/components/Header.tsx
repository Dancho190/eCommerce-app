import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaBars, FaTimes} from 'react-icons/fa';
import logo from '../assets/logoipsum.png'
import './Header.css';

const Header: React.FC = () => {
    const [showBanner, setShowBanner] = useState(true); // Стейты дисплея баннера с сообщением

  return (
    <>
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
       {showBanner && ( // При true отображается баннер
        <div className="shipping-banner">
          <span>Free shipping on orders over 250€</span>
          <FaTimes className="close-banner" onClick={() => setShowBanner(false)} /> {/* Меняем состояние баннера при нажатии на крестик*/}
        </div>
      )}
    </header>
      </>
  );
};

export default Header;