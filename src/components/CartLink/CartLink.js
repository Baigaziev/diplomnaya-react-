import { AppContext } from "../../App";
import "./CartLink.css";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import korzinka from "../../asests/korzinka.png"


export default function CartLink() {
  const { cart } = useContext(AppContext);

  //!Вычислить количество товаров
  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);
  return (
    <div className="CartLink">
      <NavLink to="/cart">
        <img className="icon" src={korzinka} alt="icon" />({total})
        </NavLink>
    </div>
  );
}
