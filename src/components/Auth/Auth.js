import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="auth-container">
      {user ? (
        <span>
          <Link to="/orders" className="user-name">
            {user.displayName}
          </Link>
          <button className="sign-out" onClick={logOut}>
            Sign out
          </button>
        </span>
      ) : (
        <span>
          <button className="sign-in" onClick={logIn}>
            Sign in
          </button>
        </span>
      )}
    </div>
  );
}
