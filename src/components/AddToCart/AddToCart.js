import React, { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  function onAddToClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart, //!Положить текущее содержимое в корзинке
      [product.id]: qty, //! Добавить текущий товар
    });
  }
  return (
    <div className="AddToCart">
      {cart[product.id] ? cart[product.id] : 0}
      <button onClick={onAddToClick}>Add to cart</button>
    </div>
  );
}
