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
        <img className="icon" src="https://i.pinimg.com/736x/46/7e/cc/467eccb108b259eed760d84f68642df2.jpg" alt="icon" />({total})
        </NavLink>
    </div>
  );
}
