import React from "react";
import "./Footer.css";
import logo from "../../asests/logo.png";
import telegramIcon from "../../asests/telegram.png";
import whatsappIcon from "../../asests/whatsapp.png";
import instagramIcon from "../../asests/instagram.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/delivery">Delivery</a>
          </li>
        </ul>
      </div>
      <div className="footer-contact-info">
        <p>
          Phone: <a href="tel:+996702514897">+996702514897</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:albertto_dourio@mail.ru">albertto_dourio@mail.ru</a>
        </p>
      </div>
      <div className="footer-social-icons">
        <a
          href="https://t.me/your_telegram_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={telegramIcon} alt="Telegram" />
        </a>
        <a
          href="https://wa.me/your_whatsapp_number"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
        <a
          href="https://www.instagram.com/your_instagram_username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
}
