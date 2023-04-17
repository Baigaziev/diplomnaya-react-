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
      <NavLink to="/cart">Cart ({total})</NavLink>
    </div>
  );
}
