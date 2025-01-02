// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <button aria-label="Yoga" className="footer-icon-button">
          <img src="/assets/icons/yoga.svg" alt="Yoga" className="footer-icon" />
        </button>
        <button aria-label="Natation" className="footer-icon-button">
          <img src="/assets/icons/natation.svg" alt="Natation" className="footer-icon" />
        </button>
        <button aria-label="Cyclisme" className="footer-icon-button">
          <img src="/assets/icons/cyclisme.svg" alt="Cyclisme" className="footer-icon" />
        </button>
        <button aria-label="Musculation" className="footer-icon-button">
          <img src="/assets/icons/musculation.svg" alt="Musculation" className="footer-icon" />
        </button>
        <p className="footer-copyright">Copyright SportSee 2024</p>
      </div>
      
    </footer>
  );
}

export default Footer;
