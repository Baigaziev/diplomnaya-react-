import { NavLink } from "react-router-dom";
import "./Nav.css";
import CartLink from "../CartLink/CartLink";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li className="NavItem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
        <li className="NavItem">
          <CartLink />
        </li>
      </ul>
    </nav>
  );
}
