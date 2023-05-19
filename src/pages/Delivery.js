import React, { useEffect, useRef } from "react";
import "./Delivery.css";
import delivery1 from "../asests/delivery1.jpg";

export default function Delivery() {
  const bottomRef = useRef(null); // ссылка на последний элемент на странице

  useEffect(() => {
    // автоматический скролл до нижнего уровня страницы
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="Delivery">
      {" "}
      <div ref={bottomRef} /> {/* ссылка на последний элемент */}
      <div className="Delivery-header">
        <h1>Delivery</h1>
        <p>Fast and reliable delivery services</p>
      </div>
      <div className="Delivery-photos">
        <img src={delivery1} alt="Delivery truck" />
      </div>
      <div className="Delivery-info">
        <h2>
          <img
            src="https://fainaidea.com/wp-content/uploads/2014/07/dostavka_edj_kruglosutochno.jpg"
            alt="Delivery truck"
          />
          Fast Delivery
        </h2>
        <p>
          Our delivery services are fast and reliable. We make sure that your
          package arrives at its destination in the shortest time possible.
        </p>
        <h2>Secure Delivery</h2>
        <p>
          Your packages are safe with us. We take extra measures to ensure that
          your packages are delivered securely and without any damage.
        </p>
        <h2>Flexible Delivery Options</h2>
        <p>
          We offer a variety of delivery options to suit your needs. Whether you
          need your package delivered on a specific date or time, we have you
          covered.
        </p>
      </div>
      <div ref={bottomRef} /> {/* ссылка на последний элемент */}
    </div>
  );
}
