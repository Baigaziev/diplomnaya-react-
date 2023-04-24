import { AppContext } from "../../App";
import "./CartLink.css";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";


export default function CartLink() {
  const { cart } = useContext(AppContext);

  //!Вычислить количество товаров
  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);
  return (
    <div className="CartLink">
      <NavLink to="/cart">
        <img className="icon" src="https://img.freepik.com/premium-vector/pink-shopping-cart-semi-flat-color-vector-object_151150-9713.jpg" alt="icon" />({total})
        </NavLink>
    </div>
  );
}
