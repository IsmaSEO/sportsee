// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src="/assets/logo.png" alt="Logo SportSee"/>
        </Link>
      </div>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Accueil
        </NavLink>
        <NavLink to="/user" className={({ isActive }) => (isActive ? 'active' : '')}>
          Profil
        </NavLink>
        <NavLink to="/reglage" className={({ isActive }) => (isActive ? 'active' : '')}>
          Réglage
        </NavLink>
        <NavLink to="/communaute" className={({ isActive }) => (isActive ? 'active' : '')}>
          Communauté
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
