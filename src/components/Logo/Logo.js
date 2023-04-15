import logo from "../../asests/logo.png";
import { NavLink } from "react-router-dom";
import "./Logo.css";
export default function Logo() {
  return (
    <div className="Logo">
      <NavLink>
        <img src={logo} alt="logo" />
      </NavLink>
    </div>
  );
}
