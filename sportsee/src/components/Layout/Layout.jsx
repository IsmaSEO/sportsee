// src/components/Layout/Layout.jsx
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Footer /> 
      <div className="content-wrapper">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
