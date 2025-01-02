// src/pages/NotFound/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="not-found-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
