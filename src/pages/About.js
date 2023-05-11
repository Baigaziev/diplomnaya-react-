import React from "react";
import "./About.css";
import photo1 from "../asests/photo1.jpg";
import photo2 from "../asests/photo2.jpg";
import photo3 from "../asests/photo3.jpg";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000"); // указываем адрес сервера Socket.IO

export default function About() {
  const [messages, setMessages] = useState([]); // массив сообщений
  const [inputValue, setInputValue] = useState(""); // значение поля ввода сообщения

  useEffect(() => {
    // обработчик для получения сообщений с сервера
    socket.on("chat message", (message) => {
      setMessages((messages) => [...messages, message]); // добавляем новое сообщение в массив
    });

    // отключаемся от сервера при размонтировании компонента
    return () => {
      socket.disconnect();
    };
  }, []);

  // обработчик для отправки сообщения на сервер
  const sendMessage = () => {
    socket.emit("chat message", inputValue);
    setInputValue(""); // очищаем поле ввода сообщения
  };

  return (
    <div className="About">
      <div className="chat">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div>

        <div className="input">
          <input
            type="text"
            placeholder="Type a message"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />

          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
      <div className="mission-container">
        <div className="mission">
          <h2 className="mission-header">Our Mission</h2>
          <p className="mission-text">
            At our site, we believe that gaming is more than just a hobby, it's
            a lifestyle. We created this site to provide gamers with the best
            gadgets and accessories to enhance their gaming experience. We
            understand the frustration of having low-quality equipment and how
            it can negatively impact gameplay. That's why we offer high-quality
            and reliable products at an affordable price. Our mission is to help
            gamers reach their full potential and have the best gaming
            experience possible.
          </p>
        </div>
      </div>

      <h1>Our Team</h1>
      <div className="team">
        <div className="member">
          <img src={photo2} alt="Team Member 1" />
          <h3>Baigaziev Erzhan</h3>
          <p>Co-Founder, CEO</p>
          <p>
            Baigaziev Erzhan is one of the founders of this site. He is always
            passionate about technology and games, and when he had the
            opportunity to create a gadget store for gamers, Erzhan decided to
            use the opportunity. Since the site was launched, it has devoted a
            lot of time and energy to creating the best experience for gamers by
            offering the best gadgets.
          </p>
          <p>
            Phone: <a href="tel:+996702514897">+996702514897</a>
          </p>
          <a className="link-instagtam" href="https://www.instagram.com/">
            Instagram<i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="member">
          <img src={photo3} alt="Team Member 2" />
          <h3>Baigazieva Aigul</h3>
          <p>Co-Founder, SPONSOR</p>
          <p>
            Baigaziev Augul is the main sponsor of the site, which provides
            support and assistance in the development and promotion of business.
            With its investment, Aigul has enabled the site to get started and
            succeed in selling gadgets to gamers. Thanks to her generosity, the
            site has every opportunity to develop and improve its activities.
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+1234567890</a>
          </p>
          <a className="link-instagtam" href="https://www.instagram.com/">
            Instagram<i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="member">
          <img src={photo1} alt="Team Member 3" />
          <h3>Samira Salmahunova</h3>
          <p>Lead Designer</p>
          <p>
            Salmahunova Samira is one of the leading website designers. She is
            responsible for the design and user interface, making the site
            convenient and attractive to users. Samira has vast experience in
            web design and always strives to make the site as easy and enjoyable
            to use as possible.
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+1234567890</a>
          </p>
          <a className="link-instagtam" href="https://www.instagram.com/">
            Instagram<i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
