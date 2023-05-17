import React from 'react';
import "./Footer.css"
import logo from "../../asests/logo.png"

export default function Footer() {
  return (
    <footer className="footer">
  <div className="footer-logo">
    <img src={logo} alt="logo" />
  </div>
  <div className="footer-menu">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/delivery">Delivery</a></li>
    </ul>
  </div>
  <div className="footer-text">
    &copy; {new Date().getFullYear()} All rights reserved
  </div>
</footer>
  );
}







