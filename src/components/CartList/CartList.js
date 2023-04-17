import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import "./CartList.css";

import React, { useContext } from "react";

export default function CartList() {
  //! Получить список товарова и корзинки
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }

  function onItemRemove (product) {
    const newCart = {...cart};
    delete newCart[product.id];
    setCart(newCart);
  }
  //! Получить только ИД товарова в корзинке

  //! Что бы вывести пройтись по товаром
  const productIds = Object.keys(cart);

  const output = products
    //! Удалить все товары которые не в корзинке
    .filter((product) => productIds.includes(product.id))
    //! Вывезти  товары и их количество
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <Link to={"/product" + product.slug}>{product.name}</Link>
        <input
          type="number"
          value={cart[product.id]}
          min={1}
          onChange={(event) => onQuantityChange(product, +event.target.value)}
        />
        <span>{cart[product.id] * product.price}$</span>
        <button onClick={() => onItemRemove(product)}>Remove</button>
      </div>
    ));
  return <div className="CartList">{output}</div>;
}
