import React from "react";
import "./ThankYou.css";

export default function ThankYou() {
  return (
    <div className="ThankYou">
      <div className="ThankYouHeader">
        <img
          src="https://belon.club/uploads/posts/2023-04/1681470010_belon-club-p-ochen-radostnii-chelovek-oboi-2.jpg"
          alt="Thank You Icon"
          className="ThankYouIcon"
        />
        <h1 className="thank">Thank You!</h1>
      </div>
      <p className="thanks">
        Your order has been received. Our specialists will contact you shortly
        to confirm it.
      </p>
      <p className="thanks">
        We appreciate your business and thank you for choosing our products.
        Should you have any questions or need further assistance, please don't
        hesitate to reach out to our customer support team.
      </p>
      <div className="ContactDetails">
        <p>Contact us:</p>
        <p>
          Phone: <a href="tel:+996702514897">+996702514897</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:albertto_dourio@mail.ru">albertto_dourio@mail.ru</a>
        </p>
      </div>
    </div>
  );
}
