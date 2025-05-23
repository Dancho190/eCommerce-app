import React from 'react';
import { FaInstagram, FaTelegram, FaGithub, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
        <a href="https://github.com/Dancho190" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
      <p className="footer__text">
        Made with{' '}
        <a href="https://rs.school/" target="_blank" rel="noopener noreferrer">
          RS school
        </a>
      </p>
    </footer>
  );
};

export default Footer;